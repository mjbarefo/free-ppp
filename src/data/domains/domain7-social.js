export const socialDomain = {
  id: "social",
  name: "Social & Multicultural Bases",
  weight: 12,
  color: "#E05555",
  icon: "🌍",
  description: "Social psychology, cultural diversity, group dynamics",
  topics: [
    "Attribution theory (fundamental attribution error, actor-observer bias)",
    "Social influence (conformity, obedience, compliance, Cialdini's principles)",
    "Attitudes and persuasion (ELM, cognitive dissonance)",
    "Group dynamics (groupthink, social loafing, polarization, deindividuation)",
    "Prejudice, stereotyping, and discrimination (implicit bias, IAT)",
    "Intergroup relations (contact hypothesis, realistic conflict theory, social identity theory)",
    "Cultural competence and cultural humility",
    "Acculturation and racial identity models (Berry, Cross, Helms)",
    "Microaggressions and microinterventions",
    "LGBTQ+ identity development and affirming practice (Cass model, minority stress)",
    "Intersectionality and multiple identities",
    "White privilege and racism (aversive racism, symbolic racism)",
    "Classic studies (Milgram, Asch, Zimbardo, Sherif)",
    "Prosocial behavior and altruism (bystander effect, empathy-altruism)",
    "Aggression (frustration-aggression, weapons effect)",
    "Cultural dimensions (Hofstede, individualism-collectivism, power distance)",
    "Historical trauma and intergenerational transmission",
    "Cultural concepts (familismo, face-saving, code-switching)",
  ],
  questions: [
    {
      q: "The fundamental attribution error refers to the tendency to:",
      options: [
        "Attribute our successes to internal factors",
        "Overestimate situational factors for others' behavior",
        "Overestimate dispositional factors when explaining others' behavior",
        "Attribute all behavior to unconscious motivations",
      ],
      correct: 2,
      explanation:
        "The fundamental attribution error (correspondence bias) is the tendency to overemphasize internal/dispositional factors and underestimate external/situational factors when explaining others' behavior. This bias is less common in collectivist cultures.",
    },
    {
      q: "In Milgram's obedience studies, the percentage of participants who administered the maximum shock level was approximately:",
      options: ["10%", "35%", "65%", "90%"],
      correct: 2,
      explanation:
        "In Milgram's classic studies on obedience, approximately 65% of participants delivered the maximum 450-volt shock when instructed by an authority figure. Factors that increased obedience included proximity of the authority figure, institutional legitimacy, and physical distance from the 'learner.'",
    },
    {
      q: "Sue and Sue's model of cultural competence emphasizes three components:",
      options: [
        "Knowledge, Skills, Values",
        "Awareness, Knowledge, Skills",
        "Empathy, Knowledge, Action",
        "Understanding, Acceptance, Advocacy",
      ],
      correct: 1,
      explanation:
        "Sue and Sue's multicultural competence model includes: (1) Awareness of one's own cultural values and biases, (2) Knowledge of the worldviews of culturally diverse clients, and (3) Skills in developing appropriate intervention strategies.",
    },
    {
      q: "According to Berry's acculturation model, an individual who maintains their heritage culture while also adopting the host culture is demonstrating:",
      options: [
        "Assimilation",
        "Integration",
        "Separation",
        "Marginalization",
      ],
      correct: 1,
      explanation:
        "Berry's bidimensional model identifies four acculturation strategies: Integration (maintaining heritage culture + adopting host culture), Assimilation (adopting host culture, rejecting heritage), Separation (maintaining heritage, rejecting host), and Marginalization (rejecting both). Integration is generally associated with the best psychological outcomes.",
    },
    {
      q: "Stereotype threat, as studied by Steele and Aronson, occurs when:",
      options: [
        "People hold negative stereotypes about outgroup members",
        "Awareness of negative stereotypes about one's group impairs performance",
        "Stereotypes are automatically activated in social situations",
        "Implicit biases influence clinical decision-making",
      ],
      correct: 1,
      explanation:
        "Stereotype threat occurs when individuals are at risk of confirming negative stereotypes about their social group, which creates anxiety and cognitive load that impairs performance. Classic studies showed African American students underperformed on difficult tests when race was made salient. Interventions include reframing tasks and affirming values.",
    },
    {
      q: "A psychologist working with a Latinx client should be aware that 'familismo' refers to:",
      options: [
        "Traditional gender role expectations",
        "Strong identification and attachment to nuclear and extended family",
        "Preference for same-ethnicity therapists",
        "Collectivist orientation toward the broader community",
      ],
      correct: 1,
      explanation:
        "Familismo is a core Latino cultural value emphasizing strong identification, attachment, and loyalty to nuclear and extended family. Family needs often take precedence over individual needs. Psychologists should consider family involvement in treatment planning and recognize that individual-focused Western therapy models may conflict with this value.",
    },
    {
      q: "Microaggressions are BEST defined as:",
      options: [
        "Overt acts of discrimination based on protected characteristics",
        "Brief, commonplace slights that communicate hostile or derogatory messages to marginalized groups",
        "Unconscious biases that have no real-world impact",
        "Cultural misunderstandings between therapist and client",
      ],
      correct: 1,
      explanation:
        "Sue et al. define microaggressions as brief, everyday verbal, behavioral, or environmental indignities (often unintentional) that communicate hostile, derogatory, or negative slights to marginalized groups. Types include microassaults (explicit), microinsults (subtle degradations), and microinvalidations (negating experiences). Cumulative exposure is linked to psychological distress.",
    },
    {
      q: "When working with LGBTQ+ clients, an affirming psychologist would MOST likely:",
      options: [
        "Maintain neutrality about the client's sexual orientation or gender identity",
        "Actively validate the client's identity and address minority stress",
        "Focus exclusively on presenting problems unrelated to identity",
        "Recommend conversion therapy if the client expresses distress",
      ],
      correct: 1,
      explanation:
        "Affirming practice involves actively validating LGBTQ+ identities, understanding minority stress (stigma, discrimination, internalized negativity), addressing identity development, and never recommending conversion therapy (condemned by APA as harmful and ineffective). The APA Guidelines for Psychological Practice with Sexual Minority Persons emphasize affirmation and advocacy.",
    },
    {
      q: "The concept of 'cultural humility' differs from 'cultural competence' in that it emphasizes:",
      options: [
        "Mastery of knowledge about all cultural groups",
        "A lifelong process of self-reflection and learning from clients",
        "Completion of diversity training workshops",
        "Matching therapists with clients of the same cultural background",
      ],
      correct: 1,
      explanation:
        "Cultural humility (Tervalon & Murray-Garcia) is a process-oriented approach emphasizing lifelong learning, self-reflection about power dynamics, and a stance of openness where clients are the experts on their own cultural experience. Unlike the endpoint-focused 'competence' model, humility acknowledges we can never be fully competent in another's culture and must remain curious and humble learners.",
    },
    {
      q: "Implicit bias, as measured by the Implicit Association Test (IAT), refers to:",
      options: [
        "Consciously held prejudiced attitudes",
        "Automatic, unconscious associations between concepts (e.g., race and traits)",
        "Deliberate discrimination against outgroups",
        "Explicit endorsement of stereotypes"
      ],
      correct: 1,
      explanation: "Implicit bias: automatic, unconscious associations activated without awareness or intention. Measured via IAT (response time differences when pairing concepts). Can contradict explicit attitudes (consciously endorsing equality while showing implicit bias). Present in most people due to cultural conditioning. Affects clinical judgment, diagnosis, treatment recommendations. Mitigation: awareness, counter-stereotypic exemplars, accountability, structured decision-making. Controversy: IAT's predictive validity for behavior debated, but demonstrates automatic associations exist."
    },
    {
      q: "Social identity theory (Tajfel & Turner) proposes that:",
      options: [
        "Identity is solely determined by individual characteristics",
        "People derive part of their self-concept from group memberships and favor ingroups over outgroups",
        "All groups are equally valued in society",
        "Individual identity is more important than social identity"
      ],
      correct: 1,
      explanation: "Social identity theory: Self-concept includes personal identity (individual traits) and social identity (group memberships: race, gender, religion, profession). People enhance self-esteem through positive group evaluation, leading to ingroup favoritism and outgroup derogation. Explains prejudice, discrimination, intergroup conflict. Minimal group paradigm: even arbitrary group assignments create bias. Interventions: recategorization (common ingroup identity), cross-cutting categories, contact under optimal conditions. Fundamental theory in understanding prejudice and group dynamics."
    },
    {
      q: "According to the contact hypothesis (Allport), intergroup contact reduces prejudice MOST effectively when:",
      options: [
        "Contact is brief and superficial",
        "Groups have equal status, common goals, intergroup cooperation, and institutional support",
        "Contact occurs in competitive situations",
        "Groups maintain clear hierarchical differences"
      ],
      correct: 1,
      explanation: "Allport's optimal contact conditions: 1) Equal status between groups in the situation, 2) Common goals, 3) Intergroup cooperation (not competition), 4) Authority/institutional support. Meta-analyses confirm contact reduces prejudice, especially with these conditions. Examples: jigsaw classroom (Aronson), intergroup dialogue programs. Limitations: doesn't address structural inequality, may not generalize beyond contact situation. Extended contact (knowing ingroup members have outgroup friends) also effective. Critical for diversity interventions."
    },
    {
      q: "The just-world hypothesis (Lerner) suggests that people:",
      options: [
        "Believe everyone is treated fairly and deserves their outcomes",
        "Are motivated to believe the world is fair, leading to victim-blaming",
        "Actively work to create justice in society",
        "Recognize systemic injustice"
      ],
      correct: 1,
      explanation: "Just-world belief: 'People get what they deserve.' Provides sense of control and predictability but leads to victim-blaming ('She must have done something to deserve assault,' 'Poor people are lazy'). Protects belief in fairness by attributing suffering to victims' actions/character. Particularly strong when: can't help victim, victim is dissimilar. Clinical relevance: trauma survivors may blame themselves (rape, abuse), secondary victimization in legal system. Intervention: educate about systemic factors, challenge attributions, validate experiences."
    },
    {
      q: "Ingroup bias (ingroup favoritism) is demonstrated by the tendency to:",
      options: [
        "Treat all groups equally",
        "Allocate more resources to and evaluate more favorably members of one's own group",
        "Reject one's group membership",
        "Show hostility toward ingroup members"
      ],
      correct: 1,
      explanation: "Ingroup bias: preferential treatment of one's own group members (resource allocation, hiring, evaluation, trust). Minimal group paradigm (Tajfel): even trivial categorization (coin flip, art preference) creates bias. Outgroup homogeneity effect: 'They're all alike; we're diverse.' Ultimate attribution error: ingroup successes → dispositional; failures → situational (reverse for outgroup). Explains much discrimination, from employment to healthcare. Awareness, accountability, structured decision-making reduce bias. Distinguishes ingroup favoritism from outgroup derogation (often separate processes)."
    },
    {
      q: "Microinvalidations, a type of microaggression, are characterized by:",
      options: [
        "Explicit verbal attacks",
        "Subtle communications that negate or nullify the thoughts, feelings, or experiences of marginalized people",
        "Overt discriminatory acts",
        "Physical violence"
      ],
      correct: 1,
      explanation: "Sue's microaggression taxonomy: 1) Microassaults (explicit, deliberate, old-fashioned prejudice), 2) Microinsults (subtle put-downs, rudeness), 3) Microinvalidations (negating reality/experiences). Examples: 'I don't see color,' 'You're being too sensitive,' 'Racism doesn't exist anymore,' invalidating discrimination experiences. Particularly insidious because they question victim's perception of reality (gaslighting). Clinical impact: When therapists microinvalidate clients' experiences of discrimination, damages alliance. Intervention: believe clients' experiences, validate impact, examine own biases."
    },
    {
      q: "Intersectionality (Crenshaw) refers to:",
      options: [
        "The intersection of psychology and sociology",
        "Overlapping systems of discrimination based on multiple identities (race, gender, class, etc.) creating unique experiences",
        "The crossing of international borders",
        "Therapeutic integration of multiple theoretical approaches"
      ],
      correct: 1,
      explanation: "Intersectionality: overlapping, interdependent systems of discrimination/disadvantage based on multiple social identities. A Black woman experiences sexism AND racism in ways distinct from White women or Black men (not additive but multiplicative). Originated in Black feminist thought (Combahee River Collective, Crenshaw). Critiques single-axis frameworks. Clinical application: understand clients' multiple identities, avoid assumptions, recognize unique stressors. Example: LGBTQ+ person of color faces distinct challenges from White LGBTQ+ or heterosexual people of color."
    },
    {
      q: "Minority stress model (Meyer) proposes that LGBTQ+ individuals experience excess stress due to:",
      options: [
        "Individual psychopathology",
        "Stigma, prejudice, and discrimination creating both distal (external) and proximal (internal) stressors",
        "Genetic vulnerabilities",
        "Poor coping skills"
      ],
      correct: 1,
      explanation: "Minority stress: excess stress from stigmatized status beyond general life stress. Distal stressors: external, objective (discrimination, violence, rejection). Proximal stressors: internal, subjective (expectations of rejection, concealment, internalized homophobia/transphobia). Chronic, cumulative, linked to mental/physical health disparities (depression, anxiety, substance use, suicide). Mediated by: coping, social support, community connection. Intervention: affirming therapy, address internalized stigma, build resilience, advocacy. Explains health disparities without pathologizing LGBTQ+ identities."
    },
    {
      q: "The concept of 'white privilege' (McIntosh) refers to:",
      options: [
        "Wealth accumulated by White individuals",
        "Unearned advantages and societal benefits automatically conferred by being perceived as White",
        "Conscious racist attitudes held by White people",
        "Political power held exclusively by White people"
      ],
      correct: 1,
      explanation: "White privilege: unearned systemic advantages based on being perceived as White—not consciously sought but structurally embedded (housing, employment, education, criminal justice, healthcare, media representation). Distinct from: individual attitudes (can have privilege without being racist), economic class (though intersect), earned advantages. McIntosh: 'invisible knapsack'—things taken for granted (seeing your race represented, not followed in stores, getting benefit of doubt). Evokes defensiveness; reframe as system analysis, not individual blame. Understanding privilege is part of cultural competence."
    },
    {
      q: "The elaboration likelihood model of persuasion (Petty & Cacioppo) distinguishes between:",
      options: [
        "Classical and operant conditioning",
        "Central route (careful processing of message content) and peripheral route (superficial cues like attractiveness)",
        "Implicit and explicit attitudes",
        "Ingroup and outgroup influence"
      ],
      correct: 1,
      explanation: "ELM: Two routes to persuasion. Central route: High elaboration, careful evaluation of argument quality, requires motivation + ability, produces durable attitude change. Peripheral route: Low elaboration, reliance on superficial cues (attractiveness, expertise, number of arguments, emotions), requires low motivation/ability, produces temporary change. Factors determining route: personal relevance, cognitive capacity, distraction. Clinical application: motivating clients (central), adherence messaging (match to route), recognizing when patients persuaded by peripheral cues vs. genuine understanding."
    },
    {
      q: "Cognitive dissonance (Festinger) is reduced by all of the following EXCEPT:",
      options: [
        "Changing behavior to match attitudes",
        "Changing attitudes to match behavior",
        "Adding consonant cognitions",
        "Increasing the number of contradictory beliefs"
      ],
      correct: 3,
      explanation: "Dissonance reduction strategies: 1) Change behavior (stop smoking), 2) Change cognition/attitude ('Smoking isn't that bad'), 3) Add consonant cognitions ('Smoking relieves stress'), 4) Reduce importance ('Who wants to live to 90 anyway?'). Increasing contradictions INCREASES dissonance. Classic studies: Induced compliance (counterattitudinal behavior), post-decision dissonance (spread of alternatives), effort justification (hazing increases group value). Clinical application: MI leverages dissonance between current behavior and goals; understanding resistance as dissonance reduction."
    },
    {
      q: "Acculturation stress (acculturative stress) refers to:",
      options: [
        "Normal stress experienced by all people",
        "Psychological impact of adapting to a new culture, including anxiety, depression, and identity confusion",
        "Stress from traveling internationally",
        "Positive excitement about new cultural experiences"
      ],
      correct: 1,
      explanation: "Acculturative stress: psychological, social, physical impact of cultural adaptation. Sources: language barriers, discrimination, cultural value conflicts, loss of social support, identity confusion, separation from family/homeland. Linked to anxiety, depression, substance use, somatization. Moderators: social support, integration strategy (better than marginalization), bicultural competence, pre-migration trauma. Assessment: consider immigration circumstances (voluntary vs. forced), generation status, documentation status. Intervention: validate experiences, build bicultural identity, connect to community, address discrimination trauma. Avoid pathologizing normal adaptation process."
    },
    {
      q: "The bystander effect (Darley & Latané) describes the finding that:",
      options: [
        "People are more helpful when alone than in groups",
        "Larger groups always help more than individuals",
        "Emergency situations are always recognized immediately",
        "Authority figures prevent helping behavior"
      ],
      correct: 0,
      explanation: "Bystander effect: Individuals less likely to help when others present. Mechanisms: 1) Diffusion of responsibility ('Someone else will help'), 2) Pluralistic ignorance (looking to others for cues; if all passive, interpret as non-emergency), 3) Evaluation apprehension (fear of embarrassment). Famous Kitty Genovose case (though details later disputed). Overcome by: making one person responsible, reducing ambiguity, building self-efficacy, modeling. Clinical relevance: understanding why clients may not have received help, community intervention programs."
    },
    {
      q: "Social loafing refers to the tendency for individuals to:",
      options: [
        "Work harder in groups than when alone",
        "Exert less effort when working collectively than individually",
        "Conform to group norms",
        "Take more risks in group settings"
      ],
      correct: 1,
      explanation: "Social loafing: reduced individual effort in group tasks where contributions are pooled and less identifiable. Occurs when: tasks are additive, individual contributions not evaluated, low task meaningfulness, large groups. Doesn't occur when: contributions are identifiable, task is personally meaningful, cohesive groups, collectivist cultures (may show social striving). Related to diffusion of responsibility. Reduce by: making individual contributions visible, increasing task importance, reducing group size, building accountability."
    },
    {
      q: "Groupthink (Janis) is characterized by all of the following EXCEPT:",
      options: [
        "Illusion of invulnerability",
        "Pressure on dissenters",
        "Careful consideration of alternatives",
        "Collective rationalization"
      ],
      correct: 2,
      explanation: "Groupthink: mode of thinking where desire for harmony/conformity leads to irrational/dysfunctional decision-making. Symptoms: illusion of invulnerability, collective rationalization, belief in inherent morality, stereotyped views of outgroups, self-censorship, illusion of unanimity, pressure on dissenters, self-appointed mindguards. Occurs in: cohesive groups, insulation, directive leadership, stress, lack of procedures for alternatives. Famous cases: Bay of Pigs, Challenger disaster. Prevention: encourage dissent, devil's advocate, outside input, leader remains impartial."
    },
    {
      q: "The theory of planned behavior (Ajzen) predicts that behavior is determined by:",
      options: [
        "Attitudes alone",
        "Attitudes toward the behavior, subjective norms, and perceived behavioral control",
        "Past behavior only",
        "Unconscious motivations"
      ],
      correct: 1,
      explanation: "Theory of Planned Behavior (TPB): extends Theory of Reasoned Action. Behavioral intention predicted by: 1) Attitude toward behavior (positive/negative evaluation), 2) Subjective norm (perceived social pressure), 3) Perceived behavioral control (PBC—confidence in ability). PBC also directly predicts behavior (similar to self-efficacy). Widely used in health psychology (exercise, condom use, screening). Interventions target these components to change intention and behavior. Meta-analyses show moderate prediction of behavior."
    },
    {
      q: "According to Sherif's Robbers Cave study, intergroup conflict was reduced through:",
      options: [
        "Increased contact alone",
        "Competition between groups",
        "Superordinate goals requiring cooperation",
        "Complete separation of the groups"
      ],
      correct: 2,
      explanation: "Robbers Cave: classic study on intergroup relations. Phase 1: Group formation. Phase 2: Competition created hostility (realistic conflict theory—competition for scarce resources causes prejudice). Phase 3: Contact alone failed; superordinate goals (requiring intergroup cooperation for mutually desired outcomes) reduced conflict. Demonstrates: prejudice emerges from competition, contact alone insufficient, cooperation on common goals reduces hostility. Foundation for cooperative learning (jigsaw classroom), peace-building interventions."
    },
    {
      q: "Self-fulfilling prophecy (Rosenthal effect) occurs when:",
      options: [
        "People's expectations have no impact on outcomes",
        "Expectations about a person elicit behavior confirming those expectations",
        "Individuals accurately predict their own performance",
        "Random events appear to confirm beliefs"
      ],
      correct: 1,
      explanation: "Self-fulfilling prophecy: expectations cause behavior confirming those expectations. Classic: Rosenthal & Jacobson's 'Pygmalion in classroom'—teachers told certain students were 'bloomers' led to IQ gains (via teacher behavior: more attention, warmth, feedback). Mechanism: expectation → differential treatment → behavior change. Clinical relevance: therapist expectations affect outcomes; diagnostic labels affect treatment; stereotype threat is form of self-fulfilling prophecy. Placebo/nocebo effects also involve expectations influencing outcomes."
    },
    {
      q: "The scarcity principle in social influence suggests that:",
      options: [
        "People value abundant resources more",
        "Items become more desirable when perceived as scarce or limited",
        "Scarcity has no effect on desirability",
        "People avoid scarce resources"
      ],
      correct: 1,
      explanation: "Scarcity principle (Cialdini): opportunities appear more valuable when availability is limited. Psychological reactance: restricting freedom increases desire. Tactics: 'limited time offer,' 'only 2 left,' 'exclusive.' Effectiveness increases when: scarcity is recent (newly scarce), competition for resource. Clinical relevance: understanding advertising/marketing influence on clients, reactance in therapy (restrictions increase desire for prohibited behavior), motivational interviewing avoids triggering reactance by respecting autonomy."
    },
    {
      q: "Deindividuation refers to:",
      options: [
        "Increased self-awareness in groups",
        "Loss of self-awareness and personal responsibility in group situations, often leading to disinhibited behavior",
        "Individual identity becoming stronger in crowds",
        "Heightened concern about others' evaluations"
      ],
      correct: 1,
      explanation: "Deindividuation: reduced self-awareness and self-restraint in group/crowd situations. Factors: anonymity, arousal, diffused responsibility, group size. Consequences: impulsive/deviant behavior, reduced self-regulation, acting on immediate cues. Examples: mob violence, online trolling, looting. Zimbardo demonstrated anonymity increases aggression. Not inevitable—group norms matter (can increase prosocial behavior). Online: anonymity reduces inhibition (trolling, cyberbullying, but also support groups). Awareness of self reduces deindividuation."
    },
    {
      q: "The foot-in-the-door technique involves:",
      options: [
        "Starting with a large request followed by a smaller one",
        "Starting with a small request followed by a larger one",
        "Making requests at inappropriate times",
        "Providing gifts before requests"
      ],
      correct: 1,
      explanation: "Foot-in-the-door: compliance technique where small initial request increases likelihood of agreeing to larger subsequent request. Mechanism: self-perception theory—agreeing to small request changes self-concept ('I'm helpful'), making refusal of larger request inconsistent. Effective when: initial request not too trivial, same person/cause, requests related. Contrast: door-in-the-face (large request rejected, then smaller appears reasonable—reciprocity). Clinical: progressive goals in therapy, building treatment adherence incrementally."
    },
    {
      q: "According to Hofstede, a culture high in power distance is characterized by:",
      options: [
        "Expectation of equal power distribution",
        "Acceptance of unequal power distribution and hierarchical authority",
        "Rejection of all authority",
        "Complete egalitarianism"
      ],
      correct: 1,
      explanation: "Power distance: extent to which less powerful members accept/expect unequal power distribution. High power distance: accept hierarchy, respect authority, centralized decision-making, formal communication (many Asian, Latin American, African cultures). Low power distance: expect equality, challenge authority, participative decision-making, informal communication (Scandinavian, Anglo cultures). Clinical implications: therapy relationships (low power distance = collaborative; high may expect directive expert), family hierarchy, organizational consultation. U.S. therapy models assume low power distance—may need adaptation."
    },
    {
      q: "Realistic conflict theory (Sherif) proposes that prejudice arises from:",
      options: [
        "Personality defects",
        "Competition for limited resources between groups",
        "Genetic predisposition",
        "Cultural traditions alone"
      ],
      correct: 1,
      explanation: "Realistic conflict theory: intergroup hostility stems from competition for scarce resources (jobs, land, power, status). When group interests conflict, prejudice and discrimination emerge. Robbers Cave study demonstrated: competition → prejudice; cooperation on superordinate goals → harmony. Explains economic downturns increasing prejudice, immigration attitudes, ethnic conflicts. Limitations: prejudice exists without objective conflict (minimal group paradigm). Combines with social identity theory for fuller understanding. Interventions: reduce zero-sum thinking, create cooperative interdependence, expand resource pie."
    },
    {
      q: "The door-in-the-face technique is based on the principle of:",
      options: [
        "Consistency",
        "Reciprocity",
        "Scarcity",
        "Authority"
      ],
      correct: 1,
      explanation: "Door-in-the-face: large request (refused) followed by smaller request (target). Works via reciprocal concessions—requester 'concedes' to smaller request, recipient reciprocates by agreeing. Also perceptual contrast (small request seems smaller after large). Effective when: requests by same person, requests related, brief delay. Example: asking to volunteer 2 hrs/week for year (refused), then once/month (accepted). Contrast foot-in-the-door (small to large via consistency). Clinical: negotiating treatment goals, medication adherence strategies."
    },
    {
      q: "Cialdini's principle of social proof suggests that people:",
      options: [
        "Ignore others' behavior when making decisions",
        "Look to others' behavior to determine appropriate conduct, especially under uncertainty",
        "Always act independently",
        "Reject group norms"
      ],
      correct: 1,
      explanation: "Social proof: tendency to view behavior as correct/appropriate to degree others are performing it. Informational social influence—others provide information about reality. Most powerful when: uncertain, similar others, many people. Examples: 'Most guests reuse towels' (conservation), laugh tracks, testimonials. Dark side: pluralistic ignorance (bystander effect), suicide contagion. Clinical: group therapy leverages social proof, peer modeling interventions, social norms marketing (correcting misperceptions of peer behavior to reduce drinking/risky behavior)."
    },
    {
      q: "The outgroup homogeneity effect refers to the tendency to:",
      options: [
        "See outgroup members as diverse individuals",
        "Perceive outgroup members as more similar to each other than ingroup members",
        "View all groups as equally variable",
        "See ingroup members as identical"
      ],
      correct: 1,
      explanation: "Outgroup homogeneity effect: 'They all look/act alike; we're diverse.' Occurs because: more exposure/contact with ingroup (see variability), encode ingroup at individual level and outgroup at category level, motivation to see ingroup positively (specialness requires uniqueness). Facilitates stereotyping—if all group members seem similar, generalizations seem justified. Contributes to: 'They're all terrorists/criminals,' failure to individuate, misidentifications. Intervention: cross-group friendships increase perceived outgroup variability, individuation training."
    },
    {
      q: "According to Zajonc's mere exposure effect:",
      options: [
        "Repeated exposure to a stimulus decreases liking",
        "Repeated exposure to a stimulus increases liking, even without conscious recognition",
        "First impressions are unchangeable",
        "Exposure has no effect on attitudes"
      ],
      correct: 1,
      explanation: "Mere exposure effect: repeated exposure to neutral/positive stimulus increases liking. Occurs even with subliminal presentation (below conscious awareness). Explains: preference for familiar faces, music growing on you, advertising effectiveness. Limitations: doesn't work for initially negative stimuli (intensifies dislike), habituation possible with overexposure. Applications: relationship development (proximity increases attraction via exposure), therapeutic alliance (early sessions build comfort), repeated contact reducing prejudice. Zajonc's research fundamental to understanding attitude formation."
    },
    {
      q: "The sleeper effect in persuasion refers to:",
      options: [
        "Messages received during sleep are more persuasive",
        "A delayed increase in persuasion when source credibility is forgotten but message content is retained",
        "Immediate acceptance of all messages",
        "Rejection of messages over time"
      ],
      correct: 1,
      explanation: "Sleeper effect: initially unpersuasive message (due to low-credibility source) becomes more persuasive over time. Mechanism: source-message dissociation—people forget source but remember message; discounting cue (low credibility) fades faster than message content. Demonstrates attitude change without high-credibility source. Requires: attention to message, initial processing despite discounting, faster forgetting of source than content. Debates about reliability/conditions. Clinical relevance: information from unexpected sources may eventually influence clients; importance of message quality beyond source."
    },
    {
      q: "Aversive racism (Gaertner & Dovidio) describes individuals who:",
      options: [
        "Openly express racist attitudes",
        "Consciously endorse egalitarian values but harbor unconscious negative feelings toward racial minorities",
        "Actively oppose all forms of prejudice",
        "Have no racial biases"
      ],
      correct: 1,
      explanation: "Aversive racism: subtle, often unconscious prejudice in people who consciously reject racism and endorse equality. Characterized by: discomfort/unease around minorities (not overt hostility), bias emerges in ambiguous situations (where non-racial justification available), deny prejudice when accused. Contrasts with 'old-fashioned' overt racism. Manifestations: discriminate when justification available ('not qualified'), avoid interracial contact, microaggressions. Pervasive because unconscious and rationalized. Intervention: awareness of biases, structured decision-making, accountability, intergroup contact."
    },
    {
      q: "Cass's model of LGBTQ+ identity development includes all of the following stages EXCEPT:",
      options: [
        "Identity confusion",
        "Identity comparison",
        "Identity superiority",
        "Identity synthesis"
      ],
      correct: 2,
      explanation: "Cass's stages: 1) Confusion (questioning), 2) Comparison (acknowledging possibility, alienation), 3) Tolerance (seeking community), 4) Acceptance (positive identity), 5) Pride (immersion, activism), 6) Synthesis (integration with other identities). Not linear—individuals may move between stages. Pride involves valuing LGBTQ+ identity and devaluing heteronormativity (not 'superiority'). Similar models: Troiden, D'Augelli. Clinical application: normalize developmental process, tailor support to stage, avoid rushing disclosure, understand stage affects presenting concerns, therapy goals."
    },
    {
      q: "The weapons effect (Berkowitz) demonstrates that:",
      options: [
        "Weapons training reduces aggression",
        "The mere presence of weapons can increase aggressive behavior",
        "Weapons have no effect on behavior",
        "Seeing weapons decreases hostility"
      ],
      correct: 1,
      explanation: "Weapons effect: presence of weapons (even pictures) primes aggression-related thoughts and increases aggressive behavior. Classic study: participants gave more electric shocks when gun was present vs. neutral objects. Supports cognitive neoassociation theory—environmental cues activate related concepts in semantic network (weapons → aggression). Controversial but replicated. Implications: media violence exposure, concealed carry environments, therapeutic settings (weapon-free zones). 'Finger pulls trigger, but trigger can also pull finger.' Environmental priming of behavior."
    },
    {
      q: "According to the frustration-aggression hypothesis (Dollard et al.):",
      options: [
        "Frustration always leads to aggression",
        "Frustration creates readiness for aggression, which may be expressed depending on cues and inhibitions",
        "Aggression never stems from frustration",
        "Frustration and aggression are unrelated"
      ],
      correct: 1,
      explanation: "Frustration-aggression: frustration (blocked goals) increases likelihood of aggression. Revised model: frustration creates negative affect/arousal (not always aggression)—expression depends on: cues (weapons effect), inhibitions (consequences), alternative responses, attributions. Displaced aggression: when can't aggress toward source, target safer victim (scapegoating). Explains: road rage, domestic violence after work stress, prejudice during economic hardship. Clinical: anger management addresses frustration tolerance and alternative responses; CBT challenges interpretations of frustration."
    },
    {
      q: "The attribution theory concept of 'actor-observer bias' suggests that:",
      options: [
        "Actors and observers make identical attributions",
        "Actors attribute their behavior to situations while observers attribute it to dispositions",
        "Observers always attribute behavior to situations",
        "Actors always attribute behavior to dispositions"
      ],
      correct: 1,
      explanation: "Actor-observer bias: we attribute our behavior to situations ('I was late because of traffic') but others' behavior to dispositions ('They're inconsiderate'). Reasons: different perspectives (actors focus on situation, observers focus on actor), more information about own behavior/context, motivation (self-serving bias). Exceptions: positive behaviors, collectivist cultures, close relationships. Clinical applications: therapist-client misattributions, family conflict, understanding clients' perspectives on their behavior, avoiding dispositional labels, exploring situational factors maintaining symptoms."
    },
    {
      q: "Terror management theory (Greenberg, Solomon, Pyszczynski) proposes that awareness of mortality:",
      options: [
        "Has no effect on behavior",
        "Leads to anxiety managed through cultural worldviews and self-esteem",
        "Always causes depression",
        "Reduces prejudice"
      ],
      correct: 1,
      explanation: "Terror management theory: humans manage existential anxiety from death awareness through: 1) Cultural worldviews (meaning, order, immortality through legacy), 2) Self-esteem (valued member of meaningful universe). Mortality salience (reminding of death) increases: worldview defense, ingroup favoritism, prejudice toward worldview threats, conformity, self-esteem striving. Explains: religious fundamentalism, nationalism, intergroup conflict, health behaviors. Clinical relevance: existential concerns in therapy, life-threatening illness, end-of-life care, understanding defenses against death anxiety."
    },
    {
      q: "Informational social influence occurs when people:",
      options: [
        "Conform to be liked",
        "Conform because they believe others have accurate information",
        "Resist all social pressure",
        "Conform without any reason"
      ],
      correct: 1,
      explanation: "Two types of social influence: 1) Normative (conform to be liked/accepted, avoid rejection), 2) Informational (conform because others provide information about reality—'they must know something I don't'). Informational strongest when: situation ambiguous, others are experts, crisis/time pressure. Sherif's autokinetic effect demonstrated informational influence (ambiguous stimulus). Asch's line study showed normative (unambiguous stimulus, conformity to avoid deviance). Clinical: psychoeducation leverages informational influence, testimonials in group therapy."
    },
    {
      q: "The false consensus effect describes the tendency to:",
      options: [
        "Underestimate others' agreement with our views",
        "Overestimate the extent to which others share our beliefs and behaviors",
        "Accurately perceive social norms",
        "Always disagree with consensus"
      ],
      correct: 1,
      explanation: "False consensus: overestimate how many people share our attitudes/behaviors. Mechanisms: selective exposure (associate with similar others), focus on confirmatory evidence, motivational (normalizes own behavior). Opposite: false uniqueness (underestimate commonality of abilities, overestimate own uniqueness). Clinical relevance: clients with risky behavior may think 'everyone does it,' normalizing dysfunction; adolescents overestimate peer substance use; therapists may assume clients share values. Social norms interventions correct misperceptions to reduce problem behaviors."
    },
    {
      q: "Implicit Association Test (IAT) critics argue that:",
      options: [
        "IAT measures are perfectly reliable",
        "IAT-behavior correlations are weak and test-retest reliability is modest",
        "IAT has no scientific value",
        "Everyone shows identical implicit biases"
      ],
      correct: 1,
      explanation: "IAT controversies: 1) Weak IAT-behavior correlations (meta-analyses show small effects), 2) Modest test-retest reliability, 3) May reflect cultural knowledge rather than personal bias, 4) Susceptible to practice effects, 5) Unclear what score changes mean. Defenders: IAT predicts subtle/aggregate behaviors, bias exists even if not strongly predictive. Consensus: demonstrates automatic associations exist; clinical utility debated; shouldn't be sole basis for decisions. Use to raise awareness, not label individuals. Other implicit measures exist (evaluative priming, affective misattribution)."
    },
    {
      q: "The concept of benevolent sexism (Glick & Fiske) refers to:",
      options: [
        "Hostile prejudice against women",
        "Positive but patronizing attitudes toward women that reinforce traditional gender roles",
        "Gender equality advocacy",
        "Explicit discrimination"
      ],
      correct: 1,
      explanation: "Ambivalent sexism theory: Hostile sexism (overtly negative toward women who violate traditional roles) + Benevolent sexism (positive but patronizing attitudes—women are pure, need protection, complement men). Benevolent seems positive but restricts women to traditional roles, justifies inequality ('women are better at caregiving'). Examples: 'women are more nurturing,' 'men should protect women,' pedestalizing. Insidious because masked as chivalry. Both types maintain gender hierarchy. Similar concepts: ambivalent racism, benevolent prejudice toward elderly/disabled."
    },
    {
      q: "The social comparison theory (Festinger) proposes that people:",
      options: [
        "Never compare themselves to others",
        "Evaluate their abilities and opinions by comparing to others, especially in ambiguous situations",
        "Only compare to dissimilar others",
        "Have no need for self-evaluation"
      ],
      correct: 1,
      explanation: "Social comparison: evaluate self by comparing to others, especially when objective standards unavailable. Upward comparison (to better others): can inspire or deflate. Downward comparison (to worse-off): boosts self-esteem ('at least I'm not...'). Lateral comparison (to similar others): accurate self-evaluation. Choose comparison targets strategically for self-enhancement or accurate assessment. Clinical relevance: depression involves upward comparisons (social media effects), group therapy provides comparisons, unrealistic standards, body image issues."
    },
    {
      q: "The 'what is beautiful is good' stereotype suggests that:",
      options: [
        "Attractive people are perceived more negatively",
        "Physical attractiveness leads to attribution of positive traits and behaviors",
        "Appearance has no effect on person perception",
        "Unattractive people are judged more favorably"
      ],
      correct: 1,
      explanation: "Physical attractiveness stereotype: attractive people judged as having more positive traits (sociable, competent, happy, successful) and receive preferential treatment (hiring, sentencing, help). Halo effect: positive impression in one domain influences overall evaluation. Self-fulfilling: better treatment → confidence/social skills → confirms expectations. Cross-cultural but trait specifics vary. Clinical implications: appearance-based discrimination, body image issues, lookism as oppression, attractiveness affecting clinical judgment, understanding clients' experiences of lookism."
    },
    {
      q: "The minimal group paradigm (Tajfel) demonstrated that:",
      options: [
        "Meaningful groups are required for prejudice",
        "Even trivial, arbitrary group categorization produces ingroup favoritism",
        "Prejudice only occurs with realistic conflict",
        "Group formation has no effect on attitudes"
      ],
      correct: 1,
      explanation: "Minimal group paradigm: random/trivial group assignment (coin flip, art preference) sufficient to create ingroup bias in resource allocation. Demonstrates: no conflict/interaction/history needed for prejudice; mere categorization triggers favoritism; social identity needs (positive distinctiveness) drive bias. Revolutionized prejudice research—showed cognitive/motivational bases beyond realistic conflict. Implications: prejudice deeply rooted, occurs easily, hard to eliminate. Interventions: recategorization (common ingroup), cross-cutting categories, emphasize individual differences within groups."
    },
    {
      q: "The negative state relief model of helping proposes that people help:",
      options: [
        "Only when feeling positive emotions",
        "To reduce their own negative mood, making helping egoistic rather than purely altruistic",
        "Without any self-interest",
        "Only in emergencies"
      ],
      correct: 1,
      explanation: "Negative state relief: people help to alleviate own sadness/guilt (helping as mood repair). Evidence: sad people help more (unless other mood repair available), help those whose suffering caused own distress. Contrasts empathy-altruism (Batson): genuine concern for others drives helping. Debate: is altruism truly selfless or always egoistic (including feeling good about helping)? Clinical relevance: understanding clients' helping motivations, caregiver burden, guilt-driven behaviors, pathological altruism, motivational interviewing addresses internal vs. external motivation."
    },
    {
      q: "Pettigrew's stages of prejudice reduction through intergroup contact include all EXCEPT:",
      options: [
        "Decategorization (seeing individuals, not group members)",
        "Salient categorization (acknowledging group differences)",
        "Recategorization (forming common ingroup identity)",
        "Assimilation (eliminating all cultural differences)"
      ],
      correct: 3,
      explanation: "Pettigrew's longitudinal model: 1) Decategorization: personalized interactions, see individuals (reduces stereotypes). 2) Salient categorization: recognize group membership while positive, generalize to group (with optimal conditions). 3) Recategorization: create superordinate identity ('we're all humans/Americans/students'). 4) Mutual differentiation: maintain distinct identities within cooperative framework (respects multiculturalism). Assimilation (erasing differences) is cultural erasure, not prejudice reduction. Emphasizes: contact must be sustained, stages not strictly sequential, maintain positive conditions."
    },
    {
      q: "System justification theory (Jost) proposes that people:",
      options: [
        "Always challenge social inequalities",
        "Are motivated to defend and rationalize existing social arrangements, even at personal cost",
        "Only support systems that benefit them",
        "Are indifferent to social systems"
      ],
      correct: 1,
      explanation: "System justification: motivation to defend status quo as fair and inevitable, even when disadvantages self or ingroup. Stronger under: threat, need for structure, mortality salience. Explains: disadvantaged groups internalizing inferiority, resistance to social change, victim-blaming, stereotypes as rationalization ('poor people are lazy' justifies inequality). Complements social identity theory (ingroup favoritism) but shows people also justify hierarchy. Clinical: internalized oppression, understanding resistance to seeing discrimination, false consciousness, helplessness in face of systems."
    },
    {
      q: "According to social role theory (Eagly), gender differences in behavior are primarily due to:",
      options: [
        "Innate biological differences",
        "Division of labor and social roles that create different expectations and skills",
        "Conscious choices alone",
        "Random variation"
      ],
      correct: 1,
      explanation: "Social role theory: gender differences emerge from division of labor (women-domestic/childcare, men-work) creating: 1) Different skills/attributes from role occupancy, 2) Gender role expectations. Behavior reflects roles more than biology. As roles equalize, differences shrink. Explains: communal traits in women (caregiving roles), agentic traits in men (work roles), cross-cultural variation. Contrasts evolutionary psychology (biological). Clinical: understanding gender socialization, challenging restrictive roles, non-binary perspectives, intersectionality with other roles."
    },
    {
      q: "The Implicit Relational Assessment Procedure (IRAP) differs from the IAT in that it:",
      options: [
        "Measures explicit attitudes only",
        "Assesses specific belief relations (e.g., 'Black people are safe') rather than general associations",
        "Has no scientific validity",
        "Is identical to the IAT"
      ],
      correct: 1,
      explanation: "IRAP: measures implicit beliefs about specific relations (e.g., 'Self-safe' vs 'Self-dangerous'). More nuanced than IAT (general associations). Based on Relational Frame Theory. Participants affirm/deny statements rapidly. Reveals multiple bias dimensions. Better test-retest reliability than IAT per some studies. Clinical applications: assessing specific beliefs in CBT, implicit self-schemas, relational patterns. Newer measure, less research than IAT. Part of broader implicit measures toolkit (alongside evaluative priming, Go/No-Go Association Task)."
    },
    {
      q: "Cross's Nigrescence model describes stages of Black racial identity development, with the 'encounter' stage involving:",
      options: [
        "Preference for White culture and denial of racism",
        "A significant event that challenges pre-existing racial attitudes",
        "Complete integration of Black identity",
        "Rejection of all White people"
      ],
      correct: 1,
      explanation: "Nigrescence (becoming Black): Pre-encounter: assimilation, colorblind, devalue Blackness. Encounter: experience (discrimination, social event) shatters worldview, personalizes racism, creates dissonance. Immersion-Emersion: embrace Black identity/culture, reject White culture (transitional), strong emotions. Internalization: secure Black identity, less anti-White, bicultural. Internalization-Commitment: sustained commitment to Black community. Encounter is catalyzing event. Therapists should: understand stage, avoid pathologizing Immersion anger, support identity development, match interventions to stage."
    },
    {
      q: "The common ingroup identity model (Gaertner & Dovidio) reduces prejudice by:",
      options: [
        "Emphasizing subgroup differences",
        "Creating a superordinate identity that encompasses former outgroups ('we're all one group')",
        "Maintaining complete separation",
        "Ignoring group memberships"
      ],
      correct: 1,
      explanation: "Common ingroup identity: recategorize former 'us vs. them' into inclusive 'we' with superordinate identity (students, humans, employees). Triggers ingroup bias toward former outgroup members. Strategies: common goals, cooperative interdependence, common fate. Examples: 'Humans vs. aliens,' school identity transcending race. Critique: may erase important cultural identities (colorblindness). Alternative: dual identity (maintain subgroup + superordinate). Balance recategorization with respecting distinctiveness. Applications: diversity training, conflict resolution, organizational mergers."
    },
    {
      q: "Stereotype content model (Fiske) proposes that stereotypes vary along two dimensions:",
      options: [
        "Intelligence and attractiveness",
        "Warmth and competence",
        "Power and status",
        "Ethnicity and gender"
      ],
      correct: 1,
      explanation: "Stereotype Content Model: stereotypes characterized by perceived warmth (intentions: friendly/trustworthy vs. threat) and competence (capability: able/skillful vs. unable). Four combinations: High warmth + high competence (pride, admiration—ingroups, allies). Low warmth + high competence (envy, resentment—Asians, rich people). High warmth + low competence (pity, paternalism—elderly, disabled). Low warmth + low competence (contempt, disgust—poor, homeless). Predicts distinct prejudices and emotions. Clinical: understanding specific stigmas, challenging dimensional assumptions, recognizing paternalism in benevolent attitudes."
    },
    {
      q: "The concept of 'code-switching' in multicultural psychology refers to:",
      options: [
        "Switching between computer programming languages",
        "Alternating between cultural behaviors and communication patterns depending on social context",
        "Changing psychological diagnoses",
        "Switching therapists"
      ],
      correct: 1,
      explanation: "Code-switching: adjusting behavior, speech, appearance between cultures/contexts (e.g., African American Vernacular English at home, Standard English at work). Functions: navigate multiple cultures, access opportunities, maintain cultural identity, avoid discrimination. Cognitively demanding (monitoring context, adjusting behavior). Reflects bicultural competence but also necessity in discriminatory contexts. Not inauthenticity—all people adjust to contexts. Clinical: understand as adaptive skill (not pathology), validate experience, explore costs (exhaustion, identity stress), support authentic expression in therapy."
    },
    {
      q: "Racial/ethnic socialization refers to:",
      options: [
        "Segregation of racial groups",
        "Messages parents communicate to children about race, ethnicity, and navigating discrimination",
        "Government policies about race",
        "Genetic transmission of racial characteristics"
      ],
      correct: 1,
      explanation: "Racial/ethnic socialization: parental practices preparing children for racial realities. Types: 1) Cultural socialization (pride in heritage), 2) Preparation for bias (awareness, coping with discrimination), 3) Promotion of mistrust (wariness of other groups), 4) Egalitarianism (colorblind, treat everyone equally). Cultural socialization + preparation for bias = positive outcomes (identity, coping, achievement). Egalitarianism alone leaves children unprepared for discrimination. Varies by: child age, parent experiences, neighborhood. Clinical: normalize, support parents, consider in family therapy, address in child/adolescent work."
    },
    {
      q: "Allophilia (Pittinsky) differs from lack of prejudice in that it:",
      options: [
        "Is the same as tolerance",
        "Represents active positive attitudes and behaviors toward outgroups, beyond mere absence of negativity",
        "Only applies to majority groups",
        "Means ignoring group differences"
      ],
      correct: 1,
      explanation: "Allophilia: positive feelings toward outgroups (affection, engagement, enthusiasm, comfort, kinship). Distinct from: absence of prejudice (neutral ≠ positive), tolerance (implies negativity controlled). Represents positive end of spectrum, not zero point. Important because: reduces emphasis on deficit model (eliminating prejudice), promotes proactive appreciation, predicts helping/collaboration. Dimensions: affection, comfort, engagement, kinship, enthusiasm. Promote via: cross-group friendships, positive contact, celebrating diversity, counter-stereotypic exemplars. Reframes diversity work from reducing negatives to building positives."
    },
    {
      q: "Racial battle fatigue (Smith) refers to:",
      options: [
        "Physical exercise preferences",
        "Physiological and psychological stress responses to cumulative racism-related experiences",
        "Fatigue from any cause",
        "Normal tiredness"
      ],
      correct: 1,
      explanation: "Racial battle fatigue: race-related stress responses from cumulative microaggressions and mundane extreme environmental stress. Symptoms: physiological (headaches, hypertension, insomnia), psychological (frustration, anger, exhaustion, hypervigilance), behavioral (withdrawal, resistance). Particularly studied in academic contexts (students, faculty of color). Chronic stress impacts health (weathering hypothesis—accelerated aging from chronic discrimination stress). Assessment: consider frequency/chronicity of racism experiences. Intervention: validate experiences, stress management, address systemic issues, affirming environments, connecting to community."
    },
    {
      q: "Sue's microaggression process model includes all of the following stages EXCEPT:",
      options: [
        "Incident (microaggression occurs)",
        "Perception and immediate reaction",
        "Immediate confrontation (always occurs)",
        "Consequence (impact on wellbeing)"
      ],
      correct: 2,
      explanation: "Sue's process model: 1) Incident: microaggression occurs. 2) Perception: 'Did that really happen? Am I being oversensitive?' (catch-22: react and be called sensitive, ignore and internalize). 3) Reaction: emotional (anger, frustration), cognitive (rumination), behavioral. 4) Interpretation: make sense of incident, often ambiguity. 5) Consequence: cumulative toll on wellbeing. Confrontation is option, not always occurring (costs: time/energy, invalidation, retaliation, relationship damage; benefits: address harm, education, empowerment). Therapists should: validate perception, explore costs/benefits of response, support coping."
    },
    {
      q: "The concept of 'double consciousness' (Du Bois) describes:",
      options: [
        "Split personality disorder",
        "Awareness of one's own identity and simultaneously how one is perceived by the dominant culture",
        "Having two separate identities",
        "Dissociative identity disorder"
      ],
      correct: 1,
      explanation: "Double consciousness: African Americans' internal conflict between self-concept and internalized oppressive perceptions from White society—'looking at one's self through the eyes of others.' Dual perspective: own culture + dominant culture viewing them. Creates psychic tension, split identity. Originates in racism/marginalization. Related: bicultural identity, code-switching, internalized racism. Not pathology but consequence of oppression. Clinical: validate experience, explore identity development, address internalized oppression, support integration of multiple identities, recognize similar dynamics in other marginalized groups."
    },
    {
      q: "In collectivist cultures, the concept of 'saving face' refers to:",
      options: [
        "Plastic surgery preferences",
        "Maintaining dignity, respect, and reputation in social contexts, with implications for conflict resolution",
        "Avoiding sunburn",
        "Financial savings"
      ],
      correct: 1,
      explanation: "Face: social standing, dignity, reputation in interpersonal and group contexts. Particularly important in collectivist/high-context cultures (East Asian, Middle Eastern, Latin American). Types: losing face (humiliation), saving face (protecting dignity), giving face (honoring others). Implications: indirect communication (avoid direct confrontation), group harmony prioritized, public criticism avoided, apologies complex (admission vs. face loss). Therapeutic applications: avoid shaming, respect family hierarchy, indirect questioning, confidentiality crucial, group/family therapy considerations, shame vs. guilt cultures."
    },
    {
      q: "The concept of 'cultural taxation' in academic settings refers to:",
      options: [
        "Taxes on international students",
        "Extra service burdens placed on faculty/students of color for diversity-related work not required of White colleagues",
        "Fees for cultural events",
        "Import taxes on cultural goods"
      ],
      correct: 1,
      explanation: "Cultural taxation: additional service expectations for underrepresented faculty/students—diversity committees, mentoring all minority students, cultural expertise, representing 'the minority perspective.' Not compensated/credited toward promotion. Consequences: time diverted from research/teaching, burnout, career disadvantage, tokenism. Similar: 'office housework' for women (notes, organizing). Organizations should: recognize/compensate diversity work, distribute equitably, hire enough diverse faculty (avoid token sole minority), value in promotion. Awareness for psychologists in academic/organizational settings. Relates to emotional labor, invisible labor."
    },
    {
      q: "Indigenous relational worldview differs from Western individualistic perspective in emphasizing:",
      options: [
        "Individual achievement above all",
        "Interconnectedness with community, ancestors, land, and spirituality",
        "Material wealth accumulation",
        "Competition and hierarchy"
      ],
      correct: 1,
      explanation: "Indigenous worldviews: relational (interconnected with community, ancestors, nature, spirit), holistic (mind-body-spirit integration), cyclical time, oral tradition, collective wellbeing, land-based identity, seven generations thinking (long-term impact). Contrasts Western: individualistic, mind-body dualism, linear time, written tradition, personal achievement. Therapeutic implications: involve family/community, incorporate spiritual practices, healing circles, traditional healers collaboration, understand historical trauma (colonization, boarding schools, forced assimilation), recognize cultural strengths, avoid imposing Western models. Cultural humility essential."
    },
    {
      q: "The concept of 'model minority myth' regarding Asian Americans:",
      options: [
        "Accurately describes all Asian Americans",
        "Is a harmful stereotype that masks within-group diversity and discrimination while pitting minorities against each other",
        "Is universally beneficial",
        "Has no negative consequences"
      ],
      correct: 1,
      explanation: "Model minority myth: stereotype of Asian Americans as uniformly high-achieving, successful, uncomplaining. Harmful because: 1) Masks discrimination (mental health stigma, bamboo ceiling, violence), 2) Hides within-group diversity (Southeast Asian poverty, refugee trauma), 3) Pits minorities against each other ('Why can't other minorities be like them?'), 4) Creates pressure/perfectionism, 5) Denies needs/resources ('They're fine'), 6) Used to deny systemic racism. Clinical: validate struggles, explore identity pressure, address mental health stigma, understand family/achievement expectations, culturally specific stressors."
    },
    {
      q: "The jigsaw classroom technique (Aronson) reduces prejudice and improves learning by:",
      options: [
        "Encouraging competition between groups",
        "Creating interdependence where students must cooperate and each contribute unique information to succeed",
        "Separating students by ability level",
        "Having students work independently"
      ],
      correct: 1,
      explanation: "Jigsaw classroom: cooperative learning where students assigned to diverse groups, each learns part of material ('expert'), then teaches their piece to group. Creates positive interdependence—success requires cooperation. Benefits: reduced prejudice, increased empathy, improved cross-racial friendships, better academic outcomes for minority students, increased liking. Implements Allport's contact conditions: equal status, common goals, cooperation, institutional support. Widely used intervention demonstrating superordinate goals reduce intergroup conflict. Evidence-based prejudice reduction strategy."
    },
    {
      q: "According to Batson's empathy-altruism hypothesis, helping behavior motivated by empathy is:",
      options: [
        "Always egoistically motivated",
        "Genuinely altruistic, driven by concern for others' welfare rather than personal benefit",
        "Impossible to distinguish from egoism",
        "Always accompanied by guilt"
      ],
      correct: 1,
      explanation: "Empathy-altruism: empathy (other-oriented concern) produces genuine altruistic motivation (goal is reduce other's distress, not own). Evidence: when empathy high, people help even when easy to escape (not just reducing own distress). Challenges egoistic explanations (help to feel good, avoid guilt). Critics argue even empathy-driven help provides self-benefits. Debate continues, but evidence supports empathy can produce altruistic motivation. Clinical: fostering empathy increases prosocial behavior, understanding caregiving motivations, compassion fatigue when empathy depleted."
    },
    {
      q: "Symbolic racism (modern racism) differs from old-fashioned racism in that it:",
      options: [
        "Involves overt discrimination and segregation support",
        "Combines anti-Black affect with traditional values, manifesting as opposition to policies framed as violating fairness or individualism",
        "Has been completely eliminated",
        "Is openly expressed"
      ],
      correct: 1,
      explanation: "Symbolic/modern racism: subtle prejudice in people who reject traditional racism but oppose policies benefiting minorities. Combines: negative feelings toward Blacks + traditional values (individualism, work ethic). Expressed as: 'Discrimination is over,' 'They don't try hard enough,' opposition to affirmative action ('unfair'), welfare ('violates work ethic'). Denies racial motivation, frames as principle. Allows prejudice expression without appearing racist. Contrasts: old-fashioned (overt inferiority beliefs, segregation support). Measured via symbolic racism scale. Predicts voting, policy attitudes. Interventions: education about ongoing discrimination, contact."
    },
    {
      q: "The concept of 'cultural mistrust' among African Americans (Terrell & Terrell) refers to:",
      options: [
        "General paranoia",
        "Learned wariness of White individuals and institutions based on historical and ongoing experiences of racism and discrimination",
        "Mental illness",
        "Inability to trust anyone"
      ],
      correct: 1,
      explanation: "Cultural mistrust: healthy, adaptive wariness developed from group experiences of racism. Not paranoia—reality-based given historical betrayal (Tuskegee, medical experimentation, police violence, discrimination). Measured by Cultural Mistrust Inventory. Affects: help-seeking (delay, avoid White providers), therapeutic alliance (especially early sessions), disclosure, treatment adherence. Therapists should: understand as adaptive not pathological, address openly, demonstrate trustworthiness through actions, acknowledge racism, establish credentials, patient alliance-building, cultural humility, avoid defensiveness. Mistrust decreases with positive experiences and multicultural competence."
    },
    {
      q: "Sherif's Robbers Cave study Phase 1 (group formation) demonstrated that:",
      options: [
        "Boys immediately became hostile to other groups",
        "Simply being in distinct groups with shared activities created strong group identity and cohesion even without intergroup contact",
        "Competition is necessary for group formation",
        "Groups cannot form without explicit leadership"
      ],
      correct: 1,
      explanation: "Robbers Cave Phase 1: Two groups of boys separately engaged in cooperative activities (hiking, swimming). Result: strong ingroup identity, norms, leadership emerged organically without intergroup awareness. Demonstrates: mere cooperation within groups creates cohesion and identity. Phase 2: competition created hostility. Phase 3: superordinate goals reduced conflict. Study shows stages: group formation → conflict (competition for resources) → cooperation (superordinate goals). Classic demonstration of realistic conflict theory and contact hypothesis. Ethical concerns by modern standards (deception, induced conflict)."
    },
    {
      q: "The concept of 'racial triangulation' (Kim) describes how:",
      options: [
        "All races are treated equally",
        "Asian Americans are positioned relative to Blacks and Whites in a racial hierarchy, valorized economically but ostracized culturally",
        "Racial categories are biologically determined",
        "Triangles are used in racial classification"
      ],
      correct: 1,
      explanation: "Racial triangulation: process positioning Asian Americans in racial hierarchy: 1) Relative valorization: superior to Blacks economically/culturally (model minority) but inferior to Whites. 2) Civic ostracism: perpetual foreigners, unassimilable, outside American identity. Result: Asians used as racial wedge against Blacks ('See, they succeeded'), but denied full belonging. Maintains White dominance by pitting minorities against each other. Explains: model minority myth, anti-Asian violence, contradictory stereotypes (smart but foreign). Clinical: understand unique position, address identity conflicts, perpetual foreigner stress, internalized superiority/inferiority."
    },
    {
      q: "Rokeach's belief congruence theory proposes that prejudice is based more on:",
      options: [
        "Race alone",
        "Perceived dissimilarity in beliefs and values rather than race per se",
        "Physical appearance only",
        "Genetic differences"
      ],
      correct: 1,
      explanation: "Belief congruence theory: prejudice stems from perceived belief dissimilarity, not race. We prefer similar others regardless of race; race is proxy for assumed belief differences. When beliefs known to be similar, racial prejudice disappears. Challenged dominant view that race is primary. Evidence: some support in minimal prejudice contexts. Critique: underestimates power of race; in real world, race strongly predicts discrimination even with belief similarity; doesn't explain structural racism; ignores that similarity preference itself maintains segregation. Useful: highlights belief importance, but insufficient explanation for racial prejudice. Modern view: both race and beliefs matter."
    },
  ],
  flashcards: [
    {
      front: "Asch Conformity Experiments",
      back: "~75% conformed at least once to obviously wrong majority opinion. Conformity increased with group size (up to 3-4), unanimity, and public responding. Decreased with one ally/dissenter. Demonstrated normative social influence (desire to fit in) vs. informational (desire to be correct).",
    },
    {
      front: "Racial/Cultural Identity Models",
      back: "Cross's Nigrescence Model: Pre-encounter → Encounter → Immersion-Emersion → Internalization → Internalization-Commitment. Helms' White Racial Identity: Contact → Disintegration → Reintegration → Pseudo-Independence → Immersion-Emersion → Autonomy.",
    },
    {
      front: "Cognitive Dissonance (Festinger)",
      back: "Discomfort from holding contradictory cognitions motivates attitude/behavior change. Classic $1/$20 study: Those paid less ($1) for a boring task changed their attitude more (insufficient justification). Resolved by changing attitude, adding cognitions, or reducing importance.",
    },
    {
      front: "Berry's Acculturation Strategies",
      back: "Integration: Maintain heritage + adopt host (best outcomes). Assimilation: Adopt host, reject heritage. Separation: Maintain heritage, reject host. Marginalization: Reject both (worst outcomes). Based on two dimensions: heritage culture maintenance & host culture adoption.",
    },
    {
      front: "Microaggressions (Sue et al.)",
      back: "Brief, everyday slights communicating hostile/derogatory messages. Types: Microassaults (explicit/deliberate), Microinsults (subtle degradations), Microinvalidations (negating experiences). Examples: 'You're so articulate,' 'Where are you really from?' Cumulative impact linked to psychological distress.",
    },
    {
      front: "LGBTQ+ Affirming Practice",
      back: "Validate identities, address minority stress (distal: discrimination, proximal: internalized stigma, concealment). Understand identity development stages. NEVER conversion therapy (APA condemns as harmful). Use correct pronouns, inclusive language. APA Guidelines for Sexual Minority Persons (2012).",
    },
    {
      front: "Zimbardo's Stanford Prison Experiment",
      back: "Random assignment to guard/prisoner roles in mock prison. Guards became abusive; prisoners showed distress, helplessness (study terminated early). Demonstrated powerful influence of social roles and situational factors on behavior. Criticized: demand characteristics, lack of ethical oversight (no informed consent for 'arrests,' inadequate debriefing). Modern reanalysis questions conclusions. Ethical violations led to IRB reforms. Illustrates person vs. situation in behavior explanation."
    },
    {
      front: "Attribution Biases Summary",
      back: "Fundamental Attribution Error: Overweight disposition for others' behavior. Actor-Observer Bias: Our behavior = situational; others' = dispositional. Self-Serving Bias: Success = internal; failure = external (protects self-esteem). Ultimate Attribution Error: Ingroup successes = dispositional; outgroup successes = situational/luck. Just-World: Victims blamed (deserve outcomes). Understanding these helps identify judgment errors in clinical work."
    },
    {
      front: "Racial Identity Development - People of Color (Atkinson, Morten & Sue)",
      back: "Minority Identity Development Model: 1) Conformity: Preference for dominant culture. 2) Dissonance: Questioning, conflict. 3) Resistance & Immersion: Embrace own culture, reject dominant. 4) Introspection: Reflection on rigid views. 5) Integrative Awareness: Bicultural, selective appreciation. Not linear; context-dependent. Therapist match considerations vary by stage. Similar models for specific groups (Cross-Black, Asian, Latino identity development)."
    },
    {
      front: "Helms' White Racial Identity Development",
      back: "1) Contact: Obliviousness to race, colorblind. 2) Disintegration: Awareness of racism, guilt. 3) Reintegration: Retreat to White supremacy, blame victims. 4) Pseudo-Independence: Intellectual acceptance, help 'minorities.' 5) Immersion-Emersion: Exploring Whiteness, understanding privilege. 6) Autonomy: Internalized non-racist identity, action against racism. Clinical application: Therapists' stage affects multicultural competence. Higher stages = better cross-racial therapeutic relationships."
    },
    {
      front: "Microaggression Examples by Type",
      back: "Microassaults: Using slurs, deliberate avoidance (old-fashioned prejudice). Microinsults: 'You're so articulate' (surprise that POC speaks well), clutching purse around Black men. Microinvalidations: 'I don't see color,' 'America is a melting pot,' 'Where are you REALLY from?' (perpetual foreigner), denying discrimination experiences. Themes: alien in own land, ascription of intelligence, second-class citizenship, pathologizing cultural values, assumption of criminal status."
    },
    {
      front: "Optimal Conditions for Prejudice Reduction",
      back: "Allport's Contact Hypothesis: 1) Equal status in situation, 2) Common goals, 3) Intergroup cooperation, 4) Authority support. Additional: Friendship potential, multiple contacts. Extended contact: Knowing ingroup members have outgroup friends. Imagined contact: Mentally simulating positive interaction. Applications: Cooperative learning (jigsaw), intergroup dialogue, diversity training. Doesn't address structural inequality or power differences—contact alone insufficient for social justice."
    },
    {
      front: "Hofstede's Cultural Dimensions",
      back: "1) Individualism-Collectivism: Individual vs. group goals. 2) Power Distance: Acceptance of inequality. 3) Uncertainty Avoidance: Tolerance for ambiguity. 4) Masculinity-Femininity: Achievement vs. nurturance. 5) Long-term Orientation: Future vs. present/past. 6) Indulgence-Restraint: Gratification vs. regulation. Clinical application: Understand values, avoid ethnocentric assumptions (Western therapy = individualistic, low power distance). Tailor interventions to cultural values."
    },
    {
      front: "Stereotype Threat - Mechanisms and Interventions",
      back: "Mechanism: Stereotype awareness → anxiety → cognitive load → performance impairment. Physiological: cortisol, cardiovascular stress. Self-fulfilling prophecy. Interventions: 1) Reframe task (not ability test), 2) Affirm values (self-affirmation), 3) Growth mindset messages, 4) Role models, 5) Normalize difficulty, 6) Reduce stereotype salience. Applies broadly: women in math, elderly in memory, White men in athletics. Test-taking accommodations may help."
    },
    {
      front: "Cultural Encapsulation (Wrenn)",
      back: "Counselor defines reality according to own cultural assumptions, showing: 1) Narrow cultural lens, 2) Disregard for cultural variations, 3) Dependence on technique without cultural adaptation, 4) Lack of evaluation of own biases, 5) Protectiveness of culturally biased assumptions. Result: Imposing values, misdiagnosis, ineffective treatment. Antidote: Cultural humility, ongoing self-examination, consultation, culturally adapted treatments, continuous learning. Many theories/interventions developed for WEIRD populations."
    },
    {
      front: "LGBTQ+ Affirming Practice Principles",
      back: "1) Validate identities (not a choice/disorder). 2) Understand minority stress. 3) Know identity development models (Cass, etc.). 4) Use correct names/pronouns. 5) Address internalized stigma. 6) Don't assume cisgender/heterosexual. 7) Understand intersectionality. 8) Never conversion therapy. 9) Support coming out (if safe). 10) Know community resources. 11) Advocacy/social justice. APA Guidelines (2012-Sexual Minority, 2015-Transgender/Gender Nonconforming) provide detailed guidance."
    },
    {
      front: "Cialdini's Six Principles of Influence",
      back: "1) Reciprocity: obligation to return favors. 2) Commitment/Consistency: align with past behavior. 3) Social Proof: follow others' behavior. 4) Liking: comply with those we like. 5) Authority: obey credible experts. 6) Scarcity: value limited availability. Applications: marketing, compliance, therapy adherence, understanding influence tactics, resistance training."
    },
    {
      front: "Group Polarization",
      back: "Group discussion shifts opinions toward more extreme position in direction group initially leaned. Not compromise—amplification. Mechanisms: persuasive arguments (hear novel supporting reasons), social comparison (compete to be most 'correct' group member). Examples: juries, online echo chambers, radicalization. Differs from groupthink (irrational conformity). Risky shift: specific case where groups take riskier positions than individuals."
    },
    {
      front: "Social Facilitation (Zajonc)",
      back: "Presence of others enhances performance on simple/well-learned tasks but impairs performance on complex/novel tasks. Mechanism: arousal increases dominant response (correct for easy tasks, incorrect for difficult). Audience effect (observers present) and coaction effect (working alongside others). Applications: test anxiety, athletic performance, learning environments. Balance: practice alone for new skills, perform simple tasks publicly."
    },
    {
      front: "Sherif's Autokinetic Effect Study",
      back: "Participants estimated movement of stationary light in dark room (autokinetic illusion—light appears to move). Individually, estimates varied widely. In groups, estimates converged to group norm. Norm persisted even when tested alone later. Demonstrated informational social influence—ambiguous situations lead to conformity. Private acceptance (internalization), not just public compliance. Contrast with Asch (unambiguous stimulus, normative influence)."
    },
    {
      front: "Altruism vs. Egoism Debate",
      back: "Altruism: helping motivated by empathy/concern for others' welfare (selfless). Egoism: all helping ultimately self-serving (feel good, avoid guilt, reciprocity). Batson's empathy-altruism hypothesis: empathy produces genuine altruism. Evidence: when empathy high, help even when escape easy. Critics: even empathy-driven help reduces own distress. Likely both exist. Clinical: understand helping motivations, pathological altruism (self-neglect), caregiver stress."
    },
    {
      front: "Pluralistic Ignorance",
      back: "Collective misperception where most group members privately reject norm but assume others accept it, so publicly go along. Example: college students overestimate peers' comfort with drinking, so conform to perceived norm (but most uncomfortable). Bystander effect: all uncertain if emergency, look to others, interpret inaction as 'not emergency.' Results: false norms persist. Intervention: make private attitudes public, correct misperceptions (social norms marketing)."
    },
    {
      front: "Ultimate Attribution Error",
      back: "Extension of fundamental attribution error to intergroup context. Ingroup: successes attributed to dispositional factors ('talent'), failures to situational ('bad luck'). Outgroup: reverse pattern (successes = luck/situation, failures = disposition). Maintains prejudice by interpreting same behavior differently based on group. Example: White CEO succeeded by skill, Black CEO by affirmative action. Awareness and perspective-taking interventions help."
    },
    {
      front: "Kin Selection and Inclusive Fitness",
      back: "Evolutionary explanation for altruism: helping genetic relatives increases your genes' survival (inclusive fitness = own reproduction + relatives' reproduction weighted by relatedness). Predicts: more help to closer relatives. Hamilton's rule: altruism occurs when C < rB (cost < relatedness × benefit). Explains: parental sacrifice, family solidarity. Limitations: doesn't explain helping non-kin. Reciprocal altruism and group selection proposed for non-kin helping."
    },
    {
      front: "Realistic Group Conflict Theory vs. Social Identity Theory",
      back: "Realistic Conflict: Prejudice from competition for scarce resources (Sherif—Robbers Cave). Requires actual conflict. Social Identity Theory: Prejudice from mere categorization (Tajfel—minimal groups), no conflict needed. Both important: conflict exacerbates categorization-based bias. Real-world prejudice often involves both. Interventions differ: superordinate goals (realistic conflict) vs. recategorization/individualization (social identity)."
    },
    {
      front: "Self-Serving Bias",
      back: "Tendency to attribute successes to internal factors ('I'm talented') and failures to external factors ('Bad luck, unfair test'). Protects self-esteem. Exceptions: depressed individuals show opposite pattern (attribute success to luck, failure to self—depressive realism debated). Collectivist cultures show less self-serving bias. Clinical: CBT addresses self-serving attributions maintaining dysfunction, narcissism involves extreme self-serving bias, understand cultural variation."
    },
    {
      front: "Scapegoat Theory",
      back: "Frustration/failure leads to aggression displaced toward vulnerable outgroup (scapegoating). Economic decline → blame immigrants/minorities. Safer than targeting actual source of frustration. Provides explanation (simple answer to complex problems) and enhances self-esteem (downward comparison). Historical examples: antisemitism, xenophobia during economic crisis. Related to: displaced aggression, just-world hypothesis, system justification. Intervention: address actual problems, build empathy, reduce frustration."
    },
    {
      front: "Extended Contact Effect",
      back: "Prejudice reduced by knowing that ingroup members have outgroup friends, even without personal contact. Mechanism: vicarious learning that contact is positive, norms about acceptability of outgroup. Less powerful than direct contact but more scalable. Applications: media representation (seeing cross-group friendships), talking about diverse friends, organizational diversity stories. Wright et al. research. Imagined contact (mentally simulating interaction) also shows small effects."
    },
    {
      front: "Authoritarian Personality (Adorno)",
      back: "Personality type prone to prejudice, characterized by: rigid thinking, conventional values, submission to authority, aggression toward deviants, superstition, concern with power. Originates in harsh, rigid parenting (psychodynamic view). Measured by F-scale (Fascism). Criticized: confounds agreement with authoritarianism, ignores left-wing authoritarianism. Social Dominance Orientation (SDO) and Right-Wing Authoritarianism (RWA) are modern measures. Predicts prejudice, political conservatism, punitiveness. Individual difference in prejudice susceptibility."
    },
    {
      front: "Racial Microaggressions in Therapy",
      back: "Common therapist microaggressions: 1) Colorblindness ('I don't see race'), 2) Denying client's racial reality, 3) Assuming universal experience, 4) Over/under-focusing on race, 5) Culturally insensitive treatment planning. Consequences: damage alliance, premature termination, re-traumatization, internalized blame. Repair: acknowledge error, apologize without defensiveness, validate impact, commit to change, seek consultation. Prevention: cultural humility, ongoing education, supervision, self-reflection."
    },
    {
      front: "Cass's Sexual Orientation Identity Development",
      back: "1) Identity Confusion: 'Could I be gay?' Anxiety, denial. 2) Identity Comparison: Acknowledge possibility, feel different, alienation. 3) Identity Tolerance: 'I probably am gay,' seek community. 4) Identity Acceptance: Positive self-acceptance, selective disclosure. 5) Identity Pride: Immersion in LGBTQ+ culture, activism, us vs. them. 6) Identity Synthesis: Integration, LGBTQ+ identity as one aspect. Similar models: Troiden, Coleman, D'Augelli. Non-linear, stage helps tailor support."
    },
    {
      front: "Acculturative Strategies and Mental Health",
      back: "Berry's model: Integration (best outcomes—lowest anxiety/depression, highest self-esteem), Assimilation (moderate), Separation (moderate-poor, depends on choice vs. exclusion), Marginalization (worst—highest distress). Integration allows: cultural identity + social connection in host culture. Caveat: host society must support multiculturalism (integration requires opportunity). Forced assimilation or exclusion harm mental health."
    },
    {
      front: "Sue & Sue's Racial/Cultural Identity Development Model",
      back: "R/CID Model: 1) Conformity: Depreciate own culture, prefer dominant. 2) Dissonance: Conflicting attitudes, questioning. 3) Resistance & Immersion: Appreciate own culture, reject dominant. 4) Introspection: Question rigid rejection, more balanced. 5) Integrative Awareness: Appreciate own culture selectively, understand dominant culture. Therapeutic relationship varies by stage: Resistance clients prefer same-race therapist, Integrative more flexible. Apply to various minoritized groups."
    },
    {
      front: "Cultural Formulation Interview (DSM-5)",
      back: "Semi-structured interview assessing cultural factors affecting diagnosis/care: 1) Cultural definition of problem, 2) Cultural perceptions of cause, 3) Role of cultural factors in stressors/support, 4) Cultural features of past help-seeking, 5) Cultural factors affecting current care. Includes informant version. 16 questions. Improves: cultural sensitivity, diagnostic accuracy, treatment planning, therapeutic alliance. Part of DSM-5's cultural emphasis. Train in administration for effective use."
    },
    {
      front: "Microintervention Strategies",
      back: "Sue et al.'s responses to microaggressions: 1) Make invisible visible (name it), 2) Disarm the microaggression (educate), 3) Educate the perpetrator, 4) Seek external support. For perpetrators: Stop, Look (recognize), Listen (impact), Act (apologize/commit). Bystander intervention: interrupt, question, educate, support target. Organizational: policies, training, accountability, diverse leadership. Balance: confrontation costs (energy, retaliation) vs. benefits (empowerment, education). Therapists: teach clients strategies, create microaggression-free environment."
    },
    {
      front: "Historical Trauma and Intergenerational Transmission",
      back: "Cumulative emotional/psychological wounding across generations from massive group trauma (slavery, genocide, colonization, Holocaust). Mechanisms: 1) Epigenetic changes, 2) Parenting (anxiety transmission), 3) Narrative/memory, 4) Loss of culture, 5) Ongoing oppression. Effects: PTSD, depression, substance use, mistrust, identity confusion. Examples: Native American boarding schools, African American slavery, Japanese internment. Healing: cultural reconnection, collective remembrance, address contemporary discrimination, trauma-focused therapy, community support."
    },
  ],
};
