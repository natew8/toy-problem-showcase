import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput:'',
            palindrome:''
        }
    }

    handleChange(e){
        this.setState({userInput:e})
    }

    handleCheck(userInput){
        let forwards = userInput;
        let backwards = userInput.split('').reverse('').join('');
        if ( forwards === backwards ) {
        this.setState({ palindrome: 'true' });
        } else {
         this.setState({ palindrome: 'false' });
     }

    }
    
    
    
    render(){
        return(
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
        <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
             <button className='confirmationButton' onClick={()=>{this.handleCheck(this.state.userInput)}}>Check</button>
             <span className='resultsBox'>Palindrome:{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome