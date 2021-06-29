const form = document.forms[0];
console.log(form.elements.name.value);
function send(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ramazansamigullin@mail.ru",
        Password : "764D8EC05CA2CE9CBE16EE54152DD3914D6D",
        To : '915group2020@mail.ru',
        From : "ramazansamigullin1@gmail.com",
        Subject : "Новая заявка",
        Body : `
            Имя: ${form.elements.name.value} <br>
            E-mail: ${form.elements["e-mail"].value} <br>
            Сообщение: ${form.elements.message.value} <br>
        `
    }).then(
      message => alert(message)
    );
}
let NavLink = document.querySelectorAll('.mobile-menu__link')
for(let element of NavLink){
element.onclick = ()=>{
document.getElementById('checkbox').checked=false
}
}