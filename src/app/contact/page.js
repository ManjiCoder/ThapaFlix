import styles from "./contact.module.css";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

function page() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to her <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.348284372847!2d72.9778207736409!3d19.17998448204613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8da14eacea9%3A0xb4f1e032d9e4fc41!2sK.C.%20College%20of%20Engineering%20%26%20Management%20Studies%20%26%20Research!5e0!3m2!1sen!2sin!4v1682250406137!5m2!1sen!2sin"
        width="100"
        height="350"
        style={{ border: 0 }}
        allowFullScreen="full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
}

export default page;
