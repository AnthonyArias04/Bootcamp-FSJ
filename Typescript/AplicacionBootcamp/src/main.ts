import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Holiwis desde el MainTs</h1>
    <p id = "parrafo"></p>

    <form id="loginForm">
    <section>
    <label>Nombre de usuario</label>
    <input type= "text" id= "username" name="name" placeholder="Ingresa tu nombre de usuario">

    </section>

    <section>
    <label>Password</label>
    <input type="password" id="password" placeholder="Ingresa tu password">
    </section>

    <button type="submit">Iniciar Sesion</button>
    </form>
  </div>
`

//document.querySelector<HTMLElement>("#parrafo")!.innerText = "Este es texto desde el p";

const form = document.getElementById("loginForm") as HTMLFormElement;

form.addEventListener("submit",(e:SubmitEvent) => {
   e.preventDefault(); 
  console.log("Holiwis");

  const username = (document.getElementById("username") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  console.log(username);
  console.log(password);
  
})
