import React from 'react';
import { Component } from 'react';

import Car from '../../assets/car.jpg'
import Carro from '../../assets/carro.jpg'

import Card from '../cards/cards';


import './styleContent.css';
class Content extends Component{
    render(){
        return (
            <>
                <section className="content">
                    <h1 className="title">Copper é uma empresa destinada a fazer a vontade dos seus clientes</h1>
                   
                    <Card img={Car} text="Carro modelo tal top maravilhoso" href="https://renegade.jeep.com.br/#/" />
                    <Card img={Carro} text="Carro modelo tal top maravilhoso" href="https://renegade.jeep.com.br/#/" />
                   
                </section>  
            </>
        );
    }
}

export default Content;