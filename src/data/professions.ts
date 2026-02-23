import type { Profession } from './types'

export const professions: Profession[] = [
  // Original 10
  { id: 'founders', name: 'AI for Founders', shortName: 'Founders', description: 'Strategy, hiring, investor comms, operations, content, and customer insights - all with AI.', icon: 'rocket', status: 'active' },
  { id: 'students', name: 'AI for Students & Job Applicants', shortName: 'Students', description: 'Studying, resumes, job search, interview prep, portfolio building, and networking.', icon: 'graduation-cap', status: 'active' },
  { id: 'frontend', name: 'AI for Frontend Developers', shortName: 'Frontend', description: 'Component scaffolding, CSS debugging, code review, testing, and performance optimization.', icon: 'code', status: 'active' },
  { id: 'backend', name: 'AI for Backend Developers', shortName: 'Backend', description: 'API design, database queries, debugging, migrations, CI/CD, and security audits.', icon: 'server', status: 'active' },
  { id: 'cybersecurity', name: 'AI for Cybersecurity', shortName: 'Cybersecurity', description: 'Incident response, vulnerability assessment, log analysis, compliance, and threat intelligence.', icon: 'shield', status: 'active' },
  { id: 'marketers', name: 'AI for Marketers', shortName: 'Marketers', description: 'Campaigns, copywriting, SEO, analytics, email sequences, and social media.', icon: 'megaphone', status: 'active' },
  { id: 'sales', name: 'AI for Sales', shortName: 'Sales', description: 'Prospecting, outreach, follow-ups, demo prep, proposals, and pipeline analysis.', icon: 'handshake', status: 'active' },
  { id: 'bizdev', name: 'AI for Business Development', shortName: 'Biz Dev', description: 'Partner outreach, market research, competitive analysis, pitch decks, and deal structuring.', icon: 'briefcase', status: 'active' },
  { id: 'brandmanager', name: 'AI for Brand Managers', shortName: 'Brand', description: 'Brand voice, campaign briefs, consumer insights, competitive monitoring, and guidelines.', icon: 'palette', status: 'active' },
  { id: 'copywriter', name: 'AI for Copywriters', shortName: 'Copywriter', description: 'Headlines, landing pages, email sequences, social captions, ad copy, and revisions.', icon: 'pen-tool', status: 'active' },
  // Healthcare
  { id: 'medstudents', name: 'AI for Medical Students', shortName: 'Med Students', description: 'Study optimization, clinical cases, board exam prep, research summaries, and patient notes.', icon: 'stethoscope', status: 'active' },
  { id: 'psychologists', name: 'AI for Psychologists & Therapists', shortName: 'Psychology', description: 'Session notes, treatment plans, CBT worksheets, research reviews, and client materials.', icon: 'brain', status: 'active' },
  { id: 'nurses', name: 'AI for Nurses', shortName: 'Nurses', description: 'Patient documentation, care plans, medication research, handoff reports, and patient education.', icon: 'heart-pulse', status: 'active' },
  { id: 'doctors', name: 'AI for Doctors', shortName: 'Doctors', description: 'Clinical documentation, patient communication, differential diagnosis, research, and referrals.', icon: 'activity', status: 'active' },
  { id: 'pharmacists', name: 'AI for Pharmacists', shortName: 'Pharmacists', description: 'Drug interactions, patient counseling, MTM reviews, prior authorizations, and inventory.', icon: 'pill', status: 'active' },
  { id: 'healthcareadmin', name: 'AI for Healthcare Admins', shortName: 'HC Admin', description: 'Policy drafting, compliance, budget analysis, staff scheduling, and quality metrics.', icon: 'clipboard-list', status: 'active' },
  // Design & Creative
  { id: 'uxdesigners', name: 'AI for UI/UX Designers', shortName: 'UX Design', description: 'User research, wireframes, usability reports, design systems, and accessibility audits.', icon: 'figma', status: 'active' },
  { id: 'graphicdesigners', name: 'AI for Graphic Designers', shortName: 'Graphic Design', description: 'Client briefs, mood boards, asset management, portfolio writing, and social templates.', icon: 'image', status: 'active' },
  { id: 'architects', name: 'AI for Architects', shortName: 'Architects', description: 'Project briefs, code compliance, specifications, design narratives, and sustainability.', icon: 'building', status: 'active' },
  { id: 'interiordesigners', name: 'AI for Interior Designers', shortName: 'Interior Design', description: 'Client briefs, material research, space planning, timelines, and vendor coordination.', icon: 'lamp', status: 'active' },
  { id: 'videoeditors', name: 'AI for Video Editors', shortName: 'Video', description: 'Scripts, shot lists, subtitles, social cuts, client feedback, and project documentation.', icon: 'film', status: 'active' },
  { id: 'photographers', name: 'AI for Photographers', shortName: 'Photography', description: 'Client proposals, shot planning, portfolio SEO, social captions, and business operations.', icon: 'camera', status: 'active' },
  // Operations & Management
  { id: 'operations', name: 'AI for Operations Managers', shortName: 'Operations', description: 'SOPs, vendor management, KPI tracking, workflow optimization, and resource planning.', icon: 'settings', status: 'active' },
  { id: 'projectmanagers', name: 'AI for Project Managers', shortName: 'PM', description: 'Status reports, risk assessments, stakeholder updates, sprint planning, and retros.', icon: 'gantt-chart', status: 'active' },
  { id: 'productmanagers', name: 'AI for Product Managers', shortName: 'Product', description: 'PRDs, user stories, competitive analysis, roadmaps, and customer feedback synthesis.', icon: 'box', status: 'active' },
  { id: 'supplychain', name: 'AI for Supply Chain', shortName: 'Supply Chain', description: 'Demand forecasting, vendor evaluation, logistics, inventory, and cost analysis.', icon: 'truck', status: 'active' },
  // HR & Recruiting
  { id: 'hr', name: 'AI for HR Professionals', shortName: 'HR', description: 'Job descriptions, interviews, onboarding, policies, employee comms, and reviews.', icon: 'users', status: 'active' },
  { id: 'recruiters', name: 'AI for Recruiters', shortName: 'Recruiters', description: 'Sourcing, outreach, screening, job posts, offer letters, and pipeline management.', icon: 'user-search', status: 'active' },
  // Finance
  { id: 'accountants', name: 'AI for Accountants & CPAs', shortName: 'Accounting', description: 'Tax research, client memos, financial analysis, audit prep, and advisory writing.', icon: 'calculator', status: 'active' },
  { id: 'financialanalysts', name: 'AI for Financial Analysts', shortName: 'Finance', description: 'Market research, model docs, investment memos, earnings analysis, and reports.', icon: 'trending-up', status: 'active' },
  // Legal
  { id: 'lawyers', name: 'AI for Lawyers', shortName: 'Lawyers', description: 'Legal research, contract review, brief drafting, client communication, and case analysis.', icon: 'scale', status: 'active' },
  { id: 'paralegals', name: 'AI for Paralegals', shortName: 'Paralegals', description: 'Document review, case timelines, filing prep, research memos, and client intake.', icon: 'file-text', status: 'active' },
  { id: 'compliance', name: 'AI for Compliance Officers', shortName: 'Compliance', description: 'Policy drafting, regulatory research, audit prep, training materials, and risk assessment.', icon: 'shield-check', status: 'active' },
  // Education
  { id: 'teachers', name: 'AI for Teachers', shortName: 'Teachers', description: 'Lesson plans, rubrics, parent communication, differentiation, quizzes, and feedback.', icon: 'apple', status: 'active' },
  { id: 'professors', name: 'AI for Professors', shortName: 'Professors', description: 'Grant proposals, course design, paper reviews, literature synthesis, and mentoring.', icon: 'book-open', status: 'active' },
  { id: 'trainers', name: 'AI for Corporate Trainers', shortName: 'Trainers', description: 'Training modules, assessments, facilitator guides, feedback analysis, and ROI reports.', icon: 'presentation', status: 'active' },
  { id: 'researchers', name: 'AI for Researchers', shortName: 'Researchers', description: 'Literature reviews, methodology, data narratives, grants, paper drafting, and presentations.', icon: 'microscope', status: 'active' },
  // Media
  { id: 'journalists', name: 'AI for Journalists', shortName: 'Journalists', description: 'Source research, interview prep, article drafting, headlines, and fact-checking.', icon: 'newspaper', status: 'active' },
  { id: 'pr', name: 'AI for PR Professionals', shortName: 'PR', description: 'Press releases, media pitches, crisis comms, monitoring, and event coordination.', icon: 'radio', status: 'active' },
  { id: 'socialmedia', name: 'AI for Social Media Managers', shortName: 'Social Media', description: 'Content calendars, captions, engagement, analytics, trends, and cross-platform content.', icon: 'share-2', status: 'active' },
  { id: 'podcasters', name: 'AI for Podcast Producers', shortName: 'Podcasters', description: 'Episode planning, guest research, show notes, transcripts, promotion, and growth.', icon: 'mic', status: 'active' },
  { id: 'contentcreators', name: 'AI for Content Creators', shortName: 'Creators', description: 'Video scripts, thumbnails, SEO titles, community, sponsorships, and repurposing.', icon: 'youtube', status: 'active' },
  // Services
  { id: 'realestate', name: 'AI for Real Estate Agents', shortName: 'Real Estate', description: 'Listings, client emails, market analysis, neighborhood guides, and lead nurture.', icon: 'home', status: 'active' },
  { id: 'insurance', name: 'AI for Insurance Agents', shortName: 'Insurance', description: 'Policy comparisons, client outreach, claims docs, renewals, and product education.', icon: 'umbrella', status: 'active' },
  { id: 'eventplanners', name: 'AI for Event Planners', shortName: 'Events', description: 'Proposals, vendor coordination, timelines, budgets, marketing, and post-event reports.', icon: 'calendar', status: 'active' },
  { id: 'grantwriters', name: 'AI for Grant Writers', shortName: 'Grants', description: 'Funder research, proposals, budget narratives, impact statements, and reporting.', icon: 'file-signature', status: 'active' },
  { id: 'consultants', name: 'AI for Consultants', shortName: 'Consultants', description: 'Proposals, frameworks, deliverables, presentations, SOWs, and knowledge management.', icon: 'lightbulb', status: 'active' },
  { id: 'dataanalysts', name: 'AI for Data Analysts', shortName: 'Data', description: 'SQL queries, report writing, dashboards, stakeholder comms, and data cleaning.', icon: 'bar-chart', status: 'active' },
  { id: 'customersuccess', name: 'AI for Customer Success', shortName: 'CS', description: 'Onboarding, QBRs, churn analysis, renewals, health scores, and feedback loops.', icon: 'heart-handshake', status: 'active' },
  { id: 'technicalwriters', name: 'AI for Technical Writers', shortName: 'Tech Writing', description: 'API docs, user guides, release notes, knowledge bases, and tutorials.', icon: 'file-code', status: 'active' },
]
