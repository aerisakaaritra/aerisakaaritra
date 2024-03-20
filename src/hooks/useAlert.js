import React, { useState } from 'react'

const useAlert = () => {

  const [showAlert, setShowAlert] = useState({ show: false, text: '', type: 'danger' })
  
  const viewAlert = ({ text, type = 'danger' }) => {
    setShowAlert({
        show: true,
        text,
        type
    })
  }
  const hideAlert = () => {
    setShowAlert({
        show: false,
        text: '',
        type: 'danger'
    })
  }

  return { showAlert, viewAlert, hideAlert }
}

export default useAlert