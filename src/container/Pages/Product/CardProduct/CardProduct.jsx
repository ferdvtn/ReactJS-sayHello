import { Component } from 'react';
import Counter from './Counter';
import './CardProduct.css'

class CardProduct extends Component {
    render () {
        return (
            <div className="card-product-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae numquam nisi optio corrupti iure iusto quibusdam quae possimus quo delectus corporis quas enim, iste nemo sed animi vel repellendus?</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;