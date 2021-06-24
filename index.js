window.onload = () => {
    fetchBooks()
}

const fetchBooks = () =>{
    const row = document.getElementById("row");
    fetch(' https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(data => {
    console.log(data)
 
    data.forEach(book => {

    const card = ` <div class="card" style="width: 18rem;">
    <img src="${book.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`
    row.innerHTML += card
})
    })

}
