//document.body.innerHTML += 'Ahoj ja som javascript';

//document.body.innerHTML += 'Měsíční příjem je ' + ( 7 * 320 * 21) + 'Kc.';
//document.body.innerHTML += 'Měsíční příjem je ' + ( 7 * 320 * 21) + 'Kc.';
//document.body.innerHTML += 'Zaplatim dan'+ Math.floor((0.4*0.15))
//document.body.innerHTML += 223%60;

// document.body.innerHTML += 'barbora' + '.' + 'lomenova'+ '@gmail.com';

// document.body.innerHTML += "<br>";

// document.body.innerHTML += Math.random() *10;
// document.body.innerHTML += "<br>"
// document.body.innerHTML += Math.ceil((Math.random() *10))+ "<br>"

// const wageInEur= 20
// const wageInCzk= Math.round(wageInEur* 24.55)
// document.body.innerHTML += "<h1>Mzda v korunách: " + wageInCzk +  "KC</h1>" + "<br>";

// const count = 5;
// let name= "Alena";

// let name;
// name ='Pavel';
// document.body.innerHTML += name;

// const sazba = 500;
// const pocetHodin = 147;
// const vyplata = sazba * pocetHodin;
// document.body.innerHTML += vyplata + "<br>";

// let pocet = 0;
// pocet = pocet +1;
// document.body.innerHTML += pocet;

let email = "alena.novakova";
email+= "@gmail.com";
document.body.innerHTML += email + "<br>",

document.body.innerHTML+= Math.random() +"<br>";


const wageEur= 20;
const wageInCzk = Math.round(wageEur * 24.55);
document.body.innerHTML += "<h1>Mzda v korunách:" + wageInCzk + "KC</h1>";

const start= 15;
const delka = 10;
const konec= start + delka;
document.body.innerHTML += "<h1>Zavod skoncil v " + konec % 24 + " hodin<h1>";

var listok= 12;
const pocetNavstev= 174;
const pocetPredstaveni =15
// const prijem= 12*174*15;
const prijem= listok * pocetNavstev * pocetPredstaveni; 
document.body.innerHTML += "<h2> Prijem divadla je " +prijem + "eur</h2>";


const listokZlava= 0.65*listok
const pocetStudentov= pocetNavstev*0.4
const prijemSoStudentami= (listok*0.6*pocetNavstev*pocetPredstaveni)+ (listokZlava*pocetStudentov*pocetPredstaveni);
document.body.innerHTML += "<h2> Prijem divadla vratane studenstkej zlavy je " +prijemSoStudentami + "eur</h2>";

const x= Math.random();
document.body.innerHTML += x +"<br>";

const y= 7675.76574;
const naDesatiny= Math.round(y*10)/10;
document.body.innerHTML += naDesatiny +"<br>";

const cislo= (Math.floor(Math.random()*6))+1;
document.body.innerHTML+=cislo;

document.body.innerHTML+= "<p>zastavana plocha moze byt</p>"+ 311*0.25 



let vahaCinky= 10;
const cenaCinky= 2.85*vahaCinky;
document.body.innerHTML+= "<p>cena cinky</p>" + cenaCinky;
