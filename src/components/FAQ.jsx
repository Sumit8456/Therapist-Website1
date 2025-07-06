import React, { useState } from 'react';

const faqData = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice required.',
    },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-serif text-center text-[#3a5a77] mb-10">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-serif text-[#3a5a77] mb-6">Therapy</h3>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-[#3a5a77] pb-3">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-[#5a748f] font-normal text-base hover:underline"
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-700 text-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
