import style from './ContacMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.2,
    rotate: 90,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.8,
    rotate: -90,
    borderRadius: '100%',
  },
};

const linkIcons = [
  { icon: faLinkedin, color: '#0077B5', href: 'https://www.linkedin.com/in/nelson-rojas-507091249/' },
  { icon: faGithub, color: '#181717', href: 'https://github.com/nelsonrojas12' },
  { icon: faEnvelope, color: '#D14836', href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGfFHHggCJKtjXdmPhZSkphFbXZdJTQmZTBnpMZqTsCvVfmqnVLVzdcchlzMHbRhkFVq' },
  { icon: faPhone, color: '#25D366', href: 'tel:+3816825589' },
];

const ContactMe = () => {
  return (
    <motion.div
      className={style.contactMeContainer}
      id='ContactMe'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className={style.contactMeCard}>
        <div className={style.cardContent}>
        
          <div className={style.buttonsContainer}>
            {linkIcons.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={style.contactButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ backgroundColor: link.color }}
              >
                <FontAwesomeIcon icon={link.icon} className={style.icon} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
