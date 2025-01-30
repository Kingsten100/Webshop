import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'

const PrivatePage = () => {

    const { logout } = useAuth()
    const [orders, setOrders] = useState([])
    const token = localStorage.getItem('accesstoken')

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try{
    //             const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             })

    //             if (!res.ok){
    //                 throw new Error('Lyckades inte hämt historiken')
    //             }

    //             const data = await res.json()
    //             console.log('API respons', data)
    //             setOrders(data)
    //         } catch (error){
    //             console.log('Fel vid hämtning av orderhistorik', error)
    //         }

    //         if (token) {
    //             fetchOrders()
    //         }
    //     }
    // }, [token])

    useEffect(() => {
        if (!token) {
            console.log('Inget token, kan inte hämta orderhistorik');
            return;
        }

        const fetchOrders = async () => {
            try {
                const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error('Lyckades inte hämta historiken');
                }

                const data = await res.json();
                console.log('API respons', data);
                setOrders(data);
            } catch (error) {
                console.log('Fel vid hämtning av orderhistorik', error);
            }
        }

        fetchOrders();
    }, [token])
  return (
    <div className='private-page'>
        <div className='handle-profile'>
            <h1>Välkommen till din profil!</h1>
            <button className='logout-btn' onClick={logout}>Logga ut</button>
        </div>
       

      <div className='order-history-container'>
        <h2>Orderhistorik</h2>
        {
            orders.length === 0 ? (
                <p>Du har inga tidigare beställningar</p>
            ) : (
                <ul className='order-history-list'>
                    {
                        orders.map((order) => (
                            <li key={order._id} className='order'>
                                <p className='semibold-font border-bottom'>Order-ID: {order._id}</p>
                                <p className='semibold-font'>Produkter:</p>
                                <ul>
                                    {order.products.map((item) => (
                                        <li key={item.product._id} className='order-item'>
                                            {item.product.name} - {item.quantity}st
                                        </li>
                                    ))}
                                </ul>
                                <p className='semibold-font border-top total-price'>Total pris: { order.totalPrice}:-</p>
                            </li>
                        ))
                    }
                </ul>
            )
        }
      </div>
    </div>
  )
}

export default PrivatePage
