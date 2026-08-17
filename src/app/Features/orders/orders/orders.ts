import { ChangeDetectorRef,Component } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  orders: any[] = [];

  constructor(
      private apiService: ApiService,
      private cdr: ChangeDetectorRef
  )
  {

  }

  ngOnInit()
  {
      this.loadOrders();
  }

  loadOrders()
  {
      this.apiService
          .getOrders()
          .subscribe(data =>
          {
              console.log(data);

              this.orders = data;
              console.log('Orders assigned:', this.orders);
              console.log('Orders count:', this.orders.length);
              this.cdr.detectChanges();
          });
  }

}