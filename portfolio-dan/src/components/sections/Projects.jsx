import { motion } from 'framer-motion';
import { SectionTitle, Container, Section, Tag, Button } from '../ui';
import { PROJECTS } from '../../constants/portfolioData';
import { FaGithub } from 'react-icons/fa';

/**
 * PROJECTS SECTION - Portafolio de proyectos destacados
 */
export default function Projects() {
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
    <Section id='projects' className='py-20 bg-white dark:bg-slate-950'>
      <Container>
        <SectionTitle>
          Mis Proyectos
          <br />
          <span className='text-slate-600 dark:text-slate-400 text-lg font-normal mt-2'>
            Trabajo que he realizado y que demuestra mis habilidades
          </span>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className='h-full'
            >
              <motion.div
                className='bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col'
              >
                {/* Project Image */}
                <div className='relative h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden group'>
                  {(project.images && project.images[0]) || project.image ? (
                    <img
                      src={(project.images && project.images[0]) || project.image}
                      alt={project.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <p className='text-slate-400 text-4xl font-bold opacity-20'>
                        {project.title.split(' ')[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='p-6 flex flex-col flex-grow'>
                  {/* Header */}
                  <div className='mb-4'>
                    <div className='flex items-start justify-between mb-2'>
                      <h3 className='text-xl font-bold text-slate-900 dark:text-white flex-1'>
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className='ml-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-semibold rounded-full'>
                          Featured
                        </span>
                      )}
                    </div>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>{project.period}</p>
                  </div>

                  {/* Description */}
                  <p className='text-slate-700 dark:text-slate-300 text-sm mb-4 flex-grow'>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className='mb-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700'>
                    <ul className='text-xs text-slate-700 dark:text-slate-300 space-y-1'>
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span className='text-slate-900 dark:text-white font-bold'>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='mb-6 flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <Tag key={tech} className='text-xs px-2 py-1'>
                        {tech}
                      </Tag>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className='mt-auto'>
                    
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}
