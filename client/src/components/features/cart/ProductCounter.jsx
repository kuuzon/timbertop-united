function ProductCounter({ productCount, setProductCount }) {
  function handleIncrement(e){
    e.preventDefault()
    setProductCount(productCount + 1)
  }
  function handleDecrement(e){
    e.preventDefault()
    if(productCount > 0){
      setProductCount(productCount - 1)
    }
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{productCount}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default ProductCounter