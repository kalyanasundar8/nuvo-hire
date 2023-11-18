import React, { useState, useEffect } from "react";
import { fetchPricing } from "../services/PricingService";
import { FaDollarSign } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function Pricing() {
  const [pricing, setPricing] = useState("");
  const { user_type } = useParams("");

  useEffect(() => {
    const fetchPricingDetails = async () => {
      try {
        console.log(user_type);
        if (user_type === "JobSeeker") {
          const response = await fetchPricing(user_type);
          console.log(response.data.data);
          setPricing(response.data.data);
        } else if (user_type === "Employer") {
          const response = await fetchPricing(user_type);
          console.log(response.data.data);
          setPricing(response.data.data);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchPricingDetails();
  }, []);
  return (
    <div className='page-content'>
      {/* Start home */}
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Pricing Plans</h3>
                <div className='page-next'>
                  <nav
                    className='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='index.php'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href=''>Pricing Plans</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        {" "}
                        Pricing Plans{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
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
      <div className='position-relative' style={{ zIndex: 1 }}>
        <div className='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE */}

      {/* START PRICING */}
      <section className='section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='text-center'>
                <span className='badge warning-bg-subtle  fs-15 mb-2'>
                  Choose Your Plan
                </span>
                <h3>Save up to 15%</h3>
                <p className='text-muted'>
                  The faster, most seamless CI & development you'll find
                  anywhere.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className='row'>
            {Array.isArray(pricing)
              ? pricing.map((price) => (
                  <div className='col-lg-4 col-md-6 mt-5 pt-2'>
                    <div className='pricing-box card bg-light d-flex-column h-100'>
                      <div key={price.id} className='card-body p-4 px-lg-5'>
                        <div className='pricing-icon bg-light rounded-circle icons-md'>
                          {price && price.icon ? (
                            <img src={price.icon} alt='' />
                          ) : (
                            <FaDollarSign />
                          )}
                        </div>
                        <div className='pricing-name text-center mt-4 pt-2'>
                          <h4 className='fs-18'>{price.name}</h4>
                        </div>
                        <div className='pricing-price text-center mt-4'>
                          <h2 className='fw-semibold'>
                            {price.amount}
                            <small className='fs-16'>/{price.validity}</small>
                          </h2>
                          <p className='fs-16'></p>
                        </div>
                        <ul className='list-unstyled pricing-details text-muted mt-4'>
                          <li className='pricing-item'>
                            <i className='mdi mdi-check-bold success-bg-subtle me-2'></i>{" "}
                            {price.profile_download}
                          </li>
                          <li className='pricing-item'>
                            <i className='mdi mdi-check-bold success-bg-subtle me-2'></i>{" "}
                            {price.profile_view}
                          </li>
                          <li className='pricing-item'>
                            <i className='mdi mdi-check-bold bg-soft-muted me-2'></i>{" "}
                            {price.email}
                          </li>
                          <li className='pricing-item'>
                            <i className='mdi mdi-check-bold bg-soft-muted me-2'></i>{" "}
                            {price.no_of_jobs}
                          </li>
                          <li className='pricing-item'>
                            <i className='mdi mdi-check-bold bg-soft-muted me-2'></i>{" "}
                            {price.save_candidate_profile}
                          </li>
                        </ul>
                        <div className='text-center mx-auto mb-2'>
                          <Link
                            to={{
                              pathname: `/view-cart/${price.id}`, // Include price.id as a URL parameter
                            }}
                            className='btn btn-soft-primary rounded-pill'
                          >
                            Purchase Now <i className='uil uil-arrow-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*end pricing-box*/}
                  </div>
                ))
              : null}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* END PRICING */}
    </div>
  );
}
