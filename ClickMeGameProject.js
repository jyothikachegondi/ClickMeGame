import React, { Component } from 'react'
import './clickgameproject.css'
export class ClickMeGameProject extends Component {
    constructor(){
        super();
        this.state={time:10,score:0}
    }
    handleClick(){
        if(this.state.time!=0){
        this.setState({
              score:this.state.score+1
        })
    }}
    handleClick1(){
        this.setState({
            time:10,
            score:0,
            message:''
        })
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time==0)
        {
             this.setState({
                   message:"Enough I can't be beaten by you",
                   
             })
           
        }
        
        else
        {
            this.setState({
                time:this.state.time-1,
            })
        }
        
    }
  render() {
    return (
      <div id="pic">
        <div >
           <h2 Style="color:white"><p>Click the picture as many times as you can in {this.state.time} wacky seconds!</p></h2>
            <img onClick={this.handleClick.bind(this)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAfbHIJFDVuALuGHSg70SKxBvC0rCjGHU4A&usqp=CAU"/>
            <h2 ><p>Score:{this.state.score}</p> </h2>
           <h2 Style="color:white"> <p>{this.state.message}</p> </h2>
            <button onClick={this.handleClick1.bind(this)}>Restart</button>
        </div>
        </div>
    )
  }
}

export default ClickMeGameProject