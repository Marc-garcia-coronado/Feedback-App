"use client";

import React from "react";
import {InfiniteMovingCards} from "@/components/ui/infiniteMovingCards";

export function InfiniteMovingCardsImpl() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className='text-2xl text-center lg:text-4xl font-normal mb-10'>Perspectives from influential people/companies...</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "\"We all need people who will give us feedback. That’s how we improve.\" Gates highlights the importance of receiving feedback from multiple sources to drive personal and professional growth.",
    name: "Bill Gates",
    title: "Co-Founder of Microsoft",
  },
  {
    quote:
      "\"When done right, 360-degree feedback can be a powerful tool for learning and development. It provides a comprehensive view of an individual’s performance and areas for improvement.\" Welch emphasizes the potential of 360-degree feedback to foster learning and development.",
    name: "Jack Welch",
    title: "CEO of General Electric",
  },
  {
    quote: "Google uses a peer review system similar to 360-degree feedback to assess its employees. The company believes this system helps create a more collaborative and transparent work environment, ensuring that feedback is fair and balanced.",
    name: "Google",
    title: "",
  },
  {
    quote:
      "\"Feedback is a gift. Ideas for improvement and ways to be better at your job should come from all directions.\" Sandberg underscores the value of feedback from diverse sources in enhancing job performance.",
    name: "Sheryl Sandberg",
    title: "COO of Facebook",
  },
  {
    quote:
      "IBM has incorporated 360-degree feedback into its performance management system to create a more dynamic and continuous feedback culture. The company finds that this approach helps in identifying leadership potential and areas for professional development.",
    name: "IBM",
    title: "",
  },
  {
    quote:
      "Zappos uses 360-degree feedback as part of its commitment to a transparent and empowering company culture. The company believes that receiving feedback from peers, subordinates, and supervisors helps employees understand their impact on the organization and fosters a culture of continuous improvement.\n",
    name: "Zappos",
    title: "",
  },
  {
    quote:
      "McKinsey uses 360-degree feedback in its leadership development programs. The consultancy firm finds that this method helps future leaders gain a well-rounded understanding of their strengths and weaknesses, facilitating more effective personal development.",
    name: "McKinsey & Company",
    title: "",
  },
];
