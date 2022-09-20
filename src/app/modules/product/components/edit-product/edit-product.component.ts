import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  isNewProduct = true;
  IdProduct: string;
  
  formProduct = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    description: [''],
    image: [''],
    price: [null, Validators.required],
    stock: [null, Validators.required],
    status: [true]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private matSnack: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.params.subscribe(val => {
      if (val) {
        this.IdProduct = val['id'];
        if (this.IdProduct) {
          this.searchProduct();
        }
      }
    })
  }

  searchProduct() {
    this.productService.get(this.IdProduct).subscribe(val => {
      if (val) {
        this.formProduct.get('id')?.setValue(val.id);
        this.formProduct.get('name')?.setValue(val.name);
        this.formProduct.get('description')?.setValue(val.description);
        this.formProduct.get('image')?.setValue(val.image);
        this.formProduct.get('price')?.setValue(val.price);
        this.formProduct.get('status')?.setValue(val.status);
        this.formProduct.get('stock')?.setValue(val.stock);
        this.isNewProduct = false;
      }
    });
  }

  saveProduct() {
    let product = new Product();  
    product.name = this.formProduct.get('name')?.value;
    product.description = this.formProduct.get('description')?.value;
    product.image = this.formProduct.get('image')?.value;
    product.price = this.formProduct.get('price')?.value;
    product.status = this.formProduct.get('status')?.value;
    product.stock = this.formProduct.get('stock')?.value;

    this.productService.insertProduct(product).subscribe(value => {
      if (value) {
        this.formProduct.get('id')?.setValue(value.id);
        this.matSnack.open("Produto cadastrado com sucesso", "", {
          duration: 5000
        });
        this.isNewProduct = false;
      } else {
        this.matSnack.open("Erro ao inserir produto", "", {
          duration: 5000
        });
      }
    });
  }

  removeProduct() {
    const dialogRef = this.dialog.open(DialogConfirmComponent,{
      data:{
        message: 'Quer realmente remover o produto?',
        buttonText: {
          ok: 'Sim',
          cancel: 'Não'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.productService.deleteProduct(this.IdProduct).subscribe(val => {
          if (val) {
            this.router.navigate(['/']);
          }
        })
      }
    });
  }

  updateProduct() {
    let product = new Product();  
    product.id = this.formProduct.get('id')?.value;
    product.name = this.formProduct.get('name')?.value;
    product.description = this.formProduct.get('description')?.value;
    product.image = this.formProduct.get('image')?.value;
    product.price = this.formProduct.get('price')?.value;
    product.status = this.formProduct.get('status')?.value;
    product.stock = this.formProduct.get('stock')?.value;

    this.productService.updateProduct(product).subscribe(val => {
      if (val) {
        this.formProduct.get('name')?.setValue(val.name);
        this.formProduct.get('description')?.setValue(val.description);
        this.formProduct.get('image')?.setValue(val.image);
        this.formProduct.get('price')?.setValue(val.price);
        this.formProduct.get('status')?.setValue(val.status);
        this.formProduct.get('stock')?.setValue(val.stock);
        this.matSnack.open("Produto editado com sucesso", "", {
          duration: 5000
        });
      } else {
        this.matSnack.open("Erro ao editar produto", "", {
          duration: 5000
        });
      }
    });
  }

}


