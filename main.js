
const {
    createApp
} = Vue

createApp({
    data() {
        return {
            logoImage: "img/logo.png",
            error: false,
            newTask: "",
            tasks : [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ]
        }
    },
    methods: {
        addTask() {
            if(this.newTask.length < 5 || this.newTask == "") {
                this.error = true;
            }
            else {
                this.tasks.push({ text: this.newTask, done: false })
                this.error = false;
            }
            this.newTask = "";
        },
        deleteTask(indiceArgomento) {
            this.tasks.splice(indiceArgomento, 1);
        }
    }
}).mount("#app")