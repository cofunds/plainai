import type { WorkbookData } from './types'

export const marketersData = {
  professionId: 'marketers',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Marketers',
  heroDescription:
    'Master AI-powered marketing - from ad copy and SEO to email campaigns and analytics. Real tools, real workflows, and copy-paste prompts you can use today.',

  chapters: {
    ch1: {
      paragraphs: [
        'You open your laptop and the dashboard is already screaming. Facebook ad CTR dropped 18% overnight. Three email sequences need A/B test variants by noon. The blog post your content calendar says is "due today" hasn\'t been outlined yet. Your SEO report shows two competitors outranking you on keywords you owned last quarter.',
        'You switch to Slack. The sales team wants new case study copy. The CEO forwarded a "quick idea" for a campaign that will take two weeks to execute. Your social media scheduler shows 12 empty slots this week. Meanwhile, your analytics platform has 47 unread alerts and you\'re not sure which ones actually matter.',
        'You started this career because you love the craft - the psychology of a great headline, the thrill of a campaign that converts, the art of telling a brand story. Instead, you spend most of your day copying data between tools, rewriting the same message for five channels, and staring at a blinking cursor hoping the next hook writes itself.',
      ],
      highlight:
        'What if AI handled the repetitive 70% so you could focus on the strategic 30% that actually moves the needle?',
      closingParagraph:
        'Not replacing your creativity. Not making your marketing generic. Just eliminating the grind between your idea and the finished output - so you can do more of the work that actually requires a human brain.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace marketers. Let\'s get that out of the way. It can\'t feel your brand voice. It doesn\'t understand the inside joke your audience loves. It won\'t pick up on the subtle cultural shift that makes a campaign land. Marketing is part science, part art, part gut - and AI only handles the science part.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as your always-on creative partner and data analyst rolled into one. It\'s the copywriter who never gets writer\'s block. The analyst who reads every report instantly. The assistant who can generate 10 ad variations while you\'re still on your first coffee.',
            'Need 5 subject line options for an email blast? Done in 10 seconds. Want to repurpose a blog post into a LinkedIn carousel, email teaser, and three tweets? 2 minutes. Need to analyze which campaign metrics actually matter for your quarterly review? AI will break it down faster than you can open the spreadsheet.',
            'The key is this: AI generates, you curate. It creates the raw material. You shape it with your marketing intuition, brand knowledge, and audience understanding. That combination is what makes it powerful.',
          ],
        },
      ],
      keyInsight:
        'Your marketing intuition + AI\'s speed = unfair advantage. You know your audience, your brand, your positioning. AI removes the 4 hours of grunt work between your strategy and the executed campaign.',
    },

    ch3: {
      intro: 'You don\'t need a MarTech stack of 30 tools. You need these five.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your copy and strategy engine',
          description:
            'Ad copy, email sequences, content strategy, brainstorming, campaign briefs - any text-based marketing task',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here',
          icon: 'chatgpt',
        },
        {
          name: 'Jasper',
          role: 'Your marketing-trained copywriter',
          description:
            'Purpose-built for marketing copy - ads, landing pages, product descriptions, email campaigns with brand voice controls',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for ad copy at scale',
          icon: 'jasper',
        },
        {
          name: 'Canva AI',
          role: 'Your design and visual content studio',
          description:
            'Social media graphics, ad creatives, presentations, infographics - with AI-powered design suggestions and text-to-image',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Makes you look like a designer',
          icon: 'canva',
        },
        {
          name: 'Semrush',
          role: 'Your SEO and competitive intelligence hub',
          description:
            'Keyword research, competitor analysis, content optimization, rank tracking, backlink audits',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Essential for SEO',
          icon: 'semrush',
        },
        {
          name: 'Perplexity',
          role: 'Your research and trend spotter',
          description:
            'Market research, trend analysis, audience insights, competitive research - all with cited sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research',
          icon: 'perplexity',
        },
      ],
      footer:
        'Start with ChatGPT + Perplexity for strategy and research. Add Canva AI for visuals. That covers 80% of daily marketing tasks.',
    },

    ch4: {
      intro:
        'Here\'s where AI plugs into your actual marketing workflows. Click each system to explore the before/after and exact steps.',
      systems: [
        {
          id: 1,
          name: 'Content Creation Pipeline',
          before:
            'You brainstorm topics in a scattered doc, spend an hour outlining each post, write a rough draft over two sessions, then rewrite it three times. One blog post takes 4-6 hours. Repurposing it for social? That\'s another hour per platform. Your content calendar is always behind.',
          after:
            'You feed AI your topic and target keyword. It generates an SEO-optimized outline in 60 seconds. You guide the draft, section by section, with your expertise and brand voice. Then AI repurposes the finished piece into LinkedIn posts, email teasers, tweet threads, and social snippets - all in one sitting.',
          flow: [
            'Choose your topic and target keyword',
            'AI generates SEO-optimized outline with headers',
            'Write or refine each section with AI assistance',
            'AI repurposes into 3-5 social posts and email teaser',
            'Review, add your voice, schedule across channels',
          ],
          timeSaved: { without: '4-6 hours/post', withAI: '60-90 minutes' },
        },
        {
          id: 2,
          name: 'SEO Optimization',
          before:
            'You manually research keywords across multiple tabs, guess at search intent, write meta descriptions as an afterthought, and hope your content ranks. Competitor keyword analysis takes half a day. You\'re always reactive, never proactive.',
          after:
            'AI analyzes your target keyword landscape, identifies gaps your competitors miss, suggests content clusters, writes optimized meta descriptions, and generates title tag variations - all before you write a single word of content.',
          flow: [
            'Enter your seed keyword or topic area',
            'AI generates keyword clusters with search volume and difficulty',
            'Identify content gaps vs competitors',
            'AI writes optimized meta titles and descriptions',
            'Generate internal linking suggestions for existing content',
          ],
          timeSaved: { without: '3-4 hours/keyword set', withAI: '30 minutes' },
        },
        {
          id: 3,
          name: 'Email Campaign Writing',
          before:
            'Every email sequence starts from scratch. You write a subject line, hate it, write three more, pick one, then spend an hour on body copy. A/B testing means doubling that work. A 5-email nurture sequence takes a full day.',
          after:
            'AI generates complete email sequences with multiple subject line options, personalized body copy, clear CTAs, and A/B variants - all in your brand voice. You review, tweak, and schedule. A full sequence in under an hour.',
          flow: [
            'Define the email goal, audience segment, and sequence length',
            'AI generates the full sequence with subject lines and body copy',
            'Review each email - adjust tone, add personal touches',
            'AI generates A/B test variants for subject lines and CTAs',
            'Load into your email platform and schedule',
          ],
          timeSaved: { without: '4-8 hours/sequence', withAI: '45-60 minutes' },
        },
        {
          id: 4,
          name: 'Social Media Management',
          before:
            'You stare at your content calendar and see 15 empty slots this week. You open LinkedIn, Instagram, and X in separate tabs and try to write posts that fit each platform. Two hours later, you have 4 mediocre posts and a headache.',
          after:
            'AI takes your core content - blog posts, product updates, customer wins, industry trends - and generates platform-specific posts for every channel. Captions, hashtags, hooks, and CTAs tailored for each audience. A full week of content in one session.',
          flow: [
            'List your content themes and key messages for the week',
            'AI generates platform-specific posts (LinkedIn, X, Instagram)',
            'Review and add your personal insights or brand voice tweaks',
            'AI suggests optimal posting times and hashtags',
            'Schedule across platforms using your scheduler tool',
          ],
          timeSaved: { without: '5-8 hours/week', withAI: '1-2 hours/week' },
        },
        {
          id: 5,
          name: 'Ad Copy Generation',
          before:
            'You need 10 ad variations for a Facebook campaign, 5 for Google Search, and 3 for LinkedIn. Each one needs a different hook, different CTA, and needs to stay under character limits. You spend a full day writing, second-guessing, and rewriting.',
          after:
            'AI generates ad copy by platform with correct character limits, multiple hooks, CTA variations, and audience-specific messaging. You pick the best ones, test them, and iterate based on performance data.',
          flow: [
            'Define your offer, target audience, and platform(s)',
            'AI generates 10+ ad variations per platform with hooks and CTAs',
            'Filter and select the strongest options',
            'AI creates matching landing page headline suggestions',
            'Launch, measure, feed performance data back to AI for iteration',
          ],
          timeSaved: { without: '4-6 hours/campaign', withAI: '45-60 minutes' },
        },
        {
          id: 6,
          name: 'Analytics and Reporting',
          before:
            'You export CSV files from three platforms, paste data into spreadsheets, build charts manually, and write up insights. Your monthly marketing report takes a full day. Half the time, stakeholders still ask "but what does this mean?"',
          after:
            'AI analyzes your campaign data, identifies patterns, surfaces the insights that matter, and generates executive-ready summaries with recommended actions. The report focuses on "so what" instead of just "what happened."',
          flow: [
            'Export your campaign metrics (or paste raw data)',
            'AI identifies trends, anomalies, and key takeaways',
            'Generate an executive summary with recommended next steps',
            'AI creates talking points for stakeholder presentations',
            'Build a repeatable reporting template for monthly use',
          ],
          timeSaved: { without: '4-6 hours/month', withAI: '45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'No prompt engineering degree needed. These are ready to copy, paste, and use. Click each to reveal the full prompt.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Content Creation',
          prompts: [
            {
              id: 'mk-p-1-1',
              title: 'Blog Post Outline Generator',
              task: 'Create an SEO-optimized blog outline from a topic',
              prompt: `I'm a marketer writing a blog post for [company/brand name] in the [industry] space.

Topic: [your topic]
Target keyword: [primary keyword]
Target audience: [who reads this]
Goal: [traffic / leads / education / thought leadership]

Create a detailed blog post outline with:
1. 5 compelling title options (include the target keyword naturally)
2. A hook intro paragraph that makes readers want to keep reading
3. 6-8 H2 sections with 2-3 bullet points each explaining what to cover
4. Suggested internal links: [list your related content if any]
5. A conclusion with a specific CTA
6. Meta description (under 155 characters)

Make it actionable and specific. Avoid fluff headers like "Introduction" or "Conclusion" - use descriptive ones that include relevant keywords.`,
              result:
                'A complete blog outline you can hand to any writer or use to guide your own draft.',
              tip: 'Paste this outline back into AI and ask it to draft each section one at a time for better quality.',
            },
            {
              id: 'mk-p-1-2',
              title: 'Content Repurposer',
              task: 'Turn one piece of content into multiple formats',
              prompt: `Take this blog post (or article) and repurpose it into multiple content pieces:

Original content:
[Paste your blog post or article]

Create:
1. A LinkedIn post (under 1300 characters) - strong hook, key insight, question at the end
2. A Twitter/X thread (5-7 tweets) - punchy, numbered, with a clear takeaway
3. An email newsletter teaser (3-4 short paragraphs with link CTA)
4. 3 Instagram caption options (conversational, with relevant hashtags)
5. A short-form video script (30-60 seconds) - hook, value, CTA

For each: match the tone to the platform. LinkedIn is professional insight. X is sharp and direct. Instagram is visual and relatable. The email should feel personal.`,
              result:
                'Five platform-ready content pieces from a single source - saving hours of rewriting.',
              tip: 'Save your best-performing repurposed pieces as templates for future content.',
            },
            {
              id: 'mk-p-1-3',
              title: 'Content Calendar Builder',
              task: 'Plan a month of content across channels',
              prompt: `Build a 4-week content calendar for [brand/company name].

Context:
- Industry: [your industry]
- Target audience: [who you're reaching]
- Content pillars: [3-4 themes you regularly cover]
- Channels: [blog, LinkedIn, email, Instagram, X - list yours]
- Publishing cadence: [e.g., 2 blogs/month, 3 LinkedIn posts/week, 1 email/week]

For each week, give me:
- Blog topic with target keyword
- 3-4 social media posts (topic + platform + hook)
- 1 email topic with subject line
- 1 content piece to repurpose from existing assets

Include a mix of: educational, promotional, engagement, and thought leadership content. Flag any seasonal or trending topics relevant to [industry] this month.`,
              result:
                'A complete month of content mapped out with topics, hooks, and keywords ready to execute.',
              tip: 'Update this monthly. Feed in your top-performing content from last month so AI can suggest more of what works.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - SEO Optimization',
          prompts: [
            {
              id: 'mk-p-2-1',
              title: 'Keyword Cluster Generator',
              task: 'Build keyword clusters around a seed topic',
              prompt: `I'm building an SEO content strategy around this seed topic: [your topic/keyword].

My website: [your domain]
My audience: [who you're targeting]
My competitors: [list 2-3 competitor domains]

Generate:
1. A primary keyword cluster (5-8 keywords) with estimated search intent for each (informational, transactional, navigational)
2. 3-4 related keyword clusters (supporting topics)
3. Long-tail keyword opportunities (5-10 phrases with lower competition)
4. Content gap analysis: topics my competitors likely rank for that I should cover
5. A suggested content hierarchy: which piece should be the pillar page and which should be supporting articles

For each keyword, indicate whether the intent is informational (blog), transactional (landing page), or comparison (vs. page).`,
              result:
                'A structured keyword map that guides your content strategy for the next quarter.',
              tip: 'Cross-reference this with Semrush data for search volume and difficulty scores.',
            },
            {
              id: 'mk-p-2-2',
              title: 'Meta Description Writer',
              task: 'Write compelling meta titles and descriptions',
              prompt: `Write SEO-optimized meta titles and descriptions for these pages:

Page 1: [URL or page topic]
Target keyword: [keyword]

Page 2: [URL or page topic]
Target keyword: [keyword]

Page 3: [URL or page topic]
Target keyword: [keyword]

For each page, give me:
- 3 meta title options (under 60 characters, keyword near the front)
- 2 meta description options (under 155 characters, include keyword, end with value prop or CTA)
- A suggested URL slug

Rules: No clickbait. No keyword stuffing. Each should read naturally and make someone want to click over the other search results.`,
              result:
                'Click-worthy meta tags that improve your search CTR without feeling spammy.',
              tip: 'Test different meta descriptions on your top-traffic pages first for maximum impact.',
            },
            {
              id: 'mk-p-2-3',
              title: 'On-Page SEO Audit',
              task: 'Audit a page for SEO improvements',
              prompt: `Audit this page content for SEO optimization:

Target keyword: [primary keyword]
Secondary keywords: [list 2-3]
Current page content:
[Paste the page content or body text]

Analyze and give me:
1. Keyword usage: Is the primary keyword in the title, first 100 words, H2s, and conclusion?
2. Content gaps: What subtopics or questions are missing that searchers expect?
3. Readability: Are paragraphs too long? Is the reading level appropriate for [audience]?
4. Header structure: Are H2s and H3s descriptive and keyword-relevant?
5. Internal linking opportunities: Suggest 3-5 anchor text phrases that could link to [list your key pages]
6. Specific rewrites: Give me improved versions of any weak headers or paragraphs.`,
              result:
                'A prioritized list of fixes to improve your page ranking and user experience.',
              tip: 'Run this on your top 10 pages by traffic - small improvements on high-traffic pages compound fast.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Email Campaigns',
          prompts: [
            {
              id: 'mk-p-3-1',
              title: 'Email Nurture Sequence',
              task: 'Write a complete email nurture sequence',
              prompt: `Write a [3/5/7]-email nurture sequence for [product/service name].

Context:
- Audience: [who are they - role, pain points, goals]
- Trigger: [what action puts them in this sequence - signup, download, webinar, etc.]
- Goal: [what you want them to do at the end - buy, book demo, upgrade, etc.]
- Brand voice: [professional / casual / bold / friendly - pick one]
- Key selling points: [list 3-4]

For each email, give me:
- Send timing (e.g., Day 0, Day 2, Day 5)
- 3 subject line options
- Preview text
- Full body copy (keep under 200 words per email)
- A clear, single CTA
- Brief note on the strategic purpose of this email in the sequence

Sequence arc: Start with value, build trust, introduce the offer, handle the top objection, close with urgency.`,
              result:
                'A complete email sequence ready to load into your email platform.',
              tip: 'Always A/B test the subject lines from email 1 before sending the rest of the sequence.',
            },
            {
              id: 'mk-p-3-2',
              title: 'Subject Line Generator',
              task: 'Generate high-performing email subject lines',
              prompt: `Generate 15 email subject lines for this campaign:

Email topic: [what the email is about]
Audience: [who is receiving it]
Goal: [open the email and do what?]
Tone: [urgent / curious / friendly / direct]

Give me:
- 5 curiosity-driven subject lines (open loops, questions)
- 5 value-driven subject lines (clear benefit upfront)
- 5 urgency or scarcity subject lines (time-sensitive, FOMO)

Rules:
- Keep under 50 characters where possible
- No ALL CAPS or excessive punctuation
- No spam trigger words (free, guarantee, act now)
- Include at least 2 with personalization tokens like [First Name]
- For each, rate it on a 1-5 scale for expected open rate and explain why`,
              result:
                'A diverse set of subject lines to A/B test across your campaigns.',
              tip: 'Subject lines with numbers and specific outcomes consistently outperform vague ones.',
            },
            {
              id: 'mk-p-3-3',
              title: 'Win-Back Email Campaign',
              task: 'Re-engage inactive subscribers',
              prompt: `Write a 3-email win-back sequence for inactive subscribers.

Context:
- Product/service: [what you sell]
- Inactive definition: [haven't opened in X days/months]
- Audience: [who they were when they signed up]
- Best offer you can make: [discount, free trial, exclusive content, etc.]

Email 1 (Day 0) - "We miss you" approach:
- Acknowledge the absence, remind them why they signed up
- Soft CTA: one piece of your best content

Email 2 (Day 3) - Value bomb:
- Share your best resource, result, or customer story
- Medium CTA: engage with content or reply

Email 3 (Day 7) - Final chance:
- Make your best offer
- Let them know you'll remove them from the list if no response
- Strong CTA: re-engage or unsubscribe

Keep each email under 150 words. Tone: genuine, not desperate.`,
              result:
                'A win-back sequence that recovers lost subscribers or cleans your list.',
              tip: 'Segment your inactive list by how they originally signed up for more personalized messaging.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Social Media',
          prompts: [
            {
              id: 'mk-p-4-1',
              title: 'LinkedIn Post Writer',
              task: 'Create a high-engagement LinkedIn post',
              prompt: `Write a LinkedIn post for [brand/personal brand] about this topic:

Topic or rough idea: [your idea - even one sentence is fine]
Audience: [who follows you / your target reader]
Goal: [engagement / leads / brand awareness / thought leadership]

Requirements:
- Hook in the first line that stops the scroll (pattern interrupt or bold statement)
- Short paragraphs (1-2 lines max)
- Include a specific example, data point, or mini-story
- Under 1300 characters
- End with a question that sparks comments
- Conversational tone - not corporate, not try-hard
- Add 3-5 relevant hashtags

Give me 2 versions:
Version A: Story-driven (personal experience angle)
Version B: Insight-driven (data or contrarian take angle)`,
              result:
                'Two LinkedIn post options ready to edit and publish.',
              tip: 'Posts with a personal story in the first 3 lines get 2-3x more engagement than generic advice.',
            },
            {
              id: 'mk-p-4-2',
              title: 'Social Media Caption Batch',
              task: 'Write a batch of social captions for the week',
              prompt: `Write a week of social media captions for [brand name].

Brand context:
- Industry: [your industry]
- Voice: [describe your brand voice in 3 words]
- This week's focus: [product launch / campaign / awareness / engagement]

Generate 5 posts for each platform:

LinkedIn (5 posts):
- Mix of: industry insight, behind-the-scenes, customer story, how-to tip, engagement question
- Professional but human. Under 1300 characters each.

X/Twitter (5 posts):
- Punchy, under 280 characters. Mix of hot takes, tips, and questions.

Instagram (5 posts):
- Visual-first captions. Include relevant emoji usage. 3-5 hashtags each. Mix of educational carousel ideas, stories prompts, and feed posts.

For each post include: the caption text, suggested visual/image description, and best posting time.`,
              result:
                'A full week of social content across three platforms.',
              tip: 'Batch-create content on Mondays. You will be more consistent when posts are pre-written.',
            },
            {
              id: 'mk-p-4-3',
              title: 'Viral Hook Generator',
              task: 'Generate scroll-stopping hooks for social posts',
              prompt: `Generate 20 scroll-stopping hooks for social media posts in the [industry] space.

My audience: [describe them - role, interests, pain points]
Topics I cover: [list 3-5 content themes]

Give me:
- 5 "contrarian take" hooks (challenge a common belief)
- 5 "curiosity gap" hooks (create an open loop)
- 5 "story opener" hooks (pull them into a narrative)
- 5 "data/result" hooks (lead with a specific number or outcome)

Rules:
- Each hook should be one sentence, under 15 words
- Must work on both LinkedIn and X
- No clickbait that doesn't deliver
- For each hook, add a one-line note on what the rest of the post could cover

Rate each on a 1-5 scale for scroll-stop potential.`,
              result:
                'A library of proven hook formats you can adapt for any content piece.',
              tip: 'Save your top-performing hooks in a swipe file. Patterns that work once usually work again.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Ad Copy',
          prompts: [
            {
              id: 'mk-p-5-1',
              title: 'Facebook/Meta Ad Copy',
              task: 'Generate Facebook ad variations',
              prompt: `Write Facebook/Meta ad copy for [product/service].

Campaign details:
- Offer: [what you're promoting]
- Target audience: [demographics, interests, pain points]
- Objective: [conversions / leads / traffic / awareness]
- Landing page: [describe what they'll see when they click]
- Budget tier: [testing / scaling]

Generate 10 ad variations:
- 3 with pain-point hooks (address the frustration)
- 3 with benefit-led hooks (promise the outcome)
- 2 with social proof hooks (results, testimonials, numbers)
- 2 with curiosity hooks (make them need to click)

For each ad include:
- Primary text (under 125 characters for mobile)
- Headline (under 40 characters)
- Description (under 30 characters)
- CTA button recommendation (Learn More, Sign Up, Shop Now, etc.)

Make every word earn its place. No filler.`,
              result:
                'A set of ad variations ready for split testing in Ads Manager.',
              tip: 'Start with 3-4 variations, let them run for 3-5 days, then kill the losers and iterate on the winners.',
            },
            {
              id: 'mk-p-5-2',
              title: 'Google Search Ad Copy',
              task: 'Write Google Search responsive ad copy',
              prompt: `Write Google Search responsive ad copy for this campaign:

Product/service: [what you're advertising]
Target keyword: [primary keyword]
Landing page URL: [URL]
Unique selling points: [list 3-4]
Competitor weaknesses: [what you do better]

Generate:
- 15 headline options (under 30 characters each)
  - Mix of: keyword-focused, benefit-focused, CTA-focused, and urgency-focused
- 4 description options (under 90 characters each)
  - Include the target keyword, a clear benefit, and a CTA
- 3 sitelink extension suggestions with descriptions
- 2 callout extension suggestions

Rules:
- Include the target keyword in at least 5 headlines
- No trademark issues (don't use competitor names in ads)
- Every headline should make sense standing alone
- Descriptions should work in any combination`,
              result:
                'Complete responsive search ad assets ready to upload to Google Ads.',
              tip: 'Pin your best-performing headline to Position 1 and your strongest CTA headline to Position 2 after initial testing.',
            },
            {
              id: 'mk-p-5-3',
              title: 'Ad Creative Brief',
              task: 'Create a creative brief for ad campaigns',
              prompt: `Create a creative brief for a [platform] ad campaign.

Brand: [your brand name]
Campaign name: [name or theme]
Objective: [what success looks like - specific metric]
Budget: [range]
Timeline: [start and end dates]
Target audience:
- Demographics: [age, location, role]
- Psychographics: [values, interests, fears]
- Current behavior: [what they do now instead of using your product]

Deliverables needed:
1. Campaign messaging hierarchy (primary message, supporting points, proof points)
2. 3 creative concept directions (each with a theme, visual direction, and sample headline)
3. Ad format recommendations for [platform] (sizes, types)
4. Copy guidelines (tone, words to use, words to avoid)
5. Success metrics and KPIs to track

Keep it to one page. This should be clear enough for a designer or media buyer to execute without a meeting.`,
              result:
                'A one-page creative brief that aligns your team before any ad gets made.',
              tip: 'Share this with your designer or agency before they start. It saves rounds of revisions.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Analytics & Reporting',
          prompts: [
            {
              id: 'mk-p-6-1',
              title: 'Campaign Performance Analysis',
              task: 'Analyze campaign metrics and extract insights',
              prompt: `Analyze these marketing campaign metrics and give me actionable insights:

Campaign: [campaign name]
Channel: [Facebook Ads / Google Ads / Email / etc.]
Time period: [dates]
Budget spent: [amount]

Metrics:
- Impressions: [number]
- Clicks: [number]
- CTR: [percentage]
- Conversions: [number]
- Conversion rate: [percentage]
- Cost per click: [amount]
- Cost per conversion: [amount]
- Revenue generated: [amount]
- ROAS: [ratio]

Give me:
1. Performance summary (is this good, bad, or average for [industry]?)
2. Top 3 things working well (with reasoning)
3. Top 3 areas for improvement (with specific recommendations)
4. Budget reallocation suggestion (where to shift spend)
5. 3 specific tests to run next based on this data
6. One-paragraph executive summary I can share with leadership`,
              result:
                'A clear performance breakdown with specific next steps instead of just numbers.',
              tip: 'Run this analysis weekly during active campaigns. Monthly for ongoing programs.',
            },
            {
              id: 'mk-p-6-2',
              title: 'Monthly Marketing Report',
              task: 'Generate a monthly marketing report',
              prompt: `Generate a monthly marketing report from these metrics:

Month: [month/year]
Overall budget: [amount spent]

Channel performance:
- Organic search: [sessions, conversions, top pages]
- Paid search: [spend, clicks, conversions, ROAS]
- Social media: [followers, engagement rate, top posts]
- Email: [sends, open rate, click rate, conversions]
- Content: [posts published, total views, top performer]

Key campaigns this month:
[List any specific campaigns with their results]

Compared to last month:
[Any notable changes]

Generate:
1. Executive summary (5 sentences max - what matters most)
2. Channel-by-channel breakdown with red/yellow/green status
3. Top 3 wins this month
4. Top 3 concerns or areas to watch
5. Recommended priorities for next month
6. One chart description: suggest the most impactful visualization of this data

Write for a non-marketing audience. No jargon. Focus on business impact.`,
              result:
                'An executive-ready marketing report that tells a story, not just reports numbers.',
              tip: 'Create a template with your actual KPIs once, then update the numbers monthly for consistency.',
            },
            {
              id: 'mk-p-6-3',
              title: 'Audience Persona from Data',
              task: 'Build audience personas from analytics data',
              prompt: `Build detailed audience personas from this marketing data:

Website analytics:
- Top traffic sources: [list]
- Most visited pages: [list]
- Average session duration: [time]
- Top geographic regions: [list]

Social media insights:
- Audience demographics: [age ranges, gender split]
- Top-performing content themes: [list]
- Peak engagement times: [list]

Customer data:
- Common job titles: [list]
- Company sizes: [list]
- Top reasons they buy: [list from surveys or sales calls]
- Top objections: [list]

Create 3 distinct buyer personas:
For each:
- Name, age, role, company type
- Daily challenges and goals
- How they discover brands like ours
- What content they engage with most
- Their buying journey (awareness to decision)
- The message that resonates most with them
- Channels where we're most likely to reach them

Make these feel like real people, not demographic profiles.`,
              result:
                'Three detailed personas that guide targeting, messaging, and content strategy.',
              tip: 'Post these where your team can see them. Every piece of content should be written for one specific persona.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what AI saves you in a typical marketing week.',
      timeTable: [
        {
          task: 'Content creation (blog + social)',
          without: '8-10 hours/week',
          withAI: '2-3 hours/week',
          saved: '6-7 hrs',
        },
        {
          task: 'SEO research and optimization',
          without: '3-4 hours/week',
          withAI: '30 minutes',
          saved: '3 hrs',
        },
        {
          task: 'Email campaign writing',
          without: '4-6 hours/sequence',
          withAI: '45 minutes',
          saved: '4 hrs',
        },
        {
          task: 'Social media captions',
          without: '5-8 hours/week',
          withAI: '1 hour/week',
          saved: '5 hrs',
        },
        {
          task: 'Ad copy variations',
          without: '4-6 hours/campaign',
          withAI: '45 minutes',
          saved: '4 hrs',
        },
        {
          task: 'Analytics and reporting',
          without: '4-6 hours/month',
          withAI: '45 minutes',
          saved: '4 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative weekly total',
        without: '-',
        withAI: '-',
        saved: '20-25 hrs/week',
      },
      sections: [
        {
          heading: 'The Marketer\'s Edge',
          paragraphs: [
            'In 2026, the gap between marketers using AI and those who don\'t is no longer theoretical. One writes 5 blog posts a week. The other struggles to publish 2 a month. One tests 20 ad variations. The other tests 3. The results compound every single week.',
            'Same creativity. Same marketing instinct. Just radically different output.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a marketer to spend 6 hours formatting a monthly report or writing the 14th variation of the same subject line. You became a marketer to understand people, craft messages that resonate, and build brands. AI gives you back the time to do that creative, strategic work.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. Master it this week. Add another next week. In a month, you will be operating at 3x speed.',
    },

    ch7: {
      intro:
        'Follow this plan day by day. Each step is small. By the end of the week, AI will be part of your marketing workflow.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'mk-1-1', label: 'Create a free ChatGPT account (or log in)' },
            { id: 'mk-1-2', label: 'Create a free Perplexity account' },
            { id: 'mk-1-3', label: 'Bookmark this guide for daily reference' },
          ],
        },
        {
          day: 2,
          title: 'Write Your First AI Content',
          duration: '20 min',
          items: [
            {
              id: 'mk-2-1',
              label: 'Run the Blog Post Outline prompt with a real topic',
            },
            {
              id: 'mk-2-2',
              label: 'Use the Content Repurposer to turn it into social posts',
            },
            {
              id: 'mk-2-3',
              label: 'Notice how long this would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Optimize Your SEO',
          duration: '20 min',
          items: [
            {
              id: 'mk-3-1',
              label: 'Run the Keyword Cluster prompt for your top topic',
            },
            {
              id: 'mk-3-2',
              label: 'Use the Meta Description Writer on your top 3 pages',
            },
          ],
        },
        {
          day: 4,
          title: 'Build an Email Sequence',
          duration: '25 min',
          items: [
            {
              id: 'mk-4-1',
              label: 'Run the Email Nurture Sequence prompt for a real campaign',
            },
            {
              id: 'mk-4-2',
              label: 'Generate subject line A/B test variants',
            },
            {
              id: 'mk-4-3',
              label: 'Load the sequence into your email platform',
            },
          ],
        },
        {
          day: 5,
          title: 'Batch Your Social Content',
          duration: '25 min',
          items: [
            {
              id: 'mk-5-1',
              label: 'Run the Social Media Caption Batch for next week',
            },
            {
              id: 'mk-5-2',
              label: 'Use the Viral Hook Generator for 20 hooks',
            },
            {
              id: 'mk-5-3',
              label: 'Schedule your best posts for the week',
            },
          ],
        },
        {
          day: 6,
          title: 'Create Ad Copy',
          duration: '20 min',
          items: [
            {
              id: 'mk-6-1',
              label: 'Run the Facebook Ad Copy prompt for a current campaign',
            },
            {
              id: 'mk-6-2',
              label: 'Try the Google Search Ad prompt if you run search ads',
            },
            {
              id: 'mk-6-3',
              label: 'Pick your top variations and launch a test',
            },
          ],
        },
        {
          day: 7,
          title: 'Analyze and Plan Ahead',
          duration: '15 min',
          items: [
            {
              id: 'mk-7-1',
              label: 'Run the Campaign Performance Analysis on recent data',
            },
            {
              id: 'mk-7-2',
              label: 'Use the Content Calendar Builder to plan next month',
            },
            {
              id: 'mk-7-3',
              label: 'Identify which AI system saved you the most time this week',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
