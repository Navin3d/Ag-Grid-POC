import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColumnVisibleEvent } from 'ag-grid-community';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ag-grid-dem';

  originalData = [
    {
      id: 1,
      make: "Maruthi",
      model: "-",
      price: "-",
      datas: [
        {
          id: "-",
          make: "-",
          model: "Alto 800",
          price: 8900
        },
        {
          id: "-",
          make: "-",
          model: "Alto",
          price: 11
        }
      ]
    },
    {
      id: 2,
      make: "Toyota",
      model: "-",
      price: "-",
      datas: [
        {
          id: 0,
          make: "-",
          model: "Innova",
          price: 9999
        },
        {
          id: 0,
          make: "-",
          model: "Fortuner",
          price: 2344
        }
      ]
    },
  ];

  columnDefs = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData: any = [];

  constructor() {
    this.rowData = this.originalData;
  }

  onCellClicked(e: CellClickedEvent) {
    console.log(e.data.id);

    const id = e.data.id;

    let tempDatas = [];

    for (let data in this.originalData) {

      let temp = {
        id: this.originalData[data].id,
        make: this.originalData[data].make,
        model: this.originalData[data].model,
        price: this.originalData[data].price
      }
      tempDatas.push(temp);
      if (this.originalData[data].id == id) {
        for (let single in this.originalData[data].datas) {
          let temp2 = {
            id: "-",
            make: "-",
            model: "",
            price: 0
          }

          temp2.model = this.originalData[data].datas[single].model;
          temp2.price = this.originalData[data].datas[single].price;

          tempDatas.push(temp2);
        }
      }

    }

    console.log(tempDatas);
    this.rowData = tempDatas;

  }

}
