import React from 'react';
import axios from 'axios';

class Lunch extends React.Component {
    state = {
        menu: []
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        window.localStorage.setItem('lunch', JSON.stringify(this.state.menu));

    }

    componentDidMount() {
        var json = localStorage.getItem('lunch');
        if (json == null) {
        axios.get('https://entree-f18.herokuapp.com/v1/menu/15')

        .then(res => {
            console.log(res.data);
            this.setState({ menu: res.data.menu_items });
        });
}
    else {  
            var menu = JSON.parse(json);
                this.setState({ 
                    menu: menu
                });
    }
    // menu is in local storage
    // setState from local storage
}

    render() {
        return (

            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Lunch
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <ul>

                                {this.state.menu.map(menu =>
                                    <div>
                                        <h4>{menu.description.split(' with ')[0]}</h4>
                                        <li>{menu.description}</li>
                                        <p>${menu.description.length}</p>

                                    </div>)}
                            </ul>
                        </div>
                </div>
                </div>
            </div>

        );
    }
}

export default Lunch;