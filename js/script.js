const detallesUsuarios = document.getElementById('listaUsuarios');

function users(){
fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw new Error ('solicitud sin éxito')
            } 
            return response.json()
             })
        .then(data => {
            console.log(data)
            let listUsuario = ""
            for (let i  = 0; i < data.length; i++){
                listUsuario += `
                <li> 
                <p> <strong> Nombre: </strong> ${data[i].name}</p>
                <p><strong> Edad: ${+ edad } </strong> </p>
                <p><strong> Username: </strong> ${data[i].username}</p>
                <p><strong> Teléfono: </strong> ${data[i].phone}</p>
                <p><strong> Email: </strong> ${data[i].email}</p>
                <p><strong> Compañia: </strong> ${data[i].company.name}</p>
                <p><strong> Dirección: </strong>${data[i].address.street}</p>
                </li>
                `
            }
            detallesUsuarios.innerHTML += listUsuario
             });
    };
users();


let max = 100;
let min = 0;
let edad = Math.random()*(max - min) + min;
edad = Math.trunc(edad);
console.log(edad);