import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import OrdersStage from './components/OrdersStage'
import { IOrder } from './Types/Types'
import SearchSection from './components/SerachSection'

function App() {
  const [orders, setOrders] = useState<[] | IOrder[]>([])

  useEffect(() => {
    async function fetchOrders() {
      try {
      const response = await fetch("https://udevs-db-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
      const orders = await response.json();
      setOrders(orders);
      } catch (err) {
        throw new Error('Failed to fetch order from db');
      }
    }
    fetchOrders();
  }, [])

  return (
    <>
      <Header userLetter={'D'}/> 
      <SearchSection />
      <OrdersStage orders={orders}/>
    </>
  )
}

export default App
