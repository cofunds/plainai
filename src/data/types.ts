export interface Profession {
  id: string
  name: string
  shortName: string
  description: string
  icon: string
  status: 'active' | 'coming-soon'
}

export interface WorkbookData {
  professionId: string
  heroLabel: string
  heroTitle: string
  heroDescription: string
  chapters: {
    ch1: NarrativeChapter
    ch2: InsightChapter
    ch3: ToolkitChapter
    ch4: SystemsChapter
    ch5: PromptsChapter
    ch6: WhyItMattersChapter
    ch7: ChecklistChapter
  }
}

export interface NarrativeChapter {
  paragraphs: string[]
  highlight: string
  closingParagraph?: string
}

export interface InsightChapter {
  sections: { heading: string; paragraphs: string[] }[]
  keyInsight: string
}

export interface Tool {
  name: string
  role: string
  description: string
  cost: 'free' | 'free-tier' | 'freemium' | 'paid'
  difficulty: 'easy' | 'easy-medium' | 'medium'
  verdict: string
  icon: string
}

export interface ToolkitChapter {
  intro: string
  tools: Tool[]
  footer: string
}

export interface System {
  id: number
  name: string
  before: string
  after: string
  flow: string[]
  timeSaved: { without: string; withAI: string }
}

export interface SystemsChapter {
  intro: string
  systems: System[]
}

export interface Prompt {
  id: string
  title: string
  task: string
  prompt: string
  result?: string
  tip?: string
}

export interface PromptGroup {
  systemId: number
  systemName: string
  prompts: Prompt[]
}

export interface PromptsChapter {
  intro: string
  groups: PromptGroup[]
}

export interface TimeRow {
  task: string
  without: string
  withAI: string
  saved: string
}

export interface WhyItMattersChapter {
  introLine: string
  timeTable: TimeRow[]
  totalRow: TimeRow
  sections: { heading: string; paragraphs: string[] }[]
  keyInsight: string
}

export interface CheckDay {
  day: number
  title: string
  duration: string
  items: { id: string; label: string }[]
}

export interface ChecklistChapter {
  intro: string
  days: CheckDay[]
}
