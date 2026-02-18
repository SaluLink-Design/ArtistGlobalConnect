"use client";

import { useEffect } from "react";
import { Artist } from "@/data/artists";

interface ArtistKitModalProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistKitModal = ({ artist, onClose }: ArtistKitModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-gold" />
          <div>
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-0.5">
              Media Kit
            </p>
            <h2 className="font-display text-xl font-bold text-white leading-tight">
              {artist.alias}
            </h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase border border-white/10 hover:border-white/30 px-4 py-2"
          aria-label="Close media kit"
        >
          <span>Close</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* PDF iframe */}
      <div className="flex-1 overflow-hidden">
        <iframe
          src={`${artist.mediaKit}#toolbar=1&navpanes=0`}
          className="w-full h-full border-0"
          title={`${artist.alias} Media Kit`}
        />
      </div>
    </div>
  );
};

export default ArtistKitModal;
