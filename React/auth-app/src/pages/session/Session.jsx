import { useForm } from 'react-hook-form';

export const Session = () => {

  const {register, handleSubmit} = useForm();

  const onSubmitForm = (e) =>{
    e.preventDefault();
    console.log("Se envio el form");
    
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label> Email </label>
        <input type="text" id="email" placeholder="Example: email@mail.com" {... register ('email')}/>
        <label> Password </label>
        <input type="password" id="password" placeholder="Enter your password"{... register ('password')}/>
        <label> Repeat your Password</label>
        <input type="password" id="password" placeholder="Repeat your password" {... register ('confirm password')}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

//Destructuring -> Desestructurar un objeto 
