//función de cambio de fuente con selectores
const fontSelector = document.getElementById('fonts-menu');
const bodyFont = document.body;

fontSelector.addEventListener('change', function(){
    bodyFont.style.setProperty('font-family', this.value, 'important');
})

//cambio de color de fondo y texto con 2 botones diferentes
document.addEventListener("DOMContentLoaded", function() {
    const btnWhite = document.getElementById('btn_white');
    const btnOriginal = document.getElementById('btn_original');
    const body = document.querySelector('body');

    // cambio de fondo a blanco
    btnWhite.addEventListener('click', function() {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    });

    // regresar a gris original
    btnOriginal.addEventListener('click', function() {
        body.style.backgroundColor = 'gray';
        body.style.color = 'white';
    });
});




function infoOscar(){
    const contenidoNuevo = `<section class="members1 row">
            <article class="col-6 textUser">
              <h1 class="text-center">Oscar Beltran</h1>
              <p class="text-center">Java, Javascript, HTML, CSS</p>
            </article>
            <section class="img-m1 col-6">
              <img src="./img/Imagen de WhatsApp 2024-09-22 a las 21.14.23_0250bd72.jpg" width="300" height="300" alt="">
            </section>
          </section>`;
            const seccionMiembros = document.querySelector('#miembros');
            seccionMiembros.innerHTML = contenidoNuevo;
}

function infoAnthony(){
    const contenidoNuevo =  `<section class="members1 row">
              <article class="col-6 textUser">
              <h1 class="text-center">Anthony Arias</h1>
              <p class="text-center">Java, Javascript, HTML, CSS, Python, .Net</p>
              </article>
          <section class="img-m1 col-6">
              <img src="./img/yop.jpg" width="300" height="300" alt="">
          </section>
          </section>`;
          const seccionMiembros = document.querySelector('#miembros');
          seccionMiembros.innerHTML = contenidoNuevo;
}

function infoLuis(){
    const contenidoNuevo =  `<section class="members1 row">
                  <article class="col-6 textUser">
                  <h1 class="text-center">Luis Giron</h1>
                  <p class="text-center">Java, Javascript, HTML, CSS, Python, .Net</p>
                  </article>
              <section class="img-m1 col-6">
                  <img src="./img/LUIS.jpg" width="300" height="300" alt="">
              </section>
              </section>`;
          const seccionMiembros = document.querySelector('#miembros');
            seccionMiembros.innerHTML = contenidoNuevo;
}

/* Button click event listeners
const btnOscar = document.querySelector('#btn_oscar');
btnOscar.addEventListener('click', () => infoOscar());

const btnLuis = document.querySelector('#btn_luis');
btnLuis.addEventListener('click', () => infoLuis());

const btnAnthony = document.querySelector('#btn_anthony');
btnAnthony.addEventListener('click', () => infoAnthony());*/











document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Limpiar cualquier alerta previa
    let alertContainer1 = document.getElementById('alertContainer1');
    let alertContainer2 = document.getElementById('alertContainer2');
    let alertContainer3 = document.getElementById('alertContainer3');
    alertContainer1.innerHTML = '';
    alertContainer2.innerHTML = '';
    alertContainer3.innerHTML = '';

    // Obtener los valores de los campos
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let message = document.getElementById('messageInput').value;

    let hasError = false;

    // Validar el campo de nombre
    if (name === '') {
        let nameAlert = document.createElement('span');
        nameAlert.textContent = 'The Name field is required.';
        nameAlert.style.color = 'red';
        nameAlert.style.fontSize = '20px';
        alertContainer1.appendChild(nameAlert);
        hasError = true;
    }

    // Validar el campo de email
    if (email === '') {
        let emailAlert = document.createElement('span');
        emailAlert.textContent = 'The Email field is required.';
        emailAlert.style.color = 'red';
        emailAlert.style.fontSize = '20px';
        alertContainer2.appendChild(emailAlert);
        hasError = true;
    }

    // Validar el campo de mensaje
    if (message === '') {
        let messageAlert = document.createElement('span');
        messageAlert.textContent = 'The Message field is required.';
        messageAlert.style.color = 'red';
        messageAlert.style.fontSize = '20px';
        alertContainer3.appendChild(messageAlert);
        hasError = true;
    }

    // Si no hay errores, mostrar un mensaje de éxito
    if (!hasError) {
        let successAlert = document.createElement('span');
        successAlert.textContent = 'Form submitted successfully!';
        successAlert.style.color = 'green';
        successAlert.style.fontSize = '12px';
        alertContainer.appendChild(successAlert);
    }
});
