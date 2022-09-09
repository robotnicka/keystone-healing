import styles from './ContactForm.module.scss';

export function ContactForm() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      method="POST"
      action="/success"
      id="contact-us"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name</label>
      <input id="name" className={styles.formField} type="text" name="name" />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles.formField}
        type="email"
        name="email"
        required
      />

      <label htmlFor="phone">Phone</label>
      <input id="phone" className={styles.formField} type="tel" name="phone" />

      <label htmlFor="feedback">Message</label>
      <textarea
        id="feedback"
        className={styles.formField}
        wrap="soft"
        name="feedback"
        required
      ></textarea>
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
}
