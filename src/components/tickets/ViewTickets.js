import React, { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import FileUploader from "../layouts/FileUploader";

const ViewTickets = () => {
  const { id } = useParams();

  const [showTicketDetails, setShowTicketDetails] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [supportDocs, setSupportDocs] = useState([]);
  const [comments, setComments] = useState("");

  // Fetching tickets data from the DB
  const fetchTicketsData = async () => {
    try {
      const response = await ApiService(
        `view-ticket?ticket_id=${id}`,
        "GET",
        null,
        true
      );
      console.log(response.data.data.response);
      setShowTicketDetails(response.data.data.response);
      setComments(response.data.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // create new comment
  const formik = useFormik({
    initialValues: {
      addComment: "",
    },
    onSubmit: (values) => {
      createComment(values);
    },
  });

  const createComment = async (values) => {
    const payload = {
      ticket_id: id,
      comment: values.addComment,
      support_doc: supportDocs,
    };

    console.log(payload);
    try {
      const commentResponse = await ApiService("post-comment", "POST", payload, true);
      console.log(commentResponse);
    } catch (error){
      console.log("Error: ", error);
    }
  };

  const handleSupportDocsChange = (files) => {
    setSupportDocs(files);
  };

  useEffect(() => {
    fetchTicketsData();
  }, []);

  return (
    <div className='page-content'>
      {/* Page Title */}
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Ticket Details</h3>
                <div className='page-next'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape */}
      <div className='position-relative' style={{ zIndex: 1 }}>
        <div className='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fillOpacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>

      {/* Ticket Details */}
      <section className='section'>
        <div className='container'>
          <div className='row'>
            {Array.isArray(showTicketDetails)
              ? showTicketDetails.map((details) => (
                  <div key={details.id} className='col-lg-12'>
                    {/* Ticket Title */}
                    <h2>{details.title}</h2>

                    {/* Ticket Description */}
                    <p>{details.description}</p>

                    {/* Attachments */}
                    <div className='mb-4'>
                      <h5>Attachments</h5>
                      <ul>
                        { Array.isArray(details.attachment) ? (
                        details.attachment.map((attach) => (
                        <li key={attach.id}>
                          <a href='#' target="blank">{attach.attachment}</a>
                        </li>
                        ))
                        ) : ""}
                        {/* Add more attachments as needed */}
                      </ul>
                    </div>

                    {/* Comment Form */}
                    <div className='mb-5'>
                      <h5>Add a Comment</h5>
                      <form onSubmit={formik.handleSubmit}>
                        <textarea
                          className='form-control'
                          placeholder='Write your comment here...'
                          name='addComment'
                          value={addComment}
                          onChange={(e) => {
                            formik.handleChange(e);
                            setAddComment(e.target.value);
                          }}
                          onBlur={formik.handleBlur}
                        ></textarea>
                        <FileUploader
                          setAttachmentFiles={handleSupportDocsChange}
                          attachments={supportDocs}
                          type='support-ticket'
                        />
                        <button type='submit' className='btn btn-primary mt-3'>
                          Submit
                        </button>
                      </form>
                    </div>

                    {/* Comment Section */}
                    {Array.isArray(comments) ? (
                      comments.map((comment) => (
                        <div key={comment.user_id} className='card mb-3'>
                          <div className='card-body'>
                            <h6 className='card-subtitle mb-2 text-muted'>
                              {comment.user_name}
                            </h6>
                            <p className='card-text'>{comment.comment}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No comments available.</p>
                    )}
                  </div>
                ))
              : "No"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewTickets;
