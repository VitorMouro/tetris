class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.grid = new Array(this.width);
        for (let i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(this.height);
        }

        for (let i = 0; i < this.width; i++)
            for (let j = 0; j < height; j++)
                if(i == 0 || i == this.width-1 || j == 0 || j == this.height-1)
                    this.grid[i][j] = new Block('grey', i, j, 1, 1);
                else
                    this.grid[i][j] = new Block('transparent', i, j, 1, 1);
    }

    draw(ctx){
        for (let i = 0; i < this.width; i++)
            for (let j = 0; j < this.height; j++)
                this.grid[i][j].draw(ctx);

    }
}
