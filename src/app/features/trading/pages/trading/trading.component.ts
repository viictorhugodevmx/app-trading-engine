import { Component } from '@angular/core';
import { TradingEngineService } from '../../../../core/services/trading-engine.service';
import { Order } from '../../../../shared/models/order.model';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-trading',
  imports: [FormsModule],
  templateUrl: './trading.component.html',
  styleUrl: './trading.component.scss'
})
export class TradingComponent {

  side: 'buy' | 'sell' = 'buy'
  price: number = 0
  size: number = 0

  constructor(private engine: TradingEngineService) {}

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

  }

}
