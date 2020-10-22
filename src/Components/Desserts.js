import React from 'react';
import axios from 'axios';

class Desserts extends React.Component {
    state = {
        desserts: []
    }

    componentDidMount() {
        axios.get('https://entree-f18.herokuapp.com/v1/menu/8')

            .then(res => {
                console.log(res.data);
                this.setState({ desserts: res.data.menu_items });
            });
    }

    render() {
        return (

            <ul>
            
                {this.state.desserts.map(desserts =>
                    <div>
                        <h4>{desserts.description.split(' with ')[0]}</h4>
                        <li>{desserts.description}</li>
                        <p>{desserts.description.length}</p>

                    </div>)}
            </ul>


        );
    }
}

export default Desserts;