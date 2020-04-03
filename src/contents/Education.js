import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BE Electronics Engineering" where="BITS PILANI" from="July 2015" to="Present"/>
            <Widecard title="MSc Mathematics" where="BITS PILANI" from="July 2015" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    