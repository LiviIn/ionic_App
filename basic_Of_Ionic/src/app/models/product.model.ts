export class Product {
    // id: number;
    // name: string;
    // description: string;
    // price: number;
    // age?: number;   // using a ? this value is optional

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number
    ){
        this.name += this.id //this.name = this.name + this.id
    }
  }