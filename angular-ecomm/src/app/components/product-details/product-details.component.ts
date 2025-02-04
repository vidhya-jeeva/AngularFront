import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { CartItem } from 'src/app/common/cart-item';
import { CartItem } from '../../common/cart-item';
// import { Product } from 'src/app/common/product';
import { Product } from '../../common/product';
// import { CartService } from 'src/app/services/cart.service';
import { CartService } from '../../services/cart.service';
// import { ProductService } from 'src/app/services/product.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // product!: Product;
  product!: Product;
  constructor(private productService:ProductService,
    private cartService: CartService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>
    {
this.handleProductDetails();
    })
  }
handleProductDetails()
{
  const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
  this.productService.getProduct(theProductId).subscribe(
    (    data: Product)=>{
      this.product = data;
    }
  )
}
addToCart()
{
console.log(`adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
const theCartItem = new CartItem(this.product);
this.cartService.addToCart(theCartItem);
}
}
