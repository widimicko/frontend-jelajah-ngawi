import styles from "./styles.module.css";

const MapSection = () => {
  return (
    <div className={`${styles.forest} bg-primary-brown`}>
      <div className={styles.mapContainer}>
        <div
          className={`${styles.mapComponent} bg-secondary-blue w-75 h-100 rounded shadow`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63302.50045633202!2d111.40790174880198!3d-7.420208722717191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e7d772805c33%3A0x64380d453b074ed2!2sNgawi%2C%20Kec.%20Ngawi%2C%20Kabupaten%20Ngawi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1653556543251!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
