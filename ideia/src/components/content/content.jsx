import React from 'react';
import { Component } from 'react';

import Car from '../../assets/car.jpg'
import Carro from '../../assets/carro.jpg'


import './styleContent.css';
class Content extends Component{
    render(){
        return (
            <>
                <section className="content">
                    <h1 className="title">Copper é uma empresa destinada a fazer a vontade dos seus clientes</h1>
                    <div className="card">
                        <img className="card_img" src={Car} alt="img carro card" />
                        <div className="card_line" />
                        <p className="card_text">Carro modelo tal top maravilhoso</p>
                        <a href="https://renegade.jeep.com.br/#/" className="card_button">
                            <p className="button_text">ADQUIRIR</p>
                        </a>
                    </div>
                    <div className="card">
                        <img className="card_img" src={Carro} alt="img carro card 2 " />
                        <div className="card_line" />
                        <p className="card_text">Carro modelo tal top maravilhoso</p>
                        <a href="https://renegade.jeep.com.br/#/" className="card_button">
                            <p className="button_text">ADQUIRIR</p>
                        </a>
                    </div>
                </section>  
            </>
        );
    }
}

export default Content;