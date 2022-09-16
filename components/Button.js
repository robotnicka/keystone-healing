import Link from 'next/link';
import styles from './Button.module.scss';
import classNames from 'classnames';

export const Button = ({ children, pointTo, design }) => {
  return (
    <Link href={pointTo}>
      <a
        className={classNames(
          styles.button,
          design === 'secondary' ? styles.secondary : styles.primary
        )}
      >
        {children}
      </a>
    </Link>
  );
};
