import React from 'react';
import { Component } from 'react';
import Card from '../cards/cards';

import StrongOnOff from '../../assets/estrogonofe_de_carne.jpg';

import './styleContent.css';
class Content extends Component{
    render(){
        return (
            <>
                <section className="content">
                    <h1 className="title">Aqui você verá as melhores receitas de todos os tempos.</h1>
                   
                    <Card img={StrongOnOff} title="Strogonofe de carne com cenoura." />
                </section>  
            </>
        );
    }
}

export default Content;