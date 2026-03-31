let todoList=[];
let todoListStr=localStorage.getItem('todoList');//for checking whether the list is empty or not after refreshing
todoListReset(todoListStr);
function todoListReset(todoListStr){ //restores previous list
    todoList=todoListStr ? JSON.parse(todoListStr) : [];
}
localStorage.setItem('todoList',JSON.stringify(todoList));
displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item :todoItem, dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    localStorage.setItem('todoList',JSON.stringify(todoList));
    displayItems();
}
function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHTML = '';
    for(let i=0;i<todoList.length;i++){
        newHTML+=
        `<span>${todoList[i].item}</span>
        <span> ${todoList[i].dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);localStorage.setItem('todoList',JSON.stringify(todoList));displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML=newHTML;
}