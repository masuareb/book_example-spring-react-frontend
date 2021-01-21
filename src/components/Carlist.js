import React, { Component } from 'react';

class Carlist extends Component {
    constructor(props) {
        super(props);
        this.state = { cars: [] };
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/cars')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    cars: responseData._embedded.cars,
                });
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div></div>
        );
    }
}
export default Carlist;