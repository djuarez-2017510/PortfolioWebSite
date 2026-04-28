import { motion } from 'framer-motion';
import { SectionTitle, Container, Section } from '../ui';
import { PROFILE, SOCIAL_LINKS } from '../../constants/portfolioData';
import { FaEnvelope, FaComment } from 'react-icons/fa';

/**
 * CONTACT SECTION - Enlaces de contacto directo
 */
export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id='contact' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <Container>
        <SectionTitle>
          ¿Hablamos?
          <br />
          <span className='text-slate-600 dark:text-slate-400 text-lg font-normal mt-2'>
            Estoy disponible para nuevos proyectos y oportunidades
          </span>
        </SectionTitle>

        <div className='max-w-2xl mx-auto'>
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Direct Contact */}
            <motion.div variants={itemVariants}>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-6'>Formas de Contactarme</h3>

              <div className='space-y-4'>
                {/* Email */}
                <motion.a
                  href={`mailto:${PROFILE.email}`}
                  className='flex items-start gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow duration-300 group'
                >
                  <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded-lg'>
                    <FaEnvelope className='text-slate-700 dark:text-slate-300 text-xl' />
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900 dark:text-white'>Email</p>
                    <p className='text-slate-600 dark:text-slate-400 text-sm'>{PROFILE.email}</p>
                  </div>
                </motion.a>

                {/* Phone (opcional) */}
                <motion.div
                  className='flex items-start gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow duration-300'
                >
                  <div className='p-3 bg-slate-100 dark:bg-slate-700 rounded-lg'>
                    <FaComment className='text-slate-700 dark:text-slate-300 text-xl' />
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900 dark:text-white'>Disponibilidad</p>
                    <p className='text-slate-600 dark:text-slate-400 text-sm'>Generalmente respondo en 24 horas</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className='text-lg font-bold text-slate-900 dark:text-white mb-4'>Conecta Conmigo</h4>
              <div className='flex gap-4'>
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1, y: -5 }}
                    className='p-3 bg-slate-900 dark:bg-white rounded-lg text-white dark:text-slate-900 hover:shadow-lg transition-all duration-300'
                  >
                    <span className='text-lg'>{link.name.charAt(0)}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
