let array = []
        window.onload = () => {
        //    fetchCards()
           
        
        }

        const fetchBooks = () => {
            fetch("https://striveschool-api.herokuapp.com/books")
            .then(response => response.json())
            .then(books => {
                console.log(books)

                array = books
            } )
        }
        
        
        fetchBooks()
        
        const show = () => fetchCards()
        
        const fetchCards = () => {
            
            const row = document.getElementById("row");
           
            
                array.forEach(book => {
                    const card = `<div class=" hide col-md-4">
                        <div  class="card mb-4 shadow-sm">
                            
                <img src=${book.img}
                  <title>${book.title}</title>
                
                  </text>
                
                <div class="card-body">
                    
                  <p class="card-text">
                    ${book.category}
                  </p>
                  <span badge bg-warning text-dark mb-2"> Price: € ${book.price}</span>
                 
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class=" addToCart btn-group">
                      <button onlick = "addToCard()"
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                      <button onclick ="hideMe(event)" type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                       Hide
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`
                        row.innerHTML += card



                    })



                
            }
            
            const hideMe = (event) => {
        event.target.closest(".hide").remove();
    }


