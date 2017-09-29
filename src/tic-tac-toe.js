class TicTacToe {
    constructor() {
        this.table = [
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ];
        this.currentPlayer = 'x';
        this.emptyCells = 9;
        this.winner = null;
    }

    wasted() {
        for(let i = 0; i < 3; i++)
        {
            if (this.table[i][0] === this.currentPlayer && this.table[i][1] === this.currentPlayer && this.table[i][2] === this.currentPlayer) {this.winner = this.currentPlayer; return;}

            if (this.table[0][i] === this.currentPlayer && this.table[1][i] === this.currentPlayer && this.table[2][i] === this.currentPlayer) {this.winner = this.currentPlayer; return;}
        }

        if(this.table[0][0] === this.currentPlayer && this.table[1][1] === this.currentPlayer && this.table[2][2] === this.currentPlayer) {this.winner = this.currentPlayer; return;}

        if(this.table[2][0] === this.currentPlayer && this.table[1][1] === this.currentPlayer && this.table[0][2] === this.currentPlayer) {this.winner = this.currentPlayer; return;}
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.table[rowIndex][columnIndex])
        {
            this.table[rowIndex][columnIndex] = this.currentPlayer;
            --this.emptyCells;
            this.wasted();
            this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
        }
    }

    getCurrentPlayerSymbol() { return this.currentPlayer; }

    isFinished() {
        if(this.winner || !this.emptyCells)
            return true;
        return false;
    }

    getWinner() {return this.winner;}

    noMoreTurns() {
        if(this.emptyCells)
            return false;
        return true;
    }

    isDraw() {
        if(!this.emptyCells && !this.winner)
            return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {return (this.table[rowIndex][colIndex]);}
}
module.exports = TicTacToe;
