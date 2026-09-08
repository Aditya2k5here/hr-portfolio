'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

/**
 * The bar.
 *
 * Fixed, thin, and it gains a ground only once you have scrolled, so at rest it
 * sits on the photograph rather than cutting a band across it.
 *
 * On a phone the five links collapse behind a control, because at 390px they
 * would either wrap or scroll and both look like a mistake. The sheet that
 * opens is full-screen with 56px targets: a menu you can use with a thumb on
 * a train, which is where this version gets read.
 */
export function Nav({ cv }: { cv: string }) {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [here, setHere] = useState('')

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock the page behind the sheet, and let Escape out. */
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', esc)
    }
  }, [open])

  useEffect(() => {
    const nodes = LINKS.map((l) => document.getElementById(l.id)).filter(
      (n): n is HTMLElement => Boolean(n),
    )
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        const seen = entries.filter((e) => e.isIntersecting)
        if (seen.length) {
          setHere(
            seen.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id,
          )
        }
      },
      { rootMargin: '-20% 0px -66% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          stuck
            ? 'border-b border-[var(--edge)] bg-[rgb(6_7_10_/_0.88)] backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="shell flex h-[60px] items-center gap-6 sm:h-[68px]">
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center text-[15px] font-semibold tracking-[-0.01em] sm:text-[16px]"
          >
            <span className="text-[var(--sig-lit)]">A</span>DITYA SRINIVAS
          </a>

          <span aria-hidden className="hidden h-5 w-px bg-[var(--edge-2)] lg:block" />

          <nav aria-label="Sections" className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={here === l.id ? 'true' : undefined}
                className={`m text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  here === l.id
                    ? 'text-[var(--paper)]'
                    : 'text-[var(--grey-2)] hover:text-[var(--paper)]'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={cv}
            target="_blank"
            rel="noreferrer noopener"
            className="btn ml-auto hidden !min-h-[42px] !w-auto !px-5 !text-[11px] lg:inline-flex"
          >
            Resume
            <span aria-hidden>&#8599;</span>
          </a>

          {/* the phone control */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-auto grid h-11 w-11 place-items-center lg:hidden"
          >
            <span className="relative block h-[13px] w-[22px]">
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-[var(--paper)] transition-transform duration-300"
                style={{ top: open ? 6 : 0, transform: open ? 'rotate(45deg)' : 'none' }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-[var(--paper)] transition-opacity duration-200"
                style={{ top: 6, opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-[var(--paper)] transition-transform duration-300"
                style={{ top: open ? 6 : 12, transform: open ? 'rotate(-45deg)' : 'none' }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* the sheet */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--void)] transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        inert={!open}
      >
        <nav aria-label="Sections" className="shell flex h-full flex-col justify-center gap-1 pb-16">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex min-h-[62px] items-baseline gap-5 border-b border-[var(--edge)]"
            >
              <span className="m text-[11px] text-[var(--sig)]">
                {String(i + 2).padStart(2, '0')}
              </span>
              <span className="text-[27px] font-medium tracking-[-0.03em]">{l.label}</span>
            </a>
          ))}
          <a
            href={cv}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="btn btn--sig mt-7"
          >
            Resume
            <span aria-hidden>&#8599;</span>
          </a>
        </nav>
      </div>
    </>
  )
}
