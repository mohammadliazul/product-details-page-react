import './App.css';
import productData from './ProductData';

function App() {

  return (
    <section className='app'>
      {
        productData.map(({_id, title, src, description, content, price, colors},index) => (
          <div key={_id} className="details">
            <div>
              <img src={src[index]} alt="largeImg" className='large-img'/>
            </div>

            <div className='box'>
              <div className='row'>
                <h2>{title}</h2>
                <span>{price}</span>
              </div>
              <div className='colors' >
                {
                  colors.map((color, index) => (
                    <button key={index} style={{background: color}}></button>
                  ))
                }
              </div>
              <p>{description}</p>
              <p>{content}</p>
              <div className="thumb" >
                {
                  src.map((img, index) =>(
                      <img src={img} alt="small img" key={index} 
                      />
                  ))
                }
              </div>
              <button className='add-to-cart'>Add to cart</button>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default App;
