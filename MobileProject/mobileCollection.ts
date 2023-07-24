import { Mobile } from "./mobile"
export class MobileCollection{
    private mobiles: Mobile[]
    private totalPrice: number
    constructor(mobiles : Mobile[]){
     this.mobiles =  mobiles
     this.totalPrice
    }
    public getMobile(){
        this.mobiles
    }
    public setMobile(newMobile){
       this.mobiles = newMobile
    }
    public getTotalPrice(){
        this.totalPrice
    }
    public setTotalPrice(){
        this.totalPrice = Mobile[4]
    }
    public totalPriceCalculation(){
        let x = []
        for(let mob of this.mobiles){
            x.push()
        }
    }
    public printColection(){
       return  `The Characteristics of the ${this.mobiles}
         .Name : ${this.mobiles}
         .Trademark : `   
    }
}