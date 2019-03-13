function tank(posX, posY, dir, size, speedMod) {
    this.x = posX;
    this.y = posY;
    this.dir = dir;
    this.size = size;
    this.speed = speedMod;

    this.move = function move(input) {
        if (input === 'up') {
            this.dir = 'up';
            this.y -= 4.2 * this.speed;
        } else if (input === 'left') {
            this.dir = 'left';
            this.x -= 4.2 * this.speed;
        } else if (input === 'down') {
            this.dir = 'down';
            this.y += 4.2 * this.speed;
        } else if (input === 'right') {
            this.dir = 'right';
            this.x += 4.2 * this.speed;
        } else if (input === 'upleft') {
            this.dir = 'upleft';
            this.x -= 3.2 * this.speed;
            this.y -= 3.2 * this.speed;
        } else if (input === 'downleft') {
            this.dir = 'downleft';
            this.x -= 3.2 * this.speed;
            this.y += 3.2 * this.speed;
        } else if (input === 'upright') {
            this.dir = 'upright';
            this.x += 3.2 * this.speed;
            this.y -= 3.2 * this.speed;
        } else if (input === 'downright') {
            this.dir = 'downright';
            this.x += 3.2 * this.speed;
            this.y += 3.2 * this.speed;
        }
    }
}