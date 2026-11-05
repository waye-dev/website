"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type='button'
      onClick={copy}
      className='rounded-full border-2 border-black bg-white px-5 py-2 text-sm sm:text-base font-semibold text-black hover:bg-black hover:text-white transition-colors'
    >
      {copied ? "Copied!" : "Copy prompt"}
    </button>
  );
}
