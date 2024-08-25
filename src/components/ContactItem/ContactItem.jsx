// ContactItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import styles from "./ContactItem.module.scss";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.icon}>
        <FaUser />
      </div>
      <span className={styles.name}>{contact.name}</span>
      <div className={styles.icon}>
        <FaPhoneAlt />
      </div>
      <span className={styles.number}>{contact.number}</span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
