import { useMemo, useState } from "react";
import { HiStar, HiOutlineStar, HiCheckCircle, HiOutlineClock } from "react-icons/hi";

interface Criterion {
  key: string;
  label: string;
  description: string;
}

const criteria: Criterion[] = [
  { key: "attendance", label: "Attendance", description: "Punctuality and consistency in reporting to work." },
  { key: "quality", label: "Work Quality", description: "Accuracy, thoroughness, and reliability of output." },
  { key: "communication", label: "Communication Skills", description: "Clarity, professionalism, and responsiveness." },
  { key: "technical", label: "Technical Skills", description: "Application of relevant technical knowledge." },
  { key: "attitude", label: "Attitude", description: "Initiative, teamwork, and professionalism." },
];

type Ratings = Record<string, number>;

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= value;
        const Icon = active ? HiStar : HiOutlineStar;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`transition-transform hover:scale-110 ${
              active ? "text-warning" : "text-muted-foreground/40"
            }`}
            aria-label={`Rate ${n}`}
          >
            <Icon className="text-2xl" />
          </button>
        );
      })}
    </div>
  );
}

export default function Assessment() {
  const [ratings, setRatings] = useState<Ratings>({
    attendance: 5,
    quality: 4,
    communication: 5,
    technical: 4,
    attitude: 5,
  });
  const [remarks, setRemarks] = useState(
    "The intern consistently demonstrated initiative, professionalism, and a strong willingness to learn."
  );
  const [completed, setCompleted] = useState(true);

  const setRating = (key: string, v: number) =>
    setRatings((r) => ({ ...r, [key]: v }));

  const total = useMemo(
    () => Object.values(ratings).reduce((a, b) => a + b, 0),
    [ratings]
  );
  const max = criteria.length * 5;
  const percentage = Math.round((total / max) * 100);
  const rating = (total / criteria.length).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="bg-card rounded-xl border border-border shadow-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Evaluation Form
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-1">
              Student Internship Evaluation
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Evaluation Period: Feb 2026 – May 2026 · Evaluator: Engr. Lara Cruz
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all ${
              completed
                ? "bg-success/15 text-success"
                : "bg-warning/15 text-warning"
            }`}
            onClick={() => setCompleted((c) => !c)}
          >
            {completed ? <HiCheckCircle /> : <HiOutlineClock />}
            {completed ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Overall Score</span>
            <span className="font-semibold text-foreground">
              {total}/{max} · {rating} ★
            </span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Criteria cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {criteria.map((c) => (
          <div
            key={c.key}
            className="bg-card rounded-xl border border-border shadow-card p-5 hover:shadow-elegant transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">{c.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-secondary text-foreground">
                {ratings[c.key]}/5
              </span>
            </div>
            <div className="mt-4">
              <StarRating
                value={ratings[c.key]}
                onChange={(v) => setRating(c.key, v)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary table */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Evaluation Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase text-muted-foreground bg-secondary/50">
                <th className="py-3 px-5">Criteria</th>
                <th className="py-3 px-5">Rating</th>
                <th className="py-3 px-5">Equivalent</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.key} className="border-t border-border">
                  <td className="py-3 px-5 font-medium">{c.label}</td>
                  <td className="py-3 px-5">{ratings[c.key]} / 5</td>
                  <td className="py-3 px-5 text-muted-foreground">
                    {ratings[c.key] >= 5
                      ? "Excellent"
                      : ratings[c.key] >= 4
                      ? "Very Good"
                      : ratings[c.key] >= 3
                      ? "Satisfactory"
                      : ratings[c.key] >= 2
                      ? "Needs Improvement"
                      : "Poor"}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-border bg-secondary/30">
                <td className="py-3 px-5 font-bold">Overall</td>
                <td className="py-3 px-5 font-bold">{rating} / 5</td>
                <td className="py-3 px-5 font-semibold text-primary">{percentage}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Remarks */}
      <div className="bg-card rounded-xl border border-border shadow-card p-5 sm:p-6">
        <label className="block text-sm font-semibold text-foreground mb-2">
          Remarks
        </label>
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Add evaluator remarks..."
        />
        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-4">
          <button className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors">
            Save Draft
          </button>
          <button className="px-5 py-2.5 rounded-lg gradient-primary text-white text-sm font-semibold shadow-elegant hover:opacity-95 transition-opacity">
            Submit Evaluation
          </button>
        </div>
      </div>
    </div>
  );
}
