import React from 'react';
import Square from './square';

export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    side() {
        return Math.sqrt( this.props.squares.length );
    }

    renderRow(row) {
        const cols = Array(this.side()).fill(null).map( (x, col) => {
            return this.renderSquare((row * this.side()) + col);  
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
        const rows = Array(this.side()).fill(null).map( (x, row) => {
            return this.renderRow(row);  
        });
 
        return (
            <div>{rows}</div>
        );
    }
}