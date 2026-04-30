import Section from "../components/Section";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function CompanyProfile() {
  return (
    <div className="space-y-8">
      <Section id="nature" title="Nature of Agency">
        <p>
          TechBridge Solutions Inc. is a technology consulting firm specializing in
          custom software development, cloud infrastructure, and digital transformation
          for SMEs and enterprises across Southeast Asia. The agency operates within the
          Information Technology and Services industry.
        </p>
      </Section>

      <Section id="mvg" title="Mission, Vision & Goal">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Mission", body: "Empower businesses through reliable, human-centered technology solutions.", color: "bg-primary/10 text-primary" },
            { label: "Vision", body: "To be Southeast Asia's most trusted partner in digital innovation.", color: "bg-accent/10 text-accent" },
            { label: "Goal", body: "Deliver measurable value to every client through quality engineering and lasting partnerships.", color: "bg-success/10 text-success" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-border p-5">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${c.color}`}>
                {c.label}
              </span>
              <p className="mt-3 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="history" title="History & Background">
        <p>
          Founded in 2012, TechBridge Solutions began as a small consultancy of five
          engineers focused on web application development. Over the years, the company
          has grown into a 120-strong team of designers, engineers, and project managers,
          serving clients across finance, healthcare, education, and logistics.
        </p>
        <p className="mt-3">
          The company is recognized for its commitment to clean engineering practices,
          its strong internship program, and its emphasis on continuous learning.
        </p>
      </Section>

      <Section id="org" title="Organizational Structure">
        <div className="space-y-4">
          {[
            { role: "Chief Executive Officer", name: "Mr. Anton Reyes", level: 0 },
            { role: "Chief Technology Officer", name: "Engr. Lara Cruz", level: 1 },
            { role: "Engineering Manager", name: "Mr. Carlo Tan", level: 2 },
            { role: "Senior Software Engineer", name: "Ms. Rachel Lim", level: 3 },
            { role: "Intern (You)", name: "Juan Dela Cruz", level: 4 },
          ].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary"
              style={{ marginLeft: `${p.level * 16}px` }}
            >
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white">
                <HiOutlineUserGroup />
              </div>
              <div>
                <p className="font-semibold text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
