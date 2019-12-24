class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.grid = new Array(this.width);
        for (let i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(this.height);
        }

        for (let i = 0; i < this.width; i++)
            for (let j = 0; j < this.height; j++)
                if (i == 0 || i == this.width - 1 || j == 0 || j == this.height - 1)
                    this.grid[i][j] = new Block('grey', i, j, 1, 1);
                else
                    this.grid[i][j] = new Block('transparent', i, j, 1, 1);
    }

    cleanLine (l) {
        for (let i = 1; i < this.width-1; i++)
            this.grid[i][l] = new Block('transparent', i, l, 1, 1);
        this.moveDown(l);
    }

    checkLine(l) {
        let empty = 0;
        for (let i = 0; i < this.width; i++)
            if(this.grid[i][l].color == 'transparent')
                empty++;
        if(empty == 0)
            this.cleanLine(l);
    }

    moveDown (y) {
        for(let j = y; j > 1; j--)
            for (let i = 1; i < this.width-1; i++){
                this.grid[i][j] = new Block(this.grid[i][j-1].color, i, j, 1, 1);
                this.grid[i][j-1] = new Block('transparent', i, j-1, 1, 1);
            }
    }

    update() {
        for (let j = 1; j < this.height-1; j++)
            this.checkLine(j);
    }

    draw(ctx) {
        for (let i = 0; i < this.width; i++)
            for (let j = 0; j < this.height; j++)
                this.grid[i][j].draw(ctx);

    }
}
