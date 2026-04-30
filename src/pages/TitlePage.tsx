import { Link } from "react-router-dom";
import {
  HiOutlineBookOpen,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlinePaperClip,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineMap,
} from "react-icons/hi";
import campusBg from "../assets/campus-bg.png";

const studentInfo = [
  { label: "Student Name", value: "John Rey B. Supetran" },
  { label: "Student ID", value: "MA22-IT-06261" },
  {
    label: "Course & Year",
    value: "Bachelor of Science in Information Technology, 4th Year",
  },
  { label: "Institution", value: "Occidental Mindoro State College" },
  { label: "Host Company", value: "Occidental Mindoro State College, Sj Campus Registrar" },
  { label: "OJT Coordinator", value: "Leiza Pelayo" },
];

const tableOfContents = [
  { num: "01", label: "Acknowledgment", to: "/introduction#acknowledgment" },
  { num: "02", label: "Student Trainee Prayer", to: "/introduction#prayer" },
  { num: "03", label: "Personal Philosophy", to: "/introduction#philosophy" },
  { num: "04", label: "Career Plan", to: "/introduction#career" },
  { num: "05", label: "Chapter I — Introduction", to: "/introduction" },
  { num: "06", label: "Chapter II — Company Profile", to: "/company-profile" },
  { num: "07", label: "Chapter III — Work Experiences", to: "/work-experiences" },
  { num: "08", label: "Chapter IV — Assessment", to: "/assessment" },
  { num: "09", label: "Appendices", to: "/appendices" },
];

const chapters = [
  {
    icon: HiOutlineBookOpen,
    title: "Chapter I: Introduction",
    desc: "Overview of internship importance, objectives, and setting",
    to: "/introduction",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "Chapter II: Company Profile",
    desc: "Details about the host company, its mission, and structure",
    to: "/company-profile",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Chapter III: Work Experiences",
    desc: "Weekly reports, time records, and project documentation",
    to: "/work-experiences",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: HiOutlineClipboardCheck,
    title: "Chapter IV: Assessment",
    desc: "Evaluation forms and internship performance assessment",
    to: "/assessment",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: HiOutlinePaperClip,
    title: "Appendices",
    desc: "Additional documentation, certificates, and attachments",
    to: "/appendices",
    color: "from-rose-500 to-pink-600",
  },
];

function SectionTitle({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-elegant">
          <Icon className="text-white text-xl" />
        </div>
      )}
      <div>
        {eyebrow && (
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
    </div>
  );
}

export default function TitlePage() {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* HERO with student info */}
      <section
        className="relative overflow-hidden rounded-2xl shadow-elegant border border-border"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--background)/0.85), hsl(var(--background)/0.7)), url(${campusBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 gradient-primary" />
        <div className="px-6 sm:px-12 py-10 sm:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              College of Arts, Science, and Technology
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              ON-THE-JOB-TRAINING
            </h1>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              A complete documentation of the student's internship experience.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {studentInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card/90 backdrop-blur-sm border-l-4 border-primary rounded-lg px-5 py-4 shadow-card"
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                  {info.label}
                </p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-foreground">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <SectionTitle eyebrow="Navigation" title="Table of Contents" icon={HiOutlineMap} />
        <ol className="divide-y divide-border">
          {tableOfContents.map((row) => (
            <li key={row.num}>
              <Link
                to={row.to}
                className="flex items-center gap-4 py-3 group hover:bg-secondary/60 -mx-2 px-2 rounded-md transition-colors"
              >
                <span className="text-xs font-mono font-bold text-primary w-8">
                  {row.num}
                </span>
                <span className="flex-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {row.label}
                </span>
                <HiOutlineArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ACKNOWLEDGMENT */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <SectionTitle eyebrow="Section 01" title="Acknowledgment" icon={HiOutlineHeart} />
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>
            I would like to express my deepest gratitude to my OJT coordinator,
            <strong className="text-foreground"> Prof. Maria Santos</strong>, for her
            guidance and unwavering support throughout this journey. Her wisdom and
            patience have been instrumental in shaping this internship experience.
          </p>
          <p>
            To my host company, for entrusting me with meaningful work and giving me
            the chance to learn from real-world projects — thank you. To my
            supervisors and colleagues, your mentorship turned every challenge into a
            stepping stone for growth.
          </p>
          <p>
            Finally, to my family and friends — your encouragement is the foundation
            on which all of this stands. This portfolio is a small reflection of the
            collective effort behind my training.
          </p>
        </div>
      </section>

      {/* STUDENT TRAINEE PRAYER */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <SectionTitle eyebrow="Section 02" title="Student Trainee Prayer" icon={HiOutlineSparkles} />
        <blockquote className="border-l-4 border-primary pl-5 italic text-muted-foreground space-y-3">
          <p>
            "Lord, grant me the wisdom to learn, the patience to listen, and the
            courage to face every task with diligence."
          </p>
          <p>
            "May my hands work with skill, my mind think with clarity, and my heart
            stay humble in every challenge."
          </p>
          <p>
            "Bless this season of training, that I may grow into a professional who
            uplifts others and serves with integrity. Amen."
          </p>
        </blockquote>
      </section>

      {/* PERSONAL PHILOSOPHY */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <SectionTitle eyebrow="Section 03" title="Personal Philosophy" icon={HiOutlineLightBulb} />
        <p className="text-muted-foreground leading-relaxed">
          I believe that growth begins where comfort ends. Every line of code, every
          conversation, every mistake is an opportunity to refine craft and
          character. I strive to build with curiosity, work with integrity, and lead
          with empathy — because technology is only as meaningful as the people it
          serves.
        </p>
      </section>

      {/* CAREER PLAN */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <SectionTitle eyebrow="Section 04" title="Career Plan" icon={HiOutlineBriefcase} />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              term: "Short-Term (0–2 yrs)",
              text: "Begin a career as a full-stack developer, contribute to production-grade web applications, and earn relevant certifications.",
            },
            {
              term: "Mid-Term (3–5 yrs)",
              text: "Specialize in cloud architecture and DevOps, lead small engineering teams, and mentor junior developers.",
            },
            {
              term: "Long-Term (5+ yrs)",
              text: "Launch a tech venture focused on practical solutions for local businesses while continuously contributing to the dev community.",
            },
          ].map((g) => (
            <div key={g.term} className="bg-secondary/60 rounded-xl p-5 border border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                {g.term}
              </p>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPTER SHORTCUTS */}
      <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            E-Portfolio Contents
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Navigate through the comprehensive documentation of your internship experience
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {chapters.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                to={c.to}
                className="group relative overflow-hidden rounded-xl border border-border bg-secondary/40 p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${c.color}`}
                />
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center shadow-elegant flex-shrink-0`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <HiOutlineArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
