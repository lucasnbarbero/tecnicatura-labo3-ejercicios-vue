// Creamos la aplicacion de Vue y la guardamos en la constante app
Vue.createApp({
  data() {
    return {
      // Esta propiedad es donde se van a ir agregando las tareas que se vayan creando
      listaTareas: [],
      // En esta propiedad vamos a guardar el valor que se agregue en el input
      tarea: "",
    };
  },
  methods: {
    //  Metodo para agregar una nueva tarea a la lista
    agregarTarea() {
      // Creamos un objeto 'nuevaTarea' que va a tener dos propiedades
      // la primer propiedad es el nombre que va a tener la tarea
      // la segunda propiedad es el estado de la tarea
      // Como al momento de crearla, la tarea no va a estar realizada, por eso le asignamos el valor false
      const nuevaTarea = {
        nombre: this.tarea,
        estado: false,
      };

      // Agregamos 'nuevaTarea' al array correspondiente
      this.listaTareas.push(nuevaTarea);

      // Borramos el valor de 'tarea' para reiniciar el input
      this.tarea = "";
    },

    // Este metodo lo vamos a utilizar para eliminar un elemento del array.
    // Este va a recibir el indice que tiene el elemento en cuestion
    eliminarTarea(index) {
      // Utilizamos el metodo splice de JavaScript para eliminar el elemento
      // Este metodo va a recibir dos parametros, el primero es el indice de inicio, y el segundo son las cantidad de elementos a borrar
      // Como nosotros queremos eliminar de a un elemento, el segundo parametro es 1
      this.listaTareas.splice(index, 1);
    },
  },
}).mount("#app");
