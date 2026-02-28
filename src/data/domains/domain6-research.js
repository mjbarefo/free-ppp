export const researchDomain = {
  id: "research",
  name: "Research Methods & Statistics",
  weight: 7,
  color: "#20B2AA",
  icon: "📊",
  description: "Research design, statistical analysis, program evaluation",
  topics: [
    "Experimental vs. quasi-experimental designs",
    "Internal and external validity threats",
    "Descriptive and inferential statistics",
    "ANOVA, regression, and correlation",
    "Effect sizes and power analysis",
    "Qualitative research methods",
    "Meta-analysis",
    "Program evaluation models",
    "Mediator and moderator analyses",
    "Publication bias and file-drawer problem",
    "Replication crisis and open science practices",
    "Bayesian statistics (emerging alternative to NHST)",
    "Power analysis and sample size determination",
    "Multiple comparison corrections (Bonferroni, FDR)",
    "Sampling methods and generalizability",
    "Research ethics and IRB procedures",
    "Measurement scales and psychometrics",
  ],
  questions: [
    {
      q: "A Type I error occurs when:",
      options: [
        "The null hypothesis is not rejected when it is false",
        "The null hypothesis is rejected when it is actually true",
        "The sample size is too small",
        "The effect size is too large",
      ],
      correct: 1,
      explanation:
        "A Type I error (false positive, α error) occurs when a researcher incorrectly rejects a true null hypothesis—concluding there is an effect when there isn't one. The probability of a Type I error is set by the significance level (α, typically .05). A Type II error (β error) is failing to reject a false null hypothesis.",
    },
    {
      q: "Which statistical test is MOST appropriate for examining the relationship between two continuous variables?",
      options: [
        "Chi-square test",
        "Pearson correlation coefficient",
        "Independent samples t-test",
        "One-way ANOVA",
      ],
      correct: 1,
      explanation:
        "Pearson's r measures the linear relationship between two continuous (interval/ratio) variables, ranging from -1 to +1. Chi-square tests categorical data associations, t-tests compare group means on one variable, and ANOVA compares means across three or more groups.",
    },
    {
      q: "In a between-subjects factorial design with two independent variables (2×3), how many conditions are there?",
      options: ["5", "6", "8", "3"],
      correct: 1,
      explanation:
        "In a factorial design, the number of conditions equals the product of the levels: 2 × 3 = 6 conditions. This design allows examination of two main effects and one interaction effect.",
    },
    {
      q: "Cohen's d is a measure of:",
      options: [
        "Statistical significance",
        "Effect size",
        "Reliability",
        "Internal validity",
      ],
      correct: 1,
      explanation:
        "Cohen's d quantifies the standardized difference between two group means in standard deviation units. Small = 0.2, Medium = 0.5, Large = 0.8. Unlike p-values (which indicate statistical significance), effect sizes communicate the practical magnitude of a difference.",
    },
    {
      q: "In a 2×2 factorial ANOVA, a significant interaction effect indicates that:",
      options: [
        "Both independent variables have significant main effects",
        "The effect of one independent variable depends on the level of the other",
        "There is no relationship between the independent variables",
        "The dependent variable is not normally distributed",
      ],
      correct: 1,
      explanation:
        "An interaction effect means the effect of one independent variable on the dependent variable differs across levels of the other independent variable. For example, a treatment might be effective for men but not women (treatment × gender interaction). Interactions can be present even without significant main effects.",
    },
    {
      q: "Grounded theory, a qualitative research methodology, is characterized by:",
      options: [
        "Testing hypotheses derived from existing theory",
        "Generating theory from systematic analysis of data",
        "Using only quantitative measurement",
        "Experimental manipulation of variables",
      ],
      correct: 1,
      explanation:
        "Grounded theory (Glaser & Strauss) is an inductive qualitative approach where theory emerges from systematic data collection and analysis rather than testing pre-existing hypotheses. Key processes include coding, constant comparison, theoretical sampling, and saturation. Widely used in psychology and health research.",
    },
    {
      q: "Statistical power in hypothesis testing refers to:",
      options: [
        "The probability of rejecting a true null hypothesis",
        "The probability of correctly rejecting a false null hypothesis",
        "The strength of the correlation between variables",
        "The size of the effect being tested",
      ],
      correct: 1,
      explanation:
        "Power = 1 - β, the probability of correctly rejecting a false null hypothesis (avoiding a Type II error). Adequate power (typically .80 or higher) ensures sufficient ability to detect a true effect. Power is increased by larger sample sizes, larger effect sizes, higher alpha levels, and lower variability.",
    },
    {
      q: "Random assignment to conditions is MOST important for:",
      options: [
        "Increasing external validity",
        "Establishing internal validity and allowing causal inferences",
        "Ensuring the sample represents the population",
        "Reducing measurement error"
      ],
      correct: 1,
      explanation: "Random assignment (not random sampling) controls for confounds by distributing participant characteristics equally across conditions, establishing internal validity (confidence that IV caused DV change). Enables causal inference—the hallmark of true experiments. Random sampling (different concept) enhances external validity (generalizability). Quasi-experiments lack random assignment, limiting causal claims. Clinical trials use random assignment to treatment conditions; observational studies cannot."
    },
    {
      q: "A researcher finds p = .03 and concludes the treatment is effective. However, the effect size (Cohen's d) is 0.15. The BEST interpretation is:",
      options: [
        "The result is statistically significant and clinically meaningful",
        "The result is statistically significant but the effect is very small and may not be clinically meaningful",
        "The result is neither statistically nor clinically significant",
        "Effect size is irrelevant if p < .05"
      ],
      correct: 1,
      explanation: "Statistical significance (p < .05) indicates the effect is unlikely due to chance but says nothing about magnitude or practical importance. Cohen's d = 0.15 is smaller than 'small' (0.2). Large samples can produce significant p-values for trivial effects. Always report effect sizes alongside p-values. Clinical significance requires meaningful symptom reduction, functional improvement, or cost-effectiveness. This distinction is critical for evidence-based practice—statistical significance ≠ clinical importance."
    },
    {
      q: "In a regression analysis, multicollinearity refers to:",
      options: [
        "High correlations among predictor variables",
        "Non-linear relationships between variables",
        "Violations of homoscedasticity",
        "Missing data patterns"
      ],
      correct: 0,
      explanation: "Multicollinearity: high intercorrelations among predictor (independent) variables, making it difficult to determine each variable's unique contribution. Symptoms: unstable regression coefficients, inflated standard errors, reduced statistical power. Assessed via Variance Inflation Factor (VIF; >10 problematic) or tolerance (<.10 problematic). Solutions: remove redundant predictors, combine correlated predictors, use principal components analysis. Example: including both 'years of education' and 'degree level' as predictors creates multicollinearity."
    },
    {
      q: "The assumption of homogeneity of variance in a t-test means:",
      options: [
        "The means of the two groups are equal",
        "The variances of the two groups are approximately equal",
        "The data are normally distributed",
        "The samples are the same size"
      ],
      correct: 1,
      explanation: "Homogeneity of variance (homoscedasticity): population variances are equal across groups. Tested via Levene's test (if significant, assumption violated). Violation: use Welch's t-test (doesn't assume equal variances) or other corrections. Related to homogeneity of regression slopes (ANCOVA). Violations more problematic with unequal sample sizes. Understanding parametric test assumptions is critical—violations can inflate Type I or Type II error rates."
    },
    {
      q: "In a 2x3 ANOVA, a significant main effect of Factor A indicates:",
      options: [
        "Factor A interacts with Factor B",
        "The levels of Factor A differ significantly when collapsed across Factor B",
        "Factor B has no effect",
        "The interaction is not significant"
      ],
      correct: 1,
      explanation: "Main effect of Factor A: overall differences among levels of A, averaging across levels of B. Separate from interaction effects. You can have: main effects without interactions, interactions without main effects, both, or neither. Significant interaction may make main effects uninterpretable—examine simple effects instead (effect of one IV at each level of the other). Factorial designs test multiple hypotheses simultaneously: 2 main effects + 1 interaction in 2x3 design."
    },
    {
      q: "A p-value of .04 means:",
      options: [
        "There is a 4% probability the null hypothesis is true",
        "There is a 96% probability the alternative hypothesis is true",
        "If the null hypothesis were true, the probability of obtaining results this extreme (or more) is 4%",
        "The effect size is .04"
      ],
      correct: 2,
      explanation: "P-value: probability of obtaining results as extreme as (or more than) observed, ASSUMING the null hypothesis is true. It does NOT indicate: probability null is true, probability alternative is true, or effect size. Common misconception: 'p = .04 means 96% chance my hypothesis is correct' is WRONG. P-value is probability of data given null, not probability of hypothesis given data. Understanding this prevents over-interpretation of p-values. Related: 'statistically significant' doesn't mean 'important.'"
    },
    {
      q: "Internal validity is threatened by 'regression to the mean' when:",
      options: [
        "Participants are selected based on extreme scores and measured again",
        "The measurement instrument changes during the study",
        "Participants drop out differentially between groups",
        "Historical events occur during the study"
      ],
      correct: 0,
      explanation: "Regression to the mean: extreme scores tend toward the average on retesting due to random error. Threatens internal validity when participants selected for extreme scores (e.g., enrolling 'most depressed' clients). Apparent 'improvement' may reflect regression, not treatment. Control: use control groups, reliable measures, consider typical fluctuation. Classic example: Sports Illustrated jinx—outstanding performance (partly luck) followed by more typical (apparently worse) performance. Critical for interpreting pre-post designs without controls."
    },
    {
      q: "What is the appropriate statistical test for analyzing the relationship between two categorical variables (e.g., gender and diagnosis)?",
      options: [
        "Pearson correlation",
        "Independent samples t-test",
        "Chi-square test of independence",
        "One-way ANOVA"
      ],
      correct: 2,
      explanation: "Chi-square test of independence (χ²): examines whether two categorical variables are independent or associated. Creates contingency table, compares observed vs. expected frequencies. Assumptions: independent observations, expected frequency ≥5 in each cell (if violated, use Fisher's exact test). Example: Is diagnosis (depressed/anxious/control) associated with treatment response (improved/unchanged/worse)? For 2x2 tables, can calculate odds ratio or relative risk. Don't use for continuous data—that's correlation/regression."
    },
    {
      q: "Cronbach's alpha assesses:",
      options: [
        "Test-retest reliability",
        "Internal consistency reliability",
        "Inter-rater reliability",
        "Content validity"
      ],
      correct: 1,
      explanation: "Cronbach's alpha (α): internal consistency—how well items measure the same construct. Range: 0-1. ≥.70 acceptable, ≥.80 good, ≥.90 excellent (but >.95 may indicate redundancy). Based on average inter-item correlations and number of items. Assumes unidimensional scale (all items measure one construct). If multidimensional, calculate α for each subscale. Doesn't assess stability (test-retest), agreement (inter-rater), or validity. High α doesn't guarantee validity—items could consistently measure the wrong thing."
    },
    {
      q: "In a normal distribution, approximately what percentage of scores fall within two standard deviations of the mean?",
      options: [
        "68%",
        "95%",
        "99.7%",
        "50%"
      ],
      correct: 1,
      explanation: "Empirical rule (68-95-99.7): In normal distribution, ~68% fall within ±1 SD, ~95% within ±2 SD, ~99.7% within ±3 SD. Critical for understanding z-scores, percentiles, confidence intervals. Example: IQ (M=100, SD=15): 95% fall between 70-130 (±2 SD). z-score of ±1.96 corresponds to 95% CI. Understanding normal distribution is fundamental to parametric statistics, psychological testing, and research interpretation."
    },
    {
      q: "A meta-analysis is BEST defined as:",
      options: [
        "A comprehensive literature review without statistical synthesis",
        "A statistical integration of results from multiple studies to estimate overall effect size",
        "A single large-scale study with many participants",
        "A qualitative synthesis of theoretical papers"
      ],
      correct: 1,
      explanation: "Meta-analysis: quantitative synthesis of multiple studies addressing the same research question, calculating weighted average effect size. Provides more precise estimates than single studies, resolves conflicting findings, identifies moderators. Publication bias (file-drawer problem): negative results less likely published, inflating meta-analytic effects. Assessed via funnel plots, fail-safe N. Cochrane Collaboration produces high-quality meta-analyses of treatment effectiveness. Gold standard evidence in evidence-based practice hierarchies."
    },
    {
      q: "Mediator vs. Moderator variables:",
      options: [
        "Mediators explain HOW an effect occurs; moderators explain WHEN or FOR WHOM an effect occurs",
        "Mediators and moderators are synonymous terms",
        "Mediators strengthen effects; moderators weaken them",
        "Mediators are categorical; moderators are continuous"
      ],
      correct: 0,
      explanation: "Mediator: explains the mechanism (HOW X affects Y). X → Mediator → Y. Example: Therapy (X) → changed cognitions (mediator) → reduced depression (Y). Tested via: X→M significant, M→Y significant, X→Y reduced when M included (Baron & Kenny; modern: bootstrapped indirect effects). Moderator: specifies WHEN or FOR WHOM effects occur. X × Moderator → Y. Example: Therapy effectiveness differs by age (moderator). Tested via interaction term. Both advance theoretical understanding beyond simple X→Y relationships."
    },
    {
      q: "External validity is MOST enhanced by:",
      options: [
        "Random assignment to conditions",
        "Using highly controlled laboratory settings",
        "Random sampling from the target population",
        "Increasing internal validity"
      ],
      correct: 2,
      explanation: "External validity (generalizability): extent findings apply to other people, settings, times. Enhanced by: random sampling from target population, diverse samples, natural settings, representative stimuli/tasks. Tension with internal validity: tight control (high internal validity) may create artificial conditions (low external validity). Trade-offs necessary. Random assignment (not random sampling) enhances internal validity. Solutions: replications across settings/populations, field experiments, both lab (mechanisms) and field (generalizability) studies."
    },
    {
      q: "A researcher wants to test whether three different therapy approaches differ in effectiveness. The appropriate statistical test is:",
      options: [
        "Independent samples t-test",
        "Paired samples t-test",
        "One-way ANOVA",
        "Pearson correlation"
      ],
      correct: 2,
      explanation: "One-way ANOVA (Analysis of Variance) compares means across three or more independent groups. T-tests are limited to two groups. If ANOVA is significant (F test), follow-up with post-hoc tests (Tukey HSD, Bonferroni) to identify which specific groups differ. Paired t-test is for related samples. ANOVA partitions variance into between-groups and within-groups components. For two groups, t-test and ANOVA yield equivalent results (F = t²)."
    },
    {
      q: "The mode is the MOST appropriate measure of central tendency for:",
      options: [
        "Continuous data with normal distribution",
        "Ordinal data with extreme outliers",
        "Nominal (categorical) data",
        "Interval data requiring precision"
      ],
      correct: 2,
      explanation: "Mode = most frequent value; the only measure of central tendency appropriate for nominal (categorical) data. Example: most common diagnosis, preferred treatment modality. For continuous data, mean is usually preferred (uses all values). Median is preferred for ordinal data or when outliers are present (resistant to extremes). A distribution can be unimodal (one peak), bimodal (two peaks), or multimodal. Mode can be used with any level of measurement."
    },
    {
      q: "In hypothesis testing, a one-tailed test (directional) compared to a two-tailed test:",
      options: [
        "Has greater power to detect an effect in the predicted direction",
        "Is always the preferred approach",
        "Tests for differences in both directions simultaneously",
        "Requires a larger sample size"
      ],
      correct: 0,
      explanation: "One-tailed test: predicts direction (e.g., 'treatment reduces symptoms'). Places all alpha in one tail of distribution, increasing power to detect effects in predicted direction but cannot detect opposite effects. Two-tailed: tests for any difference regardless of direction (more conservative, typical default). Use one-tailed only when: strong theoretical basis for direction, opposite direction meaningless. Example: testing if new drug is better (not worse) than placebo. Critical values differ: one-tailed α=.05 uses z=1.645; two-tailed uses z=±1.96."
    },
    {
      q: "Construct validity of a measure is BEST assessed by examining:",
      options: [
        "Test-retest reliability over time",
        "Convergent and discriminant validity evidence",
        "Internal consistency of items",
        "Face validity and content coverage"
      ],
      correct: 1,
      explanation: "Construct validity: does the measure assess the theoretical construct it claims to measure? Evidence includes: Convergent validity (correlates with related measures), Discriminant validity (doesn't correlate with unrelated measures). Example: depression scale should correlate with sadness (convergent) but not with shoe size (discriminant). Multitrait-multimethod matrix (Campbell & Fiske) evaluates both. Reliability is necessary but insufficient for validity. Content and face validity are weaker forms. Construct validation is ongoing—accumulates across studies."
    },
    {
      q: "A researcher uses a pretest-posttest design without a control group. The GREATEST threat to internal validity is:",
      options: [
        "Selection bias",
        "Inability to separate treatment effects from maturation, history, or regression to the mean",
        "Low external validity",
        "Measurement error"
      ],
      correct: 1,
      explanation: "One-group pretest-posttest design lacks a control group, so you cannot determine if changes are due to treatment versus other factors. Threats: maturation (natural change over time), history (external events), testing (pretest affects posttest), regression (if selected for extreme scores), instrumentation (measure changes). Solution: add control/comparison group. This design has very weak internal validity—cannot establish causation. Common in program evaluation but scientifically limited. Campbell & Stanley called this 'pre-experimental.'"
    },
    {
      q: "Stratified random sampling differs from simple random sampling by:",
      options: [
        "Selecting participants based on convenience",
        "Dividing the population into subgroups and sampling proportionally from each",
        "Using non-random selection procedures",
        "Requiring smaller sample sizes"
      ],
      correct: 1,
      explanation: "Stratified sampling: divide population into strata (subgroups: gender, age, ethnicity), then randomly sample from each stratum. Ensures representation of important subgroups (especially small ones). Can be proportional (sample proportion matches population) or disproportional (oversample underrepresented groups, then weight). More efficient than simple random—often needs smaller N for same precision. Cluster sampling (different method): sample groups/clusters (schools, clinics) then all/sample within clusters. Both improve external validity."
    },
    {
      q: "The correlation coefficient r = -.85 between stress and well-being indicates:",
      options: [
        "Stress causes decreased well-being",
        "There is a strong negative linear relationship between stress and well-being",
        "85% of the variance in well-being is explained by stress",
        "Well-being causes decreased stress"
      ],
      correct: 1,
      explanation: "Correlation coefficient (r) ranges from -1 to +1. r = -.85 indicates strong negative relationship (as stress increases, well-being decreases). Magnitude: .1-.3 weak, .3-.5 moderate, .5+ strong. Correlation does NOT imply causation—directionality ambiguous, third variables possible. r² (coefficient of determination) shows variance explained: (-.85)² = .72, so 72% of variance explained. Always check scatterplots—correlations only capture linear relationships. Outliers can distort correlations."
    },
    {
      q: "Multiple regression analysis allows researchers to:",
      options: [
        "Establish definitive causal relationships",
        "Predict a criterion variable from multiple predictor variables while controlling for their intercorrelations",
        "Compare means across multiple groups",
        "Test categorical variable associations"
      ],
      correct: 1,
      explanation: "Multiple regression: predicts continuous DV from multiple IVs (predictors). Each predictor's unique contribution is assessed while controlling for others (partial regression coefficients). R² shows total variance explained. Advantages: handles many predictors, identifies strongest predictors, tests interactions. Assumptions: linearity, independence of errors, homoscedasticity, normality of residuals, no multicollinearity. Example: predicting therapy outcome from symptom severity, motivation, alliance, controlling for demographics. Hierarchical regression tests predictors in theoretically-ordered blocks."
    },
    {
      q: "A researcher examining the effects of both therapy type (CBT vs. psychodynamic) and therapist experience (novice vs. experienced) on client outcomes should use:",
      options: [
        "Two separate one-way ANOVAs",
        "A 2×2 factorial ANOVA",
        "Multiple independent t-tests",
        "Chi-square test"
      ],
      correct: 1,
      explanation: "Factorial ANOVA: two or more independent variables (factors) simultaneously. 2×2 design has 4 conditions, tests 2 main effects + 1 interaction. Advantages: efficient (one study tests multiple hypotheses), examines interactions (does therapy type effectiveness depend on experience level?). Conducting separate analyses misses interactions, inflates Type I error. Mixed ANOVA: one between-subjects factor, one within-subjects factor. Interaction effects are often most interesting—show when/for whom treatments work."
    },
    {
      q: "The Central Limit Theorem states that:",
      options: [
        "All variables in psychology are normally distributed",
        "The sampling distribution of means approaches normality as sample size increases, regardless of population shape",
        "Large samples always produce statistically significant results",
        "Standard deviation equals standard error"
      ],
      correct: 1,
      explanation: "Central Limit Theorem (CLT): regardless of population distribution shape, the sampling distribution of means will be approximately normal with sufficient sample size (typically N > 30). Profound implication: justifies using parametric tests (t-tests, ANOVA) even when data aren't perfectly normal. Standard error of mean = σ/√N. CLT underpins inferential statistics, confidence intervals, hypothesis testing. Doesn't mean individual observations are normal—means of samples are. Larger samples = tighter sampling distribution around population mean."
    },
    {
      q: "Informed consent in research must include all of the following EXCEPT:",
      options: [
        "Purpose of the research and procedures involved",
        "Potential risks and benefits",
        "Guarantee that the participant will benefit from the research",
        "Right to withdraw without penalty"
      ],
      correct: 2,
      explanation: "Informed consent elements (APA Ethics Code 8.02, Belmont Report): purpose, procedures, duration, right to decline/withdraw, risks/benefits, confidentiality limits, contact for questions, incentives. Cannot guarantee benefits—must honestly describe potential benefits while acknowledging uncertainty. Vulnerable populations (children, prisoners, cognitively impaired) require additional protections. Deception requires justification and debriefing. Waiver of consent allowed in limited circumstances (minimal risk observational studies). IRB reviews consent procedures. Documentation typically required unless waived."
    },
    {
      q: "The Institutional Review Board (IRB) is responsible for:",
      options: [
        "Analyzing research data for accuracy",
        "Reviewing research protocols to protect participant welfare and rights",
        "Providing funding for approved research",
        "Training researchers in statistical methods"
      ],
      correct: 1,
      explanation: "IRB (Institutional Review Board): reviews research proposals to ensure ethical treatment of human participants. Reviews: risks/benefits, informed consent procedures, privacy protections, vulnerable population safeguards, data security. Approval levels: exempt (minimal risk, standard procedures), expedited (limited risk), full review (higher risk). Continuing review for ongoing studies. Federal regulations (45 CFR 46, Common Rule) require IRB oversight for federally-funded research. Animal research reviewed by IACUC (Institutional Animal Care and Use Committee). Researcher responsibilities: honest reporting, protocol adherence, adverse event reporting."
    },
    {
      q: "When comparing the effectiveness of four different interventions, a researcher finds a significant F statistic in a one-way ANOVA. The next step should be:",
      options: [
        "Conclude all groups differ significantly from each other",
        "Conduct post-hoc pairwise comparisons to determine which groups differ",
        "Report the F statistic without further analysis",
        "Calculate effect size only"
      ],
      correct: 1,
      explanation: "Significant ANOVA F-test indicates at least two groups differ, but doesn't specify which pairs. Post-hoc tests (Tukey HSD, Bonferroni, Scheffé) conduct pairwise comparisons while controlling familywise error rate. Tukey: equal N, pairwise. Scheffé: conservative, any contrasts. Bonferroni: divides alpha by number of comparisons. Planned contrasts (a priori): specific theoretically-driven comparisons, more powerful than post-hoc. Example: all treatments vs. control. Don't conduct multiple t-tests—inflates Type I error. Report omnibus F, then specific comparisons with adjusted p-values."
    },
    {
      q: "A measure with high test-retest reliability but low validity is:",
      options: [
        "Impossible—reliability guarantees validity",
        "Possible—it consistently measures something, but not what it claims to measure",
        "Only possible with categorical data",
        "Indicative of measurement error"
      ],
      correct: 1,
      explanation: "Reliability is necessary but not sufficient for validity. A measure can be consistently wrong. Example: broken thermometer always reads 5 degrees high (reliable but invalid). Validity requires reliability (can't validly measure what you inconsistently measure). Validity is harder to establish—requires accumulating evidence across studies. Types: content (represents domain), criterion (predicts outcomes), construct (theoretical relationships). Reliability sets upper bound on validity: validity coefficient cannot exceed √(reliability). Establish reliability first, then validation."
    },
    {
      q: "Publication bias (file drawer problem) occurs when:",
      options: [
        "Researchers fail to organize their data files properly",
        "Studies with null or negative results are less likely to be published than those with positive results",
        "Journals only publish qualitative research",
        "Researchers intentionally fabricate data"
      ],
      correct: 1,
      explanation: "Publication bias: studies with statistically significant, positive results are more likely to be published than those with null findings. Creates distorted literature—overestimates effect sizes, suggests interventions are more effective than they are. File-drawer problem (Rosenthal): unpublished null studies languish in file drawers. Assessment: funnel plots (asymmetry suggests bias), fail-safe N (how many null studies needed to overturn conclusion), p-curve analysis. Solutions: pre-registration, registered reports, publishing null results, trial registries (ClinicalTrials.gov). Contributes to replication crisis."
    },
    {
      q: "A researcher calculates a 95% confidence interval for the difference between two treatment groups as [2.5, 8.3] points on a symptom scale. This indicates:",
      options: [
        "The true population difference has a 95% probability of being between 2.5 and 8.3",
        "95% of participants improved between 2.5 and 8.3 points",
        "If the study were repeated many times, 95% of calculated CIs would contain the true population difference",
        "The difference is not statistically significant"
      ],
      correct: 2,
      explanation: "Confidence intervals (CI): range of plausible values for population parameter. Correct interpretation: if we repeated the study infinitely, 95% of calculated CIs would contain the true population value. Common misinterpretation: 'there's a 95% probability the true value is in this interval' is wrong (population parameter is fixed, interval varies). This CI [2.5, 8.3] doesn't include 0, so difference is significant at p<.05 (two-tailed). CIs provide information about magnitude and precision (narrow = precise). Preferred over p-values alone—show practical significance."
    },
    {
      q: "Structural Equation Modeling (SEM) is advantageous because it:",
      options: [
        "Requires smaller sample sizes than other methods",
        "Can simultaneously test complex relationships among multiple observed and latent variables",
        "Eliminates the need for reliability assessment",
        "Establishes causation in correlational data"
      ],
      correct: 1,
      explanation: "SEM: combines factor analysis (measurement model: latent variables from observed indicators) and path analysis (structural model: relationships among variables). Advantages: tests complex theoretical models, accounts for measurement error, estimates direct and indirect effects, compares alternative models. Fit indices (CFI, RMSEA, χ²) assess model-data fit. Large samples needed (N > 200 minimum, often 500+). Confirmatory Factor Analysis (CFA) is subset of SEM. Limitations: requires strong theory, correlational (doesn't prove causation), multiple solutions possible. Widely used in psychology for theory testing."
    },
    {
      q: "Non-parametric statistical tests (e.g., Mann-Whitney U, Kruskal-Wallis) are used when:",
      options: [
        "Sample sizes are very large",
        "Data are normally distributed with equal variances",
        "Assumptions of parametric tests (normality, homogeneity of variance) are violated or data are ordinal",
        "Researchers want more statistical power"
      ],
      correct: 2,
      explanation: "Non-parametric tests: don't assume normal distribution, use ranks or frequencies instead of raw scores. Use when: ordinal data, small samples, severe violations of parametric assumptions, presence of extreme outliers. Less powerful than parametric tests (when assumptions met) but more robust. Common tests: Mann-Whitney U (independent groups, alternative to t-test), Wilcoxon signed-rank (paired data, alternative to paired t-test), Kruskal-Wallis (3+ groups, alternative to ANOVA), Friedman (repeated measures, alternative to repeated ANOVA), Spearman's rho (correlation for ranks). Median-based instead of mean-based."
    },
    {
      q: "Observer bias in behavioral research can be reduced by:",
      options: [
        "Using only self-report measures",
        "Keeping observers blind to study hypotheses and participant condition",
        "Using smaller sample sizes",
        "Conducting studies in laboratory settings only"
      ],
      correct: 1,
      explanation: "Observer bias: observers' expectations influence their ratings/coding. Reduction strategies: 1) Blinding (masking): observers unaware of hypotheses, participant conditions, or expected outcomes. 2) Operational definitions: clear, specific criteria for coding behaviors. 3) Inter-rater reliability: multiple independent observers, calculate agreement (Cohen's kappa, ICC). 4) Training: standardized procedures, practice with feedback. 5) Automation: video recording allows later blind coding. Double-blind procedures (both participants and observers blind) are gold standard. Expectancy effects (Rosenthal effect) can subtly influence observations."
    },
    {
      q: "Crossover (within-subjects) designs in clinical trials:",
      options: [
        "Require separate groups for each treatment condition",
        "Have each participant receive all treatments in sequence, often with washout periods",
        "Cannot establish treatment efficacy",
        "Are only used in qualitative research"
      ],
      correct: 1,
      explanation: "Crossover design: each participant receives all treatments in counterbalanced order. Example: Group A receives Drug → Placebo; Group B receives Placebo → Drug. Advantages: controls individual differences (each person is own control), requires fewer participants, greater statistical power. Disadvantages: carryover effects (first treatment affects second), order effects, practice/fatigue effects. Washout period allows first treatment to clear before second begins. Not suitable when: treatment has lasting effects, progressive conditions, participant attrition likely. Counterbalancing distributes order effects across conditions. Common in pharmacological research."
    },
    {
      q: "The standard error of the mean (SEM) differs from standard deviation (SD) in that SEM:",
      options: [
        "Measures variability within the sample",
        "Estimates the precision of the sample mean as an estimate of the population mean",
        "Is always larger than the standard deviation",
        "Cannot be used to calculate confidence intervals"
      ],
      correct: 1,
      explanation: "Standard Deviation (SD): variability/spread of individual scores within a sample. Describes the data. Standard Error of Mean (SEM): variability of sample means—how much sample means vary around population mean. SEM = SD/√N. Estimates precision—smaller SEM = more precise estimate. SD stays relatively constant as N increases; SEM decreases (√N). Use SD for descriptive statistics (characterizing sample); SEM for inferential statistics (estimating population parameter). Confidence intervals calculated from SEM. Common error: reporting SEM to make data look less variable (should use SD for descriptive purposes)."
    },
    {
      q: "A Type II error is most likely to occur when:",
      options: [
        "The effect size is large and the sample is large",
        "Statistical power is low due to small sample size or small effect size",
        "The researcher uses an alpha level that is too large",
        "Multiple comparisons are made without correction"
      ],
      correct: 1,
      explanation: "Type II error (β): failing to reject false null hypothesis (missing real effect). Probability increased by: small sample size, small effect size, high variability, low alpha (stricter criterion). Power = 1 - β = probability of detecting true effect. Low power (< .80) increases Type II error risk. Consequences: concluding 'no effect' when effect exists, dismissing potentially effective interventions, wasting resources. Prevention: adequate sample size (power analysis), maximizing effect size (strong manipulation), reliable measures (reducing error variance), reasonable alpha (.05 standard). Trade-off: lowering alpha reduces Type I but increases Type II errors."
    },
    {
      q: "In program evaluation, formative evaluation differs from summative evaluation in that formative evaluation:",
      options: [
        "Occurs during program development to guide improvements",
        "Measures final program outcomes only",
        "Is conducted after program completion",
        "Does not use quantitative methods"
      ],
      correct: 0,
      explanation: "Formative evaluation: conducted during program development/implementation to provide feedback for improvement. Continuous, process-focused, answers 'How can we improve?' Uses: needs assessment, pilot testing, monitoring implementation fidelity, identifying barriers. Summative evaluation: conducted at program end to assess overall effectiveness and outcomes. Answers 'Did it work?' Uses: outcome measurement, cost-effectiveness analysis, continuation decisions. Both are essential—formative improves programs, summative determines success. Logic models link inputs → activities → outputs → outcomes. Evaluators balance stakeholder needs with scientific rigor. Process evaluation examines implementation; outcome evaluation examines results."
    },
    {
      q: "Cohen's kappa is used to assess:",
      options: [
        "Internal consistency of scale items",
        "Agreement between two raters beyond chance agreement",
        "Test-retest reliability",
        "Predictive validity"
      ],
      correct: 1,
      explanation: "Cohen's kappa (κ): inter-rater reliability for categorical judgments, corrects for chance agreement. Formula: (observed agreement - expected by chance) / (1 - expected by chance). Range: -1 to +1 (though negative rare). <.40 poor, .40-.60 moderate, .60-.80 substantial, >.80 excellent agreement. Used when: two raters, nominal/ordinal categories. Weighted kappa: partial credit for near-miss disagreements (ordinal data). Intraclass Correlation Coefficient (ICC) used for continuous ratings or 3+ raters. Percent agreement simpler but doesn't correct for chance. High inter-rater reliability essential for observational coding, diagnosis, record review."
    },
    {
      q: "In a repeated measures ANOVA, the assumption of sphericity refers to:",
      options: [
        "Equality of variances across groups",
        "Equality of variances of differences between all pairs of repeated measures",
        "Normal distribution of data",
        "Independence of observations"
      ],
      correct: 1,
      explanation: "Sphericity: variances of differences between all pairs of within-subjects conditions are equal. Analogous to homogeneity of variance in between-subjects designs but more complex (involves difference scores). Tested via Mauchly's test (if significant, assumption violated). Violations: inflate Type I error in repeated measures ANOVA. Corrections when violated: Greenhouse-Geisser (conservative), Huynh-Feldt (liberal), or use multivariate approach (MANOVA). More problematic with 3+ repeated measures. Understanding sphericity is essential for within-subjects designs—commonly violated and commonly overlooked by researchers."
    },
  ],
  flashcards: [
    {
      front: "Threats to Internal Validity",
      back: "History, Maturation, Testing, Instrumentation, Statistical Regression, Selection bias, Attrition/Mortality, Selection-maturation interaction. The Campbell & Stanley classics. Random assignment controls for most threats.",
    },
    {
      front: "Type I vs Type II Error",
      back: "Type I (α): Rejecting a true null hypothesis (false positive). Type II (β): Failing to reject a false null (false negative). Power = 1 - β = probability of correctly rejecting false null. Increase power by: increasing N, increasing α, increasing effect size, decreasing variability.",
    },
    {
      front: "When to use which test?",
      back: "t-test: 2 group means. ANOVA: 3+ group means. Chi-square: categorical frequencies. Pearson r: 2 continuous variables. Regression: predicting from 1+ predictors. MANOVA: multiple DVs. ANCOVA: controlling covariates.",
    },
    {
      front: "Qualitative Research Methods",
      back: "Grounded Theory: Generate theory from data (Glaser & Strauss). Phenomenology: Describe lived experiences. Ethnography: Cultural immersion. Case Study: In-depth single/few cases. Uses: coding, thematic analysis, constant comparison. Validity: triangulation, member checking, thick description.",
    },
    {
      front: "Effect Size Measures",
      back: "Cohen's d: Standardized mean difference (d = M1-M2/SD). Small=.2, Med=.5, Large=.8. Pearson r: Correlation. Small=.1, Med=.3, Large=.5. Eta-squared (η²): Variance explained in ANOVA. R²: Variance explained in regression. Effect sizes show practical significance vs. p-values showing statistical significance.",
    },
    {
      front: "Experimental vs. Quasi-Experimental vs. Correlational Designs",
      back: "Experimental: Random assignment, manipulate IV, establish causation. Quasi-experimental: No random assignment (e.g., pre-existing groups), manipulate IV, limited causal inference. Correlational: No manipulation, no random assignment, cannot infer causation (third variable problem). Example: RCT (experimental), comparing clinics (quasi), survey of therapy hours & outcomes (correlational). Only experiments support causal claims."
    },
    {
      front: "Statistical Power (1-β) Determinants",
      back: "Power = probability of detecting true effect (avoiding Type II error). Increased by: 1) Larger sample size (most practical), 2) Larger effect size (not controllable), 3) Higher alpha (.05→.10, but increases Type I error), 4) Lower variability (reliable measures, homogeneous sample). Target: .80 power = 80% chance of detecting effect. Power analysis determines needed N. Underpowered studies = wasted resources + inconclusive results."
    },
    {
      front: "Confidence Intervals (CI)",
      back: "Range likely to contain population parameter. 95% CI: if study repeated 100 times, 95 CIs would contain true population value. Wider CI = more uncertainty. Narrowed by: larger N, less variability. If 95% CI for mean difference doesn't include 0, significant at p<.05. Advantages over p-values: shows effect magnitude + precision. Example: 'Depression reduction: 5 points, 95% CI [2,8]'—significant and likely clinically meaningful."
    },
    {
      front: "Between-Subjects vs. Within-Subjects (Repeated Measures) Designs",
      back: "Between-subjects: Different participants in each condition. Pros: No practice/fatigue effects. Cons: Individual differences (noise), requires more participants. Within-subjects: Same participants in all conditions. Pros: Controls individual differences (more power), fewer participants needed. Cons: Order effects (counterbalance), practice/fatigue, carryover. Mixed designs: combine both. Choice depends on research question and practical constraints."
    },
    {
      front: "Validity Types (Internal, External, Construct, Statistical Conclusion)",
      back: "Internal: Does IV cause DV change? Threats: history, maturation, selection, regression. External: Generalizability to other people/settings/times. Construct: Do operations represent constructs? (measurement validity). Statistical conclusion: Are variables related? (power, assumption violations, reliability). Cook & Campbell framework. Trade-offs exist—maximize all four for strong study."
    },
    {
      front: "Standard Deviation vs. Standard Error",
      back: "SD: Variability within a sample—describes data spread. Larger N doesn't change SD (population estimate). SE: Variability of sample means—precision of estimate. SE = SD/√N. Larger N reduces SE. Use SD to describe sample; SE for inference about population. CIs use SE. Reporting: Mean (SD) for descriptive; Mean (SE) or CI for inferential. Confusing them is common error in interpretation."
    },
    {
      front: "Reliability Types - Summary",
      back: "Test-retest: Stability over time (same test, 2+ occasions, correlation). Inter-rater: Agreement between scorers (Cohen's kappa for categorical, ICC for continuous). Internal consistency: Item homogeneity (Cronbach's α, split-half). Parallel forms: Equivalence across test versions. All range 0-1; ≥.70 generally acceptable. Reliability limits validity (can't be more valid than reliable). Low reliability = more measurement error."
    },
    {
      front: "ANOVA Assumptions",
      back: "1) Independence of observations (most critical), 2) Normality (robust with large N, central limit theorem), 3) Homogeneity of variance (Levene's test; robust if equal N). Violations: Use robust tests (Welch's), non-parametric alternatives (Kruskal-Wallis), transformations (log, square root), or address in design. Complete violation list varies by specific ANOVA type (one-way, factorial, repeated measures, mixed)."
    },
    {
      front: "Effect Size Interpretation - Clinical Significance",
      back: "Statistical significance (p<.05) ≠ clinical significance. Cohen's guidelines (d: .2 small, .5 medium, .8 large) are arbitrary. Better: Compare to meaningful benchmarks (symptom change, functional improvement, MID—minimally important difference). NNT (number needed to treat): How many must receive treatment for one additional positive outcome? Lower = better. Cost-effectiveness: Benefits outweigh costs? Integrate effect size, clinical meaningfulness, patient values."
    },
    {
      front: "Common Statistical Errors in Research",
      back: "1) Confusing correlation with causation, 2) p-hacking (analyzing until significant), 3) HARKing (hypothesizing after results known), 4) Ignoring effect sizes, 5) Multiple comparisons without correction (inflated Type I error), 6) Base rate neglect, 7) Stopping data collection based on significance, 8) Misinterpreting p-values/CIs, 9) Not reporting power/assumptions. Critical thinking and methodological rigor prevent these."
    },
    {
      front: "Sampling Methods - Summary",
      back: "Probability sampling: Simple random (lottery), Stratified (subgroups then random), Cluster (sample groups/sites), Systematic (every nth person). Non-probability sampling: Convenience (accessible participants), Quota (non-random stratified), Snowball (referral chains), Purposive (specific characteristics). Probability sampling enables generalization. Non-probability sampling used when probability infeasible but limits external validity. Representative sampling requires randomization."
    },
    {
      front: "Correlation Does Not Equal Causation - Why?",
      back: "Three problems: 1) Directionality (does X→Y or Y→X?), 2) Third variables (Z causes both X and Y), 3) Spurious correlation (coincidence, shared method variance). Example: ice cream sales correlate with drowning deaths—third variable is summer temperature. Only experiments with random assignment establish causation. Longitudinal designs help with directionality. Statistical control (regression, matching) helps but doesn't eliminate confounds. Be skeptical of causal language from correlational data."
    },
    {
      front: "Research Ethics - Core Principles (Belmont Report)",
      back: "1) Respect for Persons: autonomy, informed consent, protect vulnerable populations. 2) Beneficence: maximize benefits, minimize harms, favorable risk/benefit ratio. 3) Justice: fair selection of participants, equitable distribution of research burdens/benefits. Historical context: Tuskegee syphilis study, Nazi experiments. Applied via IRB review, informed consent, confidentiality, right to withdraw, debriefing, avoiding exploitation. Special protections for prisoners, children, cognitively impaired."
    },
    {
      front: "Measurement Scales (Stevens)",
      back: "Nominal: Categories (gender, diagnosis). Operations: frequency, mode, chi-square. Ordinal: Rank order (class rank, Likert scales debatable). Operations: median, percentiles, non-parametric tests. Interval: Equal intervals, no true zero (temperature Fahrenheit, IQ). Operations: mean, SD, parametric tests. Ratio: Equal intervals plus true zero (height, reaction time, income). Operations: all statistics, ratios meaningful. Higher levels permit more operations. Controversy: treating ordinal (Likert) as interval—common but debated."
    },
    {
      front: "Factorial Designs - Interactions Explained",
      back: "Main effect: overall effect of one IV, averaged across other IV. Interaction: effect of one IV depends on level of other IV. Graphs help: parallel lines = no interaction, non-parallel = interaction. Example (Therapy × Severity): CBT works better than control for mild depression but both equal for severe—interaction present. Crossover interaction: lines cross (effect reverses). Ordinal interaction: lines converge/diverge (effect changes magnitude). Interactions often theoretically interesting—reveal boundary conditions."
    },
    {
      front: "Multiple Comparison Problem",
      back: "Conducting many significance tests inflates familywise Type I error. If each test α=.05, testing 10 hypotheses: P(at least one Type I error) = 1 - (.95)^10 = 40%. Solutions: 1) Bonferroni: divide α by number of tests (conservative). 2) Holm-Bonferroni: sequential Bonferroni (less conservative). 3) False Discovery Rate (FDR): controls proportion of false positives. 4) Tukey, Scheffé for post-hoc ANOVA comparisons. Pre-planned contrasts have more power than post-hoc tests. Balance: avoid Type I inflation vs. maintaining reasonable power."
    },
    {
      front: "Randomized Controlled Trial (RCT) Features",
      back: "Gold standard for treatment efficacy. Features: 1) Random assignment to treatment/control, 2) Standardized intervention protocols (treatment manuals), 3) Blind/masked assessment (outcome raters unaware of condition), 4) Intent-to-treat analysis (analyze all randomized, even dropouts), 5) Adequate sample size (power analysis), 6) Control conditions (placebo, treatment-as-usual, waitlist). Efficacy (RCT, controlled) vs. Effectiveness (real-world, generalizable). Limitations: expensive, strict inclusion criteria may limit generalizability."
    },
    {
      front: "Missing Data Strategies",
      back: "Types: MCAR (missing completely at random—rare), MAR (missing at random—depends on observed variables), MNAR (missing not at random—depends on unobserved values). Strategies: 1) Listwise deletion (complete-case analysis—loses power, bias if not MCAR). 2) Pairwise deletion (uses available data—unstable). 3) Mean imputation (poor—underestimates variability). 4) Multiple imputation (creates multiple datasets with imputed values, pools results—recommended). 5) Maximum likelihood estimation (uses all available data). Report amount/patterns of missingness. Avoid dropping variables/cases unless necessary."
    },
    {
      front: "Statistical Significance vs. Practical Significance",
      back: "Statistical significance: p<.05, effect unlikely due to chance (probability statement). Practical significance: effect large enough to matter (magnitude statement). With large N, trivial effects become statistically significant. With small N, large effects may not reach significance. Always report: p-value AND effect size AND confidence interval. Consider: clinical meaningfulness, cost-effectiveness, real-world impact. Example: medication reduces depression 2 points (significant, p=.001) but HDRS improvement <5 clinically trivial. Evidence-based practice requires both statistical and practical significance."
    },
    {
      front: "Quasi-Experimental Designs",
      back: "Lack random assignment but include manipulation/intervention. Types: 1) Non-equivalent control group (compare intact groups), 2) Interrupted time series (multiple measures before/after intervention), 3) Regression discontinuity (treatment assigned based on cutoff score). Threats: selection bias (groups differ pre-existing), selection-history interactions. Strengthen via: matching, statistical control, multiple pretests, control group, multiple sites. Common in education, policy evaluation, organizational research when randomization impractical. Cannot establish causation definitively but can provide strong evidence with careful design."
    },
    {
      front: "Replication Crisis & Open Science",
      back: "Many published findings fail to replicate. Contributors: publication bias, p-hacking, small samples, HARKing, flexibility in analysis (researcher degrees of freedom). Solutions: 1) Pre-registration (specify hypotheses/analyses before data collection), 2) Registered reports (peer review before data collection), 3) Open data/materials (transparency), 4) Larger samples, 5) Replication studies valued, 6) Publishing null results. Reproducibility Project Psychology (2015): only 36% of 100 studies replicated. Improves science's self-correction, credibility. Emphasizes rigorous methods over novel findings."
    },
    {
      front: "Mediation Analysis - Testing Process",
      back: "Tests whether IV → DV relationship occurs through mediator variable. Steps (Baron & Kenny classic): 1) IV predicts DV (path c), 2) IV predicts Mediator (path a), 3) Mediator predicts DV controlling for IV (path b), 4) IV-DV relationship reduced/eliminated when Mediator included (path c'). Full mediation: c' = 0. Partial mediation: c' < c. Modern approach: bootstrapping indirect effect (a×b) with confidence intervals. Sobel test outdated. Mediation explains mechanism—critical for theory development and intervention refinement. Example: CBT → cognitions (mediator) → depression."
    },
    {
      front: "Meta-Analysis - Effect Size Calculation",
      back: "Converts diverse study outcomes to common metric (effect size). Common metrics: Cohen's d (standardized mean difference), Pearson r (correlation), odds ratio (binary outcomes), risk ratio. Fixed-effects model: assumes one true effect (all studies estimate same effect). Random-effects model: assumes distribution of true effects (studies differ). Weights studies by sample size and precision. Heterogeneity (Q statistic, I²): variability across study effects. Moderator analysis: examines why effects differ (study quality, population, methodology). Forest plots visualize individual and combined effects. Cumulative meta-analysis shows how evidence accumulates."
    },
    {
      front: "Intention-to-Treat (ITT) vs. Per-Protocol Analysis",
      back: "ITT: analyze participants in groups they were randomized to, regardless of treatment received or completion. Includes dropouts (assume no change or carry-forward last value). Conservative but preserves randomization, reflects real-world effectiveness. Per-protocol: analyze only participants who completed treatment as intended. May overestimate efficacy (completers may differ systematically). ITT preferred for RCTs (regulatory standard)—prevents bias from differential dropout. Report both when possible. Missing data handling critical. CONSORT guidelines require ITT for trial reporting."
    },
    {
      front: "Statistical Assumptions Testing",
      back: "Parametric tests assume: 1) Normality (Shapiro-Wilk, Q-Q plots—robust with N>30 via CLT), 2) Homogeneity of variance (Levene's test—robust with equal N), 3) Independence (most critical—violated by nested/clustered data, requires different analyses). Test assumptions BEFORE main analysis. Violations: transform data (log, square root, inverse), use robust tests (Welch's t, Brown-Forsythe F), switch to non-parametric tests, or acknowledge as limitation. Regression adds: linearity (scatterplots), homoscedasticity (residual plots), no multicollinearity (VIF), independence of errors (Durbin-Watson)."
    },
  ],
};
