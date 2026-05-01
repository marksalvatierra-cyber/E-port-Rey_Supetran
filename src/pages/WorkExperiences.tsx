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
<Section
  id="weekly-reports"
  title="Weekly Reports"
  subtitle="Summary of weekly internship activities and experiences."
>
  <p className="mb-6">
    This section presents a weekly narrative summary of the internship,
    highlighting key activities, learnings, and experiences throughout the training period.
  </p>

  <div className="space-y-6">

    {[
      {
        period: "March 2–6, 2026",
        hours: "40 Hours",
        activities: "Encoding student data, organizing records, stamping and labeling documents.",
        learnings: "Improved accuracy in handling student information and developed attention to detail.",
        issues: "Missing data, incorrect document stamping, and minor encoding errors.",
      },
      {
        period: "March 9–19, 2026",
        hours: "72 Hours",
        activities: "Assisted students, processed document requests, maintained filing system.",
        learnings: "Enhanced communication skills and improved organization techniques.",
        issues: "Incomplete requests and occasional filing errors due to volume.",
      },
      {
        period: "March 23–31, 2026",
        hours: "56 Hours",
        activities: "Handled document processing and supported student transactions.",
        learnings: "Improved efficiency and task management under pressure.",
        issues: "High workload affecting speed and accuracy.",
      },
      {
        period: "April 6–16, 2026",
        hours: "72 Hours",
        activities: "Performed encoding, filing, and document processing tasks.",
        learnings: "Maintained accuracy despite time pressure and workload.",
        issues: "Minor data entry and labeling mistakes.",
      },
      {
        period: "April 20–27, 2026",
        hours: "48 Hours",
        activities: "Finalized document processing and worked independently.",
        learnings: "Improved efficiency and consistency in tasks.",
        issues: "Repetitive errors such as typos and incorrect stamping.",
      },
    ].map((week, i) => (
      <div
        key={i}
        className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* HEADER */}
        <div className="mb-3">
          <h3 className="font-semibold">{week.period}</h3>
          <p className="text-sm text-gray-500">{week.hours}</p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-4 text-sm">

          <div>
            <p className="font-medium text-blue-600">Activities</p>
            <p className="text-gray-700">{week.activities}</p>
          </div>

          <div>
            <p className="font-medium text-green-600">Learnings</p>
            <p className="text-gray-700">{week.learnings}</p>
          </div>

          <div>
            <p className="font-medium text-red-600">Issues</p>
            <p className="text-gray-700">{week.issues}</p>
          </div>

        </div>
      </div>
    ))}

  </div>
</Section>

      <Section
  id="dtr"
  title="Daily Time Record (DTR)"
  subtitle="Attendance record including time in, time out, and total hours rendered."
