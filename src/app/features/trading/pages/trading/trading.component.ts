import { Component } from '@angular/core';
import { TradingEngineService } from '../../../../core/services/trading-engine.service';
import { Order } from '../../../../shared/models/order.model';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { OnInit, OnDestroy } from '@angular/core'
import { interval, Subscription } from 'rxjs'
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { Portfolio } from '../../../../shared/models/portfolio.model';
@Component({
  selector: 'app-trading',
  imports: [FormsModule, CommonModule],
  templateUrl: './trading.component.html',
  styleUrl: './trading.component.scss'
})
export class TradingComponent implements OnInit, OnDestroy {

  side: 'buy' | 'sell' = 'buy'
  price: number = 0
  size: number = 0
  orders: Order[] = []
  filledOrders: Order[] = []
  private fillSub?: Subscription
  portfolio?: Portfolio

  constructor(
    private engine: TradingEngineService,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {

    this.loadOrders()

    this.fillSub = interval(4000).subscribe(() => {
      this.engine.fillRandomOrder()
      this.loadOrders()
    })

  }

  ngOnDestroy(): void {

    this.fillSub?.unsubscribe()

  }

  submitOrder() {

    const order: Order = {

      id: Date.now(),
      side: this.side,
      price: this.price,
      size: this.size,
      status: 'open',
      time: new Date()

    }

    this.engine.placeOrder(order)

    this.loadOrders()

  }

    loadOrders() {

      const allOrders = this.engine.getOrders()

      this.orders = allOrders.filter(o => o.status === 'open')

      this.filledOrders = allOrders.filter(o => o.status === 'filled')

      this.portfolio = this.portfolioService.getPortfolio()

    }

  cancelOrder(orderId: number) {

    this.engine.cancelOrder(orderId)

    this.loadOrders()

  }

}
