const library = {
    books: [
        { "title": "Bhagavad Gita", "author": "Vyasa", "isAvaliable": false },
        { "title": "Ramayana", "author": "Valmiki", "isAvaliable": true },
        { "title": "Mahabharata", "author": "Vyasa", "isAvaliable": true },
        { "title": "Yoga Sutras", "author": "Patanjali", "isAvaliable": false },
        { "title": "Arthashastra", "author": "Kautilya", "isAvaliable": true }
    ],
    borrowBook:function(bookTitle){
        let book = this.books.find((ele)=>{
            return ele.title === bookTitle
        })

        if(book && book.isAvaliable){
            book.isAvaliable=false
            console.log(`You borrowed ${bookTitle}`);
        }else if (book && !book.isAvaliable){
            console.log("currently book not avilable");
        }else{
            console.log("book not found");
        }
    }
     
}

library.borrowBook("Mahabharata")
library.borrowBook("Mahabharata")