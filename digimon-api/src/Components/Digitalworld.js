import React, {Component} from 'react';

class Digitalworld extends Component {
    handleCatch = () => {
        const {digimon} = this.props;
        let newDigimon = {
            name: digimon.name,
            image: digimon.img
            
        }

        this.props.catchFn(newDigimon);
        this.props.refreshFn();

    }

    render(){
        console.log(this.props.digimon)
        return (
            <div onClick={this.handleCatch}>
                <img src={this.props.digimon.img} alt={this.props.digimon.name}/>
                <p>{this.props.digimon.name}</p>
            </div>
        )
    }
}

export default Digitalworld;