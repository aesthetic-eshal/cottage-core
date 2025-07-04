import Book from './book.js'

const defaults = []

const data = localStorage.getItem('book') || localStorage.setItem('book', defaults)