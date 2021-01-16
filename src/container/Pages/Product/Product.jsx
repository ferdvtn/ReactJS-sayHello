import { Component, Fragment } from "react";
import { connect } from "react-redux";
import CardProduct from './CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <span className="num">{ this.props.order }</span>
                    <br/>
                    <CardProduct />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);