// app/components/ThemeSwitcher.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import MaterialSymbolsDarkModeOutline from '../svg/MaterialSymbolsDarkModeOutline'
import SolarSun2Outline from '../svg/SolarSun2Outline'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      className="place-self-end"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SolarSun2Outline className={className} />
        ) : (
          <MaterialSymbolsDarkModeOutline className={className} />
        )
      }
    ></Switch>
  )
}
