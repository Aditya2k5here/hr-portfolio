import Image from 'next/image'
import type { ReactNode } from 'react'
import { Nav } from '@/components/Nav'
import { Work } from '@/components/Work'
import { Blob } from '@/components/Blob'
import { Flow } from '@/components/Flow'
import { profile } from '@/content/profile'
import { cv } from '@/content/credentials'
import { alsoBuilt, facts, skills, proof, experience } from '@/content/brief'

export const dynamic = 'force-static'

/**
 * Aditya Srinivas, the short version.
 *
 * Six movements, each announcing its own number, so the reader can always see
 * how much is left. That is the entire structural idea: people finish a page
 * whose end is visible, and abandon one that could go on forever.
 *
 * Everything here is already on the long portfolio. Nothing is added, softened
 * or rounded; it is the same facts at a quarter of the word count.
 */

const CONTACT = [
  { k: 'Email', v: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  {
    k: 'LinkedIn',
    v: `linkedin.com/in/${profile.linkedinHandle}`,
    href: profile.linkedin,
    icon: 'in',
  },
  { k: 'GitHub', v: `github.com/${profile.githubHandle}`, href: profile.github, icon: 'git' },
  { k: 'LeetCode', v: 'leetcode.com/u/aditya-srinivas3', href: profile.leetcode, icon: 'code' },
]

export default function Page() {
  return (
    <>
      <Nav cv={cv} />

      <main id="top">
        {/* ============================================== 01 — the opening */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 lg:left-[46%]" aria-hidden>
            <Image
              src="/hero/portrait.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-[58%_center] lg:object-center"
            />
            {/* the type sits on the picture at every size; this is its ground */}
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_7_10_/_0.9),rgb(6_7_10_/_0.35)_38%,rgb(6_7_10_/_0.86))] lg:bg-[linear-gradient(90deg,var(--void),rgb(6_7_10_/_0.55)_28%,transparent_62%),linear-gradient(270deg,rgb(6_7_10_/_0.72),rgb(6_7_10_/_0.2)_14%,transparent_26%)]" />
          </div>

          <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-14 pt-[104px] lg:pb-24 lg:pt-[140px]">
            <div className="flex items-baseline gap-5">
              <span className="m text-[11px] text-[var(--sig)]">
                01 <span className="text-[var(--grey-3)]">/ 06</span>
              </span>
              <span className="tag">Backend and systems engineer</span>
            </div>

            <span className="rule-sig mt-5" aria-hidden />

            <Blob>
              <h1 className="nametype mt-6 max-w-[13ch] text-[clamp(44px,8.4vw,86px)] font-medium leading-[0.98] tracking-[-0.045em]">
                Backend and systems{' '}
                <span className="text-[var(--grey-1)]">
                  engineer<span className="text-[var(--sig-lit)]">.</span>
                </span>
              </h1>
            </Blob>

            <p className="m mt-7 max-w-[46ch] text-[13.5px] leading-[1.85] text-[var(--grey-1)]">
              Schedulers, collectors, verifiers, gateways.
              <br />
              The layer underneath, and what it actually does.
            </p>

            <p className="m mt-6 text-[12px] text-[var(--grey-2)]">
              {profile.location} · Graduating {profile.graduating}
            </p>

            <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a className="btn btn--sig sm:!w-auto" href="#work">
                View work
                <span aria-hidden>&rarr;</span>
              </a>
              <a className="btn sm:!w-auto" href={cv} target="_blank" rel="noreferrer noopener">
                Resume
                <span aria-hidden>&#8595;</span>
              </a>
              <a
                className="btn sm:!w-auto"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
                <span aria-hidden>&#8599;</span>
              </a>
            </div>

            {/* texture, not information */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-[var(--pad)] top-1/2 hidden -translate-y-1/2 flex-col items-end gap-8 xl:flex"
            >
              <p className="sidenote text-right">
                Solving
                <br />
                real
                <br />
                problems
                <br />
                with
                <br />
                code.
              </p>
              <span className="rule-sig" />
              <p className="m text-right text-[10px] leading-relaxed text-[var(--grey-3)]">
                12.9716&deg; N
                <br />
                77.5946&deg; E
              </p>
            </div>
          </div>
        </section>

        {/* ================================================== 02 — skills */}
        <Movement id="skills" n="02" name="What I work with" label="Skills">
          <ul className="cut seq grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <li
                key={s.k}
                style={{ '--i': i } as React.CSSProperties}
                className="card group flex items-start gap-4 p-5"
              >
                <span className="mt-0.5 shrink-0 text-[var(--sig)]">
                  <Glyph i={i} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15.5px] font-medium leading-snug">{s.k}</span>
                  <span className="mt-1.5 block text-[13px] leading-relaxed text-[var(--grey-2)]">
                    {s.v}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Movement>

        {/* ==================================================== 03 — work */}
        <Movement id="work" n="03" name="Selected work" label="Projects">
          <Work />
          <p className="tag mt-6 normal-case tracking-normal leading-relaxed">
            Also built: {alsoBuilt.join(', ')}.
          </p>
        </Movement>

        {/* ============================================== 04 — experience */}
        <Movement id="experience" n="04" name="Experience" label="Experience">
          <div className="cut grid gap-x-12 gap-y-5 border-l-2 border-[var(--sig)] pl-6 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div>
              <p className="text-[18px] font-medium leading-snug">{experience.role}</p>
              <p className="mt-1 text-[14px] text-[var(--grey-1)]">{experience.org}</p>
              <p className="m mt-1.5 text-[11.5px] text-[var(--grey-3)]">{experience.period}</p>
            </div>
            <div>
              <p className="max-w-[60ch] text-[15px] leading-relaxed text-[var(--grey-1)]">
                {experience.line}
              </p>
              <p className="mt-3 max-w-[60ch] text-[12.5px] leading-relaxed text-[var(--grey-3)]">
                {experience.note}
              </p>
            </div>
          </div>
        </Movement>

        {/* =============================================== 05 — education */}
        <Movement id="education" n="05" name="Education" label="Education">
          <div className="cut grid gap-x-12 gap-y-5 border-l-2 border-[var(--sig)] pl-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="text-[18px] font-medium leading-snug">
                B.E. in Information Science &amp; Engineering
              </p>
              <p className="mt-1 text-[14px] text-[var(--grey-1)]">
                Atria Institute of Technology (VTU)
              </p>
              <p className="m mt-1.5 text-[11.5px] text-[var(--grey-3)]">2023 &ndash; 2027</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {facts.slice(2).map((f) => (
                <div key={f.k}>
                  <dt className="tag">{f.k}</dt>
                  <dd className="m m-0 mt-1 text-[13px] text-[var(--paper)]">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Movement>

        {/* ============================================= 06 — credentials */}
        <Movement id="credentials" n="06" name="Credentials &amp; achievements" label="Credentials">
          <ul className="cut seq grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => {
              const inner = (
                <>
                  <span className="tag">{p.k}</span>
                  <span className="mt-2.5 block text-[14.5px] font-medium leading-snug">{p.v}</span>
                  <span className="mt-2 block text-[12px] leading-relaxed text-[var(--grey-2)]">
                    {p.note}
                  </span>
                  {p.href && (
                    <span className="row-arrow mt-3 block text-[14px]" aria-hidden>
                      &rarr;
                    </span>
                  )}
                </>
              )
              return (
                <li
                  key={p.k}
                  style={{ '--i': i } as React.CSSProperties}
                  className="card group p-5"
                >
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer noopener" className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>

          <ul className="cut mt-2.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Machine Learning & Deep Learning', 'Stanford Online / DeepLearning.AI'],
              ['Software Engineering, Cloud & Cyber Security', 'Infosys Springboard'],
              ['Full Stack Development', 'SimpliLearn'],
              ['Java', 'IIT Bombay'],
            ].map(([n, by]) => (
              <li key={n} className="card p-4">
                <p className="text-[13.5px] font-medium leading-snug">{n}</p>
                <p className="m mt-1.5 text-[11px] text-[var(--grey-3)]">{by}</p>
              </li>
            ))}
          </ul>
        </Movement>

        {/* ================================================== the sign-off */}
        <section id="contact" className="border-t border-[var(--edge)]">
          <div className="shell py-[clamp(48px,7vw,90px)]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-[clamp(36px,7vw,72px)] font-medium leading-none tracking-[-0.045em]">
                <Flow>Let&rsquo;s talk</Flow>
                <span className="text-[var(--sig-lit)]">.</span>
              </h2>
              <span className="tag">Contact</span>
            </div>

            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-relaxed text-[var(--grey-1)]">
              Open to internships, full-time roles, interesting collaborations, or just a good
              technical conversation. I reply to everything.
            </p>

            <ul className="cut seq mt-10 grid gap-2.5 sm:grid-cols-2">
              {CONTACT.map((c, i) => (
                <li key={c.k} style={{ '--i': i } as React.CSSProperties}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="card group flex min-h-[62px] items-center gap-4 px-5"
                  >
                    <span className="shrink-0 text-[var(--sig)]">
                      <ContactGlyph name={c.icon} />
                    </span>
                    <span className="min-w-0">
                      <span className="tag block">{c.k}</span>
                      <span className="m mt-0.5 block truncate text-[13px] text-[var(--paper)]">
                        {c.v}
                      </span>
                    </span>
                    <span className="row-arrow ml-auto shrink-0 text-[15px]" aria-hidden>
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
              <a className="btn btn--sig sm:!w-auto" href={`mailto:${profile.email}`}>
                Say hello
                <span aria-hidden>&rarr;</span>
              </a>
              <a className="btn sm:!w-auto" href={cv} target="_blank" rel="noreferrer noopener">
                Resume
                <span aria-hidden>&#8595;</span>
              </a>
            </div>
          </div>

          <div className="shell flex flex-wrap items-center justify-between gap-3 border-t border-[var(--edge)] py-6">
            <p className="tag">{profile.location}</p>
            <p className="tag">
              Aditya Srinivas &copy; {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

/** A numbered movement. Number, name, and a bracketed label on the right. */
function Movement({
  id,
  n,
  name,
  label,
  children,
}: {
  id: string
  n: string
  name: string
  label: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-[70px] border-t border-[var(--edge)]">
      <div className="shell py-[clamp(38px,5.5vw,74px)]">
        <div className="movement mb-[clamp(24px,3.5vw,44px)]">
          <span className="movement-no">
            {n} <span>/ 06</span>
          </span>
          <span className="rule-sig !w-5" aria-hidden />
          <h2 className="movement-name">{name}</h2>
          <span className="movement-label">[ {label} ]</span>
        </div>
        {children}
      </div>
    </section>
  )
}

/* Six marks for six skill groups. Drawn, because an icon package for six
   shapes would outweigh everything else on the page. */
function Glyph({ i }: { i: number }) {
  const c = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (i) {
    case 0:
      return (
        <svg {...c}>
          <path d="M7 6.5L3 10l4 3.5M13 6.5L17 10l-4 3.5" />
        </svg>
      )
    case 1:
      return (
        <svg {...c}>
          <rect x="2.5" y="3" width="15" height="5.5" rx="1.4" />
          <rect x="2.5" y="11.5" width="15" height="5.5" rx="1.4" />
          <path d="M5.5 5.8v.01M5.5 14.2v.01" />
        </svg>
      )
    case 2:
      return (
        <svg {...c}>
          <path d="M10 3.2c-2 0-3.2 1.3-3.2 2.7-1.4.3-2.3 1.4-2.3 2.7 0 .9.4 1.7 1.1 2.2-.3.5-.4 1-.4 1.5 0 1.7 1.5 3 3.3 3 .6 0 1.1-.1 1.5-.4.4.3.9.4 1.5.4 1.8 0 3.3-1.3 3.3-3 0-.5-.1-1-.4-1.5.7-.5 1.1-1.3 1.1-2.2 0-1.3-.9-2.4-2.3-2.7C13.2 4.5 12 3.2 10 3.2z" />
          <path d="M10 3.2v13.1" />
        </svg>
      )
    case 3:
      return (
        <svg {...c}>
          <ellipse cx="10" cy="5.2" rx="6.2" ry="2.4" />
          <path d="M3.8 5.2v9.6c0 1.3 2.8 2.4 6.2 2.4s6.2-1.1 6.2-2.4V5.2M3.8 10c0 1.3 2.8 2.4 6.2 2.4s6.2-1.1 6.2-2.4" />
        </svg>
      )
    case 4:
      return (
        <svg {...c}>
          <path d="M3.5 16.5V11M8.5 16.5V5.5M13.5 16.5V8.5M18 16.5h-16" />
        </svg>
      )
    default:
      return (
        <svg {...c}>
          <path d="M10 2.8l6 2.4v4.6c0 3.4-2.4 6.4-6 7.4-3.6-1-6-4-6-7.4V5.2z" />
          <path d="M7.6 10l1.7 1.7 3.3-3.4" />
        </svg>
      )
  }
}

function ContactGlyph({ name }: { name: string }) {
  const c = {
    width: 18,
    height: 18,
    viewBox: '0 0 18 18',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'mail':
      return (
        <svg {...c}>
          <rect x="1.8" y="3.6" width="14.4" height="10.8" rx="1.6" />
          <path d="M2.4 4.8L9 9.9l6.6-5.1" />
        </svg>
      )
    case 'in':
      return (
        <svg {...c}>
          <rect x="1.8" y="1.8" width="14.4" height="14.4" rx="2.2" />
          <path d="M5.4 7.6v5.2M5.4 5.2v.1M9 12.8V7.6M9 9.6c0-2.1 3.8-2.2 3.8 0v3.2" />
        </svg>
      )
    case 'git':
      return (
        <svg {...c}>
          <path d="M11 15.6v-2.4a2.2 2.2 0 0 0-.7-1.8c2.2-.2 4.2-1.1 4.2-4.6a3.6 3.6 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.8-.2-2.6 1a8.9 8.9 0 0 0-4.6 0C4.4 1.6 3.6 1.8 3.6 1.8a3.3 3.3 0 0 0-.1 2.5 3.6 3.6 0 0 0-1 2.5c0 3.5 2 4.4 4.2 4.6a2.2 2.2 0 0 0-.7 1.7v2.5" />
        </svg>
      )
    default:
      return (
        <svg {...c}>
          <path d="M6.2 5.6L2.6 9l3.6 3.4M11.8 5.6L15.4 9l-3.6 3.4" />
        </svg>
      )
  }
}
