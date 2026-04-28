import { motion } from 'framer-motion';
import { SectionTitle, Container, Section, Badge, Tag } from '../ui';
import { EXPERIENCE } from '../../constants/portfolioData';

/**
 * EXPERIENCE SECTION - Timeline interactivo con experiencia laboral
 */
export default function Experience() {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id='experience' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <Container>
        <SectionTitle>
          Mi Experiencia
          <br />
          <span className='text-gray-600 dark:text-gray-400 text-lg font-normal mt-2'>
            Trayecto profesional y proyectos destacados
          </span>
        </SectionTitle>

        {/* Timeline */}
        <div className='max-w-3xl mx-auto'>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='mb-12 relative'
            >
              {/* Timeline Dot & Line */}
              <div className='absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2'>
                <div className='w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg'></div>
                {index < EXPERIENCE.length - 1 && (
                  <div className='absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent'></div>
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                  bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md
                  border border-gray-200 dark:border-slate-700
                  hover:shadow-xl transition-all duration-300
                `}
              >
                {/* Header */}
                <div className='mb-4'>
                  <div className='flex items-start justify-between mb-2'>
                    <div>
                      <h4 className='text-lg font-bold text-slate-900 dark:text-white'>
                        {exp.title}
                      </h4>
                      <p className='text-blue-600 dark:text-blue-400 font-semibold'>
                        @ {exp.company}
                      </p>
                    </div>
                    <Badge variant='primary' className='text-xs'>
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed'>
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className='mb-4 space-y-2'>
                  {exp.highlights.map((highlight, idx) => (
                    <p
                      key={idx}
                      className='text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2'
                    >
                      <span className='text-blue-500 mt-1'>✓</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech) => (
                    <Tag key={tech} className='text-xs px-2 py-1'>
                      {tech}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
