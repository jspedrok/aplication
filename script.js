document.querySelector("btnAction").addEventListener("click", function() {
    alert ("Ação de clique realizada!")
    });

    document.getElementById("btnMenu").addEventListener("click", function () {
        const menuList= document.querySelector(".menu-list");
        menuList.classList.toggle("show-menu");

    });



    document.querySelector("form").addEventListener("submit", function (event){
        event.preventDefault();
        const nome= document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        alert(`Formulário enviado!\nNome: ${nome}\nEmail: ${email}`)
    
    });