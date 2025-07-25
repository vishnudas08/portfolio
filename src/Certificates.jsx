import { useState } from "react";
import { certificates } from "./data";


const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto ">
        <h2 className="header-name">AWARDS & CERTIFICATES</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:scale-105 transition"
              onClick={() => setSelectedCert(cert)}
            >
              <img src={cert.src} alt={cert.title} className="w-full h-56 object-cover" />
              <p className="mt-4 mb-6 text-center text-sm font-medium text-gray-700 px-2">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full relative">
            <button
              className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 rounded-full px-2 py-1 text-sm font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img
              src={selectedCert.src}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-2 text-center text-white text-sm">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
