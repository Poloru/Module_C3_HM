/* -------- Задание 1 ------------

Написать, функцию, которая принимает в качестве аргумента объект и
выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.
 */

function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

// -------------------------------------------
const userIvanov = {
    name: 'Andrey',
    surname: 'Ivanov',
    age: 18,
    position: 'developer'
}

printObject(userIvanov)

const myStr = 'test'
printObject(myStr)
