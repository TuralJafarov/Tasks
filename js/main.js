

// function sum(number1,number2){
//     return number1 +  number2
// };


// let firstNUmber = parseInt(prompt('Birinci deyeri qeyd edin: '));
// let secondNumber = parseInt(prompt("Ikinci deyeri qeyed edin: "));


// document.write(sum(firstNUmber,secondNumber));
// console.log(sum(firstNUmber,secondNumber));



// let user1 ={
//   name:"Tural",
//   surname:"Jafarov",
//   year:1996,
//   getinfo:function(){
//     return this.name + " " + this.surname
//   }
// };


// console.log(user1.year);




// let qrup601=[21,544,69,22];

// console.log(qrup601);



// const topla=(a,b)=>{
//     console.log("necesen" + "  " + a + "  "+ b);
// };

// topla("ilyas","tural");



// let Birinci = Number(prompt("Birinci ededi qeyd edin: "));

// console.log(Birinci);


// function topla(eded1,eded2){
//     if(eded1>eded2){
//         return eded1 + eded2
//     }
//     else if(eded1<eded2){
//         alert('Ikinci boyukdur')
//     }
// };



// let birinci =parseInt(prompt('Birinci ededi qeyd edin: '));
// let ikinci =parseInt(prompt('ikinci ededi qeyd edin: '));


// console.log(topla(birinci,ikinci));




// let netice=(function(a,b){
// alert(a+b)
// })(6,4)]


// let eded = 12;

// for(let i=2; i<eded;i++){
//     if(eded%i==0){
//         console.log(i);
//     }
// };
  




// switch caselar////

// let deyer = parseInt(prompt("Heftenin gununu qey edin: "));

// switch(deyer){
 
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Thursday");
//         break;
        
//     case 3:
//         console.log("Wednesday");
//         break;
        
//     default:
//         console.log("gunu duz qeyd edin");
//         break;    
// }



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


