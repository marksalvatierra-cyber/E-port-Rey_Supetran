import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineDownload } from "react-icons/hi";
import { useState } from "react";

const items = [
  { title: "Evaluation Form", type: "Appendix A", icon: HiOutlineDocumentText, image: "/appendices/appendix-a.jpg" },
  { title: "Photocopy Registration Form", type: "Appendix B", icon: HiOutlineDocumentText, image: "/appendices/appendix-b.jpg" },
  { title: "Photocopy Validated ID", type: "Appendix C", icon: HiOutlineDocumentText, image: "/appendices/appendix-c.jpg" },
  { title: "Parent's Consent", type: "Appendix D", icon: HiOutlinePhotograph, image: "/appendices/appendix-d.jpg" },
  { title: "Medical Certificate", type: "Appendix E", icon: HiOutlineDocumentText, image: "/appendices/appendix-e.jpg" },
  { title: "Certificate of Good Moral Character", type: "Appendix F", icon: HiOutlineDocumentText, image: "/appendices/appendix-f.jpg" },
  { title: "Application Letter", type: "Appendix G", icon: HiOutlineDocumentText, image: "/appendices/appendix-g.jpg" },
  { title: "Endorsement Letter", type: "Appendix H", icon: HiOutlineDocumentText, image: "/appendices/appendix-h.jpg" },
  { title: "Memorandum of Agreement", type: "Appendix I", icon: HiOutlineDocumentText, image: "/appendices/appendix-i.jpg" },
  { title: "Daily Time Record (Time Card)", type: "Appendix J", icon: HiOutlinePhotograph, image: "/appendices/appendix-j.jpg" },
  { title: "Certificate of Completion", type: "Appendix K", icon: HiOutlineDocumentText, image: "/appendices/appendix-k.jpg" },
  { title: "Certificate of Clearance", type: "Appendix L", icon: HiOutlineDocumentText, image: "/appendices/appendix-l.jpg" },
  { title: "Curriculum Vitae", type: "Appendix M", icon: HiOutlineDocumentText, image: "/appendices/appendix-m.jpg" },
];

export default function Appendices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
                  onClick={() => setSelectedImage(item.image)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:gap-3 transition-all"
                >
                  View
                </button>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  <HiOutlineDownload /> Download
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-2xl max-h-screen">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Appendix" 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
