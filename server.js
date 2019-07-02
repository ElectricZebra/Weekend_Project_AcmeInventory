const express = require('express');
const app = express();
const { syncAndSeed, models } = require('./db');
const { Inventory } = models;
const { main } = require('./main');
const path = require('path')


syncAndSeed();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))

// app.get('/', async (req, res, next) => {
//   try {
//     const data = await Inventory.findAll();
//     // not quite how to set it up... We should be sending back our index.html file instead of a string.
//     await res.send(`
    // <html>
    //   <head>
    //     <style>
    //       a {
    //         margin: 10px;
    //         background-color: grey;
    //       }
    //     </style>
    //     <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js'></script>
    //     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    //     <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    //     <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    //     <script src='https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.0/react-router-dom.js'></script>
    //   </head>
    //   <body>
    //     <div id='root'></div>
    //     <script type='text/babel'>
    //       const root = document.querySelector('#root');
    //       const { HashRouter, Route, Link } = ReactRouterDOM;


    //       const Products = ({ inventory }) => {
    //         console.log(inventory)
    //         return (
    //           <ul>
    //             {
    //               inventory.map(item => <li key={item.id}>{item.item}                       <select defaultValue={ item.status }>
    //                   {
    //                     ['INSTOCK', 'BACKORDERED', 'DISCONTINUED'].map(status =>
    //                       <option key={status}>{status}</option>)
    //                   }
    //                 </select>
    //                 <br /> updated at: {item.updatedAt}

    //                 </li>)
    //             }
    //           </ul>
    //         )
    //       }

    //       class App extends React.Component {
    //         constructor () {
    //           super ();
    //           this.state = {
    //             inventory: []
    //           }
    //         };

    //         async componentDidMount () {
    //           try {
    //             const response = await fetch ('http://localhost:3000/api/products')
    //             const inventory = await response.json();
    //             this.setState({inventory})
    //           }
    //           catch (err) {
    //             console.log(err)
    //           };
    //         }

    //         render() {
    //           const { inventory } = this.state
    //           console.log(inventory)
    //           return (
    //             <HashRouter>
    //               <h1>Acme Inventory</h1>
    //               <Link to='/'>All Products({inventory.length})</Link>
    //               <Link to='/instock'>INSTOCK</Link>
    //               <Link to='/backordered'>BACKORDERED</Link>
    //               <Link to='/discontinued'>DISCONTINUED</Link>
    //               <Route path='/' exact render={ () => <Products inventory={ inventory } />} />
    //             </HashRouter>
    //           )
    //         }
    //       };

    //       ReactDOM.render(<App />, root);
    //     </script>
    //   </body>
    // </html>
//     `)
//   }
//   catch (ex) {
//     next(ex)
//   }
// });
// great way to send all the products!
app.get('/api/products', async (req, res, next) => {
  try {
    res.send(await Inventory.findAll());
  }
  catch (ex) {
    next(ex)
  }
})
// good start. Now define the function that handles this route.
app.put('/api/products/:id')
