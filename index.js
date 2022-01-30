console.log('Welcome to Shakeb Library');

//Constructor
function Book(name, author, category) {
    this.name = name;
    this.author = author;
    this.category = category;

}

//Display Constructor
function Display() {

}




// Add method to display prototype
Display.prototype.add = function (book) {
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uiString = `  <tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.category}</td>
                      </tr>`;
    tableBody.innerHTML += uiString;
}
// Implementing the clear funtion
Display.prototype.clear = function (book) {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// Implementing the validate funtion
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true; 
    }
}
Display.prototype.show = function (type , displayMessage) {
    let message = document.getElementById('message');
    let boldText;  
    if (type==='success'){
        boldText = 'Success'
    }
    else{
        boldText ='Error!'
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                           <strong>${boldText}</strong>${displayMessage}
                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>`
setTimeout(function() {
    message.innerHTML = "";
}, 5000);                        

}




//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let category;
    let engineering = document.getElementById('engineering');
    let medical = document.getElementById('medical');
    let fiction = document.getElementById('fiction');

    if (engineering.checked) {
        category = engineering.value;
    }
    else if (medical.checked) {
        category = medical.value;
    }
    else if (fiction.checked) {
        category = fiction.value;
    }






    let book = new Book(name, author, category);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ` Your book has been successfuly added.`);
    }
    else {
        display.show('danger', ` Sorry! You can not add this book.`);
    }
    display.clear();

    e.preventDefault();
}