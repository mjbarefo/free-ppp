export const cognitiveDomain = {
  id: "cognitive",
  name: "Cognitive-Affective Bases",
  weight: 13,
  color: "#E08A2D",
  icon: "💡",
  description: "Learning, memory, cognition, emotion, and motivation",
  topics: [
    "Classical and operant conditioning",
    "Cognitive theories of learning",
    "Memory systems and processes",
    "Attention and perception",
    "Emotion theories and regulation",
    "Motivation theories",
    "Social learning theory",
    "Cognitive biases and heuristics",
  ],
  questions: [
    {
      q: "In operant conditioning, a variable-ratio schedule of reinforcement produces:",
      options: [
        "Slow, steady responding with long pauses after reinforcement",
        "High, steady rates of responding that are resistant to extinction",
        "Responses that increase just before reinforcement is expected",
        "Rapid responding followed by a post-reinforcement pause",
      ],
      correct: 1,
      explanation:
        "Variable-ratio (VR) schedules reinforce after an unpredictable number of responses, producing high, steady rates of responding with great resistance to extinction. This is the schedule underlying gambling behavior. Unlike fixed-ratio (which produces post-reinforcement pauses) or interval schedules, VR maintains consistent high performance.",
    },
    {
      q: "According to the working memory model proposed by Baddeley, which component is responsible for managing and coordinating information?",
      options: [
        "Phonological loop",
        "Visuospatial sketchpad",
        "Central executive",
        "Episodic buffer",
      ],
      correct: 2,
      explanation:
        "The central executive is the attentional control system that manages and coordinates information from the phonological loop (verbal/auditory info), visuospatial sketchpad (visual/spatial info), and episodic buffer (integrates info from subsystems and long-term memory). It directs attention and controls the flow of information.",
    },
    {
      q: "Systematic desensitization is based primarily on the principle of:",
      options: [
        "Operant conditioning",
        "Classical counter-conditioning",
        "Observational learning",
        "Cognitive restructuring",
      ],
      correct: 1,
      explanation:
        "Systematic desensitization (Wolpe) is based on classical counter-conditioning, specifically reciprocal inhibition. It pairs a feared stimulus with relaxation (an incompatible response) through a gradual anxiety hierarchy. The anxiety response is progressively replaced by a relaxation response through classical conditioning principles.",
    },
    {
      q: "The 'misinformation effect' in memory research demonstrates that:",
      options: [
        "Memories fade uniformly over time",
        "Post-event information can alter memory for the original event",
        "Emotional memories are always more accurate",
        "Short-term memory has unlimited capacity",
      ],
      correct: 1,
      explanation:
        "Elizabeth Loftus's research on the misinformation effect demonstrates that exposure to misleading post-event information can distort a person's memory for the original event. This has major implications for eyewitness testimony, suggesting memories are reconstructive rather than reproductive.",
    },
    {
      q: "According to the Yerkes-Dodson Law:",
      options: [
        "Higher arousal always leads to better performance",
        "Performance is optimal at moderate levels of arousal",
        "Arousal has no effect on task performance",
        "Complex tasks require high arousal for optimal performance",
      ],
      correct: 1,
      explanation:
        "The Yerkes-Dodson Law describes an inverted-U relationship between arousal and performance: moderate arousal produces optimal performance. Too little arousal leads to poor performance (boredom), and too much leads to poor performance (anxiety). Importantly, simple tasks benefit from higher arousal, while complex tasks require lower arousal levels.",
    },
    {
      q: "In Pavlov's classical conditioning paradigm, the unconditioned stimulus (UCS) is:",
      options: [
        "The bell that was initially neutral",
        "The salivation response to the bell",
        "The food that naturally elicits salivation",
        "The learned association between bell and food",
      ],
      correct: 2,
      explanation:
        "The unconditioned stimulus (UCS) is the stimulus that naturally and automatically triggers a response without prior learning. In Pavlov's experiments, food was the UCS that naturally elicited salivation (UCR). The bell became a conditioned stimulus (CS) through pairing with the UCS.",
    },
    {
      q: "Spontaneous recovery in classical conditioning refers to:",
      options: [
        "The initial learning of the CS-UCS association",
        "The reappearance of an extinguished response after a rest period",
        "The strengthening of a response through repeated pairings",
        "The generalization of a response to similar stimuli",
      ],
      correct: 1,
      explanation:
        "Spontaneous recovery is the reappearance of a previously extinguished conditioned response after a period of rest, without additional pairings. This demonstrates that extinction does not erase the original learning but rather involves new learning (inhibition) that temporarily suppresses the CR.",
    },
    {
      q: "Which of the following best describes latent learning as demonstrated by Tolman's research?",
      options: [
        "Learning occurs only when reinforcement is present",
        "Learning can occur without immediate reinforcement and remain unobserved until incentive is provided",
        "Animals cannot learn spatial relationships without explicit training",
        "Reinforcement must be immediate to produce learning",
      ],
      correct: 1,
      explanation:
        "Tolman's maze studies with rats demonstrated latent learning—learning that occurs without reinforcement and is not immediately demonstrated in behavior. Rats that explored mazes without reward later navigated efficiently when reward was introduced, showing they had formed cognitive maps during unrewarded exploration.",
    },
    {
      q: "In Bandura's Bobo doll experiment, children who observed aggressive models:",
      options: [
        "Showed no increase in aggressive behavior",
        "Only imitated if directly reinforced for doing so",
        "Displayed similar aggressive behaviors even without direct reinforcement",
        "Required multiple exposures before imitating the behavior",
      ],
      correct: 2,
      explanation:
        "Bandura's research demonstrated observational learning (social learning theory): children who observed adult models behaving aggressively toward a Bobo doll later displayed similar aggressive behaviors without direct reinforcement. This challenged behaviorist views that learning requires direct reinforcement and highlighted the role of modeling.",
    },
    {
      q: "Negative reinforcement in operant conditioning:",
      options: [
        "Is the same as punishment",
        "Decreases the likelihood of a behavior",
        "Increases behavior by removing an aversive stimulus",
        "Involves presenting an unpleasant consequence",
      ],
      correct: 2,
      explanation:
        "Negative reinforcement strengthens behavior by removing or avoiding an aversive stimulus (e.g., taking aspirin removes headache, reinforcing aspirin-taking). This differs from punishment, which decreases behavior. Both positive and negative reinforcement increase behavior; they differ in whether something is added or removed.",
    },
    {
      q: "The Garcia effect (taste aversion learning) challenged traditional learning theory by demonstrating:",
      options: [
        "All stimuli are equally associable",
        "Biological preparedness influences what associations are easily learned",
        "Conditioning requires immediate CS-UCS pairing",
        "Taste cannot be classically conditioned",
      ],
      correct: 1,
      explanation:
        "Garcia's research on conditioned taste aversion showed that animals quickly learn to associate tastes with illness even when the illness occurs hours later, violating the contiguity principle. This demonstrated biological preparedness—organisms are evolutionarily predisposed to form certain associations more easily than others.",
    },
    {
      q: "According to the levels of processing theory (Craik & Lockhart), information is best remembered when:",
      options: [
        "Rehearsed multiple times in short-term memory",
        "Processed at a shallow, structural level",
        "Encoded with semantic, meaningful processing",
        "Stored in the phonological loop",
      ],
      correct: 2,
      explanation:
        "Craik and Lockhart's levels of processing theory proposes that memory depends on depth of processing rather than rehearsal duration. Semantic (meaning-based) processing produces deeper, more durable memory than phonemic (sound-based) or structural (appearance-based) processing. This challenged the multi-store model's emphasis on rehearsal.",
    },
    {
      q: "The serial position effect in memory demonstrates that:",
      options: [
        "Items in the middle of a list are best remembered",
        "Primacy and recency effects occur, with beginning and end items better recalled",
        "All items in a list are equally memorable",
        "Only the last item presented is recalled",
      ],
      correct: 1,
      explanation:
        "The serial position effect shows superior recall for items at the beginning (primacy effect—due to transfer to long-term memory through rehearsal) and end (recency effect—due to availability in working memory) of a list. Middle items are recalled least well. This provides evidence for separate short-term and long-term memory systems.",
    },
    {
      q: "Which brain structure is most critical for the formation of new explicit memories?",
      options: [
        "Amygdala",
        "Cerebellum",
        "Hippocampus",
        "Basal ganglia",
      ],
      correct: 2,
      explanation:
        "The hippocampus is essential for forming new explicit (declarative) memories, including episodic and semantic memories. Damage to the hippocampus (as in patient H.M.) produces anterograde amnesia—inability to form new explicit memories while implicit memory, working memory, and remote memories remain intact.",
    },
    {
      q: "Proactive interference occurs when:",
      options: [
        "New learning disrupts recall of previously learned information",
        "Previously learned information disrupts recall of new information",
        "Information decays from short-term memory",
        "Similar memories are consolidated together",
      ],
      correct: 1,
      explanation:
        "Proactive interference occurs when old information interferes with learning or recalling new information (e.g., your old phone number interfering with remembering your new one). Retroactive interference is the opposite—new learning disrupting old memories. Both demonstrate that forgetting often results from interference rather than decay.",
    },
    {
      q: "The encoding specificity principle suggests that:",
      options: [
        "Memory is independent of retrieval context",
        "Retrieval is enhanced when the context matches encoding conditions",
        "Semantic encoding is always superior to other forms",
        "Recognition is always easier than recall",
      ],
      correct: 1,
      explanation:
        "The encoding specificity principle (Tulving) states that memory is improved when information available at encoding is also present at retrieval. This explains context-dependent memory (e.g., better recall in the same room where learning occurred) and state-dependent memory (e.g., mood congruence effects).",
    },
    {
      q: "Working memory capacity is typically limited to approximately:",
      options: [
        "3-4 chunks of information",
        "7 ± 2 chunks of information",
        "12-15 chunks of information",
        "Unlimited capacity for brief periods",
      ],
      correct: 0,
      explanation:
        "Modern research (Cowan) suggests working memory capacity is approximately 3-4 chunks, revising Miller's classic '7 ± 2' estimate. Chunking—grouping information into meaningful units—can effectively increase capacity. Individual differences in working memory capacity predict performance on complex cognitive tasks and fluid intelligence.",
    },
    {
      q: "The constructive nature of memory, as demonstrated by Bartlett's 'War of the Ghosts' study, shows that:",
      options: [
        "Memory is a perfect recording of events",
        "People reconstruct memories based on schemas and prior knowledge",
        "Visual memories are more accurate than verbal memories",
        "Memories cannot be influenced by suggestion",
      ],
      correct: 1,
      explanation:
        "Bartlett's research demonstrated that memory is reconstructive, not reproductive. Participants recalled a Native American folk tale using their own cultural schemas, transforming unfamiliar elements into more familiar ones. This shows memory is an active process of reconstruction influenced by existing knowledge structures.",
    },
    {
      q: "Flashbulb memories are characterized by:",
      options: [
        "Perfect accuracy due to emotional arousal",
        "Vivid detail but similar accuracy to ordinary memories",
        "Rapid forgetting compared to normal memories",
        "Storage only in implicit memory systems",
      ],
      correct: 1,
      explanation:
        "Flashbulb memories (Brown & Kulik) are vivid, detailed memories of surprising, consequential events (e.g., 9/11). While people feel confident in these memories' accuracy, research shows they contain errors and change over time like ordinary memories. The vividness and confidence don't guarantee accuracy.",
    },
    {
      q: "Which type of amnesia is characterized by inability to recall events from before the brain injury?",
      options: [
        "Anterograde amnesia",
        "Retrograde amnesia",
        "Prospective amnesia",
        "Source amnesia",
      ],
      correct: 1,
      explanation:
        "Retrograde amnesia is the loss of memories formed before the injury or disease onset, often showing a temporal gradient where more recent memories are more affected. Anterograde amnesia is inability to form new memories after the injury. Many patients (like H.M.) show both types.",
    },
    {
      q: "The phonological loop in working memory is primarily responsible for:",
      options: [
        "Processing visual and spatial information",
        "Coordinating attention and cognitive resources",
        "Temporary storage of verbal and acoustic information",
        "Long-term storage of procedural memories",
      ],
      correct: 2,
      explanation:
        "The phonological loop, part of Baddeley's working memory model, briefly stores verbal and acoustic information through a phonological store and articulatory rehearsal process. The word length effect (shorter words better recalled) and phonological similarity effect provide evidence for this component.",
    },
    {
      q: "Semantic memory refers to:",
      options: [
        "Memory for personal experiences and events",
        "Memory for general knowledge and facts",
        "Memory for motor skills and procedures",
        "Memory that lasts less than 30 seconds",
      ],
      correct: 1,
      explanation:
        "Semantic memory is a type of explicit memory containing general world knowledge, facts, and concepts (e.g., knowing Paris is in France) without remembering when or where the information was learned. This contrasts with episodic memory (personal experiences) and procedural memory (skills).",
    },
    {
      q: "The spacing effect in learning demonstrates that:",
      options: [
        "Massed practice is more effective than distributed practice",
        "Distributed practice over time leads to better retention than cramming",
        "Learning is unaffected by the timing of practice sessions",
        "Immediate testing produces better long-term retention",
      ],
      correct: 1,
      explanation:
        "The spacing effect shows that distributed practice (spreading learning over time) produces better long-term retention than massed practice (cramming). This robust finding has important implications for study strategies and is explained by theories involving encoding variability and consolidation processes.",
    },
    {
      q: "According to Atkinson-Shiffrin's multi-store model, information flows from:",
      options: [
        "Long-term memory to short-term memory to sensory memory",
        "Sensory memory to short-term memory to long-term memory",
        "Working memory directly to long-term memory",
        "Procedural memory to declarative memory",
      ],
      correct: 1,
      explanation:
        "The Atkinson-Shiffrin model proposes information flows sequentially: sensory memory (brief, high-capacity) → short-term memory (limited capacity, rehearsal-based) → long-term memory (unlimited capacity, relatively permanent). Attention gates entry to STM, and rehearsal facilitates transfer to LTM.",
    },
    {
      q: "The testing effect shows that:",
      options: [
        "Testing impairs subsequent learning",
        "Retrieval practice enhances long-term retention more than repeated studying",
        "Recognition is always superior to recall",
        "Testing only benefits short-term memory",
      ],
      correct: 1,
      explanation:
        "The testing effect (retrieval practice effect) demonstrates that actively retrieving information through testing produces better long-term retention than restudying the material. This occurs even when testing feels more difficult than studying, highlighting the importance of effortful retrieval for learning.",
    },
    {
      q: "In the Stroop task, interference occurs because:",
      options: [
        "Reading words is a more automatic process than naming colors",
        "Color naming is more automatic than word reading",
        "Participants have difficulty seeing colors",
        "Working memory capacity is exceeded",
      ],
      correct: 0,
      explanation:
        "The Stroop effect demonstrates interference between automatic and controlled processes. For literate adults, reading is highly automatic and difficult to inhibit, so when word meaning (e.g., 'RED' written in blue ink) conflicts with color naming, reading interferes with the controlled process of naming the ink color.",
    },
    {
      q: "Selective attention is best described as:",
      options: [
        "The ability to process all sensory information simultaneously",
        "Focusing on one stimulus while ignoring others",
        "Automatic processing without conscious awareness",
        "The capacity of short-term memory",
      ],
      correct: 1,
      explanation:
        "Selective attention is the ability to focus on particular stimuli while filtering out irrelevant information. Classic studies include Cherry's dichotic listening (cocktail party effect) and visual attention studies. This demonstrates that attention is selective and limited, not all sensory input receives full processing.",
    },
    {
      q: "Posner's spatial cueing paradigm demonstrated that:",
      options: [
        "Attention cannot be directed without eye movements",
        "Covert attention can be shifted independently of eye movements",
        "All locations in the visual field are processed equally",
        "Attention has unlimited capacity",
      ],
      correct: 1,
      explanation:
        "Posner showed that attention can be covertly shifted to spatial locations without moving the eyes. Valid cues (correctly indicating target location) speed response times, while invalid cues slow them, demonstrating that attention can be directed endogenously (voluntarily) and exogenously (reflexively) to enhance processing at specific locations.",
    },
    {
      q: "Change blindness refers to:",
      options: [
        "Progressive vision loss in older adults",
        "Failure to detect changes in visual scenes when they occur during disruptions",
        "The ability to detect all changes in the environment",
        "Blindness caused by attentional disorders",
      ],
      correct: 1,
      explanation:
        "Change blindness is the phenomenon where observers fail to notice substantial changes in visual scenes when the changes occur during brief disruptions (e.g., eye movements, blinks, cuts). This demonstrates that our perception of rich, detailed visual scenes is partly an illusion—we don't process as much detail as we think.",
    },
    {
      q: "The James-Lange theory of emotion proposes that:",
      options: [
        "Physiological arousal and emotional experience occur simultaneously",
        "Physiological arousal precedes and causes emotional experience",
        "Cognitive appraisal must occur before emotional experience",
        "Emotions are independent of physiological responses",
      ],
      correct: 1,
      explanation:
        "The James-Lange theory states that physiological arousal precedes emotional experience—we feel afraid because we run, not run because we're afraid. Different emotions have distinct bodily patterns. This was challenged by Cannon-Bard theory (simultaneous arousal and emotion) and Schachter-Singer two-factor theory (arousal + cognitive label).",
    },
    {
      q: "Schachter and Singer's two-factor theory of emotion emphasizes:",
      options: [
        "Only physiological arousal determines emotion",
        "Physiological arousal and cognitive labeling both determine emotional experience",
        "Emotions are purely cognitive with no physiological component",
        "Facial expressions determine emotional feelings",
      ],
      correct: 1,
      explanation:
        "Schachter-Singer's two-factor theory states that emotion requires both physiological arousal and cognitive labeling of that arousal. Their epinephrine study showed that the same physiological state could be labeled as different emotions depending on situational cues, highlighting the role of cognitive appraisal.",
    },
    {
      q: "The facial feedback hypothesis suggests that:",
      options: [
        "Facial expressions have no effect on emotional experience",
        "Facial expressions can influence emotional experience",
        "Emotions only occur when facial muscles are paralyzed",
        "Cognitive appraisal is unnecessary for emotion",
      ],
      correct: 1,
      explanation:
        "The facial feedback hypothesis proposes that facial expressions can influence emotional experience (not just reflect it). Studies showing that holding a pen in one's teeth (simulating a smile) increases positive affect support this. However, the effect size is debated following recent replication efforts.",
    },
    {
      q: "Ekman's research on facial expressions of emotion found that:",
      options: [
        "Facial expressions of basic emotions are culturally specific",
        "Basic emotions have universal facial expressions across cultures",
        "Only Western cultures show consistent emotional expressions",
        "Facial expressions are entirely learned through socialization",
      ],
      correct: 1,
      explanation:
        "Ekman's cross-cultural research identified six basic emotions with universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. Recognition of these expressions occurs across diverse cultures, suggesting evolutionary origins. However, display rules (cultural norms about expressing emotions) vary across cultures.",
    },
    {
      q: "According to the Cannon-Bard theory:",
      options: [
        "Physiological arousal causes emotional experience",
        "Emotional experience causes physiological arousal",
        "Emotional experience and physiological arousal occur simultaneously",
        "Cognitive appraisal must precede physiological arousal",
      ],
      correct: 2,
      explanation:
        "The Cannon-Bard theory proposes that emotional experience and physiological arousal occur simultaneously through parallel processing by the thalamus. This challenged the James-Lange theory by noting that physiological responses are too slow and undifferentiated to account for the variety of emotions we experience.",
    },
    {
      q: "Lazarus's cognitive appraisal theory emphasizes that:",
      options: [
        "Emotions occur without cognitive processing",
        "Cognitive interpretation of a situation determines emotional response",
        "Physiological arousal is unnecessary for emotion",
        "All emotions require identical appraisal processes",
      ],
      correct: 1,
      explanation:
        "Lazarus argued that cognitive appraisal—interpretation of the meaning and significance of a situation—is essential for emotional experience. Primary appraisal assesses whether something is relevant to well-being; secondary appraisal evaluates coping resources. Different appraisals of the same situation produce different emotions.",
    },
    {
      q: "Emotion regulation strategies include all of the following EXCEPT:",
      options: [
        "Cognitive reappraisal",
        "Expressive suppression",
        "Situation selection",
        "Emotional amplification",
      ],
      correct: 3,
      explanation:
        "Gross's process model of emotion regulation identifies strategies including situation selection/modification, attentional deployment, cognitive reappraisal, and response modulation (including expressive suppression). Cognitive reappraisal is generally more effective than suppression. Emotional amplification is not a standard regulation strategy.",
    },
    {
      q: "Which brain structure plays a critical role in processing fear and emotional learning?",
      options: [
        "Hippocampus",
        "Amygdala",
        "Prefrontal cortex",
        "Cerebellum",
      ],
      correct: 1,
      explanation:
        "The amygdala is central to fear processing, emotional learning, and emotional memory consolidation. It receives sensory input and can trigger fear responses before conscious awareness (via the 'low road' through the thalamus). Amygdala damage impairs fear conditioning and recognition of fearful expressions.",
    },
    {
      q: "Maslow's hierarchy of needs proposes that:",
      options: [
        "All needs must be satisfied simultaneously",
        "Higher-level needs become important only when lower-level needs are met",
        "Self-actualization needs take priority over physiological needs",
        "Needs are unrelated to motivation",
      ],
      correct: 1,
      explanation:
        "Maslow proposed a hierarchy from basic to higher-order needs: physiological, safety, love/belonging, esteem, and self-actualization. Lower-level needs must be reasonably satisfied before higher needs become motivating. However, research shows the hierarchy is not as rigid as originally proposed, and cultural differences exist.",
    },
    {
      q: "Drive reduction theory suggests that:",
      options: [
        "Organisms are motivated to maintain homeostasis by reducing drives",
        "Optimal arousal is always minimal",
        "External incentives are unnecessary for motivation",
        "Physiological needs are irrelevant to motivation",
      ],
      correct: 0,
      explanation:
        "Drive reduction theory (Hull) proposes that biological needs create drives (motivational states) that organisms are motivated to reduce, maintaining homeostasis. While this explains primary drives (hunger, thirst), it doesn't fully account for behaviors that increase arousal (curiosity, play) or are driven by external incentives rather than internal needs.",
    },
    {
      q: "Intrinsic motivation refers to:",
      options: [
        "Engaging in behavior for external rewards",
        "Engaging in behavior for inherent satisfaction and enjoyment",
        "Motivation based solely on avoiding punishment",
        "Motivation that requires monetary incentives",
      ],
      correct: 1,
      explanation:
        "Intrinsic motivation involves engaging in activities for inherent satisfaction, interest, or enjoyment rather than external rewards. Extrinsic motivation involves external incentives. Research shows that external rewards can sometimes undermine intrinsic motivation (overjustification effect), though this depends on context and reward type.",
    },
    {
      q: "The overjustification effect demonstrates that:",
      options: [
        "External rewards always increase intrinsic motivation",
        "Providing external rewards for intrinsically motivated behavior can decrease intrinsic motivation",
        "Punishment is more effective than rewards",
        "Intrinsic motivation cannot be influenced by external factors",
      ],
      correct: 1,
      explanation:
        "The overjustification effect occurs when external rewards undermine intrinsic motivation for activities that were initially enjoyable. Providing expected, tangible rewards for interesting tasks can shift attribution from internal (I do this because I enjoy it) to external (I do this for the reward), reducing intrinsic motivation when rewards are removed.",
    },
    {
      q: "Self-determination theory identifies which three basic psychological needs?",
      options: [
        "Food, water, and shelter",
        "Autonomy, competence, and relatedness",
        "Achievement, affiliation, and power",
        "Safety, esteem, and self-actualization",
      ],
      correct: 1,
      explanation:
        "Deci and Ryan's self-determination theory proposes three innate psychological needs: autonomy (feeling in control), competence (feeling effective), and relatedness (feeling connected to others). Satisfaction of these needs promotes well-being and intrinsic motivation across cultures, though their expression may vary culturally.",
    },
    {
      q: "Goal-setting theory suggests that effective goals are:",
      options: [
        "Vague and general to allow flexibility",
        "Specific, challenging, and accompanied by feedback",
        "Easy to achieve to maintain motivation",
        "Set by others rather than oneself",
      ],
      correct: 1,
      explanation:
        "Locke and Latham's goal-setting theory shows that specific, challenging goals lead to higher performance than vague or easy goals, especially when accompanied by feedback. Goal commitment, self-efficacy, and task complexity moderate these effects. This has extensive support in organizational and educational settings.",
    },
    {
      q: "The availability heuristic leads people to:",
      options: [
        "Judge probability based on how easily examples come to mind",
        "Always make optimal decisions",
        "Ignore recent experiences when making judgments",
        "Consider all possible outcomes equally",
      ],
      correct: 0,
      explanation:
        "The availability heuristic (Tversky & Kahneman) is a mental shortcut where people judge the probability or frequency of events based on how easily examples come to mind. This can lead to biases—vivid or recent events (like plane crashes) are overestimated while less memorable events (like car accidents) are underestimated.",
    },
    {
      q: "Confirmation bias refers to the tendency to:",
      options: [
        "Seek information that confirms preexisting beliefs",
        "Change beliefs readily when confronted with contradictory evidence",
        "Give equal weight to all information",
        "Avoid forming any beliefs",
      ],
      correct: 0,
      explanation:
        "Confirmation bias is the tendency to seek, interpret, and remember information that confirms existing beliefs while giving less attention to contradictory evidence. This affects hypothesis testing (Wason's 2-4-6 task), political beliefs, and clinical judgment. It's a robust bias affecting experts and novices alike.",
    },
    {
      q: "The representativeness heuristic involves:",
      options: [
        "Judging probability based on how similar something is to a prototype",
        "Always using statistical base rates correctly",
        "Avoiding stereotypes in judgment",
        "Considering only individuating information",
      ],
      correct: 0,
      explanation:
        "The representativeness heuristic judges probability based on similarity to prototypes or stereotypes, often ignoring base rates. The classic example is the Linda problem (feminist bank teller vs. bank teller)—people judge conjunction (feminist bank teller) as more probable than the broader category, violating probability laws.",
    },
    {
      q: "Anchoring bias occurs when:",
      options: [
        "Initial information disproportionately influences subsequent judgments",
        "People avoid using any reference points",
        "Judgments are unaffected by context",
        "Only experts are influenced by initial values",
      ],
      correct: 0,
      explanation:
        "Anchoring bias occurs when initial information (even if arbitrary or irrelevant) serves as a reference point that influences subsequent estimates. Tversky and Kahneman showed that random numbers (e.g., from a wheel spin) affected estimates of African UN membership. Anchoring affects negotiations, pricing, and numerical estimates.",
    },
    {
      q: "The framing effect demonstrates that:",
      options: [
        "People's choices are unaffected by how options are presented",
        "Logically equivalent choices presented differently lead to different decisions",
        "Gains and losses are psychologically equivalent",
        "Rational decision-making is unaffected by context",
      ],
      correct: 1,
      explanation:
        "The framing effect shows that logically equivalent choices presented differently (e.g., '90% survival' vs. '10% mortality') lead to different preferences. People are risk-averse for gains but risk-seeking for losses (prospect theory). This violates rational choice theory's assumption of description invariance.",
    },
    {
      q: "Functional fixedness is a barrier to problem-solving that involves:",
      options: [
        "Inability to see alternative uses for familiar objects",
        "Enhanced creative thinking",
        "Considering too many possible solutions",
        "Avoiding mental sets",
      ],
      correct: 0,
      explanation:
        "Functional fixedness is a cognitive bias that limits problem-solving by causing people to perceive objects only in terms of their typical function. In Duncker's candle problem, people struggle to use a box of tacks as a candle platform because they see the box only as a container, not a potential shelf.",
    },
    {
      q: "Insight problems differ from analytical problems in that they:",
      options: [
        "Require systematic step-by-step solution",
        "Are solved through sudden restructuring or 'aha' moments",
        "Cannot be solved by humans",
        "Always have multiple correct answers",
      ],
      correct: 1,
      explanation:
        "Insight problems (like the nine-dot problem or triangle of coins) require restructuring the problem representation and often involve sudden 'aha' moments rather than incremental progress. This contrasts with analytical problems that can be solved through systematic algorithms. Insight involves overcoming mental sets and initial incorrect representations.",
    },
    {
      q: "According to Kahneman's dual-process theory, System 1 thinking is characterized by:",
      options: [
        "Slow, deliberate, and effortful processing",
        "Fast, automatic, and intuitive processing",
        "Always producing correct answers",
        "Operating only in novel situations",
      ],
      correct: 1,
      explanation:
        "System 1 thinking is fast, automatic, effortful, and often emotionally driven—it operates intuitively based on heuristics and patterns. System 2 is slow, deliberate, effortful, and logical. Most judgments use System 1, with System 2 monitoring and intervening when necessary. System 1's efficiency comes at the cost of systematic biases.",
    },
    {
      q: "The Wason selection task demonstrates:",
      options: [
        "People naturally use valid logical reasoning",
        "People have difficulty with abstract conditional reasoning",
        "Deductive reasoning is always accurate",
        "Content never affects reasoning",
      ],
      correct: 1,
      explanation:
        "The Wason selection task shows that people struggle with abstract conditional logic ('if P then Q') but improve dramatically when the same logic is embedded in familiar content (e.g., age verification for alcohol). This supports evolutionary psychology views that reasoning evolved for social contracts rather than abstract logic.",
    },
    {
      q: "Spearman's theory of intelligence proposed:",
      options: [
        "Intelligence consists of multiple independent abilities",
        "A general factor (g) underlies all cognitive abilities",
        "Emotional intelligence is the only important type",
        "Intelligence cannot be measured",
      ],
      correct: 1,
      explanation:
        "Spearman proposed that a general intelligence factor (g) underlies performance across diverse cognitive tasks, explaining positive correlations among different mental tests. He also acknowledged specific abilities (s factors). Modern research using factor analysis and brain imaging provides some support for g, though its interpretation remains debated.",
    },
    {
      q: "Gardner's theory of multiple intelligences proposes:",
      options: [
        "Intelligence is a single unified ability",
        "There are distinct, independent types of intelligence (linguistic, musical, spatial, etc.)",
        "Only logical-mathematical intelligence matters",
        "Intelligence is entirely genetically determined",
      ],
      correct: 1,
      explanation:
        "Gardner proposed at least eight relatively independent intelligences: linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, and naturalist. While popular in education, this theory lacks strong psychometric support and critics note these may be talents/abilities rather than intelligences meeting strict criteria.",
    },
    {
      q: "Sternberg's triarchic theory of intelligence includes:",
      options: [
        "Only academic intelligence",
        "Analytical, creative, and practical intelligence",
        "Fluid and crystallized intelligence only",
        "Musical, spatial, and linguistic intelligence",
      ],
      correct: 1,
      explanation:
        "Sternberg's triarchic theory proposes three aspects: analytical intelligence (problem-solving and logical reasoning), creative intelligence (dealing with novelty and automatization), and practical intelligence (adapting to, shaping, and selecting environments—'street smarts'). This broader view goes beyond traditional IQ tests.",
    },
    {
      q: "Cattell distinguished between fluid intelligence (Gf) and crystallized intelligence (Gc). Fluid intelligence:",
      options: [
        "Increases steadily throughout the lifespan",
        "Refers to acquired knowledge and skills",
        "Involves reasoning ability and problem-solving in novel situations",
        "Is unrelated to working memory",
      ],
      correct: 2,
      explanation:
        "Fluid intelligence (Gf) is the capacity to reason and solve novel problems independent of acquired knowledge—it involves working memory, processing speed, and abstract reasoning. It peaks in young adulthood and declines with age. Crystallized intelligence (Gc) is accumulated knowledge and skills, which remains stable or increases with age.",
    },
    {
      q: "Executive functions include all of the following EXCEPT:",
      options: [
        "Inhibitory control",
        "Working memory",
        "Cognitive flexibility",
        "Long-term memory consolidation",
      ],
      correct: 3,
      explanation:
        "Executive functions are higher-order cognitive processes that control and regulate other abilities. Core components include inhibitory control (self-regulation, attention control), working memory (holding and manipulating information), and cognitive flexibility (perspective shifting, adjusting to demands). These rely primarily on prefrontal cortex. Long-term consolidation is not an executive function.",
    },
    {
      q: "The Wisconsin Card Sorting Test (WCST) is used to assess:",
      options: [
        "Episodic memory",
        "Executive function, particularly cognitive flexibility",
        "Language comprehension",
        "Motor coordination",
      ],
      correct: 1,
      explanation:
        "The WCST assesses executive function, especially cognitive flexibility and set-shifting ability. Participants match cards by undisclosed rules that change unpredictably. Perseverative errors (continuing to use old rules) indicate impaired cognitive flexibility, often associated with frontal lobe dysfunction. It's sensitive to conditions affecting executive control.",
    },
    {
      q: "Chomsky's theory of language acquisition emphasizes:",
      options: [
        "Language is learned entirely through reinforcement",
        "Humans have an innate language acquisition device (LAD)",
        "Language learning requires only imitation",
        "Grammar cannot be acquired by children",
      ],
      correct: 1,
      explanation:
        "Chomsky proposed an innate Language Acquisition Device (LAD)—biological endowment for language learning containing universal grammar. He argued children acquire language too rapidly and without sufficient input for behaviorist explanations (poverty of stimulus argument). This nativist view contrasts with Skinner's behaviorist account.",
    },
    {
      q: "The critical period hypothesis for language acquisition suggests:",
      options: [
        "Language can be acquired equally well at any age",
        "There is an optimal period in development for language acquisition",
        "Adults learn language more easily than children",
        "Language learning is impossible after puberty",
      ],
      correct: 1,
      explanation:
        "The critical period hypothesis proposes that language acquisition is most effective during a biologically determined period (early childhood). Evidence includes difficulty achieving native-like proficiency when learning a first language after this period (case of Genie) and second language learning. However, 'sensitive period' may be more accurate than 'critical.'",
    },
    {
      q: "Wernicke's area damage typically results in:",
      options: [
        "Loss of speech production with intact comprehension",
        "Fluent but meaningless speech with impaired comprehension",
        "Complete inability to process any language",
        "Improved language abilities",
      ],
      correct: 1,
      explanation:
        "Wernicke's aphasia (receptive aphasia) results from damage to Wernicke's area in the temporal lobe. Speech is fluent but often meaningless (word salad), with impaired comprehension. This contrasts with Broca's aphasia (damage to Broca's area in frontal lobe)—nonfluent, telegraphic speech but relatively preserved comprehension.",
    },
    {
      q: "The Sapir-Whorf hypothesis proposes that:",
      options: [
        "Language has no influence on thought",
        "Language shapes or determines thought and perception",
        "All languages have identical effects on cognition",
        "Thought is impossible without language",
      ],
      correct: 1,
      explanation:
        "The Sapir-Whorf hypothesis (linguistic relativity) proposes that language influences thought and perception. Strong versions claim language determines thought; weaker versions suggest influence. Evidence includes cross-linguistic differences in color perception, spatial reasoning, and grammatical gender effects. Most contemporary evidence supports weak linguistic relativity.",
    },
    {
      q: "Overregularization errors in children's language (e.g., 'goed' instead of 'went') demonstrate:",
      options: [
        "Children cannot learn language rules",
        "Children are applying grammatical rules creatively, not just imitating",
        "Language development is random",
        "Reinforcement is the only mechanism of language learning",
      ],
      correct: 1,
      explanation:
        "Overregularization errors show children extract and apply grammatical rules creatively rather than merely imitating adult speech. Applying regular past-tense rules to irregular verbs ('goed,' 'eated') demonstrates rule learning. This supports nativist and cognitive approaches over pure behaviorist accounts of language acquisition.",
    },
    {
      q: "Baddeley's episodic buffer component of working memory:",
      options: [
        "Stores only visual information",
        "Integrates information from multiple sources into coherent episodes",
        "Handles verbal rehearsal exclusively",
        "Is independent of long-term memory",
      ],
      correct: 1,
      explanation:
        "The episodic buffer, added later to Baddeley's model, is a limited-capacity system that integrates information from the phonological loop, visuospatial sketchpad, and long-term memory into coherent episodes or chunks. It serves as an interface between working memory subsystems and long-term memory.",
    },
    {
      q: "Prospective memory refers to:",
      options: [
        "Memory for past events",
        "Memory for future intentions and planned actions",
        "Memory for general knowledge",
        "Implicit memory for skills",
      ],
      correct: 1,
      explanation:
        "Prospective memory is remembering to perform intended actions in the future (e.g., taking medication at 8pm, mailing a letter). It involves time-based (remember at specific time) or event-based (remember when cue appears) tasks. It requires both retrospective memory (what to do) and prospective component (remembering to remember).",
    },
    {
      q: "Source monitoring errors occur when:",
      options: [
        "People correctly identify the source of a memory",
        "People misattribute a memory to the wrong source",
        "Memories are perfectly accurate",
        "Long-term memories cannot be retrieved",
      ],
      correct: 1,
      explanation:
        "Source monitoring errors involve misattributing a memory's source—confusing whether information was perceived, imagined, dreamed, or heard from someone else. This can lead to false memories and contributes to phenomena like cryptomnesia (unconscious plagiarism) and false eyewitness testimony. It's particularly common for highly familiar information.",
    },
    {
      q: "Priming in memory demonstrates:",
      options: [
        "Explicit, conscious recollection only",
        "Implicit memory through facilitated processing of previously encountered stimuli",
        "Memory requires conscious awareness",
        "Long-term memory is always declarative",
      ],
      correct: 1,
      explanation:
        "Priming is an implicit memory effect where prior exposure to a stimulus influences subsequent processing without conscious recollection. Perceptual priming (identifying degraded words faster if seen before) and conceptual priming (concept activation) can occur in amnesia patients with impaired explicit memory, demonstrating dissociable memory systems.",
    },
    {
      q: "The generation effect in memory shows that:",
      options: [
        "Reading information produces better memory than generating it",
        "Self-generated information is better remembered than passively received information",
        "Memory is unaffected by encoding activities",
        "Recognition is always inferior to recall",
      ],
      correct: 1,
      explanation:
        "The generation effect demonstrates that information we generate ourselves (completing word fragments, answering questions) is better remembered than information we passively read. This occurs because generation requires deeper, more elaborative processing and creates distinctive memory traces. It has important implications for learning strategies.",
    },
    {
      q: "Metacognition refers to:",
      options: [
        "Memory for factual information",
        "Thinking about one's own thinking and learning processes",
        "Automatic cognitive processes",
        "Perceptual abilities",
      ],
      correct: 1,
      explanation:
        "Metacognition is 'thinking about thinking'—awareness and regulation of one's own cognitive processes. It includes metacognitive knowledge (knowing about cognition), monitoring (assessing one's understanding), and control (regulating learning strategies). Poor metacognitive accuracy (illusion of knowing) can impair learning; effective metacognition improves academic performance.",
    },
    {
      q: "The Dunning-Kruger effect demonstrates that:",
      options: [
        "Experts always accurately assess their abilities",
        "People with low ability in a domain tend to overestimate their competence",
        "Everyone has accurate self-assessment",
        "Competence is unrelated to self-assessment",
      ],
      correct: 1,
      explanation:
        "The Dunning-Kruger effect shows that people with low competence in a domain often overestimate their ability because they lack the metacognitive skills to recognize their limitations. Conversely, experts may slightly underestimate their relative standing. This has implications for education, workplace performance, and clinical practice.",
    },
    {
      q: "Learned helplessness, as demonstrated by Seligman's research, occurs when:",
      options: [
        "Organisms learn they can control outcomes through effort",
        "Organisms exposed to uncontrollable aversive events learn that responses don't affect outcomes",
        "Positive reinforcement is consistently applied",
        "Classical conditioning is impossible",
      ],
      correct: 1,
      explanation:
        "Learned helplessness develops when organisms experience uncontrollable aversive events, learning that their responses don't influence outcomes. This leads to motivational, cognitive, and emotional deficits, including passivity when control becomes possible. Seligman proposed this as a model for depression, later refined with attributional style theory.",
    },
    {
      q: "Hindsight bias is the tendency to:",
      options: [
        "Accurately predict future events",
        "Believe after an event that one would have predicted it (knew-it-all-along effect)",
        "Forget past predictions",
        "Avoid making any predictions",
      ],
      correct: 1,
      explanation:
        "Hindsight bias is the tendency to perceive past events as more predictable than they actually were ('I knew it all along'). After learning an outcome, people overestimate how predictable it was, underestimating the uncertainty that existed before. This affects legal judgments, medical decisions, and evaluation of past decisions.",
    },
    {
      q: "The peak-end rule in memory suggests that:",
      options: [
        "We remember experiences based on average intensity throughout",
        "We judge experiences largely based on the peak intensity and the end",
        "Duration has the strongest effect on memory",
        "All moments of an experience are weighted equally in memory",
      ],
      correct: 1,
      explanation:
        "The peak-end rule (Kahneman) shows that retrospective evaluations of experiences are dominated by the peak (most intense) moment and the end, with duration largely neglected (duration neglect). This explains why a longer painful procedure with a less painful end may be retrospectively preferred to a shorter one ending at peak pain.",
    },
    {
      q: "Rescorla-Wagner model of classical conditioning emphasizes:",
      options: [
        "Contiguity alone is sufficient for conditioning",
        "Learning depends on the predictiveness of the CS (violated expectations)",
        "All CS-UCS pairings produce equal conditioning",
        "Extinction is impossible once conditioning occurs",
      ],
      correct: 1,
      explanation:
        "The Rescorla-Wagner model proposes that learning occurs when events violate expectations—conditioning strength depends on the predictiveness of the CS for the UCS, not just contiguity. Phenomena like blocking (prior learning of one CS prevents conditioning to a second CS) support this model. Learning is driven by prediction errors.",
    },
    {
      q: "Observational learning requires which of Bandura's four processes?",
      options: [
        "Attention, retention, reproduction, motivation",
        "Stimulus, response, consequence, extinction",
        "Encoding, storage, retrieval, recognition",
        "Sensation, perception, cognition, action",
      ],
      correct: 0,
      explanation:
        "Bandura identified four requirements for observational learning: attention (noticing the behavior), retention (remembering it), reproduction (physical/cognitive ability to perform it), and motivation (reason to imitate—influenced by vicarious reinforcement/punishment). This framework explains when modeling will and won't occur.",
    },
    {
      q: "The method of loci (memory palace technique) is an example of:",
      options: [
        "Distributed practice",
        "Elaborative rehearsal using spatial imagery",
        "Maintenance rehearsal",
        "Overlearning through repetition",
      ],
      correct: 1,
      explanation:
        "The method of loci is an ancient mnemonic technique using elaborative rehearsal combined with spatial memory. Information is mentally placed at specific locations along a familiar route. This leverages the brain's strong spatial memory abilities and creates distinctive, meaningful memory cues through visual-spatial associations.",
    },
    {
      q: "Spreading activation in semantic networks suggests that:",
      options: [
        "Memories are stored in isolated, independent units",
        "Activation of one concept facilitates activation of related concepts",
        "All concepts are equally connected",
        "Memory retrieval is always serial",
      ],
      correct: 1,
      explanation:
        "Spreading activation theory (Collins & Loftus) proposes that activating a concept in a semantic network automatically spreads activation to related concepts, making them more accessible. This explains semantic priming effects (e.g., 'doctor' primes 'nurse') and the structure of conceptual knowledge as interconnected networks rather than isolated units.",
    },
    {
      q: "State-dependent learning demonstrates that:",
      options: [
        "Learning is independent of internal physiological state",
        "Memory retrieval is enhanced when internal state matches learning state",
        "Emotional states have no effect on memory",
        "Drug states never affect memory",
      ],
      correct: 1,
      explanation:
        "State-dependent learning shows that memory retrieval is enhanced when one's internal physiological or psychological state at retrieval matches the state during encoding. This includes drug states (e.g., caffeine, alcohol) and mood states. It represents a form of encoding specificity and has implications for testing conditions and clinical assessment.",
    },
    {
      q: "Inattentional blindness refers to:",
      options: [
        "Visual impairment from lack of attention",
        "Failure to notice unexpected stimuli when attention is engaged elsewhere",
        "Improved detection of all stimuli",
        "Blindness to familiar objects only",
      ],
      correct: 1,
      explanation:
        "Inattentional blindness is the failure to perceive unexpected stimuli when attention is directed elsewhere, even if the stimulus is in plain view. Simons and Chabris's 'invisible gorilla' study demonstrated this dramatically—participants counting basketball passes failed to notice a gorilla walking through the scene. Shows attention is necessary for conscious perception.",
    },
    {
      q: "The distinction between automatic and controlled processing is that automatic processing:",
      options: [
        "Requires focused attention and conscious effort",
        "Occurs without conscious attention and is fast and effortless",
        "Is always more accurate than controlled processing",
        "Cannot be developed through practice",
      ],
      correct: 1,
      explanation:
        "Automatic processing occurs without conscious attention, is fast, parallel, and effortless, but inflexible (e.g., reading for literate adults). Controlled processing requires attention, is slow, serial, and effortful, but flexible. Skills shift from controlled to automatic with practice (e.g., driving). Stroop task demonstrates the challenge of inhibiting automatic processes.",
    },
    {
      q: "Eidetic imagery (photographic memory) in adults:",
      options: [
        "Is common and well-documented",
        "Is extremely rare and poorly documented despite popular belief",
        "Allows perfect recall of all visual information",
        "Is easily trainable through practice",
      ],
      correct: 1,
      explanation:
        "Contrary to popular belief, true eidetic imagery is extremely rare in adults (more common in children, but still uncommon). Well-documented cases are virtually non-existent. People with exceptional memory (memory champions) use mnemonic strategies and practice, not photographic memory. Most 'photographic memory' claims don't hold up under controlled testing.",
    },
    {
      q: "The self-reference effect in memory shows that:",
      options: [
        "Information processed in relation to the self is poorly remembered",
        "Information encoded with reference to oneself is remembered better than other encoding",
        "Self-related information and other information are equally memorable",
        "Memory is unaffected by personal relevance",
      ],
      correct: 1,
      explanation:
        "The self-reference effect demonstrates that information processed in relation to oneself is remembered better than information processed for meaning alone. Asking 'Does this describe me?' produces better recall than 'What does this mean?' This reflects the richness and organization of self-schema and deep, elaborative processing.",
    },
    {
      q: "According to incentive theory of motivation:",
      options: [
        "Only internal drives motivate behavior",
        "External stimuli (incentives) motivate behavior by pulling organisms toward goals",
        "Homeostasis is the only motivator",
        "Rewards and punishments have equal effects",
      ],
      correct: 1,
      explanation:
        "Incentive theory emphasizes that external stimuli (positive or negative incentives) motivate behavior by 'pulling' organisms toward or away from goals, complementing drive theory's 'push' from internal needs. Incentive value is influenced by learning, expectations, and individual differences. This explains motivation when biological needs aren't present.",
    },
    {
      q: "Seligman's attributional reformulation of learned helplessness proposes that helplessness is most likely when failures are attributed to:",
      options: [
        "External, unstable, specific causes",
        "Internal, stable, global causes",
        "External, stable, specific causes",
        "Internal, unstable, specific causes",
      ],
      correct: 1,
      explanation:
        "The reformulated learned helplessness theory (Abramson, Seligman, Teasdale) proposes that attributing negative events to internal (it's me), stable (it's permanent), and global (it affects everything) causes increases risk for depression and helplessness. This attributional style—the explanatory style—predicts depression more than uncontrollable events alone.",
    },
    {
      q: "Long-term potentiation (LTP) is believed to be a neural mechanism for:",
      options: [
        "Memory decay",
        "Learning and memory through strengthened synaptic connections",
        "Forgetting through synaptic weakening",
        "Short-term memory only",
      ],
      correct: 1,
      explanation:
        "Long-term potentiation (LTP) is a persistent strengthening of synapses based on recent patterns of activity, discovered in the hippocampus. Repeated stimulation leads to increased synaptic efficiency. LTP is considered a cellular mechanism for learning and memory formation, demonstrating how experience changes neural connections ('cells that fire together, wire together').",
    },
    {
      q: "The distinction between sensation and perception is that:",
      options: [
        "They are identical processes",
        "Sensation is detection of stimuli; perception is interpretation and organization",
        "Perception occurs before sensation",
        "Sensation involves interpretation; perception does not",
      ],
      correct: 1,
      explanation:
        "Sensation is the process of detecting physical energy from the environment through sensory receptors. Perception is the process of organizing, interpreting, and consciously experiencing sensory information. While sensation is more bottom-up (data-driven), perception involves top-down processing (expectations, knowledge). Both are essential for experiencing the world.",
    },
    {
      q: "Negative punishment in operant conditioning involves:",
      options: [
        "Adding an aversive stimulus to decrease behavior",
        "Removing a desirable stimulus to decrease behavior",
        "Adding a desirable stimulus to increase behavior",
        "Removing an aversive stimulus to increase behavior",
      ],
      correct: 1,
      explanation:
        "Negative punishment (also called penalty or response cost) decreases behavior by removing a desirable stimulus (e.g., taking away privileges, timeout from positive reinforcement). This differs from positive punishment (adding aversive stimulus) and negative reinforcement (removing aversive stimulus to increase behavior). Both punishment types decrease behavior.",
    },
  ],
  flashcards: [
    {
      front: "Schedules of Reinforcement",
      back: "Fixed-Ratio: reinforce after set # of responses (post-reinforcement pause). Variable-Ratio: reinforce after variable # (high, steady rate). Fixed-Interval: reinforce first response after set time (scallop pattern). Variable-Interval: reinforce first response after variable time (slow, steady rate).",
    },
    {
      front: "Piaget's Cognitive Development Stages",
      back: "Sensorimotor (0-2): Object permanence. Preoperational (2-7): Egocentrism, conservation failure, symbolic thought. Concrete Operational (7-11): Conservation, logical operations on concrete objects. Formal Operational (12+): Abstract reasoning, hypothetical thinking.",
    },
    {
      front: "Types of Long-Term Memory",
      back: "Explicit (Declarative): Episodic (personal events) & Semantic (facts/knowledge). Implicit (Nondeclarative): Procedural (skills), Priming, Classical conditioning. Explicit requires hippocampus; implicit involves cerebellum and basal ganglia.",
    },
    {
      front: "Cognitive Dissonance Theory (Festinger)",
      back: "People experience discomfort when holding contradictory beliefs or when behavior contradicts beliefs. They reduce dissonance by: changing beliefs, changing behavior, adding consonant cognitions, or minimizing importance. Classic study: $1 vs $20 paradigm—less payment → more attitude change.",
    },
    {
      front: "Classical Conditioning Components",
      back: "UCS (Unconditioned Stimulus): naturally elicits response. UCR (Unconditioned Response): natural response to UCS. CS (Conditioned Stimulus): initially neutral, paired with UCS. CR (Conditioned Response): learned response to CS. Example: Food (UCS) → Salivation (UCR); Bell (CS) → Salivation (CR).",
    },
    {
      front: "Baddeley's Working Memory Model",
      back: "Central Executive: attentional control, coordinates subsystems. Phonological Loop: verbal/auditory storage (word length effect, phonological similarity effect). Visuospatial Sketchpad: visual/spatial info. Episodic Buffer: integrates info from subsystems and LTM. Capacity: ~3-4 chunks.",
    },
    {
      front: "Emotion Theories Comparison",
      back: "James-Lange: arousal → emotion (we're afraid because we run). Cannon-Bard: arousal and emotion simultaneous (thalamus). Schachter-Singer: arousal + cognitive label → emotion (two-factor). Lazarus: cognitive appraisal → emotion (primary/secondary appraisal).",
    },
    {
      front: "Types of Amnesia",
      back: "Anterograde: cannot form new memories (H.M. after hippocampal damage). Retrograde: cannot recall pre-injury memories (temporal gradient—recent most affected). Source Amnesia: remember info but not source. Korsakoff's Syndrome: anterograde + retrograde + confabulation (thiamine deficiency).",
    },
    {
      front: "Cognitive Heuristics",
      back: "Availability: judge probability by ease of recall (plane crash > car crash subjectively). Representativeness: judge by similarity to prototype (Linda problem, ignoring base rates). Anchoring: initial value influences estimates. Affect: emotions guide judgments.",
    },
    {
      front: "Levels of Processing Theory",
      back: "Craik & Lockhart: memory depends on depth of processing. Structural (appearance): shallowest. Phonemic (sound): intermediate. Semantic (meaning): deepest, best retention. Challenges rehearsal-based models; emphasizes quality over quantity of processing.",
    },
    {
      front: "Memory Interference",
      back: "Proactive: old info interferes with new (old phone # → new phone #). Retroactive: new info interferes with old (new password → old password). Both support interference theory of forgetting rather than decay. Worse with similar material.",
    },
    {
      front: "Serial Position Effect",
      back: "Primacy Effect: better recall of early items (transferred to LTM via rehearsal). Recency Effect: better recall of recent items (still in STM/working memory). Middle items recalled worst. Evidence for separate STM/LTM systems. Recency eliminated by delay.",
    },
    {
      front: "Bandura's Social Learning Theory",
      back: "Learning through observation without direct reinforcement. Requirements: Attention, Retention, Reproduction (ability), Motivation. Bobo doll study: children imitated aggressive models. Vicarious reinforcement/punishment affects likelihood of imitation. Challenges strict behaviorism.",
    },
    {
      front: "Executive Functions",
      back: "Higher-order cognitive control processes (prefrontal cortex). Core components: Inhibitory Control (impulse control, selective attention), Working Memory (holding/manipulating info), Cognitive Flexibility (set-shifting, perspective-taking). Assessed via Stroop, WCST, n-back tasks.",
    },
    {
      front: "Brain Structures in Memory",
      back: "Hippocampus: forming new explicit memories (H.M. case). Amygdala: emotional memory, fear conditioning. Cerebellum: procedural memory, motor learning. Basal Ganglia: habit formation, implicit learning. Prefrontal Cortex: working memory, source monitoring.",
    },
    {
      front: "Maslow's Hierarchy of Needs",
      back: "From basic to higher: 1) Physiological (food, water, sleep), 2) Safety (security), 3) Love/Belonging (relationships), 4) Esteem (achievement, respect), 5) Self-Actualization (fulfilling potential). Lower needs must be met before higher needs motivate. Cultural variations exist.",
    },
    {
      front: "Intrinsic vs. Extrinsic Motivation",
      back: "Intrinsic: behavior for inherent satisfaction/enjoyment. Extrinsic: behavior for external rewards/outcomes. Overjustification Effect: external rewards can undermine intrinsic motivation. Self-Determination Theory: autonomy, competence, relatedness support intrinsic motivation.",
    },
    {
      front: "Intelligence Theories",
      back: "Spearman: general intelligence (g) + specific abilities (s). Cattell: Fluid (Gf—novel reasoning, declines with age) & Crystallized (Gc—knowledge, stable/increases with age). Gardner: Multiple Intelligences (8 types). Sternberg: Triarchic (analytical, creative, practical).",
    },
    {
      front: "Encoding Specificity Principle",
      back: "Tulving: retrieval enhanced when encoding context matches retrieval context. Context-Dependent Memory: environmental cues (underwater divers study). State-Dependent Memory: internal state cues (mood, drug state). Transfer-Appropriate Processing: encoding/retrieval match improves memory.",
    },
    {
      front: "Language Acquisition Theories",
      back: "Nativist (Chomsky): innate LAD (Language Acquisition Device), universal grammar, poverty of stimulus. Behaviorist (Skinner): reinforcement and imitation. Interactionist: biology + environment. Critical/Sensitive Period: optimal time for language learning (evidence: Genie case, second language learning).",
    },
    {
      front: "Aphasia Types",
      back: "Broca's Aphasia: damage to Broca's area (frontal lobe). Non-fluent, telegraphic speech, good comprehension, aware of deficits. Wernicke's Aphasia: damage to Wernicke's area (temporal lobe). Fluent, meaningless speech (word salad), poor comprehension, unaware of deficits.",
    },
    {
      front: "Dual-Process Theory (Kahneman)",
      back: "System 1: Fast, automatic, intuitive, effortless, error-prone (uses heuristics). System 2: Slow, deliberate, effortful, logical, resource-intensive. Most thinking uses System 1 with System 2 monitoring. Cognitive biases arise from System 1 processing.",
    },
    {
      front: "Extinction and Related Phenomena",
      back: "Extinction: CR weakens when CS presented without UCS. Spontaneous Recovery: CR reappears after rest period (shows learning not erased). Renewal: CR returns in original conditioning context. Shows extinction is new learning (inhibition), not unlearning.",
    },
    {
      front: "Problem-Solving Barriers",
      back: "Functional Fixedness: seeing objects only in typical function (Duncker's candle problem). Mental Set: tendency to use familiar solutions, blocks creative approaches (Luchins' water jug). Confirmation Bias: seeking confirming evidence (Wason 2-4-6 task).",
    },
    {
      front: "Memory Consolidation",
      back: "Process of stabilizing memory traces. Synaptic Consolidation: hours, local synaptic changes. Systems Consolidation: weeks-years, hippocampus → cortex transfer. Sleep aids consolidation. Reconsolidation: reactivated memories become labile, can be modified. Emotional arousal enhances consolidation.",
    },
    {
      front: "Attention Models",
      back: "Broadbent's Filter: early selection, physical characteristics only. Treisman's Attenuation: early selection but unattended info attenuated, not blocked (explains cocktail party effect). Deutsch-Norman: late selection, semantic analysis before selection. Posner: covert attention shifts independent of eyes.",
    },
    {
      front: "Goal-Setting Theory (Locke & Latham)",
      back: "Effective goals are: Specific (not vague), Challenging (not too easy), Accompanied by feedback. Increases performance, focus, persistence. Moderators: commitment, self-efficacy, task complexity. Proximity (near vs. far), learning vs. performance goals affect outcomes.",
    },
    {
      front: "Testing Effect & Spacing Effect",
      back: "Testing Effect: retrieval practice enhances retention more than restudying (even if more difficult). Spacing Effect: distributed practice over time beats massed practice (cramming). Both are robust, evidence-based learning principles. Desirable difficulties enhance long-term retention.",
    },
    {
      front: "Bias and Heuristics in Memory",
      back: "Hindsight Bias: 'knew-it-all-along' effect. Confirmation Bias: seeking confirming evidence. Misinformation Effect (Loftus): post-event info alters memory. False Memories: can be implanted (lost in mall study). Demonstrates reconstructive nature of memory.",
    },
    {
      front: "Emotional Memory Enhancement",
      back: "Emotional arousal enhances memory consolidation (amygdala modulation). Flashbulb Memories: vivid memories of significant events (9/11), but not more accurate despite confidence. Weapon Focus: attention narrowing to threatening stimulus reduces peripheral memory. Emotion narrows attention, enhances central details.",
    },
    {
      front: "Self-Determination Theory (Deci & Ryan)",
      back: "Three basic psychological needs: Autonomy (feeling in control, choice), Competence (feeling effective, mastery), Relatedness (connection to others). Satisfaction promotes well-being, intrinsic motivation. Autonomy support > control. Applies across cultures with some variation.",
    },
    {
      front: "Metacognition and Learning",
      back: "Thinking about thinking: metacognitive knowledge, monitoring, control. Accurate metacognition improves learning. Illusions: Fluency Illusion (easy = learned), Desirable Difficulties (challenge aids retention). Dunning-Kruger: low competence → overconfidence. Effective strategies: self-testing, distributed practice.",
    },
    {
      front: "Language and Thought (Linguistic Relativity)",
      back: "Sapir-Whorf Hypothesis: language influences thought. Strong version (determinism): language determines thought—mostly rejected. Weak version: language influences perception/cognition—supported. Evidence: color perception across languages, spatial frames of reference, grammatical gender effects.",
    },
  ],
};
