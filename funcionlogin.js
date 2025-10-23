const loginForm = document.getElementById("seccion");
const registerForm = document.getElementById("crear");
const toggleForm = document.getElementById("toggleForm");
const formTitle = document.getElementById("formTitle");

// Cambiar entre login y crear cuenta
toggleForm.addEventListener("click", () => {
  if (loginForm.style.display !== "none") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent = "Crear Cuenta";
    toggleForm.textContent = "¿Ya tienes cuenta? Iniciar Sesión";
  } else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Bienvenido a Steamu";
    toggleForm.textContent = "¿No tienes cuenta? Crear una";
  }
});

// Enviar login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("loginUser").value;
  const storedUser = localStorage.getItem("usuarioGuardado");

  if (!storedUser || storedUser !== user) {
    alert("Usuario no existente, crea una cuenta para entrar.");
  } else {
    alert("¡Bienvenido " + user + "!");
    // Redirigir a la página de la tienda
   window.location.href ="steam-chafa-temu-shein-/iindex.html" ;
}
});

// Enviar registro
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("regUser").value;

  if (!user) {
    alert("Por favor ingresa un usuario para crear la cuenta");
    return;
  }

  // Guardar usuario en localStorage
  localStorage.setItem("usuarioGuardado", user);
  alert("Cuenta creada con éxito para " + user + "!");

  // Volver automáticamente al login
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Bienvenido a Steamu";
  toggleForm.textContent = "¿No tienes cuenta? Crear una";

  // Limpiar campos
  document.getElementById("regUser").value = "";
  document.getElementById("regEmail").value = "";
  document.getElementById("regPass").value = "";
});
const translateBtn = document.getElementById("translateBtn");

let isEnglish = false;

translateBtn.addEventListener("click", () => {
  if (!isEnglish) {
    // Traducir al inglés
    formTitle.textContent = "Welcome to Steamu";
    document.getElementById("loginUser").placeholder = "Username";
    document.getElementById("loginPass").placeholder = "Password";
    loginForm.querySelector("button").textContent = "Login";

    document.getElementById("regUser").placeholder = "Username";
    document.getElementById("regEmail").placeholder = "Email";
    document.getElementById("regPass").placeholder = "Password";
    registerForm.querySelector("button").textContent = "Create Account";

    toggleForm.textContent = loginForm.style.display !== "none"
      ? "Don't have an account? Create one"
      : "Already have an account? Sign In";

    translateBtn.textContent = "Español";
    isEnglish = true;
  } else {
    // Volver al español
    formTitle.textContent = loginForm.style.display !== "none"
      ? "Bienvenido a Steamu"
      : "Crear Cuenta";

    document.getElementById("loginUser").placeholder = "Usuario";
    document.getElementById("loginPass").placeholder = "Contraseña";
    loginForm.querySelector("button").textContent = "Entrar";

    document.getElementById("regUser").placeholder = "Usuario";
    document.getElementById("regEmail").placeholder = "Correo";
    document.getElementById("regPass").placeholder = "Contraseña";
    registerForm.querySelector("button").textContent = "Crear Cuenta";

    toggleForm.textContent = loginForm.style.display !== "none"
      ? "¿No tienes cuenta? Crear una"
      : "¿Ya tienes cuenta? Iniciar Sesión";

    translateBtn.textContent = "English";
    isEnglish = false;
  }
});
