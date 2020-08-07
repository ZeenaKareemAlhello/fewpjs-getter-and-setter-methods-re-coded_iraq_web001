// Add your Circle class here


class Circle{
   constructor(radius) {
    this.radius = radius;
   this.pi=Math.pi
  }
  get diameter(){
    return this.radius*2
  }
  get circumference(){
    return (this.pi*this.diameter)
  }
  get area(){
    return this.pi *this.radius*this.radius
  }
  
   set diameter(diameter){
   this.radius=diameter;
  }
  set circumference(circumference){
    this.radius=circumference;
  }
  set area(area){
    this.radius=area;
  }
}


