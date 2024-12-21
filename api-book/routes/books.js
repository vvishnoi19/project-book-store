const express = require('express');
const bodyParser = require('body-parser');
const bookcontroller = require('../controllers/BookController');
const auth = require('../middleware/auth');

const multer = require("multer");
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
  }));
  const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 },
  });
  //routes for book panel
router.post('/add/book', uploader.single("file"),(req, res)=> {
  bookcontroller.addBook(req, res)
})
router.get('/books', (req, res)=> {
  bookcontroller.getBooks(req, res)
})
router.get('/book/:id', (req, res)=> {
  bookcontroller.getBookForEdit(req, res)
})
router.put('/edit/book/:id', (req, res)=> {
  console.log("edit  book")
  bookcontroller.editBook(req, res)
})

//routes for user panel
router.get('/user/book/:id', (req, res)=> {
  console.log("get books from user")
  bookcontroller.getBookForUser(req, res);
})
router.get('/user/books',(req,res)=>{

  bookcontroller.getBooksForUser(req,res)
})


module.exports =  router;