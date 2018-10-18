export default class App {

    constructor() {
        this.title = '<h1>Hola Mundo</h1>'
        this.nodeOutput = document.querySelector('#container')
        this.nodeOutput.innerHTML = this.title
    }

}