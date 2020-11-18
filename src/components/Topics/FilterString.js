import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            names: ['Jared','Joey','Katie','Kim','Heather','Cory','Kaylie','Bash','Lucas'],
            userInput:'',
            filteredArray:[]
        }

    }

    handleChange(e){
        this.setState({userInput: e})
    }

    handleFilter(userInput){
        let names = this.state.names
        let filteredArray =[]
        for(let i=0; i<names.length; i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names:: {JSON.stringify(this.state.names)}</span>
                <input className='inputLine' onChange= {(e)=>this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.handleFilter(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterStringRB'>Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString