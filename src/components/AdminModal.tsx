"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsOpen(false);
        setPassword("");
        router.push("/command-center");
      } else {
        setError("Invalid Master Password");
      }
    } catch { // eslint-disable-next-line

      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transition={{ type: "spring", duration: 0.4 } as any}
            className="relative w-full max-w-md bg-[#090b11] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden z-10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              aria-label="Close Admin Modal"
            >
              <X size={20} />
            </button>
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-lg">
                <Lock size={28} />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-center text-white mb-2 font-heading">Vault Access</h2>
            <p className="text-slate-400 text-center mb-8 text-sm">Enter Master Password to access Command Center</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#040508] border border-white/10 rounded-xl px-4 py-3 text-white text-center tracking-[0.3em] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all font-mono"
                  autoFocus
                />
              </div>
              
              {error && (
                <p className="text-red-400 text-sm text-center font-mono">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-[#14b8a6] text-white font-semibold font-heading hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center cursor-pointer"
              >
                {loading ? "Verifying..." : "Unlock Vault"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}