
window.addEventListener('load', function(){

const productos =document.querySelector('#productos')
let url = 'https://fakestoreapi.com/products'

fetch(url)
.then((respuesta) => {
    return respuesta.json()
})
.then((datosProductos) => {
    datosProductos.forEach(producto => {
        productos.innerHTML += `
        <div class="col-12 col-md-4 col-lg-3 mt-3 mb-3">
            <div class="card bg-light text-center h-100 p-4 " >
                <img  class=" rounded w-100  card-img-top " src="${producto.image}" alt="${producto.title}" style="height: 250px;">
                <div class="card-body">
                    <h5 class="card-title mb-0">${producto.title.substring(0,22)}</h5>
                    <p class="card-text lead fw-bold">$${producto.price}</p>
                    <a class="btn btn-dark text-white" href="./detalle.html?id=${producto.id}&titulo=${producto.title}">Ver detalle <i class="fa-solid fa-magnifying-glass " style="color: #5c5e60;"></i></a>
                </div>
            </div>
        </div>`
    });
})


.catch((error) =>{
    alert('ufff tenemos un errorr '+error+' !!!')
})
})