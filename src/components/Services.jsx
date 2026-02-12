import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: '🎩',
      title: 'Consertos de Ternos',
      description: 'Reparos profissionais para manter seus ternos impecáveis',
    },
    {
      icon: '👔',
      title: 'Camisas Personalizadas',
      description: 'Desde o tecido até os botões, tudo ao seu gosto',
    },
    {
      icon: '✂️',
      title: 'Ajustes e Reformas',
      description: 'Renove ou ajuste suas peças favoritas',
    },
    {
      icon: '💼',
      title: 'Consultoria de Estilo',
      description: 'Dicas profissionais para aprimorar seu visual',
    },
    {
      icon: '👖',
      title: 'Calças Sob Medida',
      description: 'Corte e caimento perfeitos',
    },
    {
      icon: '🧥',
      title: 'Paletós e Blazers',
      description: 'Ajustes precisos para elegância máxima',
    },
    {
      icon: '🎭',
      title: 'Smokings Especiais',
      description: 'Elegância e sofisticação para eventos formais',
    },
    {
      icon: '⏰',
      title: 'Restauração Vintage',
      description: 'Dê nova vida às suas peças clássicas',
    },
    {
      icon: '🎀',
      title: 'Acessórios Personalizados',
      description: 'Gravatas, lenços e mais, para completar seu look',
    },
  ]

  return (
    <section id="serviços" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Excelência em cada detalhe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
