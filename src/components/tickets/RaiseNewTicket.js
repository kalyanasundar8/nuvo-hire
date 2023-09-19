import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import FileUploader from "../layouts/FileUploader";

const RaiseNewTicket = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Enter a title"),
    description: Yup.string().required("Enter a description"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      attachment: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      raiseNewTicket(values);
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [supportDocs, setSupportDocs] = useState([]);

  const raiseNewTicket = async (values) => {
    const payload = {
      title: values.title,
      description: values.description,
      attachment: supportDocs,
    };
    try {
      const response = await ApiService(
        "raise-new-ticket",
        "POST",
        payload,
        true
      );
      if (response.status === 200) {
        console.log("Ticket created successfully");
      } else {
        console.log("Your ticket is not created");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleSupportDocsChange = (files) => {
    setSupportDocs(files);
  };

  return (
    <div class='page-content'>
      {/*Start home */}
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Raise New Ticket</h3>
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
          <div className='row'>
            <div className='col-lg-8'>
              <div className='mb-4 mb-lg-0'>
                <h6 className='mb-0'>Raise New Ticket</h6>
              </div>
            </div>
          </div>
          {/*end row*/}
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    value={title}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setTitle(e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className='error'>{formik.errors.title}</div>
                  )}
                </div>
                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'>
                    Description
                  </label>
                  <textarea
                    className='form-control'
                    id='description'
                    name='description'
                    rows='4'
                    value={description}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setDescription(e.target.value);
                    }}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.description && formik.errors.description && (
                    <div className='error'>{formik.errors.description}</div>
                  )}
                </div>
                <FileUploader
                  setAttachmentFiles={handleSupportDocsChange}
                  type='support-ticket'
                />
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*END TICKETS */}
    </div>
  );
};

export default RaiseNewTicket;
