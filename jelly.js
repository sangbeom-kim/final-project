//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

class jelly {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.position = new vec2(this.x, this.y)
    this.velocity = new vec2(0, 0)
    this.gravity = 10
    this.eye = 0
    this.s = 500
  }
  draw() {
    noStroke()
    if (damage1 == false && damage2 == false) {
      fill(135, 206, 250, 200)
    } else {
      fill(0, 0, 255, 200)
    }
    if (gamestate == 4 || gamestate == 5) {
      fill(0, 0, 255, 200)
    }
    ellipse(this.position.x, this.position.y, 60, 60)
    fill(255, 200)
    ellipse(this.position.x - 13, this.position.y, 20)
    ellipse(this.position.x + 13, this.position.y, 20)
    push()
    translate(this.position.x - 13, this.position.y)
    rotate(this.eye)
    fill(0, 220)
    ellipse(4, 0, 12)
    pop()
    push()
    translate(this.position.x + 13, this.position.y)
    rotate(this.eye)
    fill(0, 220)
    ellipse(4, 0, 12)
    pop()
    if (gamestate == 0) {
      let e = new vec2(mouseX - U.position.x, mouseY - U.position.y)
      this.eye = e.getAngle()
    }
    if (gamestate == 1) {
      let e = new vec2(this.s - U.position.x, 300 - U.position.y)
      this.eye = e.getAngle()
    }
    if (gamestate == 2) {
      this.s += 5
      let e = new vec2(this.s - U.position.x, 300 - U.position.y)
      this.eye = e.getAngle()
    }
    if (gamestate == 3 && b < 2700) {
      this.eye = eye + PI
    }
    if (gamestate == 3 && b >= 2700) {
      let e = new vec2(this.s - U.position.x, 450 - U.position.y)
      this.eye = e.getAngle()
    }
    if (gamestate == 4 || gamestate == 5) {
      this.eye = PI / 2
      push()
      fill(0, 0, 255, 200)
      arc(this.position.x - 13, this.position.y, 20, 20, PI, 5 * PI / 3, OPEN)
      arc(this.position.x + 13, this.position.y, 20, 20, 4 * PI / 3, 0, OPEN)
      pop()
    }
  }
  update() {
    this.position.addTo(this.velocity.x, this.velocity.y)
    if (this.fall()) {
      this.position.addTo(0, this.gravity);
    }

    if (this.fall() && this.position.y != 470) {
      this.velocity.multiplyBy(0.9);
    } else if (this.fall() && this.position.y == 470) {
      this.velocity.y = 0;
    } else {
      this.velocity.multiplyBy(0);
    }
    if (this.position.y > 470) {
      this.position.y = 470
    }
    if (gameover == false && end2 == false) {
      if (gamestate == 1 || gamestate == 2 || gamestate == 3) {
        if (keyIsDown(65)) {
          this.position.x -= 7
        }
        if (keyIsDown(68)) {
          this.position.x += 7
        }
      }
    }
  }
  jump() {
    if (!this.fall()) {
      this.velocity.y = -40
    }
    if (this.fall()) {
      this.velocity.y = -40
    }
  }
  drop() {
    if (this.fall()) {
      this.velocity.y = 40
    }
  }
  fall() {
    if (this.position.y != 470)
      return true
    return false
  }
}