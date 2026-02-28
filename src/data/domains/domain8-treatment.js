export const treatmentDomain = {
  id: "treatment",
  name: "Treatment & Intervention",
  weight: 14,
  color: "#5B4FC7",
  icon: "🩺",
  description: "Psychotherapy models, evidence-based treatments, prevention",
  topics: [
    "Psychodynamic/psychoanalytic therapy",
    "Cognitive-behavioral therapies (CBT, DBT, ACT)",
    "Humanistic/existential approaches",
    "Family and systems therapy",
    "Group therapy principles",
    "Evidence-based treatments for specific disorders",
    "Common factors in psychotherapy",
    "Crisis intervention and prevention",
    "Third-wave CBT approaches (ACT, MBCT, FAP)",
    "Trauma-Focused CBT for children (TF-CBT)",
    "Inhibitory learning model of exposure",
    "Integrated treatments for co-occurring disorders",
    "Evidence-based treatments for personality disorders",
    "Motivational Interviewing stages and processes",
    "Behavioral parent training and PCIT",
    "Couples therapy approaches (EFT, Gottman, BCT)",
    "Eating disorder treatments (CBT-E, FBT)",
    "PTSD treatments (PE, CPT, EMDR)",
    "Transdiagnostic treatment approaches",
    "Schema therapy and early maladaptive schemas",
  ],
  questions: [
    {
      q: "Dialectical Behavior Therapy (DBT) was originally developed for the treatment of:",
      options: [
        "Major Depressive Disorder",
        "Borderline Personality Disorder",
        "Obsessive-Compulsive Disorder",
        "Generalized Anxiety Disorder",
      ],
      correct: 1,
      explanation:
        "DBT was developed by Marsha Linehan specifically for Borderline Personality Disorder, particularly for individuals with chronic suicidal ideation and self-harm. It combines CBT strategies with mindfulness practices and emphasizes the dialectic between acceptance and change. The four core modules are: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.",
    },
    {
      q: "In psychoanalytic therapy, 'transference' refers to:",
      options: [
        "The therapist's emotional reactions to the client",
        "The client redirecting feelings for significant others toward the therapist",
        "The client's resistance to therapeutic progress",
        "Transferring skills learned in therapy to daily life",
      ],
      correct: 1,
      explanation:
        "Transference occurs when a client unconsciously redirects feelings, attitudes, and expectations from past significant relationships onto the therapist. Analyzing transference is a key therapeutic technique in psychodynamic therapy. Countertransference refers to the therapist's emotional reactions to the client.",
    },
    {
      q: "The 'gold standard' evidence-based treatment for PTSD includes:",
      options: [
        "Psychoanalytic therapy",
        "Prolonged Exposure (PE) and Cognitive Processing Therapy (CPT)",
        "Interpersonal therapy",
        "Supportive counseling",
      ],
      correct: 1,
      explanation:
        "Prolonged Exposure (Foa) and Cognitive Processing Therapy (Resick) have the strongest empirical support for PTSD treatment. PE involves repeated exposure to trauma memories and avoided situations. CPT focuses on modifying maladaptive trauma-related cognitions.",
    },
    {
      q: "According to Carl Rogers, the three core conditions for therapeutic change are:",
      options: [
        "Interpretation, confrontation, and reflection",
        "Unconditional positive regard, empathy, and genuineness",
        "Free association, dream analysis, and transference",
        "Mindfulness, acceptance, and cognitive defusion",
      ],
      correct: 1,
      explanation:
        "Rogers' person-centered therapy identifies three necessary and sufficient conditions: (1) Unconditional positive regard (nonjudgmental acceptance), (2) Empathic understanding (accurately perceiving the client's experience), and (3) Congruence/genuineness (therapist authenticity).",
    },
    {
      q: "Exposure and Response Prevention (ERP) is the first-line behavioral treatment for:",
      options: [
        "Panic Disorder",
        "Obsessive-Compulsive Disorder",
        "Social Anxiety Disorder",
        "Specific Phobia",
      ],
      correct: 1,
      explanation:
        "ERP is the gold standard behavioral treatment for OCD. It involves systematic exposure to obsession-triggering stimuli while preventing the compulsive rituals. Through habituation and inhibitory learning, the anxiety response decreases over time.",
    },
    {
      q: "Motivational Interviewing (MI) is characterized by all of the following EXCEPT:",
      options: [
        "Expressing empathy through reflective listening",
        "Rolling with resistance rather than confronting it",
        "Directly confronting denial and challenging ambivalence",
        "Supporting self-efficacy and autonomy",
      ],
      correct: 2,
      explanation:
        "MI (Miller & Rollnick) is a collaborative, person-centered approach that avoids confrontation. Core principles (spirit): Partnership, Acceptance, Compassion, Evocation. Core skills: OARS (Open questions, Affirmations, Reflective listening, Summaries). MI explores and resolves ambivalence without confrontation, making it effective for substance use and health behavior change.",
    },
    {
      q: "Interoceptive exposure, a component of CBT for Panic Disorder, involves:",
      options: [
        "Confronting feared external situations gradually",
        "Deliberately inducing physical sensations associated with panic",
        "Deep breathing exercises to prevent panic attacks",
        "Cognitive restructuring of catastrophic thoughts",
      ],
      correct: 1,
      explanation:
        "Interoceptive exposure involves deliberately triggering physical sensations associated with panic (e.g., hyperventilating, spinning, running in place) to reduce fear of the sensations themselves. Combined with cognitive restructuring, it breaks the fear-of-fear cycle central to Panic Disorder.",
    },
    {
      q: "Acceptance and Commitment Therapy (ACT) emphasizes which core process?",
      options: [
        "Eliminating all negative thoughts",
        "Psychological flexibility through acceptance, defusion, values, and committed action",
        "Challenging cognitive distortions",
        "Gaining insight into unconscious conflicts"
      ],
      correct: 1,
      explanation: "ACT (Hayes) is a third-wave CBT emphasizing psychological flexibility via six core processes: 1) Acceptance (willingness to experience unwanted internal events), 2) Cognitive defusion (distancing from thoughts), 3) Present moment awareness (mindfulness), 4) Self-as-context (observing self), 5) Values (chosen life directions), 6) Committed action (behavior change aligned with values). Contrasts with traditional CBT's cognitive restructuring—ACT doesn't challenge thought content but changes relationship to thoughts. Effective for anxiety, depression, chronic pain, PTSD."
    },
    {
      q: "In behavioral activation for depression, the PRIMARY intervention is:",
      options: [
        "Challenging negative automatic thoughts",
        "Interpreting unconscious motivations",
        "Systematically increasing engagement in rewarding and goal-directed activities",
        "Expressing emotions in group therapy"
      ],
      correct: 2,
      explanation: "Behavioral Activation (BA): Systematic scheduling and engagement in rewarding, meaningful activities to counteract depression-related withdrawal and avoidance. Based on Lewinsohn's reinforcement theory and Jacobson's component analysis (BA alone as effective as full CBT). Steps: monitor activities-mood, identify values, schedule activities, reduce avoidance. Targets behavioral patterns maintaining depression. Simpler than full CBT, effective across cultures/education levels. Evidence-based for depression, comparable to medication and cognitive therapy."
    },
    {
      q: "The difference between flooding and systematic desensitization is:",
      options: [
        "Flooding uses gradual exposure; systematic desensitization uses immediate exposure",
        "Flooding involves prolonged, intense exposure to feared stimulus; systematic desensitization uses gradual hierarchy with relaxation",
        "There is no difference",
        "Flooding is only for phobias; systematic desensitization is only for OCD"
      ],
      correct: 1,
      explanation: "Systematic desensitization (Wolpe): Gradual exposure through anxiety hierarchy paired with relaxation (reciprocal inhibition/counter-conditioning). Flooding: Prolonged, intense exposure to highly feared stimulus without escape until anxiety extinguishes (based on habituation/extinction). Implosion: Imaginal flooding. Flooding is faster but more distressing; systematic desensitization more comfortable but slower. Modern exposure therapy often uses graduated exposure without relaxation (inhibitory learning model), focusing on violating threat expectancies rather than habituation."
    },
    {
      q: "Interpersonal Psychotherapy (IPT) focuses primarily on:",
      options: [
        "Unconscious conflicts from childhood",
        "Cognitive distortions",
        "Current interpersonal relationships and one of four problem areas",
        "Spiritual development"
      ],
      correct: 2,
      explanation: "IPT (Klerman, Weissman): Time-limited, manualized treatment focusing on current interpersonal functioning and one of four problem areas: 1) Grief/complicated bereavement, 2) Role transitions, 3) Role disputes, 4) Interpersonal deficits. Based on attachment theory and interpersonal theory of depression (Sullivan). Doesn't focus on cognitions, unconscious, or past childhood. Evidence-based for depression (comparable to CBT/medication), eating disorders, PTSD. Particularly suitable for clients who prefer interpersonal focus over cognitive or behavioral approaches."
    },
    {
      q: "Eye Movement Desensitization and Reprocessing (EMDR) for PTSD involves:",
      options: [
        "Only eye movements without processing trauma memories",
        "Bilateral stimulation while processing trauma memories through structured phases",
        "Extended exposure to trauma cues",
        "Cognitive restructuring alone"
      ],
      correct: 1,
      explanation: "EMDR (Shapiro): Eight-phase protocol including bilateral stimulation (eye movements, taps, tones) while processing trauma memories. Phases: history, preparation, assessment (identify target), desensitization, installation (positive cognition), body scan, closure, reevaluation. Mechanism debated—may work via working memory taxation, exposure, or other factors. Evidence-based for PTSD (APA, VA/DoD guidelines), though some research suggests eye movements not necessary (exposure is active ingredient). Effective alternative to PE/CPT for some clients."
    },
    {
      q: "Which therapeutic approach emphasizes the therapist's use of 'unconditional positive regard,' empathy, and genuineness?",
      options: [
        "Psychoanalytic therapy",
        "Cognitive-behavioral therapy",
        "Person-centered therapy (Rogerian)",
        "Dialectical behavior therapy"
      ],
      correct: 2,
      explanation: "Person-centered (client-centered) therapy (Rogers): Emphasizes therapist's core conditions as necessary and sufficient for change: 1) Unconditional positive regard (nonjudgmental acceptance), 2) Empathic understanding (accurate perception of client's world), 3) Congruence/genuineness (authentic, transparent). Client is expert; therapist facilitates self-actualization. Contrasts with directive approaches (CBT, psychoanalysis). Research: therapeutic alliance (to which Rogers contributed foundational understanding) is one of strongest predictors of outcome across all therapy types. Client-centered techniques used across orientations."
    },
    {
      q: "In psychodynamic therapy, the term 'working through' refers to:",
      options: [
        "The initial contract-setting phase",
        "The repetitive elaboration and exploration of conflicts and resistances until lasting change occurs",
        "Termination planning",
        "The first interpretation offered to the client"
      ],
      correct: 1,
      explanation: "Working through: Repeated examination and elaboration of conflicts, defenses, and patterns in multiple contexts until insight translates to lasting behavior/emotional change. Not one-time interpretation but gradual process of deepening understanding and integration. Necessary because resistances and defenses are tenacious; single insight rarely produces change. Involves recognizing patterns across situations, past/present links, transference manifestations. Time-intensive—one reason psychodynamic therapy is longer-term than CBT. Modern short-term psychodynamic therapies focus working-through on circumscribed issues."
    },
    {
      q: "Common factors in psychotherapy that predict outcome include all EXCEPT:",
      options: [
        "Therapeutic alliance",
        "Therapist empathy",
        "Client expectations and hope",
        "The specific theoretical orientation"
      ],
      correct: 3,
      explanation: "Common factors (Lambert, Wampold): Elements shared across therapies accounting for much outcome variance. Include: alliance (~7-8% variance), empathy, positive regard, goal consensus, expectations/hope, client factors (40%—severity, motivation, support), therapist factors, model/technique (~15%). Specific theoretical orientation matters less than these common factors (Dodo bird verdict—'all have won'). Implications: build strong alliance, instill hope, select treatments client finds credible, therapist competence matters. Debate continues: common factors vs. specific techniques for specific disorders."
    },
    {
      q: "Family-Based Treatment (FBT; Maudsley approach) for adolescent anorexia nervosa involves:",
      options: [
        "Hospitalizing the adolescent away from family",
        "Individual therapy for the adolescent only",
        "Empowering parents to take control of refeeding and weight restoration",
        "Medication as the primary intervention"
      ],
      correct: 2,
      explanation: "FBT (Maudsley method): First-line treatment for adolescent anorexia nervosa. Three phases: 1) Parental empowerment—parents take charge of refeeding and weight restoration (not blaming parents but positioning them as solution), 2) Gradual return of food control to adolescent, 3) Broader developmental issues. Agnostic about etiology, focuses on medical stabilization. Outpatient when medically stable. Evidence-based, superior to individual therapy for adolescents. Contrasts with older models that excluded/blamed families. Adaptations for bulimia nervosa also effective."
    },
    {
      q: "Relapse prevention (Marlatt) in addiction treatment emphasizes:",
      options: [
        "Complete abstinence without planning for potential lapses",
        "Identifying high-risk situations, developing coping strategies, and distinguishing lapse from relapse",
        "Immediate hospitalization after any substance use",
        "Medication alone"
      ],
      correct: 1,
      explanation: "Relapse prevention (Marlatt & Gordon): Cognitive-behavioral approach to maintain change. Key elements: 1) Identify high-risk situations (triggers), 2) Develop coping strategies, 3) Lifestyle changes (balance), 4) Distinguish lapse (single use) from relapse (return to pattern), 5) Address abstinence violation effect (guilt → full relapse). Replaces moral model with learning model. Harm reduction compatible. Effective for addictions, also applied to other behaviors (eating disorders, aggression). Modern versions integrate MI, mindfulness. Part of broader recovery management approach."
    },
    {
      q: "Seeking Safety, an evidence-based treatment for PTSD and substance use disorders, emphasizes:",
      options: [
        "Trauma processing in early treatment",
        "Present-focused coping skills for safety and stabilization before trauma processing",
        "Substance use treatment only, avoiding trauma",
        "Family therapy exclusively"
      ],
      correct: 1,
      explanation: "Seeking Safety (Najavits): Integrated, present-focused treatment for co-occurring PTSD and substance use. Focuses on safety (cognitive, behavioral, interpersonal, case management) and coping skills rather than trauma processing (contrasts with exposure-based PTSD treatments). Rationale: stabilize before processing. Topics: PTSD/SUD psychoeducation, grounding, coping with triggers, asking for help, setting boundaries. Flexible format (individual/group, any setting). Effective for complex trauma, severe symptoms. Phase-based trauma treatment: stabilization → processing → integration. Safety first."
    },
    {
      q: "The concept of the 'therapeutic window' in trauma treatment refers to:",
      options: [
        "The optimal time of day for therapy sessions",
        "The zone of arousal where processing can occur—not too high (overwhelmed) or too low (numb)",
        "The duration of a therapy session",
        "The time between sessions"
      ],
      correct: 1,
      explanation: "Therapeutic window (Siegel, Ogden): Optimal arousal zone for trauma processing. Too high arousal → hyperactivation, overwhelm, retraumatization. Too low → hypoactivation, dissociation, no processing. Therapist helps client stay within window through titration (small doses), resourcing, grounding, pendulation (moving between distress and calm). Based on polyvagal theory and neuroscience. Explains why flooding can harm some trauma clients while graduated exposure helps. Particularly relevant for complex trauma, dissociation. Trauma-informed care recognizes this balance."
    },
    {
      q: "Solution-Focused Brief Therapy (SFBT; de Shazer, Berg) is characterized by:",
      options: [
        "Extensive exploration of problem history and etiology",
        "Focus on solutions, strengths, exceptions to problems, and future goals",
        "Long-term psychodynamic exploration",
        "Medication management"
      ],
      correct: 1,
      explanation: "SFBT: Brief, strengths-based approach focusing on solutions, not problems. Key techniques: Miracle question ('If problem solved overnight, what would be different?'), Exception-finding (times problem absent/less severe—what was different?), Scaling questions (1-10, where are you, what would move you up?), Compliments, homework. Assumes: clients have strengths/resources, small changes lead to bigger changes, focus on future not past. Efficient (often 6-8 sessions). Effective for various issues, especially when client seeks practical solutions. Contrasts with problem-focused, insight-oriented approaches."
    },
    {
      q: "Contingency management in substance use treatment involves:",
      options: [
        "Providing tangible reinforcers (vouchers, prizes) for objectively verified abstinence",
        "Verbal praise only",
        "Punishment for substance use",
        "Insight-oriented exploration of addiction"
      ],
      correct: 0,
      explanation: "Contingency management (CM): Operant conditioning-based intervention providing tangible positive reinforcement (vouchers, prizes, methadone dose increases) contingent on objective evidence of target behavior (negative drug screens, treatment attendance). Immediate, frequent reinforcement. Very effective for stimulant use (for which few medications exist), increasing treatment retention. Evidence-based per VA/DoD, APA guidelines. Criticisms: cost, sustainability post-intervention, 'paying people to do what they should do.' Response: changes brain reward systems damaged by addiction, highly cost-effective vs. addiction consequences."
    },
    {
      q: "Cognitive Processing Therapy (CPT) for PTSD focuses primarily on:",
      options: [
        "Prolonged imaginal exposure to trauma memories",
        "Identifying and modifying maladaptive trauma-related cognitions (stuck points) about safety, trust, control, esteem, intimacy",
        "Eye movements during trauma processing",
        "Medication management"
      ],
      correct: 1,
      explanation: "CPT (Resick): Cognitive therapy for PTSD targeting maladaptive beliefs ('stuck points') in five areas: safety, trust, power/control, esteem, intimacy. Protocol: psychoeducation, trauma account (written), identify stuck points, Socratic dialogue, cognitive restructuring worksheets, practice. Can include or omit written account (CPT vs. CPT-C). Less reliance on exposure than PE. Highly effective (VA/DoD, APA recommended). Particularly suitable for: cognitive focus, complex trauma, military sexual trauma. Shorter than traditional therapy (12 sessions), manualized, widely disseminated in VA."
    },
    {
      q: "Enhanced Cognitive-Behavioral Therapy (CBT-E) for bulimia nervosa primarily targets:",
      options: [
        "Family dynamics only",
        "The overvaluation of shape and weight, along with dietary restraint and binge-purge cycles",
        "Medication compliance",
        "Unconscious conflicts about femininity"
      ],
      correct: 1,
      explanation: "CBT-E (Fairburn): Transdiagnostic eating disorder treatment, gold standard for bulimia nervosa and binge eating disorder. Targets maintaining mechanisms: overvaluation of shape/weight (core psychopathology), dietary restraint, mood intolerance, interpersonal difficulties, perfectionism. Phases: engagement and formulation, regular eating and stopping purging, addressing overvaluation, relapse prevention. 20 sessions over 20 weeks (focused) or 40 sessions (broad). Evidence: superior to other psychotherapies. Also effective for OSFED. Individual format, outpatient."
    },
    {
      q: "The therapeutic technique of 'opposite action' in DBT involves:",
      options: [
        "Doing the opposite of what the therapist recommends",
        "Acting opposite to emotion-driven behavioral urges when the emotion is not justified or effective",
        "Contradicting the client's statements to create insight",
        "Reversing maladaptive thinking patterns"
      ],
      correct: 1,
      explanation: "Opposite action (DBT emotion regulation skill): When emotion is unjustified or ineffective, act opposite to urge. Examples: approach when fear is unjustified (exposure), be kind when angry without justification, get active when sad. Rationale: behavior can change emotion via feedback. Distinguish from changing thoughts (cognitive restructuring) or suppressing emotion. Requires judging whether emotion 'fits the facts' (justified by situation). If emotion is justified, express appropriately; if unjustified, use opposite action. Effective for emotion dysregulation."
    },
    {
      q: "Prolonged Exposure (PE) therapy for PTSD consists primarily of:",
      options: [
        "Brief, occasional exposure to trauma reminders",
        "Repeated, prolonged imaginal exposure to trauma memories and in vivo exposure to safe trauma reminders",
        "Cognitive restructuring without exposure",
        "Medication management with minimal therapy"
      ],
      correct: 1,
      explanation: "PE (Foa): Gold standard behavioral treatment for PTSD. Components: 1) Psychoeducation, 2) Breathing retraining (minimal), 3) Imaginal exposure (repeatedly recount trauma memory, 30-45 min), 4) In vivo exposure (approach safe trauma reminders using hierarchy), 5) Processing. 8-15 sessions. Mechanism: emotional processing theory—activation and modification of fear structure, habituation, extinction, inhibitory learning. Contraindications debated (traditionally: imminent suicidal risk, unstable housing, current substance dependence; modern view: fewer than thought). Very effective, large effect sizes."
    },
    {
      q: "In schema therapy, 'early maladaptive schemas' are:",
      options: [
        "Adaptive learning strategies developed in childhood",
        "Dysfunctional broad patterns or themes about self/others developed in childhood and elaborated throughout life",
        "Specific cognitive distortions targeted in traditional CBT",
        "Unconscious defense mechanisms"
      ],
      correct: 1,
      explanation: "Schema therapy (Young): Integrative approach for personality disorders, chronic Axis I. Early maladaptive schemas: pervasive themes/patterns (abandonment, mistrust, defectiveness, failure, etc.) from unmet core needs in childhood. Five schema domains: disconnection/rejection, impaired autonomy, impaired limits, other-directedness, overvigilance/inhibition. Coping styles: surrender, avoidance, overcompensation. Modes: child modes, maladaptive coping/parent modes, healthy adult. Techniques: cognitive, experiential (imagery, chair work), behavioral, therapeutic relationship (limited reparenting). Evidence: effective for BPD, comparable to DBT."
    },
    {
      q: "Mentalization-Based Treatment (MBT) for borderline personality disorder emphasizes:",
      options: [
        "Medication management exclusively",
        "Enhancing the capacity to understand mental states underlying behavior (mentalizing)",
        "Exposure to feared situations",
        "Gaining insight into unconscious conflicts from childhood"
      ],
      correct: 1,
      explanation: "MBT (Bateman, Fonagy): Psychodynamic treatment for BPD targeting impaired mentalization (understanding self/others' mental states—thoughts, feelings, intentions). BPD involves mentalization failure under stress → misinterpretation, impulsivity. MBT: restore mentalizing through therapist modeling 'not-knowing' stance, exploring mental states, affect focus, here-and-now. Structured (weekly individual + group, 18 months). Evidence: effective for BPD, reduces self-harm, suicide attempts, hospitalization. Less prescriptive than DBT, psychodynamic roots, attachment-based."
    },
    {
      q: "The 'behavioral experiment' technique in CBT involves:",
      options: [
        "Laboratory studies of behavior",
        "Testing the validity of beliefs/predictions through planned real-world experiences",
        "Randomly trying different behaviors",
        "Only imagining alternative behaviors"
      ],
      correct: 1,
      explanation: "Behavioral experiments: Empirically test beliefs/predictions. Steps: identify belief, make specific prediction, design experiment, conduct (collect data), evaluate outcome vs. prediction, draw conclusions. More powerful than verbal cognitive restructuring—experiential disconfirmation. Examples: test 'people will laugh at me' by deliberately spilling water, test 'I'll faint if anxious' by hyperventilating. Used across CBT (panic, social anxiety, OCD, depression). Contrasts with exposure (primary goal anxiety reduction) vs. experiments (test cognitions). Critical thinking applied to automatic thoughts."
    },
    {
      q: "Unified Protocol for Transdiagnostic Treatment of Emotional Disorders (UP) targets:",
      options: [
        "Specific disorder-focused interventions for single diagnoses",
        "Core underlying processes across anxiety, depression, and related disorders",
        "Only behavioral activation",
        "Medication selection"
      ],
      correct: 1,
      explanation: "UP (Barlow): Transdiagnostic CBT targeting shared maintaining factors across emotional disorders: neuroticism/negative affect, avoidance, emotion dysregulation. Modules: enhancing motivation, psychoeducation, mindfulness, cognitive flexibility, countering emotional behaviors (opposite action), awareness/tolerance of physical sensations (interoceptive exposure), emotion exposures, relapse prevention. Treats anxiety disorders, depression, related conditions with single protocol. Evidence: effective, comparable to single-disorder protocols. Addresses comorbidity, increases treatment accessibility, efficient training."
    },
    {
      q: "Functional Analytic Psychotherapy (FAP) focuses on:",
      options: [
        "Historical analysis of childhood experiences",
        "In-session interpersonal behavior as it occurs in the therapeutic relationship",
        "Cognitive restructuring exclusively",
        "Medication adjustment"
      ],
      correct: 1,
      explanation: "FAP (Kohlenberg, Tsai): Behavioral approach using therapeutic relationship as vehicle for change. Clinically Relevant Behaviors (CRBs): 1) in-session problems (parallel to outside problems), 2) in-session improvements, 3) client interpretations of behavior. Therapist evokes, notices, reinforces (natural reinforcement) CRB2s (improvements). Mechanism: direct contingency shaping of interpersonal behavior. Integrates with other treatments (ACT, DBT, psychodynamic). Evidence: effective for interpersonal problems, personality disorders, treatment-resistant cases. Requires therapist self-awareness, courage to use relationship therapeutically."
    },
    {
      q: "Interpersonal and Social Rhythm Therapy (IPSRT) for bipolar disorder focuses on:",
      options: [
        "Medication management only",
        "Stabilizing daily routines and social rhythms, and addressing interpersonal problem areas",
        "Insight into unconscious conflicts",
        "Cognitive restructuring of depressive thoughts"
      ],
      correct: 1,
      explanation: "IPSRT (Frank): Integrates IPT with social rhythm therapy for bipolar disorder. Rationale: circadian/social rhythm disruption triggers episodes. Social Rhythm Metric (SRM): track daily routines (sleep/wake, meals, activities, social contact). Stabilize rhythms (regularity). Address interpersonal triggers (grief, role disputes, transitions, deficits—from IPT). Maintenance phase: sustain rhythms, manage triggers. Evidence: reduces recurrence, extends time to episode, especially when combined with medication. Recognizes biopsychosocial nature of bipolar. Patient education about rhythm stability critical."
    },
    {
      q: "Cognitive Behavioral Analysis System of Psychotherapy (CBASP) was specifically developed for:",
      options: [
        "Acute major depression",
        "Chronic depression (dysthymia, chronic major depressive disorder)",
        "Bipolar disorder",
        "Anxiety disorders"
      ],
      correct: 1,
      explanation: "CBASP (McCullough): Integrative treatment (cognitive, behavioral, interpersonal/psychodynamic) specifically for chronic depression. Key elements: Situational Analysis (SA)—structured examination of interpersonal situations, identify maladaptive interpretations/behaviors, generate alternatives; Interpersonal discrimination exercise—distinguish therapist from significant others; Contingent personal responsivity—therapist's disciplined personal involvement. Addresses learned helplessness, preoperational thinking (Piaget), interpersonal deficits. Evidence: effective for chronic depression, additive to medication. Unique in targeting chronicity specifically."
    },
    {
      q: "Emotion-Focused Therapy (EFT) for couples primarily targets:",
      options: [
        "Behavioral skills training",
        "Attachment needs, emotional responses, and interactional patterns creating negative cycles",
        "Cognitive distortions about the partner",
        "Communication skills only"
      ],
      correct: 1,
      explanation: "EFT for couples (Johnson, Greenberg): Attachment-based approach targeting emotional responses driving negative interaction cycles. Stages: 1) Cycle de-escalation (identify patterns, access underlying emotions—fear, shame), 2) Restructure interactions (withdraw→express needs, pursue→soften), 3) Consolidation. Focuses on primary emotions (attachment needs) vs. secondary (anger). Therapist active, experiential techniques (enactments, heightening). Evidence: highly effective, 70-75% recovery rates, maintained long-term. Applied to various couples issues, trauma (attachment injury resolution). Contrasts with behavioral approaches (skills-focused)."
    },
    {
      q: "Parent-Child Interaction Therapy (PCIT) for young children with disruptive behaviors involves:",
      options: [
        "Individual play therapy with the child only",
        "Live coaching of parents while they interact with their child, teaching positive attention and discipline skills",
        "Medication management",
        "Group parent education classes"
      ],
      correct: 1,
      explanation: "PCIT: Evidence-based for ages 2-7 with disruptive behaviors. Two phases: 1) Child-Directed Interaction (CDI)—warm relationship, PRIDE skills (Praise, Reflection, Imitation, Description, Enthusiasm), special playtime; 2) Parent-Directed Interaction (PDI)—effective commands, time-out, consistency. Therapist live-coaches parents via bug-in-ear while they play with child. Mastery-based (meet skill criteria). Mechanism: improve attachment, increase positive attention, decrease coercive cycles. Evidence: effective for ODD, CD, ADHD, sustained outcomes. Adaptations for autism, maltreatment. Requires therapist training, observation room."
    },
    {
      q: "Cognitive therapy for depression (Beck) identifies and modifies:",
      options: [
        "Only behavioral patterns",
        "The negative cognitive triad (negative views of self, world, future) and underlying schemas",
        "Only current life stressors",
        "Unconscious conflicts exclusively"
      ],
      correct: 1,
      explanation: "Cognitive therapy (Beck): Depression maintained by negative cognitive triad (self—'I'm worthless', world—'no one cares', future—'it won't improve') and cognitive distortions (all-or-nothing, overgeneralization, personalization, etc.). Underlying schemas activated by stressors. Techniques: identify automatic thoughts, examine evidence, behavioral experiments, activity scheduling (BA), cognitive restructuring, schema work (later phase). Collaborative empiricism, Socratic questioning. Structure: agenda, homework. Evidence: gold standard, comparable to medication, reduces relapse. Foundation of CBT."
    },
    {
      q: "In exposure therapy, 'inhibitory learning' refers to:",
      options: [
        "The extinction of fear responses permanently",
        "New learning that a feared stimulus is safe, which competes with but doesn't erase original fear learning",
        "Preventing the client from avoiding feared situations",
        "Teaching relaxation to inhibit anxiety"
      ],
      correct: 1,
      explanation: "Inhibitory learning model (Craske, Treanor): Modern reconceptualization of exposure. Original fear learning (CS-US) not erased but new inhibitory association (CS-no US) learned that competes. Explains: spontaneous recovery, renewal (context change), reinstatement. Implications: 1) Don't require anxiety decrease during exposure (habituation not necessary), 2) Violate expectancies (test predictions—'I'll faint'), 3) Vary contexts (prevent context-specific learning), 4) Occasional reinforced extinction trials strengthen inhibition, 5) Multiple exposures in different ways. Optimizes exposure effectiveness. Contrasts with habituation model."
    },
    {
      q: "Gottman Method Couples Therapy emphasizes:",
      options: [
        "Eliminating all conflict from the relationship",
        "Building friendship, managing conflict, creating shared meaning, and avoiding the 'Four Horsemen'",
        "Individual therapy before couples work",
        "Medication for relationship problems"
      ],
      correct: 1,
      explanation: "Gottman Method: Research-based couples therapy. Sound Relationship House: friendship/intimacy (love maps, fondness/admiration, turning toward), manage conflict (69% perpetual, accept influence, dialogue), shared meaning. Four Horsemen predict divorce: criticism, contempt, defensiveness, stonewalling (antidotes: gentle startup, build culture of appreciation, take responsibility, physiological soothing). Repair attempts, positive sentiment override. Assessment: structured interview, questionnaires. Evidence: reduces conflict, increases satisfaction. Focuses on observable behaviors from longitudinal research. Differs from EFT (attachment-focused)."
    },
    {
      q: "Problem-Solving Therapy (PST) is particularly effective for:",
      options: [
        "Personality disorders only",
        "Depression, especially in medical populations and older adults",
        "Schizophrenia only",
        "PTSD only"
      ],
      correct: 1,
      explanation: "PST (D'Zurilla, Nezu): Brief treatment teaching systematic problem-solving. Steps: 1) Problem orientation (positive attitude toward problems), 2) Problem definition (clear, specific), 3) Generate alternatives (brainstorm), 4) Decision-making (pros/cons, choose), 5) Solution implementation and verification. Evidence: effective for depression, particularly medical populations (cancer, stroke, diabetes), older adults, primary care. Addresses problem-solving deficits maintaining depression. Brief (6-12 sessions), practical, adaptable. Used alone or combined with other treatments. Less focus on cognitions than CBT, more on practical skills."
    },
    {
      q: "Habit Reversal Training is the evidence-based behavioral treatment for:",
      options: [
        "OCD rituals",
        "Tics, trichotillomania (hair-pulling), and excoriation (skin-picking)",
        "Substance use disorders",
        "Eating disorders"
      ],
      correct: 1,
      explanation: "Habit Reversal Training (HRT; Azrin, Nunn): Behavioral treatment for body-focused repetitive behaviors (BFRBs) and tics. Components: 1) Awareness training (self-monitoring, identify triggers, early warning signs), 2) Competing response (physically incompatible behavior for 1-3 min), 3) Motivation (review negative consequences, social support), 4) Generalization training. Evidence: first-line for tics (with CBIT—Comprehensive Behavioral Intervention for Tics), trichotillomania, excoriation. Often combined with ACT for BFRBs. Teaches self-management. Brief, effective, no side effects unlike medication."
    },
    {
      q: "Cognitive Remediation Therapy (CRT) for schizophrenia targets:",
      options: [
        "Delusions and hallucinations directly",
        "Cognitive deficits (attention, memory, executive function) through exercises and strategy coaching",
        "Social anxiety",
        "Medication adherence only"
      ],
      correct: 1,
      explanation: "CRT: Behavioral training targeting cognitive deficits in schizophrenia (attention, working memory, executive function, social cognition). Drill-based (computerized exercises) and/or strategy-based (metacognitive strategies, errorless learning). Improves functioning even when symptoms persist. Evidence: moderate effects on cognition and functioning, enhances other rehabilitation (vocational). Adjunct to medication and psychosocial interventions. Neuroplasticity basis. Contrast with CBT for psychosis (targets beliefs about symptoms). WHO recommends. Delivered individually or group, ongoing research on optimal approach."
    },
    {
      q: "Acceptance-Based Behavior Therapy (ABBT) for generalized anxiety disorder combines:",
      options: [
        "Only relaxation training",
        "ACT principles with behavioral strategies targeting worry and avoidance",
        "Medication management exclusively",
        "Psychoanalytic interpretation"
      ],
      correct: 1,
      explanation: "ABBT (Roemer, Orsillo): Integrates ACT, mindfulness, and behavioral therapy for GAD. Rationale: experiential avoidance (of thoughts, emotions, sensations) maintains GAD. Components: psychoeducation, self-monitoring, mindfulness, acceptance of internal experiences, values clarification, committed action (reduce behavioral avoidance). Differs from traditional CBT (doesn't challenge worry content, focuses on relationship to worry). Evidence: effective for GAD, comparable to applied relaxation. Representative of third-wave approaches. Addresses emotion regulation broadly. Group or individual format."
    },
    {
      q: "The 'miracle question' in Solution-Focused Brief Therapy asks:",
      options: [
        "'What is the worst thing that could happen?'",
        "'If a miracle happened and your problem was solved, what would be different?'",
        "'What caused your problem?'",
        "'Who is to blame for your situation?'"
      ],
      correct: 1,
      explanation: "Miracle question: 'Suppose tonight while asleep, a miracle occurs and your problem is solved. You don't know it happened because you were asleep. When you wake up, what will be different that tells you the miracle happened?' Helps clients envision solutions, identify concrete goals, bypass problem focus, tap into hope. Detailed follow-up: 'What else? Who would notice? What would they see?' Generates observable behavioral markers of success. Other SFBT techniques: exception-finding, scaling questions, coping questions, compliments. Future-focused, strengths-based, brief. Effective across diverse populations."
    },
    {
      q: "Multisystemic Therapy (MST) for adolescent antisocial behavior:",
      options: [
        "Focuses only on individual therapy with the adolescent",
        "Intervenes in multiple systems (family, school, peers, community) maintaining antisocial behavior",
        "Uses only pharmacological interventions",
        "Recommends out-of-home placement as first line"
      ],
      correct: 1,
      explanation: "MST (Henggeler): Intensive family- and community-based treatment for serious juvenile offenders. Targets multiple systems: family (parenting, family relations), peers (reduce deviant peer contact, increase prosocial), school (engagement, achievement), community (connect to supports). Principles: ecological validity, strengths-based, present-focused, action-oriented, accountability. Delivered in home/community, 24/7 availability, small caseloads, 3-5 months. Evidence: reduces recidivism, out-of-home placement, cost-effective. Fidelity-monitored. Gold standard for serious antisocial youth. Prevents expensive residential treatment. Transported internationally."
    },
    {
      q: "Cognitive-Behavioral Therapy for Insomnia (CBT-I) includes all EXCEPT:",
      options: [
        "Sleep restriction therapy",
        "Stimulus control (bed only for sleep/sex)",
        "Long-term sedative-hypnotic medication",
        "Cognitive restructuring of sleep-interfering beliefs"
      ],
      correct: 2,
      explanation: "CBT-I: First-line treatment for chronic insomnia (ACP guidelines). Components: 1) Sleep restriction (limit time in bed to actual sleep time, then gradually expand), 2) Stimulus control (bed = sleep/sex only, leave bed if not sleeping), 3) Sleep hygiene, 4) Cognitive therapy (challenge beliefs—'I need 8 hours', catastrophizing), 5) Relaxation. 4-8 sessions. Evidence: highly effective, durable (superior to medication long-term), no side effects. Mechanisms: reduce arousal, strengthen sleep drive, break maladaptive conditioning. Digital CBT-I (apps, online) effective, accessible. Medication for acute insomnia only, tapered."
    },
    {
      q: "Compassion-Focused Therapy (CFT) was developed particularly for clients with:",
      options: [
        "No mental health issues",
        "High shame and self-criticism, often with trauma histories",
        "Substance use only",
        "Cognitive deficits"
      ],
      correct: 1,
      explanation: "CFT (Gilbert): Third-wave therapy for clients with shame, self-criticism, often treatment-resistant depression. Rationale: self-criticism activates threat system, blocks therapeutic progress. Targets: cultivate self-compassion via understanding (psychoeducation on emotion systems), practicing (compassionate mind training, imagery, letter-writing), applying (compassionate responses to setbacks). Three emotion regulation systems: threat, drive, soothing (compassion activates soothing). Techniques: soothing rhythm breathing, compassionate self-imagery. Evidence: effective for chronic depression, eating disorders, psychosis. Integrates evolutionary, neuroscience, attachment theory. Addresses 'fear of compassion.'"
    },
    {
      q: "Brief Strategic Family Therapy (BSFT) for adolescent behavior problems focuses on:",
      options: [
        "Individual insight-oriented therapy",
        "Identifying and changing maladaptive family interaction patterns that maintain problems",
        "Medication management",
        "Removing the adolescent from the family"
      ],
      correct: 1,
      explanation: "BSFT (Szapocznik): Short-term (12-16 sessions) family therapy for adolescent behavior problems (substance use, conduct problems). Targets: maladaptive family interactions (alliances, communication, conflict resolution, parenting). Therapist actively restructures interactions in-session. Joining (build relationship), diagnosing patterns, restructuring. Evidence: reduces adolescent substance use, conduct problems, strengthens family functioning. Cultural adaptation for Hispanic families. Prevents dropout (engagement strategies). Contrasts with individual teen therapy. Family context as maintaining factor. Practical, present-focused, directive."
    },
    {
      q: "Collaborative Assessment and Management of Suicidality (CAMS) is characterized by:",
      options: [
        "Hospitalizing all suicidal clients immediately",
        "Therapist and client working collaboratively using the Suicide Status Form to understand and target drivers of suicidality",
        "Ignoring suicidal ideation to avoid reinforcing it",
        "Using only medication management"
      ],
      correct: 1,
      explanation: "CAMS (Jobes): Therapeutic framework for outpatient suicidality. Core: collaborative, client-centered, uses Suicide Status Form (SSF) to assess suicidal drivers (psychological pain, stress, agony, hopelessness, self-hate) and develop individualized treatment plan targeting these drivers. Contrasts with expert/coercive approach. Suicide as solution to problems—make problems solvable. Evidence: reduces suicidal ideation, attempts, hospitalization, increases hope/retention. Flexible (integrates with other treatments). Philosophy: validate pain while eliminating suicide as option. Engages ambivalent clients. Training required for fidelity."
    },
    {
      q: "Integrated Dual Disorder Treatment (IDDT) for co-occurring severe mental illness and substance use disorders involves:",
      options: [
        "Treating substance use first, then mental illness",
        "Treating both disorders simultaneously within same program/team with integrated, stage-matched interventions",
        "Referring to separate programs for each disorder",
        "Medication management only"
      ],
      correct: 1,
      explanation: "IDDT: Evidence-based model for co-occurring SMI + SUD. Principles: same team/program (integrated, not parallel), assertive outreach, stage-matched interventions (engagement, persuasion, active treatment, relapse prevention), harm reduction, longitudinal. Combines mental health treatment, MI, CBT for SUD, supported employment, family psychoeducation, medication. Contrasts with sequential or parallel treatment (coordination problems, dropout). Evidence: reduces substance use, improves functioning, increases treatment retention. Recognizes: both disorders interact, clients often excluded from single-disorder programs, requires modified expectations (slower progress acceptable)."
    },
    {
      q: "Mindfulness-Based Cognitive Therapy (MBCT) was developed specifically for:",
      options: [
        "Acute depression",
        "Relapse prevention in recurrent depression",
        "Anxiety disorders primarily",
        "Bipolar disorder primarily"
      ],
      correct: 1,
      explanation: "MBCT (Segal, Williams, Teasdale): Integrates mindfulness meditation with cognitive therapy for depression relapse prevention. Rationale: in recovered depressed individuals, minor mood drops reactivate negative thinking, triggering relapse. MBCT teaches metacognitive awareness—observe thoughts as mental events, not facts; decentering. 8-week group program, daily meditation practice. Evidence: reduces relapse ~50% for those with 3+ prior episodes, comparable to maintenance medication. Not for acute depression (ACT or standard CBT better). Representative third-wave approach. Applied to other conditions (anxiety, addiction, cancer). Prevents depressive rumination spirals."
    },
    {
      q: "Exposure with Response Prevention (ERP) for OCD is based on the principle of:",
      options: [
        "Immediate thought stopping",
        "Systematic exposure to obsession triggers while preventing compulsive rituals, allowing anxiety to extinguish",
        "Relaxation training only",
        "Gaining insight into unconscious meaning of obsessions"
      ],
      correct: 1,
      explanation: "ERP: Gold standard for OCD. Exposure to situations triggering obsessions (contamination, doubt, harm, etc.) while preventing rituals/compulsions. Prolonged exposure allows anxiety to naturally decrease (habituation, extinction, inhibitory learning). Response prevention breaks obsession-compulsion link. Hierarchy-based (gradual). Homework critical. Often combined with medication (SSRIs). Evidence: 60-70% response rates. Four-step self-treatment (Schwartz): Relabel (OCD, not reality), Reattribute (brain glitch), Refocus (alternative activity), Revalue (dismiss OCD thoughts). Requires motivation, tolerance of distress. Mechanism debated but effectiveness strong."
    },
    {
      q: "Transference-Focused Psychotherapy (TFP) for borderline personality disorder:",
      options: [
        "Avoids discussion of the therapeutic relationship",
        "Systematically analyzes transference patterns to modify split object relations",
        "Focuses exclusively on current life stressors",
        "Uses only behavioral techniques"
      ],
      correct: 1,
      explanation: "TFP (Kernberg, Clarkin): Psychodynamic treatment for BPD targeting identity diffusion and split object relations (all-good vs. all-bad representations). Therapist maintains technical neutrality, interprets transference (alternating idealization/devaluation), helps integrate split representations. Contract setting (address treatment-interfering behaviors). Twice-weekly, long-term. Tactics: clarification, confrontation, interpretation. Evidence: effective for BPD, reduces suicidality, improves reflective functioning. Contrasts with DBT (more directive, skills-focused), MBT (supportive stance). Requires therapist training. Modern versions briefer. Targets structural change, not just symptom reduction."
    },
    {
      q: "Unified Protocol's 'countering emotional behaviors' module involves:",
      options: [
        "Suppressing all emotions",
        "Opposite action—acting opposite to emotion-driven behavioral urges",
        "Avoiding all emotional situations",
        "Only talking about emotions"
      ],
      correct: 1,
      explanation: "UP Module 6: Countering Emotional Behaviors = emotion-driven behaviors (EDBs) that provide short-term relief but maintain problems long-term (avoidance, safety behaviors, reassurance-seeking). Countering = opposite action (from DBT). Approach rather than avoid (behavioral exposure). Examples: stay in social situation when anxious, activate when sad, don't check when worried. Violates expectancies, builds mastery. Combined with cognitive flexibility (previous module—thoughts not facts) and interoceptive exposure (sensations tolerable). Part of unified transdiagnostic approach. Targets behavioral maintenance factors across emotional disorders."
    },
    {
      q: "Imagery Rescripting is used in treatment of:",
      options: [
        "Schizophrenia primarily",
        "PTSD, social anxiety, depression, and other disorders involving distressing imagery or memories",
        "ADHD primarily",
        "Substance use disorders only"
      ],
      correct: 1,
      explanation: "Imagery Rescripting: Transform distressing images/memories by revisiting in imagination and changing the outcome (rescue child self, confront perpetrator, alter meaning). Used for trauma (rescript abuse memory), social anxiety (rescript humiliation memory), depression (rescript loss/rejection), eating disorders (rescript bullying), nightmares. Mechanisms: memory reconsolidation, update meanings, reduce emotional intensity. Techniques vary: adult self intervenes, positive figure helps, change meaning. Evidence: effective across disorders. More tolerable than pure exposure for some. Experiential, emotionally powerful. Requires therapist skill, safety establishment. Integrates cognitive + emotional processing."
    },
    {
      q: "Supportive-Expressive Therapy, a brief psychodynamic treatment, focuses on:",
      options: [
        "Only supportive techniques avoiding emotional expression",
        "Core Conflictual Relationship Theme (CCRT)—identifying and working through maladaptive interpersonal patterns",
        "Free association without therapist input",
        "Behavioral exposure exclusively"
      ],
      correct: 1,
      explanation: "SE therapy (Luborsky): Time-limited psychodynamic therapy (16-20 sessions). Identifies Core Conflictual Relationship Theme (CCRT): 1) Wish (what client wants from others), 2) Response of Other (expected), 3) Response of Self (feelings/behaviors). Supportive techniques (alliance-building, affirmation) + expressive (interpretation, CCRT pattern recognition, linking to therapist relationship). Evidence: effective for depression, anxiety, substance use, personality disorders. Manualized. More accessible than traditional psychoanalysis (time-limited, focal, active therapist). Research base via CCRT coding."
    },
    {
      q: "Prolonged Exposure vs. Cognitive Processing Therapy for PTSD differ primarily in:",
      options: [
        "PE emphasizes emotional engagement and habituation; CPT emphasizes cognitive restructuring of trauma meanings",
        "They are identical treatments",
        "PE is never effective; CPT is always effective",
        "PE uses medication; CPT does not"
      ],
      correct: 0,
      explanation: "PE vs. CPT: Both gold standard, comparable efficacy. PE (Foa): Behavioral/emotional processing, prolonged imaginal exposure (relive trauma), in vivo exposure, minimal cognitive work. Mechanism: habituation, extinction, emotional processing. CPT (Resick): Cognitive therapy targeting stuck points (maladaptive beliefs about safety, trust, control, esteem, intimacy). Less emphasis on reliving trauma (written account optional in CPT-C). Mechanism: cognitive change. Choice based on: client preference, cognitive vs. emotional focus, trauma type (CPT for multiple traumas, military sexual trauma; PE for single-event trauma). Both ~12 sessions, manualized, effective."
    },
    {
      q: "Trauma Systems Therapy (TST) for traumatized children involves:",
      options: [
        "Individual child therapy only",
        "Intervention in both child (regulation skills) and environment (safety, stability) across systems",
        "Medication exclusively",
        "No involvement of caregivers"
      ],
      correct: 1,
      explanation: "TST: Comprehensive approach for traumatized children recognizing trauma as interaction between child's regulation capacity and environmental threats. Two-pronged: 1) Build child's emotion regulation skills (ready-regulation-reorganization phases matched to regulation capacity), 2) Improve environmental safety/stability (family, school, community interventions, advocacy). Phases: Surviving (safety first), Stabilizing, Enduring, Understanding, Transcending (meaning-making). Team-based, flexible intensity. Evidence: reduces PTSD, behavior problems. Contrasts with only treating child (TF-CBT) or only changing environment. Recognizes social-ecological context. Home-based when needed. Practical, phased."
    },
    {
      q: "The 'common factors' model of psychotherapy suggests that outcome is primarily influenced by:",
      options: [
        "The specific theoretical techniques unique to each modality",
        "Shared elements across therapies: alliance, empathy, hope, client factors, therapist factors",
        "Medication adherence",
        "Treatment length only"
      ],
      correct: 1,
      explanation: "Common factors (Lambert, Wampold): Most outcome variance attributable to factors shared across therapies, not specific techniques. Breakdown: Client/extratherapeutic factors 40% (severity, motivation, social support), Therapeutic relationship/alliance 30%, Hope/expectancy 15%, Model/technique 15%. Implication: cultivate alliance, instill hope, use credible treatment client believes in, therapist competence/warmth matter more than brand of therapy. Dodo bird verdict—'all have won' (psychotherapies roughly equivalent for most conditions). Debate: specific techniques DO matter for specific disorders (ERP for OCD, exposure for phobias), but common factors foundational. Train alliance skills."
    },
    {
      q: "Matrix Model for stimulant use disorders includes:",
      options: [
        "Psychoanalytic therapy only",
        "Integrated approach with CBT, 12-step, family education, relapse prevention, urine testing, social support",
        "No structure or monitoring",
        "Isolation from social support"
      ],
      correct: 1,
      explanation: "Matrix Model: Intensive outpatient treatment for stimulant use (cocaine, methamphetamine). Components: CBT-based relapse prevention groups, 12-step facilitation, family education, individual counseling, urine/breathalyzer testing, early recovery skills (managing triggers, cravings). Structure: 16-week program, multiple sessions/week, decreasing intensity. Manual-based, therapist uses positive reinforcement, educative style. Evidence: improves retention, reduces use (especially with CM—contingency management). SAMHSA-endorsed. Addresses lack of pharmacotherapy for stimulants. Community reinforcement approach (rewarding alternative behaviors). Practical, supportive, combines multiple effective elements."
    },
    {
      q: "Social Skills Training (SST) for schizophrenia spectrum disorders teaches:",
      options: [
        "Insight into psychotic symptoms",
        "Specific interpersonal skills via instruction, modeling, rehearsal, feedback, homework",
        "Medication management exclusively",
        "How to suppress all emotions"
      ],
      correct: 1,
      explanation: "SST: Behavioral intervention for social functioning deficits in schizophrenia. Modules: conversation skills, conflict resolution, medication management, community re-entry, workplace skills. Methods: didactic, modeling (video, therapist), role-play, corrective feedback, homework. Targets: verbal/nonverbal communication, receiving/processing social information, sending appropriate responses. Evidence: improves social skills, assertiveness, community functioning. Does NOT reduce symptoms. Part of comprehensive treatment (with medication, case management, family psychoeducation). Group format. Manualized (UCLA modules). Compensates for social cognition deficits. Long-term (months-years). Supported employment integrates SST."
    },
    {
      q: "Stress Inoculation Training (SIT) involves:",
      options: [
        "Avoiding all stress permanently",
        "Preparation phase (education), skill acquisition (coping skills), and application/rehearsal phase (practice in graduated scenarios)",
        "Medication management only",
        "Immediate exposure to maximum stress"
      ],
      correct: 1,
      explanation: "SIT (Meichenbaum): CBT-based approach for stress-related problems, PTSD, anxiety. Three phases: 1) Conceptualization—psychoeducation, stress response understanding, goals, 2) Skills acquisition—relaxation, cognitive restructuring, problem-solving, social skills, anger management, 3) Application/rehearsal—imagery rehearsal, behavioral rehearsal, graduated in vivo practice (exposure). 'Inoculation' metaphor—build resilience via manageable stress exposures. Flexible, transdiagnostic. Evidence: effective for PTSD, anxiety, anger, occupational stress. Preventative applications (police, military, medical personnel). Emphasizes coping self-efficacy. Combines cognitive + behavioral + exposure elements."
    },
    {
      q: "Network Therapy for substance use disorders involves:",
      options: [
        "Individual therapy without social involvement",
        "Engaging family and friends to support abstinence and provide accountability",
        "Online therapy exclusively",
        "No involvement of the patient's social network"
      ],
      correct: 1,
      explanation: "Network Therapy (Galanter): Enlists family/friends to support recovery. Therapist meets with patient + network members (3-5 people patient trusts). Network provides: monitoring, support, accountability, early warning of relapse, transportation to appointments, alternative social activities. Cognitive-behavioral techniques for patient. Network educated about addiction, recovery, enabling vs. supporting. Evidence: improves outcomes, retention. Contrasts with traditional individual therapy (isolates treatment). Recognizes addiction as biopsychosocial. Similar to Community Reinforcement and Family Training (CRAFT) but involves network directly in sessions. Requires willing, supportive network members."
    },
    {
      q: "Written Exposure Therapy (WET) for PTSD involves:",
      options: [
        "Oral exposure only",
        "Five 30-minute sessions of writing about the same traumatic event repeatedly without therapist processing",
        "No trauma focus",
        "Only imaginal exposure"
      ],
      correct: 1,
      explanation: "WET: Ultra-brief PTSD treatment. Five 30-min sessions: write same trauma memory, read before next session, no therapist processing/homework besides writing. Mechanism: habituation, narrative organization, emotional processing via writing. Evidence: effective, non-inferior to CPT for PTSD. Advantages: brief, scalable, low therapist time, no homework, no in vivo exposure. May increase access to PTSD treatment. Contrasts with PE (longer, more therapist involvement) and CPT (cognitive work). Writing as therapeutic (Pennebaker paradigm). Some dropout (~20%). Good option for: limited resources, preference for writing, uncomplicated PTSD."
    },
    {
      q: "Behavioral Couples Therapy (BCT) for substance use disorders:",
      options: [
        "Treats only the identified patient individually",
        "Involves the partner in treatment to improve relationship functioning and support abstinence",
        "Blames the partner for the addiction",
        "Uses only medication"
      ],
      correct: 1,
      explanation: "BCT: Integrates couple therapy with SUD treatment. Both partners attend. Components: 1) Abstinence contract (daily trust discussion, medication monitoring if applicable), 2) Relationship skills (communication, positive activities, conflict resolution), 3) Relapse prevention (couple coping with high-risk situations). Rationale: relationship distress maintains use; partner can support recovery; improve relationship to reduce use. Evidence: increases abstinence, improves relationship, cost-effective, reduces partner/child violence. Particularly effective for alcohol use disorders. Requires willing, non-using partner (or both using—different protocol). Manual-based (O'Farrell, Fals-Stewart). 12-20 sessions."
    },
    {
      q: "Mindfulness-Based Relapse Prevention (MBRP) integrates:",
      options: [
        "Medication management only",
        "Mindfulness meditation with cognitive-behavioral relapse prevention strategies",
        "Avoidance of all high-risk situations",
        "Psychoanalytic interpretation"
      ],
      correct: 1,
      explanation: "MBRP (Bowen, Marlatt): 8-week group program integrating mindfulness with relapse prevention for SUD. Rationale: mindfulness increases awareness of triggers, reduces automatic reactions, creates space between craving and use. Practices: body scan, sitting meditation, mindfulness of triggers/cravings ('urge surfing'—ride wave without acting). Cognitive-behavioral elements: identifying triggers, coping strategies, lifestyle balance. Evidence: reduces relapse, heavy use, craving; increases acceptance, awareness. Aftercare following initial treatment. Contrasts with abstinence-focused approaches—teaches acceptance, not avoidance, of internal experiences. Non-judgmental stance toward lapses reduces abstinence-violation effect."
    },
    {
      q: "Rational Emotive Behavior Therapy (REBT; Ellis) focuses on:",
      options: [
        "Accepting all beliefs without question",
        "Identifying and disputing irrational beliefs that lead to emotional disturbance",
        "Only behavioral techniques",
        "Dream analysis"
      ],
      correct: 1,
      explanation: "REBT (Ellis): Pioneering cognitive therapy. ABC model: Activating event → Beliefs (rational vs. irrational) → Consequences (emotional/behavioral). Irrational beliefs: demandingness ('must', 'should'), awfulizing (catastrophizing), low frustration tolerance ('can't stand it'), global evaluation (self/other rating). Disputing: logical (does it follow?), empirical (where's evidence?), functional (does it help?). Replace with rational beliefs (preferences, anti-awfulizing, frustration tolerance, unconditional acceptance). Direct, active, confrontational style. Philosophical emphasis. Precursor to CBT. Evidence: effective for various disorders. Emphasizes unconditional self-acceptance."
    },
    {
      q: "Psychoeducational Family Therapy for schizophrenia includes:",
      options: [
        "Blaming families for causing schizophrenia",
        "Education about illness, communication training, problem-solving, stress reduction to lower expressed emotion",
        "No family involvement",
        "Only medication adjustment"
      ],
      correct: 1,
      explanation: "Family psychoeducation: Evidence-based adjunct for schizophrenia. Components: 1) Education (illness, symptoms, treatment, stress-vulnerability model), 2) Communication skills (clear, calm, positive), 3) Problem-solving (structured approach), 4) Crisis planning, 5) Reduce high expressed emotion (criticism, hostility, overinvolvement—predicts relapse). Does NOT blame families (rejected old 'schizophrenogenic mother' concept). Evidence: reduces relapse ~50%, improves functioning, reduces burden. Multiple models (Anderson, Falloon, McFarlane—multifamily groups). Single or multifamily. Long-term (9-24 months). WHO/APA recommended. Cost-effective (prevents hospitalization)."
    },
    {
      q: "Acceptance and Commitment Therapy uses 'creative hopelessness' to:",
      options: [
        "Induce depression",
        "Help clients recognize that control/avoidance strategies for internal experiences have not worked, opening willingness to try acceptance",
        "Convince clients to give up on all goals",
        "Blame clients for failure"
      ],
      correct: 1,
      explanation: "Creative hopelessness (ACT): Early intervention helping clients recognize control agenda hasn't worked ('what have you tried to get rid of anxiety? Has it worked long-term?'). Not despair but 'hopelessness about unworkable strategies.' Creates willingness to try alternative (acceptance). Metaphors: man in hole (stop digging), tug-of-war with monster (drop rope). Goal: undermine experiential avoidance, increase psychological flexibility. Compassionate, not blaming. Opens space for values discussion. Contrasts with CBT's 'we can fix your thinking.' ACT: 'your thoughts/feelings are not the problem; your struggle with them is.' Experiential exercise, not lecture."
    },
    {
      q: "Cue Exposure Treatment for substance use disorders involves:",
      options: [
        "Avoiding all cues permanently",
        "Repeated exposure to drug-related cues without drug use to extinguish conditioned craving responses",
        "Immediate drug use to prevent craving",
        "Medication only"
      ],
      correct: 1,
      explanation: "Cue exposure: Classical conditioning-based treatment for addiction. Rationale: drug cues (sight, smell, places, paraphernalia) elicit conditioned craving. Repeated exposure to cues without drug use (extinction) reduces cue-elicited craving. Procedure: present cues in safe setting, prevent use, repeat until craving decreases. Evidence: mixed—effective in lab, less consistent in real-world (context-dependent learning, spontaneous recovery). Often combined with other treatments (CBT, coping skills). Virtual reality applications emerging. Contrasts with cue avoidance (traditional approach). Explains relapse upon re-exposure to drug environment. Mechanism: extinction learning, but not erasure."
    },
    {
      q: "The 'therapeutic rupture and repair' process refers to:",
      options: [
        "Equipment breaking during sessions",
        "Strains in the therapeutic alliance followed by collaborative resolution, which can strengthen the relationship",
        "Terminating therapy immediately when disagreements occur",
        "Avoiding all conflict in therapy"
      ],
      correct: 1,
      explanation: "Rupture-repair (Safran, Muran): Alliance ruptures (strains)—confrontation markers (client critical, angry) or withdrawal markers (client disengaged, avoidant). Therapist: 1) Recognize rupture (attend to subtle signs), 2) Explore (metacommunication—discuss what's happening here-and-now), 3) Own contribution (therapist self-reflection, avoid defensiveness), 4) Collaborate on resolution. Research: ruptures common; successful repair predicts positive outcome, may strengthen alliance beyond pre-rupture. Failed repair predicts dropout. Trainable skill. Ruptures as opportunities for corrective emotional experience. Contrasts with ignoring or interpreting away. Across orientations."
    },
    {
      q: "Unified Protocol's 'present-focused emotional awareness' teaches:",
      options: [
        "Suppressing awareness of current emotions",
        "Nonjudgmental observation of present-moment emotional experiences",
        "Only thinking about past emotions",
        "Avoiding emotional experiences"
      ],
      correct: 1,
      explanation: "UP Module 4: Present-focused emotional awareness = mindfulness of emotions. Observe emotions nonjudgmentally as they arise (body sensations, thoughts, urges) without reacting or avoiding. Practice: body scan, mindfulness of breath, emotion awareness exercises. Rationale: many emotional disorders involve avoidance of emotional experiences; awareness enables choice rather than automatic reaction. Foundation for later modules (cognitive flexibility, opposite action, exposure). Similar to MBCT/DBT mindfulness but embedded in transdiagnostic protocol. Contrasts with distraction, suppression. Increases distress tolerance. Empirically supported component."
    },
    {
      q: "Cognitive Behavioral Therapy for Psychosis (CBTp) focuses on:",
      options: [
        "Eliminating all positive symptoms immediately",
        "Reducing distress and functional impairment by modifying beliefs about psychotic experiences and developing coping strategies",
        "Replacing medication with therapy alone",
        "Convincing patients their experiences are not real"
      ],
      correct: 1,
      explanation: "CBTp: Adjunct to medication for schizophrenia spectrum. Doesn't directly challenge reality of hallucinations/delusions but targets: 1) Beliefs about experiences (appraisals, meanings), 2) Distress/dysfunction, 3) Coping strategies, 4) Negative symptoms (behavioral activation). Collaborative, gentle challenging, behavioral experiments. Normalize experiences (continuum model). Evidence: small-moderate effects on positive symptoms, distress, functioning; prevents relapse. NICE guidelines recommend. 16+ sessions. Adaptable for acute or persistent symptoms. Therapist requires specialized training. Contrasts with traditional 'agree to disagree' approach. Empowers client, reduces hopelessness."
    },
    {
      q: "Interpersonal Psychotherapy's role transition problem area addresses:",
      options: [
        "Lack of any life changes",
        "Difficulty adjusting to life role changes such as job loss, divorce, retirement, becoming a parent",
        "No interpersonal relationships",
        "Only grief"
      ],
      correct: 1,
      explanation: "IPT role transition: One of four IPT problem areas. Life changes (divorce, job loss/change, retirement, moving, parenthood, empty nest, illness) triggering depression. Intervention: 1) Mourn old role (losses), 2) Recognize positive aspects of new role (opportunities), 3) Restore self-esteem (recognize old skills, develop new), 4) Develop new social supports/skills for new role. Many depressions follow major transitions. IPT helps navigate adjustment. Other problem areas: grief, role disputes, interpersonal deficits. Focus on current interpersonal context, not past or intrapsychic."
    },
    {
      q: "The 'dosage model' of psychotherapy suggests:",
      options: [
        "Medication is always needed",
        "More therapy sessions generally lead to better outcomes up to a point, with diminishing returns thereafter",
        "One session is always sufficient",
        "Therapy never helps"
      ],
      correct: 1,
      explanation: "Dosage model (Howard et al.): Relationship between number of sessions and probability of improvement. Findings: ~50% improved by 8 sessions, ~75% by 26 sessions, diminishing returns after 52+ sessions. Negatively accelerating curve (rapid early gains, plateau later). Implication: most benefit early; some need long-term. Individual variation (severity, chronicity affect dosage needed). Informs session limits, managed care. Challenges: different disorders/outcomes have different curves; quality matters, not just quantity. Modern: focus on outcomes monitoring, adjust dosage to response (measurement-based care). Population average; individuals vary widely."
    },
    {
      q: "Imaginal exposure in Prolonged Exposure therapy for PTSD involves:",
      options: [
        "Briefly thinking about the trauma",
        "Repeatedly recounting the trauma memory aloud in detail with eyes closed for 30-45 minutes, then processing",
        "Avoiding all trauma-related thoughts",
        "Only writing about the trauma silently"
      ],
      correct: 1,
      explanation: "PE imaginal exposure: Client recounts trauma memory in present tense, eyes closed, vivid detail (sights, sounds, smells, thoughts, feelings), 30-45 min, audio-recorded. Therapist prompts details, monitors SUDs (0-100). Repeated across sessions (same memory). Client listens to recording daily (homework). Processing afterward—discuss experience, patterns noticed, insights. Mechanism: activate fear structure, modify pathological elements (trauma cues = danger), habituation, inhibitory learning. Initial distress normative, decreases over repetitions. Contrasts with avoidance (maintains PTSD). Requires safety establishment, psychoeducation, coping skills first. Can be challenging but highly effective."
    },
    {
      q: "Strengths-Based Case Management for severe mental illness emphasizes:",
      options: [
        "Only deficits and pathology",
        "Client strengths, goals, and aspirations; helping clients acquire resources and skills to achieve personal goals",
        "Therapist making all decisions",
        "Medication management exclusively"
      ],
      correct: 1,
      explanation: "Strengths-Based CM (Rapp): Recovery-oriented approach. Principles: 1) Focus on strengths not deficits, 2) Client as director (self-determination), 3) Community as resource (not office-based), 4) Assertive outreach, 5) Relationship is essential. Assess strengths, identify client goals (housing, work, relationships, education), develop individualized plan, accompany client to community to acquire resources/skills. Contrasts with deficit-focused, clinician-directed models. Evidence: improves quality of life, functioning, satisfaction; reduces hospitalization. Part of broader recovery movement. Hope-inspiring. Used with ACT (Assertive Community Treatment), supported employment. Rehabilitation vs. maintenance orientation."
    },
    {
      q: "The key difference between DBT and standard CBT is:",
      options: [
        "DBT adds dialectics (acceptance/validation + change), emotion regulation/distress tolerance modules, consultation team, phone coaching",
        "They are identical",
        "DBT uses no behavioral strategies",
        "CBT is only for depression"
      ],
      correct: 0,
      explanation: "DBT vs. CBT: DBT integrates: 1) Dialectics (synthesis of opposites—acceptance AND change), 2) Validation (radical genuineness), 3) Mindfulness (Zen), 4) Four modules (mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness), 5) Phone coaching (between-session skills use), 6) Therapist consultation team (treat the therapist), 7) Target hierarchy (life-threatening → therapy-interfering → quality-of-life interfering), 8) Behavioral analysis of suicidal/self-harm, 9) Biosocial theory (emotion dysregulation from biological vulnerability + invalidating environment). Standard CBT: cognitive restructuring, behavioral activation, exposure, less emphasis on acceptance/validation. DBT for severe emotion dysregulation, BPD; CBT for depression, anxiety."
    },
    {
      q: "Manualized treatments in psychotherapy research are used to:",
      options: [
        "Prevent therapists from being flexible",
        "Ensure treatment fidelity and consistency across therapists, allowing for replication and testing of specific interventions",
        "Make therapy robotic and uncaring",
        "Eliminate the therapeutic relationship"
      ],
      correct: 1,
      explanation: "Manualized treatments: Specify session-by-session procedures, techniques, targets. Purpose: 1) Treatment fidelity (ensure therapists deliver intended treatment—internal validity), 2) Replication (other researchers can test), 3) Training (specify competencies), 4) Dissemination (transportability to community). Criticism: reduces flexibility, ignores individual differences, damages alliance (false—manuals allow flexibility within structure). Evidence: manualized ≈ non-manualized in RCTs; expert therapists benefit from manuals; alliance maintained. Examples: CBT for depression (Beck), PE, CPT, DBT. Balance fidelity and flexibility (core components vs. adaptable). Clinical practice often adapts manuals. Moves field toward evidence-based, specific treatments."
    },
    {
      q: "Transdiagnostic treatments like the Unified Protocol are designed to:",
      options: [
        "Treat only one specific disorder",
        "Address common underlying processes across multiple related disorders, increasing treatment efficiency and addressing comorbidity",
        "Avoid treating emotional disorders",
        "Replace all specific disorder treatments"
      ],
      correct: 1,
      explanation: "Transdiagnostic approach: Single protocol for multiple disorders sharing maintaining factors. Rationale: 1) High comorbidity (anxiety, depression co-occur), 2) Shared mechanisms (neuroticism, emotion dysregulation, avoidance, negative appraisals), 3) Heterogeneity within disorders, 4) Treatment efficiency (train clinicians in one protocol vs. many), 5) Sequential comorbidity (treat one, another emerges). Examples: UP (emotional disorders), CBT-E (eating disorders). Evidence: comparable to single-disorder protocols. Doesn't replace highly specific treatments (ERP for OCD) but addresses many. Matches RDoC emphasis on mechanisms vs. syndromes. Future direction in treatment development."
    },
    {
      q: "In motivational interviewing, 'change talk' refers to:",
      options: [
        "The therapist persuading the client to change",
        "Client statements expressing desire, ability, reasons, need, commitment, taking steps toward change",
        "Avoiding discussion of change",
        "Only talking about sustaining current behavior"
      ],
      correct: 1,
      explanation: "Change talk (MI): Client's own statements favoring change. Types (DARN-CAT): Desire ('I want to'), Ability ('I could'), Reasons ('so I can see grandkids'), Need ('I have to'), Commitment ('I will'), Activation ('I'm ready'), Taking steps ('I called AA'). Preparatory (DARN) vs. mobilizing (CAT). Predicts behavior change (more change talk → more change). Therapist evokes change talk via: open questions, affirmations, reflections (amplify), summaries (collect), values exploration. Contrasts with sustain talk ('I don't need to change'). Ambivalence normal—both present. Roll with resistance, elicit change talk. Client argues FOR change (not therapist)."
    },
    {
      q: "12-Step Facilitation (TSF) therapy aims to:",
      options: [
        "Replace 12-step programs with professional treatment",
        "Actively engage clients in 12-step mutual support groups (AA, NA) as adjunct to recovery",
        "Discourage attendance at support groups",
        "Provide only medication management"
      ],
      correct: 1,
      explanation: "12-Step Facilitation: Manualized intervention encouraging active participation in 12-step programs. Components: acceptance (powerlessness, disease concept), surrender (higher power), active involvement (meetings, sponsor, steps, fellowship). Therapist educates about 12-step philosophy, assigns meeting attendance, processes resistance. Evidence: Project MATCH showed TSF effective as other approaches for alcohol use disorder; particularly effective for those with severe dependence, social networks supporting drinking. Spiritual/existential focus. Abstinence-oriented. Complements rather than replaces mutual support groups. Some cultural/religious concerns addressed via secular alternatives (SMART Recovery)."
    },
    {
      q: "Structural Family Therapy (Minuchin) focuses on:",
      options: [
        "Individual insight-oriented therapy",
        "Family hierarchies, boundaries, subsystems, and restructuring maladaptive patterns through enactments",
        "Medication management",
        "Dream analysis"
      ],
      correct: 1,
      explanation: "Structural Family Therapy (Minuchin): Examines and modifies family structure—hierarchies (who has power), boundaries (enmeshed vs. disengaged), subsystems (parental, sibling, spousal), alignments. Therapist 'joins' family, maps structure, creates enactments (interactions in-session), restructures through directives, boundary-making, unbalancing. Goals: clear hierarchies (parents in charge), appropriate boundaries (neither enmeshed nor disengaged), functional subsystems. Evidence: effective for child/adolescent problems (eating disorders, behavioral issues). Active, directive, present-focused. Emphasizes changing interaction patterns, not insight. Originally developed for low-income families. Widely influential."
    },
    {
      q: "Assertive Community Treatment (ACT) for severe mental illness involves:",
      options: [
        "Office-based individual therapy only",
        "Multidisciplinary team providing comprehensive, community-based services with 24/7 availability and low caseloads",
        "Medication management exclusively in inpatient settings",
        "No case management services"
      ],
      correct: 1,
      explanation: "ACT (Stein, Test): Intensive case management model for SMI (schizophrenia, severe bipolar, treatment-resistant). Team-based (psychiatrist, nurses, social workers, peers), low caseloads (10:1), community-based (home, work, street), 24/7 availability, assertive outreach, time-unlimited, comprehensive services (medication, therapy, skills training, supported employment/housing, family support, crisis intervention). Evidence: reduces hospitalization, homelessness, improves housing stability, symptom management. Cost-neutral/effective (offsets hospitalization costs). Fidelity-measured. For highest-need clients. Prevents 'revolving door.' Empowering, recovery-oriented despite intensity."
    },
    {
      q: "Cognitive Therapy for panic disorder includes interoceptive exposure, which involves:",
      options: [
        "Avoiding all physical sensations",
        "Deliberately inducing feared physical sensations to reduce catastrophic misinterpretations",
        "Only cognitive restructuring without behavioral components",
        "Medication exclusively"
      ],
      correct: 1,
      explanation: "Interoceptive exposure (Barlow): Systematic exposure to feared bodily sensations in panic disorder. Exercises: hyperventilation (dizziness), spinning (vertigo), breathing through straw (shortness of breath), running in place (heart racing), head movements (disorientation). Rationale: panic maintained by fear of sensations + catastrophic misinterpretation ('heart attack', 'going crazy'). Exposure demonstrates sensations are safe, tolerable, time-limited. Combined with cognitive restructuring (challenge catastrophic thoughts) and in vivo exposure (approach feared situations). Part of Panic Control Treatment. Evidence: highly effective. Breaks fear-of-fear cycle central to panic disorder."
    },
    {
      q: "Functional Family Therapy (FFT) for adolescent behavior problems integrates:",
      options: [
        "Medication only",
        "Systems, behavioral, and cognitive perspectives to modify family interaction patterns and build skills",
        "Individual therapy for adolescent only",
        "No family involvement"
      ],
      correct: 1,
      explanation: "FFT (Alexander): Integrative family therapy for adolescent delinquency, substance use, violence. Phases: 1) Engagement and motivation (reduce negativity, hopelessness, blame), 2) Behavior change (communication training, problem-solving, parenting skills, contracting), 3) Generalization (maintain gains, community resources). Theory: behavior serves interpersonal functions (closeness, distance, regulation); change function maintenance. Evidence: reduces recidivism, cost-effective (prevents incarceration). Brief (8-12 sessions). Cultural adaptation. Therapist training/supervision important. Combines systemic reframe, behavioral skills, cognitive change. Transported internationally."
    },
    {
      q: "The 'observing ego' or 'decentering' in cognitive therapy refers to:",
      options: [
        "The therapist observing the client",
        "The ability to observe thoughts as mental events, not reality, creating psychological distance",
        "Dissociating from all emotions",
        "The client becoming the therapist"
      ],
      correct: 1,
      explanation: "Decentering/metacognitive awareness: Ability to observe thoughts as mental events (not facts or self), creating distance. 'I'm having the thought that I'm worthless' vs. 'I'm worthless.' Allows: less thought fusion, reduced reactivity, choice in response. Cultivated via: mindfulness, cognitive defusion (ACT—leaves on stream, passengers on bus), Socratic questioning, thought records. Key mechanism in CBT, MBCT (depression relapse prevention), ACT. Contrasts with cognitive restructuring (change content) vs. decentering (change relationship to thoughts). Empirically supported. Explains why some benefit from therapy without belief change—relationship to thoughts shifts."
    },
    {
      q: "Community Reinforcement Approach (CRA) for substance use disorders includes:",
      options: [
        "Isolation from community",
        "Making sobriety more rewarding than substance use through positive reinforcement in multiple life areas",
        "Punishment-based interventions only",
        "No behavioral interventions"
      ],
      correct: 1,
      explanation: "CRA (Hunt, Azrin): Comprehensive behavioral program making sober lifestyle more rewarding than using. Components: functional analysis (identify triggers, consequences), skills training (drink/drug refusal, problem-solving, communication), job club (employment), relationship counseling, medication (disulfiram contract with monitor), recreational activities (sober alternatives), social/community club. Rationale: substance use maintained by reinforcement; increase natural reinforcers for sobriety. Evidence: highly effective for alcohol, cocaine. Often combined with contingency management (CRA+). CRAFT (Community Reinforcement and Family Training): engages resistant users via family. Positive, skills-based, comprehensive."
    },
    {
      q: "Exposure therapy is contraindicated or requires modification when:",
      options: [
        "The client has any anxiety at all",
        "There is active suicidality, severe dissociation, unstable psychosis, or when fear is realistic/adaptive",
        "The client is over age 65",
        "The client prefers behavioral interventions"
      ],
      correct: 1,
      explanation: "Exposure contraindications/cautions: 1) Active suicidality (exposure may temporarily increase distress), 2) Severe dissociation (may not process emotionally), 3) Unstable psychosis, 4) Active substance dependence (may use to cope with distress), 5) Realistic fears (being cautious in dangerous neighborhood is adaptive). Modifications: Phase-based (stabilization first—e.g., Seeking Safety), grounded exposure (anchor in present), therapist-assisted (not homework initially), slower pace, shorter exposures. Note: Traditional 'contraindications' overstated—modern evidence supports careful exposure for complex presentations. Tailor to individual; don't blanket exclude. Monitor closely."
    },
    {
      q: "The term 'experiential avoidance' in ACT refers to:",
      options: [
        "Avoiding new experiences and activities",
        "Unwillingness to experience uncomfortable internal events (thoughts, feelings, sensations) and efforts to control/escape them",
        "Avoiding exposure therapy",
        "Healthy boundary-setting"
      ],
      correct: 1,
      explanation: "Experiential avoidance: Unwillingness to remain in contact with uncomfortable private experiences (thoughts, emotions, memories, sensations, urges) + attempts to alter form/frequency/context. Examples: thought suppression, distraction, substance use, compulsions, worry (avoid imagery), behavioral avoidance. Central pathological process in ACT model. Paradoxically increases distress, narrows life (avoids values-consistent activities). Contrasts with acceptance (willingness to have experiences as they are). Related constructs: emotion regulation difficulties, distress intolerance. Measured: AAQ (Acceptance and Action Questionnaire). Therapeutic target: undermine control agenda, increase psychological flexibility."
    },
    {
      q: "Emotion regulation in DBT includes the skill 'opposite action,' which means:",
      options: [
        "Acting opposite to what the therapist suggests",
        "When an emotion doesn't fit the facts or is ineffective, acting opposite to the emotion-driven urge",
        "Suppressing all emotions",
        "Only using opposite action for anger"
      ],
      correct: 1,
      explanation: "Opposite action (DBT): When emotion unjustified (doesn't fit facts) or ineffective (blocks goals), act opposite to action urge. Check the facts first: Does emotion fit? If yes, express appropriately. If no, use opposite action. Examples: Fear unjustified → approach (exposure), Anger unjustified → gently avoid/kind actions, Sadness unjustified → activate, Shame unjustified → approach/share, Guilt unjustified → repeat behavior. All the way (posture, facial expression, thoughts). Rationale: behavior can change emotion (facial feedback, behavioral activation). Contrasts with changing thoughts (cognitive restructuring). Empirically supported DBT skill."
    },
    {
      q: "In Gottman Method, the 'Four Horsemen of the Apocalypse' predict divorce and include:",
      options: [
        "Honesty, trust, respect, love",
        "Criticism, contempt, defensiveness, stonewalling",
        "Communication, compromise, commitment, compassion",
        "Affection, appreciation, attention, admiration"
      ],
      correct: 1,
      explanation: "Four Horsemen (Gottman): Toxic communication patterns predicting divorce: 1) Criticism (attacking character—'you always/never'), 2) Contempt (disrespect, mockery, sarcasm—worst predictor), 3) Defensiveness (righteous victim, 'not my fault'), 4) Stonewalling (withdrawal, shutdown). Antidotes: 1) Gentle startup (describe, express need, 'I' statements), 2) Build culture of appreciation, 3) Take responsibility (accept influence), 4) Physiological soothing (take breaks when flooded). Ratio: 5:1 positive:negative interactions in stable marriages. Longitudinal research (Love Lab) predicts divorce with 90%+ accuracy. Repair attempts critical."
    },
    {
      q: "Culturally adapted treatments involve:",
      options: [
        "Ignoring cultural differences",
        "Modifying treatment content, language, context, and/or therapist-client matching to align with clients' cultural values and contexts",
        "Only translating materials to another language",
        "Assuming all treatments work equally across cultures"
      ],
      correct: 1,
      explanation: "Cultural adaptation: Systematic modification for cultural relevance and effectiveness. Dimensions (Bernal): 1) Language (translation, idioms, bilingual therapists), 2) Persons (match ethnicity/gender when preferred), 3) Metaphors (culturally resonant examples—family, spirituality), 4) Content (culturally specific stressors—discrimination, immigration), 5) Concepts (illness models—somatic vs. psychological), 6) Goals (individualistic vs. collectivistic), 7) Methods (directive vs. collaborative), 8) Context (family/community involvement, formats). Evidence: meta-analyses show adapted treatments more effective than unadapted for ethnic minorities. Balance fidelity to evidence-based core with cultural tailoring. Community partnerships improve adaptation."
    },
    {
      q: "The 'abstinence violation effect' in relapse prevention refers to:",
      options: [
        "Successfully maintaining abstinence",
        "After a lapse, negative emotional reaction (guilt, failure) and cognitive dissonance leading to full relapse",
        "Planning for high-risk situations",
        "Effective coping skills"
      ],
      correct: 1,
      explanation: "Abstinence Violation Effect (AVE; Marlatt): After single lapse (slip), individual experiences: 1) Cognitive dissonance (abstinent identity violated), 2) Internal attribution (personal failure—'I'm weak'), 3) Guilt, shame, failure feelings, 4) 'What the hell' effect (already failed, might as well continue) → full relapse. Replaces lapse with relapse. Prevention: 1) Normalize lapses (part of learning), 2) External/unstable attributions (situation, skill deficit—not character flaw), 3) Lapse vs. relapse distinction, 4) Immediate coping plan (what to do after lapse), 5) Self-compassion, 6) Learning opportunity. Harm reduction framework. AVE explains why abstinence-only approaches can backfire."
    },
    {
      q: "Narrative Therapy (White, Epston) uses 'externalization,' which involves:",
      options: [
        "Sending clients to external specialists",
        "Separating the person from the problem ('the problem is the problem, not the person'), reducing blame and opening new possibilities",
        "Avoiding discussion of problems",
        "Focusing only on external circumstances"
      ],
      correct: 1,
      explanation: "Externalization: Linguistic separation of person from problem. 'You are struggling with Depression' vs. 'You are depressed.' Creates space to examine problem's influence, when person has influence over it, recruit allies against it. Questions: 'What does Anxiety tell you?' 'When have you stood up to Anger?' Reduces blame, shame, totalizing descriptions. Problem as external oppressor to resist (particularly useful with children, externalizing disorders). Other techniques: unique outcomes (exceptions), re-authoring (alternative story), witnessing (audience to new story), therapeutic documents. Postmodern, social constructionist. Evidence: growing base, particularly for externalizing disorders, trauma."
    },
    {
      q: "Supportive psychotherapy, in contrast to insight-oriented therapy, emphasizes:",
      options: [
        "Uncovering unconscious conflicts exclusively",
        "Strengthening ego functions, coping skills, and adaptive defenses while providing empathy and encouragement",
        "Confrontation and interpretation primarily",
        "Dream analysis as the main technique"
      ],
      correct: 1,
      explanation: "Supportive psychotherapy: Strengthen existing adaptive capacities rather than uncover unconscious material. Techniques: empathic listening, praise/encouragement, psychoeducation, advice/guidance (judicious), reality testing, modeling, environmental intervention. Strengthen: ego functions (reality testing, impulse control, judgment), defenses (shift to mature—sublimation, humor, altruism), self-esteem, relationships, coping. Rationale: some lack ego strength for insight work; focus on here-and-now functioning. Indications: psychosis, borderline decompensation, acute crisis, severe medical illness, low psychological-mindedness. Contrasts with expressive/insight therapy (interpretation, transference). Actually requires high skill (not lesser treatment). Often integrated."
    },
    {
      q: "Exposure and ritual prevention (ERP) for OCD is most effective when:",
      options: [
        "Only imaginal exposure is used",
        "Both exposure to obsession triggers and full prevention of compulsive rituals occur with prolonged exposure",
        "Compulsions are performed during exposure",
        "Only one exposure session is conducted"
      ],
      correct: 1,
      explanation: "ERP effectiveness factors: 1) Full ritual prevention (no compulsions, safety behaviors, neutralizing), 2) Prolonged exposure (stay until anxiety peaks and begins decreasing—30-90min), 3) Repeated exposures (multiple trials, homework), 4) Hierarchy-based but move quickly, 5) In vivo > imaginal (when safe), 6) Therapist-assisted initially, then independent, 7) Motivation and adherence. Response prevention is critical—exposure alone less effective. Break obsession-compulsion link, learn: anxiety tolerable, decreases without ritual, feared outcome doesn't occur. 15-20 sessions typical. Homework essential. Combine with medication (SSRIs) for severe OCD. 60-70% response rates."
    },
    {
      q: "The concept of 'psychological flexibility' is central to ACT and refers to:",
      options: [
        "Being agreeable and accommodating to others",
        "Contacting the present moment, accepting internal experiences, and taking values-based action",
        "Having no values or commitments",
        "Avoiding difficult situations"
      ],
      correct: 1,
      explanation: "Psychological flexibility: Ability to: 1) Be present (contact current moment fully), 2) Open up (accept/allow internal experiences—thoughts, feelings, sensations, urges), 3) Do what matters (take values-guided action even when difficult). Result: respond flexibly to situations based on values and context rather than avoiding discomfort or fusing with thoughts. Opposite: psychological rigidity/inflexibility (experiential avoidance, cognitive fusion, inaction/impulsivity). Six processes contribute (hexaflex): acceptance, defusion, present-moment, self-as-context, values, committed action. Empirically supported transdiagnostic process. Measured: AAQ, CompACT. Predicts well-being across situations."
    },
    {
      q: "The 'Socratic method' in cognitive therapy involves:",
      options: [
        "The therapist lecturing the client about correct thinking",
        "Guided discovery through open-ended questions helping clients examine evidence and reach their own conclusions",
        "The client teaching the therapist",
        "Dream interpretation"
      ],
      correct: 1,
      explanation: "Socratic questioning/guided discovery: Collaborative exploration via questions rather than direct challenges or teaching. Question types: 1) Clarifying ('What do you mean by...?'), 2) Probing assumptions ('What are you assuming?'), 3) Probing evidence ('What makes you think that?' 'Evidence for/against?'), 4) Exploring alternatives ('What's another way to look at it?'), 5) Examining consequences ('If that were true, what would it mean?'). Goals: help client discover inconsistencies, examine evidence, generate alternatives, reach own conclusions (more powerful than being told). Conveys respect, builds alliance, teaches skill. Core CBT technique. Requires skill—not interrogation but genuine curiosity."
    },
    {
      q: "Emotion-Focused Therapy (individual; Greenberg) for depression targets:",
      options: [
        "Only behavioral activation",
        "Unresolved emotional pain and maladaptive emotion schemes through emotion awareness, expression, regulation, and transformation",
        "Medication exclusively",
        "Only cognitive distortions"
      ],
      correct: 1,
      explanation: "EFT for depression (Greenberg, not same as EFT couples): Process-experiential approach targeting emotional processing. Maladaptive emotion schemes (shame, fear-based sadness) maintain depression. Tasks: 1) Empathic exploration (deepen emotional awareness), 2) Two-chair work (self-critical splits—dialogue between critic and experiencing self), 3) Empty-chair (unfinished business with significant other—express unresolved emotions), 4) Focusing (bodily-felt sense). Transform primary maladaptive emotions (shame, fear) by accessing, allowing, accepting, expressing, understanding, then accessing adaptive emotions (adaptive anger at violation, sadness at loss). Evidence: effective for depression. Experiential, emotion-focused, not just cognitive."
    },
    {
      q: "In treatment of substance use disorders, 'harm reduction' approaches:",
      options: [
        "Require complete abstinence as the only acceptable goal",
        "Accept reduced use or safer use as valid goals, meeting clients where they are and reducing negative consequences",
        "Encourage continued heavy use",
        "Eliminate all treatment standards"
      ],
      correct: 1,
      explanation: "Harm reduction: Public health approach prioritizing reducing negative consequences over abstinence requirement. Strategies: needle exchange (prevent HIV/Hep C), naloxone distribution (prevent overdose), moderation management, safer use education, housing first, low-threshold services (no abstinence requirement). Philosophy: meet clients where they are, pragmatic (some reduction better than none), non-judgmental, autonomy/dignity. Contrasts with abstinence-only (moral model, 12-step). Evidence: reduces disease transmission, overdose death, increases treatment engagement. Controversy in US (more accepted internationally). Medication-assisted treatment (methadone, buprenorphine) is harm reduction. Can be pathway to abstinence or endpoint."
    },
    {
      q: "The therapeutic technique of 'reframing' in family therapy involves:",
      options: [
        "Putting pictures in new frames",
        "Offering an alternative, more constructive perspective on behavior or situations to change emotional/behavioral responses",
        "Avoiding discussion of problems",
        "Blaming family members"
      ],
      correct: 1,
      explanation: "Reframing: Present behavior/situation in different light (alternative meaning/context) to shift perception and open new responses. Examples: 'rebellion' → 'independence seeking', 'overprotection' → 'caring deeply', 'resistance' → 'loyalty to family', symptom → 'communication about distress.' Positive connotation: attribute positive motive to negative behavior. Reduces blame, defuses conflict, increases cooperation. From: Strategic (Haley), Milan, MRI schools. Related: Cognitive restructuring (CBT—but more systemic focus on relational patterns). Requires credibility—must fit family's experience. Not minimizing pain but offering empowering alternative frame."
    },
    {
      q: "Integrative Behavioral Couple Therapy (IBCT) differs from Traditional Behavioral Couple Therapy by:",
      options: [
        "Adding acceptance and emotional intimacy strategies for unchangeable differences",
        "Focusing only on individual therapy",
        "Eliminating all behavioral strategies",
        "Using only medication"
      ],
      correct: 0,
      explanation: "IBCT (Jacobson, Christensen): Adds acceptance to traditional BCT behavior change. Rationale: not all differences changeable; some efforts to change create distance. IBCT: 1) Acceptance strategies—empathic joining (express vulnerable feelings underlying conflict), unified detachment (analyze problem together without blame), tolerance building (prepare for/expose to negative behavior). 2) Behavior change (traditional BCT—communication, problem-solving) when possible. Themes analysis (repetitive patterns, polarization). Evidence: IBCT superior to TBCT at long-term follow-up, especially for severe distress. Integrates humanistic (acceptance, vulnerability) with behavioral (skills, change). Flexible—emphasize acceptance or change as needed."
    },
    {
      q: "Recovery-oriented care in mental health emphasizes:",
      options: [
        "Only symptom reduction as the goal",
        "Hope, self-determination, meaningful life in community, and personal growth beyond symptom management",
        "Permanent hospitalization",
        "That recovery is impossible for serious mental illness"
      ],
      correct: 1,
      explanation: "Recovery model: Shift from clinical recovery (symptom remission) to personal recovery (meaningful life, self-determination, hope, despite symptoms). Principles (SAMHSA): 1) Hope (catalyst), 2) Person-driven (self-determination, autonomy), 3) Many pathways (individual, cultural), 4) Holistic (whole life—health, home, purpose, community), 5) Peer support, 6) Respect, 7) Responsibility (empowerment), 8) Relational (relationships, social networks), 9) Addresses trauma, 10) Strengths-based, 11) Culture, 12) Addresses systemic barriers. Contrasts with: illness/maintenance model, professional as expert. Evidence: recovery possible for SMI. Supported employment, education, housing, peer support, shared decision-making. Philosophical shift."
    },
    {
      q: "Psychotherapy integration refers to:",
      options: [
        "Using only one theoretical approach rigidly",
        "Combining elements from different therapeutic approaches in a theoretically coherent way",
        "Avoiding all evidence-based practices",
        "Only eclectic practice without rationale"
      ],
      correct: 1,
      explanation: "Integration vs. eclecticism: Integration—systematic combination with theoretical coherence. Four types: 1) Technical eclecticism (use techniques from different theories, single theory base—e.g., Lazarus' Multimodal Therapy), 2) Theoretical integration (blend theories—e.g., cognitive-behavioral, psychodynamic-interpersonal), 3) Common factors (emphasize shared elements across therapies—alliance, hope), 4) Assimilative integration (strong base in one approach, incorporate techniques from others). Eclectic: pragmatic selection without theoretical justification. Why integrate: no single theory explains all; different problems/clients need different approaches; common factors important; most clinicians integrative in practice. Organizations: SEPI (Society for Exploration of Psychotherapy Integration). Examples: DBT, ACT (integrative)."
    },
  ],
  flashcards: [
    {
      front: "CBT Core Components",
      back: "Cognitive Restructuring: Identify → Challenge → Replace maladaptive thoughts. Behavioral Activation: Increase rewarding activities. Exposure: Systematic confrontation of feared stimuli. Behavioral experiments: Test beliefs empirically. Core principle: Thoughts → Feelings → Behaviors are interconnected.",
    },
    {
      front: "Evidence-Based Treatments Quick Reference",
      back: "Depression: CBT, Behavioral Activation, IPT. Anxiety: CBT with exposure, ACT. PTSD: PE, CPT, EMDR. OCD: ERP + SSRIs. BPD: DBT. Panic: CBT (interoceptive exposure). Eating Disorders: CBT-E (bulimia), FBT (adolescent AN).",
    },
    {
      front: "Stages of Change (Prochaska & DiClemente)",
      back: "Precontemplation: Not considering change. Contemplation: Aware of problem, ambivalent. Preparation: Planning to act. Action: Active modification. Maintenance: Sustaining change. Match interventions to stage—MI for early stages, action-oriented for later.",
    },
    {
      front: "Common Factors in Psychotherapy",
      back: "Therapeutic alliance (strongest predictor), expectancy/hope, empathy, goal consensus, positive regard. Account for ~30% of outcome variance. Specific techniques account for ~15%. Therapist effects are significant—who delivers treatment matters.",
    },
    {
      front: "Third-Wave CBT Approaches",
      back: "ACT (Acceptance & Commitment Therapy): Psychological flexibility, defusion, values. DBT (Dialectical Behavior Therapy): BPD, mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness. MBCT (Mindfulness-Based Cognitive Therapy): Depression relapse prevention, mindfulness. FAP (Functional Analytic Psychotherapy): In-session behavior, therapeutic relationship. All emphasize: acceptance, mindfulness, values, context, therapeutic relationship. Contrast with second-wave CBT's thought challenging."
    },
    {
      front: "Exposure Therapy - Inhibitory Learning Model",
      back: "Modern conceptualization: Exposure creates new inhibitory learning (CS → safety) that competes with excitatory learning (CS → threat) rather than erasing/habituating fear. Implications: 1) Don't wait for anxiety to decrease during exposure, 2) Violate expectancies (what you fear will happen), 3) Vary contexts (prevent context-specific learning), 4) Deepen extinction (occasional reinforced trials strengthen extinction). Explains spontaneous recovery, renewal, reinstatement. Optimizes exposure-based treatments."
    },
    {
      front: "Therapeutic Alliance Components (Bordin)",
      back: "Three components: 1) Bond—mutual trust, liking, respect. 2) Goals—agreement on therapy objectives. 3) Tasks—agreement on activities/methods. Strongest predictor of outcome across all therapy types (~7-8% variance). Rupture-repair sequences can strengthen alliance. Assessed via WAI (Working Alliance Inventory). Therapist contributions: empathy, positive regard, genuineness. Client contributions: capacity for relationship. Monitor alliance throughout treatment; early alliance predicts dropout."
    },
    {
      front: "Evidence-Based Treatment Protocols - Quick Reference",
      back: "Depression: CBT, BA, IPT, psychodynamic, medication. Anxiety disorders: CBT with exposure (PE for PTSD), ACT. OCD: ERP + SSRI. BPD: DBT. Bipolar: Psychoeducation, IPSRT, FFT, medication. Schizophrenia: CBT-psychosis, family psychoeducation, social skills training, medication. Eating disorders: CBT-E (BN), FBT (adolescent AN). Substance use: CBT, MI, CM, 12-step facilitation, medication (MAT). Child anxiety: Coping Cat."
    },
    {
      front: "Motivational Interviewing (MI) - OARS Skills",
      back: "Open questions: Explore ambivalence. Affirmations: Recognize strengths, efforts. Reflections: Simple (restate), complex (reframe, amplify, double-sided). Summaries: Collect, link, transition. Spirit: Partnership, Acceptance, Compassion, Evocation (not installing). Processes: Engaging, Focusing, Evoking, Planning. Targets: Sustain talk vs. change talk. Roll with resistance, develop discrepancy. Effective for substance use, health behaviors, treatment engagement."
    },
    {
      front: "Psychodynamic Therapy Techniques",
      back: "Free association: Say whatever comes to mind. Dream analysis: Royal road to unconscious. Interpretation: Making unconscious conscious. Clarification: Asking for elaboration. Confrontation: Pointing out contradictions. Transference analysis: Examining client's patterns toward therapist. Countertransference: Therapist's reactions (use as data). Resistance analysis: Exploring defenses. Working through: Repeated elaboration. Time-limited psychodynamic: Focus on core conflictual relationship theme (CCRT)."
    },
    {
      front: "Parent Management Training (PMT) / Behavioral Parent Training",
      back: "Evidence-based for child disruptive behaviors (ODD, CD, ADHD). Teach parents: Positive attention/praise, clear commands, rewards (token economy), time-out, natural consequences, consistency, monitoring. Programs: PCIT (Parent-Child Interaction Therapy), Incredible Years, Triple P. Mechanisms: Improve parent-child interaction, reduce coercive cycles (Patterson), increase prosocial behavior. Challenges: parent stress/psychopathology, socioeconomic barriers. Engage parents as agents of change."
    },
    {
      front: "Group Therapy - Yalom's Therapeutic Factors",
      back: "1) Instillation of hope, 2) Universality (not alone), 3) Imparting information, 4) Altruism (helping others), 5) Corrective recapitulation of family, 6) Social skills development, 7) Imitative behavior (modeling), 8) Interpersonal learning, 9) Group cohesiveness, 10) Catharsis, 11) Existential factors. Relative importance varies by group type. Cohesion (group alliance) predicts outcome. Process groups vs. psychoeducational. Stages: forming, storming, norming, performing, adjourning."
    },
    {
      front: "Trauma-Focused CBT (TF-CBT) for Children",
      back: "Evidence-based for childhood PTSD, abuse. Components (PRACTICE): Psychoeducation, Parenting skills, Relaxation, Affective modulation, Cognitive coping/processing, Trauma narrative, In vivo exposure, Conjoint parent-child sessions, Enhancing safety. Gradual trauma processing with parent involvement. 12-16 sessions. Addresses parent's reactions (parallel treatment). Requires safety established. Adaptable across cultures. Contrasts with adult PTSD treatments by developmental focus and parent component."
    },
    {
      front: "Crisis Intervention Principles",
      back: "Goals: Safety, stabilization, return to functioning (not long-term change). Immediacy, proximity, expectancy (PIE). Roberts' 7-stage model: 1) Plan/assess safety, 2) Establish rapport, 3) Identify problems, 4) Encourage exploration of feelings, 5) Generate alternatives, 6) Develop action plan, 7) Follow-up. Provide support, validate, psychoeducation, mobilize resources, referrals. Time-limited (6 weeks). Distinguish crisis (acute, precipitant, recent change in functioning) from chronic distress."
    },
    {
      front: "Schema Therapy - Early Maladaptive Schemas",
      back: "18 schemas across 5 domains: 1) Disconnection/Rejection (abandonment, mistrust, emotional deprivation, defectiveness, social isolation), 2) Impaired Autonomy (dependence, vulnerability to harm, enmeshment, failure), 3) Impaired Limits (entitlement, insufficient self-control), 4) Other-Directedness (subjugation, self-sacrifice, approval-seeking), 5) Overvigilance/Inhibition (negativity, emotional inhibition, unrelenting standards, punitiveness). Schema modes: child, maladaptive coping, dysfunctional parent, healthy adult. Limited reparenting in therapeutic relationship."
    },
    {
      front: "Prolonged Exposure (PE) vs. CPT for PTSD",
      back: "PE (Foa): Behavioral, emotional processing via imaginal exposure (relive trauma 30-45min) + in vivo exposure hierarchy. Mechanism: habituation, extinction. 8-15 sessions. CPT (Resick): Cognitive therapy targeting stuck points (maladaptive beliefs about safety, trust, control, esteem, intimacy). Socratic method, worksheets, optional written account. 12 sessions. Both gold standard, comparable efficacy. Choice: client preference, cognitive vs. emotional focus. PE more exposure-intensive; CPT more cognitive-focused."
    },
    {
      front: "DBT Skills Training - Four Modules",
      back: "1) Mindfulness (core): Observe, describe, participate; nonjudgmentally, one-mindfully, effectively. Wise mind. 2) Distress Tolerance: TIPP (temperature, intense exercise, paced breathing, progressive relaxation), distract, self-soothe, ACCEPTS, radical acceptance. 3) Emotion Regulation: Identify/label emotions, opposite action, check the facts, ABC PLEASE (treat physical illness, balanced eating, avoid drugs, sleep, exercise). 4) Interpersonal Effectiveness: DEAR MAN (objectives), GIVE (relationship), FAST (self-respect)."
    },
    {
      front: "CBT-E for Eating Disorders",
      back: "Enhanced CBT (Fairburn): Transdiagnostic for bulimia nervosa, binge eating disorder. Core: overvaluation of shape/weight + dietary restraint = binge-purge cycles. Four stages: 1) Engagement, formulation, regular eating, 2) Address overvaluation (body checking/avoidance, feeling fat, importance of weight/shape), 3) Setback management, 4) Relapse prevention. 20 sessions (focused) or 40 (broad—adds interpersonal, perfectionism, mood intolerance). Individual, outpatient. Superior to other psychotherapies for BN."
    },
    {
      front: "Motivational Interviewing - Spirit (4 elements)",
      back: "Partnership (collaborative, not expert-recipient), Acceptance (absolute worth, accurate empathy, autonomy support, affirmation), Compassion (actively promote client welfare), Evocation (elicit client's own motivations, resources, not instill/install). NOT: confrontation, advice-giving without permission, lecturing, coercion. Creates conditions for change talk. Contrasts with righting reflex (urge to fix). Underlies OARS skills (Open questions, Affirmations, Reflections, Summaries) and processes (Engaging, Focusing, Evoking, Planning)."
    },
    {
      front: "Exposure Therapy - Inhibitory Learning Strategies",
      back: "Optimizing exposure via inhibitory learning principles: 1) Violate expectancies (test what you fear, not just habituate), 2) Deepen extinction (occasional reinforced extinction—CS alone after some CS-US pairings), 3) Variability (stimuli, contexts, actions, intensity) prevents context-specific learning, 4) Retrieval cues (reminders between sessions), 5) Multiple fear cues (combine stimuli), 6) Remove safety signals, 7) Affect labeling, 8) Don't wait for anxiety decrease during trial. Explains return of fear phenomena (spontaneous recovery, renewal, reinstatement). More effective than habituation model."
    },
    {
      front: "Interpersonal Psychotherapy (IPT) - Four Problem Areas",
      back: "Time-limited (12-16 weeks), present-focused. ONE of: 1) Grief/Complicated bereavement (facilitate mourning, re-establish interests), 2) Role disputes (non-reciprocal expectations—renegotiate, dissolve, or accept impasse), 3) Role transitions (job, divorce, retirement, parenthood—mourn old, embrace new), 4) Interpersonal deficits (socially isolated—review past relationships, current, encourage risk). Doesn't address cognitions, past childhood, or unconscious. Based on attachment theory, interpersonal theory of depression (Sullivan). Evidence-based for depression, bulimia, PTSD."
    },
    {
      front: "Family Psychoeducation for Schizophrenia",
      back: "Evidence-based adjunct. Components: 1) Education (illness, symptoms, treatment, stress-vulnerability model, NOT family-caused), 2) Communication training (clear, calm, positive; listen, reflect), 3) Problem-solving (6 steps: define, brainstorm, evaluate, choose, plan, review), 4) Reduce high expressed emotion (criticism, hostility, overinvolvement predict relapse), 5) Crisis planning. Single or multifamily groups. Long-term (9-24 months). Reduces relapse ~50%, improves functioning, reduces burden. Models: Anderson, Falloon, McFarlane. WHO/APA recommended."
    },
    {
      front: "ACT - Six Core Processes (Hexaflex)",
      back: "Psychological flexibility via: 1) Acceptance (willingness to have unwanted experiences), 2) Cognitive defusion (distance from/change relationship to thoughts—not truth), 3) Present moment awareness (mindfulness), 4) Self-as-context (observing self, transcendent perspective), 5) Values (chosen life directions), 6) Committed action (behavior change aligned with values). Contrasts with CBT cognitive restructuring (ACT doesn't challenge content). Creative hopelessness (control doesn't work). Metaphors, experiential exercises. Effective for anxiety, depression, chronic pain, psychosis."
    },
    {
      front: "Stages of Change Model - Matching Interventions",
      back: "Precontemplation (not considering change): Raise awareness, express concern, don't push. Contemplation (ambivalent): MI, explore pros/cons, tip decisional balance. Preparation (planning): Help set specific goals, action plan, remove barriers. Action (actively changing): Support, skills training, problem-solving, reinforce. Maintenance (sustaining change): Relapse prevention, lifestyle changes, address slips. Relapse: Re-engage, normalize, learn from lapse. Tailor interventions to stage. Premature action-oriented interventions fail in precontemplation/contemplation."
    },
    {
      front: "Transference-Focused Psychotherapy (TFP) for BPD",
      back: "Psychodynamic (Kernberg, Clarkin). Targets identity diffusion, split object relations (all-good/all-bad). Techniques: technical neutrality, interpret transference (alternating idealization/devaluation), clarification, confrontation, interpretation. Contract (address treatment-interfering behaviors, suicidality). Twice-weekly, long-term. Helps integrate split representations → coherent identity. Evidence: effective for BPD, reduces suicidality, increases reflective functioning. Contrasts with DBT (more directive/skills), MBT (supportive stance). Requires training. Structural change focus."
    },
    {
      front: "Mentalization-Based Treatment (MBT) for BPD",
      back: "Psychodynamic (Bateman, Fonagy). Targets impaired mentalizing (understanding mental states—thoughts, feelings, intentions underlying behavior). BPD: mentalizing fails under stress → misinterpretation, impulsivity. Therapist: 'not-knowing' stance, models curiosity, explores mental states, affect focus, here-and-now. Structured: weekly individual + group, 18 months. Evidence: reduces self-harm, suicide attempts, hospitalization. Attachment-based. Differs from TFP (less interpretive), DBT (less skills-prescriptive). Restore mentalizing capacity via relationship."
    },
    {
      front: "Contingency Management Principles",
      back: "Operant conditioning: Immediate, tangible positive reinforcement contingent on objectively verified target behavior. SUD: vouchers/prizes for negative drug screens (escalating value, reset if positive). Very effective for stimulant use (few medications). Also: treatment attendance, medication adherence. Frequency: 2-3x/week testing. Duration: 12 weeks typical. Mechanisms: dopamine reward system (addiction damages; CM restores), competing reinforcer. Criticisms: cost, post-intervention maintenance, ethics of 'paying.' Evidence: cost-effective vs. addiction consequences, improves retention."
    },
    {
      front: "Unified Protocol - Eight Modules",
      back: "Transdiagnostic for emotional disorders. 1) Enhancing motivation, 2) Psychoeducation (emotions, three-component model), 3) Mindfulness (present-focused emotional awareness), 4) Cognitive flexibility (thoughts≠facts, appraisals, detective thinking), 5) Countering emotional behaviors (opposite action to emotion-driven urges), 6) Awareness/tolerance of physical sensations (interoceptive exposure), 7) Emotion exposures (situation-based), 8) Relapse prevention. Targets shared mechanisms: neuroticism/negative affect, emotion dysregulation, avoidance. Evidence: effective for anxiety, depression, comparable to single-disorder protocols."
    },
    {
      front: "Behavioral Activation (BA) for Depression",
      back: "Systematic scheduling/engagement in rewarding, goal-directed activities to counteract depression withdrawal. Steps: 1) Self-monitor activities-mood, 2) Identify values, 3) Activity scheduling (start small, build), 4) Reduce avoidance. Rationale: behavior change → mood change (environment provides reinforcement; inactivity maintains depression). Jacobson component analysis: BA alone ≈ full CBT. Simpler, more accessible than cognitive therapy. Effective across cultures/education levels. Works even without cognitive change. Primary vs. secondary depression. Evidence: comparable to medication, CT."
    },
    {
      front: "Seeking Safety for Co-occurring PTSD + SUD",
      back: "Present-focused, integrated treatment (Najavits). Focuses on SAFETY (not trauma processing initially): cognitive (thought patterns), behavioral (actions), interpersonal (relationships), case management. 25 topics: psychoeducation, grounding, triggers, asking for help, boundaries, compassion, etc. Rationale: stabilize before trauma processing (contrasts with PE/CPT). Flexible format (individual/group, any setting). Evidence: effective for complex trauma, severe symptoms. Phase-based trauma treatment: stabilization → processing → integration. Addresses why exposure sometimes iatrogenic (insufficient stabilization)."
    },
    {
      front: "Gottman Method - Sound Relationship House",
      back: "Research-based couples therapy. Levels: 1-2) Build friendship (love maps, fondness/admiration), 3) Turn toward (vs. away/against) bids for connection, 4-5) Positive perspective, manage conflict (69% perpetual problems—dialogue, accept influence), 6) Make life dreams come true, 7) Create shared meaning. Four Horsemen (predict divorce): Criticism, Contempt, Defensiveness, Stonewalling (antidotes: gentle startup, build appreciation, take responsibility, self-soothe). Repair attempts. Magic ratio: 5:1 positive:negative. Evidence: reduces conflict, increases satisfaction."
    },
    {
      front: "Emotion-Focused Therapy (EFT) for Couples",
      back: "Attachment-based (Johnson). Three stages: 1) De-escalation (identify negative cycle—pursue-withdraw; access underlying emotions—fear, shame, attachment needs), 2) Restructuring (withdrawer re-engages, expresses needs; pursuer softens, receives), 3) Consolidation. Focus on primary emotions (attachment) vs. secondary (anger). Experiential: enactments, heightening, evocative responding. Evidence: 70-75% recovery, sustained. Applied to infidelity, trauma (attachment injury resolution). Contrasts with behavioral (skills) or insight (understanding) approaches. Creates corrective emotional experience via bonding moments."
    },
    {
      front: "Relapse Prevention (Marlatt) for Addictions",
      back: "Cognitive-behavioral maintenance approach. Components: 1) Identify high-risk situations (negative emotions, social pressure, interpersonal conflict, positive emotions, testing control), 2) Develop coping strategies, 3) Lifestyle balance (shoulds vs. wants, positive addictions), 4) Lapse vs. relapse (single slip vs. return to pattern), 5) Abstinence Violation Effect (guilt/shame → fuck-it response → full relapse; counter with compassion, learning orientation). Harm reduction compatible. Urge surfing (cravings peak/decline). Modern: add MI, mindfulness (MBRP). Applied beyond SUD (eating, aggression)."
    },
    {
      front: "CBT for Insomnia (CBT-I) - Components",
      back: "First-line per ACP guidelines. 1) Sleep restriction: Limit time in bed to actual sleep time (create sleep drive), gradually expand. 2) Stimulus control: Bed = sleep/sex only; leave if not sleeping 20min; consistent wake time. 3) Sleep hygiene (environment, avoid caffeine/alcohol, exercise timing). 4) Cognitive therapy (challenge: 'need 8 hours', catastrophizing). 5) Relaxation (optional). 4-8 sessions. Evidence: highly effective, durable, superior to medication long-term. Mechanisms: consolidate sleep, reduce arousal, break maladaptive conditioning. Digital CBT-I effective, accessible."
    },
    {
      front: "EMDR Eight-Phase Protocol",
      back: "Eye Movement Desensitization & Reprocessing (Shapiro) for PTSD. Phases: 1) History/treatment planning, 2) Preparation (safe place, coping skills), 3) Assessment (identify target memory, negative cognition, positive cognition, emotions, SUDs, body), 4) Desensitization (bilateral stimulation while processing), 5) Installation (strengthen positive cognition), 6) Body scan (residual tension), 7) Closure, 8) Reevaluation (next session). Bilateral: eye movements, taps, tones. Mechanism debated (working memory taxation, exposure, other). Evidence: effective for PTSD (APA, VA/DoD), though eye movements may not be necessary."
    },
    {
      front: "Therapeutic Alliance - Bordin's Three Components",
      back: "Working alliance (Bordin): 1) Bond—mutual trust, liking, respect, attachment (affective), 2) Goals—agreement on therapy objectives (what we're working toward), 3) Tasks—agreement on activities/methods (how we'll get there). Strongest predictor of outcome across all therapies (~7-8% variance). Measured: WAI (Working Alliance Inventory—therapist, client, observer versions). Rupture-repair sequences can strengthen. Early alliance predicts dropout. Therapist contributions: empathy, positive regard, congruence. Pantheoretical. Monitor continuously."
    },
    {
      front: "Evidence-Based Treatments by Disorder - Quick Guide",
      back: "MDD: CBT, BA, IPT, medication, MBCT (relapse prevention). GAD: CBT, ABBT, medication. Panic: CBT with interoceptive exposure. Social anxiety: CBT with exposure. PTSD: PE, CPT, EMDR. OCD: ERP + SSRI. BPD: DBT, MBT, TFP, schema therapy. Schizophrenia: Medication, CBTp, family psychoeducation, social skills, supported employment. Bipolar: Medication, psychoeducation, IPSRT, FFT. Anorexia (adolescent): FBT. Bulimia: CBT-E. Binge eating: CBT-E, IPT. Substance use: CBT, MI, CM, MAT (medication-assisted), 12-step."
    },
    {
      front: "Common Factors vs. Specific Techniques Debate",
      back: "Common factors (Lambert, Wampold): Alliance, empathy, hope, client factors account for most variance (~70%); techniques ~15%. Dodo bird verdict: 'all have won' (psychotherapies roughly equivalent). Implications: cultivate alliance, instill hope, match to client preferences. COUNTER: Specific techniques DO matter for specific disorders (ERP for OCD, exposure for phobias—large effect sizes). Resolution: Common factors provide foundation; specific techniques add incremental benefit for specific conditions. Both/and, not either/or. Train alliance skills + evidence-based techniques."
    },
    {
      front: "Transdiagnostic Treatment Approach",
      back: "Single protocol for multiple related disorders sharing maintaining mechanisms. Rationale: 1) High comorbidity (anxiety-depression), 2) Shared processes (emotion dysregulation, avoidance, negative appraisals, neuroticism), 3) Within-disorder heterogeneity, 4) Training efficiency, 5) Sequential comorbidity. Examples: Unified Protocol (emotional disorders), CBT-E (eating disorders), emotion regulation skills. Evidence: comparable to single-disorder protocols. Aligns with RDoC (mechanisms vs. syndromes). Doesn't replace highly specific treatments (ERP for OCD) but addresses many. Future direction."
    },
    {
      front: "Manualized Treatment - Purpose and Criticisms",
      back: "Purpose: 1) Treatment fidelity (deliver intended intervention—internal validity for RCTs), 2) Replication, 3) Training (specify competencies), 4) Dissemination (transportability). Criticisms: Reduces flexibility, ignores individual differences, damages alliance, limits clinical judgment. Response: Manuals specify core components allowing flexibility; alliance maintained in manualized RCTs; balance fidelity and adaptation. Effectiveness often similar manualized vs. non-manualized. Enables evidence-base (test WHAT works). Examples: CBT, PE, CPT, DBT, IPT manuals. Community practice often adapts flexibly."
    },
  ],
};
