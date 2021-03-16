

import react, {Component} from 'react';

class Digimon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <img src={this.props.digimon.img} alt={this.props.digimon.name}/>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                            <button onClick={() => this.handleEdit(this.props.digimon.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.digimon.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                        <img src={this.props.digimon.img} alt={this.props.digimon.name}/>
                    </div>

                )}
                <button onClick={() => this.props.releaseFn(this.props.digimon.id)}>Release</button>
            </div>
        )
    }
}

export default Digimon;