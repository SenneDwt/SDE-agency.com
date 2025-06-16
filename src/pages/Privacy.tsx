import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Privacybeleid
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Inleiding</h2>
            <p className="text-gray-300 leading-relaxed">
              SDE Agency respecteert uw privacy en zorgt ervoor dat alle persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. 
              Dit privacybeleid beschrijft welke gegevens we verzamelen en waarvoor we deze gebruiken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Verzamelde Gegevens</h2>
            <p className="text-gray-300 leading-relaxed">
              We verzamelen alleen gegevens die noodzakelijk zijn voor het verlenen van onze diensten:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Naam en contactgegevens</li>
              <li>Bedrijfsinformatie</li>
              <li>Communicatiegeschiedenis</li>
              <li>Website gebruikersstatistieken</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Gebruik van Gegevens</h2>
            <p className="text-gray-300 leading-relaxed">
              We gebruiken uw gegevens voor:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Het verlenen van onze diensten</li>
              <li>Het verbeteren van onze diensten</li>
              <li>Het versturen van belangrijke updates</li>
              <li>Het beantwoorden van uw vragen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Gegevensbescherming</h2>
            <p className="text-gray-300 leading-relaxed">
              We nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies of onrechtmatige verwerking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Uw Rechten</h2>
            <p className="text-gray-300 leading-relaxed">
              U heeft de volgende rechten:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Inzage in uw gegevens</li>
              <li>Correctie van onjuiste gegevens</li>
              <li>Verwijdering van uw gegevens</li>
              <li>Bezwaar tegen verwerking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Voor vragen over ons privacybeleid kunt u contact opnemen met:
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
              We behouden ons het recht voor om dit privacybeleid aan te passen. Wijzigingen worden op deze pagina gepubliceerd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 