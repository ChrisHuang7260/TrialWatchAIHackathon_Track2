const concerns = [
  {
    number: 1,
    right: "Freedom of expression",
    status: "Violation found by the UN Human Rights Committee",
    basis: "ICCPR Article 19(2)–(3) · HRC Views ¶¶7.7–7.10",
    basisUrl: "https://docs.un.org/en/CCPR/C/103/D/1815/2008/REV.1",
    reason: "The Philippine resolution records a prison sentence for libel and declines to apply later guidance favoring a fine. In the related international proceeding, the Human Rights Committee held that imprisonment in Adonis’s case was incompatible with the necessity and proportionality requirements of Article 19(3). The Supreme Court resolution decided habeas corpus and retroactivity; it did not decide the ICCPR merits.",
    verify: "Keep the proceedings distinct: the RTC conviction was issued in 2007, the Human Rights Committee adopted its Views in 2011, and the Supreme Court resolved the habeas petition in 2013. Confirm each proposition against the document that actually decided it.",
    locations: ["Resolution ¶2", "Resolution ¶17", "Resolution ¶18", "HRC Views ¶7.10"]
  },
  {
    number: 2,
    right: "Legal assistance and presence at trial",
    status: "Violation found by the UN Human Rights Committee",
    basis: "ICCPR Article 14(3)(d) · HRC Views ¶¶7.2–7.6",
    basisUrl: "https://docs.un.org/en/CCPR/C/103/D/1815/2008/REV.1",
    reason: "The Committee found that the State had not shown that Adonis was notified when counsel withdrew, that replacement counsel was appointed, or that he received timely notice allowing an appeal. It therefore concluded that his Article 14(3)(d) rights were violated. These facts appear in the Human Rights Committee record, not in the 2013 habeas resolution.",
    verify: "The underlying RTC judgment and trial materials are not reproduced in the Supreme Court resolution. A production system should retrieve those records and preserve the distinction between the author’s allegations, the State’s response, and the Committee’s findings.",
    locations: ["HRC Views ¶2.4", "HRC Views ¶7.5", "HRC Views ¶7.6"]
  }
];

