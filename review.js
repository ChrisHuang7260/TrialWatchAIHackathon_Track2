let current = 0;
const done = new Set();
const $ = id => document.getElementById(id);
const demo = new URLSearchParams(location.search).get("demo") === "1";

function buildSample() {
  const host = $("sheets");
  const cover = document.createElement("section");
  cover.className = "sheet decision-cover";
  cover.innerHTML = `
    <div class="sheet-head"><span>OFFICIAL CASE SAMPLE</span><span>710 PHIL. 298</span></div>
    <div class="court-name">REPUBLIC OF THE PHILIPPINES<br>SUPREME COURT · FIRST DIVISION</div>
    <div class="docket">G.R. No. 182855 · June 5, 2013</div>
    <h1>Adonis, et al.<br><span>v.</span><br>Tesoro</h1>
    <div class="case-type">R E S O L U T I O N</div>
    <p class="case-parties">Alexander “Lex” Adonis, the Center for Media Freedom and Responsibility, and the National Union of Journalists of the Philippines, petitioners<br><b>v.</b><br>Superintendent Venancio Tesoro, Director, Davao Prisons and Penal Farm, respondent</p>
    <div class="source-card"><b>Source record</b><br>Supreme Court of the Philippines E-Library<br><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/56053" target="_blank" rel="noopener">Open official resolution ↗</a></div>
    <p class="record-note">Actual judicial resolution. Paragraph numbers and colored violation markers are added by FairTrial for navigation; they are not part of the original document.</p>`;
  host.append(cover);

  recordPages.forEach((page, index) => {
    const sheet = document.createElement("section");
    sheet.className = "sheet resolution-sheet";
    sheet.id = `page${index + 1}`;

    const head = document.createElement("div");
    head.className = "sheet-head";
    head.innerHTML = `<span>${page.label}</span><span>${index + 1} / ${recordPages.length}</span>`;
    sheet.append(head);

    const title = document.createElement("h2");
    title.className = "page-title";
    title.textContent = page.title;
    sheet.append(title);

    const body = document.createElement("div");
    body.className = "resolution-body";
    page.blocks.forEach(block => body.append(renderBlock(block)));
    sheet.append(body);

    const foot = document.createElement("div");
    foot.className = "sheet-foot";
    foot.innerHTML = `<span>${page.label === "SUPREME COURT RESOLUTION" ? "G.R. No. 182855 · 5 June 2013" : "CCPR/C/103/D/1815/2008/REV.1"}</span><span>${index + 1}</span>`;
    sheet.append(foot);
    host.append(sheet);
  });

  $("outline0").href = "#flag0";
  $("outline1").href = "#flag1";
  document.querySelector(".record-heading span:last-child").textContent = "Complete resolution + linked HRC findings";
  selectConcern(0, false);
}

function renderBlock(block) {
  if (block.type === "heading") {
    const heading = document.createElement("h3");
    heading.className = "record-section";
    heading.textContent = block.text;
    return heading;
  }
  if (block.type === "byline") {
    const byline = document.createElement("p");
    byline.className = "record-byline";
    byline.textContent = block.text;
    return byline;
  }
  if (block.type === "disposition") {
    const disposition = document.createElement("div");
    disposition.className = "disposition";
    disposition.textContent = block.text;
    return disposition;
  }
  if (block.type === "footnotes" || block.type === "sourceNote") {
    const note = document.createElement("div");
    note.className = block.type === "footnotes" ? "footnote-note" : "source-note";
    note.textContent = block.text;
    return note;
  }
  if (block.type === "sourceLinks") {
    const links = document.createElement("div");
    links.className = "source-links";
    links.innerHTML = `<a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/56053" target="_blank" rel="noopener">Supreme Court resolution ↗</a><a href="https://docs.un.org/en/CCPR/C/103/D/1815/2008/REV.1" target="_blank" rel="noopener">UN Human Rights Committee Views ↗</a>`;
    return links;
  }

  const element = document.createElement(block.type === "quote" ? "blockquote" : "p");
  element.className = block.type === "quote" ? "court-quote" : "record-paragraph";
  if (block.type === "p") {
    const paragraphNumber = document.createElement("span");
    paragraphNumber.className = "paragraph-number";
    paragraphNumber.textContent = `${block.prefix ? block.prefix + " " : "¶"}${block.n}`;
    element.append(paragraphNumber);
  }
  if (block.segments) appendSegments(element, block.segments);
  else element.append(document.createTextNode(block.text));
  return element;
}

function appendSegments(parent, segments) {
  segments.forEach(segment => {
    if (Object.prototype.hasOwnProperty.call(segment, "concern")) {
      parent.append(createHighlight(segment.concern, segment.text));
    } else {
      parent.append(document.createTextNode(segment.text));
    }
  });
}

function createHighlight(concernIndex, text) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "highlight resolution-highlight";
  button.dataset.concern = String(concernIndex);
  if (!document.getElementById(`flag${concernIndex}`)) button.id = `flag${concernIndex}`;
  button.setAttribute("aria-label", `Violation ${concerns[concernIndex].number}: ${concerns[concernIndex].right}`);
  button.onclick = () => selectConcern(concernIndex, false);

  const badge = document.createElement("span");
  badge.className = "violation-number";
  badge.textContent = concerns[concernIndex].number;
  badge.setAttribute("aria-hidden", "true");
  const words = document.createElement("span");
  words.textContent = text;
  button.append(badge, words);
  return button;
}

