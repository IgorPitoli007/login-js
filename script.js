function quemedeudordecabeca(){
    let email=document.getElementById('email').value;
    let senha=document.getElementById('senha').value;
    if(email=="igorpitoli@gmail.com" && senha=="12345678"){
        alert('sucesso');
        location.href="eusoulindo.html";
    }else{
        alert('email ou senha incorretos');
    }
}