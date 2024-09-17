export default class Kartya{
    //adattagok
    #obj = {}
    #szuloElem
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kartyaMegjelenit()
    }
    //tagfüggvények:
    kartyaMegjelenit(){
        this.#szuloElem.append(`
            <div class="card col-lg-3 col-md-6">
            <div class="card-body">
                <h3 class="card-title">${this.#obj.cim}</h3>
                <p class="card-text"><img src="${this.#obj.url}" alt="" width="100%"></p>
            </div></div>`)
    }
}