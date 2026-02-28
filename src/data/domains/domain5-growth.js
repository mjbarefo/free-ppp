export const growthDomain = {
  id: "growth",
  name: "Growth & Lifespan Development",
  weight: 12,
  color: "#1EA85F",
  icon: "🌱",
  description: "Developmental psychology across the lifespan",
  topics: [
    "Prenatal development and teratogens",
    "Attachment theory (Bowlby, Ainsworth)",
    "Erikson's psychosocial stages",
    "Cognitive development (Piaget, Vygotsky)",
    "Moral development (Kohlberg, Gilligan)",
    "Adolescent identity development",
    "Adult development and aging",
    "Death, dying, and bereavement (Kübler-Ross)",
    "Emerging adulthood (Arnett)",
    "Theory of mind development",
    "Executive function development",
    "Gender identity development",
    "Resilience and protective factors across development",
    "Goodness of fit (temperament × environment)",
    "Language development milestones and theories",
    "Parenting styles (Baumrind) and cultural considerations",
    "Infant sensory and motor development",
    "Adolescent brain development and risk-taking",
    "Cognitive changes in normal aging vs. dementia",
    "Bronfenbrenner's ecological systems theory",
  ],
  questions: [
    {
      q: "In Ainsworth's Strange Situation, a child who shows distress upon separation, seeks proximity upon reunion but then pushes the caregiver away, is classified as:",
      options: [
        "Securely attached",
        "Avoidant/insecure",
        "Ambivalent/resistant",
        "Disorganized",
      ],
      correct: 2,
      explanation:
        "Ambivalent/resistant (Type C) infants are highly distressed upon separation and show approach-avoidance behavior upon reunion—seeking contact but also displaying anger and resistance. This pattern is associated with inconsistent caregiving.",
    },
    {
      q: "According to Erikson, the primary psychosocial crisis of adolescence is:",
      options: [
        "Industry vs. Inferiority",
        "Identity vs. Role Confusion",
        "Intimacy vs. Isolation",
        "Generativity vs. Stagnation",
      ],
      correct: 1,
      explanation:
        "Erikson identified Identity vs. Role Confusion as the central crisis of adolescence (ages 12-18). Adolescents explore who they are, their values, and their future direction. Successful resolution leads to a strong sense of identity.",
    },
    {
      q: "Vygotsky's Zone of Proximal Development (ZPD) refers to:",
      options: [
        "Tasks a child can perform independently",
        "The distance between what a child can do alone and what they can do with guidance",
        "The maximum cognitive potential a child can reach",
        "The stage of development where formal operational thought emerges",
      ],
      correct: 1,
      explanation:
        "The ZPD represents the gap between a child's independent problem-solving ability and their potential level of performance with guidance from a more skilled partner (scaffolding). Learning is most effective when instruction targets this zone.",
    },
    {
      q: "In Kohlberg's theory of moral development, reasoning based on universal ethical principles represents which level?",
      options: [
        "Preconventional",
        "Conventional",
        "Postconventional",
        "Autonomous",
      ],
      correct: 2,
      explanation:
        "Postconventional morality (Level 3) involves reasoning based on abstract ethical principles and social contracts. Stage 5 emphasizes social contracts and individual rights; Stage 6 involves universal ethical principles that may transcend laws.",
    },
    {
      q: "Which of the following teratogens is associated with Fetal Alcohol Syndrome (FAS)?",
      options: [
        "Tobacco",
        "Alcohol",
        "Cocaine",
        "Rubella",
      ],
      correct: 1,
      explanation:
        "Prenatal alcohol exposure can cause Fetal Alcohol Syndrome, characterized by growth deficiency, facial abnormalities (smooth philtrum, thin upper lip), and central nervous system dysfunction including cognitive impairments. FAS is the leading preventable cause of intellectual disability. No safe level of alcohol consumption during pregnancy has been established.",
    },
    {
      q: "According to Marcia's identity status model, an adolescent who has explored alternatives and made commitments is in which status?",
      options: [
        "Identity diffusion",
        "Identity foreclosure",
        "Identity moratorium",
        "Identity achievement",
      ],
      correct: 3,
      explanation:
        "Marcia expanded Erikson's identity theory with four statuses based on exploration and commitment: Identity Achievement (explored + committed), Moratorium (exploring, not yet committed), Foreclosure (committed without exploration), and Diffusion (neither exploring nor committed). Achievement status is associated with the best psychological outcomes.",
    },
    {
      q: "Normal cognitive changes in late adulthood typically include all of the following EXCEPT:",
      options: [
        "Slower processing speed",
        "Decline in crystallized intelligence",
        "Increased difficulty with divided attention",
        "Decline in episodic memory",
      ],
      correct: 1,
      explanation:
        "Crystallized intelligence (accumulated knowledge and verbal skills) typically remains stable or even increases with age. Fluid intelligence (problem-solving, processing speed), episodic memory, working memory, and divided attention show age-related declines. This distinction is important for differentiating normal aging from pathological decline.",
    },
    {
      q: "Kübler-Ross's five stages of dying include all of the following EXCEPT:",
      options: [
        "Denial",
        "Bargaining",
        "Despair",
        "Acceptance",
      ],
      correct: 2,
      explanation:
        "Kübler-Ross's stages are: Denial, Anger, Bargaining, Depression, and Acceptance (DABDA). Important caveats: stages are not linear or universal, many people don't experience all stages, and the model has been criticized for being prescriptive. Modern approaches emphasize individual grief trajectories and cultural variations in mourning.",
    },
    {
      q: "Harlow's research with rhesus monkeys demonstrated that infant attachment is primarily based on:",
      options: [
        "Feeding and nutritional needs",
        "Contact comfort and warmth",
        "Classical conditioning",
        "Genetic predisposition alone"
      ],
      correct: 1,
      explanation: "Harlow's studies challenged behaviorist theories by showing that infant monkeys preferred cloth 'mothers' providing contact comfort over wire 'mothers' providing food. This demonstrated that attachment is based on comfort, security, and social needs—not just feeding. Monkeys raised with only wire mothers showed severe social/emotional deficits. This research revolutionized understanding of attachment and supported Bowlby's theory. Critical for understanding maternal deprivation effects and importance of early caregiving quality."
    },
    {
      q: "Theory of Mind (ToM), typically developing around age 4-5, refers to:",
      options: [
        "The ability to understand that others have mental states (beliefs, desires, intentions) different from one's own",
        "The development of abstract reasoning abilities",
        "The capacity for metacognitive awareness",
        "The emergence of moral reasoning"
      ],
      correct: 0,
      explanation: "Theory of Mind is understanding that others have their own mental states—thoughts, beliefs, knowledge, desires—that differ from one's own and may be false. Classic test: False-belief task (Sally-Anne). Typically emerges 4-5 years. Precursors: joint attention (9-12 months), pretend play (18-24 months). Impaired in ASD (Baron-Cohen's mind-blindness theory). Enables empathy, deception, complex social interaction. Continues developing through childhood and adolescence (second-order ToM: 'He thinks that she thinks...')."
    },
    {
      q: "According to Baumrind's parenting styles, children of AUTHORITATIVE parents (high warmth/high control) typically show:",
      options: [
        "Low self-esteem and poor social skills",
        "Rebellion and acting out",
        "High self-esteem, social competence, and academic achievement",
        "Dependency and lack of initiative"
      ],
      correct: 2,
      explanation: "Authoritative parenting (high warmth/responsiveness + high control/demandingness) produces best outcomes: self-esteem, competence, achievement, social skills. Contrast: Authoritarian (low warmth, high control) → obedient but low self-esteem, anxiety. Permissive (high warmth, low control) → poor self-regulation, entitlement. Uninvolved (low warmth, low control) → worst outcomes. Cultural variations exist—authoritarian may function differently in collectivist cultures. Maccoby & Martin expanded to four styles adding uninvolved."
    },
    {
      q: "Separation anxiety in typically developing infants PEAKS at approximately:",
      options: [
        "3 months",
        "6 months",
        "12-15 months",
        "24 months"
      ],
      correct: 2,
      explanation: "Separation anxiety (distress when separated from primary caregiver) emerges around 6-8 months, peaks at 12-15 months, then gradually declines through toddlerhood. Reflects secure attachment and object permanence (knowing caregiver exists when out of sight). Stranger anxiety follows similar trajectory, emerging 6-8 months. Persistent/severe separation anxiety beyond age 3-4 may indicate Separation Anxiety Disorder. Cultural variation in expression and acceptability of distress."
    },
    {
      q: "Telegraphic speech, characteristic of toddlers around 18-24 months, is BEST exemplified by:",
      options: [
        "Single-word utterances like 'mama' or 'ball'",
        "Two-word combinations omitting function words: 'want cookie' or 'daddy go'",
        "Full grammatical sentences",
        "Babbling sounds without meaning"
      ],
      correct: 1,
      explanation: "Telegraphic speech: two-word utterances containing mainly content words (nouns, verbs) while omitting function words (articles, prepositions). Examples: 'more juice,' 'doggie bark,' 'mommy shoe.' Precedes this: one-word stage (holophrastic, 12-18 months). Follows: rapid vocabulary growth and grammatical complexity (2-3 years). By age 5, most children use complex grammar. Delayed language development warrants evaluation for hearing loss, ASD, developmental language disorder."
    },
    {
      q: "According to developmental neuroscience, synaptic pruning during adolescence is MOST prominent in the:",
      options: [
        "Brainstem",
        "Cerebellum",
        "Prefrontal cortex",
        "Spinal cord"
      ],
      correct: 2,
      explanation: "Adolescent brain development involves dramatic synaptic pruning and myelination, especially in prefrontal cortex (continues into mid-20s). Earlier maturation of limbic system (emotion, reward: nucleus accumbens, amygdala) creates imbalance—heightened reward-seeking/emotion with incomplete impulse control. Explains adolescent risk-taking, peer influence sensitivity, emotional intensity. 'Use it or lose it'—frequently used synapses strengthened, unused pruned. Clinical relevance: adolescence is vulnerable period for substance use, trauma, but also opportunity for intervention."
    },
    {
      q: "Crystallized intelligence (Gc) vs. Fluid intelligence (Gf) across the lifespan:",
      options: [
        "Both decline steadily from age 30",
        "Gf peaks in young adulthood and declines; Gc remains stable or increases into older adulthood",
        "Gc declines but Gf increases with age",
        "Neither changes significantly across adulthood"
      ],
      correct: 1,
      explanation: "Cattell-Horn-Carroll theory: Fluid intelligence (novel problem-solving, processing speed, working memory) peaks ~20s, declines gradually. Crystallized intelligence (knowledge, vocabulary, expertise) stable or increases through 60s-70s. This pattern distinguishes normal aging from dementia (both decline in dementia). Wisdom, expertise, accumulated knowledge can compensate for processing declines. Implications: older adults excel at tasks drawing on experience; struggle with novel, speeded, working memory-demanding tasks."
    },
    {
      q: "The concept of 'emerging adulthood' (Arnett) describes individuals aged approximately:",
      options: [
        "13-17",
        "18-25",
        "26-35",
        "36-45"
      ],
      correct: 1,
      explanation: "Emerging adulthood (18-25, or up to late 20s) is characterized by: identity exploration, instability, self-focus, feeling in-between, possibilities/optimism. Not universal—more evident in industrialized societies with prolonged education, delayed marriage/parenthood. Five features distinguish it from adolescence and young adulthood. Clinical relevance: developmental tasks differ from adolescence (identity formation continues, romantic relationship exploration, career experimentation). Some disorders emerge during this period (schizophrenia, bipolar disorder)."
    },
    {
      q: "Vaillant's longitudinal research on adult development identified mature defense mechanisms associated with positive adaptation, including:",
      options: [
        "Denial and repression",
        "Sublimation and humor",
        "Projection and splitting",
        "Acting out and passive aggression"
      ],
      correct: 1,
      explanation: "Vaillant's hierarchy of defenses (based on Grant Study): Mature defenses (sublimation, humor, altruism, suppression, anticipation) → adaptation, mental health. Neurotic (intellectualization, displacement, reaction formation) → moderate adaptation. Immature (projection, acting out, passive aggression) → maladjustment. Psychotic (denial, distortion, delusional projection) → severe pathology. Longitudinal research showed defense maturity predicts life success, relationships, mental health. People tend to use more mature defenses with age (ego development). Clinical target: help clients develop more mature defenses."
    },
    {
      q: "According to Levinson's Seasons of a Man's Life, the transition around age 40-45 involves:",
      options: [
        "Establishing independence from parents",
        "Midlife transition—questioning life structure, reassessing goals, awareness of mortality",
        "Retirement planning",
        "Identity vs. role confusion"
      ],
      correct: 1,
      explanation: "Levinson identified predictable life structure periods and transitions. Midlife transition (40-45): evaluating 'the Dream,' confronting mortality, reassessing career/relationships, asking 'Is this all there is?' Can lead to growth or crisis. Not everyone experiences 'midlife crisis' (popularized but not universal). Succeeding stage: middle adulthood (45-60) involves making peace with choices, generativity. While based on men, later research included women. Contemporary criticism: overgeneralizes, culturally bound, less predictable career/life stages in modern era."
    },
    {
      q: "Gender identity (internal sense of one's gender) typically becomes stable by age:",
      options: [
        "2 years",
        "3-4 years",
        "6-7 years",
        "Adolescence"
      ],
      correct: 2,
      explanation: "Gender identity development stages: Gender identity (awareness of being male/female) emerges 2-3 years. Gender stability (understanding gender is stable over time) ~4-5 years. Gender consistency/constancy (understanding gender remains same despite superficial changes in appearance/behavior) ~6-7 years. Most children express stable gender identity by age 4, but full understanding that gender is permanent develops later (Kohlberg's cognitive-developmental theory). Contrast with gender dysphoria: persistent incongruence between assigned sex and experienced gender. Gender expression varies across cultures/time."
    },
    {
      q: "Selective optimization with compensation (SOC; Baltes & Baltes) describes successful aging through:",
      options: [
        "Maintaining all youthful activities and abilities",
        "Selecting important goals, optimizing performance in those domains, and compensating for losses",
        "Withdrawing from social engagement",
        "Denying age-related changes"
      ],
      correct: 1,
      explanation: "SOC model explains how older adults adapt successfully: Selection (narrowing goals to most important), Optimization (enhancing chosen domains through practice, technology), Compensation (using alternative means when abilities decline). Classic example: pianist Rubinstein reduced repertoire (selection), practiced remaining pieces more (optimization), slowed before fast passages to enhance contrast (compensation). Contrasts with disengagement theory (withdrawal) and activity theory (maintain all activities). Empirically supported model of adaptive aging."
    },
    {
      q: "The concept of 'goodness of fit' (Thomas & Chess) in infant temperament refers to:",
      options: [
        "How well an infant's genetic potential matches environmental stimulation",
        "How well an infant's temperament matches parental expectations and caregiving style",
        "The quality of prenatal care and birth outcomes",
        "Attachment security"
      ],
      correct: 1,
      explanation: "Goodness of fit: compatibility between child's temperament and environmental demands/parental expectations. Poor fit (e.g., difficult temperament with rigid, impatient parent) → behavioral problems. Good fit (e.g., slow-to-warm with patient, adaptive parent) → positive outcomes. Temperament isn't destiny—interaction with environment matters. Thomas & Chess identified temperament dimensions: activity level, rhythmicity, approach/withdrawal, adaptability, intensity, threshold, mood, distractibility, persistence. Three temperament types: easy (40%), difficult (10%), slow-to-warm (15%), mixed (35%). Clinical relevance: help parents understand and adapt to child's temperament."
    },
    {
      q: "According to Piaget, the A-not-B error (searching for a hidden object in location A where previously found, despite seeing it hidden in location B) occurs during which stage?",
      options: [
        "Sensorimotor stage",
        "Preoperational stage",
        "Concrete operational stage",
        "Formal operational stage"
      ],
      correct: 0,
      explanation: "The A-not-B error occurs around 8-12 months during sensorimotor stage, after object permanence begins emerging but before fully developed. Reflects immature working memory, response inhibition (frontal lobe development), and understanding of object permanence. Resolves by ~12 months. Modern research shows infants know object is in B (looking time studies) but can't inhibit prepotent response to A. Diamond's research links to prefrontal cortex maturation. Demonstrates importance of integrating cognitive understanding with motor control."
    },
    {
      q: "According to Piaget, a child who can understand that pouring water from a short, wide glass into a tall, narrow glass does not change the amount of water has achieved:",
      options: [
        "Object permanence",
        "Conservation",
        "Reversibility",
        "Centration"
      ],
      correct: 1,
      explanation: "Conservation is the understanding that quantity remains the same despite changes in appearance. It emerges during the concrete operational stage (7-11 years). Types include conservation of number, mass, volume, and liquid. Requires decentration (attending to multiple dimensions) and reversibility (mental operations can be reversed). Preoperational children fail conservation tasks due to centration (focus on one dimension like height) and lack of reversibility. Conservation is a hallmark achievement distinguishing concrete operational from preoperational thought."
    },
    {
      q: "Piaget's concept of 'egocentrism' in the preoperational stage (2-7 years) refers to:",
      options: [
        "Selfishness and inability to share with others",
        "Inability to take another person's visual or conceptual perspective",
        "Excessive self-focus and narcissism",
        "Preference for playing alone rather than with peers"
      ],
      correct: 1,
      explanation: "Cognitive egocentrism is the inability to differentiate one's own perspective from others'—not selfishness. Classic demonstration: Three Mountains Task (child assumes others see what they see). Children assume others know what they know, see what they see, and want what they want. This limits perspective-taking and communication. Declines with development of theory of mind and concrete operations. Important distinction: cognitive limitation, not moral failing. Contrast with adolescent egocentrism (imaginary audience, personal fable)."
    },
    {
      q: "In Piaget's theory, the ability to mentally manipulate symbols, engage in hypothetical-deductive reasoning, and think about abstract concepts emerges in which stage?",
      options: [
        "Sensorimotor (0-2 years)",
        "Preoperational (2-7 years)",
        "Concrete operational (7-11 years)",
        "Formal operational (11+ years)"
      ],
      correct: 3,
      explanation: "Formal operational thought involves abstract reasoning, hypothesis testing, systematic problem-solving, and propositional thought. Can reason about hypothetical situations ('What if gravity didn't exist?'), use deductive logic, and consider multiple variables systematically. Tested via pendulum problem, combinations problems. Not all adults reach or consistently use formal operations. Cross-cultural research shows cultural/educational factors influence development. Critics argue Piaget overestimated age of acquisition and underestimated domain-specificity of reasoning."
    },
    {
      q: "Vygotsky's concept of 'scaffolding' in child development refers to:",
      options: [
        "Physical structures children climb to develop motor skills",
        "Temporary support provided by more skilled others that is gradually withdrawn as competence increases",
        "The biological foundation for cognitive development",
        "The hierarchical structure of cognitive abilities"
      ],
      correct: 1,
      explanation: "Scaffolding (term from Wood, Bruner, & Ross, building on Vygotsky) describes adjustable support within the Zone of Proximal Development. Skilled partner provides structure, hints, modeling, reducing assistance as learner gains competence. Effective scaffolding: contingent (responsive to learner's level), fading (gradual withdrawal), transfer of responsibility. Applications: education, parent-child interaction, therapy. Contrast with direct instruction (not responsive) or discovery learning (no support). Vygotsky emphasized social/cultural context of learning—cognition develops through social interaction, not just individual exploration."
    },
    {
      q: "The 'critical period' hypothesis for language development, proposed by Lenneberg, suggests that:",
      options: [
        "Language must be acquired before puberty for native-like proficiency",
        "Children should be corrected immediately when making grammatical errors",
        "Bilingualism interferes with language development",
        "Language development requires formal instruction"
      ],
      correct: 0,
      explanation: "Lenneberg proposed a critical period (birth to puberty) during which language acquisition occurs most easily due to brain plasticity. Evidence: feral children (Genie), late-exposed deaf individuals, second language learners show age effects. Modern view: 'sensitive period' more accurate than absolute critical period—learning possible after but more difficult. First language: severe deprivation before ~7 devastating. Second language: earlier better for accent/grammar, but adult learners can achieve high proficiency. Brain lateralization, synaptic pruning contribute. Clinical relevance: early intervention for language delays essential."
    },
    {
      q: "In Bowlby's attachment theory, the 'internal working model' refers to:",
      options: [
        "The infant's cognitive map of the physical environment",
        "Mental representations of self, others, and relationships formed from early attachment experiences",
        "The brain structures responsible for emotional bonding",
        "Genetic predispositions for forming attachments"
      ],
      correct: 1,
      explanation: "Internal working models are cognitive-affective schemas about self-worth, others' reliability, and relationship expectations, formed from early caregiver interactions. Secure attachment → positive model ('I'm worthy, others are trustworthy'). Insecure → negative models. These models influence later relationships, emotion regulation, and mental health. Relatively stable but can change with new relationship experiences (therapy, supportive relationships). Assessed in adults via Adult Attachment Interview (AAI). Links early attachment to adult romantic relationships (Hazan & Shaver), parenting, psychopathology. Not deterministic—continuity moderate, change possible."
    },
    {
      q: "Research on infant perception has shown that newborns prefer to look at:",
      options: [
        "Bright colors over black and white patterns",
        "Face-like patterns over other visual stimuli",
        "Random patterns over organized shapes",
        "Moving objects exclusively"
      ],
      correct: 1,
      explanation: "Newborns show innate preference for face-like configurations (two eyes, nose, mouth arrangement) demonstrated through looking-time studies. Suggests biological preparedness for social interaction. Visual abilities limited at birth: poor acuity (~20/400), preference for high-contrast patterns, limited color vision (develops by 3-4 months). By 2-3 months, recognize mother's face, prefer attractive faces (both infant and adult judges). Face processing: specialized mechanisms (fusiform face area), sensitive period for face expertise. Clinical relevance: atypical face preference in ASD, importance of face-to-face interaction for bonding."
    },
    {
      q: "According to research on infant temperament by Thomas and Chess, 'difficult' babies (10% of sample) are characterized by:",
      options: [
        "Low activity level, withdrawal from new situations, slow adaptation",
        "Irregular biological rhythms, negative mood, intense reactions, slow adaptation to change",
        "Positive mood, regular routines, easy adaptation",
        "High distractibility and short attention span"
      ],
      correct: 1,
      explanation: "Thomas & Chess identified three temperament types based on New York Longitudinal Study: Easy (40%): positive mood, regular, adaptable, low/moderate intensity. Difficult (10%): irregular, withdraw from new, slow to adapt, intense, negative mood. Slow-to-warm (15%): low activity, initial withdrawal, slow adaptation but eventually positive. Mixed (35%). Temperament dimensions: activity, rhythmicity, approach/withdrawal, adaptability, threshold, intensity, mood, distractibility, persistence. Difficult temperament increases risk for behavior problems IF poor goodness-of-fit with environment. With patient, consistent parenting, outcomes can be positive. Temperament has genetic basis but is shaped by environment."
    },
    {
      q: "Motor development milestones in infancy typically follow which sequence?",
      options: [
        "Rolling over → sitting → crawling → standing → walking",
        "Sitting → rolling over → standing → crawling → walking",
        "Crawling → sitting → standing → rolling over → walking",
        "Standing → sitting → crawling → rolling over → walking"
      ],
      correct: 0,
      explanation: "Motor development follows cephalocaudal (head to toe) and proximodistal (center to extremities) patterns. Typical sequence: Lift head (1 month) → Roll over (3-4 months) → Sit with support (4-6 months) → Sit unsupported (6-7 months) → Crawl (7-10 months) → Pull to stand (8-10 months) → Walk with support (9-12 months) → Walk independently (12-15 months). Individual variation is normal. Concerns if not walking by 18 months. Some infants skip crawling (scoot, shuffle). Cultural practices influence timing (e.g., Kenyan infants walk earlier with deliberate motor training). Developmental coordination disorder if significant delays."
    },
    {
      q: "The 'visual cliff' experiment (Gibson & Walk) demonstrated that:",
      options: [
        "Infants have innate depth perception and fear of heights",
        "Depth perception is entirely learned through experience",
        "Infants cannot perceive depth until age 2",
        "Visual perception is unrelated to motor development"
      ],
      correct: 0,
      explanation: "Visual cliff apparatus: glass-covered platform with shallow side and 'deep' side (visual drop-off). Crawling infants (6-9 months) refuse to cross deep side even when mothers encourage, demonstrating depth perception. Younger infants (pre-crawling) show physiological responses (heart rate changes) to depth but no avoidance. Suggests depth perception develops early but behavioral response requires locomotion experience. Interplay of biology (visual perception) and experience (locomotor development). Modern research: perception-action coupling—motor abilities influence cognitive development. Fear of heights emerges with crawling experience, not just age."
    },
    {
      q: "Elkind's concept of 'adolescent egocentrism' includes which two components?",
      options: [
        "Identity diffusion and identity foreclosure",
        "Imaginary audience and personal fable",
        "Preconventional and conventional morality",
        "Industry and inferiority"
      ],
      correct: 1,
      explanation: "Adolescent egocentrism: heightened self-consciousness and belief in one's uniqueness. Two components: 1) Imaginary audience: belief that others are constantly watching and judging ('Everyone will notice my pimple'). Explains self-consciousness, conformity to peer norms. 2) Personal fable: belief in one's uniqueness and invulnerability ('It won't happen to me,' 'No one understands me'). Contributes to risk-taking. Results from new formal operational abilities (thinking about thinking) combined with immature perspective-taking. Decreases in late adolescence as metacognition matures. Clinical relevance: understanding adolescent behavior, risk-taking intervention."
    },
    {
      q: "Erikson's stage of 'Generativity vs. Stagnation' during middle adulthood primarily involves:",
      options: [
        "Establishing intimate romantic relationships",
        "Forming a stable identity",
        "Contributing to society and guiding the next generation",
        "Achieving physical independence from parents"
      ],
      correct: 2,
      explanation: "Generativity vs. Stagnation (middle adulthood, ~40-65): Generativity involves productivity, creativity, caring for others, contributing to society through parenting, work, mentoring, community involvement. Successful resolution → sense of accomplishment and legacy. Stagnation → self-absorption, lack of growth, feeling unproductive. Not limited to biological parenting—teaching, mentoring, volunteering count. McAdams expanded: generative concern, commitment, action, narrative. Modern lifespan theorists note timing varies (delayed parenthood shifts tasks). Clinical applications: midlife satisfaction, meaning-making, addressing stagnation in therapy."
    },
    {
      q: "Baumrind's research found that which parenting style was associated with the WORST child outcomes?",
      options: [
        "Authoritative",
        "Authoritarian",
        "Permissive",
        "Uninvolved"
      ],
      correct: 3,
      explanation: "Uninvolved/neglectful parenting (low warmth, low control) produces worst outcomes: low self-esteem, poor academic achievement, behavioral problems, delinquency, substance abuse, attachment issues. Reflects parental disengagement—unresponsive to child's needs, few demands/expectations. May result from parental depression, stress, substance use. Children feel unloved, unimportant. Contrast: Authoritative (best outcomes), Authoritarian (obedient but anxious/low self-esteem), Permissive (poor self-regulation but warm relationship). Maccoby & Martin added uninvolved to Baumrind's original three styles. Clinical intervention targets: parenting skills, parental mental health, family support systems."
    },
    {
      q: "Kohlberg's Stage 3 of moral development ('Good boy/Good girl' orientation) is characterized by:",
      options: [
        "Obedience to avoid punishment",
        "Following rules to maintain social order",
        "Seeking approval and maintaining relationships through conformity to social expectations",
        "Reasoning based on universal ethical principles"
      ],
      correct: 2,
      explanation: "Stage 3 (Interpersonal Concordance): Conventional level morality focused on being 'good' to gain approval and maintain relationships. Right action = what pleases others, living up to expectations, having good motives. 'Golden Rule' thinking. Common in adolescents and many adults. Contrast: Stage 2 (instrumental exchange—'you scratch my back'), Stage 4 (law and order—society-wide rules), Stage 5 (social contract). Kohlberg assessed via moral dilemmas (Heinz dilemma). Criticisms: male bias (Gilligan), cultural bias (individualist), reasoning ≠ behavior. Nevertheless, influential framework for understanding moral development progression."
    },
    {
      q: "According to Ainsworth, infants classified as 'disorganized' (Type D) in the Strange Situation demonstrate:",
      options: [
        "Consistent avoidance of the caregiver",
        "Consistent ambivalent behavior toward the caregiver",
        "Contradictory, confused, or apprehensive behaviors without consistent strategy",
        "Age-appropriate exploration and comfort-seeking"
      ],
      correct: 2,
      explanation: "Disorganized attachment (Main & Solomon, added to Ainsworth's ABC): contradictory behaviors (approach then avoid), confusion, apprehension, freezing, disorientation. Lack coherent attachment strategy. Associated with: frightened/frightening caregiver behavior, maltreatment, maternal trauma/unresolved loss, disrupted caregiving. Highest risk category: predicts psychopathology, dissociation, behavior problems. Represents breakdown of attachment behavioral system—caregiver is both source of fear and potential safety (unsolvable paradox). Assessed in AAI as 'unresolved' trauma/loss. Clinical target: trauma-informed parenting interventions (Circle of Security, CPP)."
    },
    {
      q: "The 'still face' paradigm (Tronick) demonstrates that infants:",
      options: [
        "Prefer strangers to familiar caregivers",
        "Are distressed by lack of caregiver responsiveness and actively attempt to re-engage",
        "Show no reaction to changes in caregiver behavior",
        "Cannot detect changes in facial expressions before age 1"
      ],
      correct: 1,
      explanation: "Still face paradigm: Mother engages normally, then becomes unresponsive (neutral face, no vocalizing), then re-engages. Infants (3+ months) show distress, gaze aversion, increased fussiness, attempts to elicit response (smiling, vocalizing, reaching). Demonstrates: 1) Early expectations for social reciprocity, 2) Active role in interaction regulation, 3) Sensitivity to caregiver responsiveness, 4) Infant emotion regulation strategies. Atypical responses (no distress or no recovery) may indicate risk. Relevant to: maternal depression effects, attachment development, infant social expectations. Shows infants aren't passive—actively participate in relationship."
    },
    {
      q: "Failure to thrive (FTT) in infancy can result from:",
      options: [
        "Only organic medical causes",
        "Only psychosocial deprivation",
        "Either organic factors (medical issues) or non-organic factors (inadequate nutrition/care) or both",
        "Genetic factors exclusively"
      ],
      correct: 2,
      explanation: "Failure to thrive: weight/growth falls below expected trajectory. Three types: 1) Organic: medical causes (malabsorption, cardiac issues, metabolic disorders), 2) Non-organic: inadequate nutrition due to poverty, neglect, feeding problems, caregiver stress/mental health, 3) Mixed (both). Comprehensive assessment needed: medical workup, feeding observation, developmental assessment, family psychosocial factors. Intervention: nutritional support, feeding therapy, addressing underlying medical issues, parenting support, treating caregiver mental health. Severe cases: hospitalization. Developmental consequences if prolonged: cognitive delays, attachment issues. Early intervention improves outcomes."
    },
    {
      q: "According to Gilligan's theory, women's moral reasoning tends to emphasize:",
      options: [
        "Abstract justice and individual rights",
        "Care, relationships, and responsibility for others",
        "Obedience to authority",
        "Self-interest and personal gain"
      ],
      correct: 1,
      explanation: "Gilligan critiqued Kohlberg's theory as reflecting male perspective emphasizing justice, rights, autonomy. Proposed women's moral development emphasizes care ethics: relationships, responsibility, prevention of harm, contextual thinking. Three levels of care reasoning: 1) Self-interest, 2) Self-sacrifice (goodness as caring for others), 3) Integration (care for self and others). Transitions involve reconsidering selfishness vs. responsibility. Modern perspective: both justice and care orientations used by both genders depending on context/culture. Expanded moral psychology beyond rights-based reasoning. Influential in feminist psychology, relational-cultural therapy."
    },
    {
      q: "Executive function skills, which develop throughout childhood and adolescence, include:",
      options: [
        "Only memory abilities",
        "Working memory, inhibitory control, and cognitive flexibility",
        "Reading and writing skills",
        "Social skills and emotional awareness"
      ],
      correct: 1,
      explanation: "Executive functions (EF): higher-order cognitive processes controlling thought and action. Three core components: 1) Working memory (holding/manipulating information), 2) Inhibitory control (suppressing prepotent responses, resisting distraction), 3) Cognitive flexibility (shifting perspectives, adapting). Develop gradually through childhood into early adulthood (prefrontal cortex maturation). Enable planning, problem-solving, self-regulation. Assessed via: Stroop test, Wisconsin Card Sorting, digit span backward, go/no-go tasks. Impairments in: ADHD, ASD, brain injury, normal aging (some decline). Malleable: interventions (computerized training, martial arts, mindfulness) show promise. Predict academic achievement, social competence."
    },
    {
      q: "Puberty is initiated by the release of gonadotropin-releasing hormone (GnRH) from the:",
      options: [
        "Pituitary gland",
        "Gonads (testes or ovaries)",
        "Hypothalamus",
        "Adrenal glands"
      ],
      correct: 2,
      explanation: "Puberty cascade: Hypothalamus releases GnRH → Pituitary releases LH and FSH → Gonads produce sex hormones (testosterone/estrogen) → Secondary sex characteristics, growth spurt, reproductive maturation. Timing: girls typically 8-13 (menarche ~12-13), boys 9-14. Individual/ethnic variation. Earlier onset in recent decades (better nutrition, obesity, endocrine disruptors). Timing matters psychologically: Early maturing girls at risk (older peers, dating, body image, depression, risky behavior). Late maturing boys at risk (peer status, athletics). Precocious puberty (before age 8/9) or delayed puberty (no signs by 13/14) warrant evaluation."
    },
    {
      q: "The concept of 'scaffolding' in language development, where adults adjust their speech to slightly above the child's current level, is most consistent with:",
      options: [
        "Skinner's operant conditioning theory",
        "Chomsky's nativist theory",
        "Vygotsky's sociocultural theory",
        "Piaget's cognitive-developmental theory"
      ],
      correct: 2,
      explanation: "Vygotsky's sociocultural theory emphasizes social interaction and cultural tools in development. Language development occurs through social interaction within ZPD—adults provide scaffolded support. Contrast theoretical perspectives: Skinner (operant conditioning—reinforcement of sounds/words), Chomsky (innate Language Acquisition Device, universal grammar), Piaget (language reflects cognitive development). Modern consensus: interactionist—biological preparedness (Chomsky) + environmental input (Skinner) + social interaction (Vygotsky). 'Motherese'/infant-directed speech (higher pitch, exaggerated intonation, simpler syntax) may scaffold language learning. Vygotsky emphasizes language as cultural tool transforming thought."
    },
    {
      q: "Research on same-sex parenting has found that children raised by same-sex parents:",
      options: [
        "Show significantly worse developmental outcomes than children of opposite-sex parents",
        "Show comparable developmental outcomes to children of opposite-sex parents",
        "Always develop gender identity confusion",
        "Cannot form secure attachments"
      ],
      correct: 1,
      explanation: "Decades of research (American Psychological Association, American Academy of Pediatrics) show children of same-sex parents have comparable outcomes on: cognitive development, emotional adjustment, social relationships, gender identity, sexual orientation. What matters: quality of parenting, family relationships, stability, resources—not parental sexual orientation. Children may face stigma/discrimination (minority stress) but this reflects societal prejudice, not parenting quality. Studies control for selection factors. Includes adoption, donor conception, previous heterosexual relationships. Important for expert testimony in custody/adoption cases. Science clearly refutes assumptions about harmful effects."
    },
    {
      q: "The term 'emerging adulthood' coined by Arnett refers to ages 18-25 (or late 20s) in industrialized societies and is characterized by all EXCEPT:",
      options: [
        "Identity exploration in work and relationships",
        "Feeling 'in-between' adolescence and adulthood",
        "Having achieved full adult stability and commitment",
        "Possibilities and optimism about the future"
      ],
      correct: 2,
      explanation: "Emerging adulthood characterized by: 1) Identity exploration (career, worldview, relationships), 2) Instability (frequent changes in residence, jobs, relationships), 3) Self-focus (between dependence on parents and commitment to others), 4) Feeling in-between (not adolescent, not fully adult), 5) Possibilities/optimism. NOT characterized by stability—quite the opposite. Cultural variation: more evident in societies with extended education, delayed marriage/parenthood. Not a universal life stage. Some critics note class/ethnic differences (working-class emerging adults face earlier constraints). Distinct developmental tasks from adolescence. Clinical relevance: different treatment considerations (autonomy development, identity formation)."
    },
    {
      q: "According to research on cognitive aging, which type of memory shows the LEAST age-related decline?",
      options: [
        "Episodic memory (memory for specific events)",
        "Working memory",
        "Semantic memory (general knowledge and facts)",
        "Prospective memory (remembering to do things)"
      ],
      correct: 2,
      explanation: "Memory aging patterns: Most decline: Episodic memory (especially source/context memory), working memory, prospective memory (time-based worse than event-based), processing speed. Least decline: Semantic memory (vocabulary, general knowledge), procedural memory (skills), implicit memory, recognition (better than recall). Explains why older adults maintain wisdom and expertise but struggle with new learning and recall. Mechanisms: frontal lobe/hippocampal changes, decreased processing speed, less efficient encoding strategies. Interventions: mnemonic strategies, physical exercise, cognitive engagement, social activity. Distinguish normal aging from MCI/dementia (more severe, progressive, functional impairment)."
    },
    {
      q: "Carstensen's Socioemotional Selectivity Theory suggests that older adults:",
      options: [
        "Become isolated and withdrawn from all social relationships",
        "Prioritize emotionally meaningful relationships over expanding social networks",
        "Focus exclusively on acquiring new knowledge",
        "Experience declining emotional well-being"
      ],
      correct: 1,
      explanation: "Socioemotional Selectivity Theory: As time perspective shifts (limited future time), goals shift from knowledge acquisition to emotional meaning. Older adults: selectively narrow social networks to close, emotionally meaningful relationships; show positivity bias (remember positive over negative information); better emotion regulation; prioritize present-focused, emotionally satisfying goals. Young adults with limited time horizons (terminal illness) show similar patterns—driven by time perception, not just age. Challenges deficit model of aging—not social withdrawal but adaptive selection. Explains paradox: smaller networks but maintained well-being. Clinical relevance: supporting meaningful relationships, not just social activity volume."
    },
    {
      q: "Research on resilience in children exposed to adversity has identified protective factors including:",
      options: [
        "Complete isolation from stressful experiences",
        "Genetic immunity to stress",
        "Positive relationships with caring adults, self-regulation skills, and sense of efficacy",
        "Denying or avoiding acknowledgment of the adversity"
      ],
      correct: 2,
      explanation: "Resilience: positive adaptation despite significant adversity. Protective factors: Individual: temperament (easy, adaptable), intelligence, self-regulation, problem-solving, self-efficacy, optimism. Relationship: secure attachment, supportive caregiver, mentors, positive peer relationships. Community: effective schools, safe neighborhoods, access to services. Not invulnerability—resilience involves struggle and adaptation. Malleable—interventions can enhance protective factors. Modern stress inoculation view: moderate, manageable stress builds coping (not zero stress or overwhelming stress). Clinical applications: trauma-informed care, strength-based interventions, supporting protective factors (mentoring programs, parenting interventions, social-emotional learning)."
    },
    {
      q: "According to Bronfenbrenner's ecological systems theory, the 'microsystem' includes:",
      options: [
        "Cultural values and ideologies",
        "Interactions between different microsystems (e.g., home-school connection)",
        "Immediate environments with direct interaction (family, school, peers)",
        "Historical time and generational influences"
      ],
      correct: 2,
      explanation: "Bronfenbrenner's ecological systems: Microsystem: immediate environments/relationships (family, school, peers, neighborhood). Direct interaction. Mesosystem: connections between microsystems (parent-teacher communication). Exosystem: settings affecting child indirectly (parent's workplace, school board decisions). Macrosystem: cultural values, laws, ideologies. Chronosystem: environmental changes over time, life transitions, historical context. Emphasizes bidirectional influences and nested contexts. Development results from person-process-context-time interactions. Clinical applications: systems-level interventions, recognizing multiple influences, collaborating across contexts. Influential in community psychology, prevention science, family therapy."
    },
    {
      q: "The 'proximodistal' pattern of physical development means that growth proceeds:",
      options: [
        "From head to toe",
        "From center of body outward to extremities",
        "At the same rate throughout the body",
        "From lower body to upper body"
      ],
      correct: 1,
      explanation: "Two patterns of physical development: 1) Cephalocaudal: head to toe (head control before walking). 2) Proximodistal: center outward (torso/arms before fingers; mass to specific). Infants control shoulders before hands, grasp with whole hand before pincer grasp. Reflects brain/nervous system maturation patterns. Both patterns evident in prenatal development and postnatal growth. Important for understanding typical motor milestone sequences and identifying developmental delays. Occupational therapists assess fine motor (distal) skills progression. Gross motor (proximal) develops earlier than fine motor."
    },
    {
      q: "Identity foreclosure, in Marcia's identity status model, occurs when an adolescent:",
      options: [
        "Explores alternatives and makes commitments",
        "Commits to an identity without exploring alternatives (often adopting parents' values)",
        "Is currently exploring but hasn't committed",
        "Has neither explored nor committed to an identity"
      ],
      correct: 1,
      explanation: "Marcia's four identity statuses (based on Erikson): Achievement (explored + committed): best outcomes, identity clarity. Moratorium (exploring, not committed): active searching, anxiety but healthy. Foreclosure (committed without exploration): adopted others' values (parents, religion) without questioning. Stable but rigid, conforming. May work unless challenged. Diffusion (no exploration, no commitment): aimless, worst outcomes. Foreclosure common in traditional/collectivist cultures (less emphasis on individual exploration). May lead to midlife questioning if unchallenged. Clinical goal: facilitate exploration while respecting cultural context. Statuses can change—not permanent."
    },
    {
      q: "According to Bowlby's attachment theory, the primary evolutionary function of attachment is to:",
      options: [
        "Ensure adequate nutrition for the infant",
        "Provide protection from predators and other dangers",
        "Facilitate cognitive development",
        "Promote language learning"
      ],
      correct: 1,
      explanation: "Bowlby integrated ethology and psychoanalysis: attachment is biologically based behavioral system ensuring infant survival through proximity to protective caregiver. Evolved because vulnerable infants near caregivers survived predation. Attachment behaviors (crying, clinging, following, smiling) activate caregiver's caregiving system. Secure base: explore environment knowing caregiver available. Safe haven: return when threatened. Evolutionary adaptive—infants who maintained proximity had higher survival rates. Explains universal nature of attachment across cultures. Modern neuroscience confirms: attachment regulates stress systems (HPA axis), shapes brain development. Primary function: safety/protection, with secondary benefits (emotion regulation, social development, exploration)."
    },
    {
      q: "The typical age range for stranger anxiety to emerge in infants is:",
      options: [
        "0-3 months",
        "6-8 months",
        "12-15 months",
        "18-24 months"
      ],
      correct: 1,
      explanation: "Stranger anxiety (wariness/fear of unfamiliar people) typically emerges 6-8 months, peaks around 8-12 months, gradually declines in toddlerhood. Timing varies by: temperament (inhibited children more wary), caregiver response, context (familiar vs. unfamiliar setting), stranger behavior (intrusive vs. respectful). Reflects: cognitive development (differentiate familiar/unfamiliar), attachment formation, adaptive wariness. NOT pathological—normal developmental milestone. Contrast: extreme stranger anxiety may indicate insecure attachment or anxiety disorder. Separation anxiety emerges similar timeframe, peaks 12-15 months. Both reflect attachment system functioning and object permanence development."
    },
    {
      q: "In Erikson's theory, the psychosocial crisis of early childhood (ages 3-6) is:",
      options: [
        "Trust vs. Mistrust",
        "Autonomy vs. Shame and Doubt",
        "Initiative vs. Guilt",
        "Industry vs. Inferiority"
      ],
      correct: 2,
      explanation: "Initiative vs. Guilt (preschool, 3-6 years): Children assert power/control through directing play and social interaction. Success → initiative (purpose, leadership). Overcontrol/criticism → guilt (self-doubt, inhibition). Balance: encourage initiative while setting appropriate limits. Oedipal dynamics (Freudian influence) but Erikson emphasized social/cultural factors more. Typical behaviors: pretend play, asking questions, asserting independence. Contrast: Autonomy vs. Shame (toddlers, 1-3): physical independence, 'No!' phase. Industry vs. Inferiority (school-age, 6-12): competence in skills. Each stage builds foundation for later stages."
    },
    {
      q: "Which of the following is TRUE regarding bilingualism in children?",
      options: [
        "Bilingualism causes language delays and confusion",
        "Children should learn one language at a time to avoid interference",
        "Bilingual children may show temporary mixing but eventually differentiate languages and may show cognitive advantages",
        "Only children with high IQ can successfully become bilingual"
      ],
      correct: 2,
      explanation: "Research clearly shows bilingualism does NOT cause language delays, confusion, or cognitive problems. Bilingual children: may show code-mixing (normal developmental phase), eventually differentiate languages, often have comparable or advanced language skills, show cognitive advantages (executive function, metalinguistic awareness, cognitive flexibility). Benefits: cultural connections, career advantages, delayed dementia onset. Best practices: consistent exposure to both languages, sufficient input in each. Simultaneous (from birth) or sequential (after first language established) both successful. Common myth that bilingualism harms development has no empirical support. Important for advising families, especially immigrant and multilingual families."
    },
    {
      q: "The 'social smile' in infants, distinguished from reflexive smiling, typically emerges around:",
      options: [
        "Birth",
        "6-8 weeks",
        "6 months",
        "12 months"
      ],
      correct: 1,
      explanation: "Social smile (smiling in response to social stimuli, especially faces/voices) emerges 6-8 weeks. Reflexive smiling (spontaneous, during sleep) present from birth. Social smile: contingent on social interaction, includes eye contact, important social milestone signaling engagement. Promotes caregiver bonding and interaction. Laughter emerges ~3-4 months. Delayed social smiling (not present by 3 months) may warrant developmental evaluation (autism, visual impairment, depression). Smiling frequency increases across infancy. Cultural universality supports biological basis. Blind infants smile socially at similar ages (not purely learned through visual imitation). Important early social-communicative milestone."
    },
    {
      q: "According to Kohlberg, a person who follows rules to avoid punishment is reasoning at which stage?",
      options: [
        "Stage 1: Punishment and obedience orientation",
        "Stage 2: Instrumental exchange",
        "Stage 3: Good boy/good girl",
        "Stage 4: Law and order"
      ],
      correct: 0,
      explanation: "Stage 1 (Punishment-obedience): Preconventional level. Right = avoiding punishment, obeying authority. Egocentric perspective—can't consider others' viewpoints. Physical consequences determine morality. Common in young children. Stage 2 (Instrumental): self-interest, fair exchange ('you scratch my back'). Stage 3 (Interpersonal concordance): seeking approval, being 'good.' Stage 4 (Law and order): maintaining social order. Stage 5 (Social contract): democratic process, individual rights. Stage 6 (Universal principles): abstract ethics. Most adults function at Stages 3-4. Movement through stages is invariant (can't skip). Moral reasoning improves with cognitive development (perspective-taking, abstract thought) but isn't guaranteed."
    },
    {
      q: "Gender constancy, the understanding that gender is permanent across time and situations, is typically achieved by age:",
      options: [
        "2 years",
        "3-4 years",
        "6-7 years",
        "Puberty"
      ],
      correct: 2,
      explanation: "Gender development stages (Kohlberg's cognitive-developmental theory): Gender identity/labeling (2-3 years): know own gender, label others. Gender stability (4-5 years): gender stable over time ('I'll be a man when I grow up'). Gender constancy/consistency (6-7 years): gender stable across situations despite superficial changes (clothes, hair, activities). Requires concrete operational thought (conservation concept). After constancy, gender stereotyping may intensify (consolidation) then relax. Modern understanding: gender identity (internal sense) vs. gender expression (external presentation). Most children show stable gender identity by 3-4, but full understanding of permanence later. Gender diverse children: persistent, insistent, consistent gender identity differing from assigned sex."
    },
    {
      q: "The term 'overregularization' in language development refers to:",
      options: [
        "Following grammatical rules too strictly, e.g., 'goed' instead of 'went'",
        "Using words too broadly, e.g., calling all animals 'doggie'",
        "Using words too narrowly",
        "Speaking too formally for one's age"
      ],
      correct: 0,
      explanation: "Overregularization: applying grammatical rules too broadly to irregular forms. Examples: 'goed' (go+ed), 'runned,' 'foots,' 'mouses.' Demonstrates active rule learning (not just imitation). U-shaped development: initially say 'went' (memorized), then 'goed' (applying rule), finally 'went' (exception learned). Typically occurs 2-4 years. Shows children extract grammatical patterns. Parents shouldn't overcorrect—normal phase that resolves with exposure. Contrast: Overextension (word meaning too broad: all four-legged = 'doggie'), Underextension (too narrow: only family dog = 'doggie'). Language acquisition involves hypothesis-testing and rule extraction, not just imitation."
    },
    {
      q: "Research on parental divorce and child outcomes shows:",
      options: [
        "Divorce always causes severe long-term psychological damage",
        "Children experience no negative effects from divorce",
        "Initial adjustment difficulties are common, but most children adapt over time; outcomes depend on conflict level, parenting quality, and resources",
        "Only teenagers are affected by parental divorce"
      ],
      correct: 2,
      explanation: "Divorce effects are variable, not uniformly devastating: Short-term (1-2 years): emotional distress, behavioral problems, academic difficulties common. Long-term: most children adjust, but risk for some problems (depression, relationship issues) elevated. Protective factors: low parental conflict, authoritative parenting, adequate resources, social support, minimal changes (school, residence). Risk factors: high conflict, parent psychopathology, economic hardship, multiple transitions (remarriage, moves). High-conflict intact families worse than low-conflict divorce. Focus on reducing exposure to conflict, maintaining parent-child relationships, economic stability. Children vary in resilience. Important: avoid simplistic 'divorce is always bad' or 'divorce has no effects' positions."
    },
    {
      q: "Parten's stages of play development in early childhood progress in which order?",
      options: [
        "Solitary → parallel → associative → cooperative",
        "Cooperative → associative → parallel → solitary",
        "Parallel → solitary → cooperative → associative",
        "All types occur randomly regardless of age"
      ],
      correct: 0,
      explanation: "Parten's play stages: Unoccupied/onlooker (observing, not playing) → Solitary play (alone, unaware of others, 0-2 years) → Parallel play (alongside others, similar activities but not interacting, 2-3 years) → Associative play (interaction, sharing, but no common goal, 3-4 years) → Cooperative play (organized, common goal, role assignments, 4+ years). Sequence reflects social-cognitive development. Later stages don't replace earlier—solitary play continues (can be positive: concentration, creativity). Play develops: sensorimotor (0-2) → symbolic/pretend (2-7) → games with rules (7+). Play is critical for development: social skills, emotion regulation, cognitive growth, creativity. Play therapy utilizes play as communication/intervention medium."
    },
    {
      q: "According to Levinson's theory of adult development, 'The Dream' refers to:",
      options: [
        "Sleep patterns in adulthood",
        "An idealized life vision formed in early adulthood that guides life choices",
        "Unconscious wishes from childhood",
        "Fantasy thinking characteristic of adolescence"
      ],
      correct: 1,
      explanation: "Levinson's 'The Dream': vague vision of self in adult world (career achievement, family life, contributions) formed in early adulthood (late teens/20s). Guides life structure decisions: occupation, relationships, location. Mentors may support Dream development. Midlife transition (40-45) involves evaluating Dream: achieved? Modify? New Dream? Disappointment if unachieved or achieved but unfulfilling. Gender differences: men's Dreams traditionally focused on occupation, women's more complex (career + family). Modern critique: less predictable life structures, diverse life paths. Clinically useful: exploring client's life vision, addressing midlife dissatisfaction, revising goals."
    },
    {
      q: "Teratogens have the greatest effect on organ development during which prenatal period?",
      options: [
        "Germinal period (conception to 2 weeks)",
        "Embryonic period (weeks 3-8)",
        "Fetal period (week 9 to birth)",
        "All periods are equally vulnerable"
      ],
      correct: 1,
      explanation: "Prenatal periods: Germinal (0-2 weeks): implantation. All-or-nothing—damage causes miscarriage or no effect. Embryonic (3-8 weeks): organogenesis (organ formation). MOST vulnerable to structural abnormalities from teratogens. Critical periods for specific organs: heart (weeks 3-6), CNS (3-16), limbs (4-7), eyes (4-9). Fetal (9-birth): growth, CNS continues developing. Teratogens cause functional deficits, minor structural abnormalities. Dose-response relationship: higher exposure = worse effects. No safe level for some (alcohol). Timing determines which structures affected. Clinical counseling: folic acid before conception/early pregnancy prevents neural tube defects."
    },
    {
      q: "The 'rooting reflex' in newborns is:",
      options: [
        "Grasping objects placed in the palm",
        "Turning head toward touch on cheek and opening mouth",
        "Extending arms when startled",
        "Stepping movements when held upright"
      ],
      correct: 1,
      explanation: "Primitive reflexes present at birth, most disappearing 3-6 months (cortical maturation inhibits): Rooting: touch cheek → turn toward, open mouth (feeding). Sucking: object in mouth → suck. Moro (startle): sudden movement → extend arms/legs, then pull in. Grasping (palmar): object in palm → grasp. Babinski: stroke sole → toes fan. Stepping: held upright, feet touch surface → stepping. Tonic neck: head turned → extend arm on that side ('fencing'). Adaptive reflexes (rooting, sucking) support survival. Persistence beyond expected age may indicate neurological issues. Disappearance reflects increasing cortical control over subcortical reflexes."
    },
    {
      q: "Adolescent brain development research shows that the prefrontal cortex, responsible for impulse control and planning, is not fully mature until approximately:",
      options: [
        "Age 12",
        "Age 16",
        "Age 20",
        "Mid-20s"
      ],
      correct: 3,
      explanation: "Prefrontal cortex (PFC) development continues through adolescence into mid-20s (some argue early 30s). PFC functions: planning, impulse control, working memory, abstract reasoning, judgment, metacognition. Gray matter peaks in early adolescence then prunes. Myelination increases (white matter). Limbic system (emotion, reward) matures earlier → imbalance. Heightened reward sensitivity + incomplete impulse control = risk-taking. Explains adolescent behavior: peer influence, novelty-seeking, poor long-term planning. Legal implications: juvenile justice (diminished culpability), minimum drinking age. Individual variation. Not excuse for all behavior but context for understanding. Interventions: structured environments, skill-building, delay high-stakes decisions when possible."
    },
    {
      q: "Widowhood in late adulthood is associated with increased risk of:",
      options: [
        "No health or psychological effects",
        "Depression, loneliness, and mortality (especially in first year)",
        "Only financial difficulties",
        "Cognitive enhancement"
      ],
      correct: 1,
      explanation: "Widowhood effects: Increased risk: depression, loneliness, mortality (especially first 6-12 months—'widowhood effect'), physical health problems, financial strain. Gender differences: men often have worse outcomes (relied on wife for social connections, household management, emotional support). Women more financial strain (historically) but stronger social networks. Protective factors: social support, prior preparation, good physical health, adequate resources, sense of purpose. Grief trajectory: most adapt within 1-2 years, minority develop Prolonged Grief Disorder. Remarriage more common in men. Cultural variation in mourning practices, support systems. Clinical intervention: grief counseling, social support groups, practical assistance, monitoring for complicated grief/depression."
    },
    {
      q: "According to Kübler-Ross's stage model, the five stages of dying are:",
      options: [
        "Denial, Anger, Bargaining, Depression, Acceptance",
        "Shock, Sadness, Anger, Resolution, Growth",
        "Avoidance, Confrontation, Reestablishment",
        "Numbness, Yearning, Disorganization, Reorganization"
      ],
      correct: 0,
      explanation: "Kübler-Ross: DABDA—Denial ('Not me'), Anger ('Why me?'), Bargaining ('If only...'), Depression (grief, loss), Acceptance (peace, preparation). Important caveats: 1) NOT rigid stages—people don't progress linearly, 2) NOT everyone experiences all stages, 3) Can revisit stages, 4) Individual/cultural variation, 5) Originally based on dying patients, often misapplied to grief. Modern view: diverse grief trajectories, no 'right way.' Criticized for being prescriptive ('should reach acceptance'). Nevertheless influential framework. Alternative models: Worden's tasks, Dual-Process Model. Clinical use: normalize reactions, avoid forcing into stages, respect individual process."
    },
    {
      q: "Longitudinal research on personality development in adulthood generally shows:",
      options: [
        "Personality is completely fixed by age 30",
        "Personality changes randomly throughout life",
        "Mean-level increases in conscientiousness and agreeableness, decreases in neuroticism with age",
        "All personality traits decline with age"
      ],
      correct: 2,
      explanation: "Personality across adulthood: Stability: rank-order stability increases (individual differences maintained), especially after 30. Change: Mean-level changes—Conscientiousness and Agreeableness increase, Neuroticism decreases ('maturity principle'). Openness stable or slight decline. Extraversion slight decline. Changes continue into old age (not fixed at 30). Mechanisms: social roles, maturation, life experiences. Most change in young adulthood (identity formation). Individual differences in change: some people change substantially. Implications: personality somewhat malleable, therapy can facilitate change, life experiences matter, but core characteristics relatively stable. Five-Factor Model (Big Five) most researched framework."
    },
    {
      q: "The 'cohort effect' in developmental research refers to:",
      options: [
        "Effects of being tested multiple times",
        "Differences between groups born in different time periods due to historical/cultural experiences",
        "Random sampling error",
        "Effects of aging"
      ],
      correct: 1,
      explanation: "Cohort effect: differences between age groups due to generational experiences rather than aging. Example: older adults score lower on IQ tests—aging or less education/different education? Cross-sectional research confounds age and cohort. Cohort effects: technology exposure, historical events (Depression, wars), educational opportunities, nutrition, cultural values. Solutions: Longitudinal (follow same cohort—but practice effects, attrition) or Sequential designs (follow multiple cohorts). Flynn effect (IQ increases across generations) is cohort effect. Developmental research must disentangle: age effects (maturation), cohort effects (generational), time-of-measurement effects (historical moment). Important for interpreting research on generational differences ('Millennials are...')."
    },
    {
      q: "Infant-directed speech (also called 'motherese' or 'parentese') is characterized by:",
      options: [
        "Complex vocabulary and grammar to challenge the infant",
        "Higher pitch, exaggerated intonation, slower tempo, and simplified grammar",
        "Monotone delivery with adult vocabulary",
        "Exclusively nonverbal communication"
      ],
      correct: 1,
      explanation: "Infant-directed speech (IDS): higher pitch, exaggerated intonation contours, slower tempo, longer pauses, simplified syntax, concrete vocabulary, repetition. Cross-culturally universal (though degree varies). Functions: captures attention, highlights linguistic boundaries (words, phrases), conveys emotion, supports language learning. Infants prefer IDS over adult-directed speech. Correlation between IDS quantity and language development. Not 'baby talk' (incorrect grammar)—simplified but grammatical. Both mothers and fathers use. Responsive IDS (contingent on infant vocalizations) most beneficial. Blind parents use IDS. Debate whether necessary for language learning (normal speech also works) but may optimize learning."
    },
    {
      q: "In the context of bereavement, 'continuing bonds' refers to:",
      options: [
        "Pathological inability to accept death",
        "Maintaining ongoing connection with deceased (memories, sensing presence) while adapting to loss",
        "Remarrying quickly after loss",
        "Denying the death occurred"
      ],
      correct: 1,
      explanation: "Continuing bonds (Klass, Silverman, Nickman): healthy grief often involves maintaining connection to deceased (memories, conversations, sensing presence, honoring legacy) rather than 'letting go' or 'moving on.' Challenges earlier stage models emphasizing detachment. Cultural variation: some cultures emphasize ongoing relationship (ancestor veneration). Western grief therapy historically emphasized 'closure'—now recognized as culturally specific. Continuing bonds adaptive when: doesn't impair functioning, integrated with current life, provides comfort. Maladaptive when: prevents adaptation, interferes with relationships/activities. Balance remembering and adapting. Clinical implication: don't pathologize ongoing connection, assess functionality."
    },
    {
      q: "The concept of 'sensitive period' in development differs from 'critical period' in that:",
      options: [
        "There is no difference between the terms",
        "Sensitive periods are optimal times for development but learning can still occur outside this window, while critical periods have absolute time limits",
        "Critical periods are less important than sensitive periods",
        "Sensitive periods only apply to emotional development"
      ],
      correct: 1,
      explanation: "Critical period: specific time window when development MUST occur or ability is permanently compromised. Hard boundaries. Example: visual system development (congenital cataracts must be corrected early or permanent blindness). Sensitive period: optimal time for development, but learning possible outside window (though more difficult). Softer boundaries. Example: language—easier before puberty but adult learning possible. Modern developmental science: most 'critical periods' actually sensitive periods (plasticity persists but decreases). Ethological examples (imprinting in birds) are critical periods. Human development: mostly sensitive periods with varying degrees of plasticity. Implications: early intervention ideal but later intervention still valuable. Don't despair if 'optimal' window missed."
    },
    {
      q: "According to attachment theory, 'insecure-avoidant' infants in the Strange Situation typically:",
      options: [
        "Show extreme distress at separation and cannot be comforted upon reunion",
        "Show little distress at separation and actively avoid or ignore caregiver upon reunion",
        "Display contradictory and disorganized behaviors",
        "Use caregiver as secure base for exploration"
      ],
      correct: 1,
      explanation: "Insecure-avoidant (Type A) infants show minimal separation distress and actively avoid or ignore caregiver upon reunion (turning away, focusing on toys). May appear independent but this reflects defensive strategy, not security. Associated with rejecting, intrusive, or overstimulating caregiving. Infants learn proximity-seeking unrewarding, so suppress attachment behaviors. Physiologically stressed despite calm appearance (heart rate elevated). Contrast: secure infants seek comfort, ambivalent show anger/resistance, disorganized show contradictory behaviors. Avoidant pattern predicts emotional distance, difficulty with intimacy in later relationships, though not deterministic."
    },
    {
      q: "Longitudinal research on temperament from infancy to adulthood (Kagan, Thomas & Chess) has shown that:",
      options: [
        "Temperament is completely determined by environment and shows no stability",
        "Infant temperament perfectly predicts adult personality",
        "Temperament shows moderate stability over time, with both continuity and change possible",
        "Temperament changes completely at each developmental stage"
      ],
      correct: 2,
      explanation: "Temperament shows moderate stability but is not destiny. Kagan's research on behavioral inhibition: inhibited toddlers more likely to be anxious adolescents/adults (but many change). Thomas & Chess: difficult temperament poses risk but goodness of fit determines outcomes. Continuity: biological basis, individual differences maintained. Change: experience, parenting, deliberate efforts can modify temperamental tendencies. Genetics account for ~40-60% of temperament variance. Implications: early temperament informs risk/protective factors, but intervention effective, diverse pathways possible. Avoid deterministic thinking while recognizing biological contributions."
    },
    {
      q: "The pincer grasp, allowing infants to pick up small objects between thumb and forefinger, typically emerges around:",
      options: [
        "3 months",
        "6 months",
        "9 months",
        "15 months"
      ],
      correct: 2,
      explanation: "Pincer grasp (precise thumb-forefinger opposition) emerges around 9 months. Represents important fine motor milestone. Earlier grasping: palmar grasp (whole hand, 3-4 months), raking (fingers without thumb, 6 months), inferior pincer (thumb-side of finger, 7-8 months). Pincer grasp enables self-feeding (Cheerios), exploration of small objects, tool use. Reflects: cortical maturation, hand-eye coordination, proximal-to-distal development pattern. Delayed development may indicate motor delays, visual problems. Choking hazard awareness important as infants explore small objects. Later refinement: tripod grasp for writing (3-4 years)."
    },
    {
      q: "Levinson's concept of the 'mentor' in early adulthood typically involves:",
      options: [
        "A same-age peer providing friendship",
        "An older, more experienced person providing guidance, support, and facilitation of 'The Dream'",
        "A romantic partner",
        "A professional therapist"
      ],
      correct: 1,
      explanation: "Mentor in Levinson's theory: older (typically 8-15 years), more experienced person who supports young adult's development, especially facilitating pursuit of 'The Dream.' Functions: teacher, sponsor, guide, exemplar, provides counsel and moral support, believes in younger person. Relationship combines aspects of parent and peer (transitional). Important for career development, identity formation. Most common in occupational settings. Gender considerations: women historically had fewer mentors, cross-gender mentoring complex. Mentorship predicts career success, satisfaction. Eventually outgrown as young adult individuates. Modern forms: peer mentoring, multiple mentors, formal mentoring programs."
    },
    {
      q: "Working memory capacity in children:",
      options: [
        "Is fixed at birth and unchangeable",
        "Increases gradually from early childhood through adolescence due to brain maturation and strategy use",
        "Decreases from infancy to adulthood",
        "Develops fully by age 3"
      ],
      correct: 1,
      explanation: "Working memory (holding and manipulating information) increases with age: Infants: limited (1-2 items). Preschool: ~2-3 items. School-age: ~4-5 items. Adolescence: approaching adult levels (~7 items). Mechanisms: 1) Prefrontal cortex maturation, 2) Processing speed increases, 3) Use of memory strategies (rehearsal, chunking), 4) Increased knowledge base (chunking more efficient), 5) Metacognitive awareness. Working memory critical for: complex reasoning, following multi-step instructions, reading comprehension, math. Individual differences predict academic achievement. Training programs show some improvement. Declines again in late adulthood."
    },
    {
      q: "The concept of 'scaffolding' in Vygotsky's theory is most similar to which concept in other developmental theories?",
      options: [
        "Classical conditioning",
        "Piaget's concept of assimilation",
        "Bruner's concept of structured support that is gradually withdrawn",
        "Freud's defense mechanisms"
      ],
      correct: 2,
      explanation: "Scaffolding term coined by Wood, Bruner, & Ross (1976) building on Vygotsky's ZPD concept. Shared features: temporary support, adjusted to learner's level, gradually withdrawn (fading), promotes independence, occurs in social interaction. Both emphasize: adult/expert provides structure, learner actively participates, support responsive to competence level, goal is internalization. Bruner's work operationalized Vygotsky's ideas. Applications: parent-child interaction, teaching, therapy. Effective scaffolding: contingent, collaborative, dialogic. Contrast: Piaget emphasized self-discovery (minimal adult direction), behaviorism emphasized external reinforcement (less focus on joint activity)."
    },
    {
      q: "According to Baltes, 'age-graded influences' on development include:",
      options: [
        "Historical events affecting entire cohorts (wars, economic depression)",
        "Predictable biological and social changes linked to chronological age (puberty, retirement)",
        "Random, idiosyncratic life events (accidents, winning lottery)",
        "Genetic mutations"
      ],
      correct: 1,
      explanation: "Baltes identified three types of influences: Age-graded: normative (predictable), linked to age. Biological: puberty, menopause, sensory decline. Social: school entry, retirement, marriage/parenthood (timing varies culturally but age-linked). History-graded: cohort effects, shared historical events (Great Depression, 9/11, COVID-19). Non-normative: unique to individual, unpredictable (accidents, illness, divorce, winning lottery). Balance of these shifts across lifespan: early development primarily age-graded, middle adulthood more non-normative/history-graded, late adulthood again more age-graded (biological aging). Understanding all three necessary for comprehensive developmental perspective. Explains individual differences in developmental trajectories."
    },
    {
      q: "In Piaget's theory, 'deferred imitation' (imitating an action observed earlier, after a delay) indicates:",
      options: [
        "Poor memory abilities",
        "The emergence of mental representation and symbolic thought",
        "Classical conditioning",
        "Egocentrism"
      ],
      correct: 1,
      explanation: "Deferred imitation emerges around 18-24 months (end of sensorimotor stage). Requires: encoding the observed behavior, storing mental representation, retrieving and reproducing later (without model present). Signals transition from sensorimotor to preoperational stage—symbolic thought emerging. Contrasts with immediate imitation (earlier, doesn't require representation). Classic study: Meltzoff & Moore showed newborns imitate facial expressions, but deferred imitation requires mental representation. Related: object permanence, pretend play, language—all require representational ability. Milestone in cognitive development: thinking about things not perceptually present. Foundation for observational learning, cultural transmission."
    },
    {
      q: "Research on 'emerging adulthood' has found this period is characterized by peak rates of:",
      options: [
        "Marriage and parenthood",
        "Residential stability",
        "Residential change, identity exploration, and risk behaviors",
        "Career stability and retirement planning"
      ],
      correct: 2,
      explanation: "Emerging adulthood (18-25/29) characterized by: highest residential instability (frequent moves—college, jobs, relationships), identity exploration (career experimentation, worldview development, relationship exploration), peak risk behaviors (substance use, risky sex, drunk driving), subjective in-between feeling. Delayed markers of adulthood: marriage, parenthood, career establishment pushed to late 20s/early 30s in industrialized societies. Variability: working-class emerging adults face earlier constraints, cultural variation (less evident in non-industrialized societies). Positives: opportunities for growth, self-focus, exploration. Negatives: instability, anxiety, lack of structure. Mental health concerns: many disorders emerge/worsen during this period."
    },
    {
      q: "Parten's classification of 'associative play' in preschoolers involves:",
      options: [
        "Playing alone without awareness of other children",
        "Playing alongside others with similar materials but no interaction",
        "Interacting, sharing materials, but no common goal or organized activity",
        "Organized play with assigned roles and common goals"
      ],
      correct: 2,
      explanation: "Associative play (ages 3-4): children interact, talk, share materials, influence each other's activities, but no common goal or organized roles. More social than parallel play (similar activities, no interaction) but less structured than cooperative play (common goal, role assignments, organized). Example: children at sand table talking, sharing shovels, commenting on each other's castles, but each building own structure. Represents developmental progression in social competence. Individual differences: shy children may engage in associative play later. Cultural variation: some cultures emphasize cooperative play earlier. All play types can be adaptive at different ages/contexts—solitary play continues through lifespan."
    },
  ],
  flashcards: [
    {
      front: "Erikson's 8 Psychosocial Stages",
      back: "1) Trust vs. Mistrust (infancy) 2) Autonomy vs. Shame/Doubt (toddler) 3) Initiative vs. Guilt (preschool) 4) Industry vs. Inferiority (school-age) 5) Identity vs. Role Confusion (adolescence) 6) Intimacy vs. Isolation (young adult) 7) Generativity vs. Stagnation (middle adult) 8) Integrity vs. Despair (late adult)",
    },
    {
      front: "Attachment Styles (Ainsworth)",
      back: "Secure (Type B): Distressed at separation, comforted at reunion (~60-65%). Avoidant (Type A): Little distress, avoids caregiver at reunion (~20%). Ambivalent (Type C): Very distressed, approach-avoidance at reunion (~10-15%). Disorganized (Type D): Contradictory, confused behaviors (~10-15%).",
    },
    {
      front: "Teratogens",
      back: "Agents that cause birth defects. Examples: Alcohol (FAS), tobacco, cocaine, rubella, thalidomide, radiation, mercury. Effects depend on timing (critical periods), dose, duration, and genetic susceptibility. Most vulnerable during embryonic period (weeks 3-8).",
    },
    {
      front: "Marcia's Identity Statuses",
      back: "Based on exploration × commitment. Achievement: Explored + committed (best outcomes). Moratorium: Exploring, not committed (healthy process). Foreclosure: Committed without exploration (parental values). Diffusion: Neither exploring nor committed (worst outcomes). Extends Erikson's Identity vs. Role Confusion stage.",
    },
    {
      front: "Fluid vs. Crystallized Intelligence (Cattell-Horn)",
      back: "Fluid (Gf): Problem-solving, reasoning, pattern recognition. Peaks in 20s, declines with age. Crystallized (Gc): Accumulated knowledge, vocabulary, verbal skills. Stable or increases with age. Important for distinguishing normal aging from dementia—pathological decline affects both.",
    },
    {
      front: "Bowlby's Attachment Theory - Four Phases",
      back: "1) Preattachment (0-2 months): Indiscriminate social responsiveness. 2) Attachment-in-the-making (2-6 months): Preference for familiar people. 3) Clear-cut attachment (6-24 months): Separation anxiety, secure base, stranger anxiety. 4) Reciprocal relationships (24+ months): Understanding caregiver's needs, negotiation. Internal working models form—templates for future relationships. Secure attachment predicts better outcomes but not deterministic."
    },
    {
      front: "Kohlberg's Moral Development (Detailed)",
      back: "Level 1-Preconventional: Stage 1 (Punishment-obedience), Stage 2 (Instrumental-exchange). Level 2-Conventional: Stage 3 (Good-boy/girl), Stage 4 (Law-and-order). Level 3-Postconventional: Stage 5 (Social contract), Stage 6 (Universal principles-rare). Assessed via moral dilemmas (Heinz). Criticized: male bias (Gilligan-care vs. justice), cultural bias (Western individualism), reasoning vs. action gap."
    },
    {
      front: "Gilligan's Ethics of Care",
      back: "Critiqued Kohlberg's justice orientation as male-biased. Women's moral development emphasizes care, relationships, responsibility (not inferior, just different). Three levels: 1) Self-interest, 2) Goodness as self-sacrifice, 3) Care for self and others (balance). Transition crises involve conflict between selfishness and responsibility. Contemporary view: both justice and care orientations used by both genders depending on context. Expanded moral psychology beyond rights/rules."
    },
    {
      front: "Baumrind's Parenting Styles - Four Quadrants",
      back: "Authoritative (high warmth/high control): Best outcomes—competent, confident, achievement. Authoritarian (low warmth/high control): Obedient, anxious, low self-esteem. Permissive (high warmth/low control): Poor self-regulation, entitlement. Uninvolved (low warmth/low control): Worst outcomes—detachment, delinquency. Maccoby & Martin expanded Baumrind's three to four. Cultural considerations: authoritarian differs in collectivist cultures (warmth expressed differently)."
    },
    {
      front: "Ainsworth's Strange Situation Procedure",
      back: "Laboratory paradigm (8 episodes, ~21 min) assessing attachment: 1) Parent-infant, 2) Stranger joins, 3) Parent leaves, 4) Parent returns, stranger leaves, 5) Parent leaves-infant alone, 6) Stranger returns, 7) Parent returns, stranger leaves, 8) Reunion. Observe: separation distress, stranger anxiety, reunion behavior. Ages 12-18 months. Validity: predicts later outcomes, cross-cultural (though proportions vary). Adult attachment interview (AAI) for adults."
    },
    {
      front: "Language Milestones",
      back: "Cooing (2-3 months): Vowel sounds. Babbling (6 months): Consonant-vowel combos, then canonical babbling. First words (12 months): 'mama,' 'dada.' Vocabulary spurt (18-24 months): 50+ words. Telegraphic speech (24 months): Two-word combos. Complex grammar (3-5 years). Overextension (all four-legged = doggie) and underextension common. Critical/sensitive period (Lenneberg): language learning easier before puberty. Bilingualism doesn't delay language—common myth."
    },
    {
      front: "Teratogen Critical Periods",
      back: "Embryonic period (weeks 3-8) most vulnerable—organ formation. Specific systems vulnerable at specific times: CNS (3-16 weeks), Heart (3-6), Limbs (4-7), Eyes (4-9), Genitals (7-16). Fetal period: growth, CNS development continues (vulnerable throughout). Dose-response: more exposure = worse effects. Individual differences: genetic susceptibility. Alcohol affects throughout pregnancy (no safe amount/time). Folic acid (before conception) prevents neural tube defects."
    },
    {
      front: "Cognitive Changes in Normal Aging",
      back: "Decline: Processing speed, working memory, episodic memory (especially source memory), divided attention, fluid intelligence, executive functions. Stable/Increase: Crystallized intelligence, semantic memory, vocabulary, implicit memory, emotional regulation, wisdom. Cognitive reserve: education/mental activity protects. Use-it-or-lose-it. Variability: individual differences large. Pathological: Progressive decline in multiple domains, functional impairment (MCI, dementia)."
    },
    {
      front: "Grief Theories - Beyond Kübler-Ross",
      back: "Kübler-Ross (DABDA): Criticized as prescriptive, linear. Worden's Tasks: 1) Accept reality, 2) Process pain, 3) Adjust to environment, 4) Find connection while moving on. Dual-Process Model (Stroebe & Schut): Oscillate between loss-oriented (grief) and restoration-oriented (life changes) coping. Prolonged Grief Disorder (DSM-5-TR/ICD-11): Persistent, intense grief ≥12 months, impairs functioning. Most people resilient; minority develop complications."
    },
    {
      front: "Adolescent Development Key Changes",
      back: "Physical: Puberty (GnRH→FSH/LH→sex hormones), growth spurt, sexual maturation. Timing matters: early maturation risky for girls (older peers, body image), late for boys (social status). Cognitive: Formal operations, abstract thinking, metacognition, hypothetical reasoning, BUT adolescent egocentrism (imaginary audience, personal fable). Social: Peer influence peaks, identity exploration, autonomy-seeking, parent conflict (normal). Brain: limbic before PFC (reward-seeking before impulse control)."
    },
    {
      front: "Piaget's Four Stages of Cognitive Development",
      back: "Sensorimotor (0-2): Object permanence, goal-directed behavior, deferred imitation. Preoperational (2-7): Symbolic thought, egocentrism, centration, lack conservation. Concrete Operational (7-11): Conservation, reversibility, classification, seriation, limited to concrete/tangible. Formal Operational (11+): Abstract reasoning, hypothetical-deductive thought, propositional logic. Criticized: underestimates young children, overestimates adolescents, domain-general vs. domain-specific, cultural variation, abrupt stages vs. gradual."
    },
    {
      front: "Object Permanence Development (Piaget)",
      back: "Understanding that objects continue to exist when out of sight. Develops gradually through sensorimotor stage: 0-4 months: no concept. 4-8 months: track visually, briefly search. 8-12 months: search where last found (A-not-B error). 12-18 months: solve A-not-B, follow visible displacement. 18-24 months: invisible displacement (imagine object moved). Modern research (violation-of-expectation): infants younger than Piaget proposed show some understanding. Develops earlier than Piaget thought but full concept gradual."
    },
    {
      front: "Preoperational Thought Limitations",
      back: "Centration: focus on one dimension (tall glass = more liquid). Irreversibility: can't mentally reverse operations. Egocentrism: can't take others' perspectives (Three Mountains Task). Animism: attribute life to inanimate objects. Artificialism: believe natural phenomena human-made. Transductive reasoning: specific to specific (not logical). Appearance-reality confusion. Lack conservation. Symbolic thought present (pretend play, language). Intuitive/perception-bound thinking. Resolves with concrete operational thought."
    },
    {
      front: "Concrete Operational Achievements",
      back: "Conservation: quantity unchanged despite appearance. Reversibility: mental operations can be undone. Decentration: consider multiple dimensions. Classification: organize into hierarchies, class inclusion. Seriation: order by dimension (size). Transitivity: if A>B and B>C, then A>C. Spatial reasoning (maps). Understand time, speed, distance relationships. Limited to concrete, tangible situations—struggle with abstract/hypothetical. Logical but not abstract. Ages 7-11. Enables academic learning (math, science)."
    },
    {
      front: "Vygotsky vs. Piaget - Key Differences",
      back: "Piaget: Child as scientist, active discovery, universal stages, minimal social role, readiness determines learning. Vygotsky: Child as apprentice, social interaction crucial, cultural tools (language), ZPD (learning leads development), scaffolding by more skilled others. Piaget: individual construction. Vygotsky: social construction. Piaget: language reflects thought. Vygotsky: language shapes thought. Modern synthesis: both processes important. Vygotsky's influence: collaborative learning, peer tutoring, scaffolding, cultural context."
    },
    {
      front: "Executive Function Development Timeline",
      back: "Infancy: early attention control, simple inhibition. Preschool (3-5): rapid development—working memory, inhibitory control, flexibility emerge. Tests: Day/Night Stroop, dimensional change card sort. School-age (6-12): continued improvement, integrate components. Adolescence: approaching adult levels but continued refinement (PFC maturation). Adult levels by mid-20s. Hot EF (emotional) vs. cool EF (cognitive). Individual differences predict school readiness, academic achievement. Malleable: interventions effective. Declines in older adulthood (frontal aging)."
    },
    {
      front: "Temperament Dimensions (Thomas & Chess)",
      back: "9 dimensions: 1) Activity level, 2) Rhythmicity (biological regularity), 3) Approach/Withdrawal (initial response to new), 4) Adaptability (adjustment over time), 5) Threshold of responsiveness (sensory), 6) Intensity of reaction, 7) Quality of mood, 8) Distractibility, 9) Attention span/Persistence. Three types: Easy (40%), Difficult (10%), Slow-to-warm (15%), Mixed (35%). Moderately stable, genetic basis. Goodness of fit with environment determines outcomes. Not destiny—malleable through parenting, experience."
    },
    {
      front: "Motor Milestones Summary",
      back: "Gross motor: Lift head (1 mo), Roll over (3-4 mo), Sit unsupported (6-7 mo), Crawl (7-10 mo), Stand (8-10 mo), Walk (12-15 mo), Run (18 mo), Jump (24 mo), Pedal tricycle (3 yr). Fine motor: Reach/grasp (3-4 mo), Transfer objects (6 mo), Pincer grasp (9 mo), Stack blocks (12-18 mo), Turn pages (18 mo), Use utensils (24 mo), Draw circle (3 yr), Copy shapes (4-5 yr). Individual variation normal. Cephalocaudal and proximodistal patterns. Delays: screen for developmental disorders."
    },
    {
      front: "Attachment and Later Outcomes",
      back: "Secure attachment predicts: better emotion regulation, social competence, peer relationships, academic achievement, mental health, romantic relationship quality. Insecure: higher risk for anxiety, depression, behavior problems, relationship difficulties. Disorganized: highest risk—dissociation, psychopathology. Mechanisms: internal working models, stress regulation (HPA axis), brain development. Intergenerational transmission (AAI predicts infant attachment 75%). NOT deterministic: continuity moderate (50-75%), change possible (new relationships, therapy). Protective factor but not guarantee. Lawful discontinuity: change when life circumstances change."
    },
    {
      front: "Puberty Timing Effects",
      back: "Early maturing girls: at risk—older peers, dating/sexual activity, substance use, depression, body dissatisfaction, eating disorders, delinquency. Temporary advantages (popularity) outweighed by risks. Early maturing boys: mixed—athletic/social advantages but also risk (delinquency, substance use). Often positive outcomes. Late maturing boys: short-term disadvantages (peer status, athletics), long-term often okay. Late maturing girls: generally positive—more time for identity development. Mechanisms: maturational deviance hypothesis (off-time challenging), stage termination hypothesis (less preparation), peer selection."
    },
    {
      front: "Kohlberg's Levels of Moral Development",
      back: "Level 1—Preconventional (child): Morality external, based on consequences. Stage 1: Punishment-obedience. Stage 2: Instrumental exchange (self-interest). Level 2—Conventional (adolescent/adult): Internalized group norms. Stage 3: Interpersonal concordance (approval). Stage 4: Law and order (social system). Level 3—Postconventional (minority of adults): Self-chosen principles. Stage 5: Social contract (democratic process, rights). Stage 6: Universal ethical principles (abstract justice). Sequence invariant. Not everyone reaches higher stages. Reasoning ≠ behavior."
    },
    {
      front: "Erikson's Adult Stages (Young, Middle, Late Adulthood)",
      back: "Intimacy vs. Isolation (young adult, ~20-40): Deep relationships, romantic love, friendship. Success → intimacy. Failure → isolation, loneliness. Generativity vs. Stagnation (middle adult, ~40-65): Contributing to society, parenting, mentoring, work productivity. Success → generativity, legacy. Failure → stagnation, self-absorption. Integrity vs. Despair (late adult, 65+): Life review, accepting life's meaning. Success → wisdom, integrity. Failure → despair, regret, fear of death. Each stage builds on earlier resolutions. Successful aging involves integrity."
    },
    {
      front: "Strange Situation Classifications and Proportions",
      back: "Secure (Type B): 60-65% in U.S. samples. Distressed at separation, easily comforted at reunion, use caregiver as secure base. Associated with sensitive, responsive caregiving. Avoidant (Type A): ~20%. Minimal separation distress, avoid/ignore at reunion. Associated with rejecting/intrusive caregiving. Ambivalent/Resistant (Type C): 10-15%. Extreme distress, cannot be comforted at reunion, approach-avoid. Associated with inconsistent caregiving. Disorganized (Type D): 10-15%. Contradictory, confused behaviors. Associated with frightened/frightening caregiver, trauma, maltreatment."
    },
    {
      front: "Language Development Theories",
      back: "Behaviorist (Skinner): Operant conditioning—imitation, reinforcement, shaping. Can't explain generativity, speed of acquisition. Nativist (Chomsky): LAD (Language Acquisition Device), universal grammar, critical period. Biological preparedness. Can't explain individual/cultural differences. Interactionist (social): Social interaction, ZPD, joint attention, scaffolding. Cognitive (Piaget): Language reflects cognitive development. Modern consensus: innate capacity + environmental input + social interaction. All components necessary. Brain specialization (Broca's, Wernicke's) + experience."
    },
    {
      front: "Aging Theories - SOC, Activity, Disengagement",
      back: "Selective Optimization with Compensation (Baltes): Selection (narrow goals), Optimization (practice, enhance), Compensation (alternative means when decline). Adaptive, empirically supported. Activity Theory: Maintain activities/roles to age well. Active = life satisfaction. Disengagement Theory (largely rejected): Mutual withdrawal (society, individual) is natural, adaptive. Most research refutes. Socioemotional Selectivity: Time perspective shift → prioritize emotional goals, meaningful relationships. Continuity Theory: Maintain consistent personality, activities (adapt, not abandon). Most successful: SOC with selectivity."
    },
    {
      front: "Adolescent Risk-Taking Explanations",
      back: "Brain development: Limbic system (reward, emotion) matures before PFC (control, planning) → imbalance. Heightened reward sensitivity + incomplete impulse control. Peer influence: Reward system hyperactivated with peers present (Steinberg). NOT invulnerability beliefs (adolescents know risks). Sensation-seeking peaks in adolescence. Positive aspects: exploration, identity formation, independence. Interventions: reduce opportunity (graduated licensing), provide structured environments, build skills (decision-making), mentor relationships. Individual differences: some adolescents very risk-averse. Context matters: hot (emotional) vs. cold (cognitive) conditions."
    },
    {
      front: "Wisdom in Late Adulthood",
      back: "Baltes: Expertise in life pragmatics—knowledge, judgment about life matters. Five criteria: 1) Rich factual knowledge, 2) Rich procedural knowledge, 3) Lifespan contextualism, 4) Relativism (multiple perspectives), 5) Uncertainty management. Not guaranteed with age—requires experience, openness, cognitive complexity. Rare. Sternberg: Balance of interests (intrapersonal, interpersonal, extrapersonal) to achieve common good via tacit knowledge and values. Wisdom increases with age (crystallized intelligence, emotional regulation) but individual differences large. Older adults excel at social reasoning, emotion regulation."
    },
    {
      front: "Common Aging Myths vs. Reality",
      back: "Myth: All memory declines. Reality: Episodic/working memory decline, semantic/implicit stable. Myth: Personality changes dramatically. Reality: Stability increases, modest mean-level changes (maturity principle). Myth: Depression inevitable. Reality: Lower rates than young/middle adults in many studies. Myth: Cognitive decline means dementia. Reality: Normal aging different from pathology. Myth: Old age = decline only. Reality: Emotion regulation, wisdom, vocabulary, expertise can improve. Myth: Set in ways, can't change. Reality: Plasticity continues, learning possible. Ageism harmful—negative stereotypes impair performance (stereotype threat)."
    },
    {
      front: "Teratogen Examples and Effects",
      back: "Alcohol: FAS (facial anomalies, growth deficiency, CNS damage, ID). No safe level. Tobacco: Low birth weight, prematurity, SIDS, ADHD. Cocaine: Prematurity, low birth weight, some cognitive effects. Prescription drugs: Accutane (severe birth defects), thalidomide (limb malformations). Infections: Rubella (deafness, blindness, heart defects), Zika (microcephaly). Environmental: Mercury (Minamata disease—neurological), lead (cognitive impairment), radiation (microcephaly, ID). Timing, dose, genetic susceptibility matter. Critical periods for specific structures. Prevention: prenatal care, screening, education."
    },
    {
      front: "Bronfenbrenner's Ecological Systems Theory",
      back: "Nested environmental systems: Microsystem: immediate environments (family, school, peers, church). Direct interaction. Mesosystem: connections between microsystems (parent-teacher, family-peers). Exosystem: indirect influence (parent's work, school board, neighborhood resources). Macrosystem: cultural values, laws, economic system, ideology. Chronosystem: time dimension—environmental changes, life transitions, cohort effects, historical events. Bidirectional influences (child ↔ environment). Process-Person-Context-Time (PPCT). Development = interaction of individual and nested contexts. Applications: multi-level interventions, recognizing contextual influences."
    },
    {
      front: "False Belief Task and Theory of Mind",
      back: "Classic test: Sally-Anne task. Sally puts ball in basket, leaves. Anne moves ball to box. Where will Sally look? 3-year-olds: 'Box' (where ball is). 4-5-year-olds: 'Basket' (where Sally thinks it is). Demonstrates understanding of false beliefs—others can have beliefs differing from reality and from one's own knowledge. ToM components: Precursors: joint attention (9-12 mo), pretend play (18-24 mo). Understanding desires (2 yr), beliefs (4-5 yr). Second-order ToM later (6-7 yr): 'He thinks she thinks...' Impaired in ASD. Enables deception, empathy, complex social interaction."
    },
    {
      front: "Prenatal Development Stages and Milestones",
      back: "Germinal (0-2 weeks): Conception, cell division, implantation (~7-10 days). Embryonic (3-8 weeks): Organogenesis—all major organs/structures form. Most vulnerable to teratogens. Heart beats (4 weeks), limb buds (4-5 weeks), facial features (5-8 weeks). Fetal (9 weeks-birth): Growth, refinement. Sex organs differentiate (12 weeks), movement (quickening, 16-20 weeks), viability (~24 weeks, improving with technology), brain development continues. Age of viability: 22-26 weeks increasingly viable with NICU care. Full-term: 37-40 weeks."
    },
    {
      front: "Gender Development Theories",
      back: "Biological: Hormones, genes, brain differences. Evidence: CAH girls (androgen exposure), chromosomal variations. Social Learning: Modeling, reinforcement, observation (Bandura). Gender-typed behavior from rewards/punishments. Cognitive-Developmental (Kohlberg): Gender understanding drives behavior. Identity → stability → constancy → stereotype adoption. Gender Schema (Martin & Halverson): Children develop schemas (organized knowledge) about gender, assimilate information. Active self-socialization. Modern: Biosocial, multifactorial. Biology interacts with socialization. All theories contribute. Gender diversity: not all children fit binary categories."
    },
    {
      front: "Parenting Style Cultural Considerations",
      back: "Baumrind's typology Western/individualist-based. Authoritarian parenting: negative outcomes in Western samples, but in some collectivist cultures (Asian, African American) associated with positive outcomes when combined with warmth/cultural context. Warmth expressed differently: physical affection vs. sacrifice, involvement in education. Respect for authority culturally valued. Context: high-risk neighborhoods—firm control protective. Goodness-of-fit: match parenting to cultural values, child temperament, environmental demands. Universal: warmth/responsiveness beneficial. Culture shapes optimal control levels, expression of warmth. Avoid imposing Western standards universally."
    },
    {
      front: "Grief and Bereavement - Individual Differences",
      back: "Most bereaved individuals resilient—minimal grief, maintain functioning (35-50%). Common grief: intense distress, gradual recovery over 6-18 months (majority). Chronic grief: prolonged, intense (10-15%)—Prolonged Grief Disorder. Delayed grief: initially minimal, later emergence. Absent grief: minimal distress, no later problems (resilience, not denial). Factors: relationship quality, death circumstances (sudden vs. expected), social support, prior losses, mental health history, meaning-making, cultural practices. No 'right way' to grieve. Pathologize only when: marked impairment, prolonged duration, danger to self/others. Support adaptation without prescribing process."
    },
  ],
};
