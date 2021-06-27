const input = document.getElementById('input');
const listCont = document.getElementById('list-container');
const form = document.getElementById('form');
const li = Array.from(document.getElementsByTagName('li'));

input.focus();

form.addEventListener ('submit', addToDo)

function addToDo(e) {
    e.preventDefault();

    const newToDo = document.createElement("li");

    if (input.value !== '') {                      // добавить задачу
    newToDo.innerText = input.value;
    listCont.appendChild(newToDo);
    input.value = "";
    

    newToDo.addEventListener('click', doneTodo); // вычеркнуть задачу
    function doneTodo() {
        newToDo.classList.toggle('done');
    }


    newToDo.addEventListener('contextmenu', deleteTodo); // удалить задачу
    function deleteTodo(e) {
        e.preventDefault();
        listCont.removeChild(newToDo);
    }
}
}
