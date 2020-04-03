import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" style={{fontSize:"25px"}} text={['Hii, I am Karan Bajrang']} speed={100} eraseDelay={750}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    