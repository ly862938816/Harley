export class ItemDescription {
    itemId:number;
    cost: number;
    image: string;
    label: string;
    color: string;
    category: string;
    categoryId: string;
    productId: string;
    afterDiscount: number;
    productBrief: string;
    productDetail: string;
    favourite: boolean;
    items_available?: number;
    constructor(inputObj) {
      if (inputObj) {
        this.itemId = Number(inputObj.itemId);
        this.cost = Number(inputObj.cost);
        this.image = inputObj.image;
        this.label = inputObj.label;
        this.color = inputObj.color;
        this.category = inputObj.category;
        this.categoryId = inputObj.categoryId;
        this.productId = inputObj.productId;
        this.favourite = inputObj.favourite;
        this.afterDiscount = inputObj.afterDiscount;
      }
    }
  }
  