import React, { Component } from 'react'
import './Calculations.css'

class Calculations extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count1:0,
             count2:0,
             count3:0,
             count4:0,
             totalResult:0,
             value1:10,
             value2:20,
             value3:-5,
             value4:-10
        }
    }
    
    clicked1(){
        this.setState(prevState=>({
            count1:prevState.count1+1
        }),console.log(this.state.count1+1))
    }

    clicked2(){
        this.setState(prevState=>({
            count2:prevState.count2+1
        }),console.log(this.state.count2+1))
    }

    clicked3(){
        this.setState(prevState=>({
            count3:prevState.count3+1
        }),console.log(this.state.count3+1))
    }

    clicked4(){
        this.setState(prevState=>({
            count4:prevState.count4+1
        }),console.log(this.state.count4+1))
    }

    operation1(){
        this.setState(prevState=>({
            totalResult:prevState.totalResult+this.state.value1
        }))
    }

    operation2(){
        this.setState(prevState=>({
            totalResult:prevState.totalResult+this.state.value2
        }))
    }

    operation3(){
        this.setState(prevState=>({
            totalResult:prevState.totalResult+this.state.value3
        }))
    }

    operation4(){
        this.setState(prevState=>({
            totalResult:prevState.totalResult+this.state.value4
        }))
    }

    render() {
        return (
            <div>
                <p>+10</p>
                <button type="button" className="btn btn-primary btn-space" onClick={()=>{this.clicked1(); this.operation1()}}>{this.state.count1}</button>
                <hr></hr>
                <p>+20</p>
                <button type="button" className="btn btn-primary btn-space" onClick={()=>{this.clicked2(); this.operation2()}}>{this.state.count2}</button>
                <hr></hr>
                <p>-5</p>
                <button type="button" className="btn btn-primary btn-space" onClick={()=>{this.clicked3(); this.operation3()}}>{this.state.count3}</button>
                <hr></hr>
                <p>-10</p>
                <button type="button" className="btn btn-primary btn-space" onClick={()=>{this.clicked4(); this.operation4()}}>{this.state.count4}</button>
                <hr></hr>
                <h2>Total Result: {this.state.totalResult}</h2>
            </div>
        )
    }
}

export default Calculations
