import { motion } from 'framer-motion';
import { Container } from '../ui';

/**
 * FOOTER - Pie de página con enlaces y copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Email', url: 'mailto:djuarez232003@gmail.com' },
  ];

  return (
    <footer className='bg-slate-900 text-gray-300 py-12 border-t border-white/10'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2'>
              Daniel Juárez
            </p>
            <p className='text-sm text-gray-500'>
              Software Developer & Creative Problem Solver
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className='font-semibold text-white mb-4'>Enlaces Rápidos</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-blue-400 transition-colors text-sm'
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 pt-8'>
          <p className='text-sm text-gray-500'>
            © {currentYear} Daniel Juárez. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
