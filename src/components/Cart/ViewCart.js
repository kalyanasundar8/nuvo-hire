import React, { useEffect, useState } from "react";
import {
  cartDetails,
  removeFromCart,
  viewCartDetails,
} from "../../services/CartServiece";
import { useLocation, useParams } from "react-router-dom";
import ApiService from "../../services/ApiService";

const ViewCart = () => {
  const { priceId } = useParams();
  console.log(priceId);

  const [viewPurchaseDetails, setViewPurchaseDetails] = useState([]);

  const makePurchase = async () => {
    const payload = {
      package_id: priceId,
    };

    try {
      const response = await cartDetails(payload);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const viewPurchase = async () => {
    const payload = {
      package_id: priceId,
    };

    try {
      const response = await viewCartDetails(payload);
      console.log(response.data.data);
      setViewPurchaseDetails(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleRemoveFromTheCart = async () => {
    const payload = {
      package_id: priceId,
    };

    try {
      const response = await removeFromCart(payload);
      console.log(response.data.data);
      setViewPurchaseDetails(null);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    makePurchase();
    viewPurchase();
  }, [priceId]);

  return (
    <div
      className='container'
      style={{
        marginTop: "10%",
      }}
    >
      <h1 className='mb-4'>Your Shopping Cart</h1>

      {/* Cart items table */}
      {Array.isArray(viewPurchaseDetails) ? (
        viewPurchaseDetails.map((purchased) => (
          <table className='table table-bordered table-striped vintage-table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Price</th>
                <th scope='col'>Type</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              <tr key={purchased.id}>
                <td>{purchased.amount}</td>
                <td>{purchased.name}</td>
                <td>
                  <button
                    onClick={handleRemoveFromTheCart}
                    className='btn btn-danger'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>No purchase details</p>
      )}

      {/* Cart summary */}
    </div>
  );
};

export default ViewCart;
