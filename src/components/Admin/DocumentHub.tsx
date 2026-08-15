"use client";

import { useState } from "react";
import { FileText, Image as ImageIcon, File, Download, ExternalLink, Plus } from "lucide-react";

interface Doc {
  id: string;
  title: string;
  type: string;
  url: string;
}

const mockDocs: Doc[] = [
  { id: "1", title: "Architecture Diagram", type: "image", url: "#" },
  { id: "2", title: "Project Proposal", type: "pdf", url: "#" },
  { id: "3", title: "Q3 Strategy", type: "pptx", url: "#" },
];

export default function DocumentHub() {
  const [docs] = useState<Doc[]>(mockDocs);

  const getIcon = (type: string) => {
    switch (type) {
      case "image": return <ImageIcon className="text-accent-cyan" size={24} />;
      case "pdf": return <FileText className="text-red-400" size={24} />;
      case "pptx": return <File className="text-orange-400" size={24} />;
      default: return <File className="text-gray-400" size={24} />;
    }
  };

  return (
    <div className="glass p-8 rounded-3xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Document Hub</h2>
        <button className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
          <Plus size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
        {docs.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 hover:border-accent-cyan/30 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                {getIcon(doc.type)}
              </div>
              <span className="font-medium text-gray-200">{doc.title}</span>
            </div>
            
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href={doc.url} className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="View">
                <ExternalLink size={18} />
              </a>
              <a href={doc.url} download className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-accent-cyan transition-colors" title="Download">
                <Download size={18} />
              </a>
            </div>
          </div>
        ))}
        {docs.length === 0 && (
          <div className="text-center text-gray-500 py-8">No documents found.</div>
        )}
      </div>
    </div>
  );
}
