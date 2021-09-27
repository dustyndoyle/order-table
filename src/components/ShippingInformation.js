import styles from './ShippingInformation.module.css';

const ShippingInformation = (props) => (
  <div className={styles.container}>
    <div className={styles.header}>Shipping Address</div>
    <address className={styles.address}>
      <span>{props.shippingData.name}</span>
      <span className={styles.street}>{props.shippingData.street}</span>
      <span>
        <span className={styles.city}>{props.shippingData.city}</span>, <span>{props.shippingData.state}</span> <span>{props.shippingData.zip}</span>
      </span>
      <span>{props.shippingData.country}</span>
    </address>
  </div>
);

export default ShippingInformation;
