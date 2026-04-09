import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX - 3 + 'px'
        dotRef.current.style.top = mouseY - 3 + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX - 16 + 'px'
        ringRef.current.style.top = ringY - 16 + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '50px'
        ringRef.current.style.height = '50px'
        ringRef.current.style.borderColor = 'rgba(0,245,212,0.7)'
      }
    }

    const onLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'rgba(0,245,212,0.4)'
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    animate()
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
