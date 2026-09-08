/**
 * The HR cut.
 *
 * Same facts as the full portfolio, selected and compressed. Nothing here is a
 * new claim: every line and every figure is already on the long site, verified
 * against the repository or the run it came from.
 *
 * The selection rule is what somebody can act on in a minute. Six projects, and
 * one number each — the number they would repeat to a colleague.
 */

export type Card = {
  id: string
  name: string
  /** One line. Has to survive being read at a glance on a phone. */
  line: string
  track: string
  /** The single figure worth reading out loud. */
  figure: string
  figureNote: string
  stack: string[]
  href?: string
  hrefLabel?: string
  /** Two sentences, revealed on open. */
  more: string
}

export const cards: Card[] = [
  {
    id: 'dermora',
    name: 'Dermora AI',
    line: 'A skin lesion classifier that knows when to stay quiet.',
    track: 'Applied ML',
    figure: '47.5%',
    figureNote: 'of the validation split was also in training. I found it and rebuilt it.',
    stack: ['PyTorch', 'MobileNetV2', 'FastAPI'],
    href: 'https://github.com/Aditya2k5here/skin-lesion-classifier',
    hrefLabel: 'Code',
    more: 'MobileNetV2 over 28,010 dermatoscopic images across seven classes, abstaining below 0.15 confidence rather than guessing. Auditing my own evaluation found ISIC 2019 contains all of HAM10000, so 3,110 validation images were also in training; rebuilt clean, 62.7% balanced accuracy is a number I can defend.',
  },
  {
    id: 'hotpath',
    name: 'Hotpath',
    line: 'A regex engine that writes x86-64 at runtime, and knows when not to.',
    track: 'Systems',
    figure: '1.38×',
    figureNote: 'the optimum, against a hindsight oracle',
    stack: ['Python', 'x86-64', 'JIT'],
    href: 'https://github.com/Aditya2k5here/hotpath',
    hrefLabel: 'Code',
    more: 'Three tiers: a backtracking interpreter, an interpreted DFA, and generated machine code. Twelve workloads replayed against an oracle that sees the whole trace: the adaptive policy costs 1.38×, the call counter most production JITs ship costs 45.06×. No third-party dependencies.',
  },
  {
    id: 'terrahawk',
    name: 'TerraHawk',
    line: 'India has a credit bureau. It has no equivalent for the ground.',
    track: 'Product · co-founder',
    figure: '3',
    figureNote: 'founders, pre-incubation',
    stack: ['Strategy', 'GTM', 'Requirements'],
    more: 'Verification infrastructure for physical claims. A certified agent is dispatched and what comes back is a Truth Ticket: GPS polygon, timestamped imagery, a verified attestation, methodology, a quality score and a hash. My lane is product and go to market, not the computer vision.',
  },
  {
    id: 'loadshed',
    name: 'LoadShed',
    line: 'An API gateway that decides what to fail when there is not enough capacity.',
    track: 'Systems',
    figure: '735 / 735',
    figureNote: 'critical requests served at 12× overload',
    stack: ['Go', 'Load shedding'],
    href: 'https://github.com/Aditya2k5here/ballast',
    hrefLabel: 'Code',
    more: 'Four stages between client and upstream: capacity, deadline, priority, health. At twelve times capacity a limit set too high serves 3 of 735 critical requests; with adaptive control, 735 of 735. Ten internal Go packages.',
  },
  {
    id: 'halflife',
    name: 'Halflife-GC',
    line: 'A garbage collector that guesses how long an object will live, before it exists.',
    track: 'Systems',
    figure: '0.02%',
    figureNote: 'of a stock collector’s GC work on the best workload',
    stack: ['Python', 'Bytecode VM', 'GC'],
    href: 'https://github.com/Aditya2k5here/halflife-gc',
    hrefLabel: 'Code',
    more: 'A small language, a bytecode VM, four collectors, and a lifetime predictor running inside the allocator on every allocation. On particles it does 0.02% of the work a stock generational collector does. On doc_pipeline it does 190%, and that row is in the published table too.',
  },
  {
    id: 'riches',
    name: 'Riches Garden',
    line: 'A live festival site, and the features I talked the committee out of.',
    track: 'Web · live',
    figure: '89 → 14 kB',
    figureNote: 'Kannada webfont, subset to the glyphs in use',
    stack: ['Next.js', 'TypeScript', 'axe-core'],
    href: 'https://riches-garden-ganeshothsava.vercel.app/',
    hrefLabel: 'Open the site',
    more: 'They run on a form and a sheet, so the database, dashboard and auth were the first three things removed. Nine content files hold every fact, and five audit gates run before release: links, axe-core, contrast sampled from rendered pixels, tap targets, page weight.',
  },
]

/** Named rather than hidden. */
export const alsoBuilt = ['RaftFuzz', 'NNVerify', 'AI Lifestyle Mirror', 'Digital Heritage Preservation']

export const facts = [
  { k: 'Now', v: 'Final year, B.E. ISE' },
  { k: 'Where', v: 'Atria Institute of Technology, Bangalore' },
  { k: 'CGPA', v: '8.22 / 10, no backlogs' },
  { k: 'Free from', v: 'May 2027' },
]

export const skills = [
  { k: 'Languages', v: 'Python · Go · TypeScript · JavaScript · SQL · Java' },
  { k: 'Systems', v: 'JIT · Garbage collection · Load shedding · Deterministic simulation' },
  { k: 'AI and ML', v: 'PyTorch · scikit-learn · TensorFlow · OpenCV · MediaPipe' },
  { k: 'Backend', v: 'FastAPI · Node.js · asyncio · WebSockets · REST' },
  { k: 'Data', v: 'pandas · NumPy · PostgreSQL · Power BI · Tableau' },
  { k: 'Quality', v: 'Test design · axe-core · Playwright · GitHub Actions' },
]

export const proof = [
  {
    k: 'Published',
    v: 'Digital Heritage Preservation Technologies for Monasteries of Sikkim',
    note: 'First author of five · Advancement in Image Processing and Pattern Recognition, 2026',
    href: 'https://doi.org/10.5281/zenodo.19413268',
  },
  {
    k: 'Won',
    v: '1st place, Cicada Agentic AI Hackathon',
    note: 'Built and deployed a working agentic system inside the event window',
  },
  {
    k: 'Reached',
    v: 'Smart India Hackathon 2025',
    note: 'SIH25061 · led system architecture and technical documentation',
  },
  {
    k: 'Ran',
    v: 'IEEE Student Chapter, event organiser',
    note: '5+ technical events, 100+ attendees',
  },
]

export const experience = {
  role: 'Business Strategy Intern',
  org: 'Veniteck Solutions',
  period: 'May – Aug 2026',
  line: 'Two international ventures taken from an open brief to a costed proposal an investor could read.',
  note: 'Strategy and requirements, not engineering. Neither had launched when I left.',
}
