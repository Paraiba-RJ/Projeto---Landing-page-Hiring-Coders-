const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data ={
        nome,
        email
    }
    let convert = JSON.stringify(data);
    localStorage.setItem('lead', convert);

    if (nome == null || undefined){
    }else{
        alert('e-mail enviado com sucesso!')
    }
})