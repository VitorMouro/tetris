class Piece {
    constructor() {
        this.pieces = [

            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],     //      X
            [0, 0, 1, 0, 0],     //      X
            [0, 0, 1, 0, 0],     //      X
            [0, 0, 1, 0, 0]],    //      X

            [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],    //
            [0, 0, 1, 1, 0],    //      X X
            [0, 0, 1, 1, 0],    //      X X
            [0, 0, 0, 0, 0]],   // 

            [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],   //
            [0, 0, 1, 1, 1],   //      X X X
            [0, 0, 1, 0, 0],   //      X
            [0, 0, 0, 0, 0]],  //

            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],   //      X
            [0, 0, 1, 1, 1],   //      X X X
            [0, 0, 0, 0, 0],   //
            [0, 0, 0, 0, 0]],  //

            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],   //      X
            [0, 0, 1, 1, 0],   //      X X
            [0, 0, 0, 1, 0],   //        X
            [0, 0, 0, 0, 0]],  //

            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],   //        X
            [0, 1, 1, 0, 0],   //      X X
            [0, 1, 0, 0, 0],   //      X
            [0, 0, 0, 0, 0]],  //

            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],   //      X
            [0, 0, 1, 1, 0],   //      X X
            [0, 0, 1, 0, 0],   //      X
            [0, 0, 0, 0, 0]],  //

        ];
        this.colors = [
            'red',
            'blue',
            'green',
            'yellow',
            'purple',
            'orange',
            'cyan'
        ];
        this.id = Math.floor(Math.random() * 7);
        this.blocks = this.pieces[this.id];
        this.color = this.colors[this.id];
        this.position = {
            x: 0,
            y: 0
        };

        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.blocks[i][j] == 1) {
                    this.blocks[i][j] = new Block(this.color, this.position.x + i, this.position.y + j, 1, 1);
                } else {
                    this.blocks[i][j] = null;
                }

    }

    update(dir) {
        if(dir == 'down')
            console.log('Down');
        else if(dir == 'right')
            console.log('Right');
        else if(dir == 'left')
            console.log('Left');
    }

    draw(ctx) {
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.blocks[i][j] != null)
                    this.blocks[i][j].draw(ctx);
    }
}