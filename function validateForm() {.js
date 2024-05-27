function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Account created successfully!");
        // Aqui você pode adicionar o código para processar o formulário, como enviar os dados para um servidor
    }
}
