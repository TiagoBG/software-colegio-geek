import React from 'react';
import '../../styles/styles.css';
import Logo from '../../images/Photo_1611809461345.png';

const Header=()=> {
    return (
        <div>
            <nav className="navbar navbar-light nav_Bar">
                <div className="container-fluid">
                    <img width="60px" height="60px" src={Logo} alt="Logo_Colegio_Geek"/>
                    <span className="letra_Nav">Colegio Geek</span>
                </div>
            </nav>
        </div>
        );
};
export default Header;