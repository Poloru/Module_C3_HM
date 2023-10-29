/* ---------- Задание 3 ----------------
Написать функцию, которая создает пустой объект, но без прототипа.
 */

function creatAnEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

console.log(creatAnEmptyObjectWithoutPrototype());
