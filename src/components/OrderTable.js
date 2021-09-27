import styles from './OrderTable.module.css';

const orderTable = (props) => (
  <div className="order-table">
    <div className={`${styles.row} ${styles.headerRow}`}>
      <div className={styles.column}></div>
      <div className={styles.column}>Product</div>
      <div className={styles.column}>Quantity</div>
      <div className={styles.column}>Price</div>
    </div>
    {props.products.map((product, index) => (
      <div key={index} className={styles.row}>
        <div className={styles.column}>
          <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
        </div>
        <div data-name="Product" className={styles.column}>{product.name}</div>
        <div data-name="Quantity" className={styles.column}>{product.quantity}</div>
        <div data-name="Price" className={styles.column}>{(product.price).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</div>
      </div>
    ))}
    <div className={`${styles.row} ${styles.footerRow}`}>
      <div className={styles.column}>Total:</div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}>{(props.totalPrice).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</div>
    </div>
  </div>
);

export default orderTable;
