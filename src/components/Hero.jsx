export default function Hero() {
  return (
    <section className="bg-[#f7f5ee] text-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-semibold text-black !text-opacity-100 !opacity-100 mb-2">
  Dr. Serena Blake, PsyD
</h1>
          
        <p className="text-lg text-black mb-6">
          Clinical Psychologist • Los Angeles, CA
        </p>
        <img
          src="/image (3).webp"
          alt="Dr. Serena Blake"
          className="mx-auto w-52 h-52 rounded-full object-cover border-4 border-[#a9c3c4] shadow-md"
        />
        <p className="text-sm text-black mt-6 max-w-xl mx-auto">
        Blending cognitive-behavioral therapy and mindfulness to help you thrive.
        </p>
      </div>
    </section>
  );
}