function selectConcern(index, shouldScroll) {
  current = index;
  const concern = concerns[index];
  $("panel").hidden = false;
  $("pages").classList.add("mobilepad");
  $("right").textContent = concern.right;
  $("basis").textContent = concern.basis;
  $("basis").href = concern.basisUrl;
  $("reason").textContent = concern.reason;
  $("verify").textContent = concern.verify;
  $("source").textContent = `VIOLATION ${concern.number} · ${concern.locations.length} LINKED PASSAGES`;
  $("finding-status").textContent = concern.status;
  $("position").textContent = `Violation ${concern.number} of ${concerns.length}`;

  document.querySelectorAll(".highlight").forEach(element => {
    const selected = Number(element.dataset.concern) === index;
    element.classList.toggle("active", selected);
    element.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll(".outline a").forEach((element, i) => element.classList.toggle("active", i === index));
  $("panel").querySelector("details").open = false;
  updateStatus();
  if (shouldScroll) $(`flag${index}`).scrollIntoView({ behavior: "smooth", block: "center" });
}

function navigateConcern(step) {
  selectConcern((current + step + concerns.length) % concerns.length, true);
}

function closePanel() {
  $("panel").hidden = true;
  $("pages").classList.remove("mobilepad");
}

function markReviewed() {
  done.has(current) ? done.delete(current) : done.add(current);
  updateStatus();
}

function updateStatus() {
  $("reviewed").textContent = done.has(current) ? "Reviewed ✓ · Undo" : "Mark as reviewed ✓";
  $("status").textContent = `${done.size} of ${concerns.length} violations reviewed`;
}

$("toggle").onchange = event => $("sheets").classList.toggle("hide-highlights", !event.target.checked);

async function docxText(file) {
  const buffer = await file.arrayBuffer();
  const view = new DataView(buffer);
  let end = -1;
  for (let i = buffer.byteLength - 22; i >= Math.max(0, buffer.byteLength - 65557); i--) {
    if (view.getUint32(i, true) === 0x06054b50) { end = i; break; }
  }
  if (end < 0) throw Error("Invalid DOCX");
  let offset = view.getUint32(end + 16, true);
  const count = view.getUint16(end + 10, true);
  for (let n = 0; n < count; n++) {
    if (view.getUint32(offset, true) !== 0x02014b50) throw Error("Invalid archive");
    const method = view.getUint16(offset + 10, true);
    const size = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const local = view.getUint32(offset + 42, true);
    const name = new TextDecoder().decode(new Uint8Array(buffer, offset + 46, nameLength));
    if (name === "word/document.xml") {
      const start = local + 30 + view.getUint16(local + 26, true) + view.getUint16(local + 28, true);
      let blob = new Blob([buffer.slice(start, start + size)]);
      if (method === 8) blob = await new Response(blob.stream().pipeThrough(new DecompressionStream("deflate-raw"))).blob();
      else if (method !== 0) throw Error("Unsupported compression");
      const xml = new DOMParser().parseFromString(await blob.text(), "application/xml");
      if (xml.querySelector("parsererror")) throw Error("Invalid document XML");
      return Array.from(xml.getElementsByTagNameNS("*", "p"))
        .map(p => Array.from(p.getElementsByTagNameNS("*", "t")).map(t => t.textContent).join(""))
        .join("\n\n");
    }
    offset += 46 + nameLength + extraLength + commentLength;
  }
  throw Error("Document text not found");
}

async function openUploaded() {
  let file;
  try { file = await loadRecord(); } catch {}
  $("outline").hidden = true;
  $("highlight-toggle").hidden = true;
  $("show-panel").hidden = true;
  $("count").textContent = "Reader mode";
  $("mode").textContent = "YOUR RECORD";
  $("pages").replaceChildren();
  $("panel").className = "float empty";
  $("panel").innerHTML = '<div class="eyebrow">DOCUMENT WORKSPACE</div><h2>Your record.<br>Your review.</h2><p>No AI analysis has been run on this file.</p><p>Explore the Adonis sample to see multiple passages linked by a shared violation number.</p><a href="review.html?demo=1">Explore highlighted sample ↗</a>';

  const notice = document.createElement("div");
  notice.className = "notice";
  notice.textContent = file ? "Full record reader · This file stays in your browser. AI highlighting is demonstrated in the sample only." : "No local record found. Return to the main page to choose a file, or explore the sample.";
  $("pages").append(notice);
  if (!file) return;

  $("filename").textContent = file.name;
  const url = URL.createObjectURL(file);
  window.addEventListener("pagehide", () => URL.revokeObjectURL(url));
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "pdf") {
    const iframe = document.createElement("iframe");
    iframe.className = "pdf";
    iframe.title = "Full uploaded PDF trial record";
    iframe.src = url;
    $("pages").append(iframe);
  } else {
    const text = document.createElement("div");
    text.className = "filetext";
    text.textContent = "Opening full text…";
    $("pages").append(text);
    try {
      text.textContent = extension === "docx" ? await docxText(file) : await file.text();
      if (extension === "docx") notice.textContent += " DOCX displays document-body text; original layout, headers, and notes are available in the original file.";
    } catch {
      text.textContent = "This browser could not display the document. Open the original file below.";
    }
  }
  const original = document.createElement("a");
  original.className = "openfile";
  original.href = url;
  original.target = "_blank";
  original.rel = "noopener";
  original.textContent = "Open original file ↗";
  $("pages").append(original);
  document.querySelector(".layout").style.gridTemplateColumns = "minmax(0,1fr) minmax(280px,330px)";
}

if (demo) buildSample();
else openUploaded();
