import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Assessment() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const evaluation = {
    studentName: "John Rey B. Supetran",
    program: "BS Information Technology",
    school: "Occidental Mindoro State College",
    company: "Registrar Office - San Jose Campus",
    supervisor: "Michael T. Domingo",
    period: "January 2026 – April 2026",
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-card rounded-xl border border-border shadow-card p-6">
        <p className="text-xs uppercase text-muted-foreground">
          Appendix A
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-1">
          Student Internship Evaluation Form
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Occidental Mindoro State College × Registrar Office
        </p>
      </div>

      {/* INFO */}
      <div className="grid md:grid-cols-2 gap-4">
        <Info label="Student Name" value={evaluation.studentName} />
        <Info label="Program" value={evaluation.program} />
        <Info label="Company" value={evaluation.company} />
        <Info label="Supervisor" value={evaluation.supervisor} />
        <Info label="Internship Period" value={evaluation.period} full />
      </div>

      {/* IMAGES */}
      <div className="bg-card rounded-xl border border-border shadow-card p-6">
        <h3 className="font-semibold mb-4">Evaluation Form Pages</h3>

        <div className="grid md:grid-cols-2 gap-4">

          <img
            src="/images/eval1.jpg"
            className="rounded-lg border cursor-zoom-in hover:scale-105 transition"
            onClick={() => setSelectedImage("/images/eval1.jpg")}
          />

          <img
            src="/images/eval2.jpg"
            className="rounded-lg border cursor-zoom-in hover:scale-105 transition"
            onClick={() => setSelectedImage("/images/eval2.jpg")}
          />

          <img
            src="/images/eval3.jpg"
            className="rounded-lg border md:col-span-2 cursor-zoom-in hover:scale-105 transition"
            onClick={() => setSelectedImage("/images/eval3.jpg")}
          />

        </div>
      </div>

      {/* SUMMARY */}
<div className="bg-card rounded-xl border border-border shadow-card p-6">
  <h3 className="font-semibold mb-4">Performance Summary</h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <Score label="SR" value="5" />
    <Score label="PR" value="5" />
    <Score label="SICR" value="5" />
    <Score label="ASR" value="4" />
  </div>

  {/* OVERALL RATING */}
  <div className="mt-6 text-center border-t border-border pt-4">
    <p className="text-xs text-muted-foreground">Overall Rating</p>
    <p className="text-3xl font-bold text-foreground">4.75</p>
  </div>
</div>

      {/* COMMENTS */}
      <div className="bg-card rounded-xl border border-border shadow-card p-6">
        <h3 className="font-semibold mb-2">
          General Comments
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The intern demonstrated strong work ethic, responsibility, and attention to detail.
          He was able to complete assigned tasks efficiently and showed good communication
          skills in dealing with students and staff.
        </p>
      </div>

      {/* SIGNATURES */}
<div className="bg-card rounded-xl border border-border shadow-card p-6">
  <h3 className="font-semibold mb-4">Evaluators</h3>

  <div className="grid md:grid-cols-2 gap-6 text-sm">
    
    <div>
      <p className="font-semibold">Student Intern</p>
      <p className="text-muted-foreground">John Rey B. Supetran</p>
    </div>

    <div>
      <p className="font-semibold">Supervisor</p>
      <p className="text-muted-foreground">Michael T. Domingo</p>
    </div>

    <div>
      <p className="font-semibold">Student Internship Coordinator</p>
      <p className="text-muted-foreground">Leiza Linda L. Pelayo</p>
    </div>

    <div>
      <p className="font-semibold">Peer</p>
      <p className="text-muted-foreground">Joselle Mae Zacarias</p>
    </div>

  </div>
</div>

      {/* MODAL VIEW */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black/70 border-none">

          {selectedImage && (
            <img
              src={selectedImage}
              alt="Evaluation"
              className="max-h-[90vh] w-auto mx-auto rounded-lg object-contain"
            />
          )}

        </DialogContent>
      </Dialog>

    </div>
  );
}

/* COMPONENTS */

function Info({ label, value, full = false }: any) {
  return (
    <div className={`bg-card p-4 rounded-xl border border-border ${full ? "col-span-2" : ""}`}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function Score({ label, value }: any) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}