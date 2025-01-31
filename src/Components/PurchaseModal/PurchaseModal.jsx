import React from 'react'

const PurchaseModal = ({isOpen, onClose}) => {
    if(!isOpen) return null


  return (
    <div onClick={onClose} className='purchase-component'>
        <div className='modal'>
            <div className='header'>
                <h3>Tack för ditt köp</h3>
                <button onClick={onClose} className='close-btn'>X</button>
            </div>
        </div>
      
    </div>
  )
}

export default PurchaseModal
