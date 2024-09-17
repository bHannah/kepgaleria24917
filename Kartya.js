export default class Kartya{
    //adattagok
    #obj = {}
    #szuloElem
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kepElem = $(".kivalasztott:last")
        this.kartyaMegjelenit()
        console.log(this.kepElem)
        this.esemenykezelo()
    }
    //tagfüggvények:
    kartyaMegjelenit(){
        this.#szuloElem.append(`
            <div class="card col-lg-3 col-md-6">
            <div class="card-body">
                <p class="card-text"><img src="${this.#obj.url}" alt="${this.#obj.cim}" style="width:100%" class="kivalasztott"></p>
            </div></div>`)
    }

    esemenykezelo(){
        this.kepElem.on("click", () => {
            console.log(this)
            const e = new CustomEvent("kivalaszt", {detail: this.#obj})
            window.dispatchEvent(e)
        })
    };
}