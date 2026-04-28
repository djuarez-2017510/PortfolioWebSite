import { motion } from 'framer-motion';
import { SectionTitle, Container, Section, Badge } from '../ui';
import { PROFILE, EDUCATION, INTERESTS, SOFT_SKILLS } from '../../constants/portfolioData';

/**
 * ABOUT SECTION - Información personal, educación e intereses
 */
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id='about' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <Container>
        <SectionTitle>
          Sobre Mí
          <br />
          <span className='text-gray-600 dark:text-gray-400 text-lg font-normal mt-2'>
            Conoce más de mi trayecto profesional y pasiones
          </span>
        </SectionTitle>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            {/* Main Bio */}
            <div>
              <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                Desarrollador Comprometido con la Excelencia
              </h3>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-4'>
                {PROFILE.bio}
              </p>
              <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                Busco combinar los principios sólidos de la ingeniería con una visión artística y humanista, aportando siempre 
                un enfoque creativo y optimista a cada reto tecnológico
              </p>
            </div>

            {/* Key Stats */}
            <div className='grid grid-cols-2 gap-4 mt-8'>
              <div className='bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
                <p className='text-3xl font-bold text-slate-900 dark:text-white'>2</p>
                <p className='text-slate-600 dark:text-slate-400 text-sm mt-1'>Años de Experiencia</p>
              </div>
              <div className='bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700'>
                <p className='text-3xl font-bold text-slate-900 dark:text-white'>10+</p>
                <p className='text-slate-600 dark:text-slate-400 text-sm mt-1'>Proyectos Completados</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex justify-center'
          >
            <div className='relative w-full max-w-sm'>
              <img
                src='/profile.png'
                alt='Daniel Juárez'
                className='w-full rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 object-cover'
              />
            </div>
          </motion.div>
        </div>

        {/* Education & Interests Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Educación</h3>
            <div className='space-y-4'>
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className='bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow'
                >
                  <p className='font-semibold text-slate-900 dark:text-white'>{edu.degree}</p>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>{edu.school}</p>
                  <div className='flex justify-between items-center mt-2'>
                    <span className='text-xs text-slate-500 dark:text-slate-500'>{edu.year}</span>
                    <Badge variant='success' className='text-xs'>{edu.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 p-8 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'
        >
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Habilidades Blandas</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
            {SOFT_SKILLS.map(
              (skill) => (
                <div key={skill.name} className='text-center'>
                  <span className='inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
