import React, { Component } from 'react';

import api from '../../connection/conect';

import './styleCard.css';
class Card extends Component{
   
    state = {
        // receita : [{
        //     title : "",
        //     time : "",
        //     porcoes : 0,
        //     ingredientes : []

        // }]
    }
    async componentDidMount(){
        const response = await (await api.get('')).data;
        let ing = response.map();
        console.log(ing);
        this.setState({
            title : response.title,
            time : response.time,
            porcoes : response.porcoes,
            ingredientes : response.ingredientes,

        });
    }   

    render(){
        const {receita}  = this.state;
        return(
            <>  
                
                 <div className="card">
                        <img className="card_img" src={this.props.img} alt="img card" />
                        <div className="card_line" />
                        <p className="card_text">{this.props.title}</p>
                        <h2 h2 className="card_ing">{receita}</h2>
                        <ul className="card_ingredientes-lista">
                            <li className="card_ingrediente">500g de contra-filé</li>
                            <li className="card_ingrediente">3 colheres de sopa de manteiga</li>
                            <li className="card_ingrediente">3 colheres de sopa de azeitona</li>
                            <li className="card_ingrediente">1 tablete de caldo de carne</li>
                            <li className="card_ingrediente">1 colher de sopa de ketchup</li>
                            <li className="card_ingrediente">sal, alho, pimenta do reino á gosto</li>
                            <li className="card_ingrediente">cheiro verde, cebola</li>
                            <li className="card_ingrediente">3 cenouras grandes</li>
                        </ul>
                </div>
            </>
        );
    }
}

export default Card;