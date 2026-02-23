import type { WorkbookData } from './types'

export const socialmediaData = {
  professionId: 'socialmedia',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Social Media Managers',
  heroDescription:
    'Everything you need to start using AI in social media management - with real tools, workflows, and prompts for content calendars, captions, analytics, and more.',

  chapters: {
    ch1: {
      paragraphs: [
        'It\'s 8am and you open your laptop to the familiar chaos. Instagram needs three posts this week. LinkedIn wants that thought leadership piece your CEO promised a draft for but never delivered. The TikTok trend you spotted yesterday is already fading. Twitter needs a response to a customer complaint that\'s starting to get attention. And someone in marketing just Slacked you: "Can we do something fun for National Pancake Day?"',
        'You open Canva to design a carousel, then remember the content calendar is empty for next week. You start filling it in, but get pulled into the comments section where someone left a negative review disguised as a question. You draft a response, check the brand voice guidelines, revise, and post. Twenty minutes gone on one comment.',
        'By lunch, you\'ve created one post, replied to a dozen comments, attended a "quick" meeting about an upcoming campaign, and started pulling last month\'s analytics. The analytics spreadsheet is half-done. The content calendar still has gaps. The carousel isn\'t finished. Your CEO asks: "Are we posting enough on LinkedIn?"',
        'You became a social media manager because you understand platforms, audiences, and what makes people stop scrolling. But most of your day is spent on production - writing captions, resizing graphics, pulling reports, and keeping up with a content machine that never stops demanding more.',
      ],
      highlight:
        'What if you could plan a month of content in an afternoon, write captions in minutes instead of hours, and spend your time on strategy instead of production?',
      closingParagraph:
        'Not generic AI-written posts that sound like a robot. Not auto-generated content that ignores your brand voice. Just fast, high-quality first drafts that give you a running start on everything.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to replace your understanding of what works on Instagram versus LinkedIn versus TikTok. It doesn\'t know your audience\'s inside jokes, their pain points, or why that meme format killed last week. It won\'t replace your eye for scroll-stopping visuals or your instinct for what\'s about to trend. And it\'s definitely not going to manage your community relationships for you.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the fastest content assistant you\'ve ever worked with. It has studied millions of social media posts across every platform. It understands hooks, formats, CTAs, and character limits. It writes first drafts in seconds and never complains about another round of revisions.',
            'Need a month of content ideas? AI generates 30 in two minutes. Need 5 caption variations for a single post? Done in 30 seconds. Need to turn a blog post into a LinkedIn carousel, a Twitter thread, and an Instagram caption? Three minutes. Need a weekly analytics summary written up? Just paste in the numbers.',
            'The pattern is simple: AI handles the production (first drafts, variations, reformatting, reports). You handle the strategy (what to post, when, why, and how it connects to the bigger picture).',
          ],
        },
        {
          heading: 'Why social media managers have a unique advantage',
          paragraphs: [
            'You live on these platforms every day. You know what performs, what flops, and what feels authentic. That editorial judgment is something AI doesn\'t have. When a marketer uses AI for social media, they might accept whatever comes out. When you use AI, you know exactly what to keep, what to cut, and what to rewrite.',
            'You\'re not being replaced. You\'re getting a production team in your pocket. The brands that win on social media in 2026 aren\'t the ones posting the most - they\'re the ones posting the smartest. AI lets you be strategic instead of just busy.',
          ],
        },
      ],
      keyInsight:
        'AI handles the production grind - drafting, reformatting, variations, reports. You handle what actually matters - strategy, voice, timing, and human connection.',
    },

    ch3: {
      intro: 'Five tools that cover the full social media workflow. Start with the first two and build from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your caption writer and idea generator',
          description:
            'Content ideas, captions, hashtag research, engagement reply drafts, content calendar planning, and rapid variations',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for everyday content creation',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form and strategy partner',
          description:
            'Content strategies, long-form LinkedIn posts, brand voice documentation, analytics interpretation, and nuanced writing',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for strategy and thoughtful content',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your visual content creator',
          description:
            'Social media graphics, carousels, story templates, video thumbnails, and brand-consistent visuals with AI design assistance',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Essential for visual content creation',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your trend research assistant',
          description:
            'Trend identification, competitor social analysis, industry news monitoring, and content research with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research and trend spotting',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your content operations hub',
          description:
            'Content calendars, campaign planning, asset tracking, approval workflows, and team collaboration with AI assistance',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Great for organizing your content pipeline',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing + Canva AI for visuals. That handles 80% of daily social media work. Add Perplexity for research and Notion AI for organization as you scale.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here\'s where they plug into your actual social media work. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Content Calendar Planning',
          before:
            'You sit down every week (or month, if you\'re lucky) with a blank spreadsheet. You brainstorm ideas, check what holidays are coming up, look at what competitors posted, and try to balance promotional posts with value posts. It takes half a day to plan a week. A full month? That\'s a weekend project.',
          after:
            'AI generates a full month of content ideas organized by theme, platform, and content type in 5 minutes. You review, swap out anything that doesn\'t fit, and have a complete calendar before lunch.',
          flow: [
            'Define your content pillars and posting frequency per platform',
            'Run the content calendar prompt with your brand context',
            'AI generates a full month of ideas with post types and themes',
            'Review and customize - swap, add, or remove ideas',
            'Drop into your scheduling tool and start creating',
          ],
          timeSaved: { without: '4-6 hours/month', withAI: '45-60 minutes' },
        },
        {
          id: 2,
          name: 'Caption and Copy Creation',
          before:
            'You write a caption. Delete it. Write it again. Check the character limit. Try a different hook. Look at what other brands did for inspiration. Write it a third time. Finally post something you\'re 60% happy with. Repeat 15-20 times per week.',
          after:
            'AI gives you 3-5 caption options per post in seconds. You pick the best one, add your brand flavor, and move on. What used to take 30 minutes per caption now takes 5.',
          flow: [
            'Define the post topic, platform, and goal (engagement, clicks, awareness)',
            'Run the caption prompt with your brand voice notes',
            'AI generates multiple caption options with hooks and CTAs',
            'Pick your favorite, edit for brand voice and authenticity',
            'Add hashtags and schedule',
          ],
          timeSaved: { without: '20-30 min per post', withAI: '5 minutes per post' },
        },
        {
          id: 3,
          name: 'Community Engagement Management',
          before:
            'You scroll through comments and DMs one by one. Each response requires thinking about brand voice, the situation, and whether the comment needs escalation. A viral post means 200+ comments to sort through. An unhappy customer in the comments requires a careful response. It\'s hours of reactive work every day.',
          after:
            'AI generates reply templates for common comment types. For sensitive situations, it drafts a response you can refine. You spend less time writing and more time connecting.',
          flow: [
            'Categorize incoming comments (praise, question, complaint, spam)',
            'Run the reply template prompt for each category',
            'AI generates on-brand responses for common scenarios',
            'Customize responses with personal touches',
            'Escalate complex issues with AI-drafted initial responses',
          ],
          timeSaved: { without: '1-2 hours/day', withAI: '20-30 minutes/day' },
        },
        {
          id: 4,
          name: 'Analytics and Reporting',
          before:
            'You pull numbers from each platform manually. Copy them into a spreadsheet. Make charts. Try to figure out what the numbers mean. Write up a summary. The weekly report takes 2 hours. The monthly report takes most of a day. By the time it\'s done, the insights are already stale.',
          after:
            'Paste your raw metrics into AI and get a formatted report with insights, trends, and recommendations in minutes. Focus on interpreting the data instead of compiling it.',
          flow: [
            'Export metrics from each platform (screenshots or CSV)',
            'Paste raw data into AI with your reporting template',
            'AI generates formatted report with key insights and trends',
            'Review insights and add strategic commentary',
            'Share report with stakeholders',
          ],
          timeSaved: { without: '3-5 hours/week', withAI: '30-45 minutes/week' },
        },
        {
          id: 5,
          name: 'Trend Monitoring and Newsjacking',
          before:
            'You check trending topics across 4-5 platforms every morning. Most trends aren\'t relevant. When one is, you need to move fast - brainstorm an angle, get approval, create the content, and post before the trend fades. By the time you\'ve gone through the approval chain, the moment has passed.',
          after:
            'AI helps you quickly assess trend relevance and generate content angles in real time. When a trend fits, you have a draft ready in minutes instead of hours.',
          flow: [
            'Use Perplexity to scan trending topics and industry news',
            'Run the trend analysis prompt to assess relevance and risk',
            'AI generates 3-5 content angles for relevant trends',
            'Pick the best angle and draft the post immediately',
            'Get fast approval with the pre-written draft and post',
          ],
          timeSaved: { without: '1-2 hours/day', withAI: '15-20 minutes/day' },
        },
        {
          id: 6,
          name: 'Cross-Platform Content Adaptation',
          before:
            'You write a LinkedIn post and then manually rewrite it for Instagram (shorter, more visual), Twitter (under the character limit), and TikTok (totally different format). Each adaptation takes 20-30 minutes. A single piece of content becomes 2 hours of reformatting work.',
          after:
            'AI adapts one piece of content across all platforms in one go. Each version respects platform norms, character limits, and audience expectations. You review and post.',
          flow: [
            'Create your core content piece on one platform',
            'Run the content repurposing prompt with platform targets',
            'AI generates platform-specific versions (LinkedIn, IG, Twitter, TikTok)',
            'Review each version for platform norms and brand voice',
            'Schedule across platforms',
          ],
          timeSaved: { without: '1-2 hours per piece', withAI: '10-15 minutes per piece' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Content Calendar Planning',
          prompts: [
            {
              id: 'sm-p-1-1',
              title: 'Monthly Content Calendar Generator',
              task: 'Generate a full month of content ideas organized by platform',
              prompt: `Create a monthly social media content calendar.

Brand: [brand name]
Industry: [industry]
Target audience: [who they are, what they care about]
Platforms: [Instagram, LinkedIn, Twitter, TikTok - list which ones]
Posting frequency: [how many posts per week per platform]
Content pillars: [list 3-5 themes, e.g., educational, behind-the-scenes, product, community, industry news]

Generate a 4-week content calendar that includes:
- Date and day of the week
- Platform
- Content pillar/theme
- Post type (carousel, single image, reel, story, text post, thread, video)
- Topic/idea (specific, not generic)
- Hook or caption concept (one sentence)

Rules:
- Mix content types throughout the week
- No more than 2 promotional posts per week
- Include 1-2 trend-reactive slots marked as "trending topic - fill day of"
- Balance educational, entertaining, and promotional content
- Note any relevant holidays, awareness days, or industry events

Format as a table I can paste into a spreadsheet or Notion.`,
              result:
                'A complete monthly calendar you can start executing immediately.',
              tip: 'Run this at the start of each month. Treat it as a starting point, not a final plan. Swap ideas as trends and priorities shift.',
            },
            {
              id: 'sm-p-1-2',
              title: 'Content Theme Week Planner',
              task: 'Plan a themed content week around a specific topic or campaign',
              prompt: `Plan a themed content week for social media.

Brand: [brand name]
Theme: [the campaign, topic, or event driving this week]
Goal: [awareness, engagement, conversions, community building]
Platforms: [which platforms]
Duration: [Mon-Fri or Mon-Sun]

For each day, provide:
- Platform(s)
- Post format (reel, carousel, story series, text post, live, etc.)
- Topic and angle
- Caption concept with hook
- Visual direction (what the image/video should show)
- CTA (what you want the audience to do)
- Hashtag suggestions (3-5 relevant ones)

Build a narrative arc across the week:
- Monday: introduce the theme
- Mid-week: deep dive and engagement
- End of week: wrap-up with strong CTA

Make it feel cohesive but not repetitive.`,
              result:
                'A complete themed week plan with daily content ready to produce.',
              tip: 'Themed weeks perform better than random posting because the audience builds context day over day. Use these for launches, campaigns, or awareness weeks.',
            },
            {
              id: 'sm-p-1-3',
              title: 'Content Idea Brainstorm',
              task: 'Generate 30 content ideas for a specific platform and niche',
              prompt: `Generate 30 social media content ideas.

Brand: [brand name]
Platform: [primary platform]
Niche/industry: [your space]
Audience: [who follows you and what they care about]
Brand voice: [describe in 3-5 words, e.g., "friendly, expert, slightly sarcastic"]
What's working well right now: [your recent top-performing content types or topics]

Give me 30 ideas organized as:
- 10 educational posts (teach something useful)
- 5 behind-the-scenes posts (humanize the brand)
- 5 engagement posts (questions, polls, debates)
- 5 trending/timely posts (current events, memes, cultural moments)
- 3 promotional posts (product/service without being salesy)
- 2 community spotlight posts (user-generated content, shoutouts)

For each idea:
- Specific topic (not generic)
- Suggested format (reel, carousel, single image, text, etc.)
- Hook (the first line or concept that grabs attention)`,
              result:
                'A bank of 30 ready-to-develop content ideas you can pull from anytime.',
              tip: 'Keep a running "content bank" in Notion. Every time you run this prompt, add the best ideas. You\'ll never face a blank calendar again.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Caption and Copy Creation',
          prompts: [
            {
              id: 'sm-p-2-1',
              title: 'Platform-Specific Caption Writer',
              task: 'Write captions optimized for a specific platform',
              prompt: `Write a social media caption for [platform].

Brand: [brand name]
Brand voice: [describe in 3-5 words]
Post topic: [what this post is about]
Post format: [carousel, single image, reel, text post, etc.]
Goal: [engagement, clicks, saves, shares, comments]
Key message: [the one thing people should take away]
CTA: [what you want them to do - comment, save, share, click link]

Write 3 caption variations:
1. Short and punchy (under 100 words)
2. Medium storytelling (150-200 words)
3. Long-form value (250-300 words)

For each caption:
- Start with a hook that stops the scroll (first line is everything)
- Break into short paragraphs or lines for readability
- Include the CTA naturally, not forcefully
- Suggest 5-10 relevant hashtags at the end
- Note ideal emoji placement (if brand-appropriate)

Platform rules to follow:
- Instagram: visual-first, hooks matter, use line breaks
- LinkedIn: professional but human, longer posts perform well
- Twitter/X: concise, conversational, thread-friendly
- TikTok: casual, trendy, caption supports the video`,
              result:
                'Three caption options at different lengths, ready to customize.',
              tip: 'The hook is 80% of the battle. If the first line doesn\'t stop the scroll, the rest doesn\'t matter. Test different hook styles and track what works.',
            },
            {
              id: 'sm-p-2-2',
              title: 'Carousel Script Writer',
              task: 'Write slide-by-slide copy for a social media carousel',
              prompt: `Write a carousel post for [platform - Instagram or LinkedIn].

Topic: [what you're teaching or sharing]
Target audience: [who this is for]
Number of slides: [7-10]
Brand voice: [describe]
Goal: [educate, drive saves, generate comments, drive traffic]

Write the copy for each slide:
- Slide 1: Hook slide - bold statement or question that makes them swipe
- Slides 2-8: One clear point per slide with supporting detail
- Slide 9: Summary or key takeaway
- Slide 10: CTA slide (follow, save, share, comment, click link)

Rules:
- Keep text per slide under 30 words (it needs to be readable on mobile)
- Each slide should make sense on its own but flow as a sequence
- Use simple language - no jargon unless your audience expects it
- Include a visual direction note for each slide (what the design should show)

Also provide:
- Caption to accompany the carousel
- 5-8 relevant hashtags`,
              result:
                'A complete carousel script with slide-by-slide copy and visual direction.',
              tip: 'The first and last slides matter most. Slide 1 decides if they swipe. The last slide decides if they act. Spend extra time on those two.',
            },
            {
              id: 'sm-p-2-3',
              title: 'Batch Caption Generator',
              task: 'Generate captions for a week of posts in one session',
              prompt: `Write captions for a full week of social media posts.

Brand: [brand name]
Platform: [primary platform]
Brand voice: [describe in 3-5 words]

Here are the 5-7 posts I need captions for:

Post 1: [topic, format, and goal]
Post 2: [topic, format, and goal]
Post 3: [topic, format, and goal]
Post 4: [topic, format, and goal]
Post 5: [topic, format, and goal]
Post 6: [topic, format, and goal]
Post 7: [topic, format, and goal]

For each post, write:
- A scroll-stopping hook (first line)
- Caption body (appropriate length for the platform)
- CTA
- 3-5 hashtags

Make each caption feel distinct. Avoid repetitive openers or structures across the week. Vary the tone: some posts should be informational, some conversational, some bold.`,
              result:
                'A full week of captions ready for review and scheduling.',
              tip: 'Batch writing is the single biggest time saver in social media. Write all captions in one focused session, then schedule them. You\'ll save hours compared to writing one at a time.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Community Engagement',
          prompts: [
            {
              id: 'sm-p-3-1',
              title: 'Reply Template Library',
              task: 'Create on-brand reply templates for common comment types',
              prompt: `Create a social media reply template library.

Brand: [brand name]
Brand voice: [describe - e.g., "warm, witty, helpful"]
Platform: [primary platform]
Industry: [your space]

Generate reply templates for these common scenarios:

Positive comments:
1. Generic praise ("Love this!" / "Great post!")
2. Specific compliment about product/service
3. Tagging a friend
4. Sharing a success story

Questions:
5. Product/service inquiry
6. Pricing question
7. "Where can I learn more?"
8. Technical or how-to question

Negative comments:
9. Legitimate complaint or bad experience
10. Vague negativity ("This sucks")
11. Competitor comparison ("X brand is better")
12. Misinformation about your brand

Engagement opportunities:
13. Industry-related question from a follower
14. User-generated content mention
15. Collaboration or partnership inquiry

For each: provide 2-3 response options at different tones (casual, professional, witty). Mark any scenarios that should be escalated to a manager or moved to DM.`,
              result:
                'A reusable reply library that keeps your community engagement fast and on-brand.',
              tip: 'Customize these for your specific brand. The templates save time, but the personalization is what builds real community.',
            },
            {
              id: 'sm-p-3-2',
              title: 'DM Response Scripts',
              task: 'Create scripts for common direct message scenarios',
              prompt: `Write direct message response scripts for social media.

Brand: [brand name]
Brand voice: [describe]
Primary product/service: [what you sell]
Common DM reasons: [list typical reasons people DM you]

Write DM scripts for:
1. First-time inquiry about your product/service
2. Pricing request
3. Customer complaint that came via DM
4. Influencer or collaboration pitch
5. Job inquiry
6. Thank you / positive feedback
7. Request for content feature or repost
8. Spam or irrelevant message (polite decline)

For each:
- Opening line (warm but efficient)
- Body (address their specific need)
- Next step or CTA (what they should do next)
- Escalation note (when to involve a team member)

Keep each under 100 words. DMs should feel like a conversation, not a corporate email. Include line breaks for readability.`,
              result:
                'A DM playbook that handles common conversations quickly and consistently.',
              tip: 'Speed matters in DMs. The faster you respond, the more likely the conversation converts. These scripts eliminate the "what do I say" delay.',
            },
            {
              id: 'sm-p-3-3',
              title: 'Engagement Conversation Starters',
              task: 'Generate proactive engagement comments for industry accounts',
              prompt: `Generate engagement comments I can leave on other accounts to grow my brand presence.

My brand: [brand name]
My niche: [industry/topic]
My brand voice: [describe]
Types of accounts I engage with: [industry leaders, complementary brands, potential customers, media]

Generate 20 thoughtful comments organized by:

For industry leader posts (5 comments):
- Add value or a unique perspective to their content
- Not "Great post!" but genuinely insightful

For potential customer posts (5 comments):
- Helpful without being salesy
- Shows expertise naturally

For complementary brand posts (5 comments):
- Builds relationship
- Shows genuine appreciation or adds to the conversation

For trending industry discussions (5 comments):
- Takes a clear stance
- Provides data or experience-backed perspective

Rules:
- Each comment between 20-50 words
- No emojis unless the brand voice calls for them
- Never pitch in comments
- Sound like a knowledgeable human, not a brand account`,
              result:
                'A library of engagement templates that build visibility and relationships authentically.',
              tip: 'Spending 15 minutes a day leaving thoughtful comments on strategic accounts often drives more growth than posting more content on your own feed.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Analytics and Reporting',
          prompts: [
            {
              id: 'sm-p-4-1',
              title: 'Weekly Performance Report',
              task: 'Generate a weekly social media performance summary',
              prompt: `Generate a weekly social media performance report.

Brand: [brand name]
Platforms: [list platforms]
Reporting period: [week dates]

Here are the raw metrics:

[Platform 1]:
- Posts published: [number]
- Total reach/impressions: [number]
- Engagement rate: [percentage]
- Top performing post: [describe]
- Follower change: [+/- number]

[Platform 2]:
- Posts published: [number]
- Total reach/impressions: [number]
- Engagement rate: [percentage]
- Top performing post: [describe]
- Follower change: [+/- number]

[Repeat for each platform]

Generate a report that includes:
1. Executive summary (3 sentences - what happened this week)
2. Platform-by-platform breakdown with highlights
3. Top performing content and why it worked
4. Lowest performing content and what to learn from it
5. Week-over-week trends (what's improving, what's declining)
6. 3 actionable recommendations for next week

Keep it concise and insight-driven. Numbers alone aren't useful - tell me what they mean.`,
              result:
                'A clear, insight-driven weekly report you can share with stakeholders.',
              tip: 'The most valuable part of a report isn\'t the numbers - it\'s the "so what." Always tie metrics to actions. What should change next week based on this data?',
            },
            {
              id: 'sm-p-4-2',
              title: 'Monthly Analytics Deep Dive',
              task: 'Create a comprehensive monthly analytics report with strategic insights',
              prompt: `Create a monthly social media analytics report.

Brand: [brand name]
Month: [month and year]
Goals this month: [list 2-3 objectives]
Key campaigns: [any specific campaigns or launches]

Monthly metrics by platform:
[Paste your monthly platform data - followers, reach, engagement, clicks, conversions]

Previous month metrics for comparison:
[Paste last month's data or key numbers]

Generate:
1. Executive summary (5 sentences max - the story of this month)
2. Goal tracking (how did we perform against each objective?)
3. Audience growth analysis (who is following, who is leaving, demographics)
4. Content performance ranking (top 5 and bottom 5 posts with analysis)
5. Engagement patterns (best posting times, best content types, best topics)
6. Campaign performance (if applicable)
7. Competitive benchmarking notes (how do our metrics compare to industry averages?)
8. Key wins and lessons learned
9. Strategic recommendations for next month (specific, actionable)
10. KPIs to track going forward

Format for executive audience - clean, visual-friendly, with clear sections.`,
              result:
                'A comprehensive monthly report that demonstrates social media ROI and guides next month\'s strategy.',
              tip: 'Run this on the first of every month. Over time, the pattern recognition becomes invaluable. Save every report to track quarter-over-quarter progress.',
            },
            {
              id: 'sm-p-4-3',
              title: 'Content Performance Analyzer',
              task: 'Analyze why specific posts performed well or poorly',
              prompt: `Analyze the performance of these social media posts.

Brand: [brand name]
Platform: [platform]

Top performing posts this period:
Post 1: [topic, format, caption summary, metrics - reach, engagement, saves, shares]
Post 2: [topic, format, caption summary, metrics]
Post 3: [topic, format, caption summary, metrics]

Worst performing posts this period:
Post 4: [topic, format, caption summary, metrics]
Post 5: [topic, format, caption summary, metrics]
Post 6: [topic, format, caption summary, metrics]

Analyze:
1. What the top performers have in common (topic, format, hook style, timing, etc.)
2. What the low performers have in common
3. Patterns in hook/opening lines (what style gets attention?)
4. Content format preferences (carousel vs reel vs static vs text)
5. Topic preferences (what does this audience actually want?)
6. CTA effectiveness (which calls-to-action drove action?)
7. Posting time/day patterns

Based on this analysis, give me:
- 5 specific content rules for this account going forward
- 3 content types to do more of
- 2 content types to stop or rethink
- Suggested A/B tests to run next month`,
              result:
                'An actionable content strategy based on what\'s actually working, not guesswork.',
              tip: 'Run this analysis every 2-4 weeks. Your audience\'s preferences shift over time. What worked in January may not work in March.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Trend Monitoring and Newsjacking',
          prompts: [
            {
              id: 'sm-p-5-1',
              title: 'Trend Relevance Analyzer',
              task: 'Assess whether a trending topic is worth posting about',
              prompt: `A topic is trending on social media. Help me decide if my brand should post about it.

The trend: [describe the trend, meme, or event]
Platform where it's trending: [platform]
My brand: [brand name, industry, target audience]
My brand voice: [describe]
Current brand campaigns or priorities: [anything important happening right now]

Analyze:
1. Relevance score (1-10): How naturally does this trend connect to my brand?
2. Risk assessment: Could participating in this trend backfire? (political, insensitive, off-brand)
3. Audience alignment: Would my audience expect or enjoy this from us?
4. Timing: Is the trend still rising, peaking, or already fading?
5. Competitor check: Are competitors posting about this? Is there still room to stand out?

If the verdict is "post about it," give me:
- 3 angle options (funny, educational, brand-connection)
- Draft caption for the best angle
- Suggested format and visual direction
- Ideal posting window

If the verdict is "skip it," explain why and suggest what to focus on instead.`,
              result:
                'A quick risk/reward analysis that prevents both missed opportunities and brand missteps.',
              tip: 'Not every trend is your trend. The brands that look cringey on social media are the ones that force relevance. If the connection isn\'t natural, skip it.',
            },
            {
              id: 'sm-p-5-2',
              title: 'Weekly Trend Analysis Brief',
              task: 'Summarize the week\'s social media trends and identify opportunities',
              prompt: `Create a weekly social media trend brief.

My brand: [brand name]
Industry: [your space]
Target audience: [who you speak to]
Platforms we're active on: [list]

Based on current awareness, analyze:

1. Top 5 trending topics/formats across social media this week
   - What it is
   - Why it's trending
   - Which platforms it's biggest on
   - Estimated staying power (flash trend vs lasting shift)

2. Industry-specific trends
   - What's being talked about in [your industry]
   - Key conversations or debates
   - Any competitor moves worth noting

3. Trending content formats
   - New formats or features gaining traction
   - Audio trends (sounds, music)
   - Visual trends (editing styles, templates)

4. Opportunities for my brand
   - 3 trends we could authentically participate in
   - Suggested angle for each
   - Priority ranking (which to act on first)

5. Risks to watch
   - Topics to avoid this week
   - Potential controversy or sensitivity

Keep it scannable. I need to read this in 5 minutes and know what to do.`,
              result:
                'A quick-read trend brief that keeps you informed and ready to act.',
              tip: 'Use Perplexity to gather the latest trends before running this prompt. The more current context you provide, the better the analysis.',
            },
            {
              id: 'sm-p-5-3',
              title: 'Newsjacking Content Draft',
              task: 'Create content that connects a news event to your brand',
              prompt: `Help me create a newsjacking post.

The news event: [what happened]
Why it matters to my audience: [the connection]
My brand: [name and what you do]
Platform: [where I want to post this]
My take or angle: [how this relates to our expertise or perspective]
Tone: [thoughtful, witty, bold, educational]

Write:
1. Version A: Quick reaction post (under 100 words, can post immediately)
2. Version B: Thoughtful take (200-300 words, adds value beyond the headline)
3. Version C: Educational angle (turns the news into a lesson for the audience)

For each version:
- Hook that connects the news to what my audience cares about
- Body that adds value (not just commenting on the news)
- CTA appropriate for the tone
- Hashtags and timing recommendation

Rules:
- Don't be exploitative or insensitive
- Add genuine value or perspective
- If this is sensitive news, note appropriate guardrails
- Make the brand connection feel natural, not forced`,
              result:
                'Three content options at different depths, ready to post when news breaks.',
              tip: 'Newsjacking has a short window. Speed matters, but so does taste. When in doubt, go with the educational angle - it\'s almost always safe and valuable.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Cross-Platform Content Adaptation',
          prompts: [
            {
              id: 'sm-p-6-1',
              title: 'Content Repurposing Plan',
              task: 'Turn one piece of content into posts for every platform',
              prompt: `Repurpose the following content for multiple platforms.

Original content: [paste the blog post, video script, podcast summary, newsletter, or long-form piece]
Original platform: [where this was first published]
Target platforms: Instagram, LinkedIn, Twitter/X, TikTok

For each platform, create:

Instagram:
- Carousel version (slide-by-slide copy, 7-10 slides)
- Single image caption
- Reel script (30-60 seconds)
- Story series (3-5 story frames)

LinkedIn:
- Long-form post (300-500 words)
- Short-form post (under 150 words)

Twitter/X:
- Single tweet (under 280 characters)
- Thread version (5-8 tweets)

TikTok:
- Video script (30-60 seconds, conversational)
- Caption

Rules:
- Each platform version should feel native, not copy-pasted
- Adapt the hook for each platform's audience behavior
- Respect character limits and format norms
- The core message stays the same; the packaging changes`,
              result:
                'One piece of content transformed into 10+ platform-specific posts.',
              tip: 'Start with your highest-performing content. If something killed on LinkedIn, the core idea will likely work on other platforms too - just repackaged.',
            },
            {
              id: 'sm-p-6-2',
              title: 'Platform-Specific Format Converter',
              task: 'Rewrite a post for a different platform',
              prompt: `Convert this social media post for a different platform.

Original post:
[Paste the full caption/copy]

Original platform: [where it was posted]
Target platform: [where you want to post it]

Convert it following these platform rules:

If converting to Instagram:
- Visual-first mindset (what image/video accompanies this?)
- Hook in the first line
- Use line breaks and short paragraphs
- Include relevant hashtags (10-15)
- CTA that drives saves or shares

If converting to LinkedIn:
- Professional but personal tone
- Longer format is fine (up to 3000 characters works well)
- Hook with a bold statement or surprising insight
- End with a question to drive comments

If converting to Twitter/X:
- Under 280 characters for single tweet, or convert to thread
- Punchy, quotable, shareable
- Remove all filler words

If converting to TikTok:
- Conversational, as if talking to a friend
- Convert to a speaking script (not written copy)
- Include visual cues and on-screen text suggestions
- Hook in the first 2 seconds

Give me 2 versions: one safe, one bold.`,
              result:
                'A platform-native version of your content that feels like it was created for that specific platform.',
              tip: 'The biggest mistake in cross-posting is copy-pasting with minor tweaks. Each platform has its own culture. This prompt forces a real adaptation.',
            },
            {
              id: 'sm-p-6-3',
              title: 'Blog to Social Content Splitter',
              task: 'Break a blog post or article into a week of social content',
              prompt: `Break this blog post into a week of social media content.

Blog post title: [title]
Blog post content: [paste full post or key sections]
Brand: [brand name]
Platforms: [which platforms to create for]
Brand voice: [describe]

From this one blog post, create:

Monday: Key takeaway post (the most shareable insight)
Tuesday: Behind-the-scenes angle (what inspired this post, the research process)
Wednesday: Data or stat highlight (pull one surprising number or fact)
Thursday: Carousel or thread (step-by-step breakdown of the main framework or advice)
Friday: Question or debate post (turn a point into a discussion)
Saturday: Quick tip or hack (the most actionable piece of advice in the post)
Sunday: Recap or CTA post (drive traffic back to the full blog post)

For each day provide:
- Platform
- Format
- Caption with hook
- Visual/design direction
- Hashtags

One blog post should never be just one social post. Break it apart and you have a full week.`,
              result:
                'Seven days of content from a single blog post, each with a unique angle.',
              tip: 'This is the highest-ROI content strategy there is. Every blog post, podcast, or video you create is a goldmine of social content. Stop creating from scratch when you can repurpose.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your time is actually worth as a social media manager.',
      timeTable: [
        {
          task: 'Content calendar planning',
          without: '4-6 hours/month',
          withAI: '45-60 minutes',
          saved: '4 hrs',
        },
        {
          task: 'Caption writing',
          without: '20-30 min per post',
          withAI: '5 minutes per post',
          saved: '5+ hrs/week',
        },
        {
          task: 'Community engagement',
          without: '1-2 hours/day',
          withAI: '20-30 minutes/day',
          saved: '5+ hrs/week',
        },
        {
          task: 'Analytics and reporting',
          without: '3-5 hours/week',
          withAI: '30-45 minutes',
          saved: '3.5 hrs',
        },
        {
          task: 'Trend monitoring',
          without: '1-2 hours/day',
          withAI: '15-20 minutes/day',
          saved: '5+ hrs/week',
        },
        {
          task: 'Cross-platform adaptation',
          without: '1-2 hours per piece',
          withAI: '10-15 minutes',
          saved: '1.5 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative monthly total',
        without: '-',
        withAI: '-',
        saved: '25-35 hrs/month',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Social media never stops. Platforms add features weekly. Audiences expect more content, more formats, more engagement. The managers who keep up aren\'t working harder - they\'re working smarter with tools that handle the production so they can focus on strategy.',
            'The gap isn\'t creativity or platform knowledge. It\'s bandwidth. AI gives you that bandwidth back.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a social media manager to write the same caption 15 different ways or pull numbers into spreadsheets every Friday. You got into this because you understand how people connect online. AI takes the busywork off your plate so you can do what you actually do best - build community, spot trends, and create content that resonates.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One batch of captions. See how much time you get back. Then expand.',
    },

    ch7: {
      intro:
        'Seven days to transform your social media workflow. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'sm-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'sm-1-2', label: 'Create a free Perplexity account for trend research' },
            { id: 'sm-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Plan Your Content Calendar',
          duration: '25 min',
          items: [
            {
              id: 'sm-2-1',
              label: 'Run the Monthly Content Calendar prompt with your real brand details',
            },
            {
              id: 'sm-2-2',
              label: 'Review the output and customize it for your brand voice',
            },
            {
              id: 'sm-2-3',
              label: 'Notice how long that would have taken manually',
            },
          ],
        },
        {
          day: 3,
          title: 'Batch Write Captions',
          duration: '20 min',
          items: [
            {
              id: 'sm-3-1',
              label: 'Use the Batch Caption Generator for your next 5-7 posts',
            },
            {
              id: 'sm-3-2',
              label: 'Edit each caption for brand voice and schedule them',
            },
          ],
        },
        {
          day: 4,
          title: 'Build Your Reply Library',
          duration: '20 min',
          items: [
            {
              id: 'sm-4-1',
              label: 'Run the Reply Template Library prompt for your brand',
            },
            {
              id: 'sm-4-2',
              label: 'Save the templates where your team can access them',
            },
          ],
        },
        {
          day: 5,
          title: 'Analyze Your Content',
          duration: '20 min',
          items: [
            {
              id: 'sm-5-1',
              label: 'Run the Weekly Performance Report with your real metrics',
            },
            {
              id: 'sm-5-2',
              label: 'Use the Content Performance Analyzer on your top and bottom posts',
            },
          ],
        },
        {
          day: 6,
          title: 'Repurpose and Expand',
          duration: '15 min',
          items: [
            {
              id: 'sm-6-1',
              label: 'Take your best recent post and run the Content Repurposing prompt',
            },
            {
              id: 'sm-6-2',
              label: 'Schedule the adapted versions across platforms',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Build Your Routine',
          duration: '10 min',
          items: [
            {
              id: 'sm-7-1',
              label: 'Which prompts saved you the most time this week?',
            },
            {
              id: 'sm-7-2',
              label: 'Build 2-3 of these systems into your weekly workflow',
            },
            {
              id: 'sm-7-3',
              label: 'Share this guide with a social media manager who needs it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
