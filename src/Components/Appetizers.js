import React from 'react';
import axios from 'axios';

class Appetizers extends React.Component {
    state = {
        menu: []
    }

    componentDidMount() {
        axios.get('https://entree-f18.herokuapp.com/v1/menu/5')

            .then(res => {
                console.log(res.data);
                this.setState({ menu: res.data.menu_items });
            });
    }

    render() {
        return (

            <ul>

                {this.state.menu.map(menu =>
                    <div>
                        <h4>{menu.description.split(' with ')[0]}</h4>
                        <li>{menu.description}</li>
                        <p>{menu.description.length}</p>

                    </div>)}
            </ul>


        );
    }
}

export default Appetizers;