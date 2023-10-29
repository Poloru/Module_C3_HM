/* ---------- Задание 3 ----------------
Написать функцию, которая создает пустой объект, но без прототипа.
 */

function createObjWithoutProto() {
    return Object.create(null);
}

// -------------------------------------------
const myOb = createObjWithoutProto()
console.log(myOb)
