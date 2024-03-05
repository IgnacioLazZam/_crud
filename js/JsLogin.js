document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var usernameInput = document.getElementById("username");
    var usernameHelp = document.getElementById("usernamehelp");
    var username = usernameInput.value.trim();

    if (username === '' || username.length < 8 || username.length > 12) {
        document.getElementById('username').style.borderColor="red"
        usernameHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        document.getElementById('username').style.borderColor="#ccc"
        usernameHelp.style.visibility = "hidden";
    }
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var passwordInput = document.getElementById("password");
    var passwordHelp = document.getElementById("passwordHelp");
    var password = passwordInput.value.trim();

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

    if (!regex.test(password)) {
        document.getElementById('password').style.borderColor="red"
        passwordHelp.style.visibility = "visible";
        event.preventDefault();
    } else {
        document.getElementById('password').style.borderColor="#ccc"
        passwordHelp.style.visibility = "hidden";
    }
});

function checkField(inputId, helpId) {
    var input = document.getElementById(inputId);
    var help = document.getElementById(helpId);

    if (input.value === "") {
        help.style.visibility = "visible";
        input.style.borderColor = "red"
    } else {
        help.style.visibility = "hidden";
        input.style.borderColor = "white"
    }
}