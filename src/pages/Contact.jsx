function Contact() {
  return (
    <section className="contact">
      <h1>Book Your Trip</h1>

      <form>
        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="text"
          placeholder="Destination"
        />

        <input type="date" />

        <textarea
          placeholder="Message"
          rows="5"
        ></textarea>

        <button type="submit">
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

export default Contact;