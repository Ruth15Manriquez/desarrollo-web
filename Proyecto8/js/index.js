/*
    
    { 
        nombre: "Fatima", 
        fecha: "2024-05-09", 
        descripcion: "Aseo" 
    },
    { 
        nombre: "Ethan",
        fecha: "2024-05-09", 
        descripcion: "Tarea"
     }
    

];
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById('btnGuardar');

function mostrarTareas(){
    listaTareas.innerHTML = "Esta es mi lista de tareas";
    tareas.forEach((tarea,indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-3 border p-3'>
                <strong>${ tarea.nombre }</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${ tarea.fecha }</strong>
            </div>
            <div class='col-4 border p-3'>
                <strong>${ tarea.descripcion }</strong>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
            </div>
        </div>
        `;
    });
}

mostrarTareas();

let agregarDatos = ()=> {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    }
    tareas.push(datos);
    console.log(tareas);
    mostrarTareas();
}

let cerrarModal = () => {
    btnGuardar.setAttribute('data-bs-dismiss','modal');
    btnGuardar.click();
}

/*
let resetearFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.value = '';
} 

let borrarTarea = (indice) => {
    // splice es un metodo que borra elementos de un array
    tareas.splice(indice,1);
    console.log(tareas);
    mostrarTareas();
}

formulario.addEventListener('submit', function(e) {
    // console.log(e);
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
    // resetearFormulario();
});


borrarTarea();
*/
document.addEventListener('DOMContentLoaded', function() {
    let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let idTarea = document.getElementById('idTarea');
    let nombreEditar = document.getElementById('nombreEditar');
    let fechaEditar = document.getElementById('fechaEditar');
    let descripcionEditar = document.getElementById('descripcionEditar');
    let imagenEditar = document.getElementById('imagenEditar');
    let audioEditar = document.getElementById('audioEditar');
    let videoEditar = document.getElementById('videoEditar');
 
    let tareas = [
        {   
            nombre : "Tarea 1" ,
            fecha : "2023-12-31",
            descripcion : "Tarea1",
            imagen : "https://coosol.es/wp-content/uploads/2023/09/Coosol-blog-Tipos-de-girasoles-01-800x500-1.webp",
            audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            video : "file_example_MP4_640_3MG.mp4"
        },
        {   
            nombre : "Tarea 2" ,
            fecha : "2024-10-21",
            descripcion : "Tarea2",
            imagen : "https://coosol.es/wp-content/uploads/2023/09/Coosol-blog-Tipos-de-girasoles-01-800x500-1.webp",
            audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            video : "file_example_MP4_640_3MG.mp4"
        },
        {
            nombre : "Tarea 3" ,
            fecha : "2025-12-27",
            descripcion : "Tarea3",
            imagen : "https://coosol.es/wp-content/uploads/2023/09/Coosol-blog-Tipos-de-girasoles-01-800x500-1.webp",
            audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            video : "file_example_MP4_640_3MG.mp4"
        }
    ];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea, indice) => {
            listaTareas.innerHTML += `
            <div class='row'>
                <div class='col-4 border p-3'>
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class='col-4 border p-3'>
                    <img src="${tarea.imagen}" alt="Imagen tarea" class="img-fluid">
                </div>
                <div class='col-4 border p-3'>
                    <audio controls>
                        <source src="${tarea.audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div class='col-4 border p-3'>
                    <video width="320" height="240" controls>
                        <source src="${tarea.video}" type="video/mp4">
                    </video>
                </div>
                <div class='col-2 border p-3 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
                </div>
                <div class='col-2 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
                </div>
            </div>
            `;
        });
    }

    mostrarTareas();
 
    window.editarTarea = function(indice) {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        imagenEditar.value = tareas[indice].imagen;
        audioEditar.value = tareas[indice].audio;
        videoEditar.value = tareas[indice].video;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", function(e) {
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        tareas[indice].imagen = imagenEditar.value;
        tareas[indice].audio = audioEditar.value;
        tareas[indice].video = videoEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    function agregarDatos() {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            imagen: imagen.value,
            audio: audio.value,
            video: video.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    function cerrarModal() {
        btnGuardar.setAttribute("data-bs-dismiss", "modal");
        btnGuardar.click();
    }
 
    function cerrarModalEditar() {
        btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
        btnGuardarEditar.click();
    }
 
    window.borrarTarea = function(indice) {
        tareas.splice(indice,1);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });
});
