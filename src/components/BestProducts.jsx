import { listBest } from './constants';


export default function BestProducts() {

    const List = listBest

    return (
        <div className='best-products'>
            <div className="text-box">
                <h2 className="title">
                    BEST PRODUCT
                </h2>
                <p className="description">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos. Can be trimmed. Take the first
                </p>
            </div>
            <div className="best-product__list">

                {
                    List.map(item => {
                        return <div className="list-item">
                            <img src={item.rank} alt="rank" className='item-rank' />
                            <img src={item.img} alt="product" className='item-products' />
                            <div className="describe-box">
                                <p>{item.describe}</p>
                                <img src={require('../img/go-icon.png').default} alt="Go" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
