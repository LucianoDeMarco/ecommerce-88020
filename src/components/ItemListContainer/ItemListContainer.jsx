import Item from "../Item/Item"

const ItemListContainer = ({products}) => {
  return (
    <div>
      {
        products.map((product) => (
          <Item product={product} key={product.id}/>
        ))
      }
    </div>
  )
}

export default ItemListContainer
