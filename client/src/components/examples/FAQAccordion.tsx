import FAQAccordion from '../FAQAccordion';

export default function FAQAccordionExample() {
  const faqs = [
    {
      question: "What is the admission procedure?",
      answer: "The admission process includes submitting an online application, entrance test, personal interview, and document verification. Please visit our admissions page for detailed information."
    },
    {
      question: "What are the fee structure details?",
      answer: "Our fee structure varies based on grade levels and boarding options. We offer flexible payment plans and scholarship opportunities for deserving students. Please contact our admissions office for specific details."
    },
    {
      question: "Does MVA provide transportation facilities?",
      answer: "Yes, we provide safe and comfortable transportation services covering major routes in the city. Our buses are GPS-enabled with trained staff for student safety."
    },
    {
      question: "What are the hostel facilities available?",
      answer: "We offer state-of-the-art hostel facilities with separate residential wings for boys and girls, 24/7 security, nutritious meals, medical facilities, and dedicated wardens for student care."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "MVA offers a wide range of activities including sports, performing arts, art & craft, financial literacy programs, STEM activities, and various clubs for holistic student development."
    }
  ];

  return <FAQAccordion items={faqs} />;
}