const recordPages = [
  {
    label: "SUPREME COURT RESOLUTION",
    title: "Petition and antecedent facts",
    blocks: [
      { type: "byline", text: "REYES, J.:" },
      { type: "p", n: 1, segments: [
        { text: "This is a Petition for the Issuance of the Writ of Habeas Corpus under Rule 102 of the 1997 Rules of Court filed by petitioner Alexander Adonis (Adonis), praying that the Court directs respondent Superintendent Venancio Tesoro (respondent), Director of the Davao Prisons and Penal Farm, to have the body of the former brought before this Court and in the alternative, praying for the application of the Supreme Court Administrative Circular No. 08-2008, which imposes the penalty of a fine instead of imprisonment in Criminal Case No. 48679-2001." }
      ]},
      { type: "heading", text: "Antecedent Facts" },
      { type: "p", n: 2, segments: [
        { text: "In Criminal Case No. 48679-2001, Adonis was convicted by the Regional Trial Court of Davao City (RTC), Branch 17 for Libel, filed against him by then Representative Prospero Nograles. " },
        { concern: 0, text: "He was sentenced to an indeterminate sentence of five (5) months and one (1) day of arresto mayor maximum, as minimum penalty, to four (4) years, six (6) months and one (1) day of prision correccional medium, as maximum penalty. He began serving his sentence at the Davao Prisons and Penal Farm on February 20, 2007." }
      ]},
      { type: "p", n: 3, segments: [
        { text: "A second libel case, docketed as Criminal Case No. 48719-2001 was likewise filed against Adonis by Jeanette L. Leuterio, pending before the RTC of Davao City, Branch 14." }
      ]},
      { type: "p", n: 4, segments: [
        { text: "On December 11, 2007, the Board of Pardons and Parole (BPP) issued an order for the Discharge on Parole of seven (7) inmates in various jails in the country, which included Adonis. The said document was received by the City Parole and Probation Office of Davao on May 2, 2008." }
      ]},
      { type: "p", n: 5, segments: [
        { text: "Meanwhile, on January 25, 2008, this Court issued Administrative Circular No. 08-2008, the subject of which is the “Guidelines in the Observance of a Rule of Preference in the Imposition of Penalties in Libel Cases.”" }
      ]}
    ]
  },
  {
    label: "SUPREME COURT RESOLUTION",
    title: "Antecedent facts — continued",
    blocks: [
      { type: "p", n: 6, segments: [
        { text: "In view of these developments, Adonis, on April 18, 2008 filed with the RTC Branch 17 a Motion to Reopen Case (With Leave of Court), praying for his immediate release from detention and for the modification of his sentence to payment of fine pursuant to the said Circular." }
      ]},
      { type: "p", n: 7, segments: [
        { text: "On May 26, 2008, in Criminal Case No. 48719-2001 before the RTC Branch 14, Adonis moved for his provisional release from detention. The motion was granted by Presiding Judge George Omelio in open court and he was allowed to post bail in the amount of P5,000. Subsequently on even date and after Adonis filed a cash bond and an undertaking, the trial court issued an Order directing the Chief of Davao Penal Colony “to release the accused Alexis Adonis unless he is being held for some other crimes or offenses.” On the same date, the said order was served to the respondent, but the release of Adonis was not effected." }
      ]},
      { type: "p", n: 8, segments: [
        { text: "On May 30, 2008, Adonis filed the instant petition for the issuance of a writ of habeas corpus alleging that his liberty was restrained by the respondent for no valid reason." }
      ]},
      { type: "p", n: 9, segments: [
        { text: "The respondent consequently filed his Comment. Adonis then filed on October 27, 2008 an Urgent Motion to Resolve and on November 7, 2008 a Manifestation and Motion, reiterating all his previous prayers." }
      ]},
      { type: "p", n: 10, segments: [
        { text: "On February 11, 2009, the Court received the letter from the respondent, informing the Court that Adonis had been released from confinement on December 23, 2008 after accepting the conditions set forth in his parole and with the advise to report to the City Parole and Probation Officer of Davao." }
      ]},
      { type: "heading", text: "The Court’s Ruling" },
      { type: "p", n: 11, segments: [{ text: "The petition is without merit." }]},
      { type: "p", n: 12, segments: [
        { text: "The ultimate purpose of the writ of habeas corpus is to relieve a person from unlawful restraint. The writ exists as a speedy and effectual remedy to relieve persons from unlawful restraint and as an effective defense of personal freedom. It is issued only for the lone purpose of obtaining relief for those illegally confined or imprisoned without sufficient legal basis. It is not issued when the person is in custody because of a judicial process or a valid judgment." }
      ]}
    ]
  },
  {
    label: "SUPREME COURT RESOLUTION",
    title: "The Court’s ruling",
    blocks: [
      { type: "p", n: 13, segments: [{ text: "Section 4, Rule 102 of the Revised Rules of Court provides when a writ must not be allowed or discharge authorized, to wit:" }]},
      { type: "quote", text: "SEC. 4. When writ not allowed or discharge authorized. — If it appears that the person alleged to be restrained of his liberty is in the custody of an officer under process issued by a court or judge or by virtue of a judgment or order of a court of record, and that the court or judge had jurisdiction to issue the process, render the judgment, or make the order, the writ shall not be allowed; or if the jurisdiction appears after the writ is allowed, the person shall not be discharged by reason of any informality or defect in the process, judgment, or order. Nor shall anything in this rule be held to authorize the discharge of a person charged with or convicted of an offense in the Philippines, or of a person suffering imprisonment under lawful judgment." },
      { type: "p", n: 14, segments: [
        { text: "In the instant case, Adonis was convicted for libel by the RTC Branch 17, in Criminal Case No. 48679-2001. Since his detention was by virtue of a final judgment, he is not entitled to the Writ of Habeas Corpus. He was serving his sentence when the BPP granted him parole, along with six (6) others, on December 11, 2007." }
      ]},
      { type: "p", n: 15, segments: [
        { text: "While it is true that a convict may be released from prison on parole when he had served the minimum period of his sentence; the pendency of another criminal case, however, is a ground for the disqualification of such convict from being released on parole. Notably, at the time he was granted the parole, the second libel case was pending before the RTC Branch 14. In fact, even when the instant petition was filed, Criminal Case No. 48719-01 was still pending. The issuance of the writ under such circumstance was, therefore, proscribed. There was basis for the respondent to deny his immediate release at that time." }
      ]},
      { type: "p", n: 16, segments: [
        { text: "Further, Adonis seeks the retroactive application of Administrative Circular No. 08-2008, citing Fermin v. People, where the Court preferred the imposition of the fine rather than imprisonment under the circumstances of the case. Administrative Circular No. 08-2008, was issued on January 25, 2008 and provides the “guidelines in the observance of a rule of preference in the imposition of penalties in libel cases.” The pertinent portions read as follows:" }
      ]}
    ]
  },
  {
    label: "SUPREME COURT RESOLUTION",
    title: "Penalty guidance and disposition",
    blocks: [
      { type: "quote", segments: [
        { text: "All courts and judges concerned should henceforth take note of the foregoing rule of preference set by the Supreme Court on the matter of the imposition of penalties for the crime of libel bearing in mind the following principles:" },
        { concern: 0, text: "1. This Administrative Circular does not remove imprisonment as an alternative penalty for the crime libel under Article 355 of the Revised Penal Code;" },
        { text: "2. The Judges concerned may, in the exercise of sound discretion, and taking into consideration the peculiar circumstances of each case, determine whether the imposition of a fine alone would best serve the interests of justice or whether forbearing to impose imprisonment would depreciate the seriousness of the offense, work violence on the social order, or otherwise be contrary to the imperative of justice; 3. Should only a fine be imposed and the accused be unable to pay the fine, there is no legal obstacle to the application of the Revised Penal Code provision on subsidiary imprisonment." }
      ]},
      { type: "p", n: 18, segments: [
        { concern: 0, text: "A clear reading of the Administrative Circular No. 08-2008 and considering the attendant circumstances of the case, the benefits of the administrative circular can not be given retroactive effect in Criminal Case No. 48679-2001. It is too late in the day for Adonis to raise such argument considering that Criminal Case No. 48679-2001 has already become final and executory; and he had, in fact, already commenced serving his sentence." },
        { text: " Eventually, he was released from confinement on December 23, 2008 after accepting the conditions of the parole granted to him." }
      ]},
      { type: "disposition", text: "WHEREFORE, the petition is DISMISSED.\n\nSO ORDERED." },
      { type: "p", n: 20, segments: [{ text: "Sereno, C.J., (Chairperson), Leonardo-De Castro, Bersamin, and Villarama, Jr., JJ., concur." }]},
      { type: "footnotes", text: "[1] Rollo, pp. 3–21.\n[2] Id. at 36–37.\n[3] Id. at 15.\n[4] Id. at 4.\n[5] Id. at 5.\n[6] Id.\n[7] Id. at 5, 22–23.\n[8] Id. at 27–35.\n[9] Id. at 24.\n[10] Id. at 26.\n[11] Id. at 25.\n[12] Id. at 6.\n[13] Id. at 3–21.\n[14] Id. at 62–73.\n[15] Id. at 81–85.\n[16] Id. at 86–89.\n[17] Id. at 92.\n[18] Fletcher v. Director of Bureau of Corrections, UDK-14071, July 17, 2009, 593 SCRA 265, 270, citing Barredo v. Hon. Vinarao, 555 Phil. 823, 827 (2007).\n[19] Rollo, pp. 5, 22–23.\n[20] Supra note 18, at 271.\n[21] Rollo, p. 5.\n[22] G.R. No. 157643, March 28, 2008, 550 SCRA 132.\n[23] Rollo, p. 37." }
    ]
  },
  {
    label: "RELATED HUMAN-RIGHTS FINDING",
    title: "Adonis v. Philippines — linked findings",
    blocks: [
      { type: "sourceNote", text: "The following passages are from the UN Human Rights Committee’s Views, CCPR/C/103/D/1815/2008/Rev.1. They are a separate international proceeding concerning the same underlying libel conviction." },
      { type: "p", n: "2.4", prefix: "HRC", segments: [
        { concern: 1, text: "He claims that, since he was not notified of the fact that he was no longer represented and he was not assigned an ex officio counsel, he was convicted in absentia. Also, he could not appeal against this decision within the legally established timeframe of 10 days." }
      ]},
      { type: "p", n: "7.5", prefix: "HRC", segments: [
        { concern: 1, text: "The Committee notes that the State party does not provide evidence showing that the Court sought to notify the author of the withdrawal of his lawyer, and the decision of the Court is unclear as to whether another counsel was appointed to represent the author. The State party does not show evidence either that the author was given timely enough notice of the Court’s decision to allow him to file an appeal." }
      ]},
      { type: "p", n: "7.6", prefix: "HRC", segments: [
        { concern: 1, text: "In light of all the above, the Committee concludes that the author’s rights under article 14, paragraph 3 (d), have been violated." }
      ]},
      { type: "p", n: "7.10", prefix: "HRC", segments: [
        { concern: 0, text: "In light of the above, the Committee considers that, in the present case the sanction of imprisonment imposed on the author was incompatible with article 19, paragraph 3, of the Covenant." }
      ]},
      { type: "p", n: 8, prefix: "HRC", segments: [
        { text: "The Human Rights Committee, acting under article 5, paragraph 4, of the Optional Protocol to the International Covenant on Civil and Political Rights, is of the view that the facts before the Committee disclose a violation by the Philippines of articles 14, paragraph 3, and 19 of the Covenant." }
      ]},
      { type: "sourceLinks" }
    ]
  }
];
