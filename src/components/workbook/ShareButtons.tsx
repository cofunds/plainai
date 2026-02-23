import { Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

export default function ShareButtons() {
  const { copy } = useCopyToClipboard()

  const handleShare = async () => {
    const url = window.location.href
    const title = document.title

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        copy(url)
      }
    } else {
      copy(url)
    }
  }

  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        type="button"
        onClick={handleShare}
        className="bg-white text-stone-900 px-6 py-2.5 border-2 border-white text-sm font-bold uppercase tracking-wider hover:bg-stone-100 flex items-center gap-2 transition-colors"
      >
        <Share2 className="h-4 w-4" strokeWidth={2.5} />
        Share
      </button>
      <Link
        to="/guides"
        className="border-2 border-stone-500 text-stone-300 px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-stone-800 hover:text-white hover:border-white transition-colors"
      >
        All Guides
      </Link>
    </div>
  )
}
