import styles from './Button.module.scss';
var classNames = require('classnames');

export const Button = ({ children, design = 'primary' }) => {
  let buttonType =
    design === 'secondary'
      ? classNames(styles.button, styles.secondary)
      : classNames(styles.button, styles.primary);

  return <button className={buttonType}>{children}</button>;
};
