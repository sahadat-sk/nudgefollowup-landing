import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NudgeFollowup — Follow-up tracking for small businesses, without the spreadsheet",
};

const filters = [
  { label: "Overdue", count: "4", tone: "amber" },
  { label: "Due today", count: "2", tone: "violet" },
  { label: "Due this week", count: "9", tone: "ink" },
];

const features = [
  {
    title: "Overdue, due today, due this week",
    body: "One glance tells you who needs a nudge. No scrolling through six hundred rows to find the one that's gone quiet.",
  },
  {
    title: "A timeline for every contact",
    body: "Calls, notes, meetings, and emails, logged against the person they belong to — so the story of a relationship isn't scattered across tabs and inboxes.",
  },
  {
    title: "Status at a glance",
    body: "Won, lost, in progress — color-coded and updated in one click, instead of a column of typos (\"won\", \"Won\", \"WON \").",
  },
  {
    title: "Know where they came from",
    body: "Referral, website, cold outreach — tag the source once, and see which one is actually bringing in business.",
  },
];

const steps = [
  {
    number: "1",
    title: "Add your contacts",
    body: "Add them in one at a time, or work through your current list in one sitting — most people are caught up in a few minutes.",
  },
  {
    number: "2",
    title: "Set a next follow-up date",
    body: "NudgeFollowup watches the calendar for you and surfaces exactly who's overdue, due today, or due this week.",
  },
  {
    number: "3",
    title: "Log what happened",
    body: "A quick note after each call or email, and the full history stays with the contact — not buried in a sent-mail folder.",
  },
];

