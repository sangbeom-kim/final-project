//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

class sqr2 {
  constructor(x, y, size, delay, boss) {
    this.x = x
    this.y = y
    this.z = 0
    this.h = 0
    this.size = size
    this.count = 10
    this.delay = delay
    this.boss = boss
  }
  draw() {
    let i = 0
    this.z += 100
    if (this.boss == undefined) {
      this.h += 5
    }
    push()
    fill(255, 0, 0, 100)
    rect(this.x + this.h, -this.delay * 1000 + 2000 + this.z, 50 * this.size, 5000)
    fill(255, 0, 0)
    rect(this.x + this.h, -this.delay * 1000 + this.z, 50 * this.size, 4000)
    pop()
  }
  update() {
    let hit = RC(this.x + this.h, -this.delay * 1000 + this.z, 50 * this.size, 4000, U.position.x, U.position.y, 50)
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