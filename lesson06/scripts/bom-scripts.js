const input = document.querySelector('#favchap');
const addChapter = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(input => { displayList(input) });


addChapter.addEventListener('click',
    function () {
        if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }


    });

function displayList(item) {
    //function (item) {
    // if (input != "") {
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌'
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
    input.focus();
    input.value = '';
    // }
    // else {
    //   return "Nothing Entered";
    // 

};
function setChapterList() {
    localStorage.setItem('list', JSON.stringify(chaptersArray));
};
function getChapterList() {
    return JSON.parse(localStorage.getItem('list'));
};
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();

};


