import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order has been shipped, you will receive a tracking number via email.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping rates may vary depending on the destination.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items. Please refer to our Returns page for more information.'
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Frequently Asked Questions</h1>
      <div className="accordion" id="faqsAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button className="accordion-button collapsed fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                {faq.question}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqsAccordion">
              <div className="accordion-body">
                <p className="mb-0">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
