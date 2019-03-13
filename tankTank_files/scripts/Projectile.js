function projectile(posX, posY, canW, canH, dir, active) {
    this.active = true;

    this.x = posX;
    this.y = posY;
    this.width = canW;
    this.height = canH;
    this.dir = dir;
    this.active = active;

    this.inBounds = function inBounds() {
        return this.x >= 0 && this.x <= canW && this.y >= 0 && this.y <= canH;
    }

    this.move = function move() {
        if (this.dir === 'up') {
            this.y -= 10;
        } else if (this.dir === 'upright') {
            this.x += 7;
            this.y -= 7;
        } else if (this.dir === 'right') {
            this.x += 10;
        } else if (this.dir === 'downright') {
            this.x += 7;
            this.y += 7;
        } else if (this.dir === 'down') {
            this.y += 10;
        } else if (this.dir === 'downleft') {
            this.x -= 7;
            this.y += 7;
        } else if (this.dir === 'left') {
            this.x -= 10;
        } else if (this.dir === 'upleft') {
            this.x -= 7;
            this.y -= 7;
        }
    }
}