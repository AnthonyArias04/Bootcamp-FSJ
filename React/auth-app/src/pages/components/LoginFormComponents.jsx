/*import React from 'react'
import { useForm } from 'react-hook-form';



export const LoginFormComponents = () => {

  const {register, handleSubmit} = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
    
  }

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    saveSessionStorage("user_firebase",JSON.stringify(user))
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  const saveSessionStorage = (key, data) => {
    //localStorage (setItem, getItem)
    sessionStorage.setItem(key, data);
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <label>Email</label>
            <input type='text' id='mail' placeholder='example: mail@mail.com'{... register('mail')}/>
            <label>Password</label>
            <input type='text' id='pass' placeholder='Input your password' {... register('pass')}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

*/