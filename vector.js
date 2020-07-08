//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

class vec2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  getAngle() {
    return atan2(this.y, this.x)
  }
  getLength() {
    return sqrt(this.x * this.x + this.y * this.y)
  }
  setAngle(angle) {
    var length = this.getLength()
    this.x = cos(angle) * length
    this.y = sin(angle) * length
  }
  setLength(length) {
    var angle = this.getAngle()
    this.x = cos(angle) * length
    this.y = sin(angle) * length
  }
  add(x2, y2) {
    return new vec2(this.x + x2, this.y + y2)
  }
  addTo(x2, y2) {
    this.x += x2
    this.y += y2
  }
  subtract(x2, y2) {
    return new vec2(this.x - x2, this.y - y2)
  }
  subtractFrom(x2, y2) {
    this.x -= x2
    this.y -= y2
  }
  multiply(val) {
    return new vec2(this.x * val, this.y * val)
  }
  multiplyBy(val) {
    this.x *= val
    this.y *= val
  }
  divide(val) {
    return new vec2(this.x / val, this.y / val)
  }
  divideBy(val) {
    this.x /= val
    this.y /= val
  }
}