import { Injectable } from '@angular/core'
import { Order } from '../../shared/models/order.model'

@Injectable({
  providedIn: 'root'
})
export class TradingEngineService {

  private orders: Order[] = []

  placeOrder(order: Order) {

    this.orders.unshift(order)

  }

  getOrders() {

    return this.orders

  }

}
