import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await ApiService("my-tickets", "GET", null, true);
        setTickets(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div class='page-content'>
      {/*Start home */}
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>My Tickets</h3>
                <div class='page-next'></div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end home */}

      {/*START SHAPE */}
      <div class='position-relative' style={{ zIndex: 1 }}>
        <div class='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      {/*END SHAPE */}

      {/*START MANAGE-JOBS */}
      <section class='section'>
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-8'>
              <div class='mb-4 mb-lg-0'>
                <h6 class='mb-0'> My Ticket List </h6>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className='row'>
            {Array.isArray(tickets) &&
              tickets.map((ticket) => (
                <div key={ticket.id} className='col-md-12'>
                  <div className='job-box card mt-4'>
                    <div className='bookmark-label text-center'>
                      <Link
                        to='/javascript:void(0)'
                        className='text-white align-middle'
                      >
                        <i className='mdi mdi-star'></i>
                      </Link>
                    </div>
                    <div className='p-4'>
                      <div className='row align-items-center'>
                        <div className='col-md-4'>
                          <div className='text-center mb-4 mb-md-0'>
                            <Link to='/company-details.php'>
                              <img
                                src='assets/images/featured-job/img-01.png'
                                alt=''
                                className='img-fluid rounded-3'
                              />
                            </Link>
                          </div>
                        </div>

                        <div className='col-md-8'>
                          <div className='mb-2 mb-md-0'>
                            <h5 className='fs-18 mb-1'>
                              <Link
                                to={`/ticket/${ticket.id}`}
                                className='text-dark'
                              >
                                {ticket.title}
                              </Link>
                            </h5>
                            <p className='text-muted fs-14 mb-0'>
                              {ticket.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-3 bg-light'>
                      <div className='row'>
                        <div className='text-start text-md-end'>
                          <Link
                            to={`/ticket/${ticket.id}`}
                            className='primary-link'
                          >
                            View Ticket{" "}
                            <i className='mdi mdi-chevron-double-right'></i>
                          </Link>
                        </div>

                        <div className='col-md-6'>
                          <div className='col-md-6'>
                            <div>
                              <p className='text-muted mb-0'>
                                <span className='text-dark'>Details :</span>{" "}
                                {ticket.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div class='row'>
            <div class='col-lg-12 mt-4 pt-2'>
              <nav aria-label='Page navigation example'>
                <ul class='pagination job-pagination mb-0 justify-content-center'>
                  <li class='page-item disabled'>
                    <Link class='page-link' to='' tabindex='-1'>
                      <i class='mdi mdi-chevron-double-left fs-15'></i>
                    </Link>
                  </li>
                  <li class='page-item active'>
                    <Link class='page-link' to=''>
                      1
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      2
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      3
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      4
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      <i class='mdi mdi-chevron-double-right fs-15'></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*END TICKETS */}
    </div>
  );
};

export default MyTickets;
