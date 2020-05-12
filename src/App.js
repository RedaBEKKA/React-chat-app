import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'
//Animation

import{
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages : {},
    pseudo: this.props.match.params.pseudo
  }


  messageRef = createRef()

  componentDidMount(){
    base.syncState('/',{
      context:this,
      state:'messages'
    })
  }

  componentDidUpdate(){
    const ref =this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = (messgae) =>{
    const messages  = {...this.state.messgaes}//copier le lmessage
    messages[`message-${Date.now()}`]=messgae
    Object
      .keys(messages)
      .slice(0,-10)
      .forEach(key => {
        messages[key] = null 
        
      });
    this.setState({messages})
  }

  isUser = pseudo => pseudo ===this.state.pseudo
  render () {
    const messag = Object
      .keys(this.state.messages)
      .map(key =>(
        <CSSTransition key={key} timeout={1000} classNames='fade'>
            <Message
            isUser={this.isUser}
            
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}/>
        </CSSTransition> 
      
      ))
    
   

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.messageRef}>
            <TransitionGroup className="message">
              {messag}
              
            </TransitionGroup>
            </div>
        </div>
        <Formulaire 
        length={150}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}
        />
        
      </div>
   
    )
  }
}

export default App
