import Order from './Order'

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <div className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      <p>
        {new Date().getFullYear()} - Fast React Pizza Co. All rights reserved
      </p>
    </div>
  )
}

export default Footer
