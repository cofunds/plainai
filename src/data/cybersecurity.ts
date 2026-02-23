import type { WorkbookData } from './types'

export const cybersecurityData = {
  professionId: 'cybersecurity',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Cybersecurity Professionals',
  heroDescription:
    'A practical guide to using AI in your security workflow - from incident response to threat intelligence, with real tools, systems, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'Your morning starts with the SIEM dashboard. 1,247 new alerts since yesterday. Most are noise - failed login attempts, port scans, known-benign anomalies - but somewhere in that pile is the one alert that matters. You start triaging. Click, evaluate, dismiss. Click, evaluate, escalate. Click, evaluate, dismiss. An hour passes. You have cleared 200 alerts and escalated three for investigation.',
        'Then comes the incident. A phishing email got through the filter and an employee clicked the link. You need to determine the blast radius - who else received the email, did anyone else click, what did the payload do, is there lateral movement. You pull logs from the email gateway, the endpoint detection tool, the proxy, and the Active Directory audit trail. Correlating across four different log formats takes the rest of your morning.',
        'After lunch, you have a vulnerability scan report to process. 342 findings across 80 systems. You need to deduplicate, prioritize by business impact, map to CVSS scores, cross-reference against your asset inventory, and produce a remediation plan with timelines for each team. The raw scan output is 47 pages of technical details that nobody outside your team can read.',
        'Between the alerts, the incident, and the vuln report, you also need to write a security assessment for a new vendor, update the incident response playbook, prepare the monthly compliance report for SOC 2, and respond to three teams asking if their proposed architecture changes introduce security risks.',
        'You are a skilled security professional spending most of your day on log correlation, report formatting, and manual triage - not on the threat analysis, architecture review, and strategic security decisions that actually protect the organization.',
      ],
      highlight:
        'What if AI could handle the log parsing, report drafting, and initial triage - so you could focus on the analysis and decisions that require your security expertise?',
      closingParagraph:
        'Not by trusting AI with access decisions. Not by automating away human judgment on threats. By using AI as a tireless analyst that processes the data, drafts the reports, and surfaces the patterns - so you spend your time on the work that actually reduces risk.',
    },

    ch2: {
      sections: [
        {
          heading: 'AI is a force multiplier, not a replacement',
          paragraphs: [
            'Let\'s address the obvious concern: security is not a field where you want to blindly trust automated outputs. And you should not. AI is not going to replace your threat intuition, your understanding of your organization\'s specific risk profile, or your ability to make judgment calls during an active incident.',
            'What AI excels at in cybersecurity is the data processing layer. Parsing thousands of log entries to find patterns. Converting raw scan output into readable reports. Cross-referencing indicators of compromise against threat intelligence feeds. Drafting incident timelines from scattered evidence. These are tasks that eat 60-70% of a security professional\'s day - and AI handles them in minutes.',
          ],
        },
        {
          heading: 'Where AI fits in the security workflow',
          paragraphs: [
            'Think of AI as a junior analyst who has memorized every CVE database, every NIST framework, every MITRE ATT&CK technique, and every OWASP guideline - but has never worked a real incident. It can process and organize information at superhuman speed, but it needs your experience to interpret what the information means for your specific environment.',
            'You feed it raw logs and it produces a structured timeline. You paste in a vulnerability report and it maps findings to your remediation workflow. You describe a security architecture and it flags potential weaknesses against known attack patterns. The output is always a starting point for your analysis, never the final answer.',
            'The security professionals who gain the most from AI are using it to eliminate the manual data processing that keeps them from doing actual security work. Less time formatting reports, more time hunting threats.',
          ],
        },
      ],
      keyInsight:
        'Your threat intuition + your organizational knowledge + AI\'s processing speed = better security coverage in less time. AI handles the data. You handle the judgment calls.',
    },

    ch3: {
      intro: 'Five tools that cover the core cybersecurity workflow. Focused, practical, no bloat.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your threat analysis and triage partner',
          description:
            'Analyze log entries, explain attack techniques, triage alerts, and work through incident investigation steps. Paste in raw data and get structured analysis. Best for interactive threat investigation and security research.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here - best all-rounder',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your report writer and policy analyst',
          description:
            'Excels at writing detailed security reports, analyzing compliance frameworks, reviewing policies, and processing long documents. Handles very large context - paste entire log files or policy documents for thorough analysis.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for reports and long documents',
          icon: 'claude',
        },
        {
          name: 'Wiz',
          role: 'Your cloud security platform',
          description:
            'Agentless cloud security scanning across AWS, Azure, and GCP. Identifies misconfigurations, vulnerabilities, exposed secrets, and attack paths across your entire cloud environment. Correlates findings with business context.',
          cost: 'freemium',
          difficulty: 'medium',
          verdict: 'Essential for cloud environments',
          icon: 'wiz',
        },
        {
          name: 'Snyk',
          role: 'Your code and dependency security scanner',
          description:
            'Scans your codebase, container images, and infrastructure-as-code for vulnerabilities. Integrates into CI/CD pipelines. Provides fix recommendations with pull requests. Covers open-source dependencies, custom code, and container base images.',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Best for shift-left security',
          icon: 'snyk',
        },
        {
          name: 'Perplexity',
          role: 'Your threat intelligence researcher',
          description:
            'Real-time search with source citations for researching new CVEs, attack techniques, threat actor profiles, and emerging vulnerabilities. Pulls from current sources - not a static knowledge base. Best for staying current on the threat landscape.',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for real-time threat research',
          icon: 'perplexity',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for analysis and reporting, plus Perplexity for threat research. Add Wiz and Snyk as your cloud and code security tooling matures. That combination covers detection, analysis, reporting, and research.',
    },

    ch4: {
      intro:
        'Six systems that map directly to the tasks you do every week as a cybersecurity professional. Each one shows the before, after, and step-by-step flow.',
      systems: [
        {
          id: 1,
          name: 'System 1 - Incident Response Analysis',
          before:
            'An incident is detected. You pull logs from multiple sources - SIEM, endpoint detection, network monitoring, email gateway. You manually correlate timestamps, IP addresses, and user accounts across different formats. Building a coherent timeline takes hours. The incident report takes another two hours to write.',
          after:
            'You paste the raw logs into AI and it produces a structured timeline with correlated events, identified IOCs, and a preliminary attack chain analysis. The incident report draft is ready in minutes. You review, add your expert analysis, and focus on containment and remediation.',
          flow: [
            'Collect raw logs from all relevant sources',
            'Paste into AI with context about the alert that triggered investigation',
            'AI produces a correlated timeline and identifies IOCs',
            'Review the timeline and add your contextual analysis',
            'Generate the incident report draft and refine with findings',
          ],
          timeSaved: { without: '3-6 hours/incident', withAI: '45-90 min/incident' },
        },
        {
          id: 2,
          name: 'System 2 - Vulnerability Assessment',
          before:
            'A vulnerability scan produces hundreds of findings. You manually deduplicate, cross-reference CVSS scores, map to affected systems, determine business impact, and prioritize remediation. The raw output is unusable for anyone outside your team. Creating an actionable remediation plan takes a full day.',
          after:
            'You feed the scan results to AI and it deduplicates, prioritizes by actual risk (not just CVSS score), maps to your asset criticality tiers, and generates a remediation plan with clear ownership and timelines. What took a day now takes an hour of review and refinement.',
          flow: [
            'Export scan results in a structured format (CSV, JSON, or raw text)',
            'Paste into AI with your asset criticality tiers and business context',
            'AI deduplicates, prioritizes, and maps to remediation owners',
            'Review prioritization - adjust based on your knowledge of the environment',
            'Generate the final remediation plan and distribute to teams',
          ],
          timeSaved: { without: '4-8 hours/assessment', withAI: '1-2 hours/assessment' },
        },
        {
          id: 3,
          name: 'System 3 - Security Report Writing',
          before:
            'You need to write a security assessment, an incident report, or a compliance summary. You stare at a blank document, organize your findings, translate technical details into language stakeholders can understand, add recommendations, format it professionally. A thorough report takes 2-4 hours to write.',
          after:
            'You dump your raw findings, notes, and data points into AI. It produces a structured report with executive summary, detailed findings, risk ratings, and recommendations. You review for accuracy, add organizational context, and finalize. Report writing goes from hours to minutes of refinement.',
          flow: [
            'Collect your raw findings, notes, and supporting data',
            'Specify the audience (executive, technical, compliance) and format',
            'AI generates the structured report draft with all sections',
            'Review technical accuracy and add organizational context',
            'Finalize and distribute',
          ],
          timeSaved: { without: '2-4 hours/report', withAI: '30-45 min/report' },
        },
        {
          id: 4,
          name: 'System 4 - Log Analysis',
          before:
            'You are investigating suspicious activity. You have thousands of log entries from multiple sources in different formats. You write grep commands, regex patterns, and custom scripts to extract the relevant events. Correlating across log sources means manual timestamp matching and IP/user cross-referencing. A thorough analysis takes hours.',
          after:
            'Paste the log entries into AI and describe what you are looking for. It parses the different formats, identifies anomalies, correlates events across sources, and highlights the suspicious patterns. Your investigation focuses on interpreting results, not parsing data.',
          flow: [
            'Collect log entries from relevant time window and sources',
            'Paste into AI with context about what triggered the investigation',
            'AI parses, correlates, and highlights anomalies',
            'Review flagged events and drill into suspicious patterns',
            'Document findings and determine next investigation steps',
          ],
          timeSaved: { without: '2-5 hours/investigation', withAI: '30-60 min/investigation' },
        },
        {
          id: 5,
          name: 'System 5 - Compliance Checking',
          before:
            'A compliance audit is approaching. You need to verify controls against NIST, SOC 2, ISO 27001, or another framework. You go through each control, check if evidence exists, document gaps, and create a remediation plan. For SOC 2 alone, there are 60+ controls to verify. It is a multi-week effort.',
          after:
            'You describe your current controls and AI maps them against the framework, identifies gaps, suggests evidence to collect, and drafts the compliance documentation. The multi-week effort becomes a focused sprint of verification and gap closure.',
          flow: [
            'List your current security controls and their implementation status',
            'Specify the compliance framework and scope',
            'AI maps controls to framework requirements and identifies gaps',
            'Review the mapping and confirm or correct each assessment',
            'Generate compliance documentation and gap remediation plan',
          ],
          timeSaved: { without: '2-4 weeks/audit', withAI: '3-5 focused days' },
        },
        {
          id: 6,
          name: 'System 6 - Threat Intelligence',
          before:
            'A new CVE drops, or a threat actor is targeting your industry. You need to understand the vulnerability, assess your exposure, and brief leadership. You read advisories, cross-reference your asset inventory, check if patches are available, and write up the assessment. For a critical CVE, this takes a full day.',
          after:
            'You give AI the CVE ID or threat report and it pulls together the technical details, maps attack vectors to your technology stack, checks for known exploits, and drafts a risk assessment with recommended actions. Your critical CVE response time drops from a day to an hour.',
          flow: [
            'Identify the CVE or threat intelligence report to analyze',
            'Provide context about your technology stack and environment',
            'AI produces a risk assessment with exposure analysis',
            'Verify exposure against your actual asset inventory',
            'Brief leadership with the AI-drafted assessment, refined with your analysis',
          ],
          timeSaved: { without: '4-8 hours/CVE', withAI: '1-2 hours/CVE' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste ready prompts for every security system. Replace the bracketed placeholders with your real data. Each prompt is specific to cybersecurity work - SOC operations, vulnerability management, compliance, and threat intelligence.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Incident Response',
          prompts: [
            {
              id: 'cs-p-1-1',
              title: 'Incident Timeline Builder',
              task: 'Build a correlated timeline from raw incident logs',
              prompt: `Build an incident timeline from these log entries:

Incident context:
- Alert that triggered investigation: [describe the initial alert]
- Time window: [start time] to [end time]
- Systems involved: [list affected systems/servers/endpoints]
- User accounts of interest: [list usernames or IDs]

Log sources and entries:
[Paste raw logs - SIEM events, firewall logs, endpoint logs, authentication logs]

For each event in the timeline:
1. Timestamp (normalized to UTC)
2. Source system
3. Event description (translated from raw log to plain English)
4. Actor (user, IP, process)
5. Significance: Critical / Important / Context
6. MITRE ATT&CK technique ID if applicable

Also provide:
- List of all IOCs found (IPs, domains, file hashes, email addresses)
- Initial attack vector assessment (how did this start?)
- Lateral movement indicators (did the attacker move to other systems?)
- Data exfiltration indicators (was data accessed or transferred?)
- Recommended immediate containment actions`,
              result:
                'A structured incident timeline with IOCs, attack chain analysis, and containment recommendations.',
              tip: 'Include logs from before the alert triggered. Pre-incident activity often reveals the initial access vector.',
            },
            {
              id: 'cs-p-1-2',
              title: 'Incident Report Generator',
              task: 'Generate a complete incident report from investigation findings',
              prompt: `Write a formal incident report from these investigation findings:

Incident ID: [your internal ID]
Date detected: [date/time]
Date contained: [date/time]
Date resolved: [date/time or "ongoing"]
Severity: [Critical / High / Medium / Low]
Classification: [phishing / malware / unauthorized access / data breach / etc.]

Investigation findings:
[Paste your notes, timeline, IOCs, and analysis - can be messy]

Affected systems: [list]
Affected users: [list and number]
Data impact: [was sensitive data accessed/exfiltrated?]
Business impact: [service disruption, financial, reputational]

Actions taken:
[List containment and remediation steps taken]

Write the report with these sections:
1. Executive Summary (3-4 sentences for leadership)
2. Incident Timeline (chronological events)
3. Technical Analysis (attack chain, techniques used, IOCs)
4. Impact Assessment (systems, data, users, business)
5. Response Actions (what was done to contain and remediate)
6. Root Cause Analysis (how and why this happened)
7. Lessons Learned (what to improve)
8. Recommendations (specific actions to prevent recurrence)
9. Appendix (IOC list, affected systems list)

Tone: professional and factual. Avoid speculation - flag uncertainties clearly.`,
              result:
                'A complete incident report ready for leadership review and compliance records.',
            },
            {
              id: 'cs-p-1-3',
              title: 'Phishing Email Analyzer',
              task: 'Analyze a suspicious email for threat indicators',
              prompt: `Analyze this suspicious email for phishing indicators:

Email headers:
[Paste full email headers - From, To, Reply-To, Received, SPF, DKIM, DMARC results]

Email body:
[Paste the email content]

Embedded URLs:
[List any URLs found in the email]

Attachments:
[List attachment names and types, plus file hashes if available]

Analyze for:
1. Header anomalies: spoofed sender, mismatched Reply-To, suspicious routing, failed auth checks
2. Social engineering techniques: urgency, authority impersonation, emotional manipulation
3. URL analysis: domain age, typosquatting, URL shorteners, redirect chains, known malicious domains
4. Attachment risk: dangerous file types, double extensions, macro indicators
5. Language indicators: grammar patterns common in phishing, inconsistent formatting
6. Campaign indicators: does this match known phishing kits or campaigns?

Verdict: Phishing / Suspicious / Legitimate
Confidence: High / Medium / Low

If phishing:
- Recommended block actions (domains, IPs, sender addresses)
- User notification template
- Steps to check if anyone else received this email
- IOCs to add to your threat intelligence feed`,
              result:
                'A thorough phishing analysis with verdict, IOCs, and recommended response actions.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Vulnerability Assessment',
          prompts: [
            {
              id: 'cs-p-2-1',
              title: 'Vulnerability Report Processor',
              task: 'Process raw vulnerability scan results into an actionable remediation plan',
              prompt: `Process this vulnerability scan output into an actionable remediation plan:

Scan tool: [Nessus / Qualys / OpenVAS / Trivy / etc.]
Scan scope: [what was scanned - network, web app, containers, etc.]
Environment: [production / staging / development]

Raw scan results:
[Paste scan output - CSV, JSON, or text format]

Asset criticality tiers:
- Tier 1 (business-critical): [list systems]
- Tier 2 (important): [list systems]
- Tier 3 (standard): [list systems]

Please:
1. Deduplicate findings (same CVE across multiple hosts)
2. Prioritize by actual risk, not just CVSS score. Consider:
   - Asset criticality tier
   - Network exposure (internet-facing vs internal)
   - Known exploits in the wild
   - Ease of exploitation
3. Group by remediation action (so one fix addresses multiple vulns)
4. Create a remediation table:
   - Priority (P1/P2/P3/P4)
   - CVE ID(s)
   - Affected systems (count and names)
   - Remediation action (specific - patch version, config change, etc.)
   - Remediation owner (team based on system ownership)
   - SLA (P1: 48hrs, P2: 1 week, P3: 30 days, P4: next quarter)
5. Executive summary (3-4 sentences: total findings, critical count, top risks)`,
              result:
                'A deduplicated, prioritized remediation plan with clear ownership and timelines.',
              tip: 'Always include your asset criticality tiers. A medium CVSS vulnerability on a payment server is higher priority than a critical on a dev box.',
            },
            {
              id: 'cs-p-2-2',
              title: 'CVE Risk Assessment',
              task: 'Assess the risk of a specific CVE to your environment',
              prompt: `Assess the risk of this CVE to my environment:

CVE ID: [CVE-YYYY-XXXXX]
(If you know the details, paste the advisory. Otherwise, analyze based on the CVE ID.)

My environment:
- Affected product/version in use: [yes/no, which version]
- Network exposure: [internet-facing / internal only / air-gapped]
- Current mitigations in place: [WAF, network segmentation, EDR, etc.]
- Asset criticality: [what does this system do for the business]

Provide:
1. Vulnerability summary: what it is and how it works
2. CVSS score and vector breakdown (explain what each component means)
3. Exploitability assessment: Is there a public exploit? Is it being used in the wild?
4. Impact to my environment specifically (based on the context I provided)
5. Risk rating for my environment: Critical / High / Medium / Low - with justification
6. Recommended actions:
   - Immediate mitigation (if no patch available)
   - Patch/fix (specific version, link to advisory)
   - Detection (how to check if this has been exploited)
   - Monitoring (what to watch for going forward)
7. Communication: draft a 3-sentence summary for leadership`,
              result:
                'A contextualized risk assessment with specific actions and a leadership summary.',
            },
            {
              id: 'cs-p-2-3',
              title: 'Penetration Test Report Translator',
              task: 'Translate a penetration test report into a non-technical executive summary',
              prompt: `Translate this penetration test report into an executive summary and actionable remediation plan:

Pentest scope: [what was tested]
Pentest firm: [who performed it]
Date: [when]

Technical findings:
[Paste the technical findings section of the pentest report]

For the executive summary:
1. Overall security posture rating: Strong / Adequate / Needs Improvement / Critical Gaps
2. Key findings in plain language (no jargon - a CEO should understand each point)
3. Business risk of each finding (not technical risk - business impact if exploited)
4. Top 3 priorities for immediate action
5. What is working well (so leadership knows their investments are paying off)

For the remediation plan:
1. Each finding mapped to a specific action
2. Estimated effort for each fix (hours/days, not just "high/medium/low")
3. Recommended owner for each fix
4. Dependencies between fixes (what needs to happen first)
5. 30/60/90 day roadmap for full remediation

Keep the executive summary under 1 page. The remediation plan can be detailed.`,
              result:
                'A leadership-ready executive summary and a detailed remediation roadmap.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Security Reports',
          prompts: [
            {
              id: 'cs-p-3-1',
              title: 'Security Assessment Report',
              task: 'Write a security assessment for a system, vendor, or architecture',
              prompt: `Write a security assessment report for:

Subject: [system name / vendor name / proposed architecture]
Assessment type: [vendor risk / architecture review / application security / cloud security]
Requestor: [who asked for this assessment]

Information provided:
[Paste all available information - architecture diagrams (described), questionnaire responses, documentation, scan results, etc.]

My organization's requirements:
- Data classification: [what type of data will this system handle - PII, PHI, financial, etc.]
- Compliance requirements: [SOC 2, HIPAA, PCI DSS, GDPR, etc.]
- Security standards: [your organization's specific requirements]

Write the assessment with:
1. Executive Summary: 3-4 sentences on overall risk posture
2. Assessment Scope: what was reviewed and what was not
3. Risk Rating: Critical / High / Medium / Low - with justification
4. Findings (for each):
   - Finding title
   - Risk level
   - Description (what is the issue)
   - Impact (what could happen if exploited/unaddressed)
   - Recommendation (specific action to remediate)
5. Compliance Gaps: where does this fall short of requirements?
6. Strengths: what is done well (balanced assessment)
7. Recommendation: Approve / Approve with conditions / Do not approve
8. Conditions for approval (if applicable): what must change before go-live

Professional tone. Evidence-based. Flag assumptions clearly.`,
              result:
                'A complete security assessment report with risk rating, findings, and recommendations.',
              tip: 'Always flag what was NOT reviewed. A security assessment with clear scope limitations is more credible than one that implies completeness.',
            },
            {
              id: 'cs-p-3-2',
              title: 'Monthly Security Metrics Report',
              task: 'Generate a monthly security metrics report for leadership',
              prompt: `Generate a monthly security metrics report from this data:

Month: [month/year]
Reporting period: [start date] to [end date]

Metrics data:
- Total security alerts: [number]
- Alerts triaged: [number]
- True positives: [number]
- Incidents opened: [number]
- Incidents resolved: [number]
- Mean time to detect (MTTD): [time]
- Mean time to respond (MTTR): [time]
- Vulnerabilities discovered: [number]
- Critical vulns open: [number]
- Vulns remediated: [number]
- Mean time to remediate critical: [days]
- Phishing emails reported by users: [number]
- Phishing click rate: [percentage]
- Security awareness training completion: [percentage]
- Compliance control status: [X of Y controls passing]
- Open risk acceptances: [number]

Notable events this month:
[List any significant incidents, projects, or changes]

Generate:
1. Executive dashboard (1 page - key numbers with trend arrows vs last month)
2. Alert and incident summary with efficiency metrics
3. Vulnerability management status with aging analysis
4. Security awareness program effectiveness
5. Compliance posture summary
6. Risk highlights (top 3 risks the organization should know about)
7. Planned activities for next month

Use tables and clear formatting. This goes to the CISO and executive team.`,
              result:
                'A professional monthly security report with metrics, trends, and risk highlights.',
            },
            {
              id: 'cs-p-3-3',
              title: 'Security Policy Drafter',
              task: 'Draft or update a security policy document',
              prompt: `Draft a [policy type] security policy for my organization.

Policy type: [Acceptable Use / Data Classification / Incident Response / Access Control / Password / Remote Work / BYOD / etc.]

Organization context:
- Industry: [industry]
- Size: [employee count]
- Compliance requirements: [SOC 2, HIPAA, PCI, etc.]
- Current maturity: [startup with no policies / updating existing policies / mature program]

Existing policy (if updating):
[Paste current policy or "none - creating from scratch"]

Requirements:
1. Policy statement (what this policy covers and why)
2. Scope (who and what this applies to)
3. Definitions (define key terms)
4. Policy requirements (specific, actionable rules - not vague guidelines)
5. Roles and responsibilities (who enforces, who complies)
6. Exceptions process (how to request an exception)
7. Enforcement (consequences of non-compliance)
8. Related policies (cross-references)
9. Review schedule (how often this is reviewed)
10. Version history table

Keep it practical and enforceable. Avoid security theater - every requirement should reduce real risk. If a requirement is unrealistic, suggest a pragmatic alternative.`,
              result:
                'A complete, enforceable security policy document aligned with compliance requirements.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Log Analysis',
          prompts: [
            {
              id: 'cs-p-4-1',
              title: 'Suspicious Activity Log Analyzer',
              task: 'Analyze logs for indicators of suspicious or malicious activity',
              prompt: `Analyze these logs for suspicious or malicious activity:

Log source: [firewall / web server / authentication / endpoint / proxy / DNS]
Time window: [start] to [end]
Context: [why are you looking - alert triggered, threat hunt, routine review]

Logs:
[Paste the log entries]

Known baseline:
- Normal business hours: [time range]
- Expected source countries: [list]
- Expected user behavior: [description of normal patterns]

Analyze for:
1. Authentication anomalies: brute force, credential stuffing, impossible travel, off-hours access
2. Network anomalies: unusual ports, unexpected destinations, large data transfers, DNS tunneling indicators
3. Endpoint anomalies: suspicious processes, privilege escalation, lateral movement indicators
4. Application anomalies: SQL injection attempts, directory traversal, parameter tampering
5. Data exfiltration indicators: unusual upload volumes, connections to cloud storage, encoded payloads

For each finding:
- Timestamp and event details
- Why it is suspicious (what deviates from baseline)
- Severity: Critical / High / Medium / Low
- MITRE ATT&CK technique mapping
- Recommended follow-up investigation steps
- False positive likelihood: High / Medium / Low

End with: an overall assessment and recommended next actions.`,
              result:
                'A structured analysis of suspicious log activity with severity ratings and investigation next steps.',
              tip: 'Provide the baseline context. Without knowing what "normal" looks like, AI cannot effectively identify what is "abnormal."',
            },
            {
              id: 'cs-p-4-2',
              title: 'Log Parser and Normalizer',
              task: 'Parse and normalize logs from multiple sources into a unified format',
              prompt: `Parse and normalize these log entries from multiple sources into a unified format:

Source 1 ([source name - e.g., "Palo Alto Firewall"]):
[Paste log entries]

Source 2 ([source name - e.g., "Windows Event Log"]):
[Paste log entries]

Source 3 ([source name - e.g., "Apache Access Log"]):
[Paste log entries]

Normalize each entry into this format:
- Timestamp (ISO 8601 UTC)
- Source system
- Event type (authentication / network / process / file / web)
- Action (allow / deny / login / logout / execute / access / modify)
- Actor (username, IP, process name)
- Target (system, file, URL, port)
- Result (success / failure / blocked)
- Severity (info / low / medium / high / critical)
- Raw log (original entry for reference)

Then:
1. Sort all events chronologically across all sources
2. Identify correlated events (same actor, related timestamps, connected actions)
3. Flag any events that appear in one log source but are missing from another where you would expect to see them
4. Output as a clean table I can import into a spreadsheet or SIEM`,
              result:
                'Normalized, correlated log entries in a unified format ready for analysis or import.',
            },
            {
              id: 'cs-p-4-3',
              title: 'SIEM Rule Generator',
              task: 'Create detection rules from observed attack patterns',
              prompt: `Create SIEM detection rules based on this attack pattern:

Attack description: [describe the attack technique or behavior to detect]

Example of the attack in logs:
[Paste log entries that show the attack behavior]

Example of normal (non-malicious) behavior:
[Paste log entries that show the benign version of similar activity - for reducing false positives]

SIEM platform: [Splunk / Sentinel / Elastic / QRadar / generic]

For each detection rule:
1. Rule name (descriptive, following MITRE naming conventions)
2. MITRE ATT&CK technique mapping
3. Detection logic (query/rule in your SIEM's syntax)
4. Threshold and time window
5. Severity level
6. False positive considerations and tuning guidance
7. Recommended response actions when the rule fires
8. Test cases: example events that SHOULD trigger the rule and events that should NOT

Create three rules:
- High-confidence (very specific, low false positives, may miss some attacks)
- Medium-confidence (broader detection, some false positives expected)
- Hunting query (very broad, for proactive threat hunting sessions)`,
              result:
                'Three detection rules at different confidence levels with testing guidance and tuning notes.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Compliance',
          prompts: [
            {
              id: 'cs-p-5-1',
              title: 'Compliance Control Mapper',
              task: 'Map your security controls against a compliance framework',
              prompt: `Map my current security controls against [framework name]:

Framework: [SOC 2 Type II / ISO 27001 / NIST CSF / PCI DSS / HIPAA / CIS Controls]
Scope: [what systems/data are in scope for this compliance]

My current security controls:
[List your controls - be honest about what is actually implemented vs planned]
Example format:
- Access control: [describe implementation - MFA, RBAC, etc.]
- Encryption: [at rest, in transit, key management]
- Logging and monitoring: [SIEM, log retention, alerting]
- Vulnerability management: [scanning frequency, remediation SLAs]
- Incident response: [plan, testing, team]
- Backup and recovery: [backup frequency, tested recovery, RTO/RPO]
- [Continue for each control area]

Please:
1. Map each of my controls to specific framework requirements
2. For each requirement, rate: Fully Met / Partially Met / Not Met / Not Applicable
3. For "Partially Met" - specify exactly what is missing
4. For "Not Met" - specify the minimum viable implementation to achieve compliance
5. Identify quick wins (controls that are almost compliant with minimal effort)
6. Identify the highest-effort gaps (controls that require significant investment)
7. Provide a compliance readiness score (percentage of controls met)
8. Suggest a prioritized remediation roadmap for gap closure`,
              result:
                'A complete compliance gap analysis with readiness score and remediation roadmap.',
              tip: 'Be honest about your current state. AI cannot help you close gaps it does not know about. List what is actually in place, not what is planned.',
            },
            {
              id: 'cs-p-5-2',
              title: 'Compliance Evidence Collector',
              task: 'Identify what evidence to collect for an upcoming audit',
              prompt: `I have an upcoming [framework] audit. Help me prepare the evidence package.

Framework: [SOC 2 / ISO 27001 / PCI DSS / HIPAA / etc.]
Audit type: [internal / external / certification / renewal]
Audit period: [start date] to [end date]
Auditor: [firm name, if known]

Controls in scope:
[List the control areas that will be audited]

For each control area:
1. What evidence the auditor will expect to see
2. The specific format (screenshot, export, document, log, configuration dump)
3. Where this evidence typically lives in your environment (tool name, location)
4. How to collect it (step-by-step for each piece of evidence)
5. Common auditor questions about this control and how to answer them
6. Red flags the auditor will look for (what to fix before the audit)

Also provide:
- A master evidence checklist I can track collection against
- A timeline for evidence collection (what to collect first, what can wait)
- Tips for a smooth audit (presentation, organization, communication)`,
              result:
                'A complete evidence collection checklist with formats, locations, and auditor preparation tips.',
            },
            {
              id: 'cs-p-5-3',
              title: 'Risk Register Builder',
              task: 'Build or update a security risk register',
              prompt: `Build a security risk register for my organization:

Organization: [type, size, industry]
Key assets: [list critical systems and data types]
Current threat landscape: [describe relevant threats - industry-specific, geographic, etc.]
Existing controls: [summarize your security program maturity]

For each risk entry, provide:
1. Risk ID (sequential)
2. Risk title (concise description)
3. Risk category (operational, technical, compliance, third-party, physical)
4. Threat source (external attacker, insider, natural disaster, human error, system failure)
5. Vulnerability (what weakness could be exploited)
6. Impact description (what happens if this risk materializes)
7. Impact rating: Critical / High / Medium / Low
8. Likelihood rating: Almost Certain / Likely / Possible / Unlikely / Rare
9. Inherent risk score (impact x likelihood)
10. Current controls mitigating this risk
11. Residual risk score (after controls)
12. Risk treatment: Accept / Mitigate / Transfer / Avoid
13. Recommended additional controls (if mitigate)
14. Risk owner

Generate at least 15 risks covering:
- External threats (3-4 risks)
- Internal threats (2-3 risks)
- Third-party risks (2-3 risks)
- Compliance risks (2-3 risks)
- Operational risks (2-3 risks)
- Emerging risks (1-2 risks)

Format as a table I can import into a spreadsheet.`,
              result:
                'A comprehensive risk register with 15+ rated risks, controls mapping, and treatment recommendations.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Threat Intelligence',
          prompts: [
            {
              id: 'cs-p-6-1',
              title: 'Threat Actor Profile',
              task: 'Build a threat actor profile relevant to your organization',
              prompt: `Build a threat actor profile for [threat actor name or type]:

If named actor: [APT group name, ransomware group name]
If generic: [e.g., "nation-state actors targeting healthcare" or "financially motivated attackers targeting SaaS companies"]

My organization:
- Industry: [industry]
- Size: [employee count, revenue range]
- Technology stack: [key technologies - cloud providers, OS, applications]
- Geographic presence: [countries of operation]
- Data types held: [PII, financial, IP, health, etc.]

Provide:
1. Actor overview: who they are, motivation (financial, espionage, hacktivism, disruption)
2. Typical targets: industries, company sizes, geographic focus
3. Known TTPs mapped to MITRE ATT&CK:
   - Initial access techniques
   - Persistence mechanisms
   - Lateral movement methods
   - Exfiltration techniques
   - Tools and malware commonly used
4. Recent campaigns: last 12 months of known activity
5. Indicators of Compromise: known IP ranges, domains, file hashes, email patterns
6. Relevance to my organization: High / Medium / Low - with justification
7. Detection recommendations: what to monitor and what rules to create
8. Prevention recommendations: specific controls to implement
9. Sources: where to track this actor's activity going forward`,
              result:
                'A comprehensive threat actor profile with TTPs, IOCs, and specific defensive recommendations.',
              tip: 'Run this for the top 3-5 threat actors relevant to your industry. Update quarterly as the landscape shifts.',
            },
            {
              id: 'cs-p-6-2',
              title: 'IOC Enrichment and Context',
              task: 'Enrich raw IOCs with context and determine relevance',
              prompt: `Enrich these Indicators of Compromise and provide context:

IOCs to analyze:
[Paste your list - IP addresses, domain names, file hashes, email addresses, URLs]

Context: These IOCs were found during [incident investigation / threat feed / log review / third-party report].

For each IOC:
1. Type classification (IP, domain, hash, email, URL)
2. Known associations: Is this linked to known malware, threat actors, or campaigns?
3. Reputation: Is this on known blocklists or threat intelligence feeds?
4. First seen / Last seen: When was this IOC first and most recently observed in the wild?
5. Confidence level: High / Medium / Low - how confident are we this is malicious?
6. False positive risk: Could this be legitimate? (CDN IPs, shared hosting, common domains)
7. Related IOCs: What other indicators are associated with this one?
8. Recommended action: Block / Monitor / Investigate / Ignore
9. Detection signature: How to detect this IOC in your environment (SIEM query, firewall rule, etc.)

Provide a summary table at the top and detailed analysis below.
Flag any IOCs that appear to be related to the same campaign or actor.`,
              result:
                'Enriched IOCs with reputation, context, related indicators, and recommended actions.',
            },
            {
              id: 'cs-p-6-3',
              title: 'Threat Landscape Briefing',
              task: 'Generate a threat landscape briefing for leadership',
              prompt: `Generate a threat landscape briefing for my organization:

Organization: [industry, size, technology profile]
Reporting period: [month or quarter]
Audience: [CISO, executive team, board of directors]

Cover:
1. Top threats to our industry this period:
   - Ransomware trends (groups, techniques, ransom demands)
   - Phishing and social engineering developments
   - Supply chain and third-party risks
   - Nation-state activity relevant to our sector
   - Emerging attack techniques

2. Notable security incidents in our industry:
   - What happened (2-3 sentences each)
   - Lessons for our organization
   - Are we protected against similar attacks?

3. Vulnerability landscape:
   - Critical CVEs this period that affect common enterprise software
   - Zero-days disclosed
   - Patch urgency recommendations

4. Regulatory and compliance updates:
   - New regulations or guidance relevant to our industry
   - Enforcement actions or fines in our sector
   - Upcoming compliance deadlines

5. Recommendations:
   - Top 3 actions to take this month based on the threat landscape
   - Strategic investments to consider for the next quarter
   - Areas where our current posture may have gaps

Keep it concise - 2-3 pages maximum. Executive-friendly language. Use risk-based framing (impact to the business, not technical jargon).`,
              result:
                'A concise, executive-ready threat landscape briefing with industry context and actionable recommendations.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is the real impact on your weekly workflow - measured in time you get back for actual security work.',
      timeTable: [
        {
          task: 'Incident response analysis',
          without: '3-6 hrs/incident',
          withAI: '45-90 min',
          saved: '2-4.5 hrs',
        },
        {
          task: 'Vulnerability assessment',
          without: '4-8 hrs/assessment',
          withAI: '1-2 hrs',
          saved: '3-6 hrs',
        },
        {
          task: 'Security report writing',
          without: '2-4 hrs/report',
          withAI: '30-45 min',
          saved: '1.5-3 hrs',
        },
        {
          task: 'Log analysis',
          without: '2-5 hrs/investigation',
          withAI: '30-60 min',
          saved: '1.5-4 hrs',
        },
        {
          task: 'Compliance checking',
          without: '2-4 weeks/audit',
          withAI: '3-5 days',
          saved: '1-3 weeks',
        },
        {
          task: 'Threat intelligence',
          without: '4-8 hrs/CVE',
          withAI: '1-2 hrs',
          saved: '3-6 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '30-50+ hrs/month',
      },
      sections: [
        {
          heading: 'The Security Impact',
          paragraphs: [
            'Those saved hours do not just go back to your personal productivity. They go back to your organization\'s security posture. Every hour you save on report formatting is an hour you can spend on proactive threat hunting. Every hour saved on log parsing is an hour for architecture review.',
            'Security teams using AI in 2026 are not just faster - they are covering more ground. More alerts triaged. More vulnerabilities addressed. More proactive hunting. The coverage gap between AI-assisted and non-AI-assisted security teams is growing every quarter.',
          ],
        },
        {
          heading: 'The Human Advantage',
          paragraphs: [
            'AI processes the data. You provide the judgment. That combination is more powerful than either alone. The organizations with the strongest security postures are the ones where skilled professionals use AI to extend their reach - not the ones with the most expensive tools gathering dust.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. If you spend most of your time on reports, start there. If it is incident response, start there. One workflow change is enough to prove the value.',
    },

    ch7: {
      intro:
        'Seven days to build an AI-assisted security workflow. Each day is focused and practical. By day 7, you will have a new approach to the work that consumes most of your time.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'cs-1-1', label: 'Create a free ChatGPT or Claude account if you do not have one' },
            { id: 'cs-1-2', label: 'Create a free Perplexity account for threat research' },
            { id: 'cs-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Analyze Your First Incident with AI',
          duration: '20 min',
          items: [
            {
              id: 'cs-2-1',
              label:
                'Take a recent incident or suspicious event from your logs',
            },
            {
              id: 'cs-2-2',
              label:
                'Run the Incident Timeline Builder prompt with real log data',
            },
            {
              id: 'cs-2-3',
              label:
                'Compare the output to how long the manual analysis would have taken',
            },
          ],
        },
        {
          day: 3,
          title: 'Process a Vulnerability Report',
          duration: '20 min',
          items: [
            {
              id: 'cs-3-1',
              label: 'Take your latest vulnerability scan output',
            },
            {
              id: 'cs-3-2',
              label:
                'Run the Vulnerability Report Processor prompt with your real data',
            },
            {
              id: 'cs-3-3',
              label: 'Review the prioritized remediation plan it generates',
            },
          ],
        },
        {
          day: 4,
          title: 'Write a Report with AI',
          duration: '20 min',
          items: [
            {
              id: 'cs-4-1',
              label: 'Pick a report you need to write this week (assessment, monthly metrics, or incident)',
            },
            {
              id: 'cs-4-2',
              label: 'Dump your raw findings into the appropriate report prompt',
            },
            {
              id: 'cs-4-3',
              label: 'Review, refine, and notice how much faster the process was',
            },
          ],
        },
        {
          day: 5,
          title: 'Research a Threat',
          duration: '15 min',
          items: [
            {
              id: 'cs-5-1',
              label: 'Use Perplexity to research a recent CVE or threat affecting your industry',
            },
            {
              id: 'cs-5-2',
              label: 'Run the Threat Actor Profile prompt for an actor relevant to your organization',
            },
            {
              id: 'cs-5-3',
              label: 'Use the output to brief your team or update your threat model',
            },
          ],
        },
        {
          day: 6,
          title: 'Compliance and Detection',
          duration: '20 min',
          items: [
            {
              id: 'cs-6-1',
              label: 'Run the Compliance Control Mapper prompt for your primary framework',
            },
            {
              id: 'cs-6-2',
              label: 'Try the SIEM Rule Generator prompt for a detection gap you know about',
            },
          ],
        },
        {
          day: 7,
          title: 'Full AI-Assisted Security Workflow',
          duration: '15 min',
          items: [
            {
              id: 'cs-7-1',
              label: 'Reflect: which system saved you the most time this week?',
            },
            {
              id: 'cs-7-2',
              label: 'Build that system into your daily routine - make it the default, not the exception',
            },
            {
              id: 'cs-7-3',
              label: 'Share this guide with a security professional who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
