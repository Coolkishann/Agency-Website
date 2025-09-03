import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
    items: [
      "Understand business goals",
      "Identify target audience",
      "Consultations",
      "Scope requirements",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your project before development.",
    items: [
      "Wireframes",
      "Design mockups",
      "Prototypes",
      "Feedback & revisions",
    ],
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description: "We build your solution using modern technologies and best practices, with continuous testing throughout the process.",
    items: [
      "Modern tech stack",
      "Best practices",
      "Testing",
      "Quality assurance",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and updates to ensure continued success.",
    items: [
      "Deployment",
      "Ongoing support",
      "Maintenance",
      "Updates",
    ],
  },
];

export function Process() {
  return (
    <section className="bg-[#101010] w-full text-white">
      <div className="max-w-7xl mx-auto px-8">
        <section className="w-full py-20">
          <div className="max-w-4xl">
            <h1 className="text-gray-100 font-extrabold text-7xl leading-tight mb-8">
              Our Process
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              We build scalable solutions tailored to your business, its customers, and the future of your industry.
            </p>
          </div>
        </section>
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            className="w-full border-b border-[#232323] pb-12 pt-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.3 }}
          >
            <div className="text-green-400 text-lg font-bold mb-3">{step.number}</div>
            <div className="flex items-center gap-4 mb-5">
              <step.icon className="w-8 h-8 text-green-400" />
              <h2 className="text-5xl font-extrabold">{step.title}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <p className="text-lg text-gray-400 flex-1 mb-8 md:mb-0">{step.description}</p>
              <ul className="text-lg text-gray-300 flex flex-wrap gap-x-10 gap-y-3 md:ml-16">
                {step.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
