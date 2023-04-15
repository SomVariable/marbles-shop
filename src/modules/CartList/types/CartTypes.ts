export type cartItem = {
    type: string,
    categoryes: [string],
    price: number,
    discount:number,
    composition: string,
    shape: string,
    description: string
  }

export type stateCartItem = {
    type: string,
    categoryes: [string],
    price: number,
    discount:number,
    composition: string,
    shape: string,
    description: string,
    count: number
  }

export type CartListState = {
    products: Array<stateCartItem>,
    totalPrice: number
    totalCount: number
}

export type addProductAction = {
    type: string,
    payload: cartItem
}