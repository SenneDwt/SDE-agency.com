import React from 'react';

const Cookies = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Cookie Beleid
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Wat zijn Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies zijn kleine tekstbestanden die worden opgeslagen op uw computer of mobiele apparaat wanneer u onze website bezoekt. 
              Ze helpen ons om uw ervaring op onze website te verbeteren en relevante informatie te tonen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Soorten Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We gebruiken verschillende soorten cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Noodzakelijke cookies: Voor basisfunctionaliteit van de website</li>
              <li>Analytische cookies: Om websitegebruik te analyseren</li>
              <li>Functionele cookies: Om uw voorkeuren te onthouden</li>
              <li>Marketing cookies: Voor gepersonaliseerde advertenties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Gebruikte Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Op onze website gebruiken we de volgende cookies:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Google Analytics: Voor website statistieken</li>
              <li>Session cookies: Voor website functionaliteit</li>
              <li>Preference cookies: Voor gebruikersvoorkeuren</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Cookie Beheer</h2>
            <p className="text-gray-300 leading-relaxed">
              U kunt cookies beheren via uw browserinstellingen. U kunt cookies verwijderen of blokkeren, 
              maar dit kan invloed hebben op de functionaliteit van onze website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Cookie Voorkeuren</h2>
            <p className="text-gray-300 leading-relaxed">
              Bij uw eerste bezoek aan onze website kunt u uw cookie voorkeuren instellen. 
              U kunt deze voorkeuren op elk moment wijzigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Voor vragen over ons cookie beleid kunt u contact opnemen met:
            </p>
            <p className="text-gray-300 mt-4">
              SDE Agency<br />
              Email: Senne@sde-agency.com<br />
              Telefoon: +32 471 24 19 12
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Wijzigingen</h2>
            <p className="text-gray-300 leading-relaxed">
              We behouden ons het recht voor om dit cookie beleid aan te passen. Wijzigingen worden op deze pagina gepubliceerd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies; 