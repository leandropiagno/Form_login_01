const submitBtn = document.getElementById ('submitBtn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value == '') {
        email.classList.add('erroInput');
    }

    if (senha.value == '') {
        senha.classList.add('erroInput');
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") ==1)){
        email.classList.add("erroInput");
    }
    
})


