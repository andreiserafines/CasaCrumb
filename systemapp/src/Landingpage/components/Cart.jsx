export function Cart({ cart, onClose, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <>
      <div
        className={`cart-overlay${cart !== null ? " open" : ""}`}
        onClick={onClose}
      />
      <div className="cart-drawer open">
        <div className="cart-header">
          <h3>Your Bag</h3>
          <button className="cart-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span>🛍️</span>
              Your bag is empty.
              <br />
              Start browsing our cookies.
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} className="cart-item">
                <img className="cart-item-img" src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₱{item.price}</div>
                  <button
                    className="cart-item-remove"
                    onClick={() => onRemove(i)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Total</span>
              <span className="total-amount">₱{total.toLocaleString()}</span>
            </div>
            <button className="cart-checkout">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
