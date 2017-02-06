import React, { Component } from 'react';
import '../App.css';
import DoubleDown from '../svgIcons/FaAngleDoubleDown';
import DoubleLeft from '../svgIcons/FaAngleDoubleLeft';
import DoubleRight from '../svgIcons/FaAngleDoubleRight';
import DoubleUp from '../svgIcons/FaAngleDoubleUp';
import Down from '../svgIcons/FaAngleDown';
import Left from '../svgIcons/FaAngleLeft';
import Right from '../svgIcons/FaAngleRight';
import Up from '../svgIcons/FaAngleUp';
import Ban from '../svgIcons/FaBan';
import Bar from '../svgIcons/FaBar';
import ChainBroken from '../svgIcons/FaChainBroken';
import Chain from '../svgIcons/FaChain';
import CheckCircleO from '../svgIcons/FaCheckCircleO';
import CheckCircle from '../svgIcons/FaCheckCircle';
import CheckSquareO from '../svgIcons/FaCheckSquareO';
import CheckSquare from '../svgIcons/FaCheckSquare';
import Check from '../svgIcons/FaCheck';
import ChevronDown from '../svgIcons/FaChevronDown';
import ChevronLeft from '../svgIcons/FaChevronLeft';
import ChevronRight from '../svgIcons/FaChevronRight';
import ChevronUp from '../svgIcons/FaChevronUp';
import Close from '../svgIcons/FaClose';
import Cog from '../svgIcons/FaCog';
import Cogs from '../svgIcons/FaCogs';
import CommentingO from '../svgIcons/FaCommentingO';
import Commenting from '../svgIcons/FaCommenting';

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
                    <li><CheckCircleO/><p>CheckCircleO</p></li>
                    <li><CheckCircle/><p>CheckCircle</p></li>
                    <li><CheckSquareO/><p>CheckSquareO</p></li>
                    <li><CheckSquare/><p>CheckSquare</p></li>
                    <li><Check/><p>Check</p></li>
                    <li><ChevronDown/><p>ChevronDown</p></li>
                    <li><ChevronLeft/><p>ChevronLeft</p></li>
                    <li><ChevronRight/><p>ChevronRight</p></li>
                    <li><ChevronUp/><p>ChevronUp</p></li>
                    <li><Close/><p>Close</p></li>
                    <li><Cog/><p>Cog</p></li>
                    <li><Cogs/><p>Cogs</p></li>
                    <li><CommentingO/><p>CommentingO</p></li>
                    <li><Commenting/><p>Commenting</p></li>
                </ul>
            </div>
        );
    }
}

export default SvgIcons;