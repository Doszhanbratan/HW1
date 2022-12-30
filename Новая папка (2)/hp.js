let name = prompt("Введите свое имя");
while (name.length < 3 ){
    name = prompt("Неправильно.Имя должно превышать больше трех букв ");
}
let age= +prompt("Сколько вам лет")
while(age <= 14 || age >= 60){
    if (age < 14){
        age =+prompt("Вы должны быть старше 14 лет")
    }else if(age > 60){
        age = +prompt("Вы должны быть младше 60 лет")
    }
    }
let student = prompt("Вы студент   ", "Да или Нет")
while(student != "Да"){
    
 if (student != "Да"){
    student = prompt("Вы Студент")
    }}
