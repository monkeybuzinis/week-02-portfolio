"use client";

import { useState } from "react";

const EMAIL = "khanh.le@cstu.edu";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-medium rounded-lg text-sm transition-colors"
    >
      {copied ? "Copied!" : "Email Me"}
    </button>
  );
}
