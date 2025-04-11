import React from 'react';
import { Recycle, Leaf, TreeDeciduous, ShoppingBag, Users, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Réduisons Nos Déchets
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Ensemble, adoptons des solutions durables pour un avenir plus propre
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center mx-auto">
            Agir maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Solutions Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Solutions pour réduire nos déchets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Recycle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Recyclage Intelligent</h3>
            <p className="text-gray-600">Apprenez à trier efficacement vos déchets pour maximiser leur recyclage.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ShoppingBag className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Zéro Déchet</h3>
            <p className="text-gray-600">Adoptez un mode de vie zéro déchet avec nos conseils pratiques.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compostage</h3>
            <p className="text-gray-600">Transformez vos déchets organiques en ressource pour votre jardin.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-green-600 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Notre Impact Collectif</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">500kg</p>
              <p className="text-green-100">de déchets évités par foyer/an</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">10,000</p>
              <p className="text-green-100">arbres sauvés</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-4xl font-bold text-white mb-2">30%</p>
              <p className="text-green-100">réduction des émissions CO2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Rejoignez le mouvement
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ensemble, nous pouvons faire la différence. Commencez votre voyage vers un mode de vie plus durable dès aujourd'hui.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            S'engager maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos</h3>
            <p className="text-gray-400">Notre mission est de promouvoir un mode de vie durable et respectueux de l'environnement.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@reduisonsnosdechets.fr</p>
            <p className="text-gray-400">Tél: 01 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Réduisons Nos Déchets. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;