import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import OrdersStage from './components/OrdersStage'
import { IOrder } from './Types/Types'
import SearchSection from './components/SerachSection'
import {motion} from 'framer-motion';

function App() {
  const [orders, setOrders] = useState<[] | IOrder[]>([]);
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      try {
      setFetching(true);
      const response = await fetch("https://udevs-db-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
      const orders = await response.json();
      setOrders(orders);
      } catch (err) {
        setError('Could not fetch data from firebase');
      }
      setFetching(false);
    }
    fetchOrders();
  }, [])

  return (
    <>
      <Header userLetter={'D'}/> 
      <SearchSection />
      {error && <p>{error}</p>}
      {fetching ? 
      <motion.div initial={{scale: 2}} animate={{scale: 1}} transition={{repeat: Infinity, duration: 4, repeatDelay: 0, ease: "linear", bounce: 0}}>Loading...</motion.div>:
      <OrdersStage orders={orders}/>}
    </>
  )
}

export default App
