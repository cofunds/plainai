import { Link } from 'react-router-dom'
import {
  Rocket, GraduationCap, Megaphone, Handshake, Laptop, Store, ArrowRight, Code, Server, Shield, Briefcase, Palette, PenTool,
  Stethoscope, Brain, HeartPulse, Activity, Pill, ClipboardList,
  Figma, Image, Building, Lamp, Film, Camera,
  Settings, GanttChart, Box, Truck,
  Users, UserSearch, Calculator, TrendingUp,
  Scale, FileText, ShieldCheck,
  Apple, BookOpen, Presentation, Microscope,
  Newspaper, Radio, Share2, Mic, Youtube,
  Home, Umbrella, Calendar, FileSignature,
  Lightbulb, BarChart, HeartHandshake, FileCode,
} from 'lucide-react'
import type { Profession } from '../../data/types'
import { cn } from '../../lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Original 10
  'rocket': Rocket,
  'graduation-cap': GraduationCap,
  'megaphone': Megaphone,
  'handshake': Handshake,
  'laptop': Laptop,
  'store': Store,
  'code': Code,
  'server': Server,
  'shield': Shield,
  'briefcase': Briefcase,
  'palette': Palette,
  'pen-tool': PenTool,
  // Healthcare
  'stethoscope': Stethoscope,
  'brain': Brain,
  'heart-pulse': HeartPulse,
  'activity': Activity,
  'pill': Pill,
  'clipboard-list': ClipboardList,
  // Design & Creative
  'figma': Figma,
  'image': Image,
  'building': Building,
  'lamp': Lamp,
  'film': Film,
  'camera': Camera,
  // Operations & Management
  'settings': Settings,
  'gantt-chart': GanttChart,
  'box': Box,
  'truck': Truck,
  // HR & Recruiting
  'users': Users,
  'user-search': UserSearch,
  // Finance
  'calculator': Calculator,
  'trending-up': TrendingUp,
  // Legal
  'scale': Scale,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  // Education
  'apple': Apple,
  'book-open': BookOpen,
  'presentation': Presentation,
  'microscope': Microscope,
  // Media
  'newspaper': Newspaper,
  'radio': Radio,
  'share-2': Share2,
  'mic': Mic,
  'youtube': Youtube,
  // Services
  'home': Home,
  'umbrella': Umbrella,
  'calendar': Calendar,
  'file-signature': FileSignature,
  'lightbulb': Lightbulb,
  'bar-chart': BarChart,
  'heart-handshake': HeartHandshake,
  'file-code': FileCode,
}

interface ProfessionCardProps {
  profession: Profession
  index: number
}

export default function ProfessionCard({ profession }: ProfessionCardProps) {
  const Icon = iconMap[profession.icon] ?? Rocket
  const isComingSoon = profession.status === 'coming-soon'

  const card = (
    <div
      className={cn(
        'flex flex-col p-5',
        isComingSoon
          ? 'border-2 border-dashed border-stone-300 opacity-50'
          : 'brutal-card brutal-card-hover'
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center border-2 border-stone-900 bg-stone-100">
        <Icon className="h-5 w-5 text-stone-800" />
      </div>

      <h3 className="mt-3 text-base font-bold text-stone-900">{profession.name}</h3>

      <p className="mt-1 text-sm text-stone-500 line-clamp-2">
        {profession.description}
      </p>

      <div className="mt-auto pt-3 flex items-center gap-1">
        {isComingSoon ? (
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Coming soon</span>
        ) : (
          <>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Explore</span>
            <ArrowRight className="h-3.5 w-3.5 text-primary-600" />
          </>
        )}
      </div>
    </div>
  )

  if (isComingSoon) return card
  return <Link to={`/${profession.id}`} className="block">{card}</Link>
}
