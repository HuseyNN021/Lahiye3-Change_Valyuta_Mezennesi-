const form=document.querySelector(".form")
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(event.target.password.value.length>=5){
        alert("Icaze verildi");
    }else{
        alert("Giris qadagandir!");
    }
})
