import { MapPin, Calendar, User, Clock, Building } from "lucide-react";
import Section from "../components/Section";
import {
  ClipboardList,
  Database,
  FileText,
  CheckCircle,
  FolderOpen,
  MessageSquare,
  Briefcase,
} from "lucide-react";

export default function Introduction() {
  return (
    <div className="space-y-8">
      <Section
        id="importance"
        title="Importance of Internship"
        subtitle="Why on-the-job training matters for student development."
      >
        <p>
          During my internship at the Registrar’s Office, I experienced actual office
    operations and responsibilities. It gave me the opportunity to apply my
    organizational and technical skills in a real working environment while
    understanding the importance of accuracy, confidentiality, and efficiency
    in handling official records.
        </p>
        <div className="mt-4">
    <h4 className="font-semibold">Key Tasks:</h4>
    <ul className="list-disc pl-5 mt-2">
      <li>Handling student records</li>
      <li>Document processing and filing</li>
      <li>Supporting daily administrative tasks</li>
      <li>Improving communication skills</li>
      <li>Learning real workplace workflows</li>
    </ul>
  </div>
      </Section>

      <Section
  id="objectives"
  title="Objectives of Internship"
  subtitle="The intended learning outcomes of this OJT engagement."
>
  <p className="mb-6">
    All in all, the internship aims to train the student in real-world registrar
    office operations by developing technical, organizational, and professional
    skills within a structured administrative environment.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {/* CARD 1 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 bg-card">
      <ClipboardList className="text-blue-500 shrink-0" />
      <p>
        <strong>Administrative and Records Management Experience</strong> <br />
        Gaining practical experience in registrar office operations, handling
        student records, encoding information, filing documents, and assisting
        in issuing academic requirements.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300 bg-card">
      <Database className="text-green-500 shrink-0" />
      <p>
        <strong>Technical and Data Encoding Skills</strong> <br />
        Acquire hands-on experience in encoding and managing student data with
        accuracy and proper organization.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-300 bg-card">
      <FileText className="text-orange-500 shrink-0" />
      <p>
        <strong>Document Processing and Issuance</strong> <br />
        Develop skills in sorting, verifying, and releasing official documents
        while maintaining confidentiality and correctness.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 bg-card">
      <CheckCircle className="text-purple-500 shrink-0" />
      <p>
        <strong>Attention to Accuracy and Detail</strong> <br />
        Enhance the ability to carefully check and verify student information
        to ensure data integrity.
      </p>
    </div>

    {/* CARD 5 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-300 bg-card">
      <FolderOpen className="text-yellow-500 shrink-0" />
      <p>
        <strong>Organizational and Filing Skills</strong> <br />
        Improve capability in organizing physical and digital records for easy
        retrieval and efficient workflow.
      </p>
    </div>

    {/* CARD 6 */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink-300 bg-card">
      <MessageSquare className="text-pink-500 shrink-0" />
      <p>
        <strong>Communication and Office Interaction</strong> <br />
        Gain experience in communicating with students and staff while handling
        inquiries and requests professionally.
      </p>
    </div>

    {/* CARD 7 (full width) */}
    <div className="p-4 border rounded-lg flex gap-3 md:col-span-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 bg-card">
      <Briefcase className="text-indigo-500 shrink-0" />
      <p>
        <strong>Professional Growth and Workplace Discipline</strong> <br />
        Develop professionalism, responsibility, and work ethics in a real office
        environment, preparing for future employment in administrative or IT-related roles.
      </p>
    </div>

  </div>
</Section>

<Section
  id="time-place"
  title="Time and Place of Internship"
  subtitle="Details of training duration, location, and assigned role."
>
  <p className="mb-6">
    The internship was conducted at the Occidental Mindoro State College –
    San Jose Campus Registrar Office, where the student was assigned to assist
    in encoding student records, filing documents, and processing academic
    requirements such as transcripts and certificates. It provided hands-on
    experience in real office operations and improved understanding of
    administrative workflows.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {/* TRAINING PERIOD */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 bg-card">
      <Calendar className="text-blue-500 shrink-0" />
      <div>
        <strong>Training Period</strong>
        <p>January 20, 2025 – April 25, 2025</p>
        <p className="text-sm text-gray-500">489 total hours completed</p>
      </div>
    </div>

    {/* PLACE */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300 bg-card">
      <MapPin className="text-green-500 shrink-0" />
      <div>
        <strong>Place of Internship</strong>
        <p>Occidental Mindoro State College – San Jose Campus</p>
        <p className="text-sm text-gray-500">Registrar Office</p>
      </div>
    </div>

    {/* ROLE */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 bg-card">
      <User className="text-purple-500 shrink-0" />
      <div>
        <strong>Role</strong>
        <p>Intern / Administrative Assistant</p>
        <p className="text-sm text-gray-500">Registrar Office</p>
      </div>
    </div>

    {/* WORKING HOURS */}
    <div className="p-4 border rounded-lg flex gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-300 bg-card">
      <Clock className="text-orange-500 shrink-0" />
      <div>
        <strong>Working Hours</strong>
        <p>8:00 AM – 5:00 PM</p>
        <p className="text-sm text-gray-500">Monday to Friday</p>
      </div>
    </div>

    {/* WORK ENVIRONMENT */}
    <div className="p-4 border rounded-lg flex gap-3 md:col-span-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 bg-card">
      <Building className="text-indigo-500 shrink-0" />
      <div>
        <strong>Work Environment</strong>
        <p>
          Onsite office environment handling student records and administrative tasks
          in a structured registrar office setting.
        </p>
      </div>
    </div>

  </div>
</Section>
    </div>
  );
}
