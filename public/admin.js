
// Your Code Here
//retrieve a list of books from server

async function main () {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(renderBook)
}
//list of book titles to admin

function renderBook (book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    //quanitity of books
    let quanitityInput = document.createElement('input')
    quanitityInput.value = book.quantity

    //save button and more
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    //eventlistener and fetch
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            //stringify
            body: JSON.stringify({
                id: book.id,
                quantity: quanitityInput.value
            })
        })
    })
    //append list
    li.append(quanitityInput, saveButton)
    root.append(li)

}
//call funcation of main
main ();