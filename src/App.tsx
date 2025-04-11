import React, { useEffect } from 'react';
import { Recycle, Leaf, TreeDeciduous, ShoppingBag, Users, ArrowRight, BookOpen, Target, Award, Calendar, CheckCircle2, Lightbulb } from 'lucide-react';

function App() {
  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const solutionsSection = document.getElementById('solutions');
    solutionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

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
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Réduisons Nos Déchets
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            Ensemble, adoptons des solutions durables pour un avenir plus propre
          </p>
          <a
            href="#solutions"
            onClick={scrollToSolutions}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform animate-slide-up delay-400"
          >
            Agir maintenant
            <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
          </a>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pourquoi réduire nos déchets ?</h2>
              <p className="text-lg text-gray-600 mb-6">La réduction des déchets est devenue un enjeu majeur pour notre planète. Chaque année, des millions de tonnes de déchets finissent dans nos océans et nos décharges, menaçant la biodiversité et notre santé.</p>
              <p className="text-lg text-gray-600">En adoptant des gestes simples au quotidien, nous pouvons tous contribuer à préserver notre environnement pour les générations futures.</p>
            </div>
            <div 
              className="h-[400px] rounded-lg overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          Solutions pour réduire nos déchets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <Recycle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Recyclage Intelligent</h3>
            <p className="text-gray-600">Apprenez à trier efficacement vos déchets pour maximiser leur recyclage.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <ShoppingBag className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Zéro Déchet</h3>
            <p className="text-gray-600">Adoptez un mode de vie zéro déchet avec nos conseils pratiques.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compostage</h3>
            <p className="text-gray-600">Transformez vos déchets organiques en ressource pour votre jardin.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-green-600 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">Notre Impact Collectif</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <p className="text-4xl font-bold text-white mb-2">500kg</p>
              <p className="text-green-100">de déchets évités par foyer/an</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <p className="text-4xl font-bold text-white mb-2">10,000</p>
              <p className="text-green-100">arbres sauvés</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <p className="text-4xl font-bold text-white mb-2">30%</p>
              <p className="text-green-100">réduction des émissions CO2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Guide Pratique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <BookOpen className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Apprendre</h3>
              <p className="text-gray-600">Découvrez les bases du zéro déchet et comment les appliquer au quotidien.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <Target className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Objectifs</h3>
              <p className="text-gray-600">Fixez-vous des objectifs réalisables et suivez vos progrès.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <Award className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Récompenses</h3>
              <p className="text-gray-600">Gagnez des badges et des récompenses pour vos efforts écologiques.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Communauté</h3>
              <p className="text-gray-600">Rejoignez une communauté engagée et partagez vos expériences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Conseils pour Commencer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Utilisez des sacs réutilisables</h3>
                  <p className="text-gray-600">Adoptez des sacs en tissu pour vos courses et dites adieu aux sacs plastiques.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compostez vos déchets organiques</h3>
                  <p className="text-gray-600">Transformez vos déchets de cuisine en compost pour votre jardin.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Évitez les emballages</h3>
                  <p className="text-gray-600">Privilégiez les produits en vrac et les contenants réutilisables.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Réparez plutôt que jeter</h3>
                  <p className="text-gray-600">Donnez une seconde vie à vos objets en les réparant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Événements à Venir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <Calendar className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atelier Compostage</h3>
              <p className="text-gray-600 mb-4">Apprenez les techniques de compostage avec nos experts.</p>
              <p className="text-sm text-gray-500">15 Mars 2024 - 14h00</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <Lightbulb className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Conférence Zéro Déchet</h3>
              <p className="text-gray-600 mb-4">Découvrez les dernières innovations en matière de réduction des déchets.</p>
              <p className="text-sm text-gray-500">22 Mars 2024 - 18h30</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clean-up Challenge</h3>
              <p className="text-gray-600 mb-4">Participez à notre grand défi de nettoyage urbain.</p>
              <p className="text-sm text-gray-500">29 Mars 2024 - 10h00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Rejoignez le mouvement
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Ensemble, nous pouvons faire la différence. Commencez votre voyage vers un mode de vie plus durable dès aujourd'hui.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform animate-on-scroll opacity-0 translate-y-10 delay-200">
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