const faqs = [
  {
    q: "How is this different from a follow-up spreadsheet?",
    a: "A spreadsheet doesn't remind you of anything — you have to remember to open it. NudgeFollowup surfaces who's overdue, due today, and due this week on its own, and keeps a timeline of every call, note, and email against each contact.",
  },
  {
    q: "Do I need to be technical to set it up?",
    a: "No. If you can fill in a spreadsheet row, you can add a contact here. Most people are fully switched over in under ten minutes.",
  },
  {
    q: "Can I bring over my existing contacts?",
    a: "You can add them directly today — most people are fully moved over in a few minutes for an active list. Spreadsheet import is on the roadmap for anyone with a larger backlog of contacts.",
  },
  {
    q: "Is this a full CRM?",
    a: "Deliberately not. There's no pipeline forecasting or sales automation — just a fast, reliable way to track who you owe a follow-up to, so nothing falls through.",
  },
];

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard/screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header className="border-b border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-violet flex items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-paper" />
            </span>
            <span className="font-semibold text-[17px] tracking-tight">
              Nudge<span className="text-inkFaint font-normal">Followup</span>
            </span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-[15px] text-inkSoft">
            <a href="#product" className="hover:text-ink transition-colors">Product</a>
            <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          </nav>
          <a
            href="#get-started"
            className="text-[15px] font-medium bg-ink text-paper px-4 py-2 rounded-md hover:bg-violetDeep transition-colors"
          >
            Get started
          </a>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.4rem] md:leading-[1.06] text-ink max-w-[15ch]">
              Stop losing leads in row 47 of a spreadsheet.
            </h1>
            <p className="mt-6 text-lg text-inkSoft max-w-[42ch] leading-relaxed">
              NudgeFollowup keeps track of every contact, every promise to follow up, and every
              date you can&apos;t afford to miss — so nothing depends on you remembering to check
              a tab.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#get-started"
                className="bg-violet text-paper text-[15px] font-medium px-6 py-3 rounded-md hover:bg-violetDeep transition-colors"
              >
                Start free
              </a>
              <a
                href="#how-it-works"
                className="text-[15px] font-medium text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
              >
                See how it works
              </a>
            </div>
            <p className="mt-5 text-sm text-inkFaint">
              No credit card. Add your first contacts in about two minutes.
            </p>
          </div>

          {/* Before / after visual: messy grid -> organized follow-up list */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3" aria-hidden="true">
            <div className="border border-line rounded-md overflow-hidden bg-white">
              <div className="px-3 py-2 text-xs text-inkFaint border-b border-line font-mono">followups.xlsx</div>
              <div className="divide-y divide-line font-mono text-[11px] text-inkFaint">
                {["Priya K.", "R. Fernandes", "M. Alavi", "J. Okoro", "T. Suresh"].map((name, i) => (
                  <div key={name} className="grid grid-cols-[1fr_1.1fr] gap-2 px-3 py-2">
                    <span className="truncate">{name}</span>
                    <span className={i === 1 ? "text-amber line-through decoration-2" : i === 3 ? "line-through decoration-line" : ""}>
                      {i === 1 ? "8/3/26" : i === 3 ? "?" : "8/1" + i + "/26"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-inkFaint text-xl">→</div>

            <div className="border border-line rounded-md overflow-hidden bg-white shadow-[0_1px_0_0_rgba(28,26,22,0.04)]">
              <div className="px-3 py-2 text-xs text-inkFaint border-b border-line">This week</div>
              <div className="divide-y divide-line text-[13px]">
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span>Priya K.</span>
                  <span className="text-amber text-[11px] font-medium bg-amber/10 px-1.5 py-0.5 rounded">Overdue</span>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span>R. Fernandes</span>
                  <span className="text-sage text-[11px] font-medium bg-sage/10 px-1.5 py-0.5 rounded">Won</span>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span>M. Alavi</span>
                  <span className="text-violet text-[11px] font-medium bg-violet/10 px-1.5 py-0.5 rounded">Due today</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-paperAlt border-y border-line">
          <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16">
            <h2 className="font-serif text-[1.9rem] leading-tight text-ink">
              The spreadsheet always wins.
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-inkSoft">
              <p className="leading-relaxed">
                Row 12 says August 3rd. It&apos;s September, and nobody noticed.
              </p>
              <p className="leading-relaxed">
                A deal with a good lead goes quiet, and nobody remembers what was actually said.
              </p>
              <p className="leading-relaxed">
                Two people edit the same file, save it, and one version quietly wins.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="product" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <h2 className="font-serif text-[2rem] md:text-[2.3rem] text-ink max-w-[20ch]">
            Everything a spreadsheet won&apos;t do for you.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((f) => (
              <div key={f.title} className="border-t border-line pt-5">
                <h3 className="font-semibold text-ink text-[17px]">{f.title}</h3>
                <p className="mt-2 text-inkSoft leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* filter chips echoing the real product UI */}
          <div className="mt-14 flex flex-wrap gap-3">
            {filters.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 border border-line rounded-full pl-4 pr-3 py-2 text-sm bg-white"
              >
                <span className="text-inkSoft">{f.label}</span>
                <span
                  className={`tabular font-mono text-xs px-1.5 py-0.5 rounded ${
                    f.tone === "amber"
                      ? "bg-amber/10 text-amber"
                      : f.tone === "violet"
                      ? "bg-violet/10 text-violet"
                      : "bg-ink/5 text-inkSoft"
                  }`}
                >
                  {f.count}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-paperAlt border-y border-line">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <h2 className="font-serif text-[2rem] md:text-[2.3rem] text-ink">
              Three steps, not a training session.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <div key={s.number}>
                  <div className="font-mono text-sm text-violet">{s.number}</div>
                  <h3 className="mt-3 font-semibold text-ink text-[17px]">{s.title}</h3>
                  <p className="mt-2 text-inkSoft leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <blockquote className="max-w-[46ch]">
            <p className="font-serif italic text-[1.6rem] md:text-[1.9rem] leading-snug text-ink">
              I used to keep a follow-up tab across three different spreadsheets. Now I open one
              page in the morning and know exactly who to call.
            </p>
            <footer className="mt-5 text-inkFaint text-sm">
              Early NudgeFollowup user &middot; home renovation business
            </footer>
          </blockquote>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-paperAlt border-y border-line">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <h2 className="font-serif text-[2rem] md:text-[2.3rem] text-ink">
              Priced for a small business, not an enterprise deal.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-white border border-line rounded-lg p-8">
                <h3 className="font-semibold text-ink text-lg">Free</h3>
                <p className="mt-1 text-inkFaint text-sm">For getting off the spreadsheet</p>
                <p className="mt-6 font-serif text-3xl text-ink">$0</p>
                <ul className="mt-6 space-y-3 text-sm text-inkSoft">
                  <li>Up to 50 contacts</li>
                  <li>Overdue, due today, due this week views</li>
                  <li>Unlimited notes and call logs</li>
                </ul>
                <a
                  href="#get-started"
                  className="mt-8 inline-block w-full text-center border border-ink text-ink text-[15px] font-medium px-5 py-2.5 rounded-md hover:bg-ink hover:text-paper transition-colors"
                >
                  Start free
                </a>
              </div>
              <div className="bg-ink border border-ink rounded-lg p-8 text-paper">
                <h3 className="font-semibold text-lg">Pro</h3>
                <p className="mt-1 text-paper/60 text-sm">For a growing contact list</p>
                <p className="mt-6 font-serif text-3xl">
                  $15<span className="text-base font-sans text-paper/60">/month</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-paper/80">
                  <li>Unlimited contacts</li>
                  <li>Email reminders for overdue follow-ups</li>
                  <li>Source and status reporting</li>
                </ul>
                <a
                  href="#get-started"
                  className="mt-8 inline-block w-full text-center bg-violet text-paper text-[15px] font-medium px-5 py-2.5 rounded-md hover:bg-violetDeep transition-colors"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <h2 className="font-serif text-[2rem] md:text-[2.3rem] text-ink">Questions, answered plainly.</h2>
          <div className="mt-10 max-w-2xl divide-y divide-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink text-[16px]">
                  {item.q}
                  <span className="text-inkFaint group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-inkSoft leading-relaxed max-w-[58ch]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="get-started" className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
            <h2 className="font-serif text-[2.1rem] md:text-[2.6rem] max-w-[18ch] mx-auto leading-tight">
              Give your spreadsheet a rest.
            </h2>
            <p className="mt-4 text-paper/70 max-w-[42ch] mx-auto">
              Bring your contacts over and see who needs a nudge today — free, no card required.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-violet text-paper text-[15px] font-medium px-7 py-3.5 rounded-md hover:bg-violetDeep transition-colors"
            >
              Start free
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-inkFaint">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-md bg-violet flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-sm bg-paper" />
            </span>
            <span>&copy; {new Date().getFullYear()} NudgeFollowup</span>
          </div>
          <nav aria-label="Footer" className="flex gap-6">
            <a href="#product" className="hover:text-ink transition-colors">Product</a>
            <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
