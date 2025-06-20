import express from 'express';
import DB from './db.js'


const PORT = process.env.PORT || 3000;

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();

app.use(express.json());

/** global instance of our database */
let db = new DB();


// implement API routes

/** Return all products. 
 *  Be aware that the db methods return promises, so we need to use either `await` or `then` here! 
 * 
 */
app.get('/products', async (req, res) => {
    let products = await db.queryAll();
    res.send(products);
});


/** Return a single customer by id 
 * 
 */
app.get('/products/:id', async (req, res) => {
    // TODO: Implement query by id
});

/** Create a new customer
 *
 */
app.post('/products', async (req, res) => {
    // TODO: Implement insert
});

/** Update an existing customer
 * 
 */
app.put('/products/:id', async (req, res) => {
    // TODO: Implement update
});


/** Delete a customer by id
 *
 */
app.delete('/products/:id', async (req, res) => {
    // TODO: Implement delete
});

let server;
await db.connect()
    .then(() => {
        return app.listen(PORT)
    })
    .then(s => {
        server = s;
        console.log(`Server listening on port ${PORT}`);
    });

export { app, server, db }
 