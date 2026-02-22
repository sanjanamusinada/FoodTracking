import './FoodCard.css';

const FoodCard = ({ food, onRequest, showRequestButton = true }) => {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <span className="food-card-badge">{food.expiryTime}</span>
      </div>

      <div className="food-card-content">
        <h3>{food.title}</h3>
        <p className="food-description">{food.description}</p>

        <div className="food-details">
          <div className="detail-item">
            <span className="detail-icon">📦</span>
            <span>{food.quantity}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span>{food.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👤</span>
            <span>{food.donor}</span>
          </div>
        </div>

        {showRequestButton && (
          <button
            className="btn btn-primary btn-block"
            onClick={() => onRequest && onRequest(food)}
          >
            Request Donation
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
