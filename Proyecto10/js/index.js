let listaProductos = document.querySelector("#listaProductos");


function obtieneProductos(){
    //Promise o promesa (funcion que no se sabe cuando se va a ejecutar)  
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(productosObtenidos => {
        console.log(productosObtenidos);

        productosObtenidos.products.forEach((producto, indice) => {
            console.log("producto: ", producto);

            listaProductos.innerHTML += `
            <div class="col-12 col-md-3">
                <div class="card" >
                    <img src="${producto.thumbnail}" class="img-imagenProducto card-img-top py-2 img-fluid" alt="..." style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.category}</p>
                        <p class="card-text">${producto.description.slice(0,100)}</p>
                        <p class="card-text text-danger" >$${producto.price}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
            `;
        });
    });
}

obtieneProductos();
