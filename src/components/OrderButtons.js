import styles from './OrderButtons.module.css';

const OrderButtons = (props) => (
  <div className={styles.container}>
    {props.actions.map((action, index) => (
      <button className={styles.button} key={index} type="button">{action.name}</button>
    ))}
  </div>
);

export default OrderButtons;
