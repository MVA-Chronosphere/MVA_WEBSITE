import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "What is the admission procedure?",
    answer: "The admission process includes submitting an online application, entrance test, personal interview, and document verification. Detailed information is available on our admissions portal."
  },
  {
    question: "What documents are required for admission?",
    answer: "Birth certificate, previous academic records, transfer certificate, Aadhar card, passport size photographs, and medical fitness certificate."
  },
  {
    question: "What are the fee structure details?",
    answer: "Our fee structure varies based on grade levels and boarding options. We offer flexible payment plans and scholarship opportunities for deserving students. Please contact our admissions office for specific details."
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, we offer merit-based scholarships and financial assistance to deserving students. Applications are reviewed on a case-by-case basis."
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain an optimal student-teacher ratio of 20:1 to ensure personalized attention and effective learning."
  }
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join the Macro Vision Academy family and embark on a journey of excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Admission Procedure</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Online Registration</h3>
                  <p className="text-muted-foreground">
                    Complete the online application form with accurate details and upload required documents
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Entrance Test</h3>
                  <p className="text-muted-foreground">
                    Appear for the entrance examination to assess academic aptitude and readiness
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Personal Interview</h3>
                  <p className="text-muted-foreground">
                    Attend a personal interview with parents to understand student aspirations and family values
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Admission Confirmation</h3>
                  <p className="text-muted-foreground">
                    Receive admission offer and complete the enrollment process with fee payment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/admissions/online-registration">
                <Button size="lg" className="px-8" data-testid="button-register-online">
                  Register Online Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 -mx-4 px-4 py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Fee Structure</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-card-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Grade</th>
                    <th className="px-6 py-4 text-left">Day Scholar</th>
                    <th className="px-6 py-4 text-left">Boarding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">Class 1-5</td>
                    <td className="px-6 py-4 text-card-foreground">₹1,20,000/year</td>
                    <td className="px-6 py-4 text-card-foreground">₹2,50,000/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">Class 6-8</td>
                    <td className="px-6 py-4 text-card-foreground">₹1,50,000/year</td>
                    <td className="px-6 py-4 text-card-foreground">₹3,00,000/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">Class 9-10</td>
                    <td className="px-6 py-4 text-card-foreground">₹1,80,000/year</td>
                    <td className="px-6 py-4 text-card-foreground">₹3,50,000/year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">Class 11-12</td>
                    <td className="px-6 py-4 text-card-foreground">₹2,00,000/year</td>
                    <td className="px-6 py-4 text-card-foreground">₹3,80,000/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <FAQAccordion items={faqItems} />
        </section>
      </div>
    </div>
  );
}
