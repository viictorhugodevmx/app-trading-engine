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

  cancelOrder(orderId: number) {

    this.orders = this.orders.filter(o => o.id !== orderId)

  }

  fillRandomOrder() {

    const openOrders = this.orders.filter(o => o.status === 'open')

    if (openOrders.length === 0) return

    const randomIndex = Math.floor(Math.random() * openOrders.length)
    const selectedOrder = openOrders[randomIndex]

    selectedOrder.status = 'filled'

  }

}
