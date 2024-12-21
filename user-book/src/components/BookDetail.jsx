import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
const BookDetail = () => {
  let [book, setBook] = useState([]);
  let param = useParams();
  useEffect(() => {
    axios({
      url: "http://localhost:3001/user/book/" + param.id,
      method: "get",
    })
      .then((res) => {
        console.log(res);
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param]);
  function goToPurchase() {
    alert("ok");
  }
  return (
    <div>
      <Container fluid>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ border: "1px solid lightgrey" }}>
            <img src={book.bookImage} height="500px" width="500px" />
          </div>
          <div style={{ fontSize: "25px", color: "grey", marginLeft: "20px" }}>
            <h4>
              <p>{book.bookName}</p>
              <div
                style={{
                  width: "50px",
                  backgroundColor: "seaGreen",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "20px",
                  paddingLeft: "10px",
                }}
              >
                4.4
              </div>
              <span style={{ fontWeight: "bold", color: "black" }}>
                &#x20b9;{book.finalPrice}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  color: "grey",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <s>&#x20b9;{book.price}</s>
              </span>
              <p style={{ fontSize: "20px", textTransform: "capitalize" }}>
                Author:{book.authorName}
              </p>
              <p style={{ fontSize: "20px", color: "grey" }}>Highlights:</p>
              <ul>
                <li style={{ fontSize: "16px", color: "gray" }}>
                  Description: {book.bookDescription}
                </li>
                <li
                  style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}
                >
                  Language: {book.language}
                </li>
                <li
                  style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}
                >
                  Edition: {book.edition}
                </li>
                <li
                  style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}
                >
                  Binding: {book.binding}
                </li>
                <li
                  style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}
                >
                  Publisher: {book.publisher}
                </li>
                <li
                  style={{ fontSize: "16px", color: "gray", marginTop: "10px" }}
                >
                  Seller: {book.seller}
                </li>
              </ul>
            </h4>
            <p>
              <Button variant="success" onClick={goToPurchase}>
                Buy Now
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetail;
