
import styles from './OrderHeader.module.css';

const OrderHeader = (props) => (
  <div className={styles.header}>
    <div className={styles.orderNumber}><strong>Order</strong> {props.orderNumber}</div>
    <div className={styles.orderDates}>
      <span className={styles.date}>Created on {props.createdDate}</span>
      <span className={styles.date}>Last updated on {props.modifiedDate}</span>
    </div>
  </div>
);

export default OrderHeader;