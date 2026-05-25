'use client'
import { useEffect, useRef } from 'react'

export function useMouseGlow(color = '16, 185, 129') {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--gx', `${x}px`)
      el.style.setProperty('--gy', `${y}px`)
      el.style.setProperty('--gc', color)
    }

    el.addEventListener('mousemove', onMouseMove as EventListener)
    return () => el.removeEventListener('mousemove', onMouseMove as EventListener)
  }, [color])

  return ref
}
