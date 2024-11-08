const cursos = ['html','css','javascript','php','react'];
let c = cursos.map((elemento,indice)=>{
    console.log("cursos: " + elemento + " - posição: " + elemento);
    return "<div> " + indice + " " + elemento + " </div>";
});

console.log(c);

const el = document.getElementsByTagName("div");
el = [...el];
el.map((e,i)=>{
    e.innerHTML = i + " - curso: " + e[i] + "" + e;
    console.log(e);
});

const ele = document.getElementsByTagName("div");
const val = Array.prototype.map.call(ele,({innerHTML})=>innerHTML);
console.log(val);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e*2;
let num = ["1","2","3","4","5"].map(dobrar);
console.log(num);