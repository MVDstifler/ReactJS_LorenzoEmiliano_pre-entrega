const promesa = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve(true);
    } , 2000);
});

//programacion sincronica
console.log('inicio del proceso')


//programacion asincronica
promesa
.then(resultado => console.log(resultado)) // si tengo fullfilled
.catch(error => console.log(error))
.finally(() =>console.log ('Finally todo termino')); // si llga rejected

//programacion sincronica
console.log('fin del proceso')
