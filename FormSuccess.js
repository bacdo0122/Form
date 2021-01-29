import React from 'react';
import './Form.css';
import Img1 from './components/images/img-1.jpg'
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={Img1} alt='success-image' />
    </div>
  );
};

export default FormSuccess;