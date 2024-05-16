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
            nombre : "Ruth Manríquez" ,
            fecha : "2004-09-17",
            descripcion : "Tarea 1",
            imagen : "https://coosol.es/wp-content/uploads/2023/09/Coosol-blog-Tipos-de-girasoles-01-800x500-1.webp",
            audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            video : "file_example_MP4_640_3MG.mp4"
        },
        {   
            nombre : "Fatima Manriquez" ,
            fecha : "2010-09-15",
            descripcion : "Tarea 2",
            imagen : "https://coosol.es/wp-content/uploads/2023/09/Coosol-blog-Tipos-de-girasoles-01-800x500-1.webp",
            audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            video : "59483-493557880_small.mp4"
        },
        {
            nombre : "Ethan Lemus" ,
            fecha : "2004-03-05",
            descripcion : "Tarea 3",
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
                <div class='col-2 border p-3'>
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class='col-1 border p-3'>
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class='col-1 border p-3'>
                    <strong>${tarea.descripcion}</strong>
                </div>
                <div class='col-2 border p-3'>
                    <img src="${tarea.imagen}" alt="Flor" class="img-fluid">
                </div>
                <div class='col-2 border p-3'>
                    <audio controls style="width: 100%;">
                        <source src="${tarea.audio}" type="audio/mpeg">
                    </audio>
                </div>
                <div class='col-2 border p-3'>
                    <video class="img-fluid" controls>
                        <source src="${tarea.video}" type="video/mp4">
                    </video>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
                </div>
            </div>
            `;
        });
    }

    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        imagenEditar.value = tareas[indice].imagen;
        audioEditar.value = tareas[indice].audio;
        videoEditar.value = tareas[indice].video;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
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
 
    let agregarDatos = () => {
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
    
    let cerrarModal = () => {
        btnGuardar.setAttribute("data-bs-dismiss", "modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = () => {
        btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice) => {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();

    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });

    //si 