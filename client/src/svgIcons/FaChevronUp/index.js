import React from 'react';

class ChevronUp extends React.Component {

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
                    <path style={{fill: styles.color}} d="m37.56714285714286 29.71l-3.7057142857142864 3.682857142857145q-0.42428571428571615 0.42428571428571615-1.0042857142857144 0.42428571428571615t-1.0042857142857144-0.42428571428571615l-11.852857142857147-11.852857142857147-11.852857142857143 11.85285714285714q-0.4242857142857144 0.42428571428571615-1.0042857142857144 0.42428571428571615t-1.0042857142857144-0.42428571428571615l-3.7057142857142855-3.6828571428571415q-0.4242857142857144-0.4242857142857126-0.4242857142857144-1.014285714285716t0.4242857142857144-1.0171428571428578l16.562857142857144-16.539999999999996q0.4242857142857126-0.4242857142857126 1.0042857142857144-0.4242857142857126t1.0042857142857144 0.4242857142857144l16.56285714285714 16.54q0.42428571428571615 0.4242857142857126 0.42428571428571615 1.0142857142857125t-0.42428571428571615 1.0171428571428578z"></path>
                </svg>
            </div>
        );
    }
}

export default ChevronUp;