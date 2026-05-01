import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineDownload } from "react-icons/hi";
import { useState } from "react";

type AppendixItem = {
  title: string;
  type: string;
  icon: typeof HiOutlineDocumentText;
  image?: string;
  pages?: string[];
};

const items: AppendixItem[] = [
  { title: "Evaluation Form", type: "Appendix A", icon: HiOutlineDocumentText, image: "/appendices/evaluation.jpg" },
  { title: "Photocopy Registration Form", type: "Appendix B", icon: HiOutlineDocumentText, image: "/appendices/registration.jpg" },
  { title: "Photocopy Validated ID", type: "Appendix C", icon: HiOutlineDocumentText, pages: [
    "/appendices/id1.jpg",
    "/appendices/id2.jpg",
  ] },
  { title: "Parent's Consent", type: "Appendix D", icon: HiOutlinePhotograph, pages: [
    "/appendices/concent-form_page1.jpg",
    "/appendices/concent-form_page2.jpg",
    "/appendices/concent-form_page3.jpg",
    "/appendices/concent-form_page4.jpg",
    "/appendices/concent-form_page5.jpg",
  ] },
  { title: "Medical Certificate", type: "Appendix E", icon: HiOutlineDocumentText, image: "/appendices/med-cert.jpg" },
  { title: "Certificate of Good Moral Character", type: "Appendix F", icon: HiOutlineDocumentText, image: "/appendices/appendix-f.jpg" },
  { title: "Application Letter", type: "Appendix G", icon: HiOutlineDocumentText, image: "/appendices/app-letter.jpg" },
  { title: "Endorsement Letter", type: "Appendix H", icon: HiOutlineDocumentText, image: "/appendices/endorsement.jpg" },
  { title: "Memorandum of Agreement", type: "Appendix I", icon: HiOutlineDocumentText, image: "/appendices/appendix-i.jpg" },
  { title: "Daily Time Record (Time Card)", type: "Appendix J", icon: HiOutlinePhotograph, pages: [
    "/appendices/DTR-page1.jpg",
    "/appendices/DTR-page2.jpg",
    "/appendices/DTR-page3.jpg",
  ] },
  { title: "Certificate of Completion", type: "Appendix K", icon: HiOutlineDocumentText, image: "/appendices/completion.jpg" },
  { title: "Certificate of Clearance", type: "Appendix L", icon: HiOutlineDocumentText, image: "/appendices/clearance.jpg" },
  { title: "Performance/Proficiency Rating Sheet", type: "Appendix M", icon: HiOutlineDocumentText, image: "/appendices/clearance.jpg" },
  { title: "Curriculum Vitae", type: "Appendix Q", icon: HiOutlineDocumentText,pages: [
    "/appendices/vitae1.jpg",
    "/appendices/vitae2.jpg"
  ] },
];

