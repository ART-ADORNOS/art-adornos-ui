export const transformOrderData = (dataOrder) => {
    if (!dataOrder || dataOrder.length === 0) return

    const cartId = dataOrder[0].cart
    const startupName = dataOrder[0].name_startup

    return {
        cart: cartId,
        startup_name: startupName,
        items: dataOrder.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price
        }))
    };
}