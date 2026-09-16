var isEditBtnPressed = false;
var isDonePressed = false;
function add_item() {
    var item = document.createElement("div");
    item.className = "item";
    document.querySelector("#list").appendChild(item);

    var content = document.createElement("span");
    content.className = "content";
    item.appendChild(content);

    var done = document.createElement("input");
    done.type = "checkbox";
    done.className = "done";
    done.addEventListener("click", function () {
        isDonePressed = !isDonePressed;
        if (isDonePressed) {
            item.className = "item task-has-done";
        }
        else {
            item.className = "item"; 
        }
    });
    content.appendChild(done);

    var task = document.createElement("p");
    task.className = "task";
    task.innerText = "Edit your task with ✏️ button."
    content.appendChild(task);

    var btns = document.createElement("span");
    btns.className = "btns";
    item.appendChild(btns);

    var editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "✏️";
    editBtn.addEventListener("click", function () {
        isEditBtnPressed = !isEditBtnPressed;
        var text = document.createElement("input");
        text.type = "text";
        text.className = "textInp";
        text.placeholder = "Enter your task"
        var ok = document.createElement("input");
        ok.type = "checkbox";
        ok.className = "okInp";
        var addTask = document.createElement("span");
        addTask.className = "addTask";
        content.appendChild(addTask);
    
        addTask.appendChild(text);
        addTask.appendChild(ok);
        if (isEditBtnPressed) { // isEditBtnPressed = true
            task.innerHTML = "";
            if (isDonePressed) done.click();
            ok.addEventListener("click", function () {
                isEditBtnPressed = false;
                task.innerHTML = text.value;
                addTask.remove();
            });
        }
        else { // isEditBtnPressed = false
            if (text.value != "")
                task.innerHTML = text.value;
            else 
                task.innerHTML = "None";
            content.lastChild.remove();
            content.lastChild.remove();
        }
    });
    btns.appendChild(editBtn);

    var delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.textContent = "🗑️";
    delBtn.addEventListener("click", function () {
        item.remove();
    })
    btns.appendChild(delBtn);
}
