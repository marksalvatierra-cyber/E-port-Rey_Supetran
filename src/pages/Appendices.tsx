import { HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineDownload } from "react-icons/hi";

const items = [
  { title: "Endorsement Letter", type: "PDF", icon: HiOutlineDocumentText },
  { title: "Memorandum of Agreement", type: "PDF", icon: HiOutlineDocumentText },
  { title: "Certificate of Completion", type: "PDF", icon: HiOutlineDocumentText },
  { title: "Workplace Photos", type: "Gallery", icon: HiOutlinePhotograph },
  { title: "Sample Outputs", type: "Folder", icon: HiOutlineDocumentText },
  { title: "Recommendation Letter", type: "PDF", icon: HiOutlineDocumentText },
];

export default function Appendices() {
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
              className="group bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="text-2xl" />
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Uploaded · April 2026
              </p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                <HiOutlineDownload /> Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
