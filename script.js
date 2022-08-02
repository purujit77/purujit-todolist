let addButton = document.getElementById('button');
let input = document.getElementById('input');
let inputContainer = document.getElementById('toDoContainer');

//ADD TASK BUTTON
addButton.addEventListener('click', function() {
    let newItem = document.createElement('div');
    newItem.setAttribute("style","display: flex; gap: 10px")

    let inputDiv = document.createElement("div")
    inputDiv.setAttribute("style", "display: flex; justify-items: left; padding-left:10px; width: 100%; border-radius: 5px; justify-content:space-between; color: white; border: 2px solid grey")
    inputDiv.classList.add('toDoItem');
    inputDiv.innerHTML = input.value;
    inputContainer.appendChild(newItem);
    input.value = '';
    inputContainer.setAttribute("style", "row-gap: 20px;")
    newItem.appendChild(inputDiv)

    //DIV FOR BUTTONS
    let btnDiv = document.createElement("div")
    btnDiv.setAttribute("style", "display: flex; justify-content: space-between; gap = 2px", "class", "temp")
    btnDiv.contentEditable = false
    newItem.appendChild(btnDiv)

    //DELETE BUTTON
    let dltBtn = document.createElement("button")
    dltBtn.innerHTML = "Delete"
    dltBtn.addEventListener("click", function(){
        newItem.remove()
    })
    dltBtn.contentEditable = false
    dltBtn.setAttribute("class", "btn btn-light", "style","justify-content: right; position:fixed" )
    btnDiv.appendChild(dltBtn)

    //EDIT BUTTON & UPDATE BUTTON
    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.addEventListener("click", function(){
        newItem.contentEditable = true
        editBtn.innerHTML = "Update"
        editBtn.addEventListener("click", function(){
            newItem.contentEditable = false
        })
    })
    btnDiv.appendChild(editBtn)
    editBtn.setAttribute("class", "btn btn-light", "style", )
} );