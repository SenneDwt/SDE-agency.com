import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Algemene Voorwaarden
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Algemeen</h2>
            <p className="text-gray-300 leading-relaxed">
              Deze algemene voorwaarden zijn van toepassing op alle diensten en producten van SDE Agency. 
              Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Diensten</h2>
            <p className="text-gray-300 leading-relaxed">
              SDE Agency biedt de volgende diensten:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Website ontwikkeling</li>
              <li>AI chatbot integratie</li>
              <li>Digitale marketing</li>
              <li>Technische ondersteuning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Levering</h2>
            <p className="text-gray-300 leading-relaxed">
              We streven ernaar om projecten binnen de afgesproken termijn op te leveren. 
              Eventuele vertragingen worden tijdig gecommuniceerd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Intellectueel Eigendom</h2>
            <p className="text-gray-300 leading-relaxed">
              Na volledige betaling gaat het intellectueel eigendom van de ontwikkelde producten over naar de klant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Aansprakelijkheid</h2>
            <p className="text-gray-300 leading-relaxed">
              SDE Agency is niet aansprakelijk voor indirecte schade of gevolgschade die voortvloeit uit het gebruik van onze diensten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Opzegging</h2>
            <p className="text-gray-300 leading-relaxed">
              Diensten kunnen worden opgezegd met inachtneming van een opzegtermijn van 30 dagen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Voor vragen over deze voorwaarden kunt u contact opnemen met:
            </p>
            <p className="text-gray-300 mt-4">
              SDE Agency<br />
              Email: Senne@sde-agency.com<br />
              Telefoon: +32 471 24 19 12
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">8. Wijzigingen</h2>
            <p className="text-gray-300 leading-relaxed">
              We behouden ons het recht voor om deze voorwaarden aan te passen. Wijzigingen worden op deze pagina gepubliceerd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; 