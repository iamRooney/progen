'use client';

import { useState, useEffect } from 'react';

interface TerminalBlockProps {
  command: string;
  showCopySuccess?: boolean;
}

export function TerminalBlock({ command, showCopySuccess = true }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    if (showCopySuccess) setCopied(true);
  };

  return (
    <div className="relative group">
      <div className="bg-gray-950 rounded-t-lg px-4 py-3 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-500 ml-2 font-mono">terminal</span>
        <div className="flex-1"></div>
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 text-xs font-mono text-gray-300 bg-gray-800 rounded hover:bg-gray-700 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label={copied ? 'Copied!' : 'Copy command'}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className="bg-gray-950 rounded-b-lg px-4 py-4">
        <code className="font-mono text-sm text-green-300 whitespace-pre-wrap break-all">
          {command}
        </code>
      </div>
    </div>
  );
}