/* ----------- Задание 2 ------------------
Написать функцию, которая принимает в качестве аргументов строку и объект,
 а затем проверяет, есть ли у переданного объекта свойство с данным именем.
  Функция должна возвращать true или false.
 */

function checkPropInObj (str, obj) {
    return (str in obj);
}

// -------------------------------------------
const userIvanov = {
    name: 'Andrey',
    surname: 'Ivanov',
    age: 18,
    position: 'developer'
}

result = checkPropInObj('name', userIvanov)
console.log(result)

result = checkPropInObj('name1', userIvanov)
console.log(result)
