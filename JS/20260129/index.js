function q(x){
    console.log(x);
}

function szelsoertek_kiv(t, func){
    let max_elem=t[0];
    let max_index= 0;
    for( let i =1; i<t.length; ++i){
        if( func(t[i],max_elem) ){
            max_elem= t[i];
            max_index=i;
        }
    }

    return [max_elem,max_index];
}


q(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1>n2));
q(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1>=n2));
q(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1<n2));
q(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1<=n2));

function megszamlalas(tomb, felt){
    let c=0;
    for(let i = 0; i<tomb.length;i++){
        if( felt(tomb[i])){
            c++;
        }
    }
    return c;
}

let t66=[1,2,3,4,5];

q(megszamlalas(t66, (a)=>a%2==0)); //páros számok db száma
q(megszamlalas(t66, (a)=>a%2==1)); //páros számok db száma

function megszamlalas2(tomb, felt){
    let c=0;
    for(let i = 0; i<tomb.length;i++)
        if( felt(tomb[i]))
            c++;
    return c;
}


q(megszamlalas2(t66, (a)=>a%2==0)); //páros számok db száma
q(megszamlalas2(t66, (a)=>a%2==1)); //páratlan számok db száma


function atlag(tomb){
    let s=0;
    for(let i=0; i<tomb.length; i++){
        s+=tomb[i];
    }
    return s/tomb.length;
}

q(document.getElementById("output"));

//document.getElementById("output").innerHTML="Béla";

function katt(){
    //document.getElementById("output").innerHTML="Béla";
    document.getElementById("output").innerHTML="<b>"+document.getElementById("inputbox").value+"</b>";
}

function $(id){
    return document.getElementById(id); //objektummal tér vissza
}

q($("inputbox"));

function katt2(){
    //document.getElementById("output").innerHTML="Béla";
    $("output").innerHTML="<b>"+$("inputbox").value+"</b>";
}