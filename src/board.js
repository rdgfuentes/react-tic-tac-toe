import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: Math.sqrt( this.props.squares.length ),
        };
    }

    renderSquare(i) {
        return (
            <Square 
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderRow(row) {
        const cols = Array(this.state.side).fill(null).map( (x, col) => {
            return this.renderSquare((row * this.state.side) + col);  
        });
        return (
            <div 
                key={row}
                className="board-row"
                >
                {cols}
            </div>
        ); 
    }


    render() {
        const rows = Array(this.state.side).fill(null).map( (x, row) => {
            return this.renderRow(row);  
        });
 
        return (
            <div>{rows}</div>
        );
    }
}