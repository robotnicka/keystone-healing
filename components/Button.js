import Link from 'next/link';
import styles from './Button.module.scss';
var classNames = require('classnames');

export const Button = ({ children, design, pointTo = 'primary' }) => {
  let buttonType =
    design === 'secondary'
      ? classNames(styles.button, styles.secondary)
      : classNames(styles.button, styles.primary);

  return (
    <Link href={pointTo} className={buttonType}>
      {children}
    </Link>
  );
};
