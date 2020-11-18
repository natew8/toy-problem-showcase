import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    
    handleChange1(e){
        this.setState({number1: e})
    }

    handleChange2(e){
        this.setState({number2: e})
    }
    
    add(number1, number2){
        let sum = (+number1) + (+number2)
        this.setState({sum: sum})
    }
    
    
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e)=> this.handleChange1(e.target.value)}></input>
                <input className='inputLine' onChange={(e)=> this.handleChange2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum