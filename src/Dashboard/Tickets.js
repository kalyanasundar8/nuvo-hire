import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/ApiService";

const Tickets = () => {
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
      {/*START Tickets */}
      <section class='section'>
        <div class='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='mb-4 mb-lg-0'>
                <h6 className='mb-0'>My Ticket List</h6>
              </div>
            </div>
            {/* Left-aligned column */}
            <div className='col-lg-4 text-lg-end'>
              {/* Right-aligned content */}
              <Link to='/raise-new-ticket' className='btn btn-primary'>
                Raise New Ticket
              </Link>
            </div>
          </div>

          {/*end row*/}

          <div className='row'>
            {Array.isArray(tickets) &&
              tickets.map((ticket) => (
                <div key={ticket.id} className='col-md-12 mt-4'>
                  <Link
                    to={`/view-tickets/${ticket.id}`}
                    className='primary-link'
                  >
                    <div className='card mb-4'>
                      <div className='card-body d-flex justify-content-between align-items-center'>
                        <div>
                          <h5 className='card-title'>
                            {ticket.title}
                            <span> ({ticket.status})</span>
                          </h5>
                          <h6 className='card-text'></h6>
                        </div>
                        <div>
                          <Link
                            to={`/edit-ticket/${ticket.id}`}
                            className='primary-link'
                          >
                            Edit <i className='mdi mdi-pencil'></i>
                          </Link>
                          <span className='mx-2'>|</span>
                          <Link
                            to={`/delete-ticket/${ticket.id}`}
                            className='primary-link'
                          >
                            Delete <i className='mdi mdi-delete'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*END TICKETS */}
    </div>
  );
};

export default Tickets;
