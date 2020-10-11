import React, { Component } from 'react';

import './styleCard.css';

class Card extends Component{
    // constructor(props){
    //     super(props);
        
    // }
    render(){
        return(
            <>
                 <div className="card">
                        <img className="card_img" src={this.props.img} alt="img carro card" />
                        <div className="card_line" />
                        <p className="card_text">{this.props.text}</p>
                        <a href={this.props.href} className="card_button">
                            <p className="button_text">ADQUIRIR</p>
                        </a>
                </div>
            </>
        );
    }
}

export default Card;