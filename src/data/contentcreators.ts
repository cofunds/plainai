import type { WorkbookData } from './types'

export const contentcreatorsData = {
  professionId: 'contentcreators',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Content Creators & YouTubers',
  heroDescription:
    'Everything you need to start using AI in content creation - with real tools, workflows, and prompts for video scripts, thumbnails, SEO, sponsorships, and more.',

  chapters: {
    ch1: {
      paragraphs: [
        'You sit down to write a video script and two hours later you have a half-finished Google Doc, three abandoned hooks, and a growing suspicion that the topic isn\'t interesting enough. You switch to thumbnail ideas, sketch two concepts that look like everything else in your niche, and go back to the script. The title still doesn\'t feel right. Nothing feels clickable.',
        'Filming is the easy part. You hit record, nail the content, and feel great about it. Then post-production starts. Editing takes 4-6 hours. You need a title, a description, tags, a thumbnail, end screens, and cards. The video goes live and you check analytics every 30 minutes for the first day. The click-through rate is lower than you hoped.',
        'Meanwhile, you need to be active on three other platforms. The Instagram version of the video needs a different format. The Twitter thread needs to distill the video into 5 tweets. The newsletter subscribers expect a weekly email. A brand reached out about a sponsorship but you don\'t have a media kit or a pitch template. Your community is asking for more interaction. Your Patreon supporters want bonus content.',
        'You became a content creator because you love making things, teaching people, or entertaining an audience. But the business of content creation - the scripting, SEO, promotion, brand deals, and cross-platform management - eats up more time than the creative work itself.',
      ],
      highlight:
        'What if every video started with a strong script draft, an optimized title, and a promotion plan - before you even hit record?',
      closingParagraph:
        'Not cookie-cutter scripts that sound like every other YouTuber. Not clickbait titles that over-promise. Just solid first drafts and smart systems that handle the business side, so you can spend your energy on the creative work that got you into this.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to make your content interesting. It won\'t give you a unique perspective, an authentic personality, or the ability to connect with an audience. It can\'t replicate your on-camera energy, your editing style, or the creative instinct that tells you when a video just works. And it\'s not going to build a loyal audience for you - that still requires showing up, being real, and delivering value consistently.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient production assistant in the world. It\'s read millions of video scripts, blog posts, titles, descriptions, and social captions. It knows the patterns of what gets clicks, what drives engagement, and what structures work for different content formats.',
            'Need a script outline for a 10-minute video? AI structures it with a hook, setup, payoff, and CTA in 2 minutes. Need 20 title options? Done in 30 seconds. Need to turn one video into 5 pieces of content for other platforms? 5 minutes. Need a sponsorship pitch tailored to a specific brand? 3 minutes.',
            'The model is clear: AI does the production and business work. You do the creative work. AI writes the first draft. You make it yours. AI generates the titles. You pick the winner. AI structures the brand pitch. You add the personal touch.',
          ],
        },
        {
          heading: 'Why content creators have a unique advantage',
          paragraphs: [
            'You already know what good content looks like. You\'ve watched thousands of videos, studied what works, and developed an instinct for hooks, pacing, and storytelling. When you use AI, you\'re not starting from zero - you\'re using it as a brainstorming partner that can match your speed of thinking.',
            'The creators who grow fastest in 2026 aren\'t the ones with the best cameras or the most editing skills. They\'re the ones who use AI to handle the business of content - scripting, SEO, promotion, brand deals - so they can spend more time on the creative work that actually builds an audience.',
          ],
        },
      ],
      keyInsight:
        'AI handles the 60% of content creation that isn\'t creative - scripting, SEO, promotion, admin. You focus on the 40% that is - your ideas, your voice, your personality, your connection with the audience.',
    },

    ch3: {
      intro: 'Five tools that cover the full content creation workflow. Start with the first two and add the rest as you grow.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your scripting and brainstorming partner',
          description:
            'Video scripts, title brainstorming, content ideas, sponsorship pitches, and rapid iteration on creative concepts',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for scripts and ideas',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form and strategy partner',
          description:
            'In-depth scripts, content strategy, brand deal negotiations, long-form writing, newsletter drafts, and nuanced creative feedback',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for long-form scripts and strategy',
          icon: 'claude',
        },
        {
          name: 'Canva AI',
          role: 'Your thumbnail and design tool',
          description:
            'Thumbnail creation, social media graphics, brand kit consistency, presentation slides, and visual content for all platforms',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Essential for thumbnails and visual content',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your research and trend assistant',
          description:
            'Topic research, fact-checking, trend identification, competitor analysis, and SEO keyword research with sources',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for research and staying current',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your content operations hub',
          description:
            'Content calendar, video production tracker, sponsorship pipeline, idea bank, and publishing workflow management',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Great for organizing your creator business',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for scripting + Canva AI for thumbnails. That covers 80% of what you need. Add Perplexity for research and Notion AI for organization when you\'re ready to systemize.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here\'s where they plug into your actual content creation workflow. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Video Script Writing',
          before:
            'You stare at a blank document for 30 minutes. You write a hook, delete it, write another one, delete it. Two hours later, you have a rough script that still needs work. Sometimes you just wing it on camera, which means 3x more editing to cut the rambling.',
          after:
            'AI generates a structured script with a hook, key points, transitions, and CTA in 3 minutes. You read it, adjust for your voice and delivery style, and have a production-ready script in 20 minutes. Every video starts strong.',
          flow: [
            'Define the topic, angle, and target audience',
            'Run the script prompt with your content style notes',
            'AI generates a structured script with hook and payoff',
            'Review, add your personality, and adjust for on-camera delivery',
            'Film with confidence using the polished script',
          ],
          timeSaved: { without: '2-4 hours', withAI: '20-30 minutes' },
        },
        {
          id: 2,
          name: 'Thumbnail and Title Optimization',
          before:
            'You brainstorm title ideas while designing thumbnails in Canva. Nothing feels clickable enough. You A/B test in your head, ask friends, and eventually pick one that\'s "good enough." Your click-through rate stays at 4-5% and you\'re not sure why.',
          after:
            'AI generates 20 title options using proven click patterns. It describes thumbnail concepts designed to create curiosity and contrast. You go from "good enough" to strategically optimized with data-informed choices.',
          flow: [
            'Summarize the video topic and key value proposition',
            'AI generates 20 title options across different styles',
            'AI describes 5 thumbnail concepts with visual direction',
            'Pick the strongest title-thumbnail combination',
            'Design in Canva AI and publish',
          ],
          timeSaved: { without: '1-2 hours', withAI: '15-20 minutes' },
        },
        {
          id: 3,
          name: 'SEO and Discoverability',
          before:
            'You write a description, add some tags you think work, and hope the algorithm picks it up. Keyword research means Googling "best keywords for YouTube" and guessing. Your search traffic is a fraction of what it could be because optimization is an afterthought.',
          after:
            'AI researches keywords, writes SEO-optimized descriptions, generates tag lists, and suggests search-friendly titles. Your videos start appearing in search results and suggested feeds because the metadata actually works.',
          flow: [
            'Define the video topic and target search terms',
            'AI researches keywords and search intent',
            'AI writes an SEO-optimized title, description, and tags',
            'Review and adjust for accuracy and brand voice',
            'Publish with optimized metadata from day one',
          ],
          timeSaved: { without: '30-60 minutes', withAI: '10 minutes' },
        },
        {
          id: 4,
          name: 'Community Engagement',
          before:
            'You scroll through comments, trying to reply to as many as possible. You want to build community but you\'re torn between spending time on replies and spending time on the next video. DMs pile up. Community posts feel like another content channel to feed.',
          after:
            'AI drafts reply templates for common comment types, generates community post ideas, and helps you respond thoughtfully without spending hours in the comments section. Engagement becomes a system, not a time sink.',
          flow: [
            'Categorize comment types (praise, question, feedback, troll)',
            'Run the engagement template prompt for each category',
            'AI generates on-brand reply options',
            'Customize and post - personal touch on top of AI efficiency',
            'Use AI to generate community post ideas weekly',
          ],
          timeSaved: { without: '1-2 hours/day', withAI: '20-30 minutes/day' },
        },
        {
          id: 5,
          name: 'Sponsorship and Monetization',
          before:
            'A brand emails asking about rates. You don\'t have a media kit. You\'re not sure what to charge. You write a pitch that either undervalues your work or sounds too corporate. The negotiation goes back and forth for a week. Sometimes the deal falls through because the process was too slow or unclear.',
          after:
            'AI generates a professional media kit, tailored sponsorship pitches, and rate cards based on your metrics. When a brand reaches out, you respond in minutes with a polished proposal instead of scrambling for days.',
          flow: [
            'Input your channel metrics, audience demographics, and content niche',
            'AI generates a media kit and rate card',
            'When a brand inquiry comes in, run the sponsorship pitch prompt',
            'AI creates a tailored proposal for that specific brand',
            'Review, personalize, and send',
          ],
          timeSaved: { without: '3-5 hours per deal', withAI: '30-45 minutes' },
        },
        {
          id: 6,
          name: 'Content Repurposing',
          before:
            'You publish a video and move on to the next one. Maybe you clip one moment for Instagram. The blog post never gets written. The newsletter is sporadic. The Twitter thread is a quick summary that doesn\'t do the video justice. You\'re leaving 80% of the content\'s value on the table.',
          after:
            'AI takes one video and generates a blog post, newsletter draft, social posts for every platform, and a content repurposing plan. One video becomes 10+ pieces of content with 15 minutes of review time.',
          flow: [
            'Paste the video script or transcript',
            'Run the content repurposing prompt',
            'AI generates blog post, newsletter, social posts, and thread',
            'Review and customize each piece for its platform',
            'Schedule across platforms for maximum reach',
          ],
          timeSaved: { without: '3-5 hours (or never)', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Video Script Writing',
          prompts: [
            {
              id: 'cc-p-1-1',
              title: 'Video Script with Hook',
              task: 'Write a complete video script with a compelling hook',
              prompt: `Write a YouTube video script.

Channel: [your channel name]
Niche: [your content area]
Target audience: [who watches your videos]
Video topic: [what this video is about]
Video length target: [8 min, 10 min, 15 min, 20 min]
Content style: [educational, entertaining, storytelling, tutorial, commentary]
Tone: [casual, energetic, thoughtful, authoritative, funny]

Write a complete script that includes:

1. Hook (first 15-30 seconds)
   - 3 hook options to choose from:
     A) Bold statement that challenges conventional wisdom
     B) Question that creates immediate curiosity
     C) Story opening that pulls the viewer in
   - Pattern interrupt (something unexpected)
   - Preview of the value ("By the end of this video, you'll...")

2. Setup (30-60 seconds)
   - Why this topic matters right now
   - What the viewer will gain
   - Brief credibility establishment (why you can speak to this)

3. Main content (organized into clear sections)
   - 3-5 key points with natural transitions
   - For each point: the insight, an example or story, and the takeaway
   - Built-in moments for B-roll or visual cues [note in brackets]
   - Engagement hooks every 2-3 minutes (questions, challenges, "here's where it gets interesting")

4. Payoff / climax
   - The biggest insight or transformation
   - The "aha moment" the viewer has been building toward

5. CTA (final 30 seconds)
   - Specific action (not just "subscribe")
   - Link to the next logical video
   - Reason to engage (comment prompt)

Include [VISUAL] notes for B-roll, graphics, or on-screen text.
Write in spoken language, not written language. It should sound natural when read aloud.`,
              result:
                'A complete, structured video script ready for filming.',
              tip: 'Read the script out loud before filming. If any sentence feels awkward to say, rewrite it. Written language and spoken language are different. The script should sound like you talking, not reading.',
            },
            {
              id: 'cc-p-1-2',
              title: 'Hook and Intro Generator',
              task: 'Generate multiple hook options for a video opening',
              prompt: `Generate hook and intro options for a YouTube video.

Video topic: [what the video is about]
Target audience: [who watches]
Video style: [educational, entertaining, tutorial, commentary]
The key value: [what the viewer gets from watching]
A surprising fact or stat related to the topic: [if you have one]

Generate 10 hook options across these styles:

Bold statement hooks (3):
- Challenge what the viewer assumes
- Make a claim they want to verify by watching

Question hooks (3):
- Create a knowledge gap the viewer wants to fill
- Ask something they've wondered but never found a good answer to

Story hooks (2):
- Start with a personal experience or someone else's
- Drop the viewer into a moment, not a summary

Contrarian hooks (2):
- Go against popular advice or common belief
- "Everyone says X, but here's why that's wrong"

For each hook:
- The exact words (15-30 seconds of speaking)
- Why it works psychologically
- The setup line that follows (the bridge to the main content)

Also write:
- A "pattern interrupt" moment for the first 5 seconds (something visual or unexpected)
- The subscriber CTA placement recommendation (when in the video to ask)`,
              result:
                'Ten hook options you can test and refine for maximum retention.',
              tip: 'Your hook determines your average view duration more than any other part of the video. Spend disproportionate time here. Film 2-3 versions and pick the best one in editing.',
            },
            {
              id: 'cc-p-1-3',
              title: 'Script Outline from Rough Ideas',
              task: 'Turn rough notes and ideas into a structured video outline',
              prompt: `Turn my rough ideas into a structured video outline.

My channel: [channel name, niche]
Audience: [who watches]
Video length target: [minutes]

Here are my rough notes, bullet points, or brain dump for this video:
[Paste your messy notes, voice memo transcript, or scattered ideas]

From this, create:

1. Core thesis (the one sentence this video proves or teaches)

2. Structured outline:
   - Hook concept (based on the most interesting part of the notes)
   - 3-5 main sections with clear headings
   - Key points under each section (organized logically)
   - Transitions between sections
   - Stories or examples to include
   - The climax or biggest revelation

3. What to cut
   - Ideas from my notes that are off-topic or weaken the video
   - Tangents that could be their own video instead

4. What's missing
   - Points I should include but didn't mention
   - A story, example, or data point that would strengthen the argument

5. Pacing notes
   - Where the energy should be high vs reflective
   - Where to add B-roll or visual breaks
   - Estimated timing for each section

6. Video title suggestions (5 options based on the strongest angle)

Don't rewrite my notes into a script. Organize them into a filmable structure.`,
              result:
                'A clean outline built from your messy ideas, ready to expand into a full script or film from directly.',
              tip: 'Some of the best videos come from scattered ideas that just need structure. Don\'t wait for a perfect concept. Brain dump everything and let AI organize it.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Thumbnail and Title Optimization',
          prompts: [
            {
              id: 'cc-p-2-1',
              title: 'Thumbnail Concept Descriptions',
              task: 'Generate thumbnail concepts with visual direction',
              prompt: `Generate thumbnail concepts for a YouTube video.

Video topic: [what the video is about]
Video title: [the title or top title options]
Channel niche: [your content area]
Current thumbnail style: [describe your typical look - colors, faces, text, etc.]
Target audience: [who clicks on your videos]

Generate 5 thumbnail concepts:

For each concept:
1. Visual description (what the thumbnail shows)
   - Main subject/image
   - Background
   - Color palette
   - Expression/emotion (if face is included)

2. Text overlay (if any)
   - 2-4 words maximum
   - Font style suggestion
   - Placement

3. Emotional trigger
   - What feeling this thumbnail creates (curiosity, shock, urgency, aspiration)
   - Why someone scrolling would stop and click

4. Contrast strategy
   - How this stands out from similar videos in the niche
   - What makes it different from your last 5 thumbnails

5. A/B test suggestion
   - One element to test changing (text, expression, color, composition)

Thumbnail rules:
- Must be readable at mobile size (small screen)
- Maximum 4 words of text
- High contrast colors
- Clear focal point
- Tells a micro-story with the title

Rank the 5 concepts by expected click-through rate.`,
              result:
                'Five distinct thumbnail concepts with clear visual direction for design.',
              tip: 'Design all 5 and show them to 3-5 people at phone-screen size. Ask "Which would you click?" The winner is rarely the one you expect.',
            },
            {
              id: 'cc-p-2-2',
              title: 'Title Optimization Generator',
              task: 'Generate keyword-optimized, click-worthy video titles',
              prompt: `Generate optimized video titles.

Video topic: [what the video covers]
Key value: [what the viewer gets]
Target keyword: [primary search term you want to rank for]
Channel niche: [your space]
Audience: [who watches]
Video style: [tutorial, commentary, storytime, listicle, essay]

Generate 20 title options organized by style:

Curiosity-driven (5):
- Create a gap the viewer needs to fill
- "I Tried X for 30 Days" / "What Happens When..." format

Benefit-driven (5):
- Lead with what the viewer gets
- "How to X (Without Y)" / "The X Method for Y" format

Number/Listicle (3):
- "7 Ways to..." / "5 Mistakes That..." format
- Specific numbers perform better than round numbers

Emotional (3):
- "Why I Quit..." / "The Truth About..." / "Nobody Talks About This"
- Strong feeling words

SEO-optimized (4):
- Front-load the target keyword
- Match search intent exactly
- "X Tutorial for Beginners" / "How to X - Complete Guide" format

For each title:
- Character count (aim for 50-60)
- Target keyword placement
- Estimated search intent match (informational, navigational, transactional)
- Thumbnail pairing suggestion (what thumbnail style works with this title)

Flag the top 3 titles overall.`,
              result:
                'Twenty strategically varied titles optimized for clicks and search.',
              tip: 'The best title-thumbnail combinations create curiosity together that neither creates alone. Always evaluate them as a pair, not separately.',
            },
            {
              id: 'cc-p-2-3',
              title: 'Title A/B Testing Framework',
              task: 'Create a testing framework for optimizing titles over time',
              prompt: `Create a title testing framework for my YouTube channel.

Channel: [name and niche]
Typical views: [average views per video]
Typical CTR: [click-through rate percentage]
Recent video titles: [list your last 5-10 titles]
Best performing title: [which one got the highest CTR or views]
Worst performing title: [which one underperformed]

Analyze my title patterns:
1. What title styles am I using most?
2. What's working (patterns in top performers)?
3. What's not working (patterns in underperformers)?
4. What styles am I not trying that I should?

Create a testing plan:
1. 5 title formulas to test over the next 10 videos
   - Formula template
   - Example using my niche
   - What it tests (curiosity vs benefit vs emotion vs SEO)

2. Title scoring rubric
   - Rate each title on: curiosity (1-5), clarity (1-5), keyword strength (1-5), emotional pull (1-5)
   - Minimum score to publish: [threshold]

3. A/B testing protocol
   - When to change titles after publishing
   - How long to wait before judging performance
   - What metrics to track (CTR, views in first 24 hours, suggested traffic)

4. Title swipe file
   - 10 proven title formulas from top creators (adapted to my niche)
   - Why each formula works psychologically

Build this as a system I can use for every video going forward.`,
              result:
                'A systematic approach to title optimization that improves CTR over time.',
              tip: 'YouTube lets you change titles after publishing. If your CTR is below 5% after 48 hours, test a new title. Many creators see a 20-30% improvement just from title changes.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - SEO and Discoverability',
          prompts: [
            {
              id: 'cc-p-3-1',
              title: 'SEO-Optimized Description Writer',
              task: 'Write a YouTube description optimized for search and engagement',
              prompt: `Write an SEO-optimized YouTube video description.

Video title: [title]
Video topic: [what the video covers in detail]
Target keywords: [primary keyword + 2-3 secondary keywords]
Channel: [name and niche]
Key timestamps: [list major sections with approximate times]
Links to include: [social media, website, products, affiliate links]

Write a description that includes:

1. First 2 lines (visible before "Show More")
   - Hook that includes the primary keyword naturally
   - Value statement - what the viewer will learn
   - These lines are critical for search AND click-through

2. Detailed description (200-300 words)
   - Expand on what the video covers
   - Include keywords naturally (not stuffed)
   - Written for humans first, search second
   - Include a personal note or context

3. Timestamps
   - Formatted for YouTube chapters (00:00 format)
   - Descriptive labels that include secondary keywords

4. Links section
   - Social media links
   - Resources mentioned in the video
   - Related videos on your channel
   - Product/affiliate links with disclosure

5. About section
   - Brief channel description with keywords
   - Upload schedule
   - Collaboration/business inquiry info

6. Hashtags (3 maximum, keyword-relevant)

Also provide:
- 15-20 tags for the video
- Suggested video category
- Suggested end screen videos (describe what content to link to)`,
              result:
                'A fully optimized description that helps YouTube understand and recommend your video.',
              tip: 'The first two lines of your description appear in search results. Treat them like a second title - they need to sell the click.',
            },
            {
              id: 'cc-p-3-2',
              title: 'Keyword Research for Video Topics',
              task: 'Research keywords and search intent for content planning',
              prompt: `Research keywords for my YouTube content planning.

Channel niche: [your content area]
Target audience: [who you create for]
Content topics I'm considering: [list 3-5 potential video topics]
My channel size: [subscriber count - affects keyword competition strategy]

For each topic, research:

1. Primary keyword
   - The main search term people use
   - Estimated search volume (high, medium, low)
   - Competition level (high, medium, low)

2. Long-tail keywords (5-8 per topic)
   - More specific searches with lower competition
   - Often better for smaller channels

3. Search intent analysis
   - What is the searcher actually trying to accomplish?
   - Tutorial seekers vs information seekers vs comparison shoppers
   - How should the video content match this intent?

4. Related questions (from "People Also Ask")
   - 5 questions people search related to this topic
   - These become sections in your video

5. Content gap analysis
   - What existing videos on this topic are missing
   - How your video can be different or better
   - Unique angle that isn't covered yet

6. Keyword difficulty recommendation
   - For my channel size, which topics should I prioritize?
   - Quick wins (low competition, decent volume)
   - Long-term plays (higher competition, worth building toward)

Rank the topics by: best opportunity for my channel right now.`,
              result:
                'A keyword-informed content strategy that helps your videos get found.',
              tip: 'Smaller channels should target long-tail keywords. "How to edit YouTube videos" is impossibly competitive. "How to edit gaming videos in DaVinci Resolve free" is much more winnable.',
            },
            {
              id: 'cc-p-3-3',
              title: 'Content Series SEO Strategy',
              task: 'Plan a content series optimized for YouTube search and suggested videos',
              prompt: `Plan a content series optimized for YouTube SEO.

Channel: [name and niche]
Series topic: [the overarching theme]
Number of videos: [5-10 videos]
Target audience: [who this series is for]
Goal: [grow subscribers, rank for keywords, establish authority]

For the series, create:

1. Series keyword map
   - Primary keyword for the series
   - Individual video keywords (each video targets a unique long-tail keyword)
   - How the keywords relate and build on each other

2. Video-by-video plan
   - Title (SEO-optimized)
   - Target keyword
   - Search intent it fulfills
   - How it connects to the previous and next video
   - Internal linking strategy (which videos to reference)

3. Playlist strategy
   - Playlist title (keyword-optimized)
   - Playlist description (with keywords)
   - Video order for maximum retention

4. Cross-promotion plan
   - End screen strategy (which video to suggest next)
   - Card placement recommendations
   - How to reference other videos naturally within scripts
   - Pinned comment strategy for each video

5. SEO metadata templates
   - Title formula for the series
   - Description template
   - Standard tags across all videos
   - Consistent hashtags

Make the series work both as a binge-watch playlist AND as individual standalone videos that rank in search.`,
              result:
                'A series plan that compounds SEO value across multiple videos.',
              tip: 'Series content is the fastest way to build authority on a topic. YouTube\'s algorithm notices when you have multiple videos on a related subject and starts recommending them together.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Community Engagement',
          prompts: [
            {
              id: 'cc-p-4-1',
              title: 'Comment Response Templates',
              task: 'Create templates for responding to different types of comments',
              prompt: `Create comment response templates for my YouTube channel.

Channel: [name and niche]
My personality/voice: [describe how you talk to your audience]
Community vibe: [supportive, nerdy, casual, professional, etc.]

Generate templates for:

Positive comments (5 templates each):
1. "Great video!" type - generic praise
2. Specific compliment about content
3. Viewer sharing their own experience
4. "This helped me so much" type feedback
5. Long, thoughtful comment

Questions (5 templates each):
6. Topic-related question (direct answer)
7. "Can you make a video about X?" requests
8. Technical/how-to question
9. "What do you use for X?" (gear, tools, software)
10. Off-topic question

Negative comments (3 templates each):
11. Constructive criticism (valid feedback)
12. "This is wrong" - factual disagreement
13. Troll or hate comment (when to respond vs ignore)

Community building (3 templates each):
14. Encouraging a new subscriber
15. Responding to a recurring commenter (building relationship)
16. Asking a follow-up question to deepen engagement

Rules:
- Keep responses under 50 words (short replies get more engagement)
- Match the energy of the comment
- Include a question in responses when possible (drives more replies)
- Heart/pin worthy responses should be flagged
- Never be defensive, even with criticism`,
              result:
                'A comment response library that keeps engagement high and authentic.',
              tip: 'Replying to comments in the first hour after publishing signals to YouTube that the video is generating engagement. Use these templates to respond quickly during the launch window.',
            },
            {
              id: 'cc-p-4-2',
              title: 'Community Post Ideas Generator',
              task: 'Generate ideas for YouTube Community tab posts',
              prompt: `Generate Community tab post ideas for my YouTube channel.

Channel: [name and niche]
Audience: [who follows you]
Recent video topics: [your last 3-5 videos]
Upcoming content: [what you're working on next]
Posting frequency goal: [how often you want to post to Community]

Generate 20 community post ideas:

Engagement posts (5):
- Polls, questions, and debates that get people talking
- "Which do you prefer" / "What should I make next" format

Behind-the-scenes (4):
- Sneak peeks at upcoming videos
- Your creative process
- Bloopers or outtakes
- Setup/workspace reveals

Value posts (4):
- Quick tips related to your niche
- Resource recommendations
- Mini-lessons that don't need a full video

Personal connection (3):
- Life updates, milestones, gratitude
- Responding to common audience questions
- Sharing what you're learning or consuming

Promotional (2):
- New video announcements (but make them interesting)
- Playlist or older video recommendations

Experimental (2):
- GIF posts, meme posts, or image-based content
- Collaborative posts (featuring audience submissions)

For each post:
- The complete post text
- Image/poll/format recommendation
- Best time to post (relative to video uploads)
- Expected engagement type (comments, votes, shares)`,
              result:
                'A month of Community tab content that keeps your audience engaged between uploads.',
              tip: 'Community posts keep your channel active between uploads and signal to YouTube that your audience is engaged. Post 2-3 times per week for best results.',
            },
            {
              id: 'cc-p-4-3',
              title: 'Audience Engagement Strategy',
              task: 'Build a systematic approach to community building',
              prompt: `Build a community engagement strategy for my YouTube channel.

Channel: [name, niche, subscriber count]
Current engagement rate: [average comments/likes per video]
Community vibe: [how your audience interacts]
Time available for engagement: [hours per week]
Challenges: [what's hard about community management right now]

Create a strategy that covers:

1. Comment management system
   - First-hour protocol (what to do when a video goes live)
   - Daily engagement routine (15-30 minutes)
   - Which comments to pin and why
   - How to encourage more meaningful comments

2. Community building tactics
   - Recurring segments that audiences participate in (challenges, Q&As)
   - How to turn viewers into community members
   - Inside jokes, catchphrases, or traditions that build belonging

3. Cross-platform community
   - Where to engage beyond YouTube (Discord, Instagram, Twitter)
   - How to funnel community across platforms
   - Platform-specific engagement strategies

4. Super-fan development
   - How to identify and nurture your most engaged viewers
   - Ways to make them feel recognized
   - How super-fans help grow the channel

5. Feedback loop
   - How to use community input for content planning
   - Polls and questions that generate video ideas
   - Making the audience feel heard without being driven by comments

6. Weekly engagement calendar
   - Day-by-day plan for community management
   - Time-boxed activities
   - Metrics to track

Make it sustainable. Burnout from community management is real.`,
              result:
                'A complete community strategy that builds loyalty without burning you out.',
              tip: 'Community is the moat that protects your channel. Algorithms change, trends fade, but a loyal community keeps watching. Invest in this consistently.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Sponsorship and Monetization',
          prompts: [
            {
              id: 'cc-p-5-1',
              title: 'Sponsorship Proposal Email',
              task: 'Write a tailored sponsorship pitch to a specific brand',
              prompt: `Write a sponsorship proposal email.

My channel: [name]
Niche: [content area]
Subscribers: [count]
Average views per video: [number]
Audience demographics: [age, gender, interests, location]
Engagement rate: [average likes, comments relative to views]

Brand I'm pitching: [brand name]
Their product/service: [what they sell]
Why it fits my audience: [the natural connection]
Integration idea: [how I'd feature them - dedicated video, mention, segment, etc.]
My rate: [what you want to charge, or "negotiable"]

Write:

1. Subject line (5 options that get opened by brand managers)

2. Pitch email:
   - Opening that shows you know their brand (specific, not generic)
   - Why your audience aligns with their target customer
   - Your integration idea (clear, creative, specific)
   - Social proof (past sponsorships, results, testimonials)
   - Key metrics in a scannable format
   - Clear next step / CTA
   - Under 250 words

3. Media kit highlights to attach
   - What to include in 1 page
   - How to present your metrics compellingly

4. Follow-up email (if no response in 5-7 days)
   - Short, adds one new detail or angle
   - Not pushy

Tone: professional but personable. This should feel like a collaboration opportunity, not a sales pitch.`,
              result:
                'A polished sponsorship pitch that positions you as a professional creator worth investing in.',
              tip: 'Brands get dozens of pitches daily. Specificity wins. Don\'t say "I can promote your product." Say "I\'d create a 90-second segment showing how I use [product] in my [specific workflow], targeting [specific audience segment]."',
            },
            {
              id: 'cc-p-5-2',
              title: 'Media Kit Generator',
              task: 'Create a professional media kit for brand partnerships',
              prompt: `Create the text content for a creator media kit.

Channel: [name]
Niche: [content area]
Platform(s): [YouTube, Instagram, TikTok, etc.]
Subscribers/Followers: [numbers per platform]
Average views: [per video]
Engagement rate: [percentage]
Audience demographics:
- Age range: [primary age]
- Gender split: [percentage]
- Top locations: [countries/cities]
- Interests: [what your audience cares about]

Content focus: [what you create and who it serves]
Upload schedule: [how often you post]
Past brand partners: [if any]
Notable achievements: [milestones, press features, awards]

Generate media kit content sections:

1. About section (2-3 sentences - who you are and what you do)
2. Audience overview (demographics in a clean, visual-friendly format)
3. Platform metrics (organized by platform)
4. Content categories (what types of videos/posts you create)
5. Partnership options:
   - Dedicated video
   - Sponsored segment
   - Product review
   - Social media package
   - Affiliate partnership
   - For each: brief description and starting rate range
6. Case study / past results (template if you don't have data yet)
7. Testimonials section (template for collecting brand feedback)
8. Contact information and booking process

Write everything in third person, professional but not stiff. This should make a brand manager think "This creator is organized and worth working with."`,
              result:
                'Complete media kit copy ready to design in Canva or a PDF builder.',
              tip: 'A professional media kit immediately sets you apart from 90% of creators who pitch without one. Update it monthly with fresh metrics.',
            },
            {
              id: 'cc-p-5-3',
              title: 'Sponsorship Rate Calculator Context',
              task: 'Determine fair sponsorship rates and negotiate confidently',
              prompt: `Help me determine sponsorship rates and build a pricing strategy.

My metrics:
- Platform: [YouTube, Instagram, TikTok, etc.]
- Subscribers/Followers: [number]
- Average views per video: [number]
- Engagement rate: [percentage]
- Niche: [your content area]
- Audience purchasing power: [estimate - student, professional, high-income]

Current situation:
- Have I done sponsorships before? [yes/no, and at what rate]
- Brands that have reached out: [any inbound interest]
- My content production cost: [rough time + expenses per video]

Help me build:

1. Rate card
   - Dedicated video: $[range]
   - Sponsored segment (60-90 sec): $[range]
   - Product mention: $[range]
   - Social media post package: $[range]
   - Affiliate partnership: [commission structure]
   - Show your reasoning for each rate

2. Pricing factors to consider
   - Exclusivity (higher rate for category exclusivity)
   - Usage rights (if they want to use the content in their ads)
   - Revisions (how many rounds included)
   - Rush fee (less than 2 weeks notice)

3. Negotiation talking points
   - How to counter when they offer too low
   - Value-adds you can offer instead of lowering price
   - When to walk away
   - How to propose performance bonuses

4. Rate increase strategy
   - When and how to raise rates
   - How to anchor higher rates with new clients
   - Bundling strategies that increase deal size

Give me specific numbers I can use tomorrow, not vague ranges.`,
              result:
                'A complete pricing strategy with specific rates and negotiation confidence.',
              tip: 'Never share your rate first if you can help it. Ask the brand for their budget range. If their range is higher than your rate, you just left money on the table. Let them anchor first.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Content Repurposing',
          prompts: [
            {
              id: 'cc-p-6-1',
              title: 'Blog Post from Video Script',
              task: 'Turn a video script or transcript into a publishable blog post',
              prompt: `Turn this video script/transcript into a blog post.

Video title: [title]
Channel: [your channel]
Target blog audience: [who reads your blog - may differ from video audience]
Blog tone: [educational, conversational, professional]
Target length: [1000-1500 words, 1500-2500 words]

[Paste video script or transcript]

Write a blog post that:

1. Has a different title (optimized for blog SEO, not YouTube)

2. Opens with a hook that works for readers
   - No "Hey guys" or video references
   - Lead with the insight or problem

3. Restructures the content for reading
   - Video content is linear; blog content can have sections and subheadings
   - Add context that the video showed visually but the blog needs to explain
   - Remove filler, verbal tics, and conversational tangents

4. Includes:
   - Clear subheadings for each major section
   - Bullet points or numbered lists where appropriate
   - Embedded video link or player at the top
   - Pull quotes from the video for visual interest
   - Images or screenshot placeholders [DESCRIBE WHAT TO INSERT]

5. Adds SEO elements:
   - Meta description (under 160 characters)
   - 5 suggested tags
   - Internal links to related content (placeholder)
   - External links to sources mentioned

6. Ends with a CTA
   - Watch the full video
   - Subscribe to the channel
   - Related posts to read next

The blog post should provide standalone value. Someone who never watches the video should still find it worthwhile.`,
              result:
                'A polished blog post that extends your video\'s reach to search traffic.',
              tip: 'Blog posts rank in Google; videos rank in YouTube. The same content in both formats doubles your discoverability. The blog post drives traffic to the video and vice versa.',
            },
            {
              id: 'cc-p-6-2',
              title: 'Newsletter from Video Content',
              task: 'Create a newsletter issue from recent video content',
              prompt: `Write a newsletter email based on my recent video(s).

Newsletter name: [if you have one]
Audience: [who subscribes]
Tone: [casual, professional, witty, educational]

Recent video(s):
Video 1: [title, topic, key insight]
Video 2: [title, topic, key insight] (if applicable)

Write a newsletter that:

1. Subject line options (5 variations)
   - Mix: curiosity, benefit, personal, bold, question
   - Under 50 characters each

2. Preview text (shows in inbox)

3. Email body:
   - Personal opening (not "Check out my new video" - share a thought, story, or insight first)
   - The key lesson or takeaway from the video - delivered as value in the email itself
   - A "want to go deeper?" section that links to the video
   - One bonus insight or tip not in the video (rewards email subscribers)
   - 3-5 bullet points of what they'll learn from watching
   - Link to watch with a specific reason to click

4. Bonus section (pick one):
   - A resource or tool recommendation
   - A question for the reader to reply to
   - A behind-the-scenes note about the video

5. P.S. line
   - Secondary CTA (share, follow on social, leave a review)

Under 400 words total. Scannable. The email should give value even if they never click.`,
              result:
                'A newsletter that nurtures your email list while driving video views.',
              tip: 'Your email list is the one audience you own. Algorithms can\'t take it away. Treat newsletter subscribers as your most valuable audience segment.',
            },
            {
              id: 'cc-p-6-3',
              title: 'Multi-Platform Content Repurposing Kit',
              task: 'Turn one video into content for every platform',
              prompt: `Repurpose this video into content for every platform I'm on.

Video title: [title]
Video topic: [summary]
Key insights from the video: [list 3-5 main points]
Best quotes or moments: [list 2-3 standout lines]
Target platforms: [Instagram, TikTok, Twitter/X, LinkedIn, blog, newsletter]

Generate:

Instagram:
1. Carousel (7-10 slides with copy and visual direction)
2. Reel script (30-60 seconds - the most compelling point from the video)
3. Story series (5 stories promoting the video)
4. Static post caption with the key takeaway

TikTok:
5. Short-form video script (30-45 seconds, hook-heavy)
6. Caption and hashtags

Twitter/X:
7. Single tweet (best insight, under 280 characters)
8. Thread (5-7 tweets breaking down the video's framework)

LinkedIn:
9. Long-form post (300-500 words, professional angle)
10. Short post (under 150 words with a question to drive comments)

Blog:
11. Article outline (key sections and word count estimate)

Newsletter:
12. Email teaser (drives clicks to the video)

For each piece:
- Platform-specific hook
- CTA appropriate for the platform
- Hashtags where relevant
- Posting timing recommendation relative to video launch

One video, 12+ pieces of content. Never waste a good idea on a single platform.`,
              result:
                'A complete cross-platform content kit from one video.',
              tip: 'Schedule repurposed content over 7-10 days after the video goes live. This keeps driving views long after the initial upload and catches audiences on different platforms at different times.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your time is actually worth as a content creator.',
      timeTable: [
        {
          task: 'Video script writing',
          without: '2-4 hours',
          withAI: '20-30 minutes',
          saved: '2.5 hrs',
        },
        {
          task: 'Thumbnail and title optimization',
          without: '1-2 hours',
          withAI: '15-20 minutes',
          saved: '1.25 hrs',
        },
        {
          task: 'SEO and descriptions',
          without: '30-60 minutes',
          withAI: '10 minutes',
          saved: '35 min',
        },
        {
          task: 'Community engagement',
          without: '1-2 hours/day',
          withAI: '20-30 minutes/day',
          saved: '5+ hrs/week',
        },
        {
          task: 'Sponsorship pitches',
          without: '3-5 hours per deal',
          withAI: '30-45 minutes',
          saved: '3.5 hrs',
        },
        {
          task: 'Content repurposing',
          without: '3-5 hours (or never)',
          withAI: '30-45 minutes',
          saved: '3.5 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative total per video',
        without: '-',
        withAI: '-',
        saved: '10-15 hrs/video',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'Content creation is more competitive than ever. Audiences have unlimited options. The creators who grow aren\'t just making better content - they\'re producing more consistently, optimizing more strategically, and showing up on more platforms.',
            'The gap isn\'t talent or creativity. It\'s production capacity. AI gives you the capacity of a small production team without the cost.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t become a content creator to write SEO descriptions and format media kits. You became one because you have ideas, stories, and a perspective worth sharing. AI handles the business of content creation so you can focus on the art of it.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One script or one set of titles. See how it changes your workflow. Then expand.',
    },

    ch7: {
      intro:
        'Seven days to transform your content creation workflow. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'cc-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'cc-1-2', label: 'Create a free Perplexity account for research' },
            { id: 'cc-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Write Your First AI-Assisted Script',
          duration: '25 min',
          items: [
            {
              id: 'cc-2-1',
              label: 'Run the Video Script prompt for your next video topic',
            },
            {
              id: 'cc-2-2',
              label: 'Generate 10 hooks and pick the strongest one',
            },
            {
              id: 'cc-2-3',
              label: 'Compare the AI draft to your usual scripting time',
            },
          ],
        },
        {
          day: 3,
          title: 'Optimize Your Titles and Thumbnails',
          duration: '20 min',
          items: [
            {
              id: 'cc-3-1',
              label: 'Run the Title Optimization prompt for an upcoming video',
            },
            {
              id: 'cc-3-2',
              label: 'Generate thumbnail concepts and design your top pick',
            },
          ],
        },
        {
          day: 4,
          title: 'Set Up Your SEO System',
          duration: '20 min',
          items: [
            {
              id: 'cc-4-1',
              label: 'Run the Keyword Research prompt for your next 3-5 video topics',
            },
            {
              id: 'cc-4-2',
              label: 'Write an SEO-optimized description for your latest video',
            },
          ],
        },
        {
          day: 5,
          title: 'Build Your Engagement Toolkit',
          duration: '15 min',
          items: [
            {
              id: 'cc-5-1',
              label: 'Generate comment response templates for your channel',
            },
            {
              id: 'cc-5-2',
              label: 'Create 10 Community tab post ideas for the next month',
            },
          ],
        },
        {
          day: 6,
          title: 'Repurpose a Video',
          duration: '25 min',
          items: [
            {
              id: 'cc-6-1',
              label: 'Run the Multi-Platform Repurposing Kit for your best recent video',
            },
            {
              id: 'cc-6-2',
              label: 'Turn the video into a blog post using the Blog Post prompt',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systemize',
          duration: '10 min',
          items: [
            {
              id: 'cc-7-1',
              label: 'Which prompts saved you the most time this week?',
            },
            {
              id: 'cc-7-2',
              label: 'Build 2-3 of these systems into your regular production workflow',
            },
            {
              id: 'cc-7-3',
              label: 'Share this guide with a creator friend who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
