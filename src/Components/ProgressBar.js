import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: silver;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
   width: ${props => props.percentage}%;
    height: 100%;
    background-color: darkgreen;
    border-radius: 8px;
  transition: width 1s ease-in-out;
`;

export default class ProgressBar extends React.Component {
    render(){
        return(
            <Track>
                <Thumb percentage={0 + this.props.percentage}/>
            </Track>
        );
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
};