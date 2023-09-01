
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './styles1.css';
import Summary from './Summary';
import TableRow from './TableRow';
import { api } from '../provider';



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function Carrinho() {


  const [cart, setCart] = useState([]);

  const productObject = {
    name: 'produto',
    category: 'categoria',
    price: randomNumber(90, 1200),
    quantity: 1,
  }

  const fetchData = () => {
    api.get('/cart').then((response) => setCart(response.data));
  }
  useEffect(() => {
    fetchData();
  }, [])

  const handleAddItem = () => {
    //insercao
    console.log('Dispartou handleAddItem')
    api.post('/cart', productObject).then((response) => {
      console.log(response)
      fetchData();
  });
  }

  const handleRemoveItem = (item) => {
    //remocao
    console.log("disparou a removeitem")
    console.log({item});

    api.delete(`/cart/${item._id}`).then(response => {
      console.log(response);
      fetchData();
    })
  }
  
  const handleUpdateItem = () => {
    // alteracao quantidade
  }
  
  return (
    <>
    <Header/>
      <main>
        <div className='content'>
          <section>
            <button onClick={handleAddItem} style={{padding: '5px 10px', marginBottom: 15}}>
              Add to cart</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => 
                <TableRow key={item._id}data={item} handleRemoveItem={handleRemoveItem}/>) }
                {cart.length === 0 && <tr>
                  <td colSpan='5' style={ {textAlign: 'center'}}>
                    Carrinho de compras vazio
                  </td>
                  </tr>}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
        <Footer/>
      </main>
    </>
  );
}

export default Carrinho;