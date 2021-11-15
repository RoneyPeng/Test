import BestProducts from "./BestProducts";
import { listProduct } from "./constants";
import './Products.css'

export default function Products() {
    const data = listProduct
    return (
        <div className='products'>
            <BestProducts />
            <div className="list">
                <div className="list-products">
                    {
                        data.map(item => {
                            return <div className="list-product__item">
                                <img src={item.img} alt="product" />
                                <h4>{item.title}</h4>
                                <div className="detail">
                                    <span>{item.price}</span>
                                    <div>
                                        <img src={require('../img/hearticon.png').default} alt="heart-icon" />
                                        <span>{item.like}</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <button className='see-more'>SEE MORE</button>
            </div>
        </div>
    )
}
