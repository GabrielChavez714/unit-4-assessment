
import React, {Component} from "react";
import axios from "axios";
import Digitalworld from "./Digitalworld";

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            feralDigimon: []
        }
    }

    componentDidMount(){
        this.getFeralDigimon();
    }

    getFeralDigimon = () => {
        axios.get('/api/feral-digimon')
            .then(res => {
                this.setState({feralDigimon: res.data});
            })
            .catch(error => console.log(error));
    }

    render(){
        console.log(this.state.feralDigimon)
        const mappedDigimon = this.state.feralDigimon.map((digimon, i) => (
            <Digitalworld
                key={i}
                digimon={digimon}
                catchFn={this.props.catchFn}
                refreshFn={this.getFeralDigimon} />
        ))

        return (
            <div className='digimon-flex'>
                {mappedDigimon}
            </div>
        )
    }
}

export default Finder;