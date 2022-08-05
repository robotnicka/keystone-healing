import styles from './Marquee.module.scss';
import { Logo } from './Logo';
import { Button } from '@components/Button';

export const Marquee = ({ children }) => {
  return (
    <div className={styles.Marquee}>
      <span className={styles.Logo}>
        <Logo />
      </span>
      <h2>Your health is the keystone to your life.</h2>
      <Button>Book Appointment</Button>
      <Button type="secondary">Contact Us</Button>
    </div>
  );
};
