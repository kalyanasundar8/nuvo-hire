import React, { useEffect, useState } from "react";
import {
  cartDetails,
  removeFromCart,
  viewCartDetails,
} from "../../services/CartServiece";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { checkOut } from "../../services/PricingService";
import { setLocale } from "yup";

const ViewCart = () => {
  const { priceId } = useParams();
  console.log(priceId);

  const [viewPurchaseDetails, setViewPurchaseDetails] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);

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

  const handleCheckOut = async (priceId) => {
    const payload = {
      package_id: priceId,
    };
    console.log(payload);

    try {
      setButtonLoading(true);
      const response = await checkOut(payload);
      console.log(response);
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromTheCart = async (priceId) => {
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
    <div>
      <section className="page-title-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h3 className="mb-4">Cart details</h3>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* end home */}

      {/* START SHAPE */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: "10%",
          marginBottom: "30%",
        }}
      >
        <h1 className="mb-4">Your Shopping Cart</h1>

        {/* Cart items table */}
        {Array.isArray(viewPurchaseDetails) ? (
          viewPurchaseDetails.map((purchased) => (
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="text-success mb-2 mb-md-0" style={{ fontWeight: "bold" }}>
                          ₹{purchased.amount}
                        </div>
                        <div className="ml-md-3" style={{ marginLeft: "10px"}}>({purchased.name})</div>
                      </div>
                      <div>
                        <button
                          onClick={() => handleCheckOut(purchased.id)}
                          className={`btn btn-warning ${
                            buttonLoading ? "disabled" : ""
                          }`}
                          style={{ marginRight: "10px" }}
                        >
                          {buttonLoading ? "...." : "Check Out"}
                        </button>
                        <button
                          onClick={() => handleRemoveFromTheCart(purchased.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              marginTop: "130px",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-muted" />
            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "18px",
              }}
              className="text-muted"
            >
              Add something to the cart
            </p>
          </div>
        )}

        {/* Cart summary */}
      </div>
    </div>
  );
};

export default ViewCart;
