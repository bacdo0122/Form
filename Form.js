
import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function submitForm() {
  //   setIsSubmitted(true);
  // }
  // return (
  //   <>
  //     <div className='form-container'>
  //       <span className='close-btn'>×</span>
  //       <div className='form-content-left'>
  //         <img className='form-img' src='img/img-2.svg' alt='spaceship' />
  //       </div>
  //       {!isSubmitted ? (
  //         <FormSignup submitForm={submitForm} />
  //       ) : (
  //         <FormSuccess />
  //       )}
  //     </div>
  //   </>
  // );
  







  const [isSubmited, setIsSubmitted] = useState(false)
  const SignUp = ()=>{
    setIsSubmitted(true);
  }
  return(
    <>
    {!isSubmited?<FormSignup submitForm={SignUp} />:<FormSuccess />}
    </>
  )
  
};

export default Form;
