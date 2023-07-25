export class Mobile{
    private name :string
    private trademark :string
    private model :string
    private color :string
    private price :number
    constructor(name:string, trademark:string, model:string, color:string, price:number){
      this.name = name;
      this.trademark = trademark;
      this.model = model;
      this.color = color;
      this.price = price;
    }
    public getName(){
        this.name
    }
    public setName(newName:string){
        this.name = newName
    }
    public printName(){
        return this.name
    }
    public getTrademark(){
        this.trademark
    }
    public setTrademark(newTrademark:string){
        this.trademark = newTrademark
    }
    public printTrademark(){
        return this.trademark
    }
    public getModel(){
        this.model
    }
    public setModel(newModel:string){
       this.model = newModel
    }
    public printModel(){
        return this.model
    }
    public getColor(){
        this.color
    }
    public setColor(newColor:string){
        this.color = newColor
    }
    public printColor(){
        return this.color
    }
    public getPrice(){
        return this.price
    }
    public setPrice(newPrice:number){
        this.price = newPrice
    }
    public printPrice(){
        return this.price
    }
    public printClass(){
        return `Mobiles
        "The characteritics of the mobile name are"
                .Name: ${this.name}
                .Trademark: ${this.trademark}
                .Model: ${this.model}
                .Color: ${this.color}
                .Price: ${this.price}`
    }
}