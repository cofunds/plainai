import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'sonner'
import { pageTransition } from './lib/animations'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import HomePage from './pages/HomePage'
import GuidesPage from './pages/GuidesPage'
import NotFoundPage from './pages/NotFoundPage'

const WorkbookPage = lazy(() => import('./pages/WorkbookPage'))
const AI101Page = lazy(() => import('./pages/AI101Page'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PromptLibraryPage = lazy(() => import('./pages/PromptLibraryPage'))
const ToolDirectoryPage = lazy(() => import('./pages/ToolDirectoryPage'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        className="flex-1"
      >
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-primary-600" />
            </div>
          }
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/ai-101" element={<AI101Page />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/prompts" element={<PromptLibraryPage />} />
            <Route path="/tools" element={<ToolDirectoryPage />} />
            <Route path="/:profession" element={<WorkbookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
      <BackToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: '2px',
            border: '2px solid #1c1917',
            boxShadow: '3px 3px 0 #1c1917',
            fontSize: '14px',
            fontWeight: 600,
          },
        }}
      />
    </BrowserRouter>
  )
}
