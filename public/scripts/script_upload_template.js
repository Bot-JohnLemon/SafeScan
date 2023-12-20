document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const loginScript = document.getElementById('login-data');
    const loginValue = loginScript.dataset.login;
  
    if (loginValue === 'true') {
      header.innerHTML = `
        <!-- Contenido para usuario logueado -->
        <div class="logo">
            <a href="/">SafeScan</a>
        </div>
        <div class="opciones">
            <div class="login">
                <a href="/logout">Logout</a><i class="fa-solid fa-user" class="iconousuario"></i>
            </div>
            <div class="links">
                <a href="/">Home</a>
                <a href="#">About us</a>
                <a href="#">Support</a>
                <a href="#">Download</a>
            </div>
        </div>
      `;
    } else {
      header.innerHTML = `
        <!-- Contenido para usuario no logueado -->
        <div class="logo">
            <a href="/">SafeScan</a>
        </div>
        <div class="opciones">
            <div class="login">
                <a href="/login">Login</a><i class="fa-solid fa-user" class="iconousuario"></i>
            </div>
            <div class="links">
                <a href="/">Home</a>
                <a href="#">About us</a>
                <a href="#">Support</a>
                <a href="#">Download</a>
            </div>
        </div>
      `;
    }
  });

  footer.innerHTML =`
  
  `  