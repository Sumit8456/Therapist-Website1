import React from 'react';

export default function About() {
  return (
    <section className="bg-white text-black max-w-9xl mx-auto my-16 py-20 px-8 flex flex-col md:flex-row gap-10 items-start">
      {/* Text Content */}
      <div className="flex-1 space-y-10">
        <h2 className="text-[28px] font-semibold text-[#666452] font-serif">
          About Dr. Serena Blake, PsyD
        </h2>
         <div className="space-y-6">
        <p className="text-[17px] text-[#a5a39e] leading-relaxed">
         Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
        </p>
        <p className="text-[17px] text-[#a5a39e] leading-relaxed">
                   Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
       
        </div>
      </div>

      {/* Profile Image */}
       <div className="flex-1 flex justify-end">
    <img
      src="/image (3).webp"
      alt="Dr. Jennifer Hahm"
      className="w-full max-w-[400px]  object-cover shadow-md"
    />
  </div>
    </section>
  );
}
