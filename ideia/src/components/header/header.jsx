import React, { Component } from 'react';
import './styleHeader.css'

import Logo from '../../assets/chapeuCozinha.png';

class Header extends Component{
    render(){
        return(
            <>
                <section className="container">
                    <header className="menu">
                            <img src={Logo} className="menu_img" alt="img_menu"/>
                            <ul className="menu">
                                <li className="menu_item">home</li>
                                <li className="menu_item">receitas</li>
                                <li className="menu_item">quem somos</li>
                            </ul>
                    </header>
                </section>
            </>
        );
    }
}

export default Header;