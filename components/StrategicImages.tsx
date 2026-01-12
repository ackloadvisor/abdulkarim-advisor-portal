
import React from 'react';
import { FadeIn } from './MotionWrapper';

export const StrategicImages: React.FC = () => {
  return (
    <section className="w-full bg-[#fafaf8] overflow-hidden flex flex-col">
      <FadeIn>
        <div className="w-full border-b border-zinc-100">
          <img 
            src="https://res.cloudinary.com/dayqcryf0/image/upload/v1767856557/ACKLO_brochure2_%EB%B3%B5%EC%82%AC%EB%B3%B8_kcqm5e.jpg" 
            alt="ACKLO Strategic Brochure" 
            className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="w-full border-b border-zinc-100">
          <img 
            src="https://res.cloudinary.com/dayqcryf0/image/upload/v1767856219/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-02-05_%EC%98%A4%EC%A0%84_1.49.39_vaxdvy.png" 
            alt="Strategic Implementation Preview" 
            className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
        </div>
      </FadeIn>
    </section>
  );
};
