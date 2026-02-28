export const biologicalDomain = {
  id: "biological",
  name: "Biological Bases of Behavior",
  weight: 12,
  color: "#2A7DD2",
  icon: "🧠",
  description: "Neuroscience, psychopharmacology, physiological psychology",
  topics: [
    "Neuroanatomy and brain structures",
    "Neurotransmitter systems and functions",
    "Psychopharmacology and drug mechanisms",
    "Behavioral genetics and epigenetics",
    "Neuroimaging techniques (fMRI, PET, EEG)",
    "Neurological disorders and syndromes",
    "Sleep and circadian rhythms",
    "Endocrine system and behavior",
  ],
  questions: [
    {
      q: "Damage to Broca's area most typically results in:",
      options: [
        "Receptive aphasia with fluent speech",
        "Expressive aphasia with nonfluent speech",
        "Global aphasia",
        "Anomic aphasia",
      ],
      correct: 1,
      explanation:
        "Broca's area (left inferior frontal gyrus) is primarily responsible for speech production. Damage results in expressive (nonfluent) aphasia characterized by effortful, telegraphic speech with relatively preserved comprehension. Receptive aphasia (fluent but incomprehensible speech) is associated with Wernicke's area damage.",
    },
    {
      q: "Which neurotransmitter is MOST directly associated with Parkinson's disease?",
      options: ["Serotonin", "Dopamine", "GABA", "Acetylcholine"],
      correct: 1,
      explanation:
        "Parkinson's disease is primarily caused by the degeneration of dopaminergic neurons in the substantia nigra, leading to decreased dopamine in the nigrostriatal pathway. This dopamine deficiency causes the characteristic motor symptoms: tremor, rigidity, bradykinesia, and postural instability.",
    },
    {
      q: "SSRIs (Selective Serotonin Reuptake Inhibitors) work primarily by:",
      options: [
        "Increasing serotonin synthesis",
        "Blocking serotonin reuptake at the presynaptic neuron",
        "Stimulating serotonin receptors directly",
        "Inhibiting monoamine oxidase",
      ],
      correct: 1,
      explanation:
        "SSRIs block the reuptake transporter on the presynaptic neuron, preventing serotonin from being reabsorbed. This increases the concentration and duration of serotonin activity in the synaptic cleft. They don't increase synthesis, directly stimulate receptors, or inhibit MAO (that's MAOIs).",
    },
    {
      q: "The hypothalamus plays a key role in all of the following EXCEPT:",
      options: [
        "Regulation of hunger and thirst",
        "Body temperature regulation",
        "Language comprehension",
        "Release of pituitary hormones",
      ],
      correct: 2,
      explanation:
        "The hypothalamus regulates homeostatic functions including hunger, thirst, body temperature, and controls the pituitary gland (master endocrine gland). Language comprehension is primarily associated with Wernicke's area in the temporal lobe, not the hypothalamus.",
    },
    {
      q: "Which brain structure is MOST associated with the formation of new explicit memories?",
      options: ["Amygdala", "Hippocampus", "Cerebellum", "Basal ganglia"],
      correct: 1,
      explanation:
        "The hippocampus is critical for the consolidation of new explicit (declarative) memories—both episodic and semantic. Bilateral hippocampal damage (as in patient H.M.) results in anterograde amnesia. The amygdala processes emotional memories, the cerebellum handles procedural learning, and the basal ganglia are involved in habit formation.",
    },
    {
      q: "Lithium is primarily used as a mood stabilizer for the treatment of:",
      options: [
        "Major Depressive Disorder",
        "Bipolar Disorder",
        "Generalized Anxiety Disorder",
        "Schizophrenia",
      ],
      correct: 1,
      explanation:
        "Lithium is the gold standard treatment for Bipolar Disorder, particularly effective for acute mania and maintenance therapy to prevent mood episodes. It requires therapeutic drug monitoring due to its narrow therapeutic window. Common side effects include tremor, thyroid dysfunction, and renal effects.",
    },
    {
      q: "Benzodiazepines (e.g., lorazepam, alprazolam) work primarily by enhancing the effects of:",
      options: [
        "Dopamine",
        "GABA",
        "Serotonin",
        "Norepinephrine",
      ],
      correct: 1,
      explanation:
        "Benzodiazepines enhance the inhibitory effects of GABA (gamma-aminobutyric acid) by binding to GABA-A receptors, increasing chloride channel opening. This produces anxiolytic, sedative, and muscle relaxant effects. Long-term use risks tolerance and dependence. Abrupt discontinuation can cause dangerous withdrawal including seizures.",
    },
    {
      q: "Neuroplasticity refers to:",
      options: [
        "The rigidity of neural connections after childhood",
        "The brain's ability to reorganize structure and function in response to experience",
        "The genetic determination of brain development",
        "The decline in cognitive abilities with aging",
      ],
      correct: 1,
      explanation:
        "Neuroplasticity is the brain's capacity to change structure and function throughout life in response to experience, learning, and injury. Mechanisms include synaptogenesis, long-term potentiation, neurogenesis (limited), and cortical remapping. This underlies recovery from brain injury and is the basis for cognitive rehabilitation.",
    },
    {
      q: "Which dopamine pathway is primarily implicated in the positive symptoms of schizophrenia?",
      options: [
        "Nigrostriatal pathway",
        "Mesolimbic pathway",
        "Mesocortical pathway",
        "Tuberoinfundibular pathway",
      ],
      correct: 1,
      explanation:
        "The mesolimbic pathway (ventral tegmental area to nucleus accumbens and limbic structures) is associated with positive symptoms of schizophrenia when overactive. Antipsychotics block dopamine in this pathway to reduce hallucinations and delusions. The nigrostriatal pathway relates to motor function, mesocortical to negative symptoms/cognition, and tuberoinfundibular to prolactin regulation.",
    },
    {
      q: "Clozapine is distinct from other atypical antipsychotics because it:",
      options: [
        "Has no risk of metabolic side effects",
        "Requires regular blood monitoring for agranulocytosis",
        "Works only on dopamine receptors",
        "Is approved for first-line treatment",
      ],
      correct: 1,
      explanation:
        "Clozapine carries a significant risk of agranulocytosis (dangerous reduction in white blood cells), requiring weekly blood monitoring initially, then biweekly. Despite this risk, it's the most effective antipsychotic for treatment-resistant schizophrenia. It's reserved for cases where other antipsychotics have failed due to this safety concern and also has high metabolic side effect risk.",
    },
    {
      q: "A patient on an MAOI (monoamine oxidase inhibitor) should avoid foods containing tyramine because:",
      options: [
        "Tyramine enhances the drug's sedative effects",
        "The combination can cause a hypertensive crisis",
        "Tyramine reduces the effectiveness of the medication",
        "It increases risk of serotonin syndrome",
      ],
      correct: 1,
      explanation:
        "MAOIs prevent the breakdown of tyramine, which can accumulate and cause dangerous blood pressure spikes (hypertensive crisis). High-tyramine foods include aged cheeses, cured meats, draft beer, fermented foods, and soy products. This dietary restriction is a major reason MAOIs are rarely used today, despite effectiveness for atypical depression.",
    },
    {
      q: "The amygdala is MOST directly involved in:",
      options: [
        "Motor planning and execution",
        "Fear conditioning and emotional memory",
        "Working memory and executive function",
        "Language production",
      ],
      correct: 1,
      explanation:
        "The amygdala is central to fear conditioning, threat detection, and emotional memory consolidation. It's activated by emotionally salient stimuli and projects to the hypothalamus (autonomic responses), PAG (defensive behaviors), and hippocampus (emotional memory formation). Amygdala hyperactivity is implicated in anxiety disorders and PTSD.",
    },
    {
      q: "Tricyclic antidepressants (TCAs) are generally avoided in patients with cardiac conditions because they:",
      options: [
        "Increase blood pressure excessively",
        "Can cause QT interval prolongation and arrhythmias",
        "Thin the blood dangerously",
        "Increase risk of myocardial infarction",
      ],
      correct: 1,
      explanation:
        "TCAs block cardiac sodium channels, causing QT prolongation and potentially fatal arrhythmias, especially in overdose. They also cause orthostatic hypotension. These cardiotoxic effects make TCAs dangerous in cardiac patients and a common means of fatal overdose, which is why SSRIs are preferred despite TCAs' comparable efficacy for depression.",
    },
    {
      q: "Long-term potentiation (LTP) is a mechanism underlying:",
      options: [
        "Neurotransmitter degradation",
        "Synaptic strengthening and memory formation",
        "Apoptosis in neural development",
        "Blood-brain barrier permeability",
      ],
      correct: 1,
      explanation:
        "LTP is a persistent strengthening of synapses based on recent activity patterns, primarily involving NMDA receptor activation and increased AMPA receptor expression. It's a key cellular mechanism for learning and memory, particularly in the hippocampus. The opposite process, long-term depression (LTD), weakens synaptic connections.",
    },
    {
      q: "Which of the following is a common side effect of typical (first-generation) antipsychotics but LESS common with atypical antipsychotics?",
      options: [
        "Weight gain",
        "Extrapyramidal symptoms (EPS)",
        "Sedation",
        "Metabolic syndrome",
      ],
      correct: 1,
      explanation:
        "Typical antipsychotics (haloperidol, chlorpromazine) have high dopamine D2 receptor affinity in the nigrostriatal pathway, causing extrapyramidal symptoms: dystonia, akathisia, parkinsonism, and tardive dyskinesia. Atypicals have lower D2 affinity and 5-HT2A antagonism, reducing EPS risk. However, atypicals carry higher risks of weight gain and metabolic syndrome.",
    },
    {
      q: "The prefrontal cortex is primarily responsible for:",
      options: [
        "Processing visual information",
        "Executive functions including planning, decision-making, and impulse control",
        "Regulating heart rate and breathing",
        "Coordinating balance and posture",
      ],
      correct: 1,
      explanation:
        "The prefrontal cortex (particularly dorsolateral PFC) is the brain's executive control center, involved in working memory, planning, reasoning, impulse control, and personality expression. Damage causes disinhibition, poor judgment, and executive dysfunction. The classic case is Phineas Gage, whose frontal lobe injury caused dramatic personality changes.",
    },
    {
      q: "Bupropion (Wellbutrin) differs from SSRIs in that it primarily affects:",
      options: [
        "Serotonin and GABA",
        "Dopamine and norepinephrine",
        "Acetylcholine and histamine",
        "Only serotonin receptors",
      ],
      correct: 1,
      explanation:
        "Bupropion is an atypical antidepressant that inhibits reuptake of dopamine and norepinephrine, not serotonin. It's activating rather than sedating, has no sexual side effects (unlike SSRIs), and is also used for smoking cessation. However, it lowers seizure threshold and is contraindicated in patients with seizure disorders or eating disorders.",
    },
    {
      q: "Tardive dyskinesia is MOST commonly associated with:",
      options: [
        "SSRI use",
        "Long-term antipsychotic use",
        "Benzodiazepine withdrawal",
        "Lithium toxicity",
      ],
      correct: 1,
      explanation:
        "Tardive dyskinesia involves involuntary, repetitive movements (often of the face, tongue, lips) resulting from chronic dopamine D2 receptor blockade, typically after months or years of antipsychotic treatment. It may be irreversible even after discontinuation. Risk is higher with typical antipsychotics. Monitoring using the AIMS scale is standard practice.",
    },
    {
      q: "The corpus callosum functions primarily to:",
      options: [
        "Protect the brain from mechanical injury",
        "Connect and allow communication between the two cerebral hemispheres",
        "Produce cerebrospinal fluid",
        "Regulate circadian rhythms",
      ],
      correct: 1,
      explanation:
        "The corpus callosum is a large bundle of white matter (about 200 million axons) connecting the left and right cerebral hemispheres, allowing interhemispheric communication. Surgical severing (commissurotomy) for intractable epilepsy creates 'split-brain' patients who show hemisphere-specific abilities in controlled testing.",
    },
    {
      q: "Which structure is part of the basal ganglia and is primarily affected in Huntington's disease?",
      options: [
        "Hippocampus",
        "Caudate nucleus",
        "Cerebellum",
        "Thalamus",
      ],
      correct: 1,
      explanation:
        "Huntington's disease causes progressive degeneration of the caudate nucleus and putamen (striatum), part of the basal ganglia. This produces characteristic choreiform movements, cognitive decline, and psychiatric symptoms. It's an autosomal dominant genetic disorder caused by CAG repeat expansion in the huntingtin gene, with onset typically in midlife.",
    },
    {
      q: "Serotonin syndrome is MOST likely to occur when:",
      options: [
        "A patient abruptly stops taking an SSRI",
        "Multiple serotonergic drugs are combined",
        "A patient takes a single dose of an SSRI",
        "An SSRI is combined with a benzodiazepine",
      ],
      correct: 1,
      explanation:
        "Serotonin syndrome is a potentially fatal condition caused by excessive serotonergic activity, most commonly when multiple serotonergic agents are combined (e.g., SSRI + MAOI, SSRI + tramadol, SSRI + St. John's Wort). Symptoms include confusion, agitation, hyperthermia, muscle rigidity, hyperreflexia, and autonomic instability. Treatment involves discontinuation and supportive care.",
    },
    {
      q: "The reticular activating system (RAS) is primarily involved in:",
      options: [
        "Visual processing",
        "Arousal and consciousness",
        "Emotional regulation",
        "Motor coordination",
      ],
      correct: 1,
      explanation:
        "The RAS, located in the brainstem reticular formation, regulates arousal, wakefulness, and consciousness by projecting to the thalamus and cortex. Damage can cause coma. It filters sensory input to maintain appropriate arousal levels. The RAS is also involved in sleep-wake transitions and attention.",
    },
    {
      q: "Which brain imaging technique has the BEST temporal resolution for measuring rapid neural activity?",
      options: [
        "fMRI (functional Magnetic Resonance Imaging)",
        "EEG (Electroencephalography)",
        "PET (Positron Emission Tomography)",
        "MRI (Structural Magnetic Resonance Imaging)",
      ],
      correct: 1,
      explanation:
        "EEG measures electrical activity directly at millisecond resolution, providing excellent temporal resolution for tracking rapid neural events like ERPs (event-related potentials). However, it has poor spatial resolution. fMRI has better spatial resolution but measures blood flow changes (BOLD signal) with several-second delays, giving poor temporal resolution. PET is even slower.",
    },
    {
      q: "Lamotrigine (Lamictal) is an anticonvulsant commonly used as a mood stabilizer that is particularly effective for:",
      options: [
        "Acute mania",
        "Bipolar depression",
        "Positive symptoms of schizophrenia",
        "Generalized anxiety disorder",
      ],
      correct: 1,
      explanation:
        "Lamotrigine is FDA-approved for maintenance treatment of bipolar disorder and is particularly effective for preventing depressive episodes. Unlike lithium or valproate, it's less effective for acute mania. The major concern is Stevens-Johnson syndrome (serious rash), requiring slow titration. It has favorable side effect profile with minimal weight gain or cognitive effects.",
    },
    {
      q: "The ventromedial prefrontal cortex is particularly important for:",
      options: [
        "Mathematical calculation",
        "Emotional decision-making and social behavior",
        "Speech production",
        "Visual-spatial processing",
      ],
      correct: 1,
      explanation:
        "The ventromedial PFC integrates emotional information into decision-making, is involved in reward processing, and regulates social behavior. Damage (as in Phineas Gage) causes impaired decision-making despite intact logic, inability to learn from emotional consequences, and socially inappropriate behavior. Damasio's somatic marker hypothesis emphasizes this region's role in 'gut feelings.'",
    },
    {
      q: "Naltrexone is used in the treatment of alcohol use disorder because it:",
      options: [
        "Increases GABA activity to reduce anxiety",
        "Blocks opioid receptors, reducing reward and craving",
        "Causes severe illness when combined with alcohol",
        "Increases serotonin to improve mood",
      ],
      correct: 1,
      explanation:
        "Naltrexone is an opioid antagonist that blocks mu-opioid receptors, reducing the rewarding effects of alcohol and decreasing craving. It's also used for opioid use disorder. Unlike disulfiram (Antabuse), which causes illness when combined with alcohol, naltrexone works by reducing positive reinforcement. Extended-release injectable form (Vivitrol) improves adherence.",
    },
    {
      q: "Acetylcholine is notably reduced in which neurodegenerative disorder?",
      options: [
        "Parkinson's disease",
        "Alzheimer's disease",
        "Huntington's disease",
        "Multiple sclerosis",
      ],
      correct: 1,
      explanation:
        "Alzheimer's disease involves significant degeneration of cholinergic neurons in the basal forebrain (nucleus basalis of Meynert), leading to acetylcholine deficiency in cortical and hippocampal regions. This contributes to memory and cognitive deficits. Cholinesterase inhibitors (donepezil, rivastigmine) are used to increase available acetylcholine, providing modest symptomatic benefit.",
    },
    {
      q: "During REM sleep, which of the following is characteristic?",
      options: [
        "Slow-wave delta activity on EEG",
        "Muscle atonia and vivid dreaming",
        "The deepest stage of sleep",
        "Predominance of stage N2 sleep spindles",
      ],
      correct: 1,
      explanation:
        "REM sleep is characterized by rapid eye movements, muscle atonia (paralysis except for diaphragm and eyes), EEG resembling wakefulness (low amplitude, mixed frequency), vivid dreams, and autonomic arousal. REM occurs in cycles throughout the night with longer periods toward morning. REM sleep behavior disorder involves loss of muscle atonia, causing dream enactment.",
    },
    {
      q: "Buspirone (Buspar) is unique among anxiolytics because it:",
      options: [
        "Works by enhancing GABA activity",
        "Acts as a partial agonist at serotonin 5-HT1A receptors",
        "Has high addiction potential",
        "Provides immediate anxiety relief",
      ],
      correct: 1,
      explanation:
        "Buspirone is a 5-HT1A partial agonist that differs from benzodiazepines: it has no addiction potential, no sedation, no muscle relaxation, but requires 2-4 weeks to take effect (not useful for acute anxiety). It doesn't cause cognitive impairment or interact with alcohol. It's used for generalized anxiety disorder but not panic disorder or acute anxiety.",
    },
    {
      q: "The substantia nigra is located in the:",
      options: [
        "Frontal lobe",
        "Midbrain",
        "Cerebellum",
        "Medulla oblongata",
      ],
      correct: 1,
      explanation:
        "The substantia nigra ('black substance,' due to neuromelanin pigment) is located in the midbrain and is part of the basal ganglia circuit. Its dopaminergic neurons project to the striatum (nigrostriatal pathway). Degeneration of these neurons causes Parkinson's disease. The substantia nigra has two parts: pars compacta (dopaminergic) and pars reticulata (GABAergic).",
    },
    {
      q: "Methylphenidate (Ritalin) and amphetamines treat ADHD primarily by:",
      options: [
        "Blocking dopamine receptors",
        "Increasing dopamine and norepinephrine in the synapse",
        "Enhancing GABA inhibition",
        "Blocking serotonin reuptake",
      ],
      correct: 1,
      explanation:
        "Stimulant medications for ADHD block dopamine and norepinephrine reuptake (methylphenidate) or promote release and block reuptake (amphetamines), increasing these neurotransmitters in prefrontal cortex and striatum. This enhances attention, impulse control, and executive function. The paradoxical 'calming' effect occurs because enhanced prefrontal function improves behavioral regulation.",
    },
    {
      q: "Valproic acid (Depakote) as a mood stabilizer requires monitoring of:",
      options: [
        "Kidney function only",
        "Liver function and blood counts",
        "Thyroid function only",
        "Blood glucose only",
      ],
      correct: 1,
      explanation:
        "Valproate can cause hepatotoxicity (especially in children under 2) and thrombocytopenia, requiring regular monitoring of liver enzymes and complete blood counts. It's effective for acute mania and maintenance in bipolar disorder. It's highly teratogenic, causing neural tube defects, and is contraindicated in pregnancy. Weight gain and tremor are common side effects.",
    },
    {
      q: "The cerebellum is primarily involved in:",
      options: [
        "Emotional processing and fear responses",
        "Motor coordination, balance, and procedural learning",
        "Language comprehension",
        "Formation of explicit memories",
      ],
      correct: 1,
      explanation:
        "The cerebellum coordinates fine motor movements, maintains balance and posture, and is involved in motor learning and timing. Cerebellar damage causes ataxia (uncoordinated movement), intention tremor, and dysmetria. Recent research shows cerebellar involvement in cognitive functions and autism spectrum disorder, but motor coordination remains its primary role.",
    },
    {
      q: "Which neurotransmitter is the primary excitatory neurotransmitter in the brain?",
      options: [
        "GABA",
        "Glutamate",
        "Dopamine",
        "Serotonin",
      ],
      correct: 1,
      explanation:
        "Glutamate is the brain's main excitatory neurotransmitter, involved in synaptic plasticity, learning, and memory through NMDA and AMPA receptors. Excessive glutamate causes excitotoxicity, implicated in stroke, traumatic brain injury, and neurodegenerative diseases. Glutamate dysfunction is also implicated in schizophrenia, with NMDA receptor hypofunction as an alternative to the dopamine hypothesis.",
    },
    {
      q: "Neuroleptic malignant syndrome (NMS) is a rare but serious reaction to antipsychotics characterized by:",
      options: [
        "Severe hypotension and bradycardia",
        "Hyperthermia, muscle rigidity, autonomic instability, and altered consciousness",
        "Excessive salivation and respiratory depression",
        "Severe depression and suicidal ideation",
      ],
      correct: 1,
      explanation:
        "NMS is a medical emergency with 10% mortality if untreated. Cardinal signs: fever, 'lead pipe' muscle rigidity, autonomic dysfunction (unstable BP, tachycardia), and confusion. Lab findings include elevated creatine kinase. Treatment involves immediate discontinuation of the antipsychotic, supportive care, and sometimes dantrolene or bromocriptine. Risk factors include high-potency typical antipsychotics, rapid dose escalation, and dehydration.",
    },
    {
      q: "The suprachiasmatic nucleus (SCN) of the hypothalamus regulates:",
      options: [
        "Appetite and satiety",
        "Circadian rhythms",
        "Sexual behavior",
        "Aggression",
      ],
      correct: 1,
      explanation:
        "The SCN is the master circadian pacemaker, regulating 24-hour biological rhythms. It receives direct input from retinal ganglion cells (detecting light) and synchronizes body rhythms to the light-dark cycle. SCN damage disrupts sleep-wake cycles. Melatonin secretion from the pineal gland is controlled by SCN activity, increasing in darkness to promote sleep.",
    },
    {
      q: "Disulfiram (Antabuse) works in alcohol use disorder treatment by:",
      options: [
        "Reducing alcohol craving through opioid receptor blockade",
        "Inhibiting aldehyde dehydrogenase, causing unpleasant reactions to alcohol",
        "Enhancing GABA to reduce anxiety",
        "Blocking dopamine reward pathways",
      ],
      correct: 1,
      explanation:
        "Disulfiram inhibits aldehyde dehydrogenase, causing acetaldehyde accumulation when alcohol is consumed. This produces an aversive reaction: flushing, nausea, vomiting, headache, tachycardia. It's a deterrent approach requiring high motivation and compliance. Patients must avoid all alcohol sources (including mouthwash, food with alcohol). Severe reactions can be dangerous, requiring patient education.",
    },
    {
      q: "Myelination of neurons serves to:",
      options: [
        "Slow down neural transmission",
        "Increase the speed of action potential propagation",
        "Store neurotransmitters",
        "Prevent any electrical activity",
      ],
      correct: 1,
      explanation:
        "Myelin sheaths (formed by oligodendrocytes in CNS, Schwann cells in PNS) insulate axons and allow saltatory conduction, where action potentials 'jump' between nodes of Ranvier. This increases transmission speed up to 100x compared to unmyelinated axons. Demyelinating diseases (multiple sclerosis, Guillain-Barré syndrome) cause slowed or blocked neural transmission.",
    },
    {
      q: "The parietal lobe is primarily responsible for:",
      options: [
        "Auditory processing",
        "Somatosensory processing and spatial awareness",
        "Emotional regulation",
        "Motor planning",
      ],
      correct: 1,
      explanation:
        "The parietal lobe processes somatosensory information (postcentral gyrus contains the primary sensory cortex with somatotopic organization), spatial awareness, attention, and integrates sensory information. Right parietal damage can cause left-sided neglect. Superior parietal lobule processes spatial location; inferior parietal lobule is involved in language (left) and spatial attention (right).",
    },
    {
      q: "Atomoxetine (Strattera) differs from stimulant ADHD medications in that it:",
      options: [
        "Is a controlled substance with abuse potential",
        "Is a selective norepinephrine reuptake inhibitor without abuse potential",
        "Works immediately after first dose",
        "Only affects dopamine systems",
      ],
      correct: 1,
      explanation:
        "Atomoxetine is a non-stimulant ADHD medication that selectively inhibits norepinephrine reuptake in the prefrontal cortex. Unlike stimulants, it's not a controlled substance, has no abuse potential, but requires 2-4 weeks for full effect. It's useful for patients with substance use history or when stimulants are contraindicated. Side effects include decreased appetite, GI upset, and possible liver effects.",
    },
    {
      q: "Which sleep stage is characterized by sleep spindles and K-complexes on EEG?",
      options: [
        "Stage N1 (light sleep)",
        "Stage N2",
        "Stage N3 (slow-wave sleep)",
        "REM sleep",
      ],
      correct: 1,
      explanation:
        "Stage N2 sleep (about 50% of total sleep time) shows distinctive EEG features: sleep spindles (12-14 Hz bursts) and K-complexes (large amplitude waves). Sleep spindles are involved in memory consolidation and protection from arousal. Stage N1 shows theta activity, stage N3 shows delta waves (slow-wave sleep), and REM shows desynchronized activity similar to waking.",
    },
    {
      q: "The ventral tegmental area (VTA) is significant because it:",
      options: [
        "Controls balance and coordination",
        "Is the origin of the mesolimbic dopamine reward pathway",
        "Regulates thyroid hormone production",
        "Processes visual information",
      ],
      correct: 1,
      explanation:
        "The VTA, located in the midbrain, contains dopaminergic neurons that project to the nucleus accumbens (mesolimbic pathway) and prefrontal cortex (mesocortical pathway). The mesolimbic pathway is central to reward, motivation, and addiction. All drugs of abuse increase dopamine in the nucleus accumbens, directly or indirectly. Understanding this pathway is crucial for treating substance use disorders.",
    },
    {
      q: "SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors) like venlafaxine and duloxetine are distinguished from SSRIs by:",
      options: [
        "Having fewer side effects",
        "Blocking reuptake of both serotonin and norepinephrine",
        "Working faster than SSRIs",
        "Having no withdrawal symptoms",
      ],
      correct: 1,
      explanation:
        "SNRIs inhibit reuptake of both serotonin and norepinephrine, potentially offering advantages for depression, chronic pain, and fibromyalgia. Venlafaxine affects serotonin at low doses but becomes more noradrenergic at higher doses. Duloxetine has more balanced dual action. Side effects are similar to SSRIs but may include increased blood pressure. Discontinuation syndrome can be significant.",
    },
    {
      q: "Which of the following is TRUE regarding neurogenesis in adult humans?",
      options: [
        "It occurs throughout the cortex at high rates",
        "It is limited primarily to the hippocampal dentate gyrus",
        "It does not occur in adult humans",
        "It only occurs immediately after traumatic brain injury",
      ],
      correct: 1,
      explanation:
        "Adult neurogenesis in humans is limited primarily to the dentate gyrus of the hippocampus and possibly the olfactory bulb. New neurons are generated throughout life, though rates decline with age. Hippocampal neurogenesis is implicated in learning, memory, and mood regulation. Exercise, environmental enrichment, and antidepressants may promote neurogenesis, while stress inhibits it.",
    },
    {
      q: "Gabapentin and pregabalin, despite their names, primarily work by:",
      options: [
        "Enhancing GABA receptor binding",
        "Blocking voltage-gated calcium channels",
        "Inhibiting GABA reuptake",
        "Increasing GABA synthesis",
      ],
      correct: 1,
      explanation:
        "Despite being GABA analogs, gabapentin and pregabalin don't directly affect GABA receptors. They bind to the alpha-2-delta subunit of voltage-gated calcium channels, reducing neurotransmitter release. They're used for neuropathic pain, fibromyalgia, and generalized anxiety disorder (pregabalin). Side effects include sedation, dizziness, and weight gain. They have lower abuse potential than benzodiazepines but some misuse occurs.",
    },
    {
      q: "Korsakoff's syndrome, often associated with chronic alcoholism, involves damage to the:",
      options: [
        "Frontal cortex only",
        "Mammillary bodies and dorsomedial thalamus",
        "Basal ganglia",
        "Occipital lobe",
      ],
      correct: 1,
      explanation:
        "Korsakoff's syndrome results from thiamine (vitamin B1) deficiency, often due to chronic alcoholism. It causes damage to mammillary bodies, dorsomedial thalamus, and other diencephalic structures. Symptoms include severe anterograde amnesia, confabulation, and apathy. It often follows Wernicke's encephalopathy (confusion, ataxia, ophthalmoplegia). Thiamine supplementation can prevent progression but usually doesn't reverse existing damage.",
    },
    {
      q: "The blood-brain barrier serves to:",
      options: [
        "Allow all substances to enter the brain freely",
        "Selectively restrict passage of substances from blood to brain tissue",
        "Produce cerebrospinal fluid",
        "Connect neurons to blood vessels",
      ],
      correct: 1,
      explanation:
        "The blood-brain barrier (BBB) consists of tight junctions between endothelial cells in brain capillaries, selectively permitting passage of essential nutrients (glucose, amino acids) while blocking many drugs, pathogens, and toxins. Lipid-soluble substances cross more easily. The BBB protects the brain but also complicates drug delivery. Some areas (circumventricular organs) lack BBB for hormone sensing.",
    },
    {
      q: "Which neuroimaging technique uses radioactive tracers to measure brain metabolism or neurotransmitter activity?",
      options: [
        "fMRI",
        "PET (Positron Emission Tomography)",
        "EEG",
        "Structural MRI",
      ],
      correct: 1,
      explanation:
        "PET uses radioactive tracers (e.g., fluorodeoxyglucose for metabolism, or ligands for specific receptors/neurotransmitters) to visualize brain activity and neurochemistry. It has good spatial resolution but poor temporal resolution and involves radiation exposure. PET is valuable for research on neurotransmitter systems and diagnosis of conditions like Alzheimer's (showing characteristic patterns of hypometabolism).",
    },
    {
      q: "Trazodone, while classified as an antidepressant, is commonly prescribed at low doses for:",
      options: [
        "Anxiety",
        "Insomnia",
        "ADHD",
        "Psychosis",
      ],
      correct: 1,
      explanation:
        "Trazodone is a serotonin antagonist and reuptake inhibitor (SARI) that, at low doses (25-100mg), is highly sedating and commonly used off-label for insomnia. At antidepressant doses (200-600mg), it treats depression. Side effects include orthostatic hypotension and, rarely, priapism (sustained painful erection) requiring emergency treatment. It has minimal sexual side effects compared to SSRIs.",
    },
    {
      q: "The mesolimbic dopamine pathway originates in the:",
      options: [
        "Substantia nigra",
        "Ventral tegmental area (VTA)",
        "Nucleus accumbens",
        "Prefrontal cortex",
      ],
      correct: 1,
      explanation:
        "The mesolimbic pathway projects from the VTA to the nucleus accumbens and limbic structures. It's the brain's primary reward circuit, activated by natural rewards and all addictive drugs. Overactivity is associated with positive symptoms of schizophrenia. The mesocortical pathway (VTA to prefrontal cortex) is involved in cognition and motivation; underactivity may relate to negative symptoms and cognitive deficits in schizophrenia.",
    },
    {
      q: "Acamprosate (Campral) is used in alcohol use disorder treatment and is thought to work by:",
      options: [
        "Causing illness when alcohol is consumed",
        "Modulating glutamate neurotransmission",
        "Blocking opioid receptors",
        "Increasing dopamine activity",
      ],
      correct: 1,
      explanation:
        "Acamprosate modulates glutamatergic neurotransmission (possibly as NMDA antagonist) and may help restore the balance between excitation and inhibition disrupted by chronic alcohol use. It reduces craving and supports abstinence but doesn't cause aversive reactions or block reward. It requires three-times-daily dosing and renal clearance (avoid in kidney disease). It works best combined with psychosocial treatment.",
    },
    {
      q: "The thalamus serves primarily as:",
      options: [
        "The emotion center of the brain",
        "A relay station for sensory information to the cortex",
        "The primary motor cortex",
        "A memory storage area",
      ],
      correct: 1,
      explanation:
        "The thalamus is a major relay station that processes and directs sensory information (except olfaction, which bypasses the thalamus) to appropriate cortical areas. Different thalamic nuclei handle different information: lateral geniculate (vision), medial geniculate (audition), ventral posterior (somatosensory). The thalamus is also involved in consciousness, sleep, and arousal regulation.",
    },
    {
      q: "Which of the following antidepressants has the HIGHEST risk of QTc prolongation?",
      options: [
        "Fluoxetine (Prozac)",
        "Citalopram (Celexa)",
        "Sertraline (Zoloft)",
        "Bupropion (Wellbutrin)",
      ],
      correct: 1,
      explanation:
        "Citalopram carries FDA warnings about dose-dependent QTc prolongation (affecting cardiac repolarization), with maximum recommended doses of 40mg daily (20mg for patients >60 years or with certain conditions). Escitalopram has similar but lesser concerns. QTc prolongation increases risk of torsades de pointes, a potentially fatal arrhythmia. ECG monitoring may be needed in at-risk patients.",
    },
    {
      q: "Mirror neurons, first discovered in macaque monkeys, are thought to be involved in:",
      options: [
        "Visual processing only",
        "Understanding others' actions and empathy",
        "Language production exclusively",
        "Memory consolidation during sleep",
      ],
      correct: 1,
      explanation:
        "Mirror neurons fire both when an individual performs an action and when observing another perform the same action. They're thought to underlie imitation, action understanding, empathy, and theory of mind. Dysfunction in mirror neuron systems has been hypothesized (controversially) to contribute to autism spectrum disorders. In humans, mirror systems involve inferior frontal and inferior parietal regions.",
    },
    {
      q: "GABA (gamma-aminobutyric acid) functions primarily as:",
      options: [
        "An excitatory neurotransmitter",
        "The brain's main inhibitory neurotransmitter",
        "A hormone regulating metabolism",
        "A neuromodulator with no direct effects",
      ],
      correct: 1,
      explanation:
        "GABA is the principal inhibitory neurotransmitter in the adult brain, acting on GABA-A (ionotropic, fast) and GABA-B (metabotropic, slow) receptors. GABA reduces neuronal excitability and is crucial for regulating anxiety, muscle tone, and preventing excessive excitation. Many anxiolytics (benzodiazepines, barbiturates), hypnotics, and anticonvulsants enhance GABA activity. GABA deficiency is implicated in anxiety and seizure disorders.",
    },
    {
      q: "Apraxia refers to:",
      options: [
        "Inability to recognize faces",
        "Inability to perform learned motor tasks despite intact motor function",
        "Loss of sensation in limbs",
        "Complete paralysis",
      ],
      correct: 1,
      explanation:
        "Apraxia is a disorder of skilled purposeful movement that's not due to weakness, sensory loss, or comprehension deficits. Types include ideomotor (can't perform actions on command but can do them spontaneously), ideational (can't sequence multi-step actions), and constructional apraxia. It typically results from left parietal or frontal lobe damage and affects activities like tool use or gestures.",
    },
    {
      q: "Mirtazapine (Remeron) is unique among antidepressants because it:",
      options: [
        "Blocks serotonin and norepinephrine reuptake",
        "Antagonizes alpha-2 adrenergic and serotonin receptors, increasing release",
        "Is a pure SSRI",
        "Inhibits monoamine oxidase",
      ],
      correct: 1,
      explanation:
        "Mirtazapine is a noradrenergic and specific serotonergic antidepressant (NaSSA) that blocks presynaptic alpha-2 autoreceptors, increasing norepinephrine and serotonin release, and blocks 5-HT2 and 5-HT3 receptors. It's sedating (antihistamine effects), increases appetite/weight (useful in elderly or eating disorders), has minimal sexual side effects, and has antiemetic properties.",
    },
    {
      q: "The dopamine hypothesis of schizophrenia primarily suggests that positive symptoms result from:",
      options: [
        "Decreased dopamine in the prefrontal cortex",
        "Excessive dopamine activity in mesolimbic pathways",
        "Serotonin deficiency in the raphe nuclei",
        "Glutamate excess in the hippocampus",
      ],
      correct: 1,
      explanation:
        "The dopamine hypothesis posits that positive symptoms (hallucinations, delusions) result from excessive dopamine activity in mesolimbic pathways, while negative symptoms and cognitive deficits may involve dopamine underactivity in mesocortical pathways. Support comes from: (1) amphetamine can induce psychosis, (2) all antipsychotics block D2 receptors, (3) Parkinson's medications can cause psychosis. However, glutamate (NMDA receptor) dysfunction is an alternative/complementary theory.",
    },
    {
      q: "Electroconvulsive therapy (ECT) is thought to work through:",
      options: [
        "Destroying damaged brain tissue",
        "Multiple mechanisms including neurotransmitter changes and neuroplasticity",
        "Permanent memory erasure",
        "Placebo effect only",
      ],
      correct: 1,
      explanation:
        "ECT's mechanisms are incompletely understood but include: increased neurotransmitter activity (serotonin, norepinephrine, dopamine), enhanced neuroplasticity and BDNF expression, changes in regional brain perfusion, and possibly anti-inflammatory effects. It's highly effective for severe depression, especially with psychotic features, catatonia, and treatment-resistant cases. Main side effects include temporary confusion and retrograde amnesia (usually for events around treatment period).",
    },
    {
      q: "Carbamazepine (Tegretol), used as a mood stabilizer, requires monitoring for:",
      options: [
        "Thyroid function only",
        "Blood counts due to risk of agranulocytosis and aplastic anemia",
        "Blood glucose only",
        "Muscle strength",
      ],
      correct: 1,
      explanation:
        "Carbamazepine can cause serious blood dyscrasias including agranulocytosis, aplastic anemia, and thrombocytopenia, requiring baseline and periodic CBC monitoring. It also induces hepatic enzymes (CYP450), reducing levels of many medications including oral contraceptives. Other concerns include hyponatremia and Stevens-Johnson syndrome. HLA-B*1502 screening is recommended in Asian populations due to increased rash risk.",
    },
    {
      q: "Topiramate (Topamax), an anticonvulsant sometimes used for mood stabilization and off-label for weight loss, commonly causes:",
      options: [
        "Weight gain and sedation",
        "Cognitive slowing and word-finding difficulties",
        "Severe hypertension",
        "Excessive appetite",
      ],
      correct: 1,
      explanation:
        "Topiramate frequently causes cognitive side effects including 'brain fog,' difficulty concentrating, word-finding problems, and slowed processing speed, sometimes called 'Dopamax' by patients. Unlike most mood stabilizers, it causes weight loss and is used off-label for binge eating disorder and migraine prophylaxis. Other side effects include paresthesias, kidney stones, and rarely acute angle-closure glaucoma.",
    },
  ],
  flashcards: [
    {
      front: "Major neurotransmitter systems",
      back: "Dopamine: reward, motivation, motor. Serotonin: mood, sleep, appetite. Norepinephrine: arousal, attention. GABA: inhibition. Glutamate: excitation. Acetylcholine: memory, muscle contraction.",
    },
    {
      front: "Wernicke's vs. Broca's Aphasia",
      back: "Wernicke's (temporal): Fluent but meaningless speech, poor comprehension. Broca's (frontal): Nonfluent, effortful speech, relatively preserved comprehension. Conduction aphasia: Can't repeat, fluent speech, good comprehension (arcuate fasciculus damage).",
    },
    {
      front: "Atypical Antipsychotics",
      back: "Block both dopamine D2 and serotonin 5-HT2A receptors. Examples: risperidone, olanzapine, quetiapine, aripiprazole, clozapine. Fewer EPS than typical antipsychotics but risk metabolic syndrome. Clozapine requires monitoring for agranulocytosis.",
    },
    {
      front: "HPA Axis (Stress Response)",
      back: "Hypothalamus → CRH → Anterior Pituitary → ACTH → Adrenal Cortex → Cortisol. Chronic activation leads to elevated cortisol, hippocampal atrophy, immune suppression, and is implicated in depression and PTSD.",
    },
    {
      front: "Brain Lateralization",
      back: "Left hemisphere: Language (Broca's & Wernicke's), logical/analytical processing, math, right-hand motor. Right hemisphere: Spatial processing, facial recognition, emotional prosody, music, left visual field/left-hand motor.",
    },
    {
      front: "Four Dopamine Pathways",
      back: "1) Nigrostriatal: substantia nigra → striatum (motor control, Parkinson's when damaged). 2) Mesolimbic: VTA → nucleus accumbens (reward, positive symptoms when overactive). 3) Mesocortical: VTA → PFC (cognition, negative symptoms when underactive). 4) Tuberoinfundibular: hypothalamus → pituitary (prolactin regulation).",
    },
    {
      front: "SSRI Side Effects",
      back: "Sexual dysfunction (most common: delayed orgasm, decreased libido), GI upset, weight gain, insomnia/activation, SIADH (hyponatremia in elderly). Takes 2-6 weeks for full effect. Discontinuation syndrome possible with abrupt cessation (fluoxetine has longest half-life, lowest risk).",
    },
    {
      front: "Basal Ganglia Components",
      back: "Striatum (caudate + putamen), globus pallidus, substantia nigra, subthalamic nucleus. Functions: motor control, habit learning, reward processing. Disorders: Parkinson's (dopamine deficit), Huntington's (caudate degeneration), Tourette's syndrome, OCD (hyperactivity).",
    },
    {
      front: "Typical vs. Atypical Antipsychotics",
      back: "Typical (haloperidol, chlorpromazine): High D2 affinity, more EPS/tardive dyskinesia, less metabolic effects. Atypical (risperidone, olanzapine): D2 + 5-HT2A blockade, less EPS, more weight gain/metabolic syndrome, better for negative symptoms. Exception: clozapine most effective but requires blood monitoring.",
    },
    {
      front: "Limbic System Structures",
      back: "Hippocampus (memory consolidation), amygdala (fear/emotion), cingulate cortex (attention/emotion regulation), fornix (connects hippocampus to mammillary bodies), mammillary bodies (memory, damaged in Korsakoff's), septal nuclei (reward). Collectively involved in emotion, memory, motivation.",
    },
    {
      front: "Antidepressant Classes",
      back: "SSRIs (block serotonin reuptake), SNRIs (block serotonin + norepinephrine reuptake), TCAs (block reuptake, antihistamine/anticholinergic effects), MAOIs (block monoamine oxidase, tyramine restriction), Atypicals: bupropion (dopamine/norepinephrine), mirtazapine (alpha-2/5-HT antagonist), trazodone (SARI, sedating).",
    },
    {
      front: "Benzodiazepine Dangers",
      back: "Tolerance develops rapidly. Physical dependence occurs. Withdrawal can be life-threatening (seizures, delirium tremens). Cognitive impairment, especially in elderly (falls, memory). Respiratory depression with alcohol/opioids. Avoid in substance use history. For anxiety, prefer SSRIs/buspirone long-term.",
    },
    {
      front: "Lobes of Cerebral Cortex",
      back: "Frontal: executive function, motor, personality, Broca's area. Parietal: somatosensory, spatial awareness. Temporal: auditory, memory (hippocampus), language comprehension (Wernicke's). Occipital: visual processing. Insular cortex: interoception, emotion, addiction.",
    },
    {
      front: "Mood Stabilizers",
      back: "Lithium (gold standard, narrow therapeutic window, monitor kidneys/thyroid). Valproate (hepatotoxic, teratogenic, good for mania). Carbamazepine (blood monitoring, enzyme inducer). Lamotrigine (better for depression, slow titration for rash risk). Atypical antipsychotics increasingly used.",
    },
    {
      front: "Long-Term Potentiation (LTP)",
      back: "Persistent strengthening of synapses following repeated activation. Key mechanism: NMDA receptor activation → calcium influx → more AMPA receptors inserted → stronger connection. Underlies learning and memory, especially in hippocampus. Opposite process: Long-Term Depression (LTD) weakens synapses.",
    },
    {
      front: "Neuroimaging Techniques",
      back: "Structural MRI: anatomy (gray/white matter). fMRI: brain activity via BOLD signal (blood oxygenation), good spatial resolution. PET: metabolism/neurotransmitters via radioactive tracers. EEG: electrical activity, excellent temporal resolution, poor spatial. MEG: magnetic fields from neural activity. DTI: white matter tracts.",
    },
    {
      front: "Sleep Architecture",
      back: "Stage N1 (light, theta waves) → N2 (spindles, K-complexes, 50% of sleep) → N3 (slow-wave/delta, deep, restorative) → REM (dreaming, atonia, EEG like waking). Cycles ~90 min. More deep sleep early night, more REM toward morning. REM rebound after deprivation.",
    },
    {
      front: "Extrapyramidal Symptoms (EPS)",
      back: "Side effects of D2 blockade in nigrostriatal pathway. Acute dystonia (muscle spasms, hours-days), akathisia (restlessness), parkinsonism (tremor, rigidity, bradykinesia), tardive dyskinesia (late-onset, potentially irreversible movements). More common with typical antipsychotics. Treat with anticholinergics (benztropine) or reduce dose.",
    },
    {
      front: "Neurotransmitter Synthesis",
      back: "Dopamine/norepinephrine: Tyrosine → L-DOPA → Dopamine → Norepinephrine → Epinephrine. Serotonin: Tryptophan → 5-HTP → Serotonin → Melatonin (in pineal). GABA: Glutamate → GABA (via glutamic acid decarboxylase). Acetylcholine: Choline + Acetyl-CoA → ACh (via choline acetyltransferase).",
    },
    {
      front: "Brainstem Components",
      back: "Midbrain: substantia nigra, VTA, superior/inferior colliculi, cerebral aqueduct. Pons: relays info, sleep, respiration. Medulla: autonomic functions (heart rate, breathing), cranial nerves, decussation. Reticular formation throughout: arousal, RAS. Damage = coma, locked-in syndrome, or death.",
    },
    {
      front: "Serotonin Syndrome vs. NMS",
      back: "Serotonin Syndrome: hyperreflexia, clonus, hyperthermia, agitation, diarrhea. Cause: excess serotonin (SSRI + MAOI, tramadol). Treatment: discontinue, benzodiazepines, cyproheptadine. NMS: rigidity, hyperthermia, altered consciousness, elevated CK. Cause: antipsychotics. Treatment: stop drug, dantrolene, bromocriptine. Both medical emergencies.",
    },
    {
      front: "Glutamate Receptors",
      back: "NMDA: voltage-gated, Ca++ permeable, requires glycine co-agonist, blocked by Mg++ at rest, critical for LTP. Blocked by ketamine (dissociative anesthetic), PCP (hallucinogen). NMDA hypofunction linked to schizophrenia. AMPA: fast excitatory transmission. Metabotropic (mGluR): slower, modulatory effects.",
    },
    {
      front: "Addiction Neurobiology",
      back: "All drugs of abuse increase dopamine in nucleus accumbens (mesolimbic reward pathway). Repeated use: neuroadaptations, tolerance, sensitization, downregulation of dopamine receptors. Prefrontal cortex (impulse control) weakened. Stress systems (CRH) hyperactive. Withdrawal = negative affective state. Relapse risk from cues (context), stress, priming doses.",
    },
    {
      front: "Action Potential Process",
      back: "Resting: -70mV (Na+/K+ pump). Threshold reached (~-55mV) → Depolarization: voltage-gated Na+ channels open, Na+ influx → +40mV. Repolarization: Na+ channels close, K+ channels open, K+ efflux. Hyperpolarization (undershoot). Return to resting. All-or-none principle. Travels down axon, can't reverse (refractory period).",
    },
    {
      front: "Cortisol Effects",
      back: "Acute stress: mobilizes energy (glucose), enhances memory consolidation, suppresses immune/reproductive systems. Chronic elevation: hippocampal atrophy (impaired neurogenesis), weakened immune function, cardiovascular damage, insulin resistance, depression. Measured via salivary cortisol, dexamethasone suppression test. HPA axis dysregulation in depression, PTSD.",
    },
    {
      front: "Medications for Substance Use",
      back: "Alcohol: naltrexone (opioid antagonist, reduces craving), acamprosate (modulates glutamate), disulfiram (aversive). Opioids: methadone/buprenorphine (maintenance), naltrexone (antagonist), naloxone (overdose reversal). Tobacco: varenicline (partial nicotinic agonist), bupropion, nicotine replacement. No FDA meds for stimulant use disorder.",
    },
    {
      front: "White Matter vs. Gray Matter",
      back: "Gray matter: neuron cell bodies, dendrites, synapses. Found in cortex surface, subcortical nuclei. White matter: myelinated axons connecting regions. Found in deeper cortex, corpus callosum, internal capsule. Myelin (oligodendrocytes in CNS) appears white, speeds transmission. Demyelination (MS) disrupts connectivity, causes varied neurological symptoms.",
    },
    {
      front: "Frontal Lobe Syndromes",
      back: "Dorsolateral PFC: executive dysfunction, apathy, perseveration. Orbitofrontal: disinhibition, impulsivity, personality change (Phineas Gage). Medial frontal: akinetic mutism, loss of initiative. Frontal release signs: primitive reflexes (grasp, suck, snout) reappear with frontal damage. Assessed with Wisconsin Card Sort, Stroop, Trail Making, verbal fluency.",
    },
    {
      front: "Cholinergic System",
      back: "Basal forebrain (nucleus basalis) → cortex/hippocampus: learning, memory (depleted in Alzheimer's). Brainstem → thalamus: arousal. Nicotinic receptors: fast, at NMJ. Muscarinic receptors: slow, CNS effects. Cholinesterase inhibitors (donepezil) increase ACh in Alzheimer's. Anticholinergics cause confusion, especially in elderly.",
    },
    {
      front: "Neurodevelopment Timeline",
      back: "Neurogenesis (prenatal), migration, differentiation → synaptic proliferation (peaks toddlerhood) → pruning (childhood-adolescence, 'use it or lose it') → myelination (continues into 20s, frontal last). Sensitive periods for language, sensory systems. Adolescent brain: limbic maturation before PFC = risk-taking. Disruption → neurodevelopmental disorders.",
    },
  ],
};
