import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

class LifeCycleComp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         number: 5
        //     })
        // }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState) {

        const max = 3;
        if (nextState.number > max) {
            return false;
        } else {
            return true;
        }

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return 'this is snapshot!';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    incNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <Fragment>
                <button className='btn' onClick={this.incNumber}>Button Comp {this.state.number}</button>
                <hr/>
                <h3>Total Order : {this.props.order}</h3>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp);