const input = document.querySelector('#favchap');
const addChapter = document.querySelector('button');
const list = document.querySelector('#list');

addChapter.addEventListener('click',
    function () {
        if (input != "") {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌'
            li.append(deleteButton);
            list.append(li);
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            })
            input.focus();
            input.value = '';
        }
        else {
            return "Nothing Entered";
        }


    });


