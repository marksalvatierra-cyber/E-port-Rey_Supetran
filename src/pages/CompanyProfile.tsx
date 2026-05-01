import Section from "../components/Section";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Target, Eye } from "lucide-react";
import { School, MapPin, GraduationCap } from "lucide-react";
import { Building2, FileText, ShieldCheck, Users } from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="space-y-8">
            <Section
  id="company-overview"
  title="Company Overview"
  subtitle="Overview of Occidental Mindoro State College – San Jose Campus."
>
  <p className="mb-6">
    Occidental Mindoro State College (OMSC) – San Jose Campus is a public higher
    education institution that provides quality education and training to students
    in various fields. The Registrar Office plays an important role in managing
    student records, processing academic documents, and ensuring the accuracy and
    confidentiality of all official records.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {/* CARD 1 */}
    <div className="p-5 border rounded-lg bg-card flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
      <Users className="text-blue-500 shrink-0" />
      <p>
        <strong>Academic & Administrative Services</strong> <br />
        Provides academic and administrative services to students.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="p-5 border rounded-lg bg-card flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300">
      <FileText className="text-green-500 shrink-0" />
      <p>
        <strong>Student Records Management</strong> <br />
        Manages and maintains official student records.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="p-5 border rounded-lg bg-card flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-300">
      <Building2 className="text-orange-500 shrink-0" />
      <p>
        <strong>Document Processing</strong> <br />
        Processes academic documents such as transcripts and certificates.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="p-5 border rounded-lg bg-card flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300">
      <ShieldCheck className="text-purple-500 shrink-0" />
      <p>
        <strong>Security & Confidentiality</strong> <br />
        Ensures accuracy, security, and confidentiality of student records.
      </p>
    </div>

  </div>
</Section>

      <Section
  id="nature-agency"
  title="Nature of the Agency"
  subtitle="Functions and responsibilities of the Registrar Office."
>
  <p className="mb-6">
    The Registrar Office of Occidental Mindoro State College – San Jose Campus
    is an administrative unit responsible for managing and maintaining the
    official academic records of students. It provides a professional
    environment where service, support, and operational work develop the
    student's practical understanding of institutional processes.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

    {/* CARD 1 */}
    <div className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="border rounded-lg overflow-hidden bg-card">
        <img
          src="/images/admin.jpg"
          alt="Administrative Office Operations"
          className="w-full h-40 object-cover"
        />
      </div>
      <p className="mt-2 font-medium">Administrative Office Operations</p>
    </div>

    {/* CARD 2 */}
    <div className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="border rounded-lg overflow-hidden bg-card">
        <img
          src="/images/record.jpg"
          alt="Student Records Management"
          className="w-full h-40 object-cover"
        />
      </div>
      <p className="mt-2 font-medium">Student Records Management</p>
    </div>

    {/* CARD 3 */}
    <div className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="border rounded-lg overflow-hidden bg-card">
        <img
          src="/images/docu.jpg"
          alt="Document Processing and Verification"
          className="w-full h-40 object-cover"
        />
      </div>
      <p className="mt-2 font-medium">Document Processing and Verification</p>
    </div>

    {/* CARD 4 */}
    <div className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="border rounded-lg overflow-hidden bg-card">
        <img
          src="/images/public.jpg"
          alt="Public Service and Support"
          className="w-full h-40 object-cover"
        />
      </div>
      <p className="mt-2 font-medium">Public Service and Support</p>
    </div>

  </div>
</Section>

      <Section
  id="vision-mission"
  title="Vision and Mission"
  subtitle="The guiding principles of Occidental Mindoro State College."
>
  <div className="grid md:grid-cols-2 gap-6">

    {/* VISION */}
    <div className="p-6 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">
      <div className="flex items-center gap-2 mb-3">
        <Eye className="text-blue-500" />
        <h3 className="text-lg font-semibold">Vision</h3>
      </div>

      <p>
        A premier higher education institution that develops globally competitive,
        locally responsive, innovative professionals, and life-long learners.
      </p>
    </div>

    {/* MISSION */}
    <div className="p-6 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300">
      <div className="flex items-center gap-2 mb-3">
        <Target className="text-green-500" />
        <h3 className="text-lg font-semibold">Mission</h3>
      </div>

      <p>
        OMSC is committed to produce intellectual and human capital by developing
        excellent graduates through outcomes-based instruction, relevant research,
        responsive technical advisory services, community engagement, and
        sustainable production.
      </p>
    </div>

  </div>
