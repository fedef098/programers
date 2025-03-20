import { Github, Linkedin, Twitter, MapPin, Briefcase, Award, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Programadores Extraordinarios
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10">
              Conoce a cuatro de los desarrolladores más brillantes y revolucionarios del mundo tecnológico actual
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#perfiles"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:opacity-90 transition-all transform hover:scale-105"
              >
                Conocer Perfiles
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </header>

      {/* Profiles Section */}
      <section id="perfiles" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Perfiles Destacados
          </span>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Ari */}
          <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all transform hover:-translate-y-2 border border-slate-700">
            <div className="relative h-80 overflow-hidden">
              <img src="/images/ari.jpg" alt="Ari - Programador Aventurero" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Ari Silverman</h3>
              <div className="flex items-center text-slate-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>San Francisco, California</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-900/40 rounded-full text-purple-300 text-sm">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-blue-900/40 rounded-full text-blue-300 text-sm">Python</span>
                <span className="px-3 py-1 bg-green-900/40 rounded-full text-green-300 text-sm">TensorFlow</span>
              </div>
              <p className="text-slate-300 mb-4">
                Conocido como "El Susurrador de Algoritmos", Ari revolucionó el mundo de la IA cuando, durante una
                excursión de camping, desarrolló un algoritmo de aprendizaje profundo inspirado en los patrones de
                crecimiento de los árboles. Su innovación le valió ser reclutado por Google Brain a los 22 años.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-4">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="font-medium">Google Brain - Investigador Principal</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-medium">Premio Turing 2023 - Mención Honorífica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tito */}
          <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-2 border border-slate-700">
            <div className="relative h-80 overflow-hidden">
              <img src="/images/tito-new.png" alt="Tito - Programador Campeón" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Tito Ramírez</h3>
              <div className="flex items-center text-slate-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Nueva York, Estados Unidos</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900/40 rounded-full text-blue-300 text-sm">Blockchain</span>
                <span className="px-3 py-1 bg-yellow-900/40 rounded-full text-yellow-300 text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-red-900/40 rounded-full text-red-300 text-sm">Solidity</span>
              </div>
              <p className="text-slate-300 mb-4">
                Tito, "El Campeón de la Criptografía", ganó tres hackathons consecutivos antes de cumplir 20 años. Su
                sistema de contratos inteligentes para ayuda humanitaria atrajo la atención de Ethereum Foundation,
                donde ahora lidera proyectos de impacto social utilizando blockchain.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-4">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-medium">Ethereum Foundation - Arquitecto Blockchain</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-medium">3x Campeón Mundial de Hackathons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cuchi */}
          <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all transform hover:-translate-y-2 border border-slate-700">
            <div className="relative h-80 overflow-hidden">
              <img
                src="/images/cuchi.jpg"
                alt="Cuchi - Programador Visionario"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Carlos "Cuchi" Mendoza</h3>
              <div className="flex items-center text-slate-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Seattle, Washington</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-900/40 rounded-full text-green-300 text-sm">Cloud Computing</span>
                <span className="px-3 py-1 bg-orange-900/40 rounded-full text-orange-300 text-sm">AWS</span>
                <span className="px-3 py-1 bg-cyan-900/40 rounded-full text-cyan-300 text-sm">Kubernetes</span>
              </div>
              <p className="text-slate-300 mb-4">
                "El Arquitecto de Nubes" desarrolló su primera infraestructura serverless mientras estaba en la
                universidad. La leyenda cuenta que Amazon lo contrató después de que detectara y solucionara una
                vulnerabilidad crítica en AWS. Ahora lidera el equipo de innovación en arquitecturas cloud.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-4">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-medium">Amazon AWS - Director de Arquitectura Cloud</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-cyan-400" />
                  <span className="font-medium">Creador de 3 frameworks open-source</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tomi */}
          <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all transform hover:-translate-y-2 border border-slate-700">
            <div className="relative h-80 overflow-hidden">
              <img
                src="/images/tomi-new.png"
                alt="Tomi - Programador Innovador"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-3">
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800/80 p-2 rounded-full hover:bg-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Tomás "Tomi" Fernández</h3>
              <div className="flex items-center text-slate-400 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Silicon Valley, California</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-900/40 rounded-full text-red-300 text-sm">Startups</span>
                <span className="px-3 py-1 bg-indigo-900/40 rounded-full text-indigo-300 text-sm">React</span>
                <span className="px-3 py-1 bg-pink-900/40 rounded-full text-pink-300 text-sm">UX/UI</span>
              </div>
              <p className="text-slate-300 mb-4">
                Conocido como "El Visionario", Tomi fundó su primera startup a los 19 años. Después de venderla a Meta
                por 50 millones, se unió a Y Combinator como mentor. Su filosofía de "código con propósito" ha inspirado
                a una generación de desarrolladores a crear productos centrados en el usuario.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-4">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-red-400" />
                  <span className="font-medium">Y Combinator - Mentor Principal</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-medium">Forbes 30 Under 30 - Tecnología</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 shadow-xl border border-slate-700">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Impacto Colectivo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">42+</div>
              <div className="text-slate-400">Patentes Registradas</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">127M</div>
              <div className="text-slate-400">Líneas de Código</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">$350M</div>
              <div className="text-slate-400">Inversión Captada</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">15+</div>
              <div className="text-slate-400">Premios Internacionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Lo Que Dicen De Ellos
          </span>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="text-purple-400 text-4xl mb-4">"</div>
            <p className="text-slate-300 mb-6">
              Ari transformó nuestra estrategia de IA. Su enfoque innovador nos permitió reducir costos en un 40%
              mientras mejorábamos la precisión de nuestros modelos.
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="font-medium">Sundar Pichai</div>
                <div className="text-sm text-slate-400">CEO, Google</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="text-blue-400 text-4xl mb-4">"</div>
            <p className="text-slate-300 mb-6">
              La arquitectura blockchain de Tito es revolucionaria. Ha creado un sistema que es a la vez seguro,
              escalable y accesible para proyectos de impacto social.
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="font-medium">Vitalik Buterin</div>
                <div className="text-sm text-slate-400">Fundador, Ethereum</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div className="text-green-400 text-4xl mb-4">"</div>
            <p className="text-slate-300 mb-6">
              Trabajar con Cuchi y Tomi en nuestro último proyecto fue una experiencia transformadora. Su visión
              combinada de tecnología y experiencia de usuario es inigualable.
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="font-medium">Mark Zuckerberg</div>
                <div className="text-sm text-slate-400">CEO, Meta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-10 text-center max-w-4xl mx-auto border border-purple-700/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres trabajar con estos genios?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Estos programadores extraordinarios ocasionalmente aceptan nuevos proyectos y desafíos
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-lg hover:opacity-90 transition-all transform hover:scale-105"
          >
            Contactar Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Programadores Extraordinarios
              </h3>
              <p className="text-slate-400 mt-2">© 2025 Todos los derechos reservados</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

