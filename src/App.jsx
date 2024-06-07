import React from 'react'
import CardRight from './components/UI/cardRight'
import CardLeft from './components/UI/cardLeft'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=' flex flex-wrap gap-3 lg:flex-nowrap m-2  lg:m-12  lg:p-4 '>
      <CardRight />
      <CardLeft />
      <ToastContainer />
    </div>
  )
}

export default App