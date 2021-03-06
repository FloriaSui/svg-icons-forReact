import React from 'react';

class Right extends React.Component {

    render() {
        let styles = {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            color: "inherit",
            ...this.props.style
        };

        let top = 0;
        if (styles.height.indexOf('%') > -1) {
            top = 60 * parseInt(styles.height, 10) / 100;
        } else {
            top = parseInt(styles.height, 10) * 0.5;
        }

        top += "px";

        return(
            <div style={{width:"auto",height:"100%",textAlign:"center",display:'inline-block'}}>
                <svg {...styles} style={{position: "relative",top: "calc( 50% - "+top+" )",...this.props.svgStyle}}>
                    <path style={{fill: styles.color}} d="m26.13857142857143 21.42857142857143q0 0.28999999999999915-0.2228571428571442 0.5142857142857125l-10.4 10.399999999999999q-0.22285714285714242 0.2228571428571442-0.5142857142857142 0.2228571428571442t-0.5114285714285707-0.2228571428571442l-1.1142857142857139-1.1142857142857139q-0.2242857142857151-0.2242857142857133-0.2242857142857151-0.5142857142857125t0.22285714285714242-0.5142857142857125l8.772857142857141-8.771428571428572-8.772857142857141-8.771428571428574q-0.22571428571428598-0.2257142857142842-0.22571428571428598-0.5142857142857142t0.22285714285714242-0.5142857142857142l1.1171428571428574-1.1142857142857139q0.22285714285714242-0.22285714285714242 0.5142857142857142-0.22285714285714242t0.5114285714285707 0.22285714285714242l10.4 10.4q0.2242857142857133 0.2242857142857133 0.2242857142857133 0.514285714285716z"></path>
                </svg>
            </div>
        );
    }
}

export default Right;