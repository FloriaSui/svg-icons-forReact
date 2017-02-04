import React, { Component } from 'react';
import '../App.css';
import DoubleDown from '../svgIcons/FaAngleDoubleDown/index';
import DoubleLeft from '../svgIcons/FaAngleDoubleLeft/index';
import DoubleRight from '../svgIcons/FaAngleDoubleRight/index';
import DoubleUp from '../svgIcons/FaAngleDoubleUp/index';
import Down from '../svgIcons/FaAngleDown/index';
import Left from '../svgIcons/FaAngleLeft/index';
import Right from '../svgIcons/FaAngleRight/index';
import Up from '../svgIcons/FaAngleUp/index';
import Ban from '../svgIcons/FaBan/index';
import Bar from '../svgIcons/FaBar/index';
import ChainBroken from '../svgIcons/FaChainBroken/index';

class SvgIcons extends Component {

    render() {
        return (
            <div className="iconsStyle">
                <ul>
                    <li><DoubleDown/><p>DoubleDown</p></li>
                    <li><DoubleLeft/><p>DoubleLeft</p></li>
                    <li><DoubleRight/><p>DoubleRight</p></li>
                    <li><DoubleUp/><p>DoubleUp</p></li>
                    <li><Down/><p>DoubleDown</p></li>
                    <li><Left/><p>Left</p></li>
                    <li><Right/><p>Right</p></li>
                    <li><Up/><p>Up</p></li>
                    <li><Ban/><p>Ban</p></li>
                    <li><Bar/><p>Bar</p></li>
                    <li><ChainBroken/><p>ChainBroken</p></li>
                    <li><Chain/><p>Chain</p></li>
                </ul>
            </div>
        );
    }
}

export default SvgIcons;