import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-8 md:p-12"
              >
                <h2 className="text-4xl font-bold mb-6 text-gradient">
                  Sobre Edimar
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Descubra a arte de se vestir bem com Edimar dos Santos, um especialista em trajes masculinos sob medida, no Centro de Paraíso do Tocantins - TO. Há quatro décadas de experiência, ele usa de sua destreza para combinar personalidade, elegância e conforto na criação de peças únicas que se destacam pelo refinamento e ajuste perfeito.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
                  Em nosso ateliê, cada cliente recebe atenção exclusiva, garantindo vestimentas que refletem seu estilo individual. Visite-nos e transforme seu guarda-roupa com a excelência de um artesão dedicado à qualidade sem igual.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="ml-2 text-gray-700 dark:text-gray-300 font-semibold">40 Anos de Experiência</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative h-full min-h-[400px]"
              >
                <img
                  src="/images/familia.png"
                  alt="Edimar, o Alfaiate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
