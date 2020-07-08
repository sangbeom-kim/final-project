//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

class gear {
  constructor(x, y, size, side, way) {
    this.x = x
    this.y = y
    this.size = size
    this.side = side
    this.way = way
    this.x1 = 0
    this.y1 = 0
    this.angle = 0
  }
  draw() {
    if (this.way == 1) {
      this.angle += 0.05
    } else if (this.way == 2) {
      this.angle -= 0.05
    }
    if (this.side == 2) {
      this.y1 += 5
    }
    push()
    translate(this.x, this.y + this.y1)
    rotate(this.angle)
    noStroke()
    fill(255, 0, 0)
    star(0, 0, 40 * this.size, 50 * this.size, 30)
    ellipse(0, 0, 40 * this.size, 40 * this.size)
    pop()
  }
  update() {
    let hit = CC(this.x, this.y + this.y1, 80 * this.size, U.position.x, U.position.y, 50)
    if (boost1 == 0 && boost2 == 0 && hit == true) {
      life -= 1
    }
    if (life == 2 && onehit == false) {
      damage1 = true
    }
    if (life == 1 && twohit == false) {
      damage2 = true
    }
    if (life == 0) {
      gameover = true
    }
    if (damage1 == true) {
      boost1 += 1
      if (boost1 >= 10000) {
        damage1 = false
        boost1 = 0
        onehit = true
      }
    }
    if (damage2 == true) {
      boost2 += 1
      if (boost2 >= 10000) {
        damage2 = false
        boost2 = 0
        twohit = true
      }
    }
  }
}