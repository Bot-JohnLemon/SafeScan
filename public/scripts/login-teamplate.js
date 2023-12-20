const header = document.querySelector("header")
header.innerHTML = `
<style>
body {
    margin: 0;
    padding: 0;
    font-family: Conthrax, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-image: url('/public/wallpp/wallpaper.png');
}
#raid {
    display: flex;
    flex: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 43%;
    height: 85%;
    background-color: #4A414E;
    justify-content: center;
    align-items: center;
}
#banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background-color: #605465;
}
#logo {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin: 30px;
    margin-bottom: 10px;
    color: #fff;
    width: 350px;
    height: 50px;

    font-family: Conthrax;
    font-size: 50pt;
}
.error {
    color: red;
}
</style>
<div id="banner">
    <div id="logo">
        <a href="/">SafeScan</a>
    </div>
</div>
`
