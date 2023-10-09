let itemsFavoritos = document.getElementById('itemsFavoritos')

let misFavoritos = localStorage.getItem('itemsFavoritos')

let arrayFavoritos = JSON.parse(misFavoritos)
//console.log(misFavoritos);

let eliminarTodos = document.querySelector('#eliminarTodos')

eliminarTodos.addEventListener('click', function (e) {
    localStorage.clear()
    itemsFavoritos.innerHTML = ''
})


if(arrayFavoritos.length === 0){
    alert('Usted no tiene ningun producto favorito')
    itemsFavoritos.innerHTML = `<h1>No tienen ningun producto Favorito</h1>`
} else {
   for(let i = 0 ; i < arrayFavoritos.length ; i++){
    //listadoFavoritos(arrayFavoritos[i]);
   // console.log(arrayFavoritos[i]);

    fetch(`https://fakestoreapi.com/products/${arrayFavoritos[i]}`)
   
    .then(respuesta =>{
        return respuesta.json()
      
    })
    .then( producto =>{
        //console.log(producto);
        itemsFavoritos.innerHTML += `
        <div class="col-12 col-md-4 col-lg-3 mt-3 mb-3" style="width:18rem" >
            <div class="card bg-light text-center h-100 p-4 " >
                <div class="card-body">
                    <h5 class="card-title ">${producto.title.substring(0,18)}</h5>    
                    <h6 class="card-text lead fw-bold">$${producto.price}</h6>
                </div>
                <img class="rounded w-100" src=${producto.image} alt=${producto.title}'  style="100%">    
            </div>
         </div>` 
            
})
    .catch(error => console.log(error))
    }
}

   