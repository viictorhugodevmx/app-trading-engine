export interface Order {

  id: number
  side: 'buy' | 'sell'
  price: number
  size: number
  status: 'open' | 'filled' | 'cancelled'
  time: Date

}
