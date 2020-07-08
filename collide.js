//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

PC = function(x, y, cx, cy, d) {
  if (dist(x, y, cx, cy) <= d / 2) {
    return true
  } else {
    return false
  }
}

PL = function(px, py, x1, y1, x2, y2, buffer) {
  var d1 = dist(px, py, x1, y1)
  var d2 = dist(px, py, x2, y2)
  var leng = dist(x1, y1, x2, y2)
  if (buffer === undefined) {
    buffer = 0.1
  }
  if (d1 + d2 >= leng - buffer && d1 + d2 <= leng + buffer) {
    return true
  } else {
    return false
  }
}

LC = function(x1, y1, x2, y2, cx, cy, diameter) {
  var inside1 = PC(x1, y1, cx, cy, diameter)
  var inside2 = PC(x2, y2, cx, cy, diameter)
  if (inside1 || inside2) {
    return true
  }
  var distX = x1 - x2
  var distY = y1 - y2
  var len = sqrt((distX * distX) + (distY * distY))
  var dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / pow(len, 2)
  var closestX = x1 + (dot * (x2 - x1))
  var closestY = y1 + (dot * (y2 - y1))
  var line = PL(closestX, closestY, x1, y1, x2, y2)
  if (!line) {
    return false
  }
  distX = closestX - cx
  distY = closestY - cy
  var distance = sqrt((distX * distX) + (distY * distY))
  if (distance <= diameter / 2) {
    return true
  } else {
    return false
  }
}

CC = function(x, y, d, x2, y2, d2) {
  if (dist(x, y, x2, y2) <= (d / 2) + (d2 / 2)) {
    return true
  } else {
    return false
  }
}

RC = function(rx, ry, rw, rh, cx, cy, diameter) {
  var testX = cx
  var testY = cy
  if (cx < rx) {
    testX = rx
  } else if (cx > rx + rw) {
    testX = rx + rw
  }
  if (cy < ry) {
    testY = ry
  } else if (cy > ry + rh) {
    testY = ry + rh
  }
  var distance = dist(cx, cy, testX, testY)
  if (distance <= diameter / 2) {
    return true
  } else {
    return false
  }
}

CP = function(cx, cy, diameter, vertices, interior) {
  if (interior === undefined) {
    interior = false
  }
  var next = 0
  for (var current = 0; current < vertices.length; current++) {
    next = current + 1
    if (next === vertices.length) next = 0
    var vc = vertices[current]
    var vn = vertices[next]
    var collision = LC(vc.x, vc.y, vn.x, vn.y, cx, cy, diameter)
    if (collision) {
      return true
    }
  }
  if (interior === true) {
    var centerInside = PP(cx, cy, vertices)
    if (centerInside) return true
  } else {
    return false
  }
}