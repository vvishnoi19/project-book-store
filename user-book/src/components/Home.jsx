import { useEffect,useState } from "react"
import {Container,Card ,Row,Col,Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
function Home() {
    const [books,setBooks]= useState([])
    const navigate=useNavigate();

    useEffect(()=>{ 
        axios({
            url:'http://localhost:3001/user/books',
            method:'get'
        }).then((res)=>{
            console.log(res)
            setBooks(res.data.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])
    function goToViewPage(id)
    {
        navigate('/book/'+id)

    }
    return (
        <Container fluid>
            <Row>
                {
                    books.map((book,index)=>
                    <Col key = {index} lg={3} className="mt-3">
                        <Card>
                            <Card.Img src={book.bookImage} height="200px" width="200px"></Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    {book.bookName}
                                </Card.Title>
                                <Card.Text>
                                    {book.description}
                                    <div style={{ width:'50px', backgroundColor:'seaGreen',borderRadius:'5px',color:'white',paddingLeft:'10px'}}>4.4</div>
                                    <span style={{color:'gray', display:'block'}}>{book.language},{book.authorName}</span>
                                    <span style={{fontWeight:'bold'}}>&#x20b9;{book.price}</span>

                                </Card.Text>
                            </Card.Body>
                            <Button className="w-100" style={{alignItem:'center',margin:'auto'}} onClick={ ()=> goToViewPage(book._id)}>View Detail</Button>
                        </Card>
                    </Col> 
                    )
                }
            </Row>

        </Container>
        
    )
}
export default Home