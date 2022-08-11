import * as genresAPI from "./fakeGenreService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "The Founders",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Business" },
    author: "Jimmy Soni",
    priceOnAmazon: "$19.29",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Foundations of Information Security",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Jason Andress",
    priceOnAmazon: "$28.15",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Your Wit Is My Command",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Tony Veale",
    priceOnAmazon: "$21.49",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Kill It With Fire",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Marianna Bellotti",
    priceOnAmazon: "$14.39",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Make Python Talk",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Mark Liu",
    priceOnAmazon: "$27.49",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Clock and the Camshaft",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Science" },
    author: "John Farrell",
    priceOnAmazon: "$19.00",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Math For Deep Learning",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Ronald T. Kneusel",
    priceOnAmazon: "$36.49",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Talk To Me",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "James Vlahos",
    priceOnAmazon: "$8.25",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Fully Automated Luxury Communism",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Technology" },
    author: "Aaron Bastani",
    priceOnAmazon: "$16.23",
  },
];

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((m) => m._id === id);
}

export function saveBook(book) {
  let bookInDb = books.find((m) => m._id === book._id) || {};
  bookInDb.name = book.name;
  bookInDb.genre = genresAPI.genres.find((g) => g._id === book.genreId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  let bookInDb = books.find((m) => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
