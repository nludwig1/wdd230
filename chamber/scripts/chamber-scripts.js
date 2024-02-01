function lastModified() {
    const doc = document;
    doc.lastModified;
    return doc.lastModified;
}

function currentYear() {
    let year = new Date().getFullYear();
    return year;
}
function updateFooter(lastModified, currentYear) {
    const doc = document;
    doc.querySelector('#lastModified').textContent = `Last Modified ${lastModified}`
    doc.querySelector('#year').textContent = `©${currentYear} - Nathan Ludwig, United States`
}

updateFooter(lastModified(), currentYear());
//var modify = document.lastModified;
//document.getElementById("lastModify").innerHTML = modify;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});