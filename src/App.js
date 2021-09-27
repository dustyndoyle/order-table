import styles from './App.module.css';
import OrderData from './data/orderData.json';
import OrderHeader from './components/OrderHeader';
import OrderTable from './components/OrderTable';
import ShippingInformation from './components/ShippingInformation';
import OrderLabels from './components/OrderLabels';
import OrderButtons from './components/OrderButtons';

function App() {
  return (
    <div className={styles.container}>
      <OrderHeader orderNumber={OrderData.orderNumber} createdDate={OrderData.createdDate} modifiedDate={OrderData.modifiedDate} />
      <div className={styles.modal}>
        <OrderTable products={OrderData.products} totalPrice={OrderData.totalPrice} />
        <ShippingInformation shippingData={OrderData.shippingInformation} />
        <OrderLabels labels={OrderData.orderInformation} />
        <OrderButtons actions={OrderData.actions} />
      </div>
    </div>
  );
}

export default App;
