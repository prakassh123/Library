console.log("connected 🎉");
const tbody = document.getElementsByTagName('tbody')[0];
const alerts = document.getElementsByClassName('alert')[0];
class Book {
    constructor(bookname, author, booktype) {
        this.bookname = bookname,
            this.author = author,
            this.booktype = booktype
    }
}

const getData = document.getElementsByClassName("submit_btn")[0];
getData.addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault()

    const bookname = document.getElementsByClassName("bookname")[0].value;
    const author = document.getElementsByClassName('author')[0].value;
    const adventure = document.getElementsByClassName('adventure')[0].checked;
    const action = document.getElementsByClassName('action')[0].checked;
    
    var booktype;
    if (adventure) {
        booktype = "adventure"
    } else if (action) {
        booktype = "action"
    } else {
        booktype = "romantic"
    }
    const Bookdata = new Book(bookname, author, booktype);
    console.log(Bookdata);
    if(bookname.length>2 && author.length>2){
        addrow(Bookdata)
    }else{
        alerts.classList.remove('hidden')
        setTimeout(()=>{
            alerts.classList.add('hidden')
        },1000)
    }
    
    document.getElementsByTagName('form')[1].reset(); 
}

function addrow(data) {
    const newrow = document.createElement('tr');
    newrow.innerHTML = `<th scope="row">1</th>
                    <td>${data.bookname}</td>
                    <td >${data.author}</td>
                    <td>${data.booktype}</td>`
    tbody.append(newrow)
}