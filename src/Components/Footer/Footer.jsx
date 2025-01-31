import React from 'react'

const Footer = () => {
  return (
    <div className='footer-component'>
        <div className='container'>
          <div className='location'>
            <div className='maps-container'>
              <h3>Hitta hit</h3>
              <img src="src/Images/maps.png" alt="" />
            </div>

              <div className='address'>
                <p className='semibold-text'>Address</p>
                <p>Hoppsangatan 23</p>
                <p>12345, Stockholm</p>
              </div>
            <div className='open-hours'>
              <p className='semibold-text'>Öppetider</p>
              <p>Mån-Fre: 09:00-21:00</p>
              <p>Lör-Sön: 10:00-20:00</p>

            </div>

          </div>
        </div>
      
    </div>
  )
}

export default Footer
 