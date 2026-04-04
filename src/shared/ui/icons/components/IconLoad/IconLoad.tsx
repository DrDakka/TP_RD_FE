import { Icon } from '../../icons';
import styles from './IconLoad.module.scss';

export const IconLoad = () => (
  <Icon className={styles.loadIcon}>
    <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
    <line x1="16.2" y1="7.8" x2="19.1" y2="4.9" strokeLinecap="round" />
    <line x1="18" y1="12" x2="22" y2="12" strokeLinecap="round" />
    <line x1="16.2" y1="16.2" x2="19.1" y2="19.1" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round" />
    <line x1="4.9" y1="19.1" x2="7.8" y2="16.2" strokeLinecap="round" />
    <line x1="2" y1="12" x2="6" y2="12" strokeLinecap="round" />
    <line x1="4.9" y1="4.9" x2="7.8" y2="7.8" strokeLinecap="round" />
  </Icon>
);
