import { ContactForm } from './parts/ContactForm';
import styles from './Contact.module.scss';

export function Contact({ item }) {
  return (
    <section className={styles.container}>
      <div className={styles.ContactImage}>
        <svg
          viewBox="0 0 564 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <title>Contact image mask</title>
            <clipPath id="contact-mask">
              <path d="M554.927,271.185C509.797,83.823 398.584,-29.973 245.46,7.677C93.79,44.959 0.5,138.423 0.5,271.185C0.5,403.925 124.607,511.5 277.714,511.5C430.812,511.5 604.316,476.169 554.927,271.185" />
            </clipPath>
          </defs>
          <image clipPath="url(#contact-mask)" xlinkHref={item.photo} />
        </svg>
      </div>
      <div className={styles.FormContainer}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <ContactForm />
      </div>
    </section>
  );
}
