I would like to make an auto scroll game, which enemies or obstacles appear as the screen scrolls. 
To make screen scroll, I will simply make a map that is very long sideways, and make a camera object to go along the path. Most of the things will be translate to look the screen is moving.
The main character can move in the camera canvas, and enemies come from right side of the screen. To control collision, there will be a simple shape at the position of them. The collision shape will be a little smaller to make it not too hard to avoid.
 
The main character would be a ball which has big eyes. The eyes will always follow the next upcoming enemy's position. 
ㄴThis became hard because if there are multiple enemies in one screen you can’t find the next enemy. So, I changed it to look right, and modifying it relating to upward and downward movement.
In bossfight, it will look at the boss.
In main menu, eyes will follow mouse because it is the only screen where mouse is used.
 
Things you can do(temporary): move sideways, jump, double jump, dash back to ground while in air.   
 ㄴThese might change if it is hard to implement or too janky. Double jump and dash became little hard because the collision detection is not working during these movements.
 ㄴProblem solved, can do all movements now.
  
The enemies will be mostly obstacles, which you can jump over or avoid. Would like to put eyes to them that follow your character. 
  ㄴEnemies will be mostly big triangles, and sometimes laser or gears. To distinguish enemies, I will make the character and the enemies in different colors. I might have a final boss at the end of the map. The screen scroll will stop, and final boss will appear.

In the main screen, there will only be a game start button. If you start you will see a short story and your character. It will also show instructions.
The story will be simple, only for background of the game. You are a jelly that is rescuing other jellies from a factory. The map design will be factory based.
After game finish, there will be a short scene of ending.
After ending, the main screen will change a little.

How to move
A, S, D, SPACE is used.
A to go left, D to go right, Space to jump and double jump, S to dash down to ground if you are in air.
When gameover, you can press ENTER to restart or ESC to go to main menu.

<img src="https://user-images.githubusercontent.com/65142471/86928911-2cc7a200-c170-11ea-90e9-f9ffc5ccd886.jpg">
