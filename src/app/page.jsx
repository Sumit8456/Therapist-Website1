// Therapist Website Hero Section — Next.js 14 App Router + Tailwind CSS

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Info from '../components/Info';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ee] flex flex-col items-center justify-center">
      
      <div className="w-full max-w-7xl px-6 py-12">
        {/* Top Branding */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-left">
          
            <p className="text-base font-serif text-black font-normal">
              Dr. Serena Blake.<br></br>
              Psychological Services
            </p>
          </div>
        </div>

        {/* Hero Section with Image */}
        <div className="rounded-lg overflow-hidden">
          <div className="relative w-full h-[60vh] md:h-[80vh]">
            <img
              src="/ocean.jpg"
              alt="Ocean Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-3xl md:text-5xl font-serif font-bold mb-4 leading-snug">
                Psychological Care for <br />
                Change, Insight, and Well-Being
              </h2>
              <p className="text-white text-sm md:text-base max-w-xl mb-6">
                Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
              </p>
       <button className="bg-[#709b9b] text-white text-sm font-medium px-12 py-4 rounded-[50%] w-[300px] h-[100px] text-center hover:bg-[#a1c2c2] transition duration-300">
  SCHEDULE A CONSULTATION
</button>



            </div>
          </div>
        </div>
         
          <Hero />
         <About />
        <Services />
         <Info />
        <FAQ />
        <ContactForm />
      </div>
    </main>
  );
}


