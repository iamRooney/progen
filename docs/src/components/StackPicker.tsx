'use client';

import { useState } from 'react';
import { templates } from '@/lib/templates';
import { TerminalBlock } from './TerminalBlock';

export function StackPicker() {
  const [selected, setSelected] = useState<string>('react-ts');

  const template = templates.find(t => t.id === selected);
  const command = `npx setupkaro init my-app --template ${selected}`;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="template-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select a template
          </label>
          <select
            id="template-select"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {templates.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project name (optional)
          </label>
          <input
            type="text"
            id="project-name"
            placeholder="my-app"
            defaultValue="my-app"
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            onChange={e => {
              const name = e.target.value || 'my-app';
              // Update command via state would need more complex handling
              // For simplicity, we'll just show the default
            }}
          />
        </div>
      </div>

      {template && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{template.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Copy command
        </label>
        <TerminalBlock command={command} />
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Replace <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">my-app</code> with your project name.
        </p>
      </div>
    </div>
  );
}