import { colors, typography } from '../../constants/designSystem';

/**
 * Button Component
 * Componente de botón reutilizable con variantes
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: `bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md hover:shadow-lg`,
    secondary: `bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700`,
    ghost: `text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800`,
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Card Component
 * Componente de tarjeta con sombra y bordes redondeados
 */
export const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md
        ${hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Badge Component
 * Componente para etiquetas/badges
 */
export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100',
    secondary: 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

/**
 * SectionTitle Component
 * Componente para títulos de secciones
 */
export const SectionTitle = ({ children, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className={`${typography.h2} text-slate-900 dark:text-white mb-4`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`${typography.body} text-gray-600 dark:text-gray-400 max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * Tag Component
 * Componente para tecnologías y tags
 */
export const Tag = ({ children, className = '' }) => {
  return (
    <span
      className={`
        inline-block px-4 py-2 bg-slate-100
        dark:bg-slate-800
        text-slate-800 dark:text-slate-200
        rounded-full text-sm font-medium
        ${className}
      `}
    >
      {children}
    </span>
  );
};

/**
 * Container Component
 * Wrapper para contenido con max-width
 */
export const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Section Component
 * Envoltorio para secciones del portafolio
 */
export const Section = ({ children, className = '', id = '' }) => {
  return (
    <section
      id={id}
      className={`
        py-12 sm:py-16 lg:py-20
        relative overflow-hidden
        ${className}
      `}
    >
      {children}
    </section>
  );
};
