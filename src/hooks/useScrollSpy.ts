import { useState, useEffect } from 'react'

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: `-${offset}px 0px -70% 0px` }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
