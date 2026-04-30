import Section from "../components/Section";

const weeklyReports = [
  { week: 1, dates: "Feb 03 – Feb 07", summary: "Onboarding, environment setup, version control orientation.", hours: 40 },
  { week: 2, dates: "Feb 10 – Feb 14", summary: "Joined sprint planning, fixed UI bugs in client dashboard.", hours: 40 },
  { week: 3, dates: "Feb 17 – Feb 21", summary: "Built reusable form components in React + TypeScript.", hours: 40 },
  { week: 4, dates: "Feb 24 – Feb 28", summary: "Integrated REST APIs and wrote unit tests with Vitest.", hours: 40 },
];

const dtr = [
  { date: "Feb 03", in: "9:00 AM", out: "6:00 PM", total: "8h 00m" },
  { date: "Feb 04", in: "8:55 AM", out: "6:05 PM", total: "8h 10m" },
  { date: "Feb 05", in: "9:02 AM", out: "6:00 PM", total: "7h 58m" },
  { date: "Feb 06", in: "9:00 AM", out: "6:15 PM", total: "8h 15m" },
  { date: "Feb 07", in: "9:00 AM", out: "6:00 PM", total: "8h 00m" },
];

export default function WorkExperiences() {
  return (
    <div className="space-y-8">
      <Section id="weekly" title="Weekly Reports" subtitle="Summary of weekly tasks and milestones.">
        <div className="space-y-3">
          {weeklyReports.map((w) => (
            <div
              key={w.week}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border border-border hover:shadow-soft transition-all"
            >
              <div className="w-14 h-14 rounded-lg gradient-primary flex flex-col items-center justify-center text-white flex-shrink-0">
                <span className="text-[10px] uppercase">Week</span>
                <span className="font-bold">{w.week}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{w.dates}</p>
                <p className="text-sm text-muted-foreground">{w.summary}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-success/10 text-success">
                {w.hours} hrs
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="dtr" title="Daily Time Record" subtitle="Daily attendance log.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase text-muted-foreground border-b border-border">
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Time In</th>
                <th className="py-3 px-3">Time Out</th>
                <th className="py-3 px-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {dtr.map((d) => (
                <tr key={d.date} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 px-3 font-medium">{d.date}</td>
                  <td className="py-3 px-3 text-muted-foreground">{d.in}</td>
                  <td className="py-3 px-3 text-muted-foreground">{d.out}</td>
                  <td className="py-3 px-3 font-semibold text-success">{d.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="progress" title="Progress Report" subtitle="Overall progress against learning targets.">
        {[
          { label: "Technical Skills", value: 85 },
          { label: "Project Contributions", value: 78 },
          { label: "Communication", value: 90 },
          { label: "Professional Conduct", value: 95 },
        ].map((item) => (
          <div key={item.label} className="mb-4 last:mb-0">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted-foreground">{item.value}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full gradient-primary rounded-full transition-all duration-700"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section id="analysis" title="Analysis Report" subtitle="Reflections and key takeaways.">
        <p>
          The internship has significantly strengthened both my technical and
          professional capabilities. Working alongside experienced engineers gave me
          insights into modern software development practices including agile workflows,
          peer code review, and continuous deployment pipelines.
        </p>
        <p className="mt-3">
          Key strengths developed include problem-solving, time management, and
          collaboration. Areas identified for further improvement include backend
          architecture and database optimization — both of which I plan to deepen
          through self-study and continued practice.
        </p>
      </Section>
    </div>
  );
}
