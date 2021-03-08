import React from 'react'
import Button from "../components/Button";
import hum from '../hum.jpg';

export default class Calvin extends React.Component {

    constructor() {
        super();
        this.state = {
            display: false,
            persons: [{
                id: 1,
                name: 'Calvin'
            }]
            
        }
    }

    // setState
    componentDidMount() {
     console.log(this.state.display);   
    }

    // componentDidMount
    // componentWillMount
    // componentWillReceiveProps
    // componentWillUnmount

    getCalvin() {
        // this.state.display = true;
        console.log('change calvin')
         this.setState({
            persons: [{
                id: 1,
                name: 'Bob'
            }],
            display: true
        })
    }

    render() {
        return <div>
                    <Button onClick={() => this.getCalvin() }>Buscar o melhor ouvinte</Button>
                    {
                        this.state.display ? 
                        <div> 
                            <h3> { this.state.persons[0].name}</h3>
                            <img src={hum} className="App-calvin" alt="calvin"/> 
                        </div>
                        : null
                        
                    }
                    
                </div>
                
    }
}