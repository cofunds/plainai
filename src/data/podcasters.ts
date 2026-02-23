import type { WorkbookData } from './types'

export const podcastersData = {
  professionId: 'podcasters',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Podcast Producers',
  heroDescription:
    'Everything you need to start using AI in podcast production - with real tools, workflows, and prompts for episode planning, guest prep, show notes, and audience growth.',

  chapters: {
    ch1: {
      paragraphs: [
        'You have a recording session in two days and the episode outline is still a rough list of bullet points in your notes app. The guest confirmed yesterday, but you haven\'t had time to research their background beyond a quick LinkedIn scan. You know the conversation could go deeper, but without prep, you\'ll end up with another surface-level interview that sounds like every other podcast in your niche.',
        'After the recording, the real work begins. The raw audio needs editing. The transcript needs cleaning. Show notes need writing. A blog post would be nice but never happens. You need an audiogram for Instagram, a quote card for LinkedIn, a clip for TikTok, and an email to your subscriber list. That\'s 4-6 hours of post-production work for a single episode.',
        'Meanwhile, your download numbers have plateaued. You know you should be doing more to promote each episode, experiment with formats, and engage your audience between releases. But when every episode takes 10-15 hours from concept to published, there\'s no bandwidth left for growth.',
        'You started a podcast because you love conversations, ideas, and building an audience around topics that matter. Instead, you spend most of your time on production logistics - writing, editing, formatting, and promoting - while the creative and strategic work gets squeezed into whatever time is left.',
      ],
      highlight:
        'What if episode prep took 20 minutes instead of 2 hours? What if show notes, social content, and blog posts wrote themselves from the transcript?',
      closingParagraph:
        'Not robotic show notes that miss the point. Not generic social posts that sound nothing like your show. Just fast, quality first drafts for everything around the episode - so you can focus on the conversation itself.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to make you a better interviewer. It won\'t replace the rapport you build with guests, the instinct for when to push deeper on a topic, or the authentic voice that makes your audience come back every week. It can\'t feel the energy of a conversation or know when to go off-script. And it\'s definitely not going to replace the creative vision that makes your show unique.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as the most efficient production assistant you could ever hire. It has consumed millions of podcast episodes, show notes, blog posts, and social media content. It knows what works. Give it a transcript, and it gives you show notes, blog posts, social clips, email drafts, and SEO descriptions - all in minutes.',
            'Need to research a guest? AI compiles their background, recent work, and suggested questions in 3 minutes. Need an episode outline? AI structures your rough ideas into a compelling narrative arc. Need show notes? Paste the transcript and AI pulls out key moments, timestamps, and takeaways. Need 5 social posts promoting the episode? Done in 60 seconds.',
            'The model is simple: AI handles all the production work around the episode. You handle the part that actually makes the show great - the preparation, the conversation, and the creative direction.',
          ],
        },
        {
          heading: 'Why podcast producers have a unique advantage',
          paragraphs: [
            'You already have the hardest part figured out - the content itself. Every episode you record is a goldmine of material. The problem has never been creating enough content. It\'s been extracting and repurposing it efficiently.',
            'Most podcast producers leave 80% of the value on the table. A 60-minute episode contains enough material for 20+ social posts, a blog article, a newsletter, and dozens of quotable moments. AI doesn\'t create content from nothing - it helps you extract the full value from what you\'ve already created.',
          ],
        },
      ],
      keyInsight:
        'Every episode you record is a content goldmine. AI doesn\'t replace your creative work - it multiplies its reach by extracting every piece of value from every conversation.',
    },

    ch3: {
      intro: 'Five tools that cover the full podcast production workflow. Start with the first two and build from there.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and planning partner',
          description:
            'Episode outlines, guest research, show notes, social content, email drafts, and brainstorming ideas',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Start here for all text-based production work',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form and analysis partner',
          description:
            'Transcript analysis, blog posts from episodes, detailed guest briefs, content strategy, and nuanced writing',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for transcript work and long-form content',
          icon: 'claude',
        },
        {
          name: 'Descript',
          role: 'Your audio and transcript editor',
          description:
            'Transcript-based audio editing, filler word removal, clip creation, audiograms, and collaborative editing',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Game-changer for editing and clip creation',
          icon: 'descript',
        },
        {
          name: 'Perplexity',
          role: 'Your guest research assistant',
          description:
            'Guest background research, topic fact-checking, industry trend scanning, and competitor podcast analysis',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for guest prep and research with sources',
          icon: 'perplexity',
        },
        {
          name: 'Notion AI',
          role: 'Your podcast operations hub',
          description:
            'Episode tracker, guest pipeline, content calendar, show notes archive, and production workflow management',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Great for organizing your entire production pipeline',
          icon: 'notion',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing + Descript for editing. That covers 80% of podcast production. Add Perplexity for research and Notion AI for organization as your show grows.',
    },

    ch4: {
      intro:
        'Now that you have the tools, here\'s where they plug into your actual podcast workflow. Click each system to explore.',
      systems: [
        {
          id: 1,
          name: 'Episode Planning and Outlining',
          before:
            'You have a vague topic idea and a recording date. You jot down some bullet points the night before. During the recording, the conversation meanders because there\'s no structure. Afterward, you spend an hour editing out tangents that a better outline would have prevented.',
          after:
            'AI turns your rough topic idea into a structured episode outline with talking points, transitions, and potential audience hooks. You walk into the recording prepared, and the conversation is focused and compelling from start to finish.',
          flow: [
            'Start with your rough topic idea or theme',
            'Run the episode outline prompt with audience context',
            'AI generates a structured outline with segments, talking points, and hooks',
            'Review and customize - add your personal angles and stories',
            'Use the outline as a flexible guide during recording',
          ],
          timeSaved: { without: '1-2 hours', withAI: '15-20 minutes' },
        },
        {
          id: 2,
          name: 'Guest Research and Preparation',
          before:
            'You spend an hour Googling the guest, reading their LinkedIn, skimming their recent articles, and trying to find angles that haven\'t been covered in their other podcast appearances. Half the time, you end up asking the same questions every other host asks.',
          after:
            'AI compiles a comprehensive guest brief - their background, recent work, talking points, and 10 unique questions designed to surface insights they haven\'t shared elsewhere. You sound like the most prepared host they\'ve talked to.',
          flow: [
            'Provide the guest\'s name, title, and any links to their work',
            'Run the guest research prompt in Perplexity and ChatGPT/Claude',
            'AI generates a comprehensive brief with bio, recent work, and unique angles',
            'Review the suggested questions and customize based on your show\'s focus',
            'Send the guest a pre-interview note with topics you\'d like to explore',
          ],
          timeSaved: { without: '1-2 hours per guest', withAI: '15-20 minutes' },
        },
        {
          id: 3,
          name: 'Show Notes and Descriptions',
          before:
            'After recording, you listen back (or skim the transcript), pull out key moments, write a summary, add timestamps, format the description, and include links. For a 60-minute episode, show notes take 45-90 minutes. Most producers either rush them or skip them entirely.',
          after:
            'Paste the transcript into AI and get complete show notes with summary, key takeaways, timestamps, and guest links in 5 minutes. You review and refine in another 10 minutes. Done.',
          flow: [
            'Get the episode transcript (from Descript or your recording platform)',
            'Run the show notes prompt with the full transcript',
            'AI generates summary, key takeaways, timestamps, and resource links',
            'Review for accuracy and add any links or context AI missed',
            'Publish with your episode',
          ],
          timeSaved: { without: '45-90 minutes', withAI: '10-15 minutes' },
        },
        {
          id: 4,
          name: 'Transcript Editing and Repurposing',
          before:
            'You know you should turn episodes into blog posts, newsletters, and other long-form content. But transforming a 10,000-word transcript into a readable 1,500-word article takes 2-3 hours. It almost never gets done.',
          after:
            'AI reads the transcript and produces a blog post, newsletter draft, or article that captures the key insights in a readable format. What never got done now takes 15 minutes to review and publish.',
          flow: [
            'Paste the full transcript into Claude or ChatGPT',
            'Run the blog post from transcript prompt',
            'AI extracts key themes and writes a structured article',
            'Review, add your perspective, and edit for your blog\'s voice',
            'Publish and link back to the full episode',
          ],
          timeSaved: { without: '2-3 hours (or never)', withAI: '20-30 minutes' },
        },
        {
          id: 5,
          name: 'Social Media Promotion',
          before:
            'You know you need to promote each episode across platforms. But creating unique content for Instagram, LinkedIn, Twitter, and TikTok is another 2-3 hours per episode. Most producers post once and move on. The episode gets a fraction of the audience it deserves.',
          after:
            'AI generates a full social promotion kit from the transcript - audiogram scripts, quote cards, carousel content, threads, and video clip suggestions. You go from one "new episode" post to 10+ pieces of promotional content per episode.',
          flow: [
            'Run the social promotion prompt with the transcript and key moments',
            'AI generates platform-specific content: audiogram scripts, quote cards, threads',
            'Select the strongest moments and format them in Canva or Descript',
            'Schedule posts across platforms over 1-2 weeks',
            'Track which promotional angles drive the most listens',
          ],
          timeSaved: { without: '2-3 hours per episode', withAI: '20-30 minutes' },
        },
        {
          id: 6,
          name: 'Audience Growth Strategy',
          before:
            'You know your downloads should be growing faster. You\'ve tried posting more, guesting on other shows, and asking listeners to share. But there\'s no structured growth plan because all your time goes into production. Growth strategy is always "next quarter\'s priority."',
          after:
            'AI analyzes your podcast metrics, audience feedback, and competitive landscape to generate specific growth experiments. You get a concrete plan with testable tactics instead of vague intentions.',
          flow: [
            'Share your current metrics, audience demographics, and past growth tactics',
            'Run the growth strategy prompt with your show\'s context',
            'AI generates 5-10 specific growth experiments with expected impact',
            'Pick 2-3 experiments to run this month',
            'Track results and run the prompt again with updated data',
          ],
          timeSaved: { without: 'Rarely done', withAI: '30 minutes/month' },
        },
      ],
    },

    ch5: {
      intro:
        'You don\'t need to learn prompt engineering. You just need the right prompts. Click each to reveal, then hit Copy.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Episode Planning',
          prompts: [
            {
              id: 'pc-p-1-1',
              title: 'Episode Outline Generator',
              task: 'Turn a rough topic idea into a structured episode outline',
              prompt: `Create a podcast episode outline.

Show name: [your podcast name]
Format: [solo, interview, co-hosted, panel]
Typical episode length: [30 min, 45 min, 60 min]
Target audience: [who listens and what they care about]

Episode topic: [what this episode is about]
Key angle or thesis: [the one thing you want listeners to take away]
Guest (if applicable): [name and their expertise]

Generate an episode outline that includes:

1. Cold open / hook (30-60 seconds)
   - A surprising stat, question, or story that grabs attention immediately

2. Introduction (1-2 minutes)
   - Topic setup and why it matters now
   - Guest introduction (if applicable)

3. Main segments (3-5 segments with talking points)
   - Segment name
   - 3-5 talking points or questions per segment
   - Transition between segments
   - Potential follow-up questions or directions

4. Key stories or examples to reference
   - 2-3 concrete examples that illustrate the main points

5. Lightning round or recurring segment (if applicable)

6. Wrap-up and CTA
   - Key takeaway summary
   - What to do next (subscribe, share, connect with guest)

Make it flexible - this is a guide, not a script. Leave room for natural conversation.`,
              result:
                'A structured episode outline that keeps the conversation focused without making it feel rigid.',
              tip: 'The best outlines are 80% structure and 20% flexibility. Know your key points but follow the energy of the conversation when it goes somewhere interesting.',
            },
            {
              id: 'pc-p-1-2',
              title: 'Episode Series Planner',
              task: 'Plan a multi-episode series around a theme',
              prompt: `Plan a podcast episode series.

Show name: [your podcast name]
Series theme: [the overarching topic for the series]
Number of episodes: [3-6 episodes]
Target audience: [who this series is for]
Goal: [educate, inspire, convert, build authority]

For each episode in the series:
1. Episode title (compelling, not generic)
2. One-sentence description
3. Key angle that makes this episode unique within the series
4. 3-5 main topics to cover
5. Ideal guest (if interview format) - describe the type of expert, not a specific name
6. How this episode connects to the next one

Also provide:
- Series trailer script (60-90 seconds - what the series is about and why to listen)
- Recommended release schedule (weekly, bi-weekly, daily drop)
- Cross-promotion strategy (how to tease upcoming episodes in current ones)
- Series-level CTA (what you want listeners to do after completing the series)

Make each episode strong enough to stand alone, but better as part of the series.`,
              result:
                'A complete series plan with episode-by-episode structure and a promotional strategy.',
              tip: 'Series format drives binge listening and better retention. Plan 3-4 series per year around your audience\'s biggest questions or challenges.',
            },
            {
              id: 'pc-p-1-3',
              title: 'Solo Episode Script Framework',
              task: 'Create a framework for a solo episode',
              prompt: `Write a solo podcast episode framework.

Show name: [your podcast name]
Host: [your name]
Episode topic: [what you're talking about]
Your perspective: [your unique take or experience with this topic]
Episode length target: [15 min, 20 min, 30 min]
Audience: [who listens]

Build a solo episode framework:

1. Hook (first 60 seconds)
   - Open with a story, question, or bold statement
   - Make the listener think "I need to hear the rest of this"

2. Context (2-3 minutes)
   - Why this topic matters right now
   - What prompted this episode

3. Main content (3-5 key points)
   - For each point:
     - The insight or lesson
     - A personal story or example that illustrates it
     - The practical takeaway
   - Natural transitions between points

4. Counterargument or nuance
   - Address the obvious objection or "but what about..."
   - Show you've thought deeper than the surface level

5. Practical action steps
   - 2-3 things the listener can do immediately after this episode

6. Close
   - Callback to the opening hook
   - Final thought that sticks
   - CTA (subscribe, share, leave a review)

Write it as talking points, not a word-for-word script. It should sound natural when spoken.`,
              result:
                'A solo episode framework that keeps you on track without sounding scripted.',
              tip: 'Solo episodes are harder than interviews because there\'s no one to bounce off. The framework prevents rambling. Practice the hook and close out loud before recording.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Guest Research',
          prompts: [
            {
              id: 'pc-p-2-1',
              title: 'Guest Research Brief',
              task: 'Compile a comprehensive guest brief for interview prep',
              prompt: `Create a guest research brief for an upcoming podcast interview.

Guest name: [name]
Guest title/role: [their current position]
Their company/organization: [name]
Their website or LinkedIn: [link if available]
What they're known for: [their expertise or claim to fame]
Why I'm interviewing them: [what my audience would want to hear from them]
My podcast's focus: [what your show covers]

Research and compile:

1. Bio summary (3-4 sentences - not their official bio, but what matters for the conversation)

2. Recent work and accomplishments
   - What they've published, launched, or achieved in the last 6-12 months
   - Any recent interviews or talks they've given (so I can avoid repeat topics)

3. Core expertise areas
   - What topics they can speak to with authority
   - Their known frameworks, methods, or philosophies

4. Potential story hooks
   - 3 unique angles that my audience would find valuable
   - Topics they probably don't get asked about often

5. Suggested questions (10 questions)
   - 3 warm-up questions (easy, builds rapport)
   - 4 deep-dive questions (gets to unique insights)
   - 3 forward-looking questions (predictions, advice, what's next)
   - For each: what you're trying to surface and why it matters to the audience

6. Conversation landmines
   - Topics that might be sensitive or off-limits
   - Areas where their views might be controversial

7. Pre-interview email template
   - A brief note to send the guest with topics you'd like to explore`,
              result:
                'A complete guest brief that makes you the most prepared host they\'ve spoken with.',
              tip: 'Run the research part in Perplexity for sourced information, then use ChatGPT or Claude to generate the questions and angles. Send the pre-interview email at least 48 hours before recording.',
            },
            {
              id: 'pc-p-2-2',
              title: 'Guest Discovery and Outreach',
              task: 'Find and reach out to potential podcast guests',
              prompt: `Help me find and reach out to potential podcast guests.

My podcast: [show name, topic, audience size if relevant]
Episode theme or topic: [what the next episode or series covers]
Ideal guest profile: [describe the type of person - role, expertise, background]
Guests I've already had: [list a few recent guests so there's no overlap]
My audience: [who listens and what they value]

Generate:
1. Guest criteria checklist
   - What makes someone a great fit for this specific topic
   - Red flags (overexposed, doesn't match audience, hard to schedule)

2. 10 guest type suggestions
   - Don't give me specific names (they may not exist or be available)
   - Instead: describe 10 types of people who would be compelling
   - For each: their likely title, where to find them, and what angle they'd bring

3. Outreach email template (cold)
   - Subject line that gets opened
   - Why you want them specifically (not a mass email feel)
   - What they'll get out of it (audience size, promotion, positioning)
   - Easy ask (15-second CTA)
   - Under 150 words

4. Outreach email template (warm intro)
   - For when someone in your network can introduce you
   - Brief, respectful of the connector's time

5. Follow-up email (if no response after 5-7 days)

Keep everything personable. Guests say yes to hosts who seem genuinely interested, not ones who seem like they're filling a calendar.`,
              result:
                'A guest sourcing framework with outreach templates ready to customize.',
              tip: 'The best guests aren\'t always the most famous. Look for people with unique stories and deep expertise who don\'t get invited on every podcast. They\'ll give you their best answers.',
            },
            {
              id: 'pc-p-2-3',
              title: 'Pre-Interview Question Customizer',
              task: 'Generate tailored interview questions based on the guest\'s recent work',
              prompt: `Generate customized interview questions based on this guest's recent work.

Guest: [name and role]
My podcast topic: [what your show covers]
My audience: [who listens]

Here is the guest's recent work (paste any of the following):
- Recent articles, blog posts, or talks: [paste titles or summaries]
- Recent interviews on other podcasts: [paste key topics covered]
- Recent social media posts or threads: [paste notable ones]
- Recent projects or launches: [describe]

Generate:
1. 5 questions based on their recent work
   - Reference specific work so the guest knows you did your homework
   - Go deeper than what they've already said publicly
   - Ask "why" and "how" rather than "what"

2. 5 questions they probably haven't been asked
   - Find the gap between what they're known for and what they could speak to
   - Questions that make them think, not just recall

3. 3 controversial or challenging questions
   - Respectfully push back on a stance or ask about a known criticism
   - Frame as "some people would say..." to keep it comfortable

4. 2 audience-focused questions
   - "If someone listening is a [describe your listener], what would you tell them about..."

5. 1 closing question
   - Something memorable that ends the episode strong

For each question: explain what insight you're trying to surface and why your audience would care.`,
              result:
                'Deeply researched questions that make the conversation unique and memorable.',
              tip: 'The best interviews feel like a conversation between two curious people. Use these questions as starting points, then follow up based on what the guest actually says. Don\'t just read the list.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Show Notes and Descriptions',
          prompts: [
            {
              id: 'pc-p-3-1',
              title: 'Complete Show Notes Generator',
              task: 'Generate full show notes from a transcript',
              prompt: `Generate complete show notes from this podcast transcript.

Show name: [your podcast name]
Episode title: [title]
Guest: [name and title, if applicable]
Episode number: [number]

[Paste full transcript or detailed summary]

Generate show notes that include:

1. Episode description (2-3 sentences for podcast directories)
   - Compelling, searchable, tells you exactly what you'll learn

2. Episode summary (1 paragraph, 100-150 words)
   - The key narrative and why it matters

3. Key takeaways (5-7 bullet points)
   - The most valuable insights from the conversation
   - Each takeaway should be actionable or memorable

4. Timestamps
   - [00:00] Introduction
   - [MM:SS] for each major topic or segment change
   - Include enough timestamps that listeners can skip to what interests them

5. Resources mentioned
   - Books, tools, websites, people, companies referenced in the episode
   - Include links where possible

6. Guest bio (if applicable)
   - 2-3 sentences
   - Where to find them (website, social media)

7. Quotable moments (3-5 standout quotes from the episode)

8. Episode keywords/tags (5-8 for SEO and discoverability)

Format for direct paste into your podcast hosting platform.`,
              result:
                'Complete, professional show notes ready to publish.',
              tip: 'Good show notes serve two audiences: people deciding whether to listen (description and takeaways) and people who already listened (timestamps and resources). Write for both.',
            },
            {
              id: 'pc-p-3-2',
              title: 'SEO-Optimized Episode Description',
              task: 'Write a podcast episode description optimized for discovery',
              prompt: `Write an SEO-optimized episode description for podcast directories.

Show name: [your podcast name]
Episode title: [title]
Episode topic: [what this episode covers]
Guest: [name and expertise, if applicable]
Target keywords: [2-3 keywords your audience might search for]
Audience: [who would search for this topic]

Write 3 versions:

1. Short description (under 160 characters)
   - For Apple Podcasts and Spotify preview
   - Includes primary keyword naturally

2. Medium description (200-300 words)
   - For podcast directories and your website
   - Front-load the most important information
   - Include keywords naturally (not stuffed)
   - Bullet point the key topics covered
   - End with a reason to listen ("You'll learn..." or "This episode is for you if...")

3. Long description (400-500 words)
   - For your website or blog
   - Includes context, background, and detail
   - Natural keyword placement throughout
   - Internal links placeholder (to related episodes)
   - CTA to subscribe and review

Also provide:
- 5 title variations (optimized for search)
- Episode tags (5-8 relevant categories)
- Suggested Apple Podcasts category`,
              result:
                'Search-optimized episode descriptions that help new listeners find your show.',
              tip: 'Most podcast discovery still happens through search. The title and first two lines of the description determine whether someone clicks play. Front-load value.',
            },
            {
              id: 'pc-p-3-3',
              title: 'Episode Chapters and Timestamps',
              task: 'Create detailed chapter markers from a transcript',
              prompt: `Create episode chapters and timestamps from this transcript.

Episode title: [title]
Episode length: [total duration]
Format: [solo, interview, panel]

[Paste full transcript with timestamps if available]

Generate:

1. Chapter markers (for podcast apps that support chapters)
   - Chapter title (descriptive, not generic)
   - Start time
   - Brief description (one sentence)
   - Generate 8-15 chapters depending on episode length

2. Simple timestamp list (for show notes)
   - [MM:SS] Topic name
   - Cover every significant topic shift

3. Key moments list
   - The 3-5 most compelling moments in the episode
   - Timestamp + brief description of what happens
   - Why a listener should not skip this moment

4. Clip suggestions
   - 3-5 segments that would work well as standalone clips (for social media or audiograms)
   - Start and end timestamps
   - Why this clip is compelling on its own

Rules:
- Chapter titles should be interesting, not just topic labels
- Timestamps should be accurate based on the transcript
- Every chapter should promise something worth listening to`,
              result:
                'Detailed chapter markers and clip suggestions that make your episode more accessible and promotable.',
              tip: 'Chapter markers dramatically improve listener experience. They also give you a ready-made list of social media clips. Two birds, one prompt.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Transcript Repurposing',
          prompts: [
            {
              id: 'pc-p-4-1',
              title: 'Blog Post from Transcript',
              task: 'Turn a podcast transcript into a publishable blog post',
              prompt: `Turn this podcast transcript into a blog post.

Episode title: [title]
Guest: [name, if applicable]
Target audience for the blog: [who reads your blog]
Blog tone: [conversational, professional, educational]
Target length: [1000-1500 words, 1500-2500 words]

[Paste full transcript or key sections]

Write a blog post that:

1. Has a compelling headline (different from the episode title - optimized for readers, not listeners)

2. Opens with a hook that works for readers (not "In this episode of...")
   - Don't reference the podcast in the opening
   - Lead with the insight, story, or problem

3. Organizes the content logically
   - A transcript is a conversation; a blog post is structured
   - Group related points into clear sections with subheadings
   - Remove the back-and-forth format and write as a cohesive narrative

4. Includes the best quotes from the conversation
   - Pull 3-5 standout quotes and format them as blockquotes
   - Attribute to the guest or host

5. Adds context and transitions that don't exist in the audio
   - Bridges between topics
   - Background information a reader might need

6. Ends with a CTA
   - Link to listen to the full episode
   - Subscribe to the podcast
   - Related episodes

Include SEO meta description (under 160 characters) and 5 suggested tags.`,
              result:
                'A polished blog post that captures the episode\'s value in a reader-friendly format.',
              tip: 'Don\'t just summarize the conversation. The blog post should stand on its own as a valuable piece of content. Someone who never listens to your podcast should still find it worth reading.',
            },
            {
              id: 'pc-p-4-2',
              title: 'Newsletter Draft from Episode',
              task: 'Create an email newsletter promoting and summarizing an episode',
              prompt: `Write a newsletter email about a new podcast episode.

Show name: [podcast name]
Episode title: [title]
Guest: [name, if applicable]
Newsletter audience: [who subscribes to your email list]
Newsletter tone: [casual, professional, witty]

Episode summary: [2-3 sentences about what the episode covers]
Key takeaway: [the single most valuable insight]
Memorable quote: [one standout quote from the episode]

Write an email newsletter that:

1. Subject line options (5 variations)
   - Mix of curiosity-driven, benefit-driven, and direct approaches
   - Under 50 characters each

2. Preview text (the text that shows in inbox next to subject line)

3. Email body:
   - Opening hook that makes the reader care about the topic (not "Hey, new episode!")
   - The key insight or lesson in 2-3 paragraphs
   - The standout quote formatted as a callout
   - 3 bullet points of what they'll learn if they listen
   - CTA to listen (with link placeholder)
   - Personal sign-off

4. P.S. line (secondary CTA - share the episode, leave a review, etc.)

Keep the email under 300 words. Most people scan newsletters - make it scannable.`,
              result:
                'A newsletter email that drives listens while providing standalone value.',
              tip: 'The newsletter should give enough value that someone who doesn\'t click "listen" still got something useful. That\'s what keeps them subscribed.',
            },
            {
              id: 'pc-p-4-3',
              title: 'Key Quotes and Insights Extractor',
              task: 'Pull the most shareable quotes and insights from a transcript',
              prompt: `Extract the most shareable quotes and insights from this podcast transcript.

Episode title: [title]
Guest: [name, if applicable]
Show topic: [what this episode covers]

[Paste full transcript]

Extract:

1. Top 10 quotable moments
   - The exact quote (cleaned up for grammar but preserving the speaker's voice)
   - Who said it (host or guest)
   - Why it's quotable (surprising, insightful, controversial, practical)
   - Timestamp or approximate location

2. Top 5 key insights
   - The insight stated clearly in one sentence
   - The context around it (what led to this point)
   - How a listener could apply this insight

3. Top 3 stories or examples
   - Brief summary of the story
   - Why it resonated
   - How it could be repurposed (social post, blog example, newsletter hook)

4. Counterintuitive or surprising moments
   - Any moment where the guest or host said something unexpected
   - These make the best promotional content

5. Practical frameworks or steps
   - Any step-by-step advice or framework mentioned
   - Format as a numbered list

This is the raw material for all promotional content. Flag the top 3 most shareable items.`,
              result:
                'A curated collection of quotable moments and insights ready for promotion.',
              tip: 'This is the single most useful thing you can do after recording. Every quote, insight, and story becomes a social post, a newsletter hook, or a video clip. Extract first, then create.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Social Media Promotion',
          prompts: [
            {
              id: 'pc-p-5-1',
              title: 'Audiogram Script Generator',
              task: 'Create scripts for audiogram clips to promote episodes on social media',
              prompt: `Create audiogram scripts for social media promotion.

Episode title: [title]
Guest: [name, if applicable]
Platform targets: [Instagram Reels, TikTok, LinkedIn, Twitter/X]

Best moments from the episode (paste 3-5 compelling segments or quotes):
[Paste the moments with timestamps]

For each moment, create:

1. Audiogram version (30-60 seconds)
   - Start point and end point (trim the clip to the punchiest version)
   - On-screen text overlay (the key words that should appear on screen)
   - Caption for the post
   - Hashtags (5-8 relevant ones)

2. If the clip needs context, write:
   - A 1-2 sentence setup to show on screen before the audio plays
   - This helps viewers who don't know the full context

3. For each clip, suggest:
   - Best platform for this specific clip (not all clips work everywhere)
   - Visual direction (what should be on screen - waveform, headshot, quote text)
   - CTA overlay text ("Full episode in bio" / "Link in comments")

Create 5 audiogram packages total. Prioritize moments that:
- Are surprising or counterintuitive
- Tell a micro-story
- Give actionable advice
- Are emotionally compelling
- Work without needing the full episode context`,
              result:
                'Five ready-to-produce audiograms with scripts, captions, and visual direction.',
              tip: 'The best audiograms make someone think "I need to hear the rest of this conversation." Choose clips that create curiosity, not clips that give away the whole insight.',
            },
            {
              id: 'pc-p-5-2',
              title: 'Episode Launch Social Kit',
              task: 'Create a full social media launch kit for a new episode',
              prompt: `Create a social media launch kit for a new podcast episode.

Episode title: [title]
Episode number: [number]
Guest: [name and title, if applicable]
One-line description: [what this episode is about]
Key takeaway: [the single biggest insight]
Release date: [when it goes live]
Listen links: [Apple, Spotify, YouTube, or "link in bio"]

Generate a complete social launch kit:

Launch Day:
1. Instagram post caption (with carousel concept - 5 slides)
2. LinkedIn post (thought-leadership angle, 200-300 words)
3. Twitter/X thread (5-7 tweets breaking down key insights)
4. Instagram Story sequence (5 stories with polls and questions)

Day 2-3:
5. Quote graphic caption (for the best quote from the episode)
6. "Did you know" post (a surprising fact or stat from the episode)

Day 4-5:
7. Engagement post (ask a question related to the episode topic)
8. Behind-the-scenes post (recording process, guest connection, fun moment)

Day 6-7:
9. Recap or "in case you missed it" post
10. Testimonial or listener reaction post template

For each piece:
- Platform
- Format (text, image, carousel, video, story)
- Full caption with hook
- Visual direction
- Hashtags where appropriate
- CTA`,
              result:
                'A full week of promotional content from a single episode.',
              tip: 'Most podcasters promote an episode once on launch day and move on. This kit gives you 7-10 days of content per episode. That\'s the difference between a show that grows and one that plateaus.',
            },
            {
              id: 'pc-p-5-3',
              title: 'Growth Experiment Content Plan',
              task: 'Create social content specifically designed to grow podcast audience',
              prompt: `Create social media content designed to grow my podcast audience.

Show name: [podcast name]
Niche: [your topic area]
Current audience size: [approximate downloads per episode]
Target audience: [who you want to reach]
Platforms: [where you're active]
What's working: [your best-performing content type or topic]
What's not working: [what you've tried that hasn't driven listens]

Generate a 2-week growth-focused content plan:

Week 1 - Discovery content (reach new people):
- 3 posts designed to go viral or get shared widely
- 2 posts that demonstrate your podcast's unique value without asking anyone to listen
- 2 collaboration-friendly posts (designed to tag guests, complementary creators)

Week 2 - Conversion content (turn followers into listeners):
- 3 posts that create curiosity about specific episodes
- 2 posts with social proof (reviews, listener stories, guest credibility)
- 2 posts that give a taste of the podcast experience (clips, quotes, behind-the-scenes)

For each post:
- Platform
- Format
- Full caption concept
- Hook
- CTA
- Why this post specifically helps growth (the strategy behind it)

Also include:
- 3 cross-promotion tactics (podcast swaps, guest social, newsletter features)
- 2 community-building ideas (listener challenges, Q&A episodes)`,
              result:
                'A strategic 2-week growth plan that goes beyond "post more" to "post smarter."',
              tip: 'Growth comes from two things: reaching new people (discovery) and convincing them to listen (conversion). Most podcasters only do one or the other. This plan does both.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Audience Growth Strategy',
          prompts: [
            {
              id: 'pc-p-6-1',
              title: 'Podcast Growth Audit',
              task: 'Analyze current podcast performance and identify growth opportunities',
              prompt: `Run a growth audit on my podcast.

Show name: [podcast name]
Niche: [topic area]
Episodes published: [total number]
Publishing frequency: [weekly, bi-weekly, etc.]
Average downloads per episode: [number]
Download trend: [growing, flat, declining]
Best performing episode: [title and why you think it did well]
Worst performing episode: [title and your theory on why]
Current promotion: [what you do to promote each episode]
Revenue: [if applicable - sponsors, memberships, etc.]

Analyze and provide:

1. Health check
   - How do your numbers compare to podcasts at your stage?
   - Is your show growing, plateauing, or declining?
   - What does the trajectory suggest?

2. Content analysis
   - Based on your best/worst episodes, what patterns emerge?
   - What topics or formats should you do more of?
   - What should you stop doing?

3. Discovery bottlenecks
   - Where are you losing potential listeners?
   - Are your titles, descriptions, and cover art optimized?
   - How discoverable is your show in search?

4. Retention signals
   - Are listeners coming back for more episodes?
   - What could improve episode-to-episode retention?

5. Top 5 growth recommendations
   - Ranked by expected impact
   - Specific, actionable, with timeline
   - Include effort level for each (easy, medium, hard)

6. 90-day growth plan
   - Month 1: quick wins
   - Month 2: build systems
   - Month 3: scale what works`,
              result:
                'A clear-eyed assessment of your podcast\'s health with a concrete growth plan.',
              tip: 'Be honest about the numbers. The more accurate your input, the more useful the output. Run this quarterly to track progress.',
            },
            {
              id: 'pc-p-6-2',
              title: 'Listener Persona Builder',
              task: 'Build detailed listener personas to guide content and growth strategy',
              prompt: `Build listener personas for my podcast.

Show name: [podcast name]
Topic: [what you cover]
Your best guess about who listens: [rough demographics and interests]
Listener feedback you've received: [reviews, DMs, emails, comments]
Where your listeners find you: [social media, search, referrals, other podcasts]
Top 3 episodes by downloads: [titles - to reveal what resonates most]

Create 3 distinct listener personas:

For each persona:
1. Name, age, role/occupation
2. Why they listen to your show
3. When and where they listen (commute, workout, work, etc.)
4. What they're trying to achieve or learn
5. Their biggest frustrations related to your topic
6. Other podcasts they listen to
7. What would make them recommend your show to someone
8. What would make them stop listening
9. How they discovered your podcast
10. What content format they prefer (interviews, solo, panels, short vs long)

Then provide:
- Content strategy implications for each persona
- Which persona is your growth opportunity (underserved but reachable)
- How to create content that serves all three without alienating any
- Listener journey map (how someone goes from discovering your show to becoming a loyal listener)`,
              result:
                'Detailed listener personas that guide every content and marketing decision.',
              tip: 'Your podcast can\'t be for everyone. These personas help you make intentional choices about topics, guests, and tone. Refer back to them when planning any episode.',
            },
            {
              id: 'pc-p-6-3',
              title: 'Growth Experiment Generator',
              task: 'Generate specific, testable growth experiments for your podcast',
              prompt: `Generate growth experiments for my podcast.

Show name: [podcast name]
Current downloads per episode: [number]
Growth goal: [target downloads per episode and timeline]
What you've tried: [past growth tactics and results]
Available time: [hours per week you can dedicate to growth]
Budget: [$0, $0-100/month, $100-500/month]

Generate 10 specific growth experiments:

For each experiment:
1. Experiment name (catchy, clear)
2. Hypothesis ("If I do X, then Y should happen because Z")
3. Tactics (step-by-step what to do)
4. Time required (hours per week)
5. Cost (if any)
6. Expected impact (low, medium, high)
7. Time to see results (1 week, 1 month, 3 months)
8. How to measure success (specific metric)
9. Minimum viable test (the smallest version you can try first)

Organize into categories:
- Content experiments (episode format, length, topic)
- Distribution experiments (new platforms, cross-promotion)
- Community experiments (engagement, listener interaction)
- Technical experiments (SEO, metadata, posting schedule)

Prioritize by: highest expected impact with lowest effort.
Flag the top 3 experiments to start with this month.`,
              result:
                'A prioritized list of growth experiments with clear success metrics.',
              tip: 'Don\'t try all 10 at once. Pick 2-3, run them for 4-6 weeks, measure results, and then decide what to continue or try next. Growth is iterative.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Let\'s do the math on what your time is actually worth as a podcast producer.',
      timeTable: [
        {
          task: 'Episode planning and outlining',
          without: '1-2 hours',
          withAI: '15-20 minutes',
          saved: '1.5 hrs',
        },
        {
          task: 'Guest research and prep',
          without: '1-2 hours per guest',
          withAI: '15-20 minutes',
          saved: '1.5 hrs',
        },
        {
          task: 'Show notes and descriptions',
          without: '45-90 minutes',
          withAI: '10-15 minutes',
          saved: '1 hr',
        },
        {
          task: 'Transcript to blog post',
          without: '2-3 hours (or never)',
          withAI: '20-30 minutes',
          saved: '2 hrs',
        },
        {
          task: 'Social media promotion',
          without: '2-3 hours per episode',
          withAI: '20-30 minutes',
          saved: '2 hrs',
        },
        {
          task: 'Growth strategy',
          without: 'Rarely done',
          withAI: '30 minutes/month',
          saved: 'Now it happens',
        },
      ],
      totalRow: {
        task: 'Conservative total per episode',
        without: '-',
        withAI: '-',
        saved: '8-10 hrs/episode',
      },
      sections: [
        {
          heading: 'The Gap',
          paragraphs: [
            'The podcast space is more competitive than ever. There are 4 million podcasts, but the top 10% get 90% of the listens. The shows that break through aren\'t necessarily better - they\'re better promoted, more consistent, and more strategic about reaching new listeners.',
            'The gap isn\'t talent or content quality. It\'s production capacity. AI closes that gap.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You didn\'t start a podcast to write show notes and resize audiograms. You started it because you love conversations and ideas. AI handles the production assembly line so you can focus on what makes your show actually worth listening to - the conversations, the insights, and the human connection.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One episode\'s worth of show notes. See how much time comes back. Then expand.',
    },

    ch7: {
      intro:
        'Seven days to transform your podcast workflow. Follow it day by day. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 'pc-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 'pc-1-2', label: 'Create a free Perplexity account for guest research' },
            { id: 'pc-1-3', label: 'Bookmark this guide for quick reference' },
          ],
        },
        {
          day: 2,
          title: 'Plan Your Next Episode',
          duration: '20 min',
          items: [
            {
              id: 'pc-2-1',
              label: 'Run the Episode Outline prompt for your next episode topic',
            },
            {
              id: 'pc-2-2',
              label: 'Compare the AI outline to your usual prep process',
            },
          ],
        },
        {
          day: 3,
          title: 'Research a Guest',
          duration: '20 min',
          items: [
            {
              id: 'pc-3-1',
              label: 'Run the Guest Research Brief prompt for an upcoming or past guest',
            },
            {
              id: 'pc-3-2',
              label: 'Review the suggested questions and note which ones you wouldn\'t have thought of',
            },
          ],
        },
        {
          day: 4,
          title: 'Generate Show Notes',
          duration: '15 min',
          items: [
            {
              id: 'pc-4-1',
              label: 'Paste a recent episode transcript into the Show Notes prompt',
            },
            {
              id: 'pc-4-2',
              label: 'Review and refine the output - compare to your manual show notes process',
            },
          ],
        },
        {
          day: 5,
          title: 'Repurpose an Episode',
          duration: '25 min',
          items: [
            {
              id: 'pc-5-1',
              label: 'Run the Blog Post from Transcript prompt with a recent episode',
            },
            {
              id: 'pc-5-2',
              label: 'Extract key quotes using the Quotes and Insights Extractor',
            },
          ],
        },
        {
          day: 6,
          title: 'Build Your Promotion Kit',
          duration: '20 min',
          items: [
            {
              id: 'pc-6-1',
              label: 'Run the Episode Launch Social Kit for your next release',
            },
            {
              id: 'pc-6-2',
              label: 'Create audiogram scripts using the Audiogram Script Generator',
            },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Plan for Growth',
          duration: '15 min',
          items: [
            {
              id: 'pc-7-1',
              label: 'Which prompts saved you the most time this week?',
            },
            {
              id: 'pc-7-2',
              label: 'Run the Podcast Growth Audit to assess where you stand',
            },
            {
              id: 'pc-7-3',
              label: 'Share this guide with a fellow podcast producer who could use it',
            },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
