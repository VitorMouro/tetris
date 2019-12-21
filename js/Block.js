class Block {

    constructor(color, x, y, width, height) {
        this.offset = 1/12*cellSize;
        this.color = color;
        this.position = {
            x: x * cellSize,
            y: y * cellSize
        }
        this.width = width * cellSize;
        this.height = height * cellSize;

        this.colors = {
            grey: ['#ABB2B9 ', '#808B96', '#566573'],
            red: ['#F5B7B1', '#F1948A', '#EC7063'],
            blue: ['#AED6F1', '#85C1E9', '#5DADE2'],
            green: ['#ABEBC6', '#82E0AA', '#58D68D'],
            yellow: ['#FAD7A0', '#F8C471', '#F5B041'],
            purple: ['#D2B4DE', '#BB8FCE', '#A569BD'],
            orange: ['#EDBB99', '#E59866', '#DC7633'],
            cyan: ['#A2D9CE', '#73C6B6', '#45B39D'],
            black: ['#000000', '#000000', '#000000'],
            transparent: ['transparent', 'transparent', 'transparent'],
        };



    }

    draw(ctx) {

        // Light triangle
        ctx.fillStyle = this.colors[this.color][0];
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x+this.width, this.position.y);
        ctx.lineTo(this.position.x, this.position.y+this.height);
        ctx.lineTo(this.position.x, this.position.y);
        ctx.fill();

        // Dark triangle 
        ctx.fillStyle = this.colors[this.color][2];
        ctx.beginPath();
        ctx.moveTo(this.position.x+this.width, this.position.y+this.height);
        ctx.lineTo(this.position.x+this.width, this.position.y);
        ctx.lineTo(this.position.x, this.position.y+this.height);
        ctx.lineTo(this.position.x+this.width, this.position.y+this.height);
        ctx.fill();

        // Rect
        ctx.fillStyle = this.colors[this.color][1];
        ctx.fillRect(this.position.x+this.offset, this.position.y+this.offset, this.width-2*this.offset, this.height-2*this.offset);
        if(this.color == 'black')
            ctx.fillRect(this.position.x-1, this.position.y-1, this.width+2, this.height+2);

    }
}