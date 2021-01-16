import { Component, Fragment } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/rootActionType";

class Counter extends Component {

    handlerChange = () => {
    }

    render() {
        return (
            <Fragment>
                <button className="btn-minus" onClick={ this.props.minusOne }>-</button>
                <input type="text" id="e-count" onChange={ this.handlerChange } value={ this.props.order } />
                <button className="btn-plus" onClick={ this.props.plusOne }>+</button>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        plusOne: () => dispatch({type: ActionType.PLUS_ONE}),
        minusOne: () => dispatch({type: ActionType.MINUS_ONE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);