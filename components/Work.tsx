'use client'

import { useState } from 'react'
import { cards } from '@/content/brief'

/**
 * Selected work.
 *
 * On a laptop these are ruled rows: number, name, one line, tags, arrow. Six
 * of them fit in a screen, which is the point — a recruiter sees the whole
 * body of work without scrolling once.
 *
 * Tapping one opens it in place. What comes out is two sentences and the
 * figure, not a case study; the long portfolio is where the case studies live.
 *
 * On a phone the same rows become cards, because a name and a line at 390px
 * with tags beside them is a wrapping mess, and because the figure deserves to
 * be the biggest thing in the card rather than the smallest thing in a row.
 */
export function Work() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="cut border-t border-[var(--edge)]">
      {cards.map((c, i) => {
        const on = open === c.id
        return (
          <li key={c.id} className="border-b border-[var(--edge)]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(on ? null : c.id)}
                aria-expanded={on}
                aria-controls={`c-${c.id}`}
                className="row !border-b-0 px-1 py-5 sm:px-3"
              >
                {/* laptop: one line */}
                <span className="hidden items-center gap-6 lg:flex">
                  <span className="m w-7 shrink-0 text-[12px] text-[var(--sig)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden className="h-px w-6 shrink-0 bg-[var(--edge-3)]" />
                  <span className="w-[170px] shrink-0 text-[19px] font-medium tracking-[-0.025em]">
                    {c.name}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[14.5px] text-[var(--grey-1)]">
                    {c.line}
                  </span>
                  <span className="flex shrink-0 gap-1.5">
                    {c.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </span>
                  <span className="row-arrow shrink-0 text-[17px]" aria-hidden>
                    &rarr;
                  </span>
                </span>

                {/* phone: a card */}
                <span className="block lg:hidden">
                  <span className="flex items-baseline gap-3">
                    <span className="m text-[12px] text-[var(--sig)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[19px] font-medium tracking-[-0.025em]">{c.name}</span>
                    <span className="row-arrow ml-auto text-[16px]" aria-hidden>
                      &rarr;
                    </span>
                  </span>
                  <span className="mt-2 block text-[14px] leading-[1.45] text-[var(--grey-1)]">
                    {c.line}
                  </span>
                  <span className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                    <span className="m text-[17px] leading-none text-[var(--sig-lit)]">
                      {c.figure}
                    </span>
                    <span className="text-[11.5px] leading-tight text-[var(--grey-2)]">
                      {c.figureNote}
                    </span>
                  </span>
                </span>
              </button>
            </h3>

            <div className="drawer" data-on={on ? '1' : '0'} id={`c-${c.id}`}>
              <div>
                <div className="px-1 pb-6 sm:px-3" inert={!on}>
                  <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1fr)_260px]">
                    <p className="max-w-[70ch] text-[14.5px] leading-[1.62] text-[var(--grey-1)]">
                      {c.more}
                    </p>

                    <div>
                      {/* the figure, laptop only: the phone card already shows it */}
                      <p className="m hidden text-[26px] leading-none text-[var(--sig-lit)] lg:block">
                        {c.figure}
                      </p>
                      <p className="mt-2 hidden max-w-[34ch] text-[12px] leading-snug text-[var(--grey-2)] lg:block">
                        {c.figureNote}
                      </p>

                      <div className="flex flex-wrap gap-2 lg:mt-5">
                        <span className="chip">{c.track}</span>
                        {c.stack.map((s) => (
                          <span key={s} className="chip lg:hidden">
                            {s}
                          </span>
                        ))}
                      </div>

                      {c.href && (
                        <a
                          className="btn mt-5 !min-h-[44px] !w-auto !px-4 !text-[10.5px]"
                          href={c.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {c.hrefLabel}
                          <span aria-hidden>&#8599;</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
