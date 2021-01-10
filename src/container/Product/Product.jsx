import { Component, Fragment } from "react";
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';

class Product extends Component {

    state = {
        number: 0
    }

    handleNumChange = (newValue) => {
        this.setState({
            number: newValue
        })
    }
    
    render() {
        return (
            <Fragment>
                <div className="header">
                    <span className="num">{ this.state.number }</span>
                    <br/>
                    <CardProduct onNumChange={ (newValue) => this.handleNumChange(newValue) } />
                </div>
            </Fragment>
        )
    }
}

export default Product;