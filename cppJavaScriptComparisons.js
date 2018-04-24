// C++
class Car
{
  int speed = 10;
  
  public:
    void accelerate(change)
    {
      speed += change;
    }
    void decelerate()
    {
      speed -= 5;
    }
    int getSpeed()
    {
      return speed;
    }
};

// JavaScript
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

# Python
class Car:
    speed = 10
    
    def accelerate(change):
        Car.speed += change

    def decelerate():
        Car.speed -= 5

    def getSpeed():
        return Car.speed    