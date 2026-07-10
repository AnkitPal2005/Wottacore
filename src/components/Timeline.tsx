"use client";

export default function Timeline() {
  const steps = [
    {
      phase: "01",
      name: "Discovery",
      title: "Understanding Requirements",
      description: "Deep dive workshops to explore your business model, target audience, and engineering constraints.",
    },
    {
      phase: "02",
      name: "Planning",
      title: "Architectural Planning",
      description: "Defining data structures, API definitions, wireframes, cloud structures, and roadmap milestones.",
    },
    {
      phase: "03",
      name: "Design",
      title: "High-Fidelity Interface",
      description: "Creating responsive, interactive Figma prototypes that match modern visual aesthetics.",
    },
    {
      phase: "04",
      name: "Development",
      title: "Clean Production Code",
      description: "Agile sprints turning designs into clean, modular, and optimized codebases with robust unit tests.",
    },
    {
      phase: "05",
      name: "Testing",
      title: "Quality Engineering",
      description: "Automated end-to-end user tests, accessibility testing, and cross-platform verification.",
    },
    {
      phase: "06",
      name: "Deployment",
      title: "Resilient Launch",
      description: "Deploying production-ready builds onto scalable cluster orchestration configurations.",
    },
    {
      phase: "07",
      name: "Support",
      title: "Continuous Evolution",
      description: "Proactive log monitoring, system updates, and continuous development of new feature sets.",
    },
  ];

  // Duplicate steps to create an infinite loop marquee effect
  const doubleSteps = [...steps, ...steps];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Process</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Application Development Phase
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Gradient overlays to fade out marquee edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max">
          {doubleSteps.map((step, index) => (
            <div
              key={`${step.name}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl p-6 relative border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-primary tracking-wider font-mono">PHASE {step.phase}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {step.name}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