</Section>

<Section
  id="history"
  title="History & Background"
  subtitle="The development and expansion of Occidental Mindoro State College (OMSC)."
>
  <p className="mb-6">
    OCCIDENTAL MINDORO STATE COLLEGE was established in 1966 as a Barrio High
    School, chartered as Occidental Mindoro National College on June 24, 1983,
    by virtue of Batas Pambansa Bilang 531, renamed as Occidental Mindoro State
    College on July 27, 2009, by virtue of Republic Act 9747, and finally
    proposed for conversion into Occidental Mindoro State University by virtue
    of Republic Act 11587.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {/* MAIN CAMPUS */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 md:col-span-2">
      <div className="flex items-center gap-2 mb-2">
        <School className="text-blue-500" />
        <h3 className="font-semibold">OMSC Main Campus</h3>
      </div>
      <p>
        Located in Labangan, San Jose, the Main Campus sits on 8.7 hectares of
        land and serves more than 10,150 students. It offers multiple colleges
        and programs including Arts, Business, Criminal Justice, Engineering,
        Architecture, and Hospitality Management. It is known for strong board
        exam performances and accredited programs.
      </p>
    </div>

    {/* SAN JOSE CAMPUS */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300">
      <div className="flex items-center gap-2 mb-2">
        <GraduationCap className="text-green-500" />
        <h3 className="font-semibold">OMSC San Jose Campus</h3>
      </div>
      <p>
        A training ground for educators, midwives, and IT professionals with
        2,892 enrollees. It is known for producing quality graduates and
        maintaining strong performance in licensure examinations, including
        being a Top Performing School in Midwifery and having a Level IV
        accredited BSIT program.
      </p>
    </div>

    {/* MURTHA */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-300">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="text-yellow-500" />
        <h3 className="font-semibold">OMSC Murtha Campus</h3>
      </div>
      <p>
        Located 7 kilometers from San Jose Campus, it serves 1,113 agriculture
        students. It focuses on agro-forestry, animal husbandry, rice and
        vegetable production, and food processing under expert faculty members.
      </p>
    </div>

    {/* SABLAYAN */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300">
      <div className="flex items-center gap-2 mb-2">
        <School className="text-purple-500" />
        <h3 className="font-semibold">OMSC Sablayan Campus</h3>
      </div>
      <p>
        Established in 2011, it has grown steadily with 3,243 students. It
        offers several programs and continues to expand academic offerings
        while supporting student development and regional education needs.
      </p>
    </div>

    {/* MAMBURAO */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink-300">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="text-pink-500" />
        <h3 className="font-semibold">OMSC Mamburao Campus</h3>
      </div>
      <p>
        Formerly Occidental Mindoro Community College, it now serves around
        3,244 students. It offers four programs and achieved a Top 9 LET
        Elementary result in 2024, showcasing strong academic performance.
      </p>
    </div>

    {/* LUBANG */}
    <div className="p-5 border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 md:col-span-2">
  <div className="flex items-center gap-2 mb-2">
    <School className="text-indigo-500" />
    <h3 className="font-semibold">OMSC Lubang Campus</h3>
  </div>
  <p>
    The youngest campus established through a tripartite agreement in 2011
    and operationalized in 2017. It offers BEEd, BSIT, and BSBAM programs
    and has recorded multiple 100% LET Elementary passing rates. It now
    serves around 670 students.
  </p>
</div>

  </div>
</Section>

<Section
  id="org-chart"
  title="Organizational Chart"
  subtitle="Structure of the Registrar Office."
>
  <div className="flex justify-center">
    <div className="w-full max-w-5xl border rounded-lg overflow-hidden shadow-md bg-card transition-all duration-300 hover:shadow-2xl">
      
      <img
        src="/images/organizational-chart.jpg"
        alt="Organizational Chart"
        className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
      />

    </div>
  </div>
</Section>
    </div>
  );
}
