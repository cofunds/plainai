import type { WorkbookData } from './types'

export const copywriterData = {
  professionId: 'copywriter',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Copywriters',
  heroDescription:
    'Everything you need to use AI as your first-draft machine - with real tools, workflows, and prompts for headlines, landing pages, emails, and more.',

  chapters: {
    ch1: {
      paragraphs: [
        'You open your laptop to 4 briefs, all due this week. The first one needs 10 headline options for a product launch. The second is a full landing page rewrite. The third is a 5-email nurture sequence. The fourth is "a few social captions" - which always means 15-20 variations across platforms.',
        'You stare at the first blank document for 12 minutes before writing a headline you immediately delete. You check your phone. You refill your coffee. You read the brief again. You write three headlines, hate all of them, and open the second brief hoping fresh context helps. It doesn\'t.',
        'By 2pm, you\'ve written 400 words across four documents, rewritten most of them twice, and spent 45 minutes on a subject line that still doesn\'t feel right. A client pings: "Can we also get 3 CTA variations? And can you match the tone of this other brand? By tomorrow?"',
        'You became a copywriter because you love language, persuasion, and the craft of making people feel something. Instead, you spend most of your day fighting the blank page, managing revision rounds, and producing volume that leaves no room for creativity.',
      ],
      highlight:
        'What if the blank page was never blank? What if every project started with a solid first draft you could shape, refine, and make brilliant?',
      closingParagraph:
        'Not replacing your voice or your craft. Just eliminating the hardest part of every project - the gap between nothing and something.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to write copy that makes people cry, laugh, or pull out their credit card - at least not without you. It doesn\'t understand your client\'s customers the way you do. It can\'t feel the rhythm of a sentence or know when a line hits. And it definitely won\'t replace the strategic thinking that separates good copy from great copy.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as your first-draft machine. It kills the blank page problem completely. Instead of staring at an empty document for 20 minutes, you start with raw material you can sculpt. Headlines to riff on. Body copy to tighten. CTAs to sharpen.',
            'Need 10 headline options? AI gives you 15 in 30 seconds. Need a landing page structure? AI outlines it with copy blocks you can refine. Need email subject lines? AI generates 20 variations while you pick the 3 that actually work.',
            'The model is simple: AI writes the first 80%. You edit, refine, and elevate the final 20%. That 20% is where your skill, taste, and understanding of the audience live. That\'s the part clients pay for.',
          ],
        },
        {
          heading: 'Why copywriters have a unique advantage',
          paragraphs: [
            'You already know what good writing looks like. You can spot a weak headline, a buried lede, or a CTA that doesn\'t convert. Most people can\'t. That editorial eye is your superpower with AI.',
            'When non-writers use AI, they accept the first draft. When copywriters use AI, they use the first draft as clay. You know exactly how to reshape it - tighten the rhythm, sharpen the hook, cut the filler, add the emotional punch. The result is better copy, produced faster, with more creative energy left for the work that matters.',
          ],
        },
      ],
      keyInsight:
        'You\'re not being replaced by AI. You\'re being promoted. From writer to editor-in-chief. AI handles volume. You handle quality, strategy, and the human insight that makes copy convert.',
    },

    ch3: {
      intro: 'Five tools that cover everything a modern copywriter needs. Start with the first two.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your brainstorming and drafting partner',
          description:
            'Headlines, brainstorming, first drafts, variations, creative exploration, and rapid ideation',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for speed and variety',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form writer and editor',
          description:
            'Landing pages, email sequences, long-form content, nuanced editing, and tone matching',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long-form and nuanced copy',
          icon: 'claude',
        },
        {
          name: 'Jasper',
          role: 'Your marketing copy specialist',
          description:
            'Ad copy, product descriptions, marketing emails, social captions with templates built for marketers',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Purpose-built for marketing copy',
          icon: 'jasper',
        },
        {
          name: 'Grammarly',
          role: 'Your editing and quality control layer',
          description:
            'Grammar, clarity, tone detection, readability scoring, and consistency checks across documents',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Essential for final polish',
          icon: 'grammarly',
        },
        {
          name: 'Hemingway Editor',
          role: 'Your readability optimizer',
          description:
            'Sentence complexity, readability grade level, passive voice detection, adverb flagging',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for tightening copy',
          icon: 'hemingway',
        },
      ],
      footer:
        'Start with ChatGPT for brainstorming and Claude for long-form. Add Grammarly for polish. Hemingway and Jasper are great additions when you\'re ready.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual copywriting workflow. Each system eliminates hours of blank-page time. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Headline Generation',
          before:
            'You stare at the brief, write a headline, delete it, write another, check competitor examples for inspiration, write three more, and after 45 minutes you have 5 options - none of which feel like "the one." You send them anyway.',
          after:
            'AI generates 20 headline options in 30 seconds across different frameworks - benefit-led, curiosity-driven, social proof, urgency, question-based. You pick the 3 strongest, refine them with your instinct, and move on. Total time: 10 minutes.',
          flow: [
            'Feed AI the product, audience, and desired action',
            'Request headlines across multiple frameworks',
            'AI generates 15-20 options in seconds',
            'Select your top 3-5 and refine by hand',
            'Test variations if running ads or emails',
          ],
          timeSaved: { without: '30-60 min per project', withAI: '10 minutes' },
        },
        {
          id: 2,
          name: 'Landing Page Copy',
          before:
            'You read the brief twice, outline the page structure, write the hero section, stall on the benefit blocks, struggle with the social proof section, and the CTA feels generic. The full page takes 4-6 hours. Revisions add another 2.',
          after:
            'AI generates a complete landing page draft - hero, benefits, social proof, objection handling, CTA - in 3 minutes. You spend your time refining the messaging, sharpening the hooks, and adding the emotional resonance that converts.',
          flow: [
            'Share the product, audience, pain points, and desired action',
            'AI drafts a full landing page with all sections',
            'Review section by section - refine messaging and tone',
            'Tighten headlines and CTAs with your expertise',
            'Run through Hemingway for readability check',
          ],
          timeSaved: { without: '4-6 hours', withAI: '1-2 hours' },
        },
        {
          id: 3,
          name: 'Email Sequence Writing',
          before:
            'You map out the sequence logic, write email 1, lose steam by email 3, and emails 4-5 feel like watered-down versions of email 1. Subject lines are an afterthought. The whole sequence takes 2 days.',
          after:
            'AI drafts the full sequence with strategic progression - awareness, education, social proof, urgency, last chance. Each email has a distinct angle. You refine the flow, add personal touches, and nail the subject lines.',
          flow: [
            'Define the sequence goal, audience, and number of emails',
            'AI generates the full sequence with strategic arc',
            'Review each email for message progression',
            'Refine subject lines and preview text',
            'Add personal voice and client-specific details',
          ],
          timeSaved: { without: '1-2 days', withAI: '2-3 hours' },
        },
        {
          id: 4,
          name: 'Social Media Captions',
          before:
            'The brief says "15 social captions across 3 platforms." You write 5 good ones, then start copying the same structure with slight variations. By caption 12, everything sounds the same. Platform-specific tone adjustments feel forced.',
          after:
            'AI generates platform-specific captions - short and punchy for Twitter/X, visual-first for Instagram, professional for LinkedIn. Different hooks, different angles, different CTAs. You cherry-pick the best, refine, and deliver variety that actually feels varied.',
          flow: [
            'Share the content topic, brand voice, and platforms needed',
            'AI generates captions tailored to each platform',
            'Select the strongest options from each batch',
            'Refine tone, add hashtags, adjust for character limits',
            'Deliver a diverse set that doesn\'t repeat itself',
          ],
          timeSaved: { without: '2-3 hours', withAI: '30 minutes' },
        },
        {
          id: 5,
          name: 'Ad Copy Variations',
          before:
            'The media team needs 10 ad variations for A/B testing. You write 4 that feel distinct. Variations 5-10 are the same idea with synonyms swapped. Testing reveals they all perform the same because they\'re all saying the same thing in slightly different words.',
          after:
            'AI generates ad copy across genuinely different angles - benefit-led, fear-of-missing-out, social proof, curiosity, direct offer, storytelling. Each variation tests a different hypothesis. You refine the winners and cut the weak ones.',
          flow: [
            'Define the product, audience, and ad platform constraints',
            'Request variations across different psychological angles',
            'AI generates 10-15 genuinely distinct variations',
            'Select the strongest from each angle',
            'Refine for platform specs (character limits, CTA buttons)',
          ],
          timeSaved: { without: '2-3 hours', withAI: '30 minutes' },
        },
        {
          id: 6,
          name: 'Client Revision Handling',
          before:
            'Client feedback says "make it punchier" or "can it feel more premium?" You guess what they mean, rewrite, send it back. "Not quite - more like [vague reference]." Three rounds later, you\'re rewriting from scratch. Each round takes an hour.',
          after:
            'AI generates 3-4 interpretation options based on the client feedback. "Here\'s punchier with shorter sentences. Here\'s punchier with bolder claims. Here\'s punchier with more urgency." Client picks a direction. One round instead of three.',
          flow: [
            'Paste the original copy and the client\'s feedback',
            'AI generates multiple interpretations of the feedback',
            'Present 2-3 options to the client with brief rationale',
            'Client picks a direction - you refine that version',
            'Close the revision loop in one round instead of three',
          ],
          timeSaved: { without: '1-3 hours per round', withAI: '20 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Copy-paste prompts for every copywriting task. Click to reveal, fill in the brackets, and watch the blank page disappear.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Headlines',
          prompts: [
            {
              id: 'cw-p-1-1',
              title: 'Headline Formula Generator',
              task: 'Generate headlines across proven copywriting formulas',
              prompt: `Write 20 headline options for [product/service/campaign].

Context:
- Product/Service: [what it is]
- Target audience: [who we're talking to]
- Key benefit: [the #1 thing they get]
- Desired action: [what we want them to do]
- Tone: [e.g., bold, conversational, urgent, playful]

Generate headlines across these frameworks:
1. Benefit-led (4 headlines) - Lead with what they get
2. Curiosity/intrigue (4 headlines) - Make them need to know more
3. Social proof (3 headlines) - Leverage numbers, results, or credibility
4. Question-based (3 headlines) - Ask something they can't ignore
5. Fear of missing out (3 headlines) - What they lose by not acting
6. How-to / instructional (3 headlines) - Promise a clear path

Rules:
- No cliches ("unlock," "unleash," "revolutionize")
- Each headline must be under 12 words
- Vary sentence structure - don't start them all the same way
- Mark your top 3 picks and explain why they work`,
              result: '20 headlines across 6 proven frameworks with top recommendations.',
              tip: 'Use the top picks as starting points, then riff on them manually. Your best headline is usually a mashup of two AI suggestions.',
            },
            {
              id: 'cw-p-1-2',
              title: 'Subheadline and Support Copy',
              task: 'Write subheadlines that reinforce and extend your main headline',
              prompt: `Write supporting subheadline options for this main headline:

Main headline: [your headline]
Product/Service: [what it is]
Target audience: [who]
Key benefit: [main benefit]

Generate:
1. 5 subheadlines that explain the "how" (how do they get this benefit?)
2. 5 subheadlines that add specificity (numbers, timeframes, proof)
3. 5 subheadlines that handle the main objection (why they might hesitate)

Rules:
- Each subheadline should be 1-2 sentences
- Don't repeat the main headline's language
- Add new information - not just a restatement
- Keep the tone consistent with the headline

Then pair your top 3 headline + subheadline combinations and explain why each pairing works.`,
              result: '15 subheadline options organized by purpose with recommended pairings.',
              tip: 'The best subheadline answers the question the headline creates. If your headline is curiosity-based, the subheadline should deliver just enough clarity to keep them reading.',
            },
            {
              id: 'cw-p-1-3',
              title: 'A/B Test Headline Pairs',
              task: 'Create headline pairs that test genuinely different hypotheses',
              prompt: `Create A/B test headline pairs for [product/campaign].

Context:
- Product: [what it is]
- Audience: [who]
- Current headline: [if you have one]
- What you want to test: [e.g., benefit vs. curiosity, short vs. long, emotional vs. rational]

Generate 5 A/B test pairs where each pair tests a specific hypothesis:

Pair 1: [Hypothesis - e.g., "Does benefit-led or curiosity-driven perform better?"]
- Version A: [headline]
- Version B: [headline]
- What this test tells us: [insight]

Pair 2: [Next hypothesis]
... and so on for all 5 pairs.

Rules:
- Each pair should test ONE variable (don't change everything at once)
- Versions A and B should be equally strong - no sandbagging
- Include the learning each test would provide
- Rank which tests to run first based on potential impact`,
              result: '5 A/B test pairs with clear hypotheses and learning objectives.',
              tip: 'Run the highest-impact test first. One good test teaches you more than 10 random variations.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Landing Pages',
          prompts: [
            {
              id: 'cw-p-2-1',
              title: 'Full Landing Page Draft',
              task: 'Generate a complete landing page with all sections',
              prompt: `Write a complete landing page for [product/service].

Product details:
- What it is: [describe in 1-2 sentences]
- Who it's for: [target audience]
- Main problem it solves: [the pain point]
- Key benefits: [top 3 benefits]
- Pricing: [price or pricing model]
- Social proof available: [testimonials, stats, logos, awards]
- Main objections: [top 3 reasons people hesitate]
- Desired action: [sign up, buy, book a call, etc.]

Write these sections:
1. Hero section (headline + subheadline + CTA button text)
2. Problem section (agitate the pain - make them feel understood)
3. Solution section (introduce the product as the answer)
4. Benefits section (3-4 benefit blocks with headers and descriptions)
5. How it works (3-4 simple steps)
6. Social proof section (framework for testimonials + stats)
7. Objection handling (address top 3 concerns)
8. FAQ section (5 questions with answers)
9. Final CTA section (headline + urgency + button)

Rules:
- Conversational tone - write like you're talking to one person
- Short paragraphs (2-3 sentences max)
- Every section should move them closer to the CTA
- Use specific language, not vague promises
- No filler phrases ("in today's fast-paced world," etc.)`,
              result: 'A complete landing page draft with all essential sections.',
              tip: 'The hero section does 80% of the work. Spend most of your editing time there. If the headline and subheadline don\'t hook them, nothing below matters.',
            },
            {
              id: 'cw-p-2-2',
              title: 'Landing Page CTA Optimizer',
              task: 'Generate high-converting CTA copy for landing pages',
              prompt: `Write CTA (call-to-action) copy for a landing page.

Context:
- Product: [what it is]
- Desired action: [sign up / buy / book / download / etc.]
- Price: [if applicable]
- Main benefit: [why they should act]
- Main objection: [why they hesitate]

Generate:
1. 10 primary CTA button text options (3-6 words each)
2. 5 CTA supporting lines (the line of text right below or above the button)
3. 3 urgency-based CTAs (for limited-time or scarcity situations)
4. 3 risk-reversal CTAs (addressing fear of commitment)
5. 2 micro-commitment CTAs (for top-of-funnel, low-friction actions)

Rules:
- Use action verbs (get, start, join, claim - not "submit" or "click here")
- Make the value clear in the button itself
- Supporting lines should handle the #1 objection
- No fake urgency - keep it honest

Rank your top 3 overall CTAs and explain why they'd convert.`,
              result: 'A comprehensive CTA library with button text, supporting lines, and strategic recommendations.',
              tip: 'Your CTA should complete the sentence "I want to..." from the visitor\'s perspective. "Start my free trial" beats "Submit" every time.',
            },
            {
              id: 'cw-p-2-3',
              title: 'Landing Page Objection Handler',
              task: 'Write copy that addresses visitor objections before they bounce',
              prompt: `Write objection-handling copy for a landing page.

Product: [what it is]
Audience: [who]
Price: [amount]

Top objections (in order of frequency):
1. [e.g., "It's too expensive"]
2. [e.g., "I'm not sure it'll work for my situation"]
3. [e.g., "I don't have time to learn a new tool"]
4. [e.g., "What if I don't like it?"]
5. [e.g., "Why should I trust this company?"]

For each objection, write:
- A section header that acknowledges the concern (without being defensive)
- 2-3 sentences that reframe the objection
- One proof point (stat, testimonial framework, or guarantee)
- A mini-CTA that moves them forward

Tone: Empathetic, confident, direct. Understand their concern, then dissolve it.

Also write an FAQ version of each objection as Q&A format.`,
              result: 'Objection-handling copy blocks and FAQ entries for your landing page.',
              tip: 'Place objection-handling copy right before your final CTA. Readers who scroll that far are interested but hesitant - this is where you close.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Email Sequences',
          prompts: [
            {
              id: 'cw-p-3-1',
              title: 'Full Email Nurture Sequence',
              task: 'Write a complete multi-email nurture sequence',
              prompt: `Write a [5/7/10]-email nurture sequence.

Context:
- Product/Service: [what you're selling]
- Audience: [who these emails are for]
- Entry point: [how they got on this list - lead magnet, sign-up, purchase, etc.]
- Goal of sequence: [what action you want by the end]
- Tone: [e.g., friendly, authoritative, casual, professional]
- Brand voice: [any specific rules]

For each email, write:
1. Subject line (+ 2 alternatives)
2. Preview text
3. Email body (150-300 words)
4. CTA (what you want them to do)
5. Strategic purpose (why this email exists in the sequence)

Sequence arc:
- Email 1: Welcome and set expectations
- Email 2: Deliver value (teach something useful)
- Email 3: Story or case study (show transformation)
- Email 4: Address objections (handle their hesitation)
- Email 5: Social proof (show others succeeding)
- Email 6: Direct offer with urgency
- Email 7: Last chance or next steps

Rules:
- Each email should stand alone (not everyone opens every email)
- Subject lines must earn the open - no clickbait
- Every email gives value even if they don't buy
- Short paragraphs - this is email, not a blog post
- One clear CTA per email`,
              result: 'A complete email nurture sequence with subject lines, body copy, and strategic purpose for each email.',
              tip: 'Email 1 gets the highest open rate. Make it incredible. If they don\'t love email 1, they won\'t open email 2.',
            },
            {
              id: 'cw-p-3-2',
              title: 'Email Subject Line Generator',
              task: 'Generate high-open-rate subject lines',
              prompt: `Write 25 email subject line options for [email topic/campaign].

Context:
- What the email is about: [content summary]
- Audience: [who's receiving this]
- Goal: [what you want them to do after opening]
- Tone: [brand voice description]

Generate subject lines across these categories:
1. Curiosity gap (5) - create an itch they need to scratch
2. Benefit-driven (5) - lead with what they get
3. Personal/conversational (5) - sound like a friend, not a brand
4. Number/listicle (5) - specific, scannable, clear
5. Urgency/timely (5) - time-sensitive without being spammy

Rules:
- Keep them under 50 characters when possible
- No ALL CAPS, no excessive punctuation
- No spam trigger words (free!!!, act now, limited time)
- Preview text suggestion for your top 5
- Mark your top 5 overall and explain open-rate psychology behind each`,
              result: '25 subject line options with top picks and psychological reasoning.',
              tip: 'The subject line\'s only job is to get the open. Don\'t try to sell in the subject line - just create enough curiosity or promise enough value to earn the click.',
            },
            {
              id: 'cw-p-3-3',
              title: 'Cart Abandonment Email Series',
              task: 'Write a cart abandonment email sequence',
              prompt: `Write a 3-email cart abandonment sequence.

Product: [what they left in their cart]
Price: [price point]
Audience: [customer profile]
Brand voice: [tone description]
Incentive available: [discount, free shipping, bonus - if any]

Email 1 (Send 1 hour after abandonment):
- Tone: Helpful, not pushy
- Approach: Gentle reminder + remove friction
- Include: Product image reference, one-click return to cart

Email 2 (Send 24 hours after):
- Tone: Value-reinforcing
- Approach: Highlight benefits, add social proof
- Include: Why this product is worth it, 1-2 review quotes

Email 3 (Send 48-72 hours after):
- Tone: Last chance, honest urgency
- Approach: Scarcity or incentive if available
- Include: Final reason to act, clear deadline if applicable

For each email:
- Subject line (+ 2 alternatives)
- Preview text
- Full email body (100-200 words - keep it short)
- CTA button text
- What makes this email different from the others`,
              result: 'A 3-email cart abandonment series with escalating urgency.',
              tip: 'Email 1 should feel like a helpful nudge, not a sales pitch. "Did you forget something?" works because it feels human.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Social Captions',
          prompts: [
            {
              id: 'cw-p-4-1',
              title: 'Platform-Specific Caption Writer',
              task: 'Write social media captions tailored to each platform',
              prompt: `Write social media captions for [product/topic/campaign] across platforms.

Context:
- What we're promoting: [details]
- Brand voice: [tone description]
- Key message: [what we want people to take away]
- CTA: [what we want them to do]
- Hashtag strategy: [brand hashtags, if any]

Write captions for:

Instagram (3 captions):
- Format: Hook in first line, short paragraphs, emoji usage [light/moderate/heavy], 5-10 hashtags
- Length: 150-300 characters for feed, shorter for Stories
- Style: Visual-first, lifestyle-oriented

Twitter/X (3 captions):
- Format: Under 280 characters, punchy, conversational
- Style: Witty, sharp, scroll-stopping

LinkedIn (3 captions):
- Format: Professional hook, 3-4 short paragraphs, no hashtag overload
- Length: 150-300 words
- Style: Insight-driven, credible, value-adding

TikTok (3 captions):
- Format: Under 150 characters, casual, trend-aware
- Style: Authentic, slightly irreverent, human

For each: write the caption, note the platform-specific reasoning, and suggest the best time to post.`,
              result: '12 platform-specific captions with strategic rationale.',
              tip: 'Don\'t just resize the same caption for each platform. Each platform has its own culture. A LinkedIn post that works on TikTok is a LinkedIn post that shouldn\'t exist.',
            },
            {
              id: 'cw-p-4-2',
              title: 'Social Content Calendar Copy',
              task: 'Write a week of social captions in advance',
              prompt: `Write a full week of social media captions for [brand/product].

Brand voice: [description]
Platform: [primary platform]
Content pillars: [e.g., educational, behind-the-scenes, product, community, entertaining]
Target audience: [who follows us]

Write 7 posts (one per day):
- Monday: [Educational/value post]
- Tuesday: [Product or service highlight]
- Wednesday: [Behind-the-scenes or culture]
- Thursday: [Customer story or social proof]
- Friday: [Engaging/fun - poll, question, or trend]
- Saturday: [Lifestyle or inspirational]
- Sunday: [Reflective or community-building]

For each post:
1. Caption text (platform-appropriate length)
2. Visual suggestion (what image/video to pair with it)
3. Best posting time
4. Engagement prompt (question or CTA to drive comments)
5. Hashtags (5-7 relevant ones)

Rules:
- Vary the hooks - don't start every post the same way
- Mix content types - not every post should sell
- Follow the 80/20 rule: 80% value, 20% promotion
- Sound human, not like a brand robot`,
              result: 'A full week of ready-to-post social content with visuals and scheduling recommendations.',
              tip: 'Batch your social content weekly. Write all 7 posts in one sitting while you\'re in the zone, then schedule them.',
            },
            {
              id: 'cw-p-4-3',
              title: 'Engagement Reply Templates',
              task: 'Create response templates for social media engagement',
              prompt: `Create response templates for common social media interactions for [brand name].

Brand voice: [description]
Platform: [primary platform]

Write templates for these scenarios:

Positive interactions (5 templates each):
1. Someone compliments the product
2. Someone shares a success story
3. Someone tags a friend ("you need this!")
4. Someone asks "is this worth it?"
5. An influencer mentions the brand

Negative interactions (5 templates each):
1. Product complaint or issue
2. Shipping/delivery frustration
3. Price objection ("too expensive")
4. Comparison to competitor ("X is better")
5. General negative comment or troll

Neutral/opportunity interactions (5 templates each):
1. General product question
2. "How does this work?" inquiry
3. Feature request or suggestion
4. Someone asking for a discount
5. Media or collaboration inquiry

Rules:
- Each template should sound natural, not scripted
- Include [brackets] for personalization
- Keep responses under 100 words
- Always move toward a positive outcome
- Never be defensive, even with negative comments`,
              result: 'A complete social media response playbook with templates for every common interaction.',
              tip: 'Adapt these templates for each interaction - never copy-paste without personalizing. The brackets are there for a reason.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Ad Copy',
          prompts: [
            {
              id: 'cw-p-5-1',
              title: 'Ad Copy Variation Generator',
              task: 'Generate ad copy variations that test different angles',
              prompt: `Write ad copy variations for [product/service].

Ad platform: [Google Ads / Meta / LinkedIn / TikTok / etc.]
Format: [search ad / feed ad / story ad / video script / etc.]

Product: [what it is]
Audience: [who we're targeting]
Key benefit: [main value proposition]
Offer: [pricing, discount, free trial, etc.]
Landing page: [where the ad leads]
Character limits: [platform-specific limits]

Generate 12 ad variations across these angles:
1. Benefit-led (3) - Lead with what they get
2. Problem-led (3) - Start with their pain point
3. Social proof (2) - Lead with results or credibility
4. Curiosity (2) - Make them click to learn more
5. Direct offer (2) - Lead with the deal

For each ad:
- Primary text / headline
- Description or body copy
- CTA text
- The psychological trigger it uses
- Why this angle might work for this audience

Then recommend:
- Which 3 to test first
- What performance metrics to watch for each angle`,
              result: '12 ad variations across 5 psychological angles with testing recommendations.',
              tip: 'Test one angle at a time against your control. The goal isn\'t finding one perfect ad - it\'s building a system that consistently finds winners.',
            },
            {
              id: 'cw-p-5-2',
              title: 'Google Ads Copy Writer',
              task: 'Write Google Ads with proper format and character limits',
              prompt: `Write Google Ads for [product/service/keyword].

Target keyword: [primary keyword]
Related keywords: [2-3 related terms]
Audience intent: [what they're looking for when they search this]
Landing page offer: [what they'll find]
Unique selling proposition: [why us over competitors]

Write 5 complete Google Ads:

For each ad:
- Headline 1 (30 characters max): [include keyword]
- Headline 2 (30 characters max): [benefit or differentiator]
- Headline 3 (30 characters max): [CTA or social proof]
- Description 1 (90 characters max): [expand on value proposition]
- Description 2 (90 characters max): [handle objection or add urgency]
- Display URL path: [2 path fields, 15 chars each]

Rules:
- Include the target keyword naturally in headline 1
- Each ad should test a different headline approach
- Descriptions should complement, not repeat, the headlines
- Use specific numbers where possible (%, $, days)
- Include a clear CTA in at least one headline
- Stay within exact character limits

Mark which ad you'd test first and why.`,
              result: '5 complete Google Ads with proper formatting and character limits.',
              tip: 'Headline 1 does the heaviest lifting. Make sure it matches search intent and includes the keyword naturally.',
            },
            {
              id: 'cw-p-5-3',
              title: 'AIDA Framework Ad Copy',
              task: 'Write ad copy using the AIDA framework',
              prompt: `Write ad copy using the AIDA framework for [product/service].

Product: [what it is]
Audience: [who]
Platform: [where this ad runs]
Tone: [brand voice]
Offer: [what they get]
Max length: [character or word limit]

Write 3 versions using AIDA:

For each version:
- Attention: [hook that stops the scroll - question, stat, bold claim, or story]
- Interest: [expand with relevant details, bridge to their problem]
- Desire: [paint the picture of life with your product, social proof, benefits]
- Action: [clear, specific CTA with urgency or incentive]

Version 1: Emotional angle (connect with feelings)
Version 2: Rational angle (connect with logic and data)
Version 3: Story angle (connect with narrative)

For each version:
- Full ad copy (assembled from the AIDA components)
- Why this angle fits the audience
- What to pair it with visually

Then rank the 3 versions for this specific audience and explain your reasoning.`,
              result: '3 AIDA-framework ad copies with different psychological approaches.',
              tip: 'AIDA isn\'t just a formula - it\'s the natural flow of persuasion. If you skip a step, the reader drops off. Attention without interest is clickbait. Desire without action is a brochure.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Revisions',
          prompts: [
            {
              id: 'cw-p-6-1',
              title: 'Tone Matcher',
              task: 'Match the tone of a reference piece',
              prompt: `Rewrite the following copy to match this reference tone.

Reference piece (the tone I want to match):
[Paste 2-3 paragraphs of the reference content]

Copy to rewrite:
[Paste the copy that needs a tone adjustment]

Instructions:
1. First, analyze the reference tone - describe it in 3-5 characteristics (e.g., sentence length, vocabulary level, formality, humor, rhythm)
2. Then rewrite the copy to match those characteristics exactly
3. Keep the original message and information intact
4. Highlight what you changed and why in a brief note

Provide 2 versions:
- Version A: Close match (subtle adjustments)
- Version B: Full rewrite in the reference tone (more dramatic shift)

What to watch for: [any specific brand rules or words to include/avoid]`,
              result: 'Two rewrites calibrated to match a specific tone reference.',
              tip: 'Always include a reference piece. "Make it sound like [brand]" is vague. "Make it sound like this specific paragraph" gives AI a concrete target.',
            },
            {
              id: 'cw-p-6-2',
              title: 'Feedback Interpreter',
              task: 'Interpret vague client feedback into actionable rewrites',
              prompt: `Help me interpret and act on this client feedback.

Original copy:
[Paste the copy you submitted]

Client feedback:
[Paste their exact feedback - e.g., "make it punchier," "this doesn't feel right," "can it be more premium?"]

Generate 3 different interpretations of what the client might mean:

Interpretation 1: [What this feedback could mean]
- Rewritten version based on this interpretation
- Brief note explaining the approach

Interpretation 2: [Alternative meaning]
- Rewritten version based on this interpretation
- Brief note explaining the approach

Interpretation 3: [Another possible meaning]
- Rewritten version based on this interpretation
- Brief note explaining the approach

Then write a short reply to the client presenting these options:
"Here are 3 directions based on your feedback. Let me know which feels closest to what you're looking for, and I'll refine from there."

This way, we close the revision loop in one round instead of three.`,
              result: '3 interpretation-based rewrites and a client-ready response.',
              tip: 'This prompt turns vague feedback into a productive conversation. Clients often don\'t know how to articulate what they want - showing them options is faster than asking them to clarify.',
            },
            {
              id: 'cw-p-6-3',
              title: 'Copy Tightener',
              task: 'Cut copy length without losing impact',
              prompt: `Tighten this copy by [25% / 50% / to X words] without losing the core message or emotional impact.

Original copy:
[Paste the copy that needs cutting]

Target: [specific word count or percentage reduction]
Must keep: [any specific lines, phrases, or points that cannot be cut]
Tone: [maintain current tone or adjust]

Provide:
1. Tightened version (at target length)
2. What you cut and why (brief notes for each major cut)
3. Alternative cuts - lines you could cut if I need it even shorter
4. One sentence you'd fight to keep (the strongest line in the piece)

Rules:
- Cut filler first (words that don't earn their spot)
- Combine sentences where possible
- Replace long phrases with short ones
- Kill adverbs and adjectives that don't add meaning
- Keep the opening hook and closing CTA strong
- Maintain the voice and rhythm`,
              result: 'A tightened version with transparent editing notes.',
              tip: 'Every word should earn its place. If you can cut a word and the sentence still works, cut it. "Very unique" is just "unique." "In order to" is just "to."',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here\'s what changes when you add AI to your copywriting workflow.',
      timeTable: [
        {
          task: 'Headline brainstorming',
          without: '30-60 min per project',
          withAI: '10 minutes',
          saved: '30+ min/project',
        },
        {
          task: 'Landing page first draft',
          without: '4-6 hours',
          withAI: '1-2 hours',
          saved: '3-4 hours',
        },
        {
          task: 'Email sequence (5-7 emails)',
          without: '1-2 days',
          withAI: '2-3 hours',
          saved: '5-10 hours',
        },
        {
          task: 'Social captions (15 posts)',
          without: '2-3 hours',
          withAI: '30 minutes',
          saved: '2+ hours',
        },
        {
          task: 'Ad copy variations (10+)',
          without: '2-3 hours',
          withAI: '30 minutes',
          saved: '2+ hours',
        },
        {
          task: 'Client revision rounds',
          without: '1-3 hours/round',
          withAI: '20 minutes',
          saved: '1-2 hrs/round',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/week',
      },
      sections: [
        {
          heading: 'The Copywriter\'s Edge',
          paragraphs: [
            'Copywriters who use AI don\'t produce worse work. They produce better work, faster, with more creative energy. The blank page problem disappears. Creative blocks become shorter. Revision cycles shrink from three rounds to one.',
            'This isn\'t about lowering the bar. It\'s about spending your creative energy where it matters - on the insight, the strategy, and the human truth that makes copy convert. Let AI handle the scaffolding.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a copywriter to stare at blank documents or write the 14th variation of the same headline. You became a copywriter because words can change how people think, feel, and act. AI removes the friction between your idea and the finished piece. It gives you back the space to do the work you actually love.',
          ],
        },
      ],
      keyInsight:
        'AI doesn\'t make you a faster writer. It makes you a faster editor. And great copywriters have always been great editors first.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your copywriting workflow. Each day builds on the last. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'cw-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'cw-1-2', label: 'Bookmark this guide and the Hemingway Editor' },
            { id: 'cw-1-3', label: 'Open a real project brief you\'re currently working on' },
          ],
        },
        {
          day: 2,
          title: 'Kill the Blank Page',
          duration: '15 min',
          items: [
            { id: 'cw-2-1', label: 'Take your current project and run the Headline Formula Generator prompt' },
            { id: 'cw-2-2', label: 'Pick your top 3 headlines and refine them manually' },
            { id: 'cw-2-3', label: 'Notice how much faster you started compared to staring at a blank page' },
          ],
        },
        {
          day: 3,
          title: 'Draft a Landing Page',
          duration: '30 min',
          items: [
            { id: 'cw-3-1', label: 'Run the Full Landing Page Draft prompt for a real project' },
            { id: 'cw-3-2', label: 'Edit section by section - tighten, sharpen, add your voice' },
            { id: 'cw-3-3', label: 'Run the final copy through Hemingway for readability' },
          ],
        },
        {
          day: 4,
          title: 'Write an Email Sequence',
          duration: '30 min',
          items: [
            { id: 'cw-4-1', label: 'Run the Full Email Nurture Sequence prompt' },
            { id: 'cw-4-2', label: 'Refine subject lines using the Subject Line Generator prompt' },
            { id: 'cw-4-3', label: 'Edit the sequence for voice, flow, and strategic progression' },
          ],
        },
        {
          day: 5,
          title: 'Tackle Social and Ads',
          duration: '20 min',
          items: [
            { id: 'cw-5-1', label: 'Run the Platform-Specific Caption Writer prompt' },
            { id: 'cw-5-2', label: 'Run the Ad Copy Variation Generator prompt' },
            { id: 'cw-5-3', label: 'Compare the outputs - edit the best ones for a real deliverable' },
          ],
        },
        {
          day: 6,
          title: 'Master Revisions',
          duration: '15 min',
          items: [
            { id: 'cw-6-1', label: 'Take a recent piece of client feedback you struggled with' },
            { id: 'cw-6-2', label: 'Run the Feedback Interpreter prompt to generate options' },
            { id: 'cw-6-3', label: 'Try the Tone Matcher prompt on a piece that needs voice adjustment' },
          ],
        },
        {
          day: 7,
          title: 'Build Your System',
          duration: '10 min',
          items: [
            { id: 'cw-7-1', label: 'Review which prompts saved you the most time this week' },
            { id: 'cw-7-2', label: 'Save your top 3-5 prompts with your brand/client context filled in' },
            { id: 'cw-7-3', label: 'Share this guide with a copywriter friend who fights the blank page' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
