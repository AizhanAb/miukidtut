// let price=document.getElementById("shoppingicon").addEventListener('click', function(e){
//   let text = document.getElementById("price").innerHTML
//   console.log(text);
//   let texttitle = document.getElementById("title1").innerHTML
//   console.log(texttitle)
//   let textimg = document.getElementById("img1").alt
//     console.log(textimg)
// });
// ``

function getTheInfo(){
let name=  prompt('Tell me your name')
let lastname = prompt('Tell me your last name ')
let age = prompt('Tell me your age ')
let eyeColor = prompt ("Tell me eyecolor")
let addInfo =prompt ("Tell me what fruits do you like?")
let fruits =prompt ("Tell me what vegatables do you like?")
let vegetables =prompt ("Tell me what movies do you like?")
let option5=prompt ("This thing won't be outputted")
let info=[name, lastname, age, eyeColor, addInfo, fruits, vegetables
]
console.log(info)
}



let salary = {
  almaz: 1200,
  adilet: 1300,
  nursultan: 3000,
};
let bonus = {
  almaz: 400,
  adilet: 300,
  nursultan: 200,
}




function sumObjectsByKey(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k))
        a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}

console.log(sumObjectsByKey(salary, bonus));