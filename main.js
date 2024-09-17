import { kepekLISTA } from "./adat.js";
import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";

const galeriaTaroloElem=$(".nagyKep");
const taroloElem=$(".kartyaDiv");
new Jatekter(kepekLISTA, taroloElem)

$(window).on("kivalaszt"),(event)=>{
    console.log(event.detail)
    new Kartya(event.detail, galeriaTaroloElem);
}