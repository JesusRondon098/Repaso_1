import { arrayPoint } from "./pointTest";
export class Point{
    private x : number
    private y : number
    constructor(x:number, y:number){
      this.x = x;
      this.y = y;
    }
    public getX(): number{
        return this.x;
    }
    public setX(newX:number){
        return this.x = newX;
    }
    public getY(): number{
        return this.y;
    }
    public setY(newY:number){
        return this.y = newY;
    }
    public toString(){
        return `(${this.x},${this.y})`
    }
    public distanceToOrigin():number{
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y))
    }
    public calculateDistance(another: Point):number{
        let a = this.x - another.getX();
        let b = this.y - another.getY();
        return Math.round(Math.sqrt(a * a + b * b))
    }
    public calculateQuadrant(){
        if(this.x == 0 || this.y == 0 ){
          return 0
        }else if (this.x > 0 && this.y > 0){
          return 1
        }else if (this.x < 0 && this.y > 0){
          return 2
        }else if (this.x < 0 && this.y < 0){
          return 3
        }else if (this.x > 0 && this.y < 0){
          return 4
        }
    }
    public calculateNearest(points : Point[]) : Point{
      let puntoCercano = arrayPoint[0];
      let distancia = this.calculateDistance(puntoCercano)
      
      for(let i = 0; i < arrayPoint.length; i++){
        let distance = this.calculateDistance(arrayPoint[i])
        if(distance < distancia){
            puntoCercano = arrayPoint[i];
            distancia = distance;
        }
      }
      return puntoCercano
    }
}