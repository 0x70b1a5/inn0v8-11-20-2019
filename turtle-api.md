# Turtle Graphics

An implementation of [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics) on the HTML5 Canvas in pure Javascript.

## Overview

In your HTML, have a canvas with `id="turtleCanvas"`.  
Then, paste the contents of `turtle.js` to the top of your javascript.

Make a `Turtle` object and save it to a variable.

`let t = new Turtle();`

By default, the turtle is in the middle of the canvas,  
facing to the right, has its pen down, and draws in black.  

Make color objects with `Turtle.makeColor()` and use them with `Turtle.setColor()`.

`let brightGreen = t.makeColor(0,255,0);  
t.setColor(brightGreen);`

or `t.setColor(t.makeColor(0,255,0));`

Then, make the turtle do some stuff.

`t.move(100);  
t.turn(90);  
t.penUp();  
t.move(100);  
t.circle(30);  
t.pour();`

Lastly, **you must make the turtle show its results**.

`t.show()`

## Methods

### Turtle()

Makes, and returns, a new turtle.  
Only works properly if there is a canvas with `id="turtleCanvas"`.

### debug()

Prints the turtle's x and y coordinates,  
angle, and color, and the valid range for each.

### makeColor(red, green, blue)

Given three numbers from 0 to 255,  
returns an object with the red, green, and blue values.  
These kinds of objects are used by `setColor()`.

### setColor(color)

Given a color object like what `makeColor()` makes.  
Sets the color that the turtle draws with.

### getColor()

Returns the turtle's current color as a color object.

### canvasColor()

Returns the color of the pixel the turtle is over, as a color object.

### penDown()

Calling this method causes the turtle to leave a colored trail when it `move()`s.

### penUp()

Calling this method causes the turtle to leave no trail when it `move()`s.

### tapPen()

Makes a colored dot where the turtle is, without changing whether the pen is up or down.

### show()

Puts the turtle's drawing onto the canvas.  
If this is not called after all drawing, the canvas will be unchanged.

### pour()

Similar to the 'paint bucket' tool in many digital drawing programs.  
Whatever color the turtle is currently over,  
fills the connected area of that color with the turtle's color.  
Useful for coloring in solid outlines.

### clear()

Fills the entire canvas with the turtle's color,  
wiping out any existing drawings.

### turn(degrees)

Changes which way the turtle is facing.  
Positive angles turn the turtle clockwise;  
negative angles turn it counterclockwise. 360 degrees flips the turtle exactly all the way around,  
facing the same way it was before.

### turnTo(degrees)

Sets the turtle's angle.  
Initially, the turtle's angle is 0.  
0 degrees is right, 90 degrees is down, 180 degrees is left, and 270 degrees is up.  
Any number can be used for the angle;  
the turtle will convert it to be between 0 and 360.

### getAngle()

Returns the turtle's angle, between 0 and 360 degrees.

### move(distance)

Makes the turtle move `distance` pixels in its current direction.  
If `penDown()`, draws a line along the way.

### moveTo(x, y)

Makes the turtle move to pixel location (x, y).  
If `penDown()`, draws a line along the way.

### jumpTo(x, y)

Teleports the turtle to be on top of pixel (x, y).  
No trail is left behind, regardless of `penDown()`.

### getLocation()

Returns an object or {x, y} with the turtle's current pixel coordinates.

### circle(radius)

Draws a circle, with the radius specified in pixels, around the turtle.  
The turtle does not change direction or location.  
The circle is drawn regardless of `penDown()`.
