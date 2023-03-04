//desafio : 
//Crear una clase que se llame Product Manager ,debe crearse desde su constructor con el elemento products el cual sera un array vacio,debe crearse un array y este array debe tener title,description,price,thumbail,code,stock
//va a tener 4 metodos,add products ,para agregar productos ,getProducts para mostrar todo el array y getProductsById,en el caso de no mostrar nada poner Not Found
class ProductManager {
    constructor(){
       this.products = [];
    }

    getProducts = ()=>  this.products

    addProducts = (id,title,description,price,thumbail,code,stock=7)=>{
            const product = {
                id,
                title ,
                description,
                price,
                thumbail,
                code,
                stock
            }

            if(this.products.length === 0){
                this.products.id 
            }else{
                products.id = this.products[this.products.length -1].id 
            }
            this.products.push(product)
    }
    getProductsById = ()=>{
        const result = this.products.find((products) => products.id === newProduct.id)
        if (result) {
            return this.products.id
        }else{
            'Not Found'
        }
    }

}
const newProduct = new ProductManager()
newProduct.addProducts(1,"Tomate" , "fruta roja y versatil al comer" , "300 el kilo" , "Sin imagen" , "t1")
newProduct.getProductsById(1)
console.log(newProduct);
const newProduct2 = new ProductManager()
newProduct2.addProducts(2,"cebolla","Verdura verde y de buen comer" , "150 el kilo" , "sin imagen" , "c1")
newProduct2.getProductsById(2)
console.log(newProduct2);
