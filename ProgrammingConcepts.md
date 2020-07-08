Shapes 
 
Shapes in programming is simply creating a shape you want in programs. There are simple shapes that you use variables such as position, size, angle, which are shapes such as rectangle, circle, arc and there are some shapes that you have to calculate to build. If you want to make shapes like star or regular polygons, this will be the case. You can also make your own shape, usually by writing every position of all the vertexes. Way to make triangle and quadrangle is similar to this. It might not seem important when you use images for objects, but it is very useful if you are checking the position or making simple prototype.

    rect(350 + bosx, -6060 + screen, 200, 150)
    rect(350 + bosx, -6160 + screen, 15, 50)
    rect(350 + bosx, -6060 + screen, 180, 130)
    
Shapes from boss encounter    
 
Colors 
 
In programming, colors are usally used by RGB or HEX. In RGB, you change amount of red, green, and blue by the range of 0 ~ 255 to represent different colors. The original idea is mixing colors in light, where adding colors will make it brighter. HEX has the same idea, but it changed the range of 0 ~ 255 in hexadecimal. So, every color gets the range of 00 ~ FF. You can make various colors with this, and also modify the opacity by changing alpha.

    fill(255, 140, 0, 200)
    fill(127, 255, 0, 200)
    fill(255, 192, 203, 200)
    
Colors of jelly friends    
 
Variables 
 
Variables are used to change something's value in the program. You initialize a variable, and use operators to modify it. You can use this to change an object's position, object's color, object's count and lots of more things. You should be careful about using variable's name, because if you make an existing variable again, the program would not work properly. Without variables, it will be very hard to modify values, so the program will be very inefficient.

    let cameraX = 0
    let cameraY = 0
    let gameover = false
    let jumpcount = 0
    let gamestate = 0
    
Variables that determines game's state    

Conditional Statements 
 
Conditional Statements are what we say if something is true, then this or if something is not true, then this. Usually if - else is used in programming. You can use this if you want to execute certain function in a certain condition, and does not in other conditions. In if - else, the logic goes if something (variable is at a certain value, mouse is clicked, keyboard is pressed) is true, execute something (return changed values, execute a function, draw shapes) and else, execute something else. Without conditional statements, you will have to think of every possible things and program to each possibilities every time.
 
    if (t == 328) {
       mainmenu2.play()
       mainmenu2.setLoop(true)
    }
    
Conditional statement for media play

Loops 
 
In programming loop means doing something over and over. In p5js draw is one big loop, and it executes every time the last execution is over. There are loops such as while loop or for loop. While loop is a loop that goes while A is true, execute B. For loop is similar, but in for loop it has initialization, condition and update. Inside the loop, if something is updated and no longer meets the condition, the loop ends. Loop is important is programming, because what programs do is usually looping itself until something changes.
 
    for (var lives = 0; lives < life; lives = lives + 1) {
       fill(135, 206, 250, 200)
       ellipse(lives * 50 + 30, 30, 40)
    }
    
Loop showing lives left    
 
Functions 

Functions are a set of codes that is use to execute a task, like drawing something or moving something. There are functions that returns something, draw something, modify values and much more. You can create functions that does what you want, and make your program with it. Because functions can save same calculation or modification, you can use it again when you want to, so functions help you to reduce repeating codes.

    PC = function(x, y, cx, cy, d) {
      if (dist(x, y, cx, cy) <= d / 2) {
        return true
      } else {
        return false
      }
    }

Function that determines collision

Classes

Classes are used in Object Oriented Programming, and what it does is to create objects. It has some initial values for constructor, and it is used to create new objects. It is similar to functions, because you can save the object with class, and use the same class again with some different values to make new objects. In class, you can save object’s shape, position, color, and also modify them. So, if you use classes, it will be easy to spawn many objects with one set of codes.

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

Class of the main character

Arrays

Array is a group of data that contains a set of similar data types. You can build this in two ways. First, you can make an array that is already containing data from the beginning. It can be used when you have less data to use. Second, you can make it without data and later push data in the array already made. This is used when there are too many data to write it all or you don’t exactly know what the data will be yet. With arrays, you can reduce variables you need to use, and can make calculations easier.

    this.poly = [] 
    if (this.y > 250) {
      this.poly[0] = createVector(this.x - 50, this.y + this.z)
      this.poly[1] = createVector(this.x + 50, this.y + this.z)
      this.poly[2] = createVector(this.x, this.y - 110 * this.size + this.z)
      beginShape()
      for (i = 0; i < this.poly.length; i++) {
        vertex(this.poly[i].x, this.poly[i].y)
      }
      endShape(CLOSE)
      
Array used to make repeating triangles       
