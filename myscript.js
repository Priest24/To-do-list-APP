window.alert('one click will strike the list out and two will clear the list');

const addList = document.querySelector('.add-list');

const addBtn = document.querySelector('.fa-plus');

const inputField = document.getElementById('input');

addBtn.addEventListener('click', () => {
    const createElement = document.createElement('div');
    createElement.classList.add('new-list');
    createElement.innerHTML = inputField.value;
    addList.appendChild(createElement);
    inputField.value = "";

    createElement.addEventListener('click', () => { createElement.style.textDecoration = 'line-through'; })

    createElement.addEventListener('dblclick', () => {
        addList.removeChild(createElement)

    })
})
