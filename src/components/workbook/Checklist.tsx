import { useEffect, useMemo, useCallback } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import type { CheckDay as CheckDayType } from '../../data/types'
import CheckDay from './CheckDay'

interface ChecklistProps {
  days: CheckDayType[]
  storageKey: string
  onProgressChange?: (progress: { checked: number; total: number }) => void
}

export default function Checklist({ days, storageKey, onProgressChange }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  )

  const total = useMemo(
    () => days.reduce((sum, day) => sum + day.items.length, 0),
    [days]
  )

  const checked = useMemo(
    () => Object.values(checkedItems).filter(Boolean).length,
    [checkedItems]
  )

  useEffect(() => {
    onProgressChange?.({ checked, total })
  }, [checked, total, onProgressChange])

  const handleToggle = useCallback(
    (id: string) => {
      setCheckedItems((prev) => ({
        ...prev,
        [id]: !prev[id],
      }))
    },
    [setCheckedItems]
  )

  return (
    <div>
      {days.map((day) => (
        <CheckDay
          key={day.day}
          day={day}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}
