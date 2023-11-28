import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/ApiService";
// React bootstrap Form
import { Modal } from "react-bootstrap";

// Icons
import { FaBan } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTicket
} from "@fortawesome/free-solid-svg-icons";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { editTicket, fetchTicketDetails } from "../services/TicketServices";
import FileUploader from "../components/layouts/FileUploader";
import Loading from "../components/layouts/Loading";

const Tickets = () => {
  // Edit functionalities
  const [ticketForm, setTicketForm] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTicketForm = (id) => {
    setTicketForm(true);
    setTicketId(id);
  };

  console.log(ticketId);

  const handleTicketFormClose = () => {
    setTicketForm(false);
  };

  const ticketValidation = Yup.object({
    title: Yup.string().required("Please enter title"),
    description: Yup.string().required("Please enter description"),
  });

  const [details, setDetails] = useState("");
  // const [docs, setDocs] = useState([]);
  console.log(details);

  const fetchTicketDet = async (ticketId) => {
    console.log(ticketId);
    try {
      const response = await fetchTicketDetails(ticketId);
      console.log(response.data.data.response);
      setDetails(response.data.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const [supportDocs, setSupportDocs] = useState([]);

  const handleSupportDocsChange = (files) => {
    setSupportDocs(files);
  };

  let title = "";
  let description = "";

  if (Array.isArray(details)) {
    const ticketDetails = details[0];
    console.log(ticketDetails.attachment);
    title = ticketDetails.title || "";
    description = ticketDetails.description || "";
  }

  const editTicketFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: title,
      description: description,
    },
    validationSchema: ticketValidation,
    onSubmit: (values) => {
      console.log(values);
      editTicketDetails(values);
    },
  });

  const editTicketDetails = async (id) => {
    const payload = {
      title: editTicketFormik.values.title,
      description: editTicketFormik.values.description,
      attachment: supportDocs,
    };
    console.log(payload);
    try {
      const response = await editTicket(payload, ticketId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);

        const timeoutId = setTimeout(() => {
          setLoading(false);
          setError(new Error("Network error"));
        }, 20000);

        const response = await ApiService("my-tickets", "GET", null, true);
        console.log(response.data.data);

        clearTimeout(timeoutId);

        setTickets(response.data.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error: ", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div class="page-content">
      {/* Model */}
      <Modal
        show={ticketForm}
        onHide={handleTicketFormClose}
        dialogClassName="centered-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* { error ? (<ErrorModel error={error}/>) : success ? (<SuccessModel success={success}/>) : ""} */}
          <div className="p-4">
            <form onSubmit={editTicketFormik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter your first name"
                  value={editTicketFormik.values.title}
                  onBlur={editTicketFormik.handleBlur}
                  onChange={editTicketFormik.handleChange}
                />
                {editTicketFormik.touched.title &&
                  editTicketFormik.errors.title && (
                    <span className="error" style={{ fontSize: "12px" }}>
                      {editTicketFormik.errors.title}
                    </span>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Enter your last name"
                  value={editTicketFormik.values.description}
                  onBlur={editTicketFormik.handleBlur}
                  onChange={editTicketFormik.handleChange}
                />
              </div>
              <FileUploader
                setAttachmentFiles={handleSupportDocsChange}
                type="support-ticket"
              />
              {/* {Array.isArray(supportTickets) && supportTickets.length > 0
                ? supportTickets.map((docs) => (
                    <a href={docs.attachment} target="blank">{docs.attachment}</a>
                  ))
                : ""} */}
              <div className="text-end mt-4">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Model end */}
      {/*START Tickets */}
      <section class="section">
        <div class="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-4 mb-lg-0">
                <h6 className="mb-0">My Ticket List</h6>
              </div>
            </div>
            {/* Left-aligned column */}
            <div className="col-lg-4 text-lg-end">
              {/* Right-aligned content */}
              <Link to="/raise-new-ticket" className="btn btn-primary">
                Raise New Ticket
              </Link>
            </div>
          </div>

          {/*end row*/}

          {loading ? (
            <Loading />
          ) : error ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100px",
                textAlign: "center",
              }}
              className="text-muted"
            >
              <div>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p>Check your newtwork</p>
              </div>
            </div>
          ) : (
            <div className="row">
              {Array.isArray(tickets) && tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <div key={ticket.id} className="col-md-12 mt-4">
                    <Link
                      to={`/view-tickets/${ticket.id}`}
                      className="primary-link"
                    >
                      <div className="card mb-1">
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <div>
                            <span
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              #{ticket.id}
                            </span>
                            <h5
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              {ticket.title}
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginLeft: "10px",
                                  backgroundColor: "#333",
                                  color: "#fff",
                                  paddingLeft: "3px",
                                  paddingRight: "3px",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  borderRadius: "3px",
                                }}
                              >
                                {" "}
                                {ticket.status}
                              </span>
                            </h5>
                            <h6 className="card-text"></h6>
                          </div>
                          <div>
                            <Link
                              // to={`/edit-ticket/${ticket.id}`}
                              onClick={() => {
                                handleTicketForm(ticket.id);
                                fetchTicketDet(ticket.id);
                              }}
                              className="primary-link"
                            >
                              Edit <i className="mdi mdi-pencil"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    marginTop: "130px",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faTicket} className="text-muted" />
                  <p
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                    className="text-muted"
                  >
                    No tickets created{" "}
                    <Link to="/raise-new-ticket" className="text-primary">
                      Raise new ticket
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        {/*end container*/}
      </section>
      {/*END TICKETS */}
    </div>
  );
};

export default Tickets;
