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
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" className={styles.formField} type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className={styles.formField}
          type="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          className={styles.formField}
          type="tel"
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="feedback">Message</label>
        <textarea
          id="feedback"
          className={styles.formField}
          wrap="soft"
          name="feedback"
          required
        ></textarea>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
