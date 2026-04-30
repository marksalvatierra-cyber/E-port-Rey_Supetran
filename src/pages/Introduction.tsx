import Section from "../components/Section";

export default function Introduction() {
  return (
    <div className="space-y-8">
      <Section
        id="importance"
        title="Importance of Internship"
        subtitle="Why on-the-job training matters for student development."
      >
        <p>
          The On-the-Job Training (OJT) program bridges the gap between academic theory
          and real-world application. It allows students to experience the dynamics of a
          professional environment, develop technical proficiency, and cultivate
          interpersonal skills that are essential in the workplace.
        </p>
        <p className="mt-3">
          Through immersion in actual industry settings, interns build confidence,
          discipline, and a deeper understanding of their chosen field — preparing them
          for a smoother transition from student life to professional practice.
        </p>
      </Section>

      <Section
        id="objectives"
        title="Objectives of Internship"
        subtitle="The intended learning outcomes of this OJT engagement."
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Apply classroom-acquired knowledge to real workplace challenges.</li>
          <li>Develop professional communication and collaboration skills.</li>
          <li>Acquire hands-on technical competencies aligned with the field of study.</li>
          <li>Understand the workflow, ethics, and culture of a professional organization.</li>
          <li>Build a documented portfolio of completed deliverables and learning milestones.</li>
        </ul>
      </Section>

      <Section
        id="time-place"
        title="Time and Place of Internship"
        subtitle="Schedule and host establishment information."
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-xs uppercase text-muted-foreground">Duration</p>
            <p className="font-semibold mt-1">486 Hours</p>
            <p className="text-sm text-muted-foreground mt-1">February – May 2026</p>
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-xs uppercase text-muted-foreground">Host Company</p>
            <p className="font-semibold mt-1">TechBridge Solutions Inc.</p>
            <p className="text-sm text-muted-foreground mt-1">Makati City, Philippines</p>
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-xs uppercase text-muted-foreground">Schedule</p>
            <p className="font-semibold mt-1">Mon – Fri · 9:00 AM – 6:00 PM</p>
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-xs uppercase text-muted-foreground">Department</p>
            <p className="font-semibold mt-1">Software Engineering</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
