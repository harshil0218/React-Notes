import express from 'express';

const Port = process.env.PORT || 3000;

const app=express();

app.get('/api/products',(req,res)=>{
    const products=[
        {
            id : 1,
            name : 'Nike Slim Shirt',
            price : 120,
            image : 'https://images.pexels.com/photos/6608749/pexels-photo-6608749.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id : 2,
            name : 'Adidas Fit Shirt',
            price : 100,
            image : 'https://images.pexels.com/photos/6608749/pexels-photo-6608749.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id : 3,
            name : 'Lacoste Free Shirt',
            price : 220,
            image : 'https://images.pexels.com/photos/6608749/pexels-photo-6608749.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id : 4,
            name : 'Nike Slim Pant',
            price : 78,
            image : 'https://images.pexels.com/photos/6608749/pexels-photo-6608749.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id : 5,
            name : 'Puma Slim Pant',
            price : 65,
            image : 'https://images.pexels.com/photos/6608749/pexels-photo-6608749.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
    ]

    // Simulating the delay of the server
    setTimeout(()=>{
        res.send(products);
    },3000)

    // http://localhost:3000/api/products?search=shirt
    if(req.query.search){
       const filterProducts=  products.filter((product => product.name.toLowerCase().includes(req.query.search.toLowerCase())))   
        res.send(filterProducts);
        // to exit the function o.w. app will crash
        return;
    }
})

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})