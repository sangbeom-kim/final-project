//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

class tri {
  constructor(x, y, size, g) {
    this.poly = []
    this.x = x
    this.y = y
    this.size = size
    if (x >= 0) {
      this.z = x - 640
    } else if (x < 0) {
      this.z = -x + 700 - 640
    }
  }
  draw() {
    let i = 0
    if (gamestate == 2) {
      this.z -= 5
    } else if (gamestate == 3) {
      this.z -= 15
    }
    push()
    noStroke()
    fill('red')
    if (this.y > 250) {
      this.poly[0] = createVector(this.x - 50, this.y + this.z)
      this.poly[1] = createVector(this.x + 50, this.y + this.z)
      this.poly[2] = createVector(this.x, this.y - 110 * this.size + this.z)
      beginShape()
      for (i = 0; i < this.poly.length; i++) {
        vertex(this.poly[i].x, this.poly[i].y)
      }
      endShape(CLOSE)
    } else if (this.y <= 250) {
      this.poly[0] = createVector(this.x - 50, this.y - this.z)
      this.poly[1] = createVector(this.x + 50, this.y - this.z)
      this.poly[2] = createVector(this.x, this.y + 110 * this.size - this.z)
      beginShape()
      for (i = 0; i < this.poly.length; i++) {
        vertex(this.poly[i].x, this.poly[i].y)
      }
      endShape(CLOSE)
    }
    pop()
    if (gamestate == 2) {
      if (this.z <= 10) {
        this.z = 10
      }
    } else if (gamestate == 3) {
      if (this.z <= 15) {
        this.z = 15
      }
    }
  }
  update() {
    let hit = CP(U.position.x, U.position.y, 50, this.poly)
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