import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Agende sua consulta e descubra a experiência da alfaiataria artesanal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Para agendar uma consulta ou saber mais sobre nossos serviços, entre em contato:
            </p>
            <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                (63) 99217-5480
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <motion.a
              href="https://wa.me/63992175480"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
            >
              <img
                src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png"
                alt="WhatsApp"
                className="w-8 h-8 rounded-lg"
              />
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/alfaiatariaedimar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
            >
              <img
                src="https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png"
                alt="Instagram"
                className="w-8 h-8 rounded-lg"
              />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href="https://maps.app.goo.gl/DeV2bBbwLXBxugBs8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2642/2642502.png"
                alt="Localização"
                className="w-8 h-8 rounded-lg"
              />
              <span>Localização</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              📍 Centro de Paraíso do Tocantins - TO
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
