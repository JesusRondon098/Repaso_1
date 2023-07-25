import { Mobile } from "./mobile"
export class MobileCollection{
    private mobiles: Mobile[]
    private totalPrice: number
    constructor(mobiles : Mobile[]){
     this.mobiles =  mobiles
     this.totalPrice = this.totalPriceCalculation()
    }
    public getMobile(): Mobile[]{
        return this.mobiles
    }
    public setMobile(newMobile):void{
       this.mobiles = newMobile
    }
    public getTotalPrice(): number{
        return this.totalPrice
    }
    public setTotalPrice(newTotalPrice): void{
        this.totalPrice = newTotalPrice
    }
    public printCollection(): string{
        let x;
        for(let i = 0; i<this.mobiles.length; i++){
            x += this.mobiles[i].printClass()
        }
        return x
    }
    public totalPriceCalculation(): number{
       let x:number = 0;
       for(let i = 0; i<this.mobiles.length; i++){
        x += this.mobiles[i].getPrice();
       }
       return x
    }
}