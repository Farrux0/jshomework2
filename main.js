let imya = prompt("Введите ваше имя")
function time(){
    let god1 = +prompt("Введие нынешний год")
    let god2 = +prompt("Введие ваше год рождение")
    let age = (god1 - god2)
    return age
}
alert(imya + " ваш возраст " + time())



 function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
 }

 let minNumber = 1
 let maxNumber = 100
  let num = +prompt("Введите количество примеров")
 for(let i = 0; i < num;i++) {
     let one = rand(minNumber, maxNumber) 
     let two = rand(minNumber, maxNumber) 
     let primer = +prompt(one + ' + ' + two + ' =')
     if(primer == (one + two)){
        alert(one + ' + ' + two + ' = ' + (one + two) + ' Ваш ответ ' + primer + ', ' + "Молодец")
     }else if(primer == (one - two)){
        alert(one + ' - ' + two + ' = ' + (one - two) + ' Ваш ответ ' + primer + ', ' + "Молодец")
     }
     
     
     
     
     
     else{
        alert(one + ' + ' + two + ' = ' + (one + two) + ' Ваш ответ ' + primer + ', ' + "Холодец")
     }
     
}