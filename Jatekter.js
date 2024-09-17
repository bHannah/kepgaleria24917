import Kartya from "./Kartya.js";

export default class Jatekter{
    #lista=[]
    #TARTALOM
    constructor(lista, TARTALOM){
        this.#lista=lista
        this.#TARTALOM=TARTALOM
        this.#TARTALOM.empty();
        this.kartyaKiir()
    }
    kartyaKiir(){
        this.#lista.forEach((elem)=>{
            new Kartya(elem, this.#TARTALOM);
        })
    }
}