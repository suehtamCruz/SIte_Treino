import React, { Component } from 'react';

import './styleCard.css';
class Card extends Component{
   
    render(){
        return(
            <>
                 <div className="card">
                        <img className="card_img" src={this.props.img} alt="img card" />
                        <div className="card_line" />
                        <p className="card_text">{this.props.title}</p>
                        <h2 className="card_ing">Ingredientes</h2>
                        <ul className="card_ingredientes-lista">
                            <li className="card_ingrente">500g de contra-filé</li>
                            <li className="card_ingrente">3 colheres de sopa de manteiga</li>
                            <li className="card_ingrente">3 colheres de sopa de azeitona</li>
                            <li className="card_ingrente">1 tablete de caldo de carne</li>
                            <li className="card_ingrente">1 colher de sopa de ketchup</li>
                            <li className="card_ingrente">sal, alho, pimenta do reino á gosto</li>
                            <li className="card_ingrente">cheiro verde, cebola</li>
                            <li className="card_ingrente">3 cenouras grande</li>
                        </ul>
                </div>
            </>
        );
    }
}

export default Card;