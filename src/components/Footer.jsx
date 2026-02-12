import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Alfaiataria Edimar
            </h3>
            <p className="text-gray-400">
              40 anos de tradição e excelência em alfaiataria artesanal
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#serviços" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (63) 99217-5480</li>
              <li>📍 Centro, Paraíso do Tocantins - TO</li>
              <li>
                <a 
                  href="https://instagram.com/alfaiatariaedimar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @alfaiatariaedimar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            <a 
              href="https://wa.me/63992175480" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              © 2026 Alfaiataria Edimar
            </a>
            {' '}- Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
