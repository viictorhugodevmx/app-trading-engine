import { Injectable } from '@angular/core'
import { Portfolio } from '../../shared/models/portfolio.model'
import { Order } from '../../shared/models/order.model'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio: Portfolio = {

    usd: 10000,
    btc: 0

  }

  getPortfolio(): Portfolio {

    return this.portfolio

  }

  applyTrade(order: Order) {

    if (order.side === 'buy') {

      this.portfolio.usd -= order.price * order.size
      this.portfolio.btc += order.size

    }

    if (order.side === 'sell') {

      this.portfolio.usd += order.price * order.size
      this.portfolio.btc -= order.size

    }

  }

}
