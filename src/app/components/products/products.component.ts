import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/models/Product';

const DATAPRODUCT: Product[] = [
  {id:1, name: 'Telefono', description: 'Telefono nuevo', stoke: 23},
  {id:2, name: 'Laptop', description: 'Telefono nuevo', stoke: 23},
  {id:3, name: 'Videojuego', description: 'Telefono nuevo', stoke: 23},
  {id:4, name: 'Sala', description: 'Telefono nuevo', stoke: 23},
  {id:5, name: 'Comedor', description: 'Telefono nuevo', stoke: 23},
  {id:6, name: 'Estufa', description: 'Telefono nuevo', stoke: 23},
  {id:7, name: 'Refrigerador', description: 'Telefono nuevo', stoke: 23},
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'stoke'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(DATAPRODUCT);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //const valuesFiltered = this.dataSource.data.filter((u) => u.name == filterValue);
    //console.log(valuesFiltered);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit(): void {
  }

}
