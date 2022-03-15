const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    userId: String,
    name: String,    
    author: String,
    date: {
        type: date,
        default: Date.now
    }
});

const Book = mongoose.model('book', bookSchema)

module.exports.Book = Book;