class ProductRequest{
    constructor(title, imageurl, price, description, category,email){
        this.name = title;
        this.avatar = imageurl;
        this.price = price;
        this.description = description;
        this.category = category
        this.email = email;
    };
};

export default ProductRequest