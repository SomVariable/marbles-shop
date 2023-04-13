export type cartItem = {
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
    products: Array<cartItem>,
    totalPrice: number
    totalCount: number
}

export type addProductAction = {
    type: string,
    payload: cartItem
}