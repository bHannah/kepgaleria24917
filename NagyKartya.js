export default class NagyKartya{
    //adattagok
    #obj = {}
    #szuloElem
    jobbELEM
    balELEM
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kartyaMegjelenit()

        this.jobbELEM=$(".jobb")
        this.jobbELEM.on("click",()=>{
            this.#esemenyTrigger("jobb")
        })

        this.balELEM=$(".bal")
        this.balELEM.on("click",()=>{
            this.#esemenyTrigger("bal")
        })
    }
    //tagfüggvények:
    kartyaMegjelenit(){
        this.#szuloElem.append(`
            <button class="col-1 bal btn btn-light"><<</button>
            <div class="card col-10">
            <div class="card-body">
            <h3>${this.#obj.cim}</h3>
                <p class="card-text"><img src="${this.#obj.url}" alt="${this.#obj.cim}" style="width:100%"></p>
            </div></div>
            <button class="col-1 jobb btn btn-light">>></button>`
            )
    }
    //eseménykezelő
    #esemenyTrigger(esemenynev){
        const e = new CustomEvent(esemenynev);
            window.dispatchEvent(e);
    }
}