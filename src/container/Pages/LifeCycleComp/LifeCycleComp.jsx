import React, {Component} from 'react';

class LifeCycleComp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            number: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         number: 5
        //     })
        // }, 3000);
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        // console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('thisState', this.state);
        console.groupEnd();

        const max = 3;
        if (nextState.number > max) {
            // this.setState({
            //     number: max
            // })
            return false;
        } else {
            return true;
        }

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        // console.log(prevProps);
        // console.log(prevState);
        return 'this is snapshot!';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    incNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        console.log('render');
        return (
            <button className='btn' onClick={this.incNumber}>Button Comp {this.state.number}</button>
        )
    }
}

export default LifeCycleComp;