export default function Appendices() {
  const [selectedItem, setSelectedItem] = useState<AppendixItem | null>(null);
  const [zoom, setZoom] = useState(1);

  const openItem = (item: AppendixItem) => {
    setSelectedItem(item);
    setZoom(1);
  };

  const closeImage = () => {
    setSelectedItem(null);
    setZoom(1);
  };

  const zoomIn = () => setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3));
  const zoomOut = () => setZoom((currentZoom) => Math.max(currentZoom - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const previewPages = selectedItem?.pages ?? (selectedItem?.image ? [selectedItem.image] : []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-card rounded-xl border border-border shadow-card p-6">
        <h2 className="text-xl font-bold text-foreground">Appendices</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Supporting documents, attachments, and visual evidence of internship completion.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group relative overflow-visible bg-card rounded-xl border border-border p-5 pt-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              <Badge className="absolute -top-3 left-4 z-10 rounded-full bg-secondary text-muted-foreground shadow-sm">
                {item.type}
              </Badge>

              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="text-2xl" />
                </div>
              </div>

              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>

              <p className="text-xs text-muted-foreground mt-1">
                Uploaded · April 2026
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button 
                  onClick={() => openItem(item)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:gap-3 transition-all"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>

<section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
  
  <Badge className="mb-3 bg-secondary text-muted-foreground">
    Appendix N
  </Badge>

  <h2 className="text-xl font-bold text-foreground">
    Pre-Service Seminar Pictures
  </h2>

  <p className="text-muted-foreground leading-relaxed mt-3">
    This section presents documentation photos taken during the Pre-Service Seminar.
    The seminar provided essential orientation, guidelines, and expectations for interns
    before deployment to their respective training offices.
  </p>

  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <img src="/appendices/seminar1.jpg" className="rounded-lg border" />
    <img src="/appendices/seminar2.jpg" className="rounded-lg border" />
    <img src="/appendices/seminar3.jpg" className="rounded-lg border" />
    <img src="/appendices/seminar3.jpg" className="rounded-lg border" />
  </div>

</section>

<section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
    <Badge className="mb-3 bg-secondary text-muted-foreground">
    Appendix O
  </Badge>

  <h2 className="text-xl font-bold text-foreground">
    Office Works Pictures
  </h2>
  <p className="text-muted-foreground leading-relaxed">
    This section shows documentation of actual tasks and activities performed during the On-the-Job Training
    at the OMSC Registrar Office. It reflects real workplace exposure, including clerical work, assistance,
    and administrative tasks.
  </p>

  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <img src="/images/pic-work1.jpg" className="rounded-lg border" />
    <img src="/images/pic-work2.jpg" className="rounded-lg border" />
  <img src="/images/pic-work3.jpg" className="rounded-lg border" />
  <img src="/images/pic-work4.jpg" className="rounded-lg border" />
  <img src="/images/pic-work5.jpg" className="rounded-lg border" />
  <img src="/images/pic-work6.jpg" className="rounded-lg border" />
  <img src="/images/pic-work7.jpg" className="rounded-lg border" />
  <img src="/images/pic-work8.jpg" className="rounded-lg border" />
  </div>
</section>

<section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">

  {/* HEADER */}
  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
    <Badge className="bg-secondary text-muted-foreground">
      Appendix P
    </Badge>

    <span className="text-xs text-muted-foreground">
      Official Document
    </span>
  </div>

  <h2 className="text-2xl font-bold text-foreground">
    Code of Ethics for CAST Student Internship
  </h2>

  <p className="text-sm text-muted-foreground mt-1">
    College of Arts, Sciences, and Technology
  </p>

  {/* DIVIDER */}
  <div className="border-t border-border my-5" />

  {/* INTRO */}
  <p className="text-muted-foreground leading-relaxed">
    This section presents the official Code of Ethics that governed student conduct during the internship.
  </p>

  {/* PREAMBLE CARD */}
  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
    <p className="text-sm font-semibold text-primary mb-2">
      Preamble
    </p>
    <p className="text-sm text-muted-foreground leading-relaxed">
      I will use my special knowledge for the benefit of the public. I will serve employees and clients
      with integrity, subject to an overriding responsibility to the public interest, and I will strive
      to enhance the competence and prestige of the profession.
    </p>
  </div>

  {/* PRINCIPLES */}
  <div className="mt-6">
    <p className="text-sm font-semibold text-foreground mb-3">
      Principles and Responsibilities
    </p>

    <ul className="space-y-3">
      {[
        "Promote public knowledge, understanding, and appreciation of information technology.",
        "Consider the general welfare and public good in all professional work.",
        "Advertise services in a clear, honest, and truthful manner.",
        "Comply with intellectual property laws, patent laws, and related regulations.",
        "Accept full responsibility and perform duties with competence and professionalism.",
        "Provide truthful statements about skills, services, and capabilities.",
        "Respect confidentiality unless disclosure is required by law.",
        "Strive for the highest quality in products and services.",
        "Avoid involvement in unlawful or unethical system development.",
        "Continuously improve professional knowledge and uphold IT standards."
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
          
          {/* ICON BULLET */}
          <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

</section>

<section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
   <Badge className="mb-3 bg-secondary text-muted-foreground">
    Appendix R
  </Badge>

  <h2 className="text-xl font-bold text-foreground">
    OJT Portfolio Evaluation Form
  </h2>
  <p className="text-muted-foreground leading-relaxed">
    This section contains the official evaluation form used to assess the intern’s overall performance during
    the On-the-Job Training. It includes ratings, comments, and final assessment from the supervisor and evaluators.
  </p>

  <div className="mt-4 grid md:grid-cols-2 gap-4">
    <img src="/appendices/ojt-eval1.jpg" className="rounded-lg border" />
    <img src="/appendices/ojt-eval2.jpg" className="rounded-lg border" />
  </div>
</section>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && closeImage()}>
       <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-4 gap-4 flex flex-col bg-black/40 backdrop-blur-sm [&>button]:bg-transparent [&>button]:shadow-none [&>button]:border-none [&>button]:text-white [&>button]:hover:bg-transparent">
          {selectedItem && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 pr-10 text-white sm:pr-12">
                <div>
                  <h3 className="text-base font-semibold">{selectedItem.title} preview</h3>
                  <p className="text-xs text-white/70">
                    {previewPages.length > 1
                      ? `This document has ${previewPages.length} pages. Zoom applies to all pages, and you can scroll through them vertically.`
                      : "Zoom in for details, zoom out to fit more on screen, and scroll to pan when enlarged."}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    disabled={zoom <= 0.5}
                    className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    -
                  </button>
                  <button
                    onClick={resetZoom}
                    className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    onClick={zoomIn}
                    disabled={zoom >= 3}
                    className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-auto rounded-xl bg-black/50 p-4">
                <div className="space-y-4">
                  {previewPages.map((page, pageIndex) => (
                    <div key={`${page}-${pageIndex}`} className="flex justify-center">
                      <img
                        src={page}
                        alt={`${selectedItem.title} page ${pageIndex + 1}`}
                        className="block h-auto max-w-none rounded-lg shadow-2xl transition-transform duration-200"
                        style={{ width: `${zoom * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
