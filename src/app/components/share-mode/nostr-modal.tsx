"use client";

import React from "react";

interface NostrModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  shareUrl: string;
}

const NOSTR_EXTENSIONS = [
  { name: "Alby", url: "https://getalby.com" },
  { name: "nos2x", url: "https://github.com/fiatjaf/nos2x" },
];

export const NostrModal: React.FC<NostrModalProps> = ({ isOpen, onClose, content, shareUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A]/80" onClick={onClose}>
      <div className="bg-[#0F172A] text-white rounded-[10px] w-[90vw] sm:w-full max-w-[500px] p-6 shadow-2xl border border-[#282F40]" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-16 h-16 bg-[#7B3FF2] rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 256 256" fill="white">
                <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 234.7c-58.9 0-106.7-47.8-106.7-106.7S69.1 21.3 128 21.3 234.7 69.1 234.7 128 186.9 234.7 128 234.7z" />
                <circle cx="128" cy="85" r="15" />
                <circle cx="85" cy="128" r="15" />
                <circle cx="171" cy="128" r="15" />
                <circle cx="128" cy="171" r="15" />
              </svg>
            </div>
            <h3 className="text-xl font-inknutAntiqua text-white">Nostr Extension Required</h3>
            <p className="text-sm font-josefinSans text-white/80">Install a Nostr browser extension to share directly to Nostr</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-josefinSans text-white/80 mb-2">Recommended extensions:</p>
            {NOSTR_EXTENSIONS.map((ext) => (
              <a
                key={ext.name}
                href={ext.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 bg-[#282F40] hover:bg-[#3a4255] rounded-lg text-sm font-inknutAntiqua transition-all duration-150 hover:scale-[1.02] text-center"
              >
                Install {ext.name}
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-2 w-full px-6 py-2 bg-[#BFDBFE] text-[#0F172A] rounded-lg text-sm font-inknutAntiqua transition-all duration-150 hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
