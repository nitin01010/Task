import React from 'react'
import CardRight from './components/UI/cardRight'
import CardLeft from './components/UI/cardLeft'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='flex justify-center   flex-wrap sm:flex-nowrap gap-3  m-3'>
      <CardRight />
      <CardLeft />
      <ToastContainer />
    </div>
  )
}

export default App