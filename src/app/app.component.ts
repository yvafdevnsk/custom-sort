import { Component, OnInit } from '@angular/core';

import { RowItem } from './class/row-item';
import { SortItem } from './class/sort-item';
import { SortOrder } from './enum/sort-order.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rowList: RowItem[];
  sortOrderColumn1: string;
  sortOrderColumn2: string;
  sortOrderColumn3: string;

  defaultOrderList: SortItem[];

  SORT_ORDER_ASC: string;
  SORT_ORDER_DESC: string;

  constructor() {
    this.defaultOrderList = this.getDefaultOrderList();

    this.SORT_ORDER_ASC = SortOrder.ASC;
    this.SORT_ORDER_DESC = SortOrder.DESC;
  }

  ngOnInit() {
    this.rowList = this.getRowList();
    this.sortOrderColumn1 = SortOrder.ASC;
    this.sortOrderColumn2 = SortOrder.ASC;
    this.sortOrderColumn3 = SortOrder.ASC;
    this.sortRowList();
  }

  getDefaultOrderList(): SortItem[] {
    let list: SortItem[] = [];
    let item: SortItem;

    item = new SortItem();
    item.columnIndex = 1;
    item.order = SortOrder.ASC;
    item.compare = function(a: RowItem, b: RowItem): number {
      if (a.column1 < b.column1) {
        return -1;
      }
      if (a.column1 > b.column1) {
        return 1;
      }
      return 0;
    };
    list.push(item);

    item = new SortItem();
    item.columnIndex = 2;
    item.order = SortOrder.ASC;
    item.compare = function(a: RowItem, b: RowItem): number {
      if (a.column2 < b.column2) {
        return -1;
      }
      if (a.column2 > b.column2) {
        return 1;
      }
      return 0;
    };
    list.push(item);

    item = new SortItem();
    item.columnIndex = 3;
    item.order = SortOrder.ASC;
    item.compare = function(a: RowItem, b: RowItem): number {
      if (a.column3 < b.column3) {
        return -1;
      }
      if (a.column3 > b.column3) {
        return 1;
      }
      return 0;
    };
    list.push(item);

    return list;
  }

  getRowList(): RowItem[] {
    let list: RowItem[] = [];
    let item: RowItem;

    item = new RowItem();
    item.column1 = 'あ';
    item.column2 = 'a';
    item.column3 = '1';
    list.push(item);
    item = new RowItem();
    item.column1 = 'あ';
    item.column2 = 'a';
    item.column3 = '2';
    list.push(item);
    item = new RowItem();
    item.column1 = 'あ';
    item.column2 = 'b';
    item.column3 = '3';
    list.push(item);
    item = new RowItem();
    item.column1 = 'い';
    item.column2 = 'b';
    item.column3 = '4';
    list.push(item);
    item = new RowItem();
    item.column1 = 'い';
    item.column2 = 'c';
    item.column3 = '5';
    list.push(item);
    item = new RowItem();
    item.column1 = 'い';
    item.column2 = 'c';
    item.column3 = '6';
    list.push(item);

    return list;
  }

  onSort(columnIndex: number) {
    this.sortRowList(columnIndex);
  }

  sortRowList(columnIndex: number = -1) {
    let firstOrder: SortItem[] = this.defaultOrderList.filter((item) => item.columnIndex === columnIndex);
    if (firstOrder.length > 0) {
      firstOrder[0].order = (firstOrder[0].order === SortOrder.ASC) ? SortOrder.DESC : SortOrder.ASC;

      switch(columnIndex) {
        case 1:
          this.sortOrderColumn1 = firstOrder[0].order;
          break;
        case 2:
          this.sortOrderColumn2 = firstOrder[0].order;
          break;
        case 3:
          this.sortOrderColumn3 = firstOrder[0].order;
          break;
      }
    }

    let customOrderList: SortItem[] = [
      ...firstOrder,
      ...this.defaultOrderList.filter((item) => item.columnIndex !== columnIndex)
    ];

    this.rowList.sort((a: RowItem, b: RowItem): number => {
      for (let order of customOrderList) {
        let compareResult: number = order.compare(a, b);
        if (compareResult !== 0) {
          return (order.order === SortOrder.ASC) ? compareResult : -(compareResult);
        }
      }
      return 0;
    });
    this.rowList = [...this.rowList];
  }
}