>
  <p className="mb-6">
    This section presents the daily attendance record of the internship,
    including time in, time out, and total hours rendered.
  </p>

  {/* SUMMARY CARDS */}
  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
    {[
      { month: "January", total: "39:30" },
      { month: "February", total: "168:00" },
      { month: "March", total: "150:00" },
      { month: "April", total: "138:00" },
      { month: "May", total: "0:00" },
    ].map((item) => (
      <div
        key={item.month}
        className="p-4 border rounded-lg bg-card text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <p className="font-semibold">{item.month}</p>
        <p className="text-lg">{item.total}</p>
      </div>
    ))}
  </div>

  {/* TABLE COMPONENT */}
  {[
    {
      title: "January 2026",
      total: "39:30",
      data: [
        ["Jan 27","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Jan 28","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Jan 29","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Jan 30","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Jan 31","8:30 AM","12:00 PM","1:00 PM","5:00 PM","7:30"],
      ],
    },
    {
      title: "February 2026",
      total: "168:00",
      data: [
        ["Feb 04","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 05","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 06","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 07","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 10","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 11","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 12","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 13","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 14","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Feb 16","7:00 AM","12:00 PM","1:00 PM","4:00 PM","8:00"],
        ["Feb 23","7:00 AM","12:00 PM","1:00 PM","4:00 PM","8:00"],
      ],
    },
    {
      title: "March 2026",
      total: "150:00",
      data: [
        ["Mar 02","7:00 AM","12:00 PM","1:00 PM","4:00 PM","8:00"],
        ["Mar 03","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
        ["Mar 11","7:30 AM","12:00 PM","1:00 PM","6:30 PM","10:00"],
        ["Mar 23","7:00 AM","12:00 PM","1:00 PM","6:00 PM","10:00"],
      ],
    },
    {
      title: "April 2026",
      total: "138:00",
      data: [
        ["Apr 06","7:00 AM","12:00 PM","1:00 PM","4:00 PM","8:00"],
        ["Apr 13","7:00 AM","12:00 PM","1:00 PM","6:00 PM","10:00"],
        ["Apr 21","7:30 AM","12:00 PM","1:00 PM","6:30 PM","10:00"],
        ["Apr 28","8:00 AM","12:00 PM","1:00 PM","5:00 PM","8:00"],
      ],
    },
  ].map((month) => (
    <div key={month.title} className="mb-8">
      <h3 className="font-semibold mb-2">
        {month.title} — <span className="text-gray-500">Total: {month.total}</span>
      </h3>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-card-100">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">AM In</th>
              <th className="p-2">AM Out</th>
              <th className="p-2">PM In</th>
              <th className="p-2">PM Out</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {month.data.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))}

  {/* FINAL SUMMARY */}
  <div className="mt-6 p-4 border rounded-lg bg-card shadow-md">
    <p><strong>Total Hours Rendered:</strong> 495:30</p>
    <p><strong>Required Hours:</strong> 486</p>
  </div>
</Section>

      <Section
  id="internship-progress"
  title="Internship Progress Report"
  subtitle="Weekly summary of objectives, completed work, and issues encountered."
>
  <p className="mb-6">
    This section summarizes weekly internship activities, focusing on objectives,
    work completed, and common issues encountered throughout the training period.
  </p>

  {[
    {
      period: "March 2–6, 2026",
      hours: "40 Hours",
      data: [
        ["Encode student data into the system","Organized and arranged student records accurately","Missing or incomplete student information"],
        ["Stamp and dry seal documents for authentication","Stamped and authenticated official documents","Incorrect document stamped"],
        ["File documents in respective envelopes","Filed and sorted documents properly","Documents mixed with other student records"],
        ["Label envelopes of admission credentials","Labeled student credential envelopes","Incorrect labeling of envelopes"],
        ["Encode admission credentials","Encoded student credentials into the system","Typographical errors during data entry"],
      ],
    },
    {
      period: "March 9–19, 2026",
      hours: "72 Hours",
      data: [
        ["Assist students in requesting documents","Helped students process document requests","Incomplete or incorrect request information"],
        ["Continue document authentication","Stamped and verified documents","Occasional incorrect document handling"],
        ["Maintain filing system","Organized and stored records properly","Misfiled documents due to volume"],
        ["Continue data encoding","Updated student records in system","Encoding errors and inconsistencies"],
      ],
    },
    {
      period: "March 23–31, 2026",
      hours: "56 Hours",
      data: [
        ["Handle document processing and filing","Processed and organized documents efficiently","High workload affecting speed and accuracy"],
        ["Support student transactions","Assisted students with document-related concerns","Students lacking complete requirements"],
      ],
    },
    {
      period: "April 6–16, 2026",
      hours: "72 Hours",
      data: [
        ["Continue registrar operations","Performed encoding, filing, and document processing tasks","Time pressure due to increasing workload"],
        ["Maintain accuracy in records","Ensured proper handling of student documents","Minor data entry and labeling mistakes"],
      ],
    },
    {
      period: "April 20–27, 2026",
      hours: "48 Hours",
      data: [
        ["Finalize document processing tasks","Completed encoding, filing, and authentication tasks","Repetitive errors such as incorrect stamping and typos"],
        ["Improve efficiency in workflow","Worked faster and more independently","Managing multiple tasks simultaneously"],
      ],
    },
  ].map((week, index) => (
    <div
      key={index}
      className="mb-8 p-4 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* HEADER */}
      <div className="mb-3">
        <h3 className="font-semibold">{week.period}</h3>
        <p className="text-sm text-gray-500">{week.hours}</p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border rounded-lg overflow-hidden">
          <thead>
  <tr>
    <th className="p-2 bg-slate-100">Objective</th>
    <th className="p-2 bg-emerald-50 text-emerald-700">Work Status</th>
    <th className="p-2 bg-rose-50 text-rose-700">Problems Met</th>
  </tr>
</thead>
          <tbody>
            {week.data.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="p-2 align-top">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ))}
</Section>

      <Section
  id="internship-analysis"
  title="Internship Analysis Report"
  subtitle="Reflection on the internship experience, environment, and personal development."
>
  <p className="mb-6">
    This section presents a reflection on the internship experience, including
    the working environment, supervision, and personal development gained
    throughout the training period.
  </p>

  <div className="space-y-6">

    {/* 1. SETTING */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-semibold mb-3">1. Setting</h3>

      <div className="ml-4 space-y-3 border-l-2 border-gray-200 pl-4">

        <div>
          <p className="font-medium">The setting was good because:</p>
          <p className="ml-4 text-gray-700">
            The work environment in the Registrar Office was organized, professional,
            and supportive, which allowed me to perform my tasks efficiently and comfortably.
          </p>
        </div>

        <div>
          <p className="font-medium">The setting was limited by:</p>
          <p className="ml-4 text-gray-700">
            The office sometimes experienced a high volume of documents and transactions,
            which made the workflow busy and time-pressured.
          </p>
        </div>

        <div>
          <p className="font-medium">My initial analysis of the agency or organization was:</p>
          <p className="ml-4 text-gray-700">
            The Registrar Office plays a vital role in managing and safeguarding student
            records, ensuring accuracy, confidentiality, and efficient processing of academic documents.
          </p>
        </div>

      </div>
    </div>

    {/* 2. SITE SUPERVISOR */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-semibold mb-3">2. Site Supervisor</h3>

      <div className="ml-4 space-y-3 border-l-2 border-gray-200 pl-4">

        <div>
          <p className="font-medium">The greatest contribution made by the site supervisor:</p>
          <p className="ml-4 text-gray-700">
            The site supervisor provided clear instructions, guidance, and support,
            helping me understand my responsibilities and improve my work performance.
          </p>
        </div>

        <div>
          <p className="font-medium">The general level of supervision was:</p>
          <p className="ml-4 text-gray-700">
            The supervision was appropriate and balanced, allowing me to work independently
            while still receiving guidance when needed.
          </p>
        </div>

        <div>
          <p className="font-medium">I needed more from the supervisor in the way of:</p>
          <p className="ml-4 text-gray-700">
            More detailed explanations on advanced processes or systems could have
            further enhanced my learning experience.
          </p>
        </div>

      </div>
    </div>

    {/* 3. ENVIRONMENT */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-semibold mb-3">3. Environmental Conditions or Events</h3>

      <div className="ml-4 space-y-3 border-l-2 border-gray-200 pl-4">

        <div>
          <p className="font-medium">The one event/characteristic that really influenced my internship was:</p>
          <p className="ml-4 text-gray-700">
            Handling a large number of student records and documents helped me develop
            efficiency and attention to detail.
          </p>
        </div>

        <div>
          <p className="font-medium">A trend/issue which really impacted this organization was:</p>
          <p className="ml-4 text-gray-700">
            The increasing number of student records and documentation requirements
            required the office to maintain accurate and well-organized filing systems.
          </p>
        </div>

        <div>
          <p className="font-medium">Diversity of co-workers or target audiences provided an opportunity to:</p>
          <p className="ml-4 text-gray-700">
            Interact with different individuals and improve my communication and
            interpersonal skills in a professional setting.
          </p>
        </div>

      </div>
    </div>

    {/* 4. SELF-ASSESSMENT */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-semibold mb-3">4. Self-Assessment</h3>

      <div className="ml-4 space-y-3 border-l-2 border-gray-200 pl-4">

        <div>
          <p className="font-medium">The most important thing I learned is:</p>
          <p className="ml-4 text-gray-700">
            The importance of accuracy, confidentiality, and organization in handling
            official documents and records.
          </p>
        </div>

        <div>
          <p className="font-medium">I contributed to the organization by:</p>
          <p className="ml-4 text-gray-700">
            Assisting in organizing, filing, labeling, authenticating documents,
            and encoding student information accurately.
          </p>
        </div>

        <div>
          <p className="font-medium">I still need more experience in the area of:</p>
          <p className="ml-4 text-gray-700">
            Advanced data management systems and handling more complex administrative tasks.
          </p>
        </div>

        <div>
          <p className="font-medium">If I were to repeat this experience I would:</p>
          <p className="ml-4 text-gray-700">
            Be more proactive in learning additional tasks and improving my efficiency
            in handling documents.
          </p>
        </div>

      </div>
    </div>

    {/* 5. GENERAL */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-semibold mb-3">5. General</h3>

      <div className="ml-4 space-y-3 border-l-2 border-gray-200 pl-4">

        <div>
          <p className="font-medium">The internship experience can be strengthened by:</p>
          <p className="ml-4 text-gray-700">
            Providing more hands-on training and exposure to different office functions
            and systems.
          </p>
        </div>

        <div>
          <p className="font-medium">Future interns should:</p>
          <p className="ml-4 text-gray-700">
            Be responsible, detail-oriented, willing to learn, and maintain confidentiality
            when handling important documents.
          </p>
        </div>

      </div>
    </div>

  </div>
</Section>
    </div>
  );
}
