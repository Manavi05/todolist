document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('lists');
    const addBtn = document.getElementById('add-btn');

    function addTask() {
        if (inputBox.value.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = inputBox.value;
        
        const removeBtn = document.createElement('span');
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => li.remove());
        li.appendChild(removeBtn);

        listContainer.appendChild(li);
        inputBox.value = '';
    }

    addBtn.addEventListener('click', addTask);

    //  Enter key to add tasks
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
