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
                Results
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
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
                AI Hiring Assistant
              </div>
              <h1 className="max-w-[18ch] text-4xl font-bold leading-tight md:text-6xl">
                AI-powered candidate ranking for teams that hire fast
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-slate-300">
                Upload resumes, match against your role requirements, and get a
                ranked shortlist in seconds. HireAI helps recruiters focus on
                decisions, not manual screening.
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
                  SOC 2-ready workflow
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Resume parsing in under 30 seconds
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Human-in-the-loop scoring
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Candidate ranking preview
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Maya Patel", score: 96, roleFit: "Excellent" },
                    { name: "Jonas Reed", score: 89, roleFit: "Strong" },
                    { name: "Lucia Kim", score: 84, roleFit: "Promising" },
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
            { label: "Applications screened", value: "2.1M+" },
            { label: "Average time saved", value: "73%" },
            { label: "Recruiting teams", value: "1,400+" },
            { label: "Candidate satisfaction", value: "4.8/5" },
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
            Everything you need to shortlist the right talent confidently
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Resume Analysis",
              description:
                "Extracts skills, achievements, and role alignment from every CV automatically.",
              icon: FileSearch,
            },
            {
              title: "Bias-Aware Ranking",
              description:
                "Scorecards focus on qualification signals and make decision criteria transparent.",
              icon: ShieldCheck,
            },
            {
              title: "Team Calibration",
              description:
                "Share score rationale and align recruiters and hiring managers on candidate quality.",
              icon: Users,
            },
            {
              title: "Fast Turnaround",
              description:
                "Go from upload to ranked shortlist in minutes, even during high-volume hiring.",
              icon: Clock3,
            },
            {
              title: "Custom Role Rubrics",
              description:
                "Define what top talent looks like for each role with weighted evaluation criteria.",
              icon: Star,
            },
            {
              title: "Actionable Summaries",
              description:
                "Get concise interview prompts and risk flags for every shortlisted candidate.",
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
                Simple workflow, enterprise-level impact
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-300">
              Built for talent teams who need speed without sacrificing hiring
              quality.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload role and resumes",
                text: "Paste your job description and upload candidate documents in bulk.",
              },
              {
                step: "02",
                title: "Review AI ranking",
                text: "HireAI scores candidates against your rubric with explainable rationale.",
              },
              {
                step: "03",
                title: "Move best fits forward",
                text: "Share shortlist insights with hiring managers and schedule interviews faster.",
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
              What teams report after 30 days
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Reduced first-pass screening from 9 hours to 2 hours per role",
                "Improved interview-to-offer conversion by 28%",
                "Standardized scorecards across recruiting teams",
                "Cut time-to-shortlist from 5 days to 1 day",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <h3 className="text-2xl font-bold">Loved by hiring teams</h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  quote:
                    "HireAI helped us spot standout candidates we would have missed in manual review.",
                  name: "T. Lawson",
                  role: "Head of Talent, Northloop",
                },
                {
                  quote:
                    "The explainable scoring made it much easier to align recruiters with hiring managers.",
                  name: "A. Rivera",
                  role: "People Ops Lead, Clarity Labs",
                },
              ].map((review) => (
                <blockquote
                  key={review.name}
                  className="rounded-xl border border-white/10 bg-slate-950/50 p-4"
                >
                  <p className="text-sm text-slate-200">"{review.quote}"</p>
                  <footer className="mt-3 text-xs text-slate-400">
                    {review.name} - {review.role}
                  </footer>
                </blockquote>
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
              Common questions from recruiting teams
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Can we customize how candidates are scored?",
                a: "Yes. You can define role-specific criteria, weighting, and must-have skills for every open position.",
              },
              {
                q: "Does HireAI replace recruiters?",
                a: "No. It accelerates screening and gives structured insights, while final decisions remain with your team.",
              },
              {
                q: "How quickly can we start using it?",
                a: "Most teams are up and running in under an hour with no complex setup required.",
              },
              {
                q: "Can we use this for high-volume hiring?",
                a: "Absolutely. The platform is designed to process large candidate batches while preserving ranking quality.",
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
                Ready to hire smarter?
              </p>
              <h2 className="mt-2 max-w-[20ch] text-3xl font-bold md:text-4xl">
                Launch your first AI-powered shortlist today
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
                Start free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
        <p>2026 HireAI. Built for modern recruiting teams.</p>
      </footer>
    </main>
  );
};

export default HomePage;
