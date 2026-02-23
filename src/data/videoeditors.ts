import type { WorkbookData } from './types'

export const videoeditorsData = {
  professionId: 'videoeditors',
  heroLabel: 'Free Interactive Guide',
  heroTitle: 'AI for Video Editors & Filmmakers',
  heroDescription:
    'Everything you need to start using AI in your video production workflow - with real tools, workflows, and prompts for scripts, shot lists, subtitles, social cuts, and client management.',

  chapters: {
    ch1: {
      paragraphs: [
        'It is 11pm and you are still in the edit bay. The rough cut was supposed to be done yesterday, but the client added two interview segments and wants them woven into a narrative that "feels organic." You have 3 hours of raw footage, 47 clips on the timeline, and no transcription to search through. Finding that one quote the director loved takes 20 minutes of scrubbing.',
        'Your project folder has 16 versions of the same edit. V7_FINAL_v2_REVISED_clientnotes is the current one, probably. Subtitle files are due tomorrow for three languages you do not speak. The social media manager wants a 60-second Instagram cut, a 90-second YouTube Short, and a 15-second teaser - all from a 12-minute documentary piece. Each platform has different aspect ratios, different pacing expectations, and different text-safe zones.',
        'Meanwhile, a new client wants a project scope document before you start their corporate video series. Your last scope doc is from 8 months ago and was vague enough that it led to three rounds of free revisions. The client also wants a shot list for the first shoot day, and you have not written a shot list since film school.',
        'You became a video editor because you love the craft of storytelling through moving images - the rhythm of a cut, the power of the right music cue, the moment when a sequence clicks into place. Instead, you spend half your working hours on logistics, documentation, and reformatting the same content for different screens.',
      ],
      highlight:
        'What if the scripts, shot lists, subtitles, and client documents wrote themselves - and you spent that time where it matters, in the edit?',
      closingParagraph:
        'Not replacing your creative instincts or your editorial eye. Just eliminating the hours of writing, formatting, and administrative work that keep you out of the timeline.',
    },

    ch2: {
      sections: [
        {
          heading: 'What it\'s NOT',
          paragraphs: [
            'AI is not going to cut your film for you. It will not feel the rhythm of a scene, know when to hold on a reaction shot, or understand why that J-cut works and the L-cut does not. It does not have taste. It does not understand pacing the way someone who has watched a thousand edits does. And it is not going to replace the storytelling instinct that makes a good editor great.',
          ],
        },
        {
          heading: 'What it IS',
          paragraphs: [
            'Think of AI as your production assistant who also happens to be a fast writer, an instant transcriber, and a formatting machine. It has read every screenplay format guide, every production handbook, and every platform specification sheet. It works at 3am without complaining.',
            'Need a script formatted in proper screenplay structure? AI does it in 30 seconds. Need subtitle files generated from a transcript? Done in a minute. Need to adapt a 10-minute video into talking points for 5 different social platforms? AI generates the cut plan while you set up your timeline.',
            'The model is straightforward: AI handles the pre-production writing, the post-production documentation, and the reformatting busywork. You handle the creative decisions that actually define the final product.',
          ],
        },
        {
          heading: 'Why video editors have a unique advantage',
          paragraphs: [
            'You already think in structure - three-act narratives, scene transitions, pacing arcs, A-roll and B-roll relationships. That structural thinking makes you exceptionally good at directing AI. You know what a shot list needs to contain. You know what a good subtitle file looks like. You know what a client scope document should cover because you have been burned by the ones that did not.',
            'When non-editors use AI for video production tasks, they accept surface-level output. When editors use AI, they know exactly how to refine it because they understand the production pipeline from concept to delivery.',
          ],
        },
      ],
      keyInsight:
        'Your editorial instinct + AI\'s writing and formatting speed = more time in the timeline and less time in Google Docs. AI handles the paperwork. You handle the storytelling.',
    },

    ch3: {
      intro: 'Five tools that cover everything a video editor or filmmaker needs from AI. Start with the first two and expand as needed.',
      tools: [
        {
          name: 'ChatGPT',
          role: 'Your writing and planning partner',
          description:
            'Scripts, shot lists, project scopes, client emails, social media cut plans, and creative brainstorming',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Start here for all text-based production tasks',
          icon: 'chatgpt',
        },
        {
          name: 'Claude',
          role: 'Your long-form document and script writer',
          description:
            'Detailed screenplays, multi-episode series bibles, comprehensive project briefs, and narrative structure development',
          cost: 'free-tier',
          difficulty: 'easy',
          verdict: 'Best for long scripts and detailed documents',
          icon: 'claude',
        },
        {
          name: 'Descript',
          role: 'Your transcription and editing shortcut',
          description:
            'Automatic transcription, text-based video editing, subtitle generation, filler word removal, and studio-quality audio cleanup',
          cost: 'freemium',
          difficulty: 'easy-medium',
          verdict: 'Game-changer for interview and dialogue editing',
          icon: 'descript',
        },
        {
          name: 'Canva AI',
          role: 'Your thumbnail and graphics creator',
          description:
            'Video thumbnails, title cards, social media graphics, lower thirds templates, and presentation materials',
          cost: 'freemium',
          difficulty: 'easy',
          verdict: 'Best for quick graphics and thumbnails',
          icon: 'canva',
        },
        {
          name: 'Perplexity',
          role: 'Your research assistant',
          description:
            'Location scouting research, equipment specs, platform requirements, competitor video analysis, and trend research',
          cost: 'free',
          difficulty: 'easy',
          verdict: 'Best for production research with sources',
          icon: 'perplexity',
        },
      ],
      footer:
        'Start with ChatGPT or Claude for writing tasks and Descript for transcription and subtitles. That combination covers 80% of what you need. Add Canva AI for graphics and Perplexity for research when you are ready.',
    },

    ch4: {
      intro:
        'Here is where AI plugs into your actual production workflow. Each system eliminates hours of writing and formatting. Click to explore.',
      systems: [
        {
          id: 1,
          name: 'Script and Storyboard Writing',
          before:
            'You sit down to write a script for a 3-minute brand video. You stare at the blank page, watch the client\'s reference videos again, write an intro, delete it, write another intro, get distracted by the B-roll folder, and finally produce a rough draft 3 hours later. The storyboard is another 2 hours of sketching and describing shots.',
          after:
            'You give AI the project brief, the brand voice, and the key messages. It generates a formatted script draft in 2 minutes. You refine the creative angle, tighten the dialogue, and move on to the storyboard - which AI outlines shot by shot based on the script. Total writing time: 45 minutes.',
          flow: [
            'Gather the project brief, key messages, and tone references',
            'Run the script writing prompt with all project details',
            'AI generates a formatted script with scene descriptions and dialogue',
            'Refine the creative direction and tighten the language',
            'Use the script to generate a shot-by-shot storyboard outline',
          ],
          timeSaved: { without: '4-6 hours', withAI: '45 min - 1 hour' },
        },
        {
          id: 2,
          name: 'Shot List Creation',
          before:
            'You need a shot list for a two-day corporate shoot. You open a spreadsheet, list every scene from the script, break each into individual shots, estimate timing, note equipment needs, and plan the shooting order for efficiency. It takes the rest of your afternoon.',
          after:
            'You paste the script into AI and ask for a shot list. It generates every shot with framing, movement, equipment, and estimated duration. You adjust the sequence for your shooting schedule and add creative notes. A 4-hour task becomes 40 minutes.',
          flow: [
            'Finalize the script or treatment',
            'Run the shot list prompt with scene details and location information',
            'AI generates a comprehensive shot list with technical details',
            'Reorder shots for efficient shooting (group by location and setup)',
            'Add your creative notes and distribute to the production team',
          ],
          timeSaved: { without: '3-5 hours', withAI: '30-45 minutes' },
        },
        {
          id: 3,
          name: 'Subtitle and Caption Generation',
          before:
            'The video is locked. Now you need subtitles. You export the audio, run it through a transcription tool, clean up the transcript, manually time-code every line, format it as an SRT file, and check sync across the entire video. For a 10-minute video, this takes 2-3 hours. For multiple languages, multiply that by each language.',
          after:
            'Descript transcribes the video automatically. AI formats the transcript into properly timed SRT files with character limits per line, reading speed optimization, and platform-specific formatting. You review and adjust. A 3-hour task becomes 30 minutes.',
          flow: [
            'Run the video through Descript for automatic transcription',
            'Clean up the transcript for accuracy',
            'Use AI to format into SRT with proper line breaks and timing',
            'Review subtitle sync against the video',
            'Export SRT files for each platform',
          ],
          timeSaved: { without: '2-4 hours per language', withAI: '20-30 minutes' },
        },
        {
          id: 4,
          name: 'Social Media Cut Planning',
          before:
            'The client wants the 12-minute video repurposed for Instagram, YouTube Shorts, TikTok, LinkedIn, and Twitter. Each platform has different specs, different audience expectations, and different optimal lengths. You watch the full video again, note timestamp ranges for each potential clip, and build separate sequences. An entire day disappears.',
          after:
            'You paste the transcript and AI identifies the strongest moments for each platform - with timestamps, suggested hooks, aspect ratio notes, and text overlay recommendations. You drop the timestamps into your timeline and cut. A full day of planning becomes 1 hour.',
          flow: [
            'Provide the video transcript with timestamps',
            'Run the social media cut planning prompt',
            'AI identifies best clips per platform with specs and rationale',
            'Drop timestamps into your editing timeline',
            'Cut, format, and export for each platform',
          ],
          timeSaved: { without: '6-8 hours', withAI: '1-2 hours' },
        },
        {
          id: 5,
          name: 'Client Feedback Management',
          before:
            'The client sends feedback in a 900-word email mixing technical notes with creative opinions with questions about budget. Some notes contradict each other. Some reference the wrong timecodes. Parsing it into actionable edit notes takes 30 minutes before you even open the project. Then you need to respond professionally to each point.',
          after:
            'You paste the client feedback and AI organizes it into categorized, actionable edit notes - sorted by priority, with conflicting notes flagged and clarifying questions drafted. Your response email is written in 2 minutes.',
          flow: [
            'Paste the raw client feedback into AI',
            'AI categorizes notes: editorial, technical, creative, budget, unclear',
            'Review the organized notes and flag items that need clarification',
            'AI drafts a professional response addressing each point',
            'Apply the edits from the organized list',
          ],
          timeSaved: { without: '1-2 hours per feedback round', withAI: '15-20 minutes' },
        },
        {
          id: 6,
          name: 'Project Brief Documentation',
          before:
            'A new client wants to know your process, timeline, and pricing before committing to a project. You pull up your last scope document, realize half of it does not apply, and spend 3 hours rewriting it from scratch. The document is never as thorough as it should be because you just want to start the creative work.',
          after:
            'AI generates a comprehensive project scope document with phases, deliverables, revision policies, timelines, and pricing structure. You customize it for the specific project in 30 minutes. No more vague scopes that lead to scope creep.',
          flow: [
            'Define the project type, deliverables, and client expectations',
            'Run the project scope prompt with your pricing and process',
            'AI generates a complete scope document with all necessary sections',
            'Customize for this specific project and client',
            'Send for client review and signature',
          ],
          timeSaved: { without: '3-5 hours', withAI: '30-45 minutes' },
        },
      ],
    },

    ch5: {
      intro:
        'Ready-to-use prompts for every core video production task. Click to reveal, fill in the brackets, and get back to the timeline faster.',
      groups: [
        {
          systemId: 1,
          systemName: 'System 1 - Scripts & Storyboards',
          prompts: [
            {
              id: 've-p-1-1',
              title: 'Screenplay Formatting and Script Draft',
              task: 'Write a properly formatted video script',
              prompt: `Write a video script in proper screenplay format.

Project type: [brand video, documentary, short film, explainer, YouTube video, commercial, etc.]
Duration target: [minutes]
Tone: [e.g., cinematic, conversational, corporate, humorous, emotional]
Audience: [who will watch this]
Key messages: [the 2-3 things the viewer must take away]
Brand/client voice: [describe the tone they want]

Reference videos (if any): [describe what the client showed you as examples]

Additional context:
- Talent: [narrator, on-camera host, interview subjects, actors]
- Setting: [where this takes place]
- Visual style: [describe the look - handheld, cinematic, animated, mixed]
- Music direction: [upbeat, cinematic score, ambient, no music]
- Budget level: [affects how ambitious the visual descriptions should be]

Write the script with:
1. Scene headings (INT/EXT, location, time of day)
2. Action/visual descriptions (what we see on screen)
3. Dialogue or narration (properly formatted)
4. Parenthetical direction for talent (tone, pace)
5. B-roll suggestions in brackets where applicable
6. Approximate timing notes per section

Also provide:
- Estimated total run time
- 3 alternative opening hooks (different creative approaches)
- Key visual moments that will define the piece
- Music cue suggestions at major transitions

Make the visual descriptions specific enough that a director or DP can plan shots from the script.`,
              result: 'A production-ready script in proper format with timing estimates and visual direction.',
              tip: 'The visual descriptions are as important as the dialogue. Write them like you are describing what the camera sees, not what happens in the story. Editors think in shots - make the script think in shots too.',
            },
            {
              id: 've-p-1-2',
              title: 'Storyboard Shot Descriptions',
              task: 'Generate detailed storyboard panels from a script',
              prompt: `Generate storyboard panel descriptions from the following script.

Script:
[Paste your finalized or near-final script]

Style: [live action, animation, mixed media]
Aspect ratio: [16:9, 9:16, 1:1, 2.35:1]
Number of panels needed: [or say "as many as the script requires"]

For each storyboard panel provide:
1. Panel number
2. Scene reference (which script section)
3. Shot type (wide, medium, close-up, extreme close-up, aerial, POV, etc.)
4. Camera angle (eye level, low angle, high angle, dutch, bird's eye)
5. Camera movement (static, pan, tilt, dolly, tracking, crane, handheld)
6. Frame description - describe exactly what is in the frame as if you are looking at the image
7. Action - what happens during this shot
8. Audio - dialogue, narration, sound effects, music
9. Duration estimate (seconds)
10. Transition to next panel (cut, dissolve, wipe, match cut, etc.)
11. Notes for the DP or animator

Also provide:
- Visual rhythm notes - where the pacing should speed up or slow down
- Key frames - which 3-5 panels are the most important visual moments
- Equipment notes - any shots that require specific gear (stabilizer, drone, macro lens, etc.)

Format as a numbered panel list that can be used alongside thumbnail sketches.`,
              result: 'A complete storyboard document with shot-by-shot descriptions, technical notes, and timing.',
              tip: 'Print this and sketch rough thumbnails next to each panel description. Even stick figures help a production team understand framing and composition faster than text alone.',
            },
            {
              id: 've-p-1-3',
              title: 'Interview Question Set',
              task: 'Generate interview questions for a documentary or brand video',
              prompt: `Generate interview questions for a video production.

Project type: [documentary, brand testimonial, corporate profile, educational, etc.]
Interviewee: [name and role - e.g., "CEO of a fintech startup" or "patient who used the product"]
Video purpose: [what story are we trying to tell]
Target audience: [who watches this video]
Desired sound bites: [what kind of quotes do we need for the edit]
Interview duration: [how long the interview will be]
Tone: [casual conversation, formal interview, emotional storytelling]

Generate:
1. Warm-up questions (3) - easy questions to make them comfortable on camera
2. Background questions (3-4) - who they are and context for the viewer
3. Core story questions (5-7) - the meat of what we need for the edit
4. Emotional depth questions (3-4) - questions that lead to genuine, unscripted moments
5. Sound bite questions (3) - questions designed to produce quotable responses
6. Closing questions (2) - wrap up and catch anything you missed

For each question:
- The question itself (conversational phrasing)
- What you are hoping they say (the ideal sound bite)
- Follow-up question if they give a short answer
- Note on whether to keep the camera rolling after they "finish"

Also provide:
- Technical setup notes - where to seat them, lighting considerations, background
- Interviewer tips - eye contact protocol, when to stay silent, when to redirect
- The 5 questions most likely to produce usable sound bites (mark with asterisks)

Order the questions for natural conversation flow, not by importance.`,
              result: 'A complete interview guide with questions, follow-ups, and production notes.',
              tip: 'The best sound bites come from follow-up questions, not prepared ones. Use "Tell me more about that" and "What did that feel like?" more than your scripted questions. Keep the camera rolling for 10 seconds after every answer.',
            },
          ],
        },
        {
          systemId: 2,
          systemName: 'System 2 - Shot Lists',
          prompts: [
            {
              id: 've-p-2-1',
              title: 'Shot-by-Shot Production Breakdown',
              task: 'Create a comprehensive shot list from a script or treatment',
              prompt: `Create a detailed shot list for the following production.

Script or treatment:
[Paste your script or describe the video scene by scene]

Production details:
- Shoot days: [how many days]
- Locations: [list all locations]
- Talent: [who is on camera]
- Crew size: [DP, gaffer, sound, etc.]
- Equipment available: [camera, lenses, stabilizer, drone, lighting, etc.]

For each shot, provide:
1. Shot number (sequential)
2. Scene/segment reference
3. Location
4. Shot description (what we see)
5. Shot size (WS, MS, CU, ECU, etc.)
6. Camera movement (static, pan, dolly, handheld, Steadicam, drone)
7. Lens suggestion (wide, normal, telephoto, macro)
8. Lighting notes (natural, key light direction, mood)
9. Audio (dialogue, ambient, wild sound, music playback)
10. Talent/props in frame
11. Estimated duration on screen (seconds)
12. Setup time estimate (minutes)
13. Priority (must-have / nice-to-have / bonus)

Then provide:
- Shooting schedule by location (group shots to minimize setup changes)
- Golden hour shots flagged with time windows
- Equipment checklist by location
- Estimated total shooting time per location
- Rain/weather contingency shots (if applicable)

Format as a table that can be printed and used on set.`,
              result: 'A production-ready shot list organized for efficient shooting with technical details for every shot.',
              tip: 'Always sort the shot list by location and setup, not by story order. You shoot for efficiency, you edit for story. A shot list sorted by script order wastes hours of setup time.',
            },
            {
              id: 've-p-2-2',
              title: 'B-Roll Shot List Generator',
              task: 'Generate a B-roll shot list for a specific project',
              prompt: `Generate a comprehensive B-roll shot list for the following video project.

Project type: [documentary, corporate, brand, event, travel, product, etc.]
Subject: [what the video is about]
A-roll content: [what the main footage covers - interviews, presenter, etc.]
Locations available: [where you can shoot]
Visual style: [cinematic, run-and-gun, stylized, natural, etc.]
Edit style: [fast-paced, contemplative, journalistic, polished]

Generate B-roll shots organized by category:

1. Establishing shots (5-7):
   - Wide and environmental shots that set the scene

2. Detail shots (8-10):
   - Close-ups that add texture and intimacy

3. Process shots (5-7):
   - Action sequences that show how things work

4. Transition shots (5-7):
   - Shots designed to connect scenes or cover jump cuts

5. Atmospheric shots (5-7):
   - Mood-setting footage (light, texture, environment)

6. People shots (5-7):
   - Candid moments, reactions, interactions (non-interview)

For each shot:
- Shot description
- Framing (wide, medium, close, macro)
- Movement (static, slow pan, tracking, handheld)
- Estimated on-screen use (where in the edit this would go)
- Priority (essential / supporting / bonus)

Then provide:
- A prioritized "must-get" list of the 10 most important B-roll shots
- Tips for each location on what to capture
- Time-of-day recommendations for the best looking shots

This should be printable as a reference sheet for the shoot day.`,
              result: 'A categorized B-roll shot list with priorities and creative direction.',
              tip: 'Shoot 3x more B-roll than you think you need. You will always wish you had more options in the edit. The "bonus" shots on this list often become the best moments in the final cut.',
            },
            {
              id: 've-p-2-3',
              title: 'Location Scout Notes Template',
              task: 'Create a location scouting report template',
              prompt: `Create a location scout report for the following shoot.

Location: [address or description]
Project: [what video is being shot here]
Scout date: [when you visited or will visit]
Shoot date: [when the production will happen]

Generate a scouting report template with:

1. Location overview:
   - Address and access directions
   - Parking availability (crew vehicles and gear trucks)
   - Load-in path (from vehicle to shooting area)
   - Contact person and phone number: [TBD]

2. Shooting areas:
   - For each potential setup area:
     - Description and dimensions
     - Natural light assessment (direction, quality, time-of-day changes)
     - Power availability (outlets, distance, generator needs)
     - Sound environment (ambient noise sources, echo, traffic patterns)
     - Background assessment (what is behind the subject)
     - Ceiling height and rigging options

3. Technical considerations:
   - Best shooting times based on light
   - Noise schedule (garbage trucks, school bells, traffic patterns)
   - Weather exposure and backup indoor options
   - Internet/cell service (for remote monitoring or live streaming)

4. Logistics:
   - Restroom access
   - Meals and catering options nearby
   - Nearest hardware store and camera rental house
   - Permit requirements (if known): [TBD]
   - Insurance requirements: [TBD]

5. Creative opportunities:
   - Unique visual elements to feature
   - B-roll opportunities at this location
   - Potential framing options

6. Concerns and risks:
   - Anything that could go wrong
   - Mitigation plan for each concern

Include a checklist of items to photograph during the scout visit.`,
              result: 'A professional location scout report that prevents production day surprises.',
              tip: 'Photograph everything during the scout - every outlet, every window, every background. Take photos at the same time of day you plan to shoot. Light changes everything.',
            },
          ],
        },
        {
          systemId: 3,
          systemName: 'System 3 - Subtitles & Captions',
          prompts: [
            {
              id: 've-p-3-1',
              title: 'SRT Subtitle File Formatter',
              task: 'Format a transcript into a properly structured SRT subtitle file',
              prompt: `Format the following transcript into a properly structured SRT subtitle file.

Transcript:
[Paste the transcript with timestamps if available, or raw text]

Video duration: [total length]
Platform: [YouTube, Vimeo, social media, broadcast, etc.]

Formatting rules:
1. Maximum 2 lines per subtitle
2. Maximum 42 characters per line (including spaces)
3. Minimum display time: 1 second
4. Maximum display time: 7 seconds
5. Reading speed: maximum 21 characters per second
6. Line breaks at natural pauses (not mid-phrase)
7. Each subtitle should be a complete thought when possible

Format as:
[Sequential number]
[Timecode start] --> [Timecode end]
[Subtitle text line 1]
[Subtitle text line 2 if needed]

[blank line between entries]

Additional requirements:
- Indicate speaker changes with [Speaker Name]: for multi-person content
- Include [music] or [sound effect] descriptions for accessibility
- Mark any foreign language phrases
- Flag any sections where the transcript might need verification

After the SRT content, provide:
- Total subtitle count
- Average reading speed (characters per second)
- Any lines that exceed recommended character limits
- Suggestions for lines that are hard to read at the current timing

Note: If timestamps are not provided, create estimated timecodes based on average speaking pace for the platform.`,
              result: 'A properly formatted SRT file ready for upload or import into your editing software.',
              tip: 'Always review subtitle timing against the actual video. AI gets the text right but the timing needs human eyes - especially for fast speakers and emotional pauses.',
            },
            {
              id: 've-p-3-2',
              title: 'Caption Style Guide',
              task: 'Create a caption and subtitle style guide for a project or brand',
              prompt: `Create a caption and subtitle style guide for [brand/project/channel name].

Content type: [YouTube channel, corporate videos, documentary series, social content, etc.]
Brand voice: [describe the tone]
Primary audience: [who watches]
Languages: [primary language and any secondary languages]
Platforms: [where the content is published]

Generate a comprehensive style guide covering:

1. Text formatting:
   - Font recommendation (for burned-in captions)
   - Font size and positioning
   - Background/shadow style for readability
   - Color (standard and for emphasis)
   - Safe zones by platform (where text should not go)

2. Writing rules:
   - Capitalization style (sentence case, title case, all caps)
   - Punctuation rules (periods, commas, ellipsis usage)
   - Number formatting (numerals vs. written out)
   - Abbreviation rules
   - Profanity handling

3. Timing rules:
   - Minimum and maximum display duration
   - Characters per second target
   - Pause between subtitles
   - How to handle fast dialogue
   - How to handle overlapping speakers

4. Special content:
   - Music lyrics formatting
   - Sound effects descriptions
   - Foreign language handling
   - On-screen text that duplicates captions
   - Brand names and product names

5. Accessibility considerations:
   - Speaker identification for multi-person content
   - Non-speech audio descriptions
   - Emphasis indicators (italics, caps, bold)

6. Platform-specific notes:
   - YouTube closed captions vs. burned-in
   - Instagram and TikTok text overlay best practices
   - LinkedIn auto-caption considerations

Format as a reference document the whole team can use.`,
              result: 'A professional caption style guide that ensures consistency across all video content.',
              tip: 'Create this once and share it with everyone who touches captions. Inconsistent subtitles make professional content look amateur faster than almost any other mistake.',
            },
            {
              id: 've-p-3-3',
              title: 'Transcript Cleanup and Formatting',
              task: 'Clean up a raw auto-generated transcript',
              prompt: `Clean up and format the following auto-generated transcript.

Raw transcript:
[Paste the auto-generated transcript from Descript, YouTube, or another tool]

Video type: [interview, narration, conversation, presentation, etc.]
Number of speakers: [how many people are talking]
Speaker names: [list them if known]

Clean up the transcript by:
1. Fixing obvious transcription errors (misheard words, homophones)
2. Adding proper punctuation and capitalization
3. Breaking into logical paragraphs
4. Identifying and labeling speakers
5. Removing filler words (um, uh, like, you know) - flag them but remove from clean version
6. Fixing run-on sentences into readable segments
7. Adding timestamps at the start of each paragraph or speaker change

Provide two versions:
Version A - Verbatim clean (exactly what was said, with proper formatting)
Version B - Editorial clean (tightened for readability - suitable for blog post, article, or summary)

Also provide:
- A list of words or phrases that might be incorrect (where the AI transcript was likely wrong)
- Key quotes - the 5-10 strongest quotes from the transcript
- Content summary - a 3-4 sentence summary of what the transcript covers
- Suggested chapter markers with timestamps for long-form content

Flag any sections where the audio was likely unclear and the transcript needs manual verification.`,
              result: 'A cleaned and formatted transcript in two versions with highlighted key quotes.',
              tip: 'The verbatim version is for subtitles and legal records. The editorial version is for repurposing content into articles, show notes, or social posts. Always keep both.',
            },
          ],
        },
        {
          systemId: 4,
          systemName: 'System 4 - Social Media Cuts',
          prompts: [
            {
              id: 've-p-4-1',
              title: 'Platform-Specific Edit Plan',
              task: 'Create a social media repurposing plan from a long-form video',
              prompt: `Create a social media repurposing plan from this video.

Video title: [name]
Full video duration: [length]
Transcript with timestamps:
[Paste the transcript or key sections with timecodes]

Platforms to create content for:
- Instagram Reels (30-90 seconds, 9:16)
- YouTube Shorts (under 60 seconds, 9:16)
- TikTok (15-60 seconds, 9:16)
- LinkedIn (30 seconds - 3 minutes, 16:9 or 1:1)
- Twitter/X (under 2:20, 16:9)

For each platform, identify and plan:

1. Clip selection (3 clips per platform):
   - Start timecode and end timecode from the original
   - Why this moment works for this platform
   - Suggested hook (first 3 seconds) - what text or visual grabs attention
   - Text overlay suggestions
   - CTA for this clip (follow, subscribe, link in bio, comment)

2. Format specifications:
   - Aspect ratio
   - Safe zones for text overlays
   - Maximum file size
   - Recommended export settings

3. Caption:
   - Platform-appropriate caption text
   - Hashtags (where applicable)
   - Cross-promotion language (directing to full video)

4. Posting strategy:
   - Recommended posting order across platforms
   - Best time to post (general guidance)
   - How to stagger releases over days/weeks

Provide a total content count at the end - how many individual posts this one video produces.`,
              result: 'A complete social media repurposing plan that turns one video into 15+ pieces of platform-specific content.',
              tip: 'The first 3 seconds determine whether someone keeps watching. Every clip should start with the most compelling moment, not a build-up. Move the hook to the front, even if it means restructuring the clip.',
            },
            {
              id: 've-p-4-2',
              title: 'Vertical Video Reframe Guide',
              task: 'Create a reframing guide for converting 16:9 to 9:16',
              prompt: `Create a reframing guide for converting this horizontal video to vertical format.

Original video: [description]
Original aspect ratio: [16:9, 2.35:1, etc.]
Target aspect ratio: [9:16 for Reels/Shorts/TikTok]
Content type: [talking head, interview, documentary, b-roll heavy, action, etc.]
Key subjects: [what needs to stay in frame]

For the selected clips (or full video), provide:

1. Shot-by-shot reframe notes:
   - Timecode range
   - What is in the original frame
   - Recommended crop position (center, left-biased, right-biased)
   - What gets cropped out and whether it matters
   - Whether motion tracking is needed (subject moves)
   - Text overlay opportunities in the empty vertical space

2. Problem shots to watch for:
   - Wide shots where the subject is too small in vertical
   - Two-person shots where someone gets cropped
   - Text or graphics in the original that fall outside vertical safe zone
   - B-roll that loses its impact when cropped

3. Enhancement opportunities:
   - Where to add text overlays for context
   - Where split-screen (stacked) could work
   - Where a zoom-in improves the vertical framing
   - Where background blur could help focus attention

4. Technical notes:
   - Export resolution for each platform
   - Frame rate consistency
   - Audio adjustments for mobile playback (louder, compressed)

Format as a shot-by-shot reference guide.`,
              result: 'A detailed reframing guide for converting horizontal content to vertical without losing the story.',
              tip: 'Most reframing problems can be solved by zooming into 80% of the frame and tracking the subject. Do a full playback of the vertical version on your phone before exporting.',
            },
            {
              id: 've-p-4-3',
              title: 'Video Thumbnail and Title Generator',
              task: 'Generate thumbnail concepts and title options for video content',
              prompt: `Generate thumbnail concepts and title options for the following video.

Video topic: [what the video is about]
Platform: [YouTube, Vimeo, course platform, etc.]
Content type: [tutorial, vlog, interview, documentary, brand, etc.]
Target audience: [who you want to click]
Video length: [duration]
Key visual from the video: [describe the best frame or moment]
Brand style: [describe your channel or brand aesthetic]
Competitor reference: [channels with thumbnails you admire]

Generate:

1. Title options (10):
   - 5 curiosity-driven titles (make them need to click)
   - 3 benefit-driven titles (what they learn or get)
   - 2 controversial or hot-take titles (strong opinion)
   - Keep all under 60 characters
   - Include keywords naturally for SEO
   - Mark your top 3 with reasoning

2. Thumbnail concepts (5):
   - Visual description (what is in the frame)
   - Text overlay (1-4 words maximum)
   - Color scheme (background and text)
   - Emotion on face (if applicable)
   - Visual contrast strategy (what makes it pop in a feed of thumbnails)
   - How it pairs with each of your top 3 titles

3. A/B test plan:
   - Which 2 thumbnail concepts to test first
   - What each test measures
   - When to call a winner

4. Platform-specific notes:
   - YouTube: Title and thumbnail SEO considerations
   - Social: How to adapt the thumbnail for each platform's preview crop

Rank all 5 thumbnail concepts by predicted click-through rate and explain your reasoning.`,
              result: 'A complete title and thumbnail strategy with multiple concepts and testing recommendations.',
              tip: 'The thumbnail should tell a different part of the story than the title. Together, they should create a knowledge gap the viewer can only close by clicking.',
            },
          ],
        },
        {
          systemId: 5,
          systemName: 'System 5 - Client Feedback',
          prompts: [
            {
              id: 've-p-5-1',
              title: 'Revision Response Template',
              task: 'Organize client feedback and draft a professional response',
              prompt: `Organize the following client feedback into actionable edit notes and draft a response.

Client feedback:
[Paste the raw client email, document, or notes - include timecodes if they provided them]

Project: [name and current version]
My role: [editor, director, producer, etc.]
Revision round: [first review, second review, etc.]
Remaining revision rounds in contract: [number]

Organize the feedback into:

1. Editorial changes (story, pacing, structure):
   - List each note with timecode reference
   - Priority: critical / important / nice-to-have
   - Your estimate of time required per change

2. Technical changes (color, audio, graphics, titles):
   - List each note with timecode reference
   - Priority level
   - Time estimate

3. New additions requested (content not in the current cut):
   - List each request
   - Flag whether this is within scope or a new request
   - Time and cost estimate for out-of-scope items

4. Contradictory notes:
   - Flag any notes that conflict with each other
   - Suggest which direction to go and why

5. Unclear notes:
   - List anything that needs clarification
   - Draft a specific question for each

Draft a professional response email:
- Thank them for the feedback
- Confirm what you will address in this revision
- Flag out-of-scope items with a polite explanation
- Ask clarifying questions for unclear items
- Provide a timeline for the next version delivery
- Note remaining revision rounds

Tone: Professional, collaborative, and organized. Show you heard every note.`,
              result: 'Organized edit notes with prioritization and a professional response email ready to send.',
              tip: 'Always organize feedback before responding. Clients respect editors who treat their notes seriously. And by flagging out-of-scope items immediately, you prevent scope creep from becoming an unpaid habit.',
            },
            {
              id: 've-p-5-2',
              title: 'Client Update Email',
              task: 'Draft a project status update for the client',
              prompt: `Draft a project status update email for a video production client.

Project: [name]
Client contact: [name]
Current phase: [pre-production, production, post-production, delivery]

Progress since last update:
[List what has been completed]

Currently in progress:
[List what is being worked on now]

What is next:
[List upcoming tasks]

Any blockers or needs:
[List anything you need from the client - footage, approvals, assets, decisions]

Timeline status:
- Original delivery date: [date]
- Current status: [on track / ahead / behind by X days]
- Reason for any delay: [if applicable]
- Updated delivery date: [if changed]

Budget status: [on track / adjustment needed / N/A]

Write a professional email that:
1. Leads with the most exciting progress (a preview, a milestone)
2. Clearly lists completed items
3. States what is happening next with dates
4. Highlights any action items the client needs to do (with deadlines)
5. Addresses timeline honestly if there are delays
6. Ends with a positive note about the project

Keep it under 250 words. Producers and marketing managers do not read long status emails.`,
              result: 'A concise, professional status update that keeps the client informed and moves the project forward.',
              tip: 'Include a frame grab or 10-second preview clip with every update email. Clients who can see progress are happier clients, even when timelines slip.',
            },
            {
              id: 've-p-5-3',
              title: 'Post-Project Wrap Report',
              task: 'Create a project wrap report for internal records and client deliverables',
              prompt: `Create a project wrap report for the following video production.

Project: [name]
Client: [name]
Project type: [corporate, brand, documentary, event, social content, etc.]
Duration of engagement: [start date to delivery date]
Deliverables: [list all final deliverables]

Project data:
- Total footage shot: [hours]
- Total editing hours: [hours]
- Revision rounds: [number]
- Final deliverable specifications: [resolution, codec, duration, etc.]
- Platforms delivered for: [list]

Generate a wrap report with:

1. Project summary:
   - Brief description of the project and objectives
   - Key creative decisions and rationale
   - Final deliverable list with specifications

2. Production metrics:
   - Timeline comparison (planned vs. actual)
   - Budget comparison (planned vs. actual)
   - Revision history summary

3. Asset archive:
   - Where project files are stored
   - File organization structure
   - Raw footage retention policy
   - What the client received vs. what is archived

4. Lessons learned:
   - What went well (to replicate)
   - What could improve (to adjust next time)
   - Client communication notes (preferences, decision-making style)

5. Future opportunities:
   - Content that could be repurposed
   - Follow-up projects suggested
   - Seasonal or timely content ideas based on this project

6. Client feedback summary:
   - Key quotes from client about the work
   - Testimonial request draft (if appropriate)

Format as a professional internal document that can also have a client-facing version.`,
              result: 'A comprehensive wrap report for project records, portfolio building, and client relationship management.',
              tip: 'Write this within a week of delivery while everything is fresh. A good wrap report saves you hours on the next similar project and gives you ready-made case study material for your portfolio.',
            },
          ],
        },
        {
          systemId: 6,
          systemName: 'System 6 - Project Briefs',
          prompts: [
            {
              id: 've-p-6-1',
              title: 'Project Scope Document',
              task: 'Create a comprehensive project scope for a video production',
              prompt: `Create a project scope document for the following video production.

Project type: [corporate video, brand content, documentary, event, social series, etc.]
Client: [type - startup, enterprise, agency, non-profit, individual]
Deliverables: [list all videos and formats expected]
Estimated duration: [of final deliverables]
Budget range: [if known]
Timeline: [deadline or preferred schedule]

My services and rates:
- Pre-production: [included / billed separately at $X/hr]
- Production/shoot days: [rate per day]
- Post-production editing: [rate per hour or per project]
- Revisions included: [number of rounds]
- Additional revision rate: [per round or per hour]

Write a scope document with:

1. Project overview:
   - What we are creating and why
   - Target audience
   - Distribution platforms

2. Scope of work by phase:
   Phase 1 - Pre-Production:
   - Script or treatment development
   - Shot list and storyboard
   - Location scouting coordination
   - Talent coordination
   - Deliverables: [list]

   Phase 2 - Production:
   - Shoot days included
   - Crew provided vs. client-provided
   - Equipment included
   - Deliverables: [list]

   Phase 3 - Post-Production:
   - Editing (rough cut, fine cut, final)
   - Color grading
   - Audio mixing
   - Motion graphics (if applicable)
   - Music licensing (who is responsible)
   - Subtitles/captions
   - Revision rounds included
   - Deliverables: [list with specifications]

3. What is NOT included:
   - Clearly list exclusions to prevent scope creep
   - Additional services available at extra cost

4. Timeline with milestones

5. Investment summary:
   - Phase-by-phase pricing
   - Payment schedule
   - Late payment terms

6. Terms:
   - Revision policy
   - Cancellation policy
   - File ownership and licensing
   - Credit and portfolio usage

7. Signature blocks

Professional but clear language. A client who has never hired a video editor should understand every section.`,
              result: 'A complete project scope document that protects your time and sets clear client expectations.',
              tip: 'The "What is NOT included" section is the most important part of this document. Every scope creep problem traces back to something that was not explicitly excluded.',
            },
            {
              id: 've-p-6-2',
              title: 'Creative Brief Template',
              task: 'Create a creative brief for a new video project',
              prompt: `Create a creative brief for the following video project.

Client: [name or type]
Project: [what they need]
Background: [why they need this video]

Fill out the creative brief with prompts for the following sections:

1. Project objective:
   - What is the single most important goal of this video?
   - How will success be measured?

2. Target audience:
   - Primary audience: [demographics, psychographics, where they consume video]
   - What does this audience currently think/feel about the subject?
   - What should they think/feel after watching?

3. Key message:
   - If the viewer remembers only one thing, what should it be?
   - Supporting messages (2-3)

4. Tone and style:
   - Reference videos (from client or suggested): [list]
   - Describe the tone in 3-5 adjectives
   - What this video should NOT feel like

5. Distribution plan:
   - Primary platform: [where it lives]
   - Secondary platforms: [where it gets shared]
   - Paid promotion: [yes/no, budget if known]
   - Organic strategy: [how it gets discovered]

6. Technical requirements:
   - Duration targets by platform
   - Aspect ratios needed
   - Subtitle requirements
   - Accessibility requirements
   - Brand guidelines to follow

7. Creative constraints:
   - Must-include elements (logos, taglines, legal disclaimers)
   - Must-avoid elements (competitor references, specific topics)
   - Approval chain (who signs off at each stage)

8. Timeline and budget:
   - Key dates (concept approval, shoot dates, draft reviews, final delivery)
   - Budget parameters

Format as a fillable brief template with guidance notes for each section.`,
              result: 'A professional creative brief that captures everything needed to plan and execute the project.',
              tip: 'Send this to the client before your kickoff meeting. Their written answers are more thoughtful than on-the-spot responses, and it makes the meeting twice as productive.',
            },
            {
              id: 've-p-6-3',
              title: 'Pricing Guide and Packages',
              task: 'Create a pricing guide for video production services',
              prompt: `Create a pricing guide for my video production services.

My services:
- Types of video I produce: [list - corporate, brand, social, event, etc.]
- Experience level: [years in industry]
- Equipment I own: [key gear]
- Team: [solo, small crew, network of freelancers]
- Market: [local, regional, national]

My current rates:
- Day rate: [$X]
- Half-day rate: [$X]
- Hourly editing rate: [$X]
- [Any other rates]

Create a pricing guide with:

1. Service packages (3 tiers):
   Package 1 - [Essential/Starter]:
   - What is included
   - Best for: [project types]
   - Price range
   - Timeline

   Package 2 - [Standard/Professional]:
   - What is included
   - Best for: [project types]
   - Price range
   - Timeline

   Package 3 - [Premium/Full Production]:
   - What is included
   - Best for: [project types]
   - Price range
   - Timeline

2. Add-on services with pricing:
   - Additional shoot days
   - Drone footage
   - Motion graphics
   - Rush delivery
   - Additional revision rounds
   - Social media cuts
   - Annual retainer option

3. What is always included in every package

4. What is never included (and why)

5. FAQ section:
   - Common pricing questions with honest answers
   - How to decide which package is right
   - When custom quotes are necessary

Format as a professional document or webpage that can be sent to prospective clients.`,
              result: 'A clear, professional pricing guide that simplifies the sales conversation and positions your services effectively.',
              tip: 'Presenting packages instead of hourly rates shifts the conversation from "how many hours" to "what do I get." Clients prefer knowing the total investment upfront.',
            },
          ],
        },
      ],
    },

    ch6: {
      introLine: 'Here is what changes when AI handles the writing and documentation in your video production workflow.',
      timeTable: [
        {
          task: 'Script writing',
          without: '4-6 hours',
          withAI: '45 min - 1 hour',
          saved: '3-5 hrs',
        },
        {
          task: 'Shot list creation',
          without: '3-5 hours',
          withAI: '30-45 minutes',
          saved: '2.5-4 hrs',
        },
        {
          task: 'Subtitle generation',
          without: '2-4 hours per language',
          withAI: '20-30 minutes',
          saved: '2-3.5 hrs',
        },
        {
          task: 'Social media repurposing',
          without: '6-8 hours',
          withAI: '1-2 hours',
          saved: '5-6 hrs',
        },
        {
          task: 'Client feedback management',
          without: '1-2 hours per round',
          withAI: '15-20 minutes',
          saved: '1-1.5 hrs/round',
        },
        {
          task: 'Project scope documents',
          without: '3-5 hours',
          withAI: '30-45 minutes',
          saved: '2.5-4 hrs',
        },
      ],
      totalRow: {
        task: 'Conservative total',
        without: '-',
        withAI: '-',
        saved: '15-25 hrs/project',
      },
      sections: [
        {
          heading: 'The Editor\'s Edge',
          paragraphs: [
            'Video editors and filmmakers who use AI for writing and documentation spend dramatically more time in the timeline - where their skills actually matter. Same creative talent, same editorial eye, same storytelling instinct - just less time in Google Docs and email.',
            'The gap is not editing ability. It is how much creative energy you have left after the paperwork is done.',
          ],
        },
        {
          heading: 'The Reframe',
          paragraphs: [
            'You did not become a video editor to write scope documents and format subtitle files. You became an editor because you understand how images and sound create emotion. AI gives you back the hours to do the work that made you fall in love with this craft.',
          ],
        },
      ],
      keyInsight:
        'Start with one system. One prompt. One task that always pulls you out of the timeline. That is enough to change how you work.',
    },

    ch7: {
      intro:
        'Seven days to build AI into your video production workflow. Each day introduces one new capability. Check off each step as you go.',
      days: [
        {
          day: 1,
          title: 'Set Up Your Tools',
          duration: '15 min',
          items: [
            { id: 've-1-1', label: 'Create a free account on ChatGPT or Claude' },
            { id: 've-1-2', label: 'Create a free Descript account for transcription' },
            { id: 've-1-3', label: 'Bookmark this guide for quick access to prompts' },
          ],
        },
        {
          day: 2,
          title: 'Write a Script',
          duration: '20 min',
          items: [
            { id: 've-2-1', label: 'Pick a current or upcoming video project' },
            { id: 've-2-2', label: 'Run the Screenplay Formatting prompt with your project details' },
            { id: 've-2-3', label: 'Compare the draft to how long it would have taken you to write from scratch' },
          ],
        },
        {
          day: 3,
          title: 'Build a Shot List',
          duration: '20 min',
          items: [
            { id: 've-3-1', label: 'Take the script from Day 2 or a current project script' },
            { id: 've-3-2', label: 'Run the Shot-by-Shot Production Breakdown prompt' },
            { id: 've-3-3', label: 'Reorganize the output for your shooting schedule' },
          ],
        },
        {
          day: 4,
          title: 'Generate Subtitles',
          duration: '15 min',
          items: [
            { id: 've-4-1', label: 'Take a completed video and run it through Descript for transcription' },
            { id: 've-4-2', label: 'Run the SRT Subtitle File Formatter prompt' },
            { id: 've-4-3', label: 'Review the output against your video for timing accuracy' },
          ],
        },
        {
          day: 5,
          title: 'Plan Social Cuts',
          duration: '20 min',
          items: [
            { id: 've-5-1', label: 'Take a long-form video and its transcript' },
            { id: 've-5-2', label: 'Run the Platform-Specific Edit Plan prompt' },
            { id: 've-5-3', label: 'Use the timestamps and recommendations to start cutting social clips' },
          ],
        },
        {
          day: 6,
          title: 'Handle Client Communication',
          duration: '15 min',
          items: [
            { id: 've-6-1', label: 'Take recent client feedback and run the Revision Response Template prompt' },
            { id: 've-6-2', label: 'Try the Project Scope Document prompt for a new or upcoming project' },
            { id: 've-6-3', label: 'Notice how much faster the admin side of production becomes' },
          ],
        },
        {
          day: 7,
          title: 'Reflect and Systematize',
          duration: '10 min',
          items: [
            { id: 've-7-1', label: 'Review which prompts saved you the most time this week' },
            { id: 've-7-2', label: 'Save your top prompts with your default project details filled in' },
            { id: 've-7-3', label: 'Share this guide with a fellow editor who is drowning in admin work' },
          ],
        },
      ],
    },
  },
} satisfies WorkbookData
