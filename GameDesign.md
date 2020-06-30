I would like to make an auto scroll game, which enemies or obstacles appear as the screen scrolls. 
To make screen scroll, I will simply make a map that is very long sideways, and make a camera object to go along the path. Most of the things will be translate to look the screen is moving.
The main character can move in the camera canvas, and enemies come from right side of the screen. To control collision, there will be a simple shape at the position of them. I will skin them with image or bigger shape. The collision shape will be a little smaller to make it not too hard to avoid.
 
The main character would be a ball which has big eyes. The eyes will always follow the next upcoming enemy's position. 
ㄴThis became hard because if there are multiple enemies in one screen you can’t find the next enemy. So, I changed it to look right, and modifying it relating to upward and downward movement.
 
Things you can do(temporary): move sideways, jump, double jump, dash back to ground while in air.   
 ㄴThese might change if it is hard to implement or too janky. Double jump and dash became little hard because the collision detection is not working during these movements.
  
The enemies will be mostly obstacles, which you can jump over or avoid. Would like to put eyes to them that follow your character. 
  ㄴEnemies will be mostly big triangles, and sometimes laser or gears. To distinguish enemies and other things, I will change colors of them. I might have a final boss at the end of the map. The screen scroll will stop, and final boss will appear.

In the main screen, there will only be a game start button. If you start you will see a story and your character. It will also show instructions
The story will be simple, only for background of the game. You are a jelly that is rescuing other jellies from a factory. The map design will be factory based.
After game finish, there will be a short credit scene. 
