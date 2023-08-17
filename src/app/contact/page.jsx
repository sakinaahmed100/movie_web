import styles from "../styles/contact.module.css"
export default function Contact() {

    return (
        <>
            <div className={styles.contact_page}>
                <h1 className={styles.h1}>Contact Us</h1>
                <p className={styles.para}>Have a question, feedback, or just want to talk movies? We'd love to hear from you!</p>

                <div className={styles.contact_form}>
                    <h2>Send us a Message</h2>
                    <form>
                        <div className={styles.form_group}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            {/* </div>
                    <div className="form-group"> */}
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            {/* </div>
                    <div className="form-group"> */}
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            <div></div>

                            <button className={styles.btn} type="submit">SEND</button>
                        </div>

                    </form>
                </div>

                <div className={styles.contact_info}>
                    <h2>Contact Information</h2>
                    <p>If you prefer to reach out directly, you can contact us using the following information:</p>
                    <ul className={styles.contact_div}>
                        <li className={styles.li}>Email:
                            <a href="mailto:contact@example.com">contact@example.com</a>
                        </li>
                        <li className={styles.li}>Phone: (123) 456-7999</li>
                        <li className={styles.li}>Address: 123 Movie Street, Movie City, USA</li>
                    </ul>

                </div>
            </div>
            );
        </>)
}
