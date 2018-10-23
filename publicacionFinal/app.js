class App{
    constructor(){
        this.aNodosMenu = document.querySelectorAll('nav ul a')
        this.aNodosSection = document.querySelectorAll('main>section') //main>section - hijos directos de main por si hay mas sections en un futuro
        // console.log(this.aNodosMenu)
        // console.log(this.aNodosSection)

        //this.aOffset <--- Array de desplazamiento
        this.aOffset = []
        this.calcularOffsets()
        this.seccionActiva = 0

        document.addEventListener('scroll', 
            this.scrollDetect.bind(this) 
        )
        
        this.aNodosMenu.forEach(
            (nodoMenu) => {nodoMenu.addEventListener('click',
            this.navegar.bind(this))}
        )
    }

    scrollDetect (oE) {
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffset.every(
            (offset, i) => { 
                if( position >= offset) {
                    index = i
                    return true}
                else { return false}
            })
    /*  this.aOffset.forEach(
            (offset, i) => { 
                if( position >= offset) {index = i}
                else { return i}
            }) */ 
        console.log(index) // <--- Me dice el valor del array
        // return index
        if(this.seccionActiva != index) {
            console.log('Reescribiendo')
            this.aNodosMenu.forEach(
            (nodoMenu) => {nodoMenu.classList.remove('active')}
        ) //Active es un nombre de clase no una variable por eso ''
            this.aNodosMenu[index].classList.add('active')
        }
            
    }


    // offset ---> [0, 811, 1556, 2318, 3063]
    // Por ejemplo 
    // Position 100, es mayor que 0? si, pues continua el bucle.
    navegar(oE){
        let i = oE.target.dataset.index
        oE.preventDefault() // oE ---> objectEvent
        //console.log(oE)  ----> para ver si nos llega la posicion de los elementos del array sections
        window.scroll({
            top: this.aOffset[i], 
            left: 0, 
            behavior: 'smooth'
        })
    }

    calcularOffsets(){ // Si hubiesen positions relative o absolute esta function falsearia los datos.
        this.aNodosSection.forEach(
            (section) =>{
                // console.log(section.offsetTop)
                // Nos da la consola: 48, 667, 1286, 1904, 2523 que son las posiciones en pixeles de las sections
                // this.aOffset.push(section.offsetTop)
                this.aOffset.push(section.offsetTop-60)
            }
        )
        this.aOffset[0] = 0
        console.log(this.aOffset)
    }

}

document.addEventListener('DOMContentLoaded', ()=> new App())