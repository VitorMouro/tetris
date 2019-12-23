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
        this.config = this.pieces[this.id];
        this.color = this.colors[this.id];
        this.position = {
            x: 0,
            y: 0
        };

        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.config[i][j] == 1) {
                    this.config[i][j] = new Block(this.color, this.position.x + i, this.position.y + j, 1, 1);
                } else {
                    this.config[i][j] = null;
                }

    }

    rotateCounterClockwise(a) {
        var n = a.length;
        for (var i = 0; i < n / 2; i++) {
            for (var j = i; j < n - i - 1; j++) {
                var tmp = a[i][j];
                a[i][j] = a[j][n - i - 1];
                a[j][n - i - 1] = a[n - i - 1][n - j - 1];
                a[n - i - 1][n - j - 1] = a[n - j - 1][i];
                a[n - j - 1][i] = tmp;
            }
        }
        return a;
    }

    rotateClockwise(a) {
        var n = a.length;
        for (var i = 0; i < n / 2; i++) {
            for (var j = i; j < n - i - 1; j++) {
                var tmp = a[i][j];
                a[i][j] = a[n - j - 1][i];
                a[n - j - 1][i] = a[n - i - 1][n - j - 1];
                a[n - i - 1][n - j - 1] = a[j][n - i - 1];
                a[j][n - i - 1] = tmp;
            }
        }
        return a;
    }

    rotate() {
        this.rotateClockwise(this.config);
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.config[i][j]) {
                    this.config[i][j].position.x = (this.position.x + i) * cellSize;
                    this.config[i][j].position.y = (this.position.y + j) * cellSize;
                }
    }

    unrotate() {
        this.rotateCounterClockwise(this.config);
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.config[i][j]) {
                    this.config[i][j].position.x = (this.position.x + i) * cellSize;
                    this.config[i][j].position.y = (this.position.y + j) * cellSize;
                }
    }

    canRotate() {
        this.rotateClockwise(this.config);
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.config[i][j] && (this.position.x + i) >= 0 && (this.position.y + j) >= 0)
                    if (board.grid[this.position.x + i][this.position.y + j].color != 'transparent') {
                        this.rotateCounterClockwise(this.config);
                        return false;
                    }
        this.rotateCounterClockwise(this.config);
        return true;
    }

    canMove(dir) {
        if (dir == 'right') {
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j] && board.grid[this.position.x + i + 1][this.position.y + j].color != 'transparent')
                        return false;
            return true;
        }
        if (dir == 'left') {
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j] && board.grid[this.position.x + i - 1][this.position.y + j].color != 'transparent')
                        return false;
            return true;
        }
        if (dir == 'down') {
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j] && board.grid[this.position.x + i][this.position.y + j + 1].color != 'transparent')
                        return false;
            return true;
        }
    }

    move(dir) {
        if (dir == 'right') {
            this.position.x += 1;
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j]) {
                        this.config[i][j].position.x = (this.position.x + i) * cellSize;
                    }
        } else if (dir == 'left') {
            this.position.x -= 1;
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j]) {
                        this.config[i][j].position.x = (this.position.x + i) * cellSize;
                    }
        } else if (dir == 'down') {
            this.position.y += 1;
            for (let i = 0; i < 5; i++)
                for (let j = 0; j < 5; j++)
                    if (this.config[i][j]) {
                        this.config[i][j].position.y = (this.position.y + j) * cellSize;
                    }
        }
    }

    update(dir) {
        if (dir == 'right' && this.canMove(dir)) {
            this.move(dir);
        }
        else if (dir == 'left' && this.canMove(dir)) {
            this.move(dir);
        }
        else if (dir == 'down' && this.canMove(dir)) {
            this.move(dir);
        }
        else if (dir == 'space') {
            if (this.id != 1)
                if (this.canRotate())
                    this.rotate();
                else {
                    if (this.canMove('right')) {
                        this.move('right');
                        if (this.canRotate()) {
                            this.rotate();
                            return;
                        } else {
                            this.move('left');
                        }
                    } else if (this.canMove('left')) {
                        this.move('left');
                        if (this.canRotate()) {
                            this.rotate();
                            return;
                        } else {
                            this.move('right');
                        }
                    }
                    if (this.canMove('right')) {
                        this.move('right');
                        if (this.canMove('right')) {
                            this.move('right');
                            if (this.canRotate())
                                this.rotate();
                            else {
                                this.move('left');
                                this.move('left');
                            }
                        } else {
                            this.move('left');
                        }
                    } else if (this.canMove('left')) {
                        this.move('left');
                        if (this.canMove('left')) {
                            this.move('left');
                            if (this.canRotate())
                                this.rotate();
                            else {
                                this.move('right');
                                this.move('right');
                            }
                        } else {
                            this.move('right');
                        }
                    }

                }

        }
    }

    draw(ctx) {
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (this.config[i][j] != null)
                    this.config[i][j].draw(ctx);
    }
}