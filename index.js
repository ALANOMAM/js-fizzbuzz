
let grigliaElementi = document.querySelector("#griglia")

for(let i=1;i<=100;i++){
    
    const Element = document.createElement("div")
     
     /*Element.innerHTML=i;
      Element.className="square";
     Element.style.color="red";*/

     



    if(i % 3 == 0 && !(i % 5 == 0)){
        console.log("fizz",i)
        Element.innerHTML="Fizz"
     }else if(i % 5 == 0 && !(i % 3 == 0)){
        console.log("buzz",i)
        Element.innerHTML="Buzz"

     } else if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuz",i)
        Element.innerHTML="FizzBuzz"
     } else{
        console.log(i)
        Element.innerHTML=i
     }


     grigliaElementi.append(Element)

    /*
    if(i % 3 == 0 && !(i % 5 == 0)){
        console.log("fizz",i)
     }else if(i % 5 == 0 && !(i % 3 == 0)){
        console.log("buzz",i)

     } else if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuz",i)
     } else{
        console.log(i)
     }*/

         
}

