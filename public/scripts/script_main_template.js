const header = document.querySelector("header")
const footer = document.querySelector("footer")

header.innerHTML = `
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
`

footer.innerHTML =`
<table>
    <tr>
        <td><p>&copy;SafeScan. All rights reserved</p></td>
        <td class="github"><a href="#"><i class="fa-brands fa-github"></i>  GitHub</a></td>
    </tr>
</table>
`
