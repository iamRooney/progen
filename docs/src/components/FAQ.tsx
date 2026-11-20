interface FAQProps {
  faq: { q: string; a: string }[];
}

export function FAQ({ faq }: FAQProps) {
  return (
    <section className="py-16" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <dt className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                {item.q}
              </dt>
              <dd className="px-6 py-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}