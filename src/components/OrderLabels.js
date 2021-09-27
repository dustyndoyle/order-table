import styles from './OrderLabels.module.css';

const OrderLabels = (props) => (
  <div className={styles.container}>
    {props.labels.map((label, index) => (
      <span className={styles.label} key={index}>{label}</span>
    ))}
  </div>
);

export default OrderLabels;
