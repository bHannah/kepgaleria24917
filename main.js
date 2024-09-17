import { kepekLISTA } from "./adat.js";
import Jatekter from "./view/Jatekter.js";
import NagyKartya from "./view/NagyKartya.js";

const galeriaTaroloElem=$(".nagyKep");
const taroloElem=$(".kartyaDiv");
let index=0;
new Jatekter(kepekLISTA, taroloElem)
new NagyKartya(kepekLISTA[index], galeriaTaroloElem);

$(window).on("kivalaszt",(event)=>{
    //console.log(event.detail);
    galeriaTaroloElem.empty();
    index=event.detail.index;
    new NagyKartya(event.detail, galeriaTaroloElem);
})

$(window).on("jobb",(event)=>{
    index++
    if (index===kepekLISTA.length){index=0}
    galeriaTaroloElem.empty();
    new NagyKartya(kepekLISTA[index], galeriaTaroloElem);
})

$(window).on("bal",(event)=>{
    index--
    if (index<0){index=kepekLISTA.length-1}
    galeriaTaroloElem.empty();
    new NagyKartya(kepekLISTA[index], galeriaTaroloElem);
})