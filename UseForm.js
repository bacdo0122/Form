import { useState, useEffect } from 'react';

const useForm = (submitForm, validate) => {
  // const [values, setValues] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   password2: ''
  // });
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value
  //   });
  //   console.log(values);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );



  const [values, setValues] = useState({
    usename: '',
    email:'',
    password:'',
    password2:''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = e =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name]:value
    })
  }
  const handleSubmit = e =>{
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmitting(true)
  }
  useEffect(
    ()=>{
      if(Object.keys(errors).length === 0 && isSubmitting){
        submitForm(true);
      }
    }
    ,[errors]
  )
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;