import {Component} from "react";
export default class NumberOnclick extends Component{
    constructor(props) {
        super(props);
        this.state={
            number:0
        };
    }
    increase=()=>{
        this.setState({number: this.state.number+1});
    };
    decrease=()=>{
        this.setState({number: this.state.number-1})
    };
    render() {
        return(
            <div style={{textAlign:"center",padding:30,color:"red"}}>
                <button onClick={this.increase}>cong</button>
                <span style={{padding:10}}>{this.state.number}</span>
                <button onClick={this.decrease}>tru</button>
            </div>
        )
    }
}