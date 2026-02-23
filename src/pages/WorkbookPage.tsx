import { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { SEO } from '../components/ui/SEO'
import type { WorkbookData, PromptGroup as PromptGroupType } from '../data/types'
import { professions } from '../data/professions'
import WorkbookLayout from '../components/workbook/WorkbookLayout'
import WorkbookHero from '../components/workbook/WorkbookHero'
import ChapterSection from '../components/workbook/ChapterSection'
import NarrativeBlock from '../components/workbook/NarrativeBlock'
import KeyInsight from '../components/workbook/KeyInsight'
import ToolGrid from '../components/workbook/ToolGrid'
import SystemCard from '../components/workbook/SystemCard'
import PromptSearch from '../components/workbook/PromptSearch'
import PromptGroup from '../components/workbook/PromptGroup'
import TimeTable from '../components/workbook/TimeTable'
import Checklist from '../components/workbook/Checklist'
import WorkbookCTA from '../components/workbook/WorkbookCTA'

const loaders: Record<string, () => Promise<WorkbookData>> = {
  // Original 10
  founders: () => import('../data/founders').then((m) => m.foundersData),
  students: () => import('../data/students').then((m) => m.studentsData),
  frontend: () => import('../data/frontend').then((m) => m.frontendData),
  backend: () => import('../data/backend').then((m) => m.backendData),
  cybersecurity: () => import('../data/cybersecurity').then((m) => m.cybersecurityData),
  marketers: () => import('../data/marketers').then((m) => m.marketersData),
  sales: () => import('../data/sales').then((m) => m.salesData),
  bizdev: () => import('../data/bizdev').then((m) => m.bizdevData),
  brandmanager: () => import('../data/brandmanager').then((m) => m.brandmanagerData),
  copywriter: () => import('../data/copywriter').then((m) => m.copywriterData),
  // Healthcare
  medstudents: () => import('../data/medstudents').then((m) => m.medstudentsData),
  psychologists: () => import('../data/psychologists').then((m) => m.psychologistsData),
  pharmacists: () => import('../data/pharmacists').then((m) => m.pharmacistsData),
  healthcareadmin: () => import('../data/healthcareadmin').then((m) => m.healthcareadminData),
  // Design & Creative
  uxdesigners: () => import('../data/uxdesigners').then((m) => m.uxdesignersData),
  graphicdesigners: () => import('../data/graphicdesigners').then((m) => m.graphicdesignersData),
  architects: () => import('../data/architects').then((m) => m.architectsData),
  interiordesigners: () => import('../data/interiordesigners').then((m) => m.interiordesignersData),
  videoeditors: () => import('../data/videoeditors').then((m) => m.videoeditorsData),
  photographers: () => import('../data/photographers').then((m) => m.photographersData),
  // Operations & Management
  operations: () => import('../data/operations').then((m) => m.operationsData),
  projectmanagers: () => import('../data/projectmanagers').then((m) => m.projectmanagersData),
  productmanagers: () => import('../data/productmanagers').then((m) => m.productmanagersData),
  supplychain: () => import('../data/supplychain').then((m) => m.supplychainData),
  // HR & Recruiting
  hr: () => import('../data/hr').then((m) => m.hrData),
  recruiters: () => import('../data/recruiters').then((m) => m.recruitersData),
  // Finance
  accountants: () => import('../data/accountants').then((m) => m.accountantsData),
  financialanalysts: () => import('../data/financialanalysts').then((m) => m.financialanalystsData),
  // Legal
  lawyers: () => import('../data/lawyers').then((m) => m.lawyersData),
  paralegals: () => import('../data/paralegals').then((m) => m.paralegalsData),
  compliance: () => import('../data/compliance').then((m) => m.complianceData),
  // Education
  teachers: () => import('../data/teachers').then((m) => m.teachersData),
  professors: () => import('../data/professors').then((m) => m.professorsData),
  trainers: () => import('../data/trainers').then((m) => m.trainersData),
  researchers: () => import('../data/researchers').then((m) => m.researchersData),
  // Media
  journalists: () => import('../data/journalists').then((m) => m.journalistsData),
  pr: () => import('../data/pr').then((m) => m.prData),
  socialmedia: () => import('../data/socialmedia').then((m) => m.socialmediaData),
  podcasters: () => import('../data/podcasters').then((m) => m.podcastersData),
  contentcreators: () => import('../data/contentcreators').then((m) => m.contentcreatorsData),
  // Services
  realestate: () => import('../data/realestate').then((m) => m.realestateData),
  insurance: () => import('../data/insurance').then((m) => m.insuranceData),
  eventplanners: () => import('../data/eventplanners').then((m) => m.eventplannersData),
  grantwriters: () => import('../data/grantwriters').then((m) => m.grantwritersData),
  consultants: () => import('../data/consultants').then((m) => m.consultantsData),
  dataanalysts: () => import('../data/dataanalysts').then((m) => m.dataanalystsData),
  customersuccess: () => import('../data/customersuccess').then((m) => m.customersuccessData),
  technicalwriters: () => import('../data/technicalwriters').then((m) => m.technicalwritersData),
}

const CHAPTER_DEFS = [
  { id: 'ch-1', label: 'Your Day Right Now' },
  { id: 'ch-2', label: 'What AI Actually Is' },
  { id: 'ch-3', label: 'Your AI Toolkit' },
  { id: 'ch-4', label: 'The Systems' },
  { id: 'ch-5', label: 'The Prompts' },
  { id: 'ch-6', label: 'Why This Matters' },
  { id: 'ch-7', label: 'Your First 7 Days' },
]

export default function WorkbookPage() {
  const { profession } = useParams<{ profession: string }>()
  const [data, setData] = useState<WorkbookData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [promptQuery, setPromptQuery] = useState('')
  const [progress, setProgress] = useState({ checked: 0, total: 0 })

  useEffect(() => {
    if (!profession) {
      setNotFound(true)
      setLoading(false)
      return
    }

    const loader = loaders[profession]
    if (!loader) {
      setNotFound(true)
      setLoading(false)
      return
    }

    setLoading(true)
    loader()
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [profession])

  const handleProgressChange = useCallback(
    (p: { checked: number; total: number }) => {
      setProgress(p)
    },
    []
  )

  // Filter prompt groups by search query
  const filteredGroups: PromptGroupType[] = useMemo(() => {
    if (!data) return []
    const q = promptQuery.toLowerCase().trim()
    if (!q) return data.chapters.ch5.groups

    return data.chapters.ch5.groups
      .map((group) => ({
        ...group,
        prompts: group.prompts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.task.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.prompts.length > 0)
  }, [data, promptQuery])

  // Look up the profession display name
  const professionInfo = professions.find((p) => p.id === profession)
  const professionName = professionInfo?.name || profession || ''

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-stone-400">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-sm font-bold uppercase tracking-wider">Loading guide...</p>
        </div>
      </div>
    )
  }

  // Not found / coming soon
  if (notFound || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-black uppercase text-stone-900 mb-2">
            Guide not available
          </h2>
          <p className="text-stone-500 mb-6">
            This profession guide is either coming soon or does not exist yet.
          </p>
          <Link
            to="/guides"
            className="inline-flex items-center border-2 border-stone-900 bg-stone-900 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-stone-800 shadow-[3px_3px_0px_0px_#1c1917]"
          >
            All guides
          </Link>
        </div>
      </div>
    )
  }

  const { chapters } = data

  return (
    <WorkbookLayout
      chapters={CHAPTER_DEFS}
      professionSlug={profession || ''}
      professionName={professionName}
      progress={progress}
    >
      <SEO
        title={data.heroTitle}
        description={data.heroDescription}
        path={`/${profession}`}
      />
      {/* Hero */}
      <WorkbookHero
        label={data.heroLabel}
        title={data.heroTitle}
        description={data.heroDescription}
      />

      {/* Chapter 1: Your Day Right Now */}
      <ChapterSection id="ch-1" chapterNum={1} title="Your Day Right Now">
        <NarrativeBlock
          paragraphs={chapters.ch1.paragraphs}
          highlight={chapters.ch1.highlight}
          closingParagraph={chapters.ch1.closingParagraph}
        />
      </ChapterSection>

      {/* Chapter 2: What AI Actually Is */}
      <ChapterSection id="ch-2" chapterNum={2} title="What AI Actually Is">
        {chapters.ch2.sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              {section.heading}
            </h3>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-[16px] text-stone-500 leading-[1.8] mb-5">
                {p}
              </p>
            ))}
          </div>
        ))}
        <KeyInsight text={chapters.ch2.keyInsight} />
      </ChapterSection>

      {/* Chapter 3: Your AI Toolkit */}
      <ChapterSection id="ch-3" chapterNum={3} title="Your AI Toolkit">
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-6">
          {chapters.ch3.intro}
        </p>
        <ToolGrid tools={chapters.ch3.tools} footer={chapters.ch3.footer} />
      </ChapterSection>

      {/* Chapter 4: The Systems */}
      <ChapterSection id="ch-4" chapterNum={4} title="The Systems">
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-6">
          {chapters.ch4.intro}
        </p>
        <div className="flex flex-col gap-3">
          {chapters.ch4.systems.map((system, i) => (
            <SystemCard
              key={system.id}
              system={system}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </ChapterSection>

      {/* Chapter 5: The Prompts */}
      <ChapterSection id="ch-5" chapterNum={5} title="The Prompts">
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-6">
          {chapters.ch5.intro}
        </p>
        <PromptSearch query={promptQuery} onChange={setPromptQuery} />
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <PromptGroup key={group.systemId} group={group} />
          ))
        ) : (
          <p className="text-sm text-stone-400 text-center py-8">
            No prompts match your search.
          </p>
        )}
      </ChapterSection>

      {/* Chapter 6: Why This Matters */}
      <ChapterSection id="ch-6" chapterNum={6} title="Why This Matters">
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-6">
          {chapters.ch6.introLine}
        </p>
        <TimeTable
          rows={chapters.ch6.timeTable}
          totalRow={chapters.ch6.totalRow}
        />
        {chapters.ch6.sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              {section.heading}
            </h3>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-[16px] text-stone-500 leading-[1.8] mb-5">
                {p}
              </p>
            ))}
          </div>
        ))}
        <KeyInsight text={chapters.ch6.keyInsight} />
      </ChapterSection>

      {/* Chapter 7: Your First 7 Days */}
      <ChapterSection id="ch-7" chapterNum={7} title="Your First 7 Days">
        <p className="text-[16px] text-stone-500 leading-[1.8] mb-6">
          {chapters.ch7.intro}
        </p>
        <Checklist
          days={chapters.ch7.days}
          storageKey={`plainai-checklist-${profession}`}
          onProgressChange={handleProgressChange}
        />
      </ChapterSection>

      {/* CTA */}
      <WorkbookCTA
        title="You're ready to start."
        subtitle="Share this guide with someone who needs it, or explore another profession."
      />
    </WorkbookLayout>
  )
}
