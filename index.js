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
    return (this.pi*this._diameter)
  }
  get area(){
    return this.pi *this.radius*this.radius
  }
  
   set diameter(diameter){
   this._diameter=diameter;
  }
  set circumference(circumference){
    this._circumference=circumference;
  }
  set area(area){
    this._area=area;
  }
}


