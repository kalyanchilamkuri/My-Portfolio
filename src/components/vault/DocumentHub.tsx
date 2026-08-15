"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, FileText, Folder, HardDrive, AlertCircle } from "lucide-react";

interface Doc {
  id: string;
  name: string;
  type: "pdf" | "img" | "pptx" | "folder";
  size?: string;
  url?: string;
}

const DEFAULT_DOCS: Doc[] = [
  { id: "1", name: "Kalyan_Chilamkuri_Resume.pdf", type: "pdf",  size: "118 KB", url: "/Kalyan_Chilamkuri_Resume.pdf" },
  { id: "2", name: "ICPC Regionalist Certificate.pdf", type: "pdf",  size: "245 KB"  },
  { id: "3", name: "Project Screenshots",       type: "folder" },
  { id: "4", name: "CollabCode Presentation.pptx", type: "pptx", size: "2.4 MB" },
];

const TYPE_ICON: Record<Doc["type"], string> = {
  pdf:    "📄",
  img:    "🖼",
  pptx:   "📊",
  folder: "📁",
};

const TYPE_COLOR: Record<Doc["type"], string> = {
  pdf:    "text-rose-400 border-rose-500/10 bg-rose-500/5 hover:border-rose-500/30 hover:bg-rose-500/10",
  img:    "text-teal-400 border-teal-500/10 bg-teal-500/5 hover:border-teal-500/30 hover:bg-teal-500/10",
  pptx:   "text-amber-400 border-amber-500/10 bg-amber-500/5 hover:border-amber-500/30 hover:bg-amber-500/10",
  folder: "text-indigo-400 border-indigo-500/10 bg-indigo-500/5 hover:border-indigo-500/30 hover:bg-indigo-500/10",
};

export default function DocumentHub() {
  const [docs, setDocs] = useState<Doc[]>(DEFAULT_DOCS);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const newDocs: Doc[] = files.map((f) => {
      const ext = f.name.split(".").pop()?.toLowerCase();
      const type: Doc["type"] =
        ext === "pdf" ? "pdf" :
        ext === "pptx" || ext === "ppt" ? "pptx" :
        ["jpg", "jpeg", "png", "gif", "webp"].includes(ext ?? "") ? "img" : "folder";
      return {
        id: crypto.randomUUID(),
        name: f.name,
        type,
        size: `${(f.size / 1024).toFixed(1)} KB`,
        url: URL.createObjectURL(f),
      };
    });
    setDocs((prev) => [...prev, ...newDocs]);
  };

  const deleteDoc = (id: string) => setDocs((prev) => prev.filter((d) => d.id !== id));

  return (
    <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 flex-shrink-0">
        <div>
          <h2 className="text-white font-heading text-lg font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
            Document Hub
          </h2>
          <p className="text-slate-500 font-sans text-[11px] mt-0.5">
            Static assets, certificates, and presentation slides
          </p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          className="btn-secondary py-2 px-4 text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-500/20 hover:bg-indigo-500/5 hover:text-white"
        >
          <Plus size={13} />
          Upload File
        </button>
        <input ref={fileRef} type="file" multiple className="hidden" onChange={handleUpload} />
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {docs.map((doc) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className={`relative group border rounded-2xl p-5 bg-[#090b11]/30 cursor-pointer transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[160px] ${TYPE_COLOR[doc.type]}`}
                onMouseEnter={() => setHoverId(doc.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => doc.url && window.open(doc.url, "_blank")}
              >
                {/* Delete btn */}
                <button
                  onClick={(e) => { e.stopPropagation(); deleteDoc(doc.id); }}
                  className="absolute top-3 right-3 w-6 h-6 rounded-lg border border-red-500/10 text-red-500/40 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                  title="Delete file"
                >
                  <Trash2 size={12} />
                </button>

                {/* Icon */}
                <motion.div
                  animate={hoverId === doc.id ? { scale: 1.12 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-4xl mb-3"
                >
                  {TYPE_ICON[doc.type]}
                </motion.div>

                {/* Info */}
                <div className="w-full">
                  <p className="font-sans text-xs font-semibold text-slate-200 truncate px-2 mb-1" title={doc.name}>
                    {doc.name}
                  </p>
                  {doc.size && (
                    <p className="font-mono text-[9px] text-slate-500">{doc.size}</p>
                  )}
                </div>

                {/* Subtle Hover lighting */}
                <AnimatePresence>
                  {hoverId === doc.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/2 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {docs.length === 0 && (
          <div className="text-center py-16 text-slate-500 font-sans text-sm flex flex-col items-center justify-center gap-3">
            <HardDrive size={24} className="text-slate-600" />
            <div>No files uploaded in this folder.</div>
          </div>
        )}
      </div>
    </div>
  );
}
