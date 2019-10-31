const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
e.preventDefault();
db.collection('queries').add({
    email: form.email.value,
    name: form.name.value,

    query: form.query.value
});
form.name.value='';
form.email.value='';
form.query.value='';
})
