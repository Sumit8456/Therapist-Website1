export default function Info() {
  return (
    <section className="bg-[#f7f5ee] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
<div className="custom-section">
  <h2 className="text-sm font-serif font-semibold mb-8">Session Details</h2>
</div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold text-[#3a5a77] mb-2">Office Hours</h3>
            <p className="text-gray-700">
              <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
              <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#3a5a77] mb-2">Session Fees</h3>
            <p className="text-gray-700">
              $200 / individual session<br />
              $240 / couples session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
