const Transaction = require('../models/Transaction');
const stripe = require('stripe')('sk_test_51QSFWzL7N63UqRFgMlVizyKdvrcABnruYrJdWyA769OVCGFGx5BO1acEw2WCHTINLhdCd5hhZXlCnozX0D3kt6i900rxVQzxaX');
async function doPayment(req, res) {
    try {
        console.log(req.body, 'req.body')
        let {products, data} = req.body;
        const lineItems = products.map((product)=> ({
            
            price_data: {
                currency: 'inr',
                product_data: {
                    name: product.bookName,
                },
                unit_amount: product.price*100
            },
            quantity: 1
        }))
        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types: ['card'],
        //     line_items: lineItems,
        //     mode: 'payment',
        //     success_url: 'http://localhost:5174/payment/success',
        //     cancel_url: 'http://localhost:5174/payment/failure'
        // })
        // console.log(session);
        if(session) {
            let tranaction = new Transaction(data);
            await tranaction.save();
            console.log(tranaction._id, '_id')
        }
        // res.send({ data: session.id })
    } catch(err) {
        console.log(err.message, 'msg')
    }
}

module.exports = {
    doPayment
}