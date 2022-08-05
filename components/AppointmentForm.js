export default function AppointmentForm() {
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

      <label for="start">Appointment requested date:</label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      ></input>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        className={styles['form-field']}
        type="text"
        name="name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles['form-field']}
        type="email"
        name="email"
        required
      />

      <label htmlFor="feedback">What is your feedback?</label>
      <textarea
        id="feedback"
        className={styles['form-field']}
        wrap="soft"
        name="feedback"
        required
      ></textarea>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
