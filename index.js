
let grigliaElementi = document.querySelector("#block")

for(let i=1;i<=100;i++){
    
    const Element = document.createElement("div")

     
      Element.className="square";
     Element.style.color="black";
     Element.style.fontSize="20px";

     



    if(i % 3 == 0 && !(i % 5 == 0)){
        console.log("fizz",i)
        Element.innerHTML="Fizz"
        Element.className=" fizzSquare"
     }else if(i % 5 == 0 && !(i % 3 == 0)){
        console.log("buzz",i)
        Element.innerHTML="Buzz"
        Element.className=" buzzSquare"

     } else if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuz",i)
        Element.innerHTML="FizzBuzz"
        Element.className=" fizzBuzzSquare"
     } else{
        console.log(i)
        Element.innerHTML=i
     }


     grigliaElementi.append(Element)
      
}

