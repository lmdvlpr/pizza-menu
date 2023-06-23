function Order({ closeHour }) {
  return (
    <footer className='order'>
      <p>We're open until {closeHour}:00. Como visit us or oder online.</p>
      <button className='btn'>Order</button>
    </footer>
  )
}

export default Order
