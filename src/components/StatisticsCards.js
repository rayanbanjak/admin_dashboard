import users from "../data/Users.js";
import products from "../data/Products.js";
import orders from "../data/Orders.js";


function StatisticsCards() {
  return (
    <div className="row mb-4">

      <div className="col-md-4">
        <div className="card text-bg-primary">
          <div className="card-body">
            <h5>Total Users</h5>
            <h2>{users.length}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-bg-success">
          <div className="card-body">
            <h5>Total Products</h5>
            <h2>{products.length}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-bg-warning">
          <div className="card-body">
            <h5>Total Orders</h5>
            <h2>{orders.length}</h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StatisticsCards;

