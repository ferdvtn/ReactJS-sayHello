import { Component, Fragment } from 'react';
import './CardProduct.css'

class CardProduct extends Component {

    state = {
        number : 0
    }

    handlerPlus = () => {
        this.setState({
            number: this.state.number + 1
        }, () => {
            this.props.onNumChange(this.state.number)
        })
    }

    handlerMinus = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1,
            }, () => {
                this.props.onNumChange(this.state.number)
            })
        }
    }

    render () {
        return (
            <Fragment>
                <button className="btn-minus" onClick={ this.handlerMinus }>-</button>
                <button className="btn-plus" onClick={ this.handlerPlus }>+</button>
            </Fragment>
        )
    }
}

export default CardProduct;