export const ethicsDomain = {
  id: "ethics",
  name: "Ethical/Legal/Professional",
  weight: 15,
  color: "#7C4DCD",
  icon: "🤝",
  description: "APA Ethics Code, legal issues, professional standards",
  topics: [
    "APA Ethical Principles and Standards",
    "Informed consent and confidentiality",
    "Dual relationships and boundaries",
    "Mandatory reporting requirements",
    "Tarasoff and duty to warn/protect",
    "Competence and scope of practice",
    "Record keeping and documentation",
    "Telehealth ethics and regulations",
    "Psychologist impairment and self-care",
    "HIPAA Privacy and Security Rules",
    "Forensic psychology ethics (SGFP 2013)",
    "PSYPACT and interjurisdictional practice",
    "Ethics in digital/online practice and social media",
    "Colleague impairment and intervention",
  ],
  questions: [
    {
      q: "Under the Tarasoff ruling, a psychologist has a duty to protect when:",
      options: [
        "A client reports past criminal activity",
        "A client makes a credible threat of violence toward an identifiable third party",
        "A client expresses general anger toward society",
        "A client discusses violent fantasies in therapy",
      ],
      correct: 1,
      explanation:
        "The Tarasoff v. Regents of the University of California (1976) ruling established that mental health professionals have a duty to protect identifiable potential victims when a client makes a serious, credible threat of violence. This may involve warning the potential victim, notifying police, or taking other reasonable steps.",
    },
    {
      q: "According to the APA Ethics Code, a psychologist who discovers a colleague engaging in clearly unethical behavior should FIRST:",
      options: [
        "Report to the APA Ethics Committee immediately",
        "Report to the state licensing board",
        "Attempt to resolve the issue informally if appropriate",
        "Contact the colleague's clients",
      ],
      correct: 2,
      explanation:
        "APA Ethics Code Standard 1.04 states that when psychologists believe an ethical violation has occurred, they should first attempt to resolve the matter informally by bringing it to the attention of the individual, if feasible and if doing so would not violate confidentiality.",
    },
    {
      q: "Which of the following is the MOST accurate statement about dual relationships?",
      options: [
        "All dual relationships are unethical and must be avoided",
        "Dual relationships are prohibited only in rural settings",
        "Dual relationships are not inherently unethical but should be avoided when they could impair objectivity",
        "Dual relationships are acceptable as long as the client consents",
      ],
      correct: 2,
      explanation:
        "The APA Ethics Code (Standard 3.05) recognizes that not all multiple relationships are unethical. They become problematic when they could reasonably be expected to impair the psychologist's objectivity, competence, or effectiveness, or risk exploitation or harm.",
    },
    {
      q: "A psychologist receives a subpoena for a client's records. The BEST course of action is to:",
      options: [
        "Immediately comply and send all records",
        "Ignore the subpoena entirely",
        "Contact the client, seek consultation, and assert privilege if appropriate",
        "Destroy the records to protect confidentiality",
      ],
      correct: 2,
      explanation:
        "A subpoena is not the same as a court order. The psychologist should notify the client, seek legal consultation, assert therapeutic privilege if appropriate, and only release records with client consent, a valid court order, or when legally mandated.",
    },
    {
      q: "Informed consent for psychotherapy must include all of the following EXCEPT:",
      options: [
        "Nature and anticipated course of therapy",
        "Fees and billing arrangements",
        "Guaranteed treatment outcomes",
        "Limits of confidentiality",
      ],
      correct: 2,
      explanation:
        "Informed consent must include information about the nature of treatment, procedures, risks and benefits, fees, confidentiality and its limits, and the right to withdraw. Psychologists should never guarantee treatment outcomes.",
    },
    {
      q: "When providing telepsychology services across state lines, a psychologist must:",
      options: [
        "Only be licensed in their home state",
        "Be licensed in the state where the client is physically located",
        "Obtain a special federal telepsychology license",
        "Only provide services to clients who sign special waivers",
      ],
      correct: 1,
      explanation:
        "Psychologists must be licensed in the jurisdiction where the client is physically located at the time of service. The APA Guidelines for Telepsychology (2013) and PSYPACT (Psychology Interjurisdictional Compact) address cross-state practice. Psychologists must also ensure HIPAA-compliant technology, inform clients of risks/benefits, and have emergency protocols.",
    },
    {
      q: "A psychologist's BEST course of action regarding social media interactions with current clients is to:",
      options: [
        "Accept all friend/follow requests to build rapport",
        "Establish clear boundaries and generally avoid social media connections",
        "Use social media to monitor clients' functioning between sessions",
        "Only connect with clients on professional platforms like LinkedIn",
      ],
      correct: 1,
      explanation:
        "The APA recommends establishing clear policies about social media interactions and generally avoiding social media connections with current clients to maintain professional boundaries and protect confidentiality. Policies should be discussed during informed consent. Searching for client information online without consent raises ethical concerns.",
    },
    {
      q: "A psychologist realizes she made an error in a psychological report that was submitted to court. According to the APA Ethics Code, she should:",
      options: [
        "Do nothing since the report has already been submitted",
        "Take reasonable steps to correct the error, including notifying relevant parties",
        "Only correct it if the client specifically requests a correction",
        "Wait to see if anyone notices the error"
      ],
      correct: 1,
      explanation: "Standard 2.01(b) requires psychologists to take reasonable steps to correct errors in their work when they become aware of them. This includes scientific, professional, and public statements. In forensic contexts, this may mean filing an amended report or notifying the court. Integrity requires acknowledging and correcting mistakes proactively, even when uncomfortable. Document the error, correction, and notification in records."
    },
    {
      q: "According to the APA Ethics Code, psychologists may provide services to individuals with whom they have a pre-existing relationship (such as friends or family) when:",
      options: [
        "The relationship is disclosed in informed consent",
        "The client specifically requests services",
        "It would not be feasible or there is risk of harm from NOT providing services, and the relationship is not likely to impair objectivity",
        "Such services are never permissible under any circumstances"
      ],
      correct: 2,
      explanation: "Standard 3.05 states that multiple relationships are not unethical IF they would not reasonably be expected to impair objectivity or cause exploitation/harm. Standard 10.02 allows therapy with individuals with whom psychologists have pre-existing relationships only when not feasible to avoid AND when failure to provide services might cause harm. Examples: rural settings with no alternatives, emergency situations. Even when permitted, carefully document rationale and manage boundaries. Generally avoid when possible."
    },
    {
      q: "A 16-year-old client reveals she is sexually active. Her parents, who are paying for treatment, ask the psychologist what the client discusses in therapy. The psychologist should:",
      options: [
        "Provide full disclosure since parents are paying",
        "Provide no information without the adolescent's consent",
        "Discuss the general nature of treatment while protecting specific confidences as agreed in informed consent",
        "Tell the parents to ask their daughter directly"
      ],
      correct: 2,
      explanation: "With minors, psychologists balance legal rights (parents typically have right to treatment information), therapeutic relationship (confidentiality supports openness), and client welfare. Best practice: establish confidentiality parameters during informed consent with both adolescent and parents—general progress shared, specific content protected unless safety concerns. Address this scenario: some states recognize 'mature minor' doctrine; sexual activity alone isn't a safety risk requiring disclosure. Involves nuanced judgment considering state law, developmental level, therapeutic relationship, and clinical risk."
    },
    {
      q: "After terminating therapy with a client, what is the MINIMUM time period the APA Ethics Code requires before a psychologist may enter into a romantic/sexual relationship with that former client?",
      options: [
        "6 months",
        "1 year",
        "2 years",
        "Such relationships are prohibited regardless of time elapsed"
      ],
      correct: 2,
      explanation: "Standard 10.08 prohibits sexual intimacies with former therapy clients for at least 2 years after termination. Even after 2 years, such relationships are permissible ONLY in the most unusual circumstances (burden on psychologist to demonstrate no exploitation). Factors: treatment duration, intensity, client vulnerability, termination circumstances. Many state laws are MORE restrictive (some prohibit forever). Ethics committees rarely accept justifications. Supervisees and students have different timelines (Standard 7.07). Strong prohibition reflects power differential and potential harm."
    },
    {
      q: "A psychologist receives a request for records from an attorney representing her client's spouse in a custody dispute. The psychologist should:",
      options: [
        "Release the records immediately to comply with the legal request",
        "Refuse to release any records under any circumstances",
        "Contact the client to obtain authorization before releasing records",
        "Release only records that favor the client"
      ],
      correct: 2,
      explanation: "Psychologists don't release confidential information without appropriate authorization (Standard 4.05). A letter from an attorney is NOT sufficient authorization unless accompanied by client consent or valid court order (not just subpoena). Always verify authorization directly with the client. If a subpoena is received, assert privilege, notify client, and seek consultation/legal advice. Only release with: 1) signed client authorization, 2) court order, or 3) legal mandate (e.g., abuse reporting). Protect client confidentiality until legally required to release."
    },
    {
      q: "A psychologist discovers that a colleague has been inappropriately billing insurance for services not provided. After attempting informal resolution, the colleague refuses to change practices. The psychologist's NEXT step should be:",
      options: [
        "Ignore it since informal resolution was attempted",
        "Report to the state licensing board and/or insurance fraud unit",
        "Publicize the unethical behavior on social media",
        "Confront the colleague more forcefully"
      ],
      correct: 1,
      explanation: "Standard 1.05: When informal resolution is unsuccessful or inappropriate (e.g., clear violation, client welfare risk, illegal activity), psychologists take further action including reporting to licensing boards, ethics committees, or appropriate authorities. Insurance fraud is illegal and must be reported. Document attempts at informal resolution. While some fear reporting colleagues, the Ethics Code requires it when informal approaches fail and violations are substantial. Client protection and profession integrity outweigh colleague relationships."
    },
    {
      q: "A client makes credible homicidal threats against their employer. Under the Tarasoff duty to protect, the psychologist should:",
      options: [
        "Maintain absolute confidentiality to preserve the therapeutic relationship",
        "Take reasonable steps to protect the intended victim, which may include warning, notifying police, or hospitalization",
        "Only warn if the client gives permission",
        "Terminate therapy immediately"
      ],
      correct: 1,
      explanation: "Tarasoff II (1976) established a duty to protect (not just warn) when: 1) serious threat, 2) identifiable victim, 3) credible/imminent. Reasonable steps vary but may include warning the victim, notifying police, or hospitalization. Check state law—some states have Tarasoff statutes, others explicitly reject it, some are permissive ('may' disclose) vs. mandatory ('shall'). Document thoroughly: threat assessment, consultation, actions taken, rationale. Balance client confidentiality with public safety. Inform clients of confidentiality limits during informed consent."
    },
    {
      q: "When obtaining informed consent for therapy, psychologists must include information about all EXCEPT:",
      options: [
        "The nature and anticipated course of therapy",
        "Fees and billing arrangements",
        "Limits of confidentiality",
        "The psychologist's personal religious beliefs"
      ],
      correct: 3,
      explanation: "Standard 10.01 requires informed consent to include: nature/purpose of therapy, risks/benefits, confidentiality limits, financial arrangements, involvement of third parties, right to withdraw, and alternative treatments. Psychologist's personal religious beliefs aren't required unless directly relevant to treatment approach. Informed consent is ongoing (not one-time), documented, and provided in understandable language. With diminished capacity clients, obtain assent + guardian consent. Special considerations for mandated clients (voluntary participation despite referral source)."
    },
    {
      q: "A psychologist terminates therapy with a client who owes a significant balance for services. This action is:",
      options: [
        "Always unethical regardless of circumstances",
        "Ethical if the psychologist provides pretermination counseling and referrals, unless client is in crisis",
        "Only ethical if the client agrees to termination",
        "Ethical without any additional steps required"
      ],
      correct: 1,
      explanation: "Standard 10.10 permits termination when clients don't pay fees (after reasonable notice), BUT psychologists must provide pretermination counseling, referrals, and cannot abandon clients in crisis. Document attempts to resolve financial issues, offer payment plans, discuss pro bono/sliding scale options. If termination proceeds, offer referrals to low-cost alternatives. Never terminate abruptly during crisis. Balance business needs with client welfare. Some states have specific requirements about financial termination."
    },
    {
      q: "A psychologist treating a client who is a healthcare worker learns the client is impaired by substance use while at work. The psychologist should:",
      options: [
        "Maintain confidentiality unless the client gives permission to report",
        "Report immediately to the client's employer",
        "Report to the state licensing board for healthcare professionals if required by law and after discussing with client",
        "Terminate therapy to avoid liability"
      ],
      correct: 2,
      explanation: "This depends on state law. Some states mandate reporting of impaired healthcare professionals; others leave it to psychologist discretion. Check state statutes. If mandatory reporting applies, inform the client, encourage self-report, but ultimately comply with legal requirements. If permissive, use ethical decision-making: consider harm to patients, likelihood client will address impairment, therapeutic relationship. Document consultation, decision-making process. Impaired professional reporting statutes often provide immunity and rehabilitation options rather than purely punitive approaches."
    },
    {
      q: "According to the APA Record Keeping Guidelines, psychologists should retain full clinical records for:",
      options: [
        "3 years after the last service",
        "7 years after the last service (or 3 years after a minor reaches majority)",
        "Indefinitely",
        "Only while the client is in active treatment"
      ],
      correct: 1,
      explanation: "APA Record Keeping Guidelines (2007) recommend retaining records for 7 years after the last contact for adults, or 3 years after a minor reaches age of majority (whichever is longer). However, state laws and institutional policies vary—some require longer retention. HIPAA requires 6 years. When in conflict, follow the most stringent requirement. Retain longer if ongoing litigation or ethical/licensing complaints. Disposal must be secure (shred, wipe digital files) to maintain confidentiality. Critical for EPPP: know APA guidelines AND that state law may differ."
    },
    {
      q: "A psychologist is subpoenaed to testify about a client in a legal proceeding. The psychologist should:",
      options: [
        "Immediately comply and testify fully",
        "Assert psychologist-patient privilege and not testify under any circumstances",
        "Notify the client, assert privilege if applicable, and seek legal consultation/release",
        "Destroy all records to protect confidentiality"
      ],
      correct: 2,
      explanation: "A subpoena is a request, not a court order. Steps: 1) Notify client, 2) Assert privilege (belongs to client, not psychologist), 3) Seek client authorization to release OR 4) Seek legal consultation, 5) Only testify if court orders (after privilege claim denied). Privilege varies by state and situation (doesn't apply in child abuse cases, custody evaluations where psychologist is appointed by court, criminal proceedings in some jurisdictions). Never destroy records—obstruction. Document all steps. HIPAA permits minimum necessary disclosure when legally required."
    },
    {
      q: "A psychologist conducts a child custody evaluation. During the evaluation, one parent offers expensive gifts and invites the psychologist to social events. The psychologist should:",
      options: [
        "Accept the gifts to build rapport but remain objective",
        "Accept only small gifts under $25",
        "Decline the gifts and invitations, and consider whether objectivity has been compromised",
        "Report the behavior to the court immediately"
      ],
      correct: 2,
      explanation: "Multiple relationships that could impair objectivity must be avoided (Standard 3.05). In forensic evaluations, even the appearance of bias undermines credibility. Decline gifts/invitations, document the incident, assess whether you can remain objective (if not, withdraw). Address the issue in the report if it reflects on parent's judgment or manipulation attempts. Forensic evaluations require strict boundaries—psychologists serve the court/truth-finding, not either party. APA Specialty Guidelines for Forensic Psychology (2013) emphasize impartiality."
    },
    {
      q: "When using interpreters in psychological assessment or therapy, psychologists should:",
      options: [
        "Use family members as interpreters to save costs",
        "Use professionally trained interpreters and consider the impact on validity and confidentiality",
        "Avoid working with clients who need interpreters",
        "Allow interpreters to conduct the assessment independently"
      ],
      correct: 1,
      explanation: "Standard 2.05 and 9.03 require competence and appropriate assessment. Best practices: Use professionally trained interpreters (not family—confidentiality issues, bias, role confusion), brief interpreters on confidentiality and professional boundaries, use interpreter services that understand mental health terminology, recognize limitations on test validity (non-standardized administration), consider cultural equivalence of concepts, and document interpreter use. Some tests have validated translations. When possible, use bilingual psychologists or validated measures in client's language."
    },
    {
      q: "A psychologist is asked to provide therapy to her supervisor's daughter. According to the APA Ethics Code, this situation:",
      options: [
        "Is acceptable if both parties consent",
        "Represents a multiple relationship that could impair objectivity and should be avoided",
        "Is only problematic if the psychologist reports to the supervisor",
        "Can proceed if the psychologist provides a discount on fees",
      ],
      correct: 1,
      explanation:
        "Standard 3.05 prohibits multiple relationships that could reasonably be expected to impair objectivity, competence, or effectiveness, or risk exploitation/harm. Treating a supervisor's family member creates multiple relationships (professional supervisory relationship + therapeutic relationship with supervisee) that could compromise objectivity, create conflicting loyalties, and affect the supervisory relationship. The power dynamics and potential for exploitation make this inappropriate even with consent.",
    },
    {
      q: "According to Standard 9.01 on test construction, psychologists who develop psychological tests must:",
      options: [
        "Use only established statistical techniques",
        "Use appropriate psychometric procedures and current scientific knowledge for test design, standardization, validation, and reduction of bias",
        "Conduct validity studies only after the test is published",
        "Ensure the test works equally well for all populations without modification",
      ],
      correct: 1,
      explanation:
        "Standard 9.01 requires psychologists developing tests to use established scientific procedures for design, standardization, validation, reduction of bias, and recommendations for use. This includes appropriate reliability and validity evidence, representative normative samples, examination of measurement equivalence across groups, and ongoing refinement. Test developers must base interpretations on evidence and acknowledge limitations. New tests require rigorous psychometric development before clinical use.",
    },
    {
      q: "A psychologist treating a client learns the client plans to shoplift from a store. The psychologist should:",
      options: [
        "Report to law enforcement immediately",
        "Maintain confidentiality unless there is imminent danger to identifiable persons",
        "Report to the store owner",
        "Terminate therapy to avoid being an accessory",
      ],
      correct: 1,
      explanation:
        "Shoplifting, while illegal, doesn't meet the threshold for breaking confidentiality under the Ethics Code or most state laws. Confidentiality exceptions typically include: 1) imminent danger to self/others, 2) child/elder abuse, 3) court orders, 4) client waiver. General criminal behavior without imminent danger doesn't justify breaking confidentiality. Address therapeutically, explore motivations/consequences, but maintain confidentiality unless legally mandated. Different from Tarasoff situations involving violence to identifiable victims.",
    },
    {
      q: "When conducting research, psychologists must obtain informed consent from participants. This consent must include all of the following EXCEPT:",
      options: [
        "The purpose of the research and expected duration",
        "Participants' right to decline or withdraw",
        "Reasonably foreseeable risks and benefits",
        "Guarantee that no harm will result from participation",
      ],
      correct: 3,
      explanation:
        "Standard 8.02 requires informed consent for research to include: purpose, procedures, duration, right to decline/withdraw, foreseeable consequences of declining/withdrawing, reasonably anticipated factors affecting participation, potential risks/discomfort/benefits, confidentiality limits, incentives, and who to contact with questions. Psychologists cannot guarantee no harm will occur—they must disclose reasonably foreseeable risks. Research involves some risk; the key is informed decision-making and minimizing harm through ethical design and monitoring.",
    },
    {
      q: "A psychologist is subpoenaed to provide testimony about a client's mental state in a criminal trial where the client has raised an insanity defense. The psychologist should:",
      options: [
        "Refuse to testify under all circumstances",
        "Determine whether the client has waived privilege by raising the insanity defense, consult with an attorney, and respond appropriately",
        "Testify only if ordered by the judge",
        "Provide only written testimony to avoid court appearance",
      ],
      correct: 1,
      explanation:
        "When a defendant raises an insanity defense or puts their mental state at issue, they may waive psychotherapist-patient privilege to that extent. However, privilege laws vary by jurisdiction. The psychologist should: 1) Consult with a legal expert, 2) Determine if privilege has been waived, 3) Notify the client if possible, 4) Clarify the scope of testimony, 5) Only testify regarding matters for which privilege has been waived or if court-ordered after privilege claim denied. Document all steps and considerations.",
    },
    {
      q: "Standard 7.04 on student disclosure of personal information states that psychologists training students in therapy techniques:",
      options: [
        "May require students to disclose any personal information relevant to training",
        "Should not require students to disclose personal information except as necessary for evaluation of competence or to obtain assistance for personal problems",
        "Must require complete psychological evaluations of all students",
        "Cannot ask students to disclose any personal information under any circumstances",
      ],
      correct: 1,
      explanation:
        "Standard 7.04 prohibits requiring student disclosure of personal information regarding sexual history, abuse history, psychological treatment, or relationships EXCEPT when: 1) the program clearly identifies this requirement before admissions, or 2) the information is necessary to evaluate or obtain assistance for problems that could reasonably be judged to prevent competent professional service. Self-disclosure in training (e.g., practicing therapy techniques) should be limited, voluntary where possible, and with safeguards against harm to student-teacher relationships.",
    },
    {
      q: "A managed care company requests detailed psychotherapy notes to authorize continued treatment. The psychologist should:",
      options: [
        "Provide all requested notes immediately",
        "Provide a treatment summary with minimum necessary information, not psychotherapy notes unless specifically authorized by client",
        "Refuse to provide any information",
        "Only provide diagnosis and treatment dates",
      ],
      correct: 1,
      explanation:
        "Under HIPAA, psychotherapy notes (personal impressions, process notes kept separate from the medical record) have extra protection and require separate client authorization for release—they're NOT included in standard authorizations for treatment/payment. For utilization review, provide treatment plans, diagnoses, functional status, treatment progress—the minimum necessary. Standard 4.04 requires minimizing intrusions on privacy. Know the difference between psychotherapy notes and the medical/clinical record.",
    },
    {
      q: "A psychologist receives a court order (not a subpoena) to release records. The psychologist should:",
      options: [
        "Assert privilege and refuse to comply",
        "Release the minimum records necessary to comply with the order, after attempting to clarify scope",
        "Ignore the order and wait for the client to intervene",
        "Release records only if the client provides written consent",
      ],
      correct: 1,
      explanation:
        "A court ORDER (signed by a judge) is legally binding and must be followed after privilege has been litigated. Steps: 1) Verify it's an order, not just a subpoena, 2) Contact the court/attorney if clarification needed about scope, 3) Release minimum necessary to comply, 4) Document compliance and what was released, 5) Notify client if permitted. If the order seems to exceed legal bounds, consult legal counsel about filing a motion to quash/limit. Distinguish from subpoena (requests can be challenged) vs. order (must comply or face contempt).",
    },
    {
      q: "According to Standard 3.08 on exploitative relationships, psychologists do not exploit persons over whom they have supervisory or evaluative authority. Examples include:",
      options: [
        "Therapists over clients, supervisors over trainees, researchers over participants",
        "Only therapists over clients",
        "Only supervisors over trainees",
        "Exploitation is only prohibited in sexual relationships",
      ],
      correct: 0,
      explanation:
        "Standard 3.08 broadly prohibits exploitation in ANY relationship where psychologists have professional authority: therapy, supervision, teaching, research, employment, consultation, forensic roles. Exploitation includes sexual/romantic involvement (separately addressed in 3.02, 7.07, 10.05-.08), but also financial exploitation, requiring excessive personal services, taking credit for students' work, using assessment data inappropriately, or leveraging power differentials for personal gain. Power imbalances create vulnerability; psychologists must protect those under their authority.",
    },
    {
      q: "When a psychologist determines that assessment results may be misused or misunderstood if released directly to the client, the psychologist may:",
      options: [
        "Refuse to provide the results under any circumstances",
        "Provide explanation of results and decline to provide raw data, or provide results through an appropriately qualified professional",
        "Destroy the assessment data",
        "Only provide results if the client signs a waiver of liability",
      ],
      correct: 1,
      explanation:
        "Standard 9.04 allows withholding raw test data/materials to prevent misuse BUT requires providing test results/interpretations to clients (Standard 9.10). Options: 1) Provide thorough interpretation/explanation in language client understands, 2) Provide results through another qualified professional who can explain them, 3) If court-ordered release, comply but may accompany with interpretive statement. Balance: client right to their data vs. preventing harm from misinterpretation. Document clinical judgment about release method.",
    },
    {
      q: "A psychologist provides therapy to a college student. The student's mother, who pays for treatment, contacts the psychologist demanding information about the sessions. The student is 19 years old. The psychologist should:",
      options: [
        "Provide detailed information since the mother is paying",
        "Provide no information without the adult client's authorization",
        "Provide only billing information but no clinical details",
        "Require a court order before discussing confidentiality with the mother",
      ],
      correct: 1,
      explanation:
        "At age 18+ (age of majority in most states), the student is a legal adult with full privacy rights regardless of who pays for treatment. The psychologist cannot disclose confidential information without the adult client's written authorization (Standard 4.05), even to parents paying for services. Discuss this during informed consent with both student and parents. Can discuss general billing/attendance issues if agreed in consent, but not clinical content. If family involvement is clinically beneficial, obtain student's consent. Parents can choose to stop paying, but confidentiality remains.",
    },
    {
      q: "Standard 6.04 on fees and financial arrangements requires psychologists to:",
      options: [
        "Charge the same fee to all clients",
        "Reach an agreement regarding fees and billing as early as feasible",
        "Never charge clients who terminate prematurely",
        "Prohibit use of collection agencies for unpaid fees",
      ],
      correct: 1,
      explanation:
        "Standard 6.04 requires reaching fee agreements as early as feasible, accurately representing fees, and avoiding misrepresentation. Discuss: session fees, cancellation policies, insurance arrangements, payment schedules, collection procedures. Document fee agreement. Fees can vary (sliding scale acceptable). If financial difficulties arise, consider adjusting fees or providing referrals. Collection agencies are permitted but must not disclose confidential information beyond what's necessary (name, service dates, amount owed). Be truthful about fee practices; misleading clients violates integrity standards.",
    },
    {
      q: "A psychology graduate student is conducting dissertation research. Her advisor asks to be listed as first author on the resulting publication. This is:",
      options: [
        "Acceptable since advisors always deserve first authorship",
        "Only acceptable if the advisor made substantial scientific contributions warranting first authorship",
        "Required by most universities",
        "Prohibited under all circumstances",
      ],
      correct: 1,
      explanation:
        "Standard 8.12 states that publication credit accurately reflects persons' contributions. Principal authorship and other credits reflect relative contributions. Mere supervision doesn't warrant authorship unless the advisor made substantial contributions to conceptualization, design, analysis, or writing. Student dissertations typically result in student first authorship. Taking credit for students' work is exploitative (Standard 3.08). Discuss authorship expectations early. APA guidelines: authorship requires substantial contribution; supervision, funding, or data collection alone don't merit authorship (may warrant acknowledgment).",
    },
    {
      q: "When conducting forensic evaluations, psychologists should:",
      options: [
        "Advocate for the party who retained them",
        "Maintain objectivity and impartiality, and base opinions on adequate data",
        "Only present evidence that supports their conclusions",
        "Avoid testimony that might harm their client",
      ],
      correct: 1,
      explanation:
        "APA Specialty Guidelines for Forensic Psychology (2013) emphasize objectivity, impartiality, and basing opinions on adequate information. Psychologists serve the legal process and truth-finding, not either party. Must: conduct thorough evaluations, consider alternative hypotheses, acknowledge limitations and uncertainties, present complete findings (including contradictory data), avoid role conflicts (don't evaluate therapy clients for court), clarify role/limits of confidentiality upfront. Distinguish from therapeutic roles. Document extensively. Withstand cross-examination by presenting balanced, data-based opinions.",
    },
    {
      q: "A psychologist provides expert testimony in court. During cross-examination, the attorney asks about a theoretical orientation the psychologist doesn't support. The psychologist should:",
      options: [
        "Claim to support that orientation to avoid appearing biased",
        "Honestly acknowledge the question about the orientation and explain their reasoning, even if it differs",
        "Refuse to answer any questions about other theoretical orientations",
        "Defer to other experts rather than discuss orientations outside their training",
      ],
      correct: 1,
      explanation:
        "Standard 2.04 requires psychologists to base their work on established scientific and professional knowledge. Standard 5.01 prohibits false or deceptive statements. In testimony, psychologists must be truthful about their theoretical orientations, training, opinions, and evidence base—even under adversarial cross-examination. Acknowledge limitations, present evidence fairly, explain reasoning, and admit when questions are outside expertise. Misrepresenting one's views or knowledge base is unethical and damages credibility. Courts rely on honest expert testimony for informed decisions.",
    },
    {
      q: "According to Standard 4.02 on discussing limits of confidentiality, psychologists should inform clients about confidentiality limits:",
      options: [
        "Only when a situation arises requiring a breach",
        "At the outset of the relationship and thereafter as new circumstances warrant",
        "Never, to avoid damaging the therapeutic relationship",
        "Only if the client specifically asks about confidentiality",
      ],
      correct: 1,
      explanation:
        "Standard 4.02 requires discussing confidentiality limits at the outset and as new circumstances arise. Include in informed consent: mandatory reporting, imminent danger situations, subpoenas/court orders, communication with other providers (with consent), supervision/consultation (de-identified), insurance/third parties. Document this discussion. Revisit if situations change (client mentions child abuse, makes threats, legal involvement emerges). Proactive discussion prevents misunderstandings, allows informed consent, and maintains trust when breaches become necessary. Clients have right to understand privacy boundaries before disclosing sensitive information.",
    },
    {
      q: "A psychologist's former client contacts them asking for a letter of recommendation for a job. The psychologist should:",
      options: [
        "Automatically provide the letter since the therapeutic relationship has ended",
        "Consider the multiple relationship implications and generally decline or provide only limited, factual information",
        "Provide a recommendation if the client was successful in therapy",
        "Charge an additional fee and then provide the recommendation",
      ],
      correct: 1,
      explanation:
        "Writing employment recommendations for former clients creates a multiple relationship (Standard 3.05) that could impair objectivity—knowledge from therapy might inappropriately influence the recommendation, or job-related contact might complicate future therapeutic needs. Best practice: decline and explain the boundary, offer to provide factual verification only (dates of service, not clinical opinions), or refer to another professional. Some exceptions in rural areas or specific contexts. Document decision-making. Distinguish from forensic evaluations (different role) or disability verifications (established procedures for clinical documentation).",
    },
    {
      q: "A psychologist plans to terminate therapy with a client because the client's issues are outside the psychologist's competence. According to Standard 10.10, the psychologist must:",
      options: [
        "Terminate immediately to avoid harm from incompetent services",
        "Provide pretermination counseling and appropriate referrals unless precluded by client conduct",
        "Continue services indefinitely to avoid abandonment",
        "Transfer the client to any available psychologist",
      ],
      correct: 1,
      explanation:
        "Standard 10.10 requires pretermination counseling and referrals when terminating therapy, except when precluded by client actions/conduct or when client no longer needs services. When terminating due to competence limits: 1) Recognize limitations early, 2) Consult/seek supervision to determine if you can develop competence, 3) If not, discuss with client transparently, 4) Provide appropriate referrals (specific names, not just 'find someone else'), 5) Offer to continue briefly while client transitions, 6) Transfer records with consent. Never abandon client; plan thoughtful transitions. Recognizing competence limits is ethical, not a failure.",
    },
    {
      q: "Under Standard 9.06, psychologists interpret assessment results appropriately, taking into account:",
      options: [
        "Only the test scores and normative data",
        "The purpose of the assessment, characteristics of the person assessed, and situational/contextual factors",
        "Primarily the referral question from the referring professional",
        "Their clinical intuition regardless of test limitations",
      ],
      correct: 1,
      explanation:
        "Standard 9.06 requires considering multiple factors: test purpose, client characteristics (age, language, cultural background, disabilities), test limitations/psychometrics, situational/contextual factors affecting performance, relevant history, behavioral observations. Avoid overreliance on test scores alone. Acknowledge when test validity is limited (e.g., not normed on client's population, language barriers, testing conditions suboptimal). Integrate multiple data sources. Caution against inappropriate generalizations. Distinguish what the test measures from broader constructs. Cultural competence is critical—tests developed on one population may not generalize to others.",
    },
    {
      q: "A client tells their psychologist they were sexually abused as a child 20 years ago by a family member who now has contact with young children. The psychologist should:",
      options: [
        "Maintain confidentiality since the abuse happened long ago",
        "Assess whether current children are at risk and file a report if there is reasonable suspicion of current abuse",
        "Automatically report based on the past abuse disclosure",
        "Encourage the client to report but take no action themselves",
      ],
      correct: 1,
      explanation:
        "Mandatory reporting laws require reporting suspected current abuse/neglect of children, not necessarily historical abuse of adults. However, if the adult client's disclosure reasonably suggests current children are at risk, reporting may be required. Steps: 1) Assess current risk (does perpetrator have access to children? Are there indicators of current abuse?), 2) Know your state's specific laws (some require reporting past abuse if perpetrator has current child access), 3) Consult with colleagues/legal experts, 4) Document assessment. If reportable, explain to client why reporting is legally required. Historical abuse alone typically isn't reportable, but credible ongoing risk is.",
    },
    {
      q: "According to Standard 6.07 on referrals and fees, when psychologists refer clients to other professionals with whom they have a financial relationship, they must:",
      options: [
        "Keep the financial relationship secret to avoid biasing the client",
        "Disclose the financial relationship to the client",
        "Only refer to professionals with whom they have financial relationships",
        "Charge the client an additional referral fee",
      ],
      correct: 1,
      explanation:
        "Standard 6.07 requires disclosing financial and other interests in referrals. If referring to a colleague who pays rent in your office, a group practice where you share income, or any arrangement involving financial benefit, inform the client. This allows informed decision-making and prevents conflicts of interest from inappropriately influencing clinical judgment. Also applies to receiving referral fees (generally discouraged as potentially exploitative). Document disclosure. Best practice: develop referral lists without financial considerations; when financial relationships exist, present multiple options and disclose any interests.",
    },
    {
      q: "A psychologist conducts therapy via videoconferencing with a client who is temporarily traveling internationally. The psychologist should:",
      options: [
        "Continue services as usual since the psychologist is licensed in their home state",
        "Consider whether they can legally practice in the client's current location, obtain appropriate consent about technology/emergency procedures, and ensure HIPAA compliance",
        "Refuse to provide services until the client returns",
        "Only provide services if the client signs a liability waiver",
      ],
      correct: 1,
      explanation:
        "Telepsychology across jurisdictions requires considering: 1) Legal jurisdiction (psychologists must be licensed where the client is located—international practice may violate other countries' laws), 2) Technology standards (encryption, HIPAA compliance), 3) Informed consent (risks/benefits of technology, privacy limits, emergency procedures), 4) Emergency resources (how to respond to crisis when client is in another country), 5) Cultural/legal differences. APA Telepsychology Guidelines (2013) address these issues. For brief international travel, some temporary services may be appropriate with proper precautions; ongoing international practice requires careful legal/ethical review.",
    },
    {
      q: "When psychologists' ethical responsibilities conflict with law, psychologists should:",
      options: [
        "Always follow the law regardless of ethical concerns",
        "Always follow the ethics code regardless of legal requirements",
        "Make known their commitment to the ethics code and take steps to resolve the conflict; if unresolvable, may adhere to the law",
        "Immediately withdraw from the situation",
      ],
      correct: 2,
      explanation:
        "Standard 1.02 states that when ethics and law conflict, psychologists clarify the nature of the conflict, make known their commitment to the Ethics Code, and take reasonable steps to resolve the conflict. If the conflict can't be resolved, psychologists may adhere to the law BUT should work to change the law. Example: if a law requires disclosure psychologists believe violates confidentiality, they document objections, seek to change the law, but ultimately comply to avoid criminal penalties. Never use law as excuse to ignore ethical obligations without attempting resolution. Document all conflict resolution efforts.",
    },
    {
      q: "Standard 7.05 on mandatory individual or group therapy requires that when psychologists are mandated to provide therapy to students/supervisees:",
      options: [
        "The same psychologists who conduct therapy should also conduct evaluations",
        "Therapy should not be conducted by the psychologist who will evaluate the student's academic performance",
        "All students must participate in therapy as part of training",
        "Group therapy is prohibited in training settings",
      ],
      correct: 1,
      explanation:
        "Standard 7.05 permits programs to require therapy when identified in admission materials, BUT when therapy is mandated, it should not be provided by those who will evaluate the student's academic performance. This avoids role conflicts and protects students from having personal disclosures inappropriately influence academic evaluations. Students should have therapy with independent providers. Voluntary therapy with faculty supervisors creates similar concerns and should be avoided. The dual role of therapist and evaluator creates inherent conflicts of interest and power differential issues.",
    },
    {
      q: "A psychologist discovers that a colleague is having a sexual relationship with a current supervisee. After informal resolution fails, the psychologist should:",
      options: [
        "Take no further action to maintain the collegial relationship",
        "Report to appropriate authorities such as the state licensing board, ethics committee, or training program",
        "Anonymously notify the supervisee",
        "Publicize the violation on social media",
      ],
      correct: 1,
      explanation:
        "Sexual relationships with supervisees are explicitly prohibited (Standard 7.07) and constitute a serious ethical violation involving exploitation of power differential. Standard 1.05 requires taking action when informal resolution is unsuccessful or inappropriate—this situation involves clear, serious violation with victim at risk. Report to: state licensing board, APA Ethics Committee (if member), training program/university (if applicable), or other appropriate authorities. Document informal resolution attempts. This isn't optional—it's required to protect the supervisee and maintain professional standards. Failure to report can itself be an ethical violation (1.05).",
    },
    {
      q: "According to the HIPAA Security Rule, covered entities must:",
      options: [
        "Use the exact same security measures regardless of practice size",
        "Implement appropriate administrative, physical, and technical safeguards to protect electronic PHI",
        "Never use email for any patient communication",
        "Only store records on paper to ensure security",
      ],
      correct: 1,
      explanation:
        "HIPAA Security Rule requires covered entities to implement administrative (policies, training, risk analysis), physical (facility access, workstation security, device controls), and technical (access controls, encryption, audit controls) safeguards appropriate to the size/complexity of the organization. 'Scalable' implementation means small practices have flexibility in how they meet requirements. Encryption is 'addressable' (implement OR document why alternative approach is reasonable). Risk analysis is required. Email can be used with patient consent and reasonable safeguards. Focus is reasonable protection of electronic PHI, not absolute security (which is impossible).",
    },
    {
      q: "A psychologist provides therapy to a client and is later asked to conduct a parenting capacity evaluation on that same client for a custody case. The psychologist should:",
      options: [
        "Agree to conduct the evaluation since they know the client well",
        "Decline the forensic role due to the multiple relationship and objectivity concerns",
        "Conduct the evaluation but disclose the therapeutic relationship in the report",
        "Agree only if both parents consent to the arrangement",
      ],
      correct: 1,
      explanation:
        "Combining therapeutic and forensic roles with the same client creates a multiple relationship that impairs objectivity (Standard 3.05) and violates Specialty Guidelines for Forensic Psychology (Guideline 4.02). Therapeutic relationship involves advocacy, alliance, confidentiality; forensic role requires objectivity, impartiality, limited confidentiality. Prior therapy biases the evaluator in favor of their client. Information disclosed in therapy might inappropriately influence the evaluation. Decline the forensic role and refer to another psychologist. Some limited exceptions exist (reviewing records to assess competency to waive rights) but not full forensic evaluations like custody assessments.",
    },
    {
      q: "When supervising doctoral students providing therapy, the supervising psychologist should:",
      options: [
        "Allow students complete autonomy to develop their therapeutic style",
        "Monitor supervisees' work closely enough to ensure client welfare and appropriate services, and share responsibility for clients",
        "Only supervise students who have completed all coursework",
        "Avoid any involvement in students' cases to promote independence",
      ],
      correct: 1,
      explanation:
        "Standard 2.05 (delegation of work) requires psychologists who delegate work to employees/supervisees to take reasonable steps to: 1) avoid delegating work to persons with multiple relationships, 2) authorize only responsibilities such persons can perform competently, 3) see that such persons perform services appropriately. Supervisors are professionally and legally responsible for supervisees' clinical work. This requires: regular supervision meetings, review of cases/recordings/notes, availability for consultation, monitoring client welfare, intervening when supervisee is outside competence, and ensuring proper client informed consent about supervisee's role.",
    },
    {
      q: "A psychologist is treating a client with suicidal ideation. The client's family members contact the psychologist asking if they should be worried. The psychologist should:",
      options: [
        "Provide detailed information since safety is involved",
        "Determine whether client has authorized release of information; if not, cannot confirm being the client's provider without consent, except when necessary to protect the client",
        "Tell the family to contact emergency services",
        "Ignore the call to maintain confidentiality",
      ],
      correct: 1,
      explanation:
        "Even confirming you're treating someone violates confidentiality without authorization (Standard 4.05). However, Standard 4.05(b) allows disclosure without consent when necessary to protect the client from harm. Clinical judgment required: Is there imminent risk justifying disclosure? Has the client authorized family contact? If imminent risk exists, disclose minimum necessary to protect client (may involve hospitalizing client, contacting family). If risk is not imminent, don't confirm relationship without consent but can provide general suicide risk resources. When possible, involve client in decision about family contact. Document reasoning thoroughly.",
    },
    {
      q: "Standard 8.08 requires that when research participation is a course requirement, students must:",
      options: [
        "Participate in all assigned research studies without alternative options",
        "Be given a choice of equitable alternative activities",
        "Pay a fee to avoid participation",
        "Participate but may withdraw data after the study concludes",
      ],
      correct: 1,
      explanation:
        "Standard 8.08 requires offering equitable alternative activities when research participation is a course requirement or extra credit opportunity. Alternatives should provide equivalent educational benefit and require comparable time/effort (e.g., reading studies and writing summaries, attending research presentations). This protects student autonomy and avoids coercion. Students can't be penalized for choosing alternatives. Extra credit must be available through other means. Clearly explain alternatives in course syllabus. Even when participating, students retain right to withdraw from research (though may need to complete alternative activity for course credit).",
    },
    {
      q: "A psychologist treating a military service member receives a command-directed request for treatment information. The psychologist should:",
      options: [
        "Provide all information immediately due to military chain of command",
        "Clarify the nature of the request, the client's authorization, applicable law (HIPAA vs. military regulations), and release only what is legally required",
        "Refuse to provide any information",
        "Provide only fitness-for-duty status without clinical details",
      ],
      correct: 1,
      explanation:
        "Military psychology involves complex confidentiality issues. HIPAA applies to most military treatment facilities. Command-directed evaluations have limited confidentiality (must be disclosed upfront). Regular therapy generally has confidentiality protections similar to civilian settings, but military regulations may allow some command access. Steps: 1) Clarify whether it's command-directed evaluation (limited confidentiality) vs. therapy (protected), 2) Verify whether client has signed authorization, 3) Know applicable law/regulations, 4) Release minimum necessary, 5) Document. Service members should understand confidentiality limits at treatment outset. When in doubt, consult military legal counsel.",
    },
    {
      q: "According to Standard 9.08, when using automated scoring and interpretation services for psychological testing, psychologists:",
      options: [
        "Can rely entirely on computerized interpretations without review",
        "Retain responsibility for appropriate application, interpretation, and use of assessment results regardless of automation",
        "Are not responsible for computer-generated interpretations",
        "Should avoid all automated interpretation services",
      ],
      correct: 1,
      explanation:
        "Standard 9.08 clarifies that using automated services doesn't diminish psychologists' responsibility for appropriate test use and interpretation. Psychologists must: 1) Understand the test's psychometric properties, 2) Evaluate whether computer-generated interpretations are appropriate for this client and purpose, 3) Recognize limitations of automated interpretations, 4) Integrate computer results with other data sources, 5) Don't blindly accept automated reports—use professional judgment. Computer interpretations can be helpful tools but don't replace clinical expertise. Some automated reports are actuarial (empirically based), others are more subjective. Always review and evaluate before using in clinical decision-making.",
    },
    {
      q: "A psychologist is asked to provide a 'second opinion' evaluation of a client already in treatment with another psychologist. Best practice includes:",
      options: [
        "Conducting the evaluation without contacting the current psychologist to maintain objectivity",
        "Obtaining client authorization to contact the current treating psychologist and reviewing previous records to provide an informed second opinion",
        "Automatically recommending the client change psychologists",
        "Refusing all second opinion requests to avoid colleague conflicts",
      ],
      correct: 1,
      explanation:
        "Second opinions serve legitimate purposes (treatment not progressing, complex cases, patient concern). Best practice: 1) Clarify the purpose and scope with client, 2) Obtain written authorization to contact current psychologist and access records (Standard 4.05), 3) Review existing information to avoid redundancy and provide informed opinion, 4) Contact current psychologist when appropriate (Standard 3.09—cooperation with other professionals), 5) Avoid criticizing colleagues without basis, 6) Provide objective feedback to client. Conducting evaluations without previous treatment information may lead to incomplete or contradictory conclusions. Coordinate care in client's best interest.",
    },
    {
      q: "When conducting child custody evaluations, psychologists should:",
      options: [
        "Advocate for the best interests of the child by choosing which parent should have custody",
        "Conduct objective evaluations of all parties, provide data-based opinions about parenting capacities, and avoid role conflicts",
        "Only evaluate the parent who retains them",
        "Always recommend joint custody to appear neutral",
      ],
      correct: 1,
      explanation:
        "APA Guidelines for Child Custody Evaluations (2010) and Specialty Guidelines for Forensic Psychology (2013) require: 1) Evaluate all parties involved (both parents, children), 2) Use multiple methods (interviews, observations, collateral sources, testing where appropriate), 3) Base opinions on adequate data, 4) Remain objective and impartial (serve the court, not either party), 5) Address relevant psychological factors affecting parenting/children, 6) Avoid ultimate issue opinions unless requested by court, 7) Acknowledge limitations. Don't evaluate your therapy client or their children for custody. Clarify role/confidentiality limits upfront. Expect cross-examination.",
    },
    {
      q: "A psychologist's advertisement for their practice states they are 'the best psychologist in the city' and 'can cure any mental illness.' This violates:",
      options: [
        "No ethical standards, as marketing requires bold claims",
        "Standard 5.01 on avoiding false or deceptive statements",
        "Only state laws, not ethical codes",
        "Standards only if the claims are in writing, not if verbal",
      ],
      correct: 1,
      explanation:
        "Standard 5.01 prohibits false, deceptive, or fraudulent statements regarding training, experience, services, research, or publication. Claims like 'the best' are unprovable and misleading. Claims of 'curing' mental illness are false—psychological treatment doesn't guarantee cures. Advertisements must be accurate about: credentials, training, services offered, fees, outcomes. Avoid superlatives, guarantees, and creating unjustified expectations. Testimonials raise ethical concerns (client confidentiality, may not be representative). Use factual information: education, licensure, areas of practice, treatment approaches. State laws often have additional advertising restrictions.",
    },
    {
      q: "According to Standard 3.10 on informed consent, when psychologists provide services to multiple individuals in a group or family, they should:",
      options: [
        "Obtain consent only from the identified patient",
        "Clarify at the outset which individuals are clients, the relationship the psychologist will have with each, and confidentiality limitations",
        "Maintain absolute confidentiality for each family member",
        "Avoid providing services to multiple family members simultaneously",
      ],
      correct: 1,
      explanation:
        "Standard 3.10 requires clarifying: 1) Who is the client (individual, couple, family as unit), 2) Psychologist's role with each person, 3) Probable uses of information, 4) Confidentiality limitations (will information shared in family session be kept from individual sessions? What if one family member discloses something outside sessions?). Document these agreements. Example: in couple therapy, clarify whether you'll see individuals separately and whether information from those sessions remains confidential or is shared. In family therapy, explain that you serve the family system, not individuals. Address these complexities proactively to prevent misunderstandings.",
    },
    {
      q: "A psychologist plans to use client case material in a book for mental health professionals. According to the Ethics Code, the psychologist should:",
      options: [
        "Change identifying details and use the material without consent",
        "Obtain written informed consent from clients, or disguise/de-identify sufficiently that clients are not identifiable",
        "Only use cases of deceased clients",
        "Avoid using any real case material",
      ],
      correct: 1,
      explanation:
        "Standard 4.07 allows disclosure of confidential information for appropriate scientific/professional purposes when: 1) Client consents in writing, OR 2) Information is adequately disguised/de-identified so persons are not individually identifiable. When disguising cases: change demographic details, combine cases, alter identifying information while preserving clinical teaching points. Even with disguise, some prefer obtaining consent. For presentations to non-professionals or with identifiable details, always obtain written consent. Academic writing to professional audiences with thorough disguise typically doesn't require consent, but err on side of over-protection. Document de-identification decisions.",
    },
    {
      q: "A psychologist works in a rural area and attends the same small church as several current clients. According to the Ethics Code, this is:",
      options: [
        "Always prohibited and requires immediate client transfer",
        "Not inherently unethical but requires ongoing monitoring to ensure the overlapping relationships do not impair objectivity or harm clients",
        "Only acceptable if clients agree in writing",
        "Grounds for license revocation",
      ],
      correct: 1,
      explanation:
        "Standard 3.05 recognizes that some overlapping relationships are unavoidable, especially in rural/small communities, military settings, or with specialized populations. Not all multiple relationships are unethical. They become problematic when they could reasonably impair objectivity, competence, or effectiveness, or risk exploitation. In rural settings: 1) Discuss overlaps during informed consent, 2) Establish boundaries (e.g., not discussing therapy outside sessions, maintaining appropriate social boundaries), 3) Monitor for problems, 4) Document considerations, 5) Consult regularly, 6) If objectivity becomes impaired, refer. Complete avoidance may deprive communities of services.",
    },
    {
      q: "When conducting psychological evaluations for third parties (e.g., pre-employment screening, disability evaluations), psychologists must:",
      options: [
        "Inform the person being evaluated about the nature and purpose of the evaluation and to whom results will be disclosed",
        "Keep the purpose secret to avoid biasing the evaluation",
        "Only provide results to the third party, never to the person evaluated",
        "Skip informed consent since it's not therapy",
      ],
      correct: 0,
      explanation:
        "Standard 3.10(c) requires informing persons being evaluated about: 1) The nature and purpose of the evaluation, 2) Who will receive the evaluation results, 3) Limits of confidentiality, 4) Their role (evaluee, not therapy client). This differs from therapy consent but still requires transparency. Person being evaluated should understand they're not the client (the organization/court is), results will be shared with the retaining party, and the evaluation isn't confidential in the same way therapy is. Some evaluation contexts (court-ordered) may proceed without consent, but explanation should still be provided. Document this notification.",
    },
    {
      q: "A psychologist learns that a former supervisee has been charged with sexual misconduct with a client. The psychologist should:",
      options: [
        "Take no action since supervision has ended",
        "Consider whether they were aware of concerning behavior during supervision and whether current action is warranted, possibly including offering cooperation with investigations",
        "Automatically assume liability for the supervisee's actions",
        "Publicly defend the former supervisee",
      ],
      correct: 1,
      explanation:
        "Former supervisors may have ethical obligations depending on circumstances. Consider: 1) Were there warning signs during supervision that weren't adequately addressed? 2) Was supervision sufficient? 3) If contacted by ethics committees or licensing boards, cooperate with investigations (Standard 1.06). 4) Reflect on supervision practices—could anything have prevented this? Former supervisors aren't automatically liable for supervisees' post-supervision behavior but should examine their role. If the investigation reveals supervision was inadequate (didn't address red flags, insufficient oversight), this itself may be an ethical issue. Use as opportunity to review supervision practices.",
    },
    {
      q: "Standard 2.03 requires psychologists to maintain competence through continuing education and professional development. This is considered:",
      options: [
        "Optional but recommended",
        "Required as an ethical obligation in addition to any legal licensure requirements",
        "Only necessary if state law requires it",
        "Only applies to early-career psychologists",
      ],
      correct: 1,
      explanation:
        "Standard 2.03 makes maintaining competence an ethical obligation separate from licensure CE requirements. Psychologists must: 1) Keep current with research, methods, and populations served, 2) Engage in ongoing professional development, 3) Update knowledge of legal/ethical developments, 4) Maintain competence throughout career. This exceeds minimum CE hours—it's an ongoing commitment. Read journals, attend workshops, seek consultation, engage in professional communities. Competence is not static; what was adequate training 20 years ago may be outdated. Fields evolve—evidence-based practices change, new populations emerge, technology advances. Lifelong learning is ethical imperative.",
    },
    {
      q: "A psychologist conducts a psychological assessment of a client. Two years later, another psychologist requests the raw test data for a reevaluation. The original psychologist should:",
      options: [
        "Refuse to release raw test data under any circumstances",
        "Release raw test data to the qualified psychologist upon appropriate consent, while protecting test security",
        "Only release test data if the client pays an additional fee",
        "Require a court order before releasing any test data",
      ],
      correct: 1,
      explanation:
        "Standard 9.04 requires releasing test data to clients or others identified by the client upon client request (with appropriate consent), BUT psychologists can withhold data if release would cause substantial harm or if data are misused/misinterpreted. When releasing to another qualified psychologist: 1) Obtain client's written authorization, 2) Verify the recipient is qualified to interpret the data (licensed psychologist), 3) Release raw test data (not test manuals/protocols—those are protected by copyright), 4) Can charge reasonable fees for copying, 5) Document release. Test publishers' restrictions on materials don't override ethical obligations to release client's test data.",
    },
    {
      q: "When providing animal research, psychologists must:",
      options: [
        "Avoid all procedures that cause animal discomfort",
        "Ensure procedures conform to regulations and ensure appropriate care, minimizing discomfort, and using alternatives when available",
        "Use animals freely since ethical guidelines only apply to human subjects",
        "Only conduct animal research in university settings",
      ],
      correct: 1,
      explanation:
        "Standard 8.09 requires psychologists conducting animal research to: 1) Comply with federal/state regulations (Animal Welfare Act, IACUC oversight), 2) Ensure appropriate care and housing, 3) Personnel are trained in animal care and research procedures, 4) Minimize discomfort, infection, illness, and pain, 5) Use anesthesia/analgesia when appropriate, 6) Euthanize animals quickly with minimal pain when appropriate, 7) Consider alternatives to procedures causing pain. The 3Rs: Replace (use alternatives when possible), Reduce (minimize number of animals), Refine (minimize pain/distress). Scientific benefit must justify any animal distress. IACUC reviews and approves protocols.",
    },
    {
      q: "A psychologist is subpoenaed for a deposition in a client's lawsuit (client is suing employer). The psychologist should:",
      options: [
        "Appear at the deposition and answer all questions fully",
        "Notify the client, assert privilege, determine if client waives privilege, and seek legal consultation before providing testimony",
        "Ignore the subpoena if the client doesn't want them to testify",
        "Provide written responses instead of appearing",
      ],
      correct: 1,
      explanation:
        "A subpoena for deposition is a legal request but not an order. Steps: 1) Notify client immediately, 2) Assert psychotherapist-patient privilege (belongs to client), 3) Determine if client intends to waive privilege for lawsuit, 4) Seek own legal consultation (not rely on attorney who issued subpoena), 5) If client waives privilege, clarify scope of testimony, 6) If privilege not waived, don't testify unless court orders after privilege hearing. Even if client waives, testify to minimum necessary. Depositions can be adversarial—preparation is important. Document all steps. If client's mental health is at issue in lawsuit, they may have partially waived privilege.",
    },
    {
      q: "According to Standard 8.02(c) on informed consent in research, when research participation is:",
      options: [
        "Voluntary, informed consent can be waived entirely",
        "Required as part of a course or program, informed consent is still required",
        "With children, parental consent is sufficient without child assent",
        "Anonymous, no consent is needed regardless of research design",
      ],
      correct: 1,
      explanation:
        "Standard 8.02 requires informed consent for research participation, even when participation is mandatory (e.g., course requirements). When required: 1) Explain the requirement in admission materials/syllabus, 2) Offer equitable alternatives (Standard 8.04), 3) Still provide informed consent about the specific study, procedures, risks, benefits, confidentiality, right to withdraw from the research (though may need to complete alternative for course credit). With children: obtain parental permission AND child assent when developmentally appropriate. Anonymous research may qualify for expedited IRB review but typically still requires consent (unless waived by IRB for observational research).",
    },
    {
      q: "A psychologist treating a client learns the client is planning to commit insurance fraud. The psychologist should:",
      options: [
        "Report to law enforcement immediately",
        "Maintain confidentiality and address the issue therapeutically, unless the fraud involves the psychologist's services",
        "Report to the insurance company",
        "Terminate therapy to avoid involvement",
      ],
      correct: 1,
      explanation:
        "General criminal activity doesn't require breaking confidentiality unless legally mandated or involving imminent danger. Insurance fraud by client (outside therapy context) should be addressed therapeutically—explore motivations, consequences, ethical implications—but maintain confidentiality. Exception: if client is defrauding YOUR services (lying to insurance about sessions that didn't occur), you may need to refuse to participate and could report. If legally mandated to report certain fraud, comply with law (Standard 1.02). Document therapeutic interventions. Distinguish from situations requiring breach (child abuse, imminent danger). Not every illegal behavior justifies breaking confidentiality.",
    },
    {
      q: "Standard 6.06 on accuracy in reports to payors and funding sources requires psychologists to:",
      options: [
        "Maximize reimbursement regardless of accuracy",
        "Provide accurate information about services provided, ensure statements are truthful, and avoid fraudulent billing",
        "Only report information required by insurance",
        "Use the most remunerative diagnosis regardless of client presentation",
      ],
      correct: 1,
      explanation:
        "Standard 6.06 requires accurate reports to payors. Violations include: upcoding (billing for more intensive services than provided), billing for sessions that didn't occur, extending treatment unnecessarily for financial gain, misrepresenting diagnosis to obtain coverage. Must: 1) Report services accurately (correct CPT codes, session length, modality), 2) Provide diagnosis based on clinical presentation (not insurance coverage), 3) Document to support billing, 4) Disclose conflicts honestly. Insurance fraud is illegal and unethical. If insurance doesn't cover needed services, discuss with client (self-pay, appeals, alternatives) but don't falsify claims.",
    },
    {
      q: "A psychologist receives a phone call from someone claiming to be the client's attorney requesting records. The psychologist should:",
      options: [
        "Release records immediately to cooperate with legal proceedings",
        "Verify the caller's identity and the client's authorization before releasing any information",
        "Refuse all requests from attorneys",
        "Only discuss billing information with attorneys",
      ],
      correct: 1,
      explanation:
        "Protect against social engineering/fraudulent requests: 1) Verify caller identity (call back at publicly listed number for law firm, not number provided by caller), 2) Obtain client's written authorization specifically for this release to this attorney, 3) Verify authorization directly with client when possible, 4) Release only what's authorized. Attorneys don't automatically have access to records—client authorization or court order required. Even if the attorney represents the client in some matter, health records require specific authorization. Don't rely on verbal requests. Require written authorization with client signature. Document all verification steps.",
    },
    {
      q: "When psychologists terminate a practice (retirement, relocation, death), they should:",
      options: [
        "Simply close the practice without notification",
        "Provide advance notice to clients when feasible, offer referrals, transfer records appropriately, and ensure continuity of care",
        "Only notify clients who request further services",
        "Destroy all records immediately",
      ],
      correct: 1,
      explanation:
        "Standard 10.10 and Standard 6.02 (maintenance of records) require planning for practice termination: 1) Provide advance notice to clients when possible, 2) Offer appropriate referrals and transfer arrangements, 3) Arrange for record storage/transfer (retain per legal requirements—typically 7+ years), 4) Designate records custodian, 5) Notify professional liability insurer, 6) Address financial matters. For deceased psychologists: executor should arrange for record custodian, client notification, and ongoing care. Have a professional will designating who will manage records/client notifications. APA practice organization resources available on practice closure.",
    },
    {
      q: "A psychologist publishes research results that later turn out to contain significant errors in data analysis. Upon discovering the error, the psychologist should:",
      options: [
        "Do nothing since the article is already published",
        "Publish a correction, erratum, or retraction as appropriate to the magnitude of the error",
        "Only correct the error if readers complain",
        "Republish the article in a different journal with corrections",
      ],
      correct: 1,
      explanation:
        "Standard 2.01(b) requires correcting errors in scientific work when discovered. Standard 5.01 (avoiding false statements) extends this to published work. Steps: 1) Assess severity of error (affects conclusions? Minor calculation error?), 2) Notify journal editor, 3) Submit correction/erratum if error is minor, retraction if error fundamentally undermines findings, 4) Notify any parties who may have relied on the findings, 5) Document the error and correction. Integrity requires acknowledging mistakes. Failure to correct misleads field, affects future research, and could harm patients if clinical recommendations are affected. Some errors result from honest mistakes; some require investigation of research practices.",
    },
    {
      q: "According to Standard 10.09, when interrupting or terminating therapy, psychologists must:",
      options: [
        "Give one session advance notice",
        "Make reasonable efforts to facilitate appropriate continuation of services considering client needs and circumstances",
        "Only continue services if the client pays in advance",
        "Terminate immediately if any complications arise",
      ],
      correct: 1,
      explanation:
        "Standard 10.09 requires reasonable efforts to facilitate continuation of services when interrupting/terminating therapy. This includes: 1) Pre-termination counseling (discuss termination, review progress, plan for future), 2) Referrals to other providers, 3) Transfer of records with consent, 4) Appropriate notice period (emergencies excepted), 5) Offer to be available during transition. Exceptions: 1) Client no longer needs services, 2) Client not benefiting despite modifications, 3) Client threatened/endangered psychologist. Even in difficult situations, prioritize client welfare. Abandonment (abrupt termination without appropriate transition) is unethical and can be harmful, especially for vulnerable clients.",
    },
    {
      q: "When asked to provide supervision to an unlicensed psychologist, the supervisor should:",
      options: [
        "Accept all supervisees regardless of their training",
        "Determine they have competence to supervise in the areas of the supervisee's practice and ensure appropriate oversight",
        "Require the supervisee to have malpractice insurance before providing supervision",
        "Supervise only doctoral-level supervisees",
      ],
      correct: 1,
      explanation:
        "Standard 2.01 (competence) and 2.05 (delegation) apply to supervision. Supervisors must: 1) Have competence in the clinical areas they're supervising, 2) Have training/experience in supervision itself, 3) Monitor supervisees appropriately (frequency/method depends on supervisee experience and client risk), 4) Ensure clients are informed about supervisee status and supervisor's role, 5) Be available for consultation, 6) Review clinical work regularly, 7) Address supervisee competence concerns. Supervisors are professionally responsible for supervisees' work. Many states have specific supervision requirements for licensure. Supervision is distinct from consultation (peer relationship) and requires active oversight and responsibility.",
    },
    {
      q: "A psychologist is treating an adult client who reveals intentions to harm their elderly parent. The psychologist should:",
      options: [
        "Maintain complete confidentiality since the parent is an adult",
        "Assess imminent danger, consider duty to warn/protect, and report elder abuse if legally mandated",
        "Only take action if the client actually harms the parent",
        "Immediately hospitalize the client",
      ],
      correct: 1,
      explanation:
        "Multiple considerations: 1) Tarasoff duty to protect if credible threat to identifiable victim (same analysis as any threat—seriousness, imminence, means, check state law), 2) Mandatory elder abuse reporting (most states require reporting suspected abuse/neglect of elderly persons), 3) Client confidentiality. Steps: 1) Assess dangerousness and imminence, 2) Determine if situation meets elder abuse reporting criteria in your state, 3) If imminent danger or reportable abuse, take appropriate action (warning, reporting, hospitalization), 4) Consult if unclear, 5) Document thoroughly. Address therapeutically while fulfilling legal/ethical duties. Inform client of confidentiality limits at treatment outset.",
    },
    {
      q: "Standard 9.02(b) on use of assessments requires that psychologists use assessment instruments in the manner and for the purposes indicated by research or evidence. Using tests for purposes not validated is:",
      options: [
        "Acceptable if the psychologist has extensive experience",
        "Unethical unless the psychologist documents the relevance and validity of the approach and acknowledges limitations",
        "Always prohibited under any circumstances",
        "Acceptable without any additional requirements",
      ],
      correct: 1,
      explanation:
        "Standard 9.02(b) requires psychologists to use assessments appropriately based on research evidence. Using tests for non-validated purposes (e.g., using a personality test for custody evaluation without validity evidence) is problematic. However, Standard 9.02(b) allows using tests in novel ways IF: 1) Document and explain the rationale, 2) Acknowledge explicitly in reports that this use lacks validation, 3) Don't overinterpret results, 4) Consider this exploratory information, not definitive findings, 5) Use alongside other validated methods. Distinguish between reasonable clinical judgment in interpretation vs. misusing tests entirely outside their validated purpose. When in doubt, use validated measures.",
    },
    {
      q: "When practicing telepsychology, a psychologist must be licensed in:",
      options: [
        "The state where the psychologist is physically located",
        "The state where the client is physically located at the time of service",
        "Either state, at the psychologist's discretion",
        "No specific state if services are provided via internet"
      ],
      correct: 1,
      explanation: "Psychology is regulated by the state where the client is located when receiving services (ASPPB guidance, state laws). PSYPACT (Psychology Interjurisdictional Compact) allows temporary practice across participating states for eligible psychologists. Pre-PSYPACT or for non-participating states, psychologists need full licensure in the client's state. Verify state laws as some have exceptions (consultation, temporary practice). Also consider: HIPAA-compliant platforms, informed consent about technology risks, emergency protocols, cross-state differences in mandatory reporting."
    },
  ],
  flashcards: [
    {
      front: "APA General Principles (aspirational)",
      back: "A: Beneficence & Nonmaleficence. B: Fidelity & Responsibility. C: Integrity. D: Justice. E: Respect for People's Rights & Dignity. These are aspirational goals; the Ethical Standards are enforceable rules.",
    },
    {
      front: "Exceptions to Confidentiality",
      back: "1) Imminent danger to self or others 2) Suspected child/elder abuse (mandatory reporting) 3) Court order (not just subpoena) 4) Client waiver/consent 5) Consultation with colleagues (de-identified) 6) Insurance/third-party payers (limited info) 7) Legal proceedings involving the client",
    },
    {
      front: "Tarasoff I vs. Tarasoff II",
      back: "Tarasoff I (1974): Duty to warn the identifiable victim. Tarasoff II (1976): Expanded to duty to protect, which may include warning, notifying police, hospitalizing, or other reasonable steps. Not all states follow Tarasoff; some have modified or rejected it.",
    },
    {
      front: "Competence (Standard 2.01)",
      back: "Psychologists provide services only within boundaries of their competence based on education, training, supervised experience, consultation, study, or professional experience. In emergencies, may provide services outside competence to ensure services aren't denied, but must obtain training afterward.",
    },
    {
      front: "HIPAA Privacy Rule Basics",
      back: "Protects Protected Health Information (PHI). Psychotherapy notes have extra protection (not part of medical record, require separate authorization except: therapist's own use, supervision, legal defense, or as required by law). Minimum necessary standard. Patients have right to access, amend, and accounting of disclosures. Business Associates Agreements (BAAs) required for vendors. Violations: civil penalties ($100-50,000 per violation) and criminal penalties. Applies to covered entities (most healthcare providers).",
    },
    {
      front: "Decision-Making Models for Ethical Dilemmas",
      back: "1) Identify the problem/stakeholders 2) Review relevant ethics codes, laws, guidelines 3) Consider ethical principles (beneficence, nonmaleficence, autonomy, justice, fidelity) 4) Generate alternatives 5) Consider consequences 6) Consult colleagues/ethics committees 7) Choose course of action 8) Implement and document 9) Reflect/evaluate. Document decision-making process. When law and ethics conflict, make efforts to resolve; follow law but work to change unjust laws.",
    },
    {
      front: "Mandatory Reporting Laws",
      back: "Psychologists are mandated reporters in all states for suspected child abuse/neglect. Report to CPS/law enforcement. Immunity for good-faith reports. Elder abuse (most states), dependent adult abuse (some states). Report even if suspected, not confirmed. Know state-specific laws: age definitions (child = under 18 vs. 16), reporting timelines (immediate vs. 24-48 hours), online reporting options. Reporting doesn't require certainty—'reasonable suspicion' standard.",
    },
    {
      front: "Competence (Standard 2.01) - Boundaries and Gaining Competence",
      back: "Provide services within boundaries of competence (education, training, supervision, experience). Emerging areas: study, training, consultation, supervision. New populations: cultural competence development. Emergencies: provide services outside usual competence to prevent harm, then obtain necessary training. Don't practice outside competence even if client requests. Declining competence (aging, illness): monitor, seek consultation, discontinue if impaired. Ongoing continuing education.",
    },
    {
      front: "Bartering for Services (Standard 6.05)",
      back: "Not prohibited but potentially exploitative, especially if: clinically contraindicated, exploitative, impairs objectivity, creates multiple relationship. Acceptable if: not clinically contraindicated, not exploitative, culturally normative (some rural/indigenous communities), fair value, documented agreement. Cash payment preferred. Example: accepting farm produce in agricultural community may be acceptable; accepting client's car for therapy likely problematic. Use caution and document rationale.",
    },
    {
      front: "Forensic vs. Therapeutic Roles",
      back: "Therapeutic: Client's interests, confidentiality, relationship-focused, advocacy. Forensic: Court/truth-finding, limited confidentiality, objective/impartial, data-focused. AVOID dual roles—don't evaluate your therapy client for court. Can review records of therapy client for limited purpose (fitness to waive rights) but not custody evaluation. APA Specialty Guidelines for Forensic Psychology (2013). Clearly define role, explain confidentiality limits, base opinions on adequate data.",
    },
    {
      front: "Assessment Feedback (Standard 9.10)",
      back: "Psychologists provide assessment results and interpretation to clients (or legal representative) in understandable language unless court-ordered evaluation or when precluded (e.g., pre-employment screening). With children: provide parent/guardian with findings appropriate to their understanding. Discuss strengths, not just deficits. Provide opportunity for questions. Document feedback session. Some exceptions for organizational consulting, but default is to provide feedback. Balance thoroughness with accessibility.",
    },
    {
      front: "Sexual Harassment (Standard 3.02)",
      back: "Psychologists don't engage in sexual harassment: unwelcome sexual advances, requests for favors, verbal/physical conduct of sexual nature. Includes: supervisors→trainees, employers→employees, colleagues→colleagues, psychologists→clients (separately prohibited under 10.05-.08). Creates hostile work environment, quid pro quo. Report harassment, support victims, establish policies. Even 'consensual' relationships in supervisory context are problematic due to power differential. Zero tolerance in training programs.",
    },
    {
      front: "Test Security (Standard 9.11)",
      back: "Psychologists make reasonable efforts to maintain test security and integrity. Don't share manuals/protocols with unqualified persons. Obsolete tests: remove from circulation. Prevent client access to test items/answers (except when feedback provided). Teach clients about testing without exposing items. Internet has increased test security threats. Copyright violations serious. Exception: forensic disclosure when legally required, but request protective orders. APA/test publishers enforce.",
    },
    {
      front: "Psychologists' Personal Problems & Impairment (Standard 2.06)",
      back: "When personal problems (illness, substance use, mental health, life stress) may interfere with professional effectiveness: seek consultation, limit/suspend/terminate practice, obtain appropriate treatment. Colleagues: if psychologist is impaired, encourage self-help; if ineffective and poses harm risk, report. State licensing boards and colleague assistance programs available. Confidential monitoring programs in many states. Ethical obligation to protect clients even when difficult personally. Self-care is ethical imperative.",
    },
    {
      front: "Standard 3.04: Avoiding Harm",
      back: "Psychologists take reasonable steps to avoid harming clients, research participants, students, and others with whom they work, and to minimize harm where it is foreseeable and unavoidable. Harm can be psychological, physical, or financial. When harm occurs despite precautions, take steps to address it. Document risk/benefit analysis for procedures with potential harm. Requires ongoing assessment of impact and adjustment of approach.",
    },
    {
      front: "Standard 4.01: Maintaining Confidentiality",
      back: "Psychologists have primary obligation to maintain confidentiality of client information. Applies to: clinical records, test data, treatment communications, client identity. Extends beyond sessions (don't discuss in elevators, waiting rooms, with family). Use secure record storage, HIPAA-compliant technology, dispose of records securely. Limit discussion with colleagues to clinical necessity (consultation). Supervise staff to ensure confidentiality. Violations can result in licensure actions, lawsuits, loss of trust.",
    },
    {
      front: "Standard 7.06: Assessing Student and Supervisee Performance",
      back: "Psychologists evaluate students/supervisees based on actual performance on established program requirements. Evaluations should be: timely (ongoing feedback, not just end-of-year), specific, behaviorally-based, documented, linked to competencies. Due process for remediation plans: specific concerns identified, measurable goals, timeline, consequences if goals not met, opportunity to respond. Document all evaluations. Separate personal feelings from professional assessment. Address problems early.",
    },
    {
      front: "Standard 8.07: Deception in Research",
      back: "Psychologists don't conduct studies with deception unless: 1) justified by prospective scientific/educational value, 2) alternative non-deceptive procedures not feasible, 3) not about aspects participants would affect willingness to participate (pain, emotional distress). Debrief as early as feasible, preferably at study conclusion. Explain deception, answer questions, address any harm. Participants can withdraw data after learning of deception. Some deception acceptable (e.g., cover story about study purpose), but not about risks.",
    },
    {
      front: "Standard 10.03: Group Therapy",
      back: "When providing group therapy, psychologists describe at the outset: roles, confidentiality limits (psychologist can't guarantee other members maintain confidentiality), fees, and expectations. Address: 1) Confidentiality is expected but not guaranteed, 2) Group members should not have outside relationships, 3) Parameters for adding/removing members, 4) Procedures for ending participation. Be aware of dynamics—address scapegoating, monopolizing, etc. Screen members for appropriateness. Obtain informed consent from all members.",
    },
    {
      front: "Standard 10.05-10.08: Sexual Intimacies",
      back: "10.05: Never engage in sexual intimacies with current clients. 10.06: Don't accept as therapy clients those with whom you've had sexual intimacies. 10.07: Don't provide therapy to former sexual partners. 10.08: Don't engage in sexual intimacies with former therapy clients for at least 2 years; after 2 years only in most unusual circumstances (burden on psychologist to prove no exploitation). Even therapy with ex-partner's family member is problematic.",
    },
    {
      front: "HIPAA vs. HITECH",
      back: "HIPAA (1996): Established privacy/security rules for PHI. HITECH (2009): Strengthened HIPAA for digital age. Key HITECH provisions: breach notification requirements (inform affected individuals, HHS, media if 500+ affected), increased penalties for violations (tiered based on culpability, up to $1.5M per violation type annually), extended liability to Business Associates, EHR incentives/requirements. Omnibus Rule (2013) implemented HITECH changes. Greater enforcement and higher penalties since HITECH.",
    },
    {
      front: "PSYPACT (Psychology Interjurisdictional Compact)",
      back: "Interstate compact allowing temporary practice across participating states for eligible psychologists. Eligibility: doctoral degree, licensed in home state, no discipline, pass jurisprudence exam. Allows: telepsychology to clients in PSYPACT states, temporary in-person practice (up to 30 days per year per state). Requires: Authority to Practice Interjurisdictional Telepsychology (APIT) credential. Currently 40+ participating states (2024). Doesn't eliminate state practice acts—must follow laws where client is located. Fee-based system.",
    },
    {
      front: "APA Record Keeping Guidelines (2007)",
      back: "Key recommendations: 1) Retain records 7 years after last contact (adults) or 3 years after minor reaches majority, 2) Document significant decisions/rationale, 3) Include informed consent, fees, releases, assessment data, treatment plans, progress notes, termination summaries, 4) Balance thoroughness with efficiency, 5) Clear enough that another professional could continue treatment, 6) Timely completion, 7) Secure storage, 8) Plan for death/incapacity. State laws may vary—follow most stringent requirement.",
    },
    {
      front: "Standard 1.03: Conflicts Between Ethics and Organizational Demands",
      back: "If ethical responsibilities conflict with organizational demands, psychologists clarify nature of conflict, make known commitment to Ethics Code, and take reasonable steps to resolve. If unresolvable, consider: 1) Whether the conflict can be addressed (propose policy changes, educate organization), 2) Document efforts to resolve, 3) If conflict persists and requires substantial ethical violation, may need to resign. Example: prison requiring participation in interrogation violating torture prohibition. Don't use employment as excuse to violate ethics.",
    },
    {
      front: "Standard 9.07: Assessment by Unqualified Persons",
      back: "Psychologists don't promote use of assessment techniques by unqualified persons (except when providing training). Psychological testing requires: knowledge of psychometrics, training in specific tests, understanding of limitations, ability to interpret in context. Can train others to administer under supervision, but interpretation requires expertise. Don't give tests/manuals to clients, coaches, teachers, etc. If tests administered by assistants (common in neuropsych), must supervise directly, review results personally, take responsibility for interpretations.",
    },
    {
      front: "Standard 10.04: Providing Therapy to Those Served by Others",
      back: "When providing therapy to someone already receiving services from another professional, psychologists minimize confusion and conflict. Obtain consent to contact other provider, discuss clinical coordination. Don't undermine previous provider without basis. If previous provider is providing inadequate care, address professionally. Clarify roles (primary therapist vs. consultant vs. medication management vs. adjunct services). Discuss with client whether multiple providers is appropriate or creates splitting/contradictory approaches.",
    },
    {
      front: "APA Guidelines for Psychological Practice with Lesbian, Gay, and Bisexual Clients (2012)",
      back: "Key points: 1) Sexual orientation is not a mental illness, 2) Understand heterosexism, stigma, discrimination effects on mental health, 3) Don't assume heterosexuality, 4) Gain knowledge of LGB issues, 5) Respect clients' self-definitions, 6) Understand intersectionality (race, religion, disability, etc.), 7) Involve support systems (partners, chosen family), 8) Don't assume problems stem from sexual orientation, 9) Conversion therapy is not supported and potentially harmful. Cultural competence required.",
    },
    {
      front: "Standard 5.04: Media Presentations",
      back: "When psychologists provide advice via public media (radio, TV, internet, print), they base statements on appropriate psychological literature and practice, are consistent with Ethics Code, and don't indicate therapeutic relationship with audience. Avoid: 1) Giving individualized clinical advice without proper evaluation, 2) Creating unrealistic expectations, 3) Guaranteeing outcomes, 4) Making claims not supported by research. Distinguish psychoeducation from individualized treatment. Clarify role and limitations.",
    },
    {
      front: "APA Ethical Standard 1.04: Informal Resolution of Ethical Violations",
      back: "When psychologists believe another psychologist has committed ethics violation, they attempt informal resolution by bringing it to colleague's attention IF: 1) feasible, 2) won't violate confidentiality rights, 3) doesn't involve violation that creates risk of harm (those require immediate reporting). Document informal attempt. If colleague is unaware they're violating ethics, education may resolve issue. If colleague refuses to address or violation is substantial, proceed to formal action (Standard 1.05). Balance: protecting public/profession vs. collegial problem-solving.",
    },
    {
      front: "Standard 6.03: Withholding Records for Nonpayment",
      back: "Psychologists may not withhold records under their control that are needed for client's emergency treatment solely because payment has not been received. Exception is when records are needed for emergency care—must provide those. Can withhold other records (complete records, records for non-urgent purposes) until payment, BUT consider: 1) State laws may prohibit withholding, 2) Withholding records may harm client, 3) Negotiate payment plans rather than withhold. Best practice: discuss fees/payment upfront, address nonpayment proactively, don't use records as leverage.",
    },
  ],
};
