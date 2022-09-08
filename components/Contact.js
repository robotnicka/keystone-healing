import { ContactForm } from './ContactForm';
import styles from './Contact.module.scss';

export function Contact({ item }) {
  return (
    <section className={styles.container}>
      <div>
        <img src={item.photo} alt="" />
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <ContactForm />
      </div>
    </section>
  );
}
