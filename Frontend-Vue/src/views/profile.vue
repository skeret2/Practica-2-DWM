<script>
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
</script>

<template>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navbar Active Link On Scroll HTML CSS JS | Codehal</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <a href="#" class="logo">Profile</a>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#datos">Datos personales</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#interes">Intereses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#herramientas">Herramientas</a>
                </li>
            </ul>
        </header>

        <section id="home">
            <div class="container-home">
                <img src="/Frontend-Vue/src/assets/imagen_profile.png" height="500" width="700">
                <h2>Scarlett Zapata Cortes</h2>
                <p>Soy estudiante de ultimo año en la Universidad Catolica del Norte (sede Antofagasta),
                    en la carrera Ingenieria Civil en Computación e Informatica</p>
                <p>Me caracterizo por ser una persona responsable, puntual y con ganas de aprender mas acerca del area de Informatica
                    me gusta aprender cosas nuevas y poder aplicarlas en mis proyectos personales.
                    Espero encontrar mi area de interes principal para dedicarme a ella en el futuro, y poder seguir aprendiendo cosas nuevas.
                </p>
                <div class="home-sci">
                    <a href="https://github.com/skeret2" target="_blank"><i class="bx bxl-github"></i></a>
                    <a href="https://www.instagram.com/scar_annais/" target="_blank"><i class='bx bxl-instagram'></i></a>
                </div>
            </div>
        </section>

        <section id="datos">
            <div class="datop">
                <h2>Datos personales</h2>
                <p>Scarlet Zapata Cortes</p>
                <p>Edad: 22 años</p>
                <p>Ciudad de origen: Antofagasta </p>
                <p>Correo electronico: scarlett.zapata@alumos.ucn.cl</p>
                <p>Profesión: Estudiante de Ingenieria civil en computación y informatica</p>
            </div>
        </section>

        <section id="interes">
            <div class="intereses" style="overflow-x:auto;">
                <h2>Intereses</h2>
                <h3>Algunos de mis intereses son...</h3>
                <p>Desarrollo web</p>
                <p>Power bi</p>
                <p>Musica</p>
                <p>Videojuegos</p>
            </div>
            <div class="imagenes">
                <img src="/Frontend-Vue/src/icons/imagen1.png" alt="Italian Trulli">
            </div>
        </section>

        <section id="herramientas">
            <div class="herramientas-list" style="overflow-x:auto;">
                <h2>Herramientas tecnologias</h2>
                <p>Power bi</p>
                <p>Visual studio</p>
                <p>SQL Server Management Studio</p>
                <p>Visual studio</p>
            </div>
        </section>
    </body>

</template>

<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}
/* 
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 120px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}
*/
.logo {
    font-size: 25px;
    color: #000000;
    text-decoration: none;
    font-weight: 600;
}
/*
nav a {
    font-size: 18px;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px;
    transition: .3s;
}
nav a:hover,
nav a.active {
    color: #96c7e5;
}
*/
section {
    min-height: 100vh;
    display: flex;
    background: #8c5d8a;

    color: #fff;
}
section:nth-child(odd) {
    background: #96c7e5;
}
.container-home img{
    display: block;
    float: left;
    padding: 5px;
    width: 20%;
    max-width: 100%;
    height: auto;
}
.container-home h2{
    font-size: 80px;
    color: #fff;
    margin-left:50px;
    margin-top: 150px;
    float: left;
}
.container-home p{
    font-size: 25px;
    color: #fff;
    margin-top: 20px;
    float: left;

}
.container-home{
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 100px;
}
.home-sci a{
    font-size: 50px;
    color: #96c7e5;
}
.home-sci a:hover{
    background: #96c7e5;
    color: #fff;
    box-shadow: 0 0 20px #96c7e5;
}
.datop h2{
    font-size: 70px;
    text-align: center;
}
.datop p{
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
}
.datop{
    margin-top: 150px;
    margin-left: 500px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 500px;
    width: 800px;
    background: #8c5d8a;
}
.intereses{
    margin-top: 200px;
    margin-left: 200px;
}
.intereses h2{
    font-size: 70px;
    font-family: Arial, Helvetica, sans-serif;
    font: bold;
}
.intereses h3{
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
}
.intereses p {
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-left: 20px;
    list-style-type: none; /* Elimina los marcadores de lista */
    margin: 0; /* Elimina el margen para que los elementos estén más juntos */
}
.intereses p::before {
    content: '\2022'; /* Código del carácter para un punto */
    color: #96c7e5; /* Color del punto */
    position: absolute;
    left: 0; 
}
.imagenes img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen para que cubra completamente el contenedor */
}

.herramientas-list{
    margin-top: 200px;
    margin-left: 200px;
}
.herramientas-list h2{
    font-size: 70px;
    font-family: Arial, Helvetica, sans-serif;
}
.herramientas-list p {
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-left: 20px;
    list-style-type: none; /* Elimina los marcadores de lista */
    margin: 0;

}

.herramientas-list p::before {
    content: '\2022'; /* Código del carácter para un punto */
    color: #8c5d8a; /* Color del punto */
    position: absolute;
    left: 0; 
}

</style>