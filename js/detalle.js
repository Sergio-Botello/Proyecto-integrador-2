//console.log("window Location:", window.location);
window.addEventListener('load', function(){




let productoDetalle = window.location.search;
//console.log("Keys & Values:", productoDetalle);

let productoDetalleObjeto = new  URLSearchParams(productoDetalle);
//console.log(productoDetalleObjeto);

let idProducto = productoDetalleObjeto.get('id')
let verDetalle = document.querySelector('#verDetalle')



fetch(`https://fakestoreapi.com/products/${idProducto}`)

.then(respuesta =>{
    return respuesta.json()
})
.then(datosProducto =>{
   
    console.log(datosProducto);
    verDetalle.innerHTML =`
    <div class="card" style="max-width: 540px;">
        <div class="row ">
            <div class="col-4 bg-light">
                <img class="img-fluid rounded-start" src="${datosProducto.image}" alt="${datosProducto.title}">
            </div>
            <div class="col-8 bg-light p-3">
                <div class="car-body">
                    <h2 class="card-title" id="titulo">Este es el producto numero ${datosProducto.id}</h2>
                    <h5 class="card-subtitle text-muted mb-2">${datosProducto.title}</h5>
                    <p class="card-text">${datosProducto.description}</p>
                </div>
                <div class="card-footer bg-light">
                <p class="card-text lead fw-bold">$${datosProducto.price}</p>
                <p>Valoración de producto: ${datosProducto.rating.rate} <i class="fa-solid fa-star" style="color: #ffd500;"></i></p> 
        
                </div>    
           </div> 
        </div>
        </div>
    </div>`
})
           
.catch(error => console.log(error));

//console.log(datosProductos);

//Trabajando con el local storage
let agregarQuitar = document.querySelector('#agregarQuitar');

let misProductosFav = [];

// Traer los datos del localStorage
let traerItem =localStorage.getItem('itemsFavoritos');

//console.log(traerItem);

if(traerItem != null){
    misProductosFav = JSON.parse(traerItem);
}

// Verificar si el ( id ) esta o no en el array - Condición
 if(misProductosFav.includes(idProducto)){
     agregarQuitar.innerHTML = 'Quitar de favoritos';      
  }

agregarQuitar.addEventListener('click', function(e){
    e.preventDefault();
    if(misProductosFav.includes(idProducto)){
        let posicionItem = misProductosFav.indexOf(idProducto);
        misProductosFav.splice(posicionItem,1);
        agregarQuitar.innerHTML = 'Agregar a Favoritos';
    } else {
        misProductosFav.push(idProducto);
        agregarQuitar.innerHTML = 'Quitar de Favoritos'
    }
    let cadenaTextoItem = JSON.stringify(misProductosFav);
    localStorage.setItem('itemsFavoritos', cadenaTextoItem)

    //console.log(localStorage);
    ;
})
})
