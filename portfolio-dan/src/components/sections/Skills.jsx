import { motion } from 'framer-motion';
import { SectionTitle, Container, Section, Tag } from '../ui';
import { TECH_STACK } from '../../constants/portfolioData';

/**
 * SKILLS SECTION - Stack tecnológico categorizado con animaciones
 */
export default function Skills() {
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

  const SkillBar = ({ name, level }) => (
    <motion.div
      variants={itemVariants}
      className='space-y-2'
    >
      <div className='flex justify-between items-center'>
        <span className='font-medium text-slate-700 dark:text-slate-300 text-sm'>
          {name}
        </span>
        <span className='text-xs font-semibold text-slate-600 dark:text-slate-400'>
          {level}%
        </span>
      </div>
      <div className='h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8 }}
          className='h-full bg-slate-900 dark:bg-white'
        />
      </div>
    </motion.div>
  );

  return (
    <Section id='skills' className='py-20 bg-white dark:bg-slate-950'>
      <Container>
        <SectionTitle>
          Mi Stack Tecnológico
          <br />
          <span className='text-gray-600 dark:text-gray-400 text-lg font-normal mt-2'>
            Herramientas y lenguajes que domino
          </span>
        </SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Object.entries(TECH_STACK).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700'
            >
              {/* Category Header */}
              <motion.h3
                variants={itemVariants}
                className='text-lg font-bold text-slate-900 dark:text-white mb-6'
              >
                {category}
              </motion.h3>

              {/* Skills List */}
              <motion.div variants={containerVariants} className='space-y-4'>
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl'
        >
          <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-6'>
            Tecnologías Destacadas
          </h3>
          <div className='flex flex-wrap gap-3'>
            {[
              'React',
              'Node.js',
              'TypeScript',
              'Tailwind CSS',
              'Next.js',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'Git',
              'Figma',
              'Flutter',
              'Kotlin',
            ].map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
