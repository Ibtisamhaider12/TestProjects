import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        
    ]
})

cpnst port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`Server running on port ${port}`);
});