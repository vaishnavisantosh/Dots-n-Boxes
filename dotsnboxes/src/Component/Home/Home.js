import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    state = {
        player1: '',
        player2: '',
        selected:''

    }

    letPlayGame = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state
            [event.target.name] = value
        })

      //  this.setState({selected:value})


        localStorage.setItem('player1', this.state.player1);
        localStorage.setItem('player2', this.state.player2);
        localStorage.setItem('grid',this.state.selected);

        console.log("player1", this.state);
       // console.log("player2", this.state.player2);


    }

    gotoGame = () => {
        this.props.history.push('/game');

    }

    setGridvalue = (gridValue) => {
        this.setState({selected:gridValue})

        localStorage.setItem('grid', gridValue)

    }

    


    render() {
        return (
            <>
                <form>
                    <p> Let's Play</p>
                    <input
                        name='player1'
                        placeholder='enter 1st Player name'
                        value={this.state.player1}
                        onChange={(event) => this.letPlayGame(event)}
                        type='text'
                    />
                    <input
                        name='player2'
                        placeholder='enter 2nd Player name'
                        value={this.state.player2}
                        onChange={(event) => this.letPlayGame(event)}
                        type='text'
                    />
                    <label>
                        <input type="radio" value='4' 
                        checked={this.state.selected==='4'}
                        onChange={(event)=>this.letPlayGame(event)}
                        name="selected" />
                        4 X 4
                    </label>
                    <label>
                    <input
                     type="radio" 
                     value="6" 
                     checked={this.state.selected==='6'}
                     name="selected"
                     onChange={(event)=>this.letPlayGame(event)} />
                        6 X 6
                    </label>
                    <label>
                    <input type="radio" value="8"  onChange={(event)=>this.letPlayGame(event)} checked={this.state.selected==='8'}  name="selected" />
                        8 X 8
                    </label>

                    <button onClick={this.gotoGame}>START GAME </button>
                </form>
            </>

        )
    }
}


export default withRouter(Home);