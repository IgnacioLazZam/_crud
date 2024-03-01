document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var inputNombre = document.getElementById("nombre");
    var nombreHelp = document.getElementById("nombrehelp");

    if (inputNombre.value.trim() === "") {
        // Mostrar mensaje de ayuda y evitar el envío del formulario
        nombreHelp.style.visibility = "visible";
        document.getElementById('nombre').style.borderColor="red"
        event.preventDefault();
    } else {
        // Ocultar mensaje de ayuda y enviar el formulario
        nombreHelp.style.visibility = "hidden";
        document.getElementById('nombre').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var inputUserName = document.getElementById("username");
    var usernameHelp = document.getElementById("usernamehelp");

    if (inputUserName.value.trim() === "" || inputUserName.value.trim().length < 8) {
        document.getElementById('username').style.borderColor="red"
        usernameHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        usernameHelp.style.visibility = "hidden";
        document.getElementById('username').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var selectCiclo = document.getElementById("ciclo");
    var cicloHelp = document.getElementById("ciclohelp");

    if (selectCiclo.value === "0") {
        document.getElementById('ciclo').style.borderColor="red"
        cicloHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        cicloHelp.style.visibility = "hidden";
        document.getElementById('ciclo').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var generoHelp = document.getElementById("generohelp");
    var radios = document.querySelectorAll('input[name="genero"]');
    var seleccionado = false;

    radios.forEach(function(radio) {
        if (radio.checked) {
            seleccionado = true;
        }
    });

    if (!seleccionado) {
        generoHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        generoHelp.style.visibility = "hidden";  
        document.getElementById('genero').style.borderColor="white"
    }
    

});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var checkboxHelp = document.getElementById("checkboxhelp");

    if (!document.getElementById("checkbox").checked) {
        document.getElementById('checkbox').style.borderColor="red"
        checkboxHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        checkboxHelp.style.visibility = "hidden";
        document.getElementById('checkbox').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var emailHelp = document.getElementById("emailhelp");
    var email = emailInput.value.trim();
    var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('email').style.borderColor="red"
        emailHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        emailHelp.style.visibility = "hidden";
        document.getElementById('email').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var edadInput = document.getElementById("edad");
    var edadHelp = document.getElementById("edadhelp");
    var edad = parseInt(edadInput.value.trim(), 10);

    if (isNaN(edad) || edad < 16 || edad > 110) {
        document.getElementById('edad').style.borderColor="red"
        edadHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        edadHelp.style.visibility = "hidden";
        document.getElementById('edad').style.borderColor="white"
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var numeroInput = document.getElementById("number");
    var numeroHelp = document.getElementById("numberHelp");
    var numero = numeroInput.value.trim();

    var regex = /^\d{9}$/;

    if (!regex.test(numero)) {
        document.getElementById('number').style.borderColor="red"
        numeroHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        numeroHelp.style.visibility = "hidden";
        document.getElementById('number').style.borderColor="white"
    }
});
