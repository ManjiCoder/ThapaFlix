import Link from "next/link";
import styles from "../contact/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";

function ContactCard() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to Firday Expected</p>
            <p className={styles.last_para}>response time: 72 hours</p>
            <Link href={"/"}>
              Send Email <span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM - 6 PM ET</p>
            <p className={styles.last_para}>Weekends: 9 AM - 6 PM ET</p>
            <Link href={"/"}>
              Chat Now <span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdForum />
            </i>
            <h2>Community Forums</h2>
            <p>Monday to Firday Expected</p>
            <p className={styles.last_para}>Ask the Community: 72 hours</p>
            <Link href={"/"}>
              Ask the Community <span>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
