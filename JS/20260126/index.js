let a=5;

function osszead(a, b){
    return a+b;
}

function kiir(x){
    console.log(x);
}

kiir(a);
kiir(osszead(a,"5"));

let l=[1,2,"3", "szia", false, true];
kiir(l);

let d={
    "név": "Béla",
    "kor": 23,
};
kiir(d);

kiir(l[2]);
kiir(d["kor"]);

// egysoros komment
/*
több
soros
komment
*/

function osszegzes(x){
    let s=0;
    for(let i=0; i<x.length; i++){
        s+=x[i];
    }
    return s;
}

kiir(osszegzes([1,2,3,4,5]));

a=7;
if(a%2==0){
    kiir("páros");
}
else{
    kiir("páratlan");
}

let b=5; // lokális változót hozunk létre
var c=6; // ne használd!

const E=0;
// c+=1; //hibát dob

"use strict"; // első sorba beleírni => több mindenért fog hibát dobni

let ember={
    name: "Béla",
    getName() {
        return this.name;
    },
    getKor() {
        return 32;
    }
}

kiir(ember.name);
kiir(ember.getName());
kiir(ember.getKor());

let x= (n1, n2) => n1+n2;

kiir(x(2,3));

function max_kiv(t){
    let max_elem=t[0]
    let max_index= 0
    for( let i =1; i<t.length; ++i){
        if( t[i] > max_elem){
            max_elem= t[i];
            max_index=i;
        }
    }

    return [max_elem,max_index];
}

kiir(max_kiv([2,3,5,2,1]));

let xxx= max_kiv([2,3,5,2,1]);

kiir(xxx[0]);

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


kiir(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1>n2));
kiir(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1>=n2));
kiir(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1<n2));
kiir(szelsoertek_kiv([2,1,3,5,2,1,5], (n1, n2)=>n1<=n2));
