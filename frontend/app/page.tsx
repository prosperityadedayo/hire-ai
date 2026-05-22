import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Check,
  Clock3,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.18),transparent_22%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(15,23,42,0.95))]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10">
          <nav className="mb-14 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-600 p-2">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-200">
                HireAI
              </span>
            </div>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                How it works
              </a>
              <a href="#results" className="transition hover:text-white">
                Output
              </a>
              <a href="#roadmap" className="transition hover:text-white">
                Roadmap
              </a>
            </div>
            <Button
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-500"
            >
              Start free
            </Button>
          </nav>

          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-200">
                <Sparkles className="h-3.5 w-3.5" />
                Built for small and medium businesses
              </div>
              <h1 className="max-w-[18ch] text-4xl font-bold leading-tight md:text-6xl">
                The hiring assistant SMEs use to screen candidates in 30 seconds
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-slate-300">
                HireAI gives business owners the judgment of a senior recruiter
                without the overhead of building an in-house HR team. Paste a
                job description, upload candidate CVs, and receive a ranked,
                structured assessment in one pass.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-500"
                >
                  Try demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Book walkthrough
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Up to 5 CVs analyzed in one batch
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Typical turnaround: 30 seconds
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Ranked results with interview questions
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Live output preview
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Maya Patel", score: 96, roleFit: "Strong Match" },
                    { name: "Jonas Reed", score: 71, roleFit: "Partial Match" },
                    { name: "Lucia Kim", score: 48, roleFit: "Weak Match" },
                  ].map((candidate) => (
                    <div
                      key={candidate.name}
                      className="rounded-xl border border-white/10 bg-slate-900/80 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">
                          {candidate.name}
                        </p>
                        <p className="text-sm font-semibold text-emerald-300">
                          {candidate.score}/100
                        </p>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Fit assessment: {candidate.roleFit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-slate-300 md:grid-cols-4 md:px-10">
          {[
            { label: "CVs per analysis", value: "Up to 5" },
            { label: "Match score range", value: "0-100" },
            { label: "Interview questions", value: "3 each" },
            { label: "Typical analysis time", value: "30 sec" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-slate-950/40 p-4"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Production-ready features that remove manual CV screening
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Multi-CV Analysis",
              description:
                "Upload up to five CVs at once and process candidates in a single batch.",
              icon: FileSearch,
            },
            {
              title: "AI-Powered Scoring",
              description:
                "Each candidate receives a 0-100 match score based on alignment with your job description.",
              icon: ShieldCheck,
            },
            {
              title: "Structured Assessment",
              description:
                "Every report includes strengths, red flags, and a clear match label for faster decision-making.",
              icon: Users,
            },
            {
              title: "Interview Question Generation",
              description:
                "HireAI creates three tailored interview questions per candidate based on profile gaps.",
              icon: Clock3,
            },
            {
              title: "Ranked Results",
              description:
                "Candidates are automatically ordered from strongest to weakest fit for the role.",
              icon: Star,
            },
            {
              title: "PDF CV Support",
              description:
                "Upload real-world PDF resumes directly with no formatting or template conversion required.",
              icon: Sparkles,
            },
          ].map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-0.5 hover:border-blue-400/50"
            >
              <feature.icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-300">
                How it works
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Senior-level screening judgment, without senior-level cost
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Designed for owners and managers who need consistent hiring
              decisions but do not have dedicated recruitment teams.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Paste your job description",
                text: "Define requirements once so every candidate is evaluated against the same criteria.",
              },
              {
                step: "02",
                title: "Upload candidate CVs",
                text: "Add up to five PDF CVs and let HireAI extract relevant experience and skill signals.",
              },
              {
                step: "03",
                title: "Receive ranked assessments",
                text: "Review scores, strengths, red flags, and tailored interview questions in around 30 seconds.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <p className="text-sm font-semibold text-emerald-300">
                  {item.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
      >
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-2xl font-bold">
              What you get in every analysis
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Candidate-by-candidate match score with a clear 0-100 scale",
                "Strengths summary linked to the role requirements",
                "Red flags that may need deeper interview validation",
                "Three tailored interview questions for each candidate",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="roadmap"
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-8"
          >
            <h3 className="text-2xl font-bold">Product roadmap</h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  phase: "Phase 2",
                  title: "Employer accounts",
                  detail:
                    "Sign up, save job postings, and revisit candidate analysis history by role.",
                },
                {
                  phase: "Phase 3",
                  title: "Candidate portal",
                  detail:
                    "Create shareable application links and let candidates apply directly through HireAI.",
                },
                {
                  phase: "Phase 4",
                  title: "Communication tools",
                  detail:
                    "Email shortlisted candidates, schedule interviews, and use rejection templates.",
                },
                {
                  phase: "Phase 5",
                  title: "Advanced intelligence",
                  detail:
                    "Bias detection, diversity insights, and long-term score-to-performance tracking.",
                },
              ].map((item) => (
                <article
                  key={item.phase}
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {item.phase}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Common questions from SMEs
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Can we customize how candidates are scored?",
                a: "Yes. Each analysis starts from your job description, so scoring reflects your specific role requirements.",
              },
              {
                q: "How many CVs can we analyze at once?",
                a: "You can upload up to five candidate CVs per analysis and receive ranked outputs in one run.",
              },
              {
                q: "What format do CVs need to be in?",
                a: "PDF CVs are supported directly, so you can use resumes exactly as candidates submit them.",
              },
              {
                q: "What does the output include?",
                a: "Each candidate report includes a 0-100 match score, strengths, red flags, a match label, and three tailored interview questions.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-blue-400/30 bg-linear-to-r from-blue-700/30 via-blue-600/15 to-emerald-500/20 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-200">
                Ready to stop manual CV screening?
              </p>
              <h2 className="mt-2 max-w-[20ch] text-3xl font-bold md:text-4xl">
                Hire better, faster, and more consistently with HireAI
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
                Analyze candidates now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                See product demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
        <p>2026 HireAI. AI hiring support for small and medium businesses.</p>
      </footer>
    </main>
  );
};

export default HomePage;
