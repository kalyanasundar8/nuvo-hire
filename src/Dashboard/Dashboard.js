import { useEffect, useState } from "react";
import { FaPlusCircle, FaTasks, FaUser, FaTicketAlt } from "react-icons/fa";
import CreateNewJobs from "../components/employer/CreateNewJobs";
import { fetchRss } from "../services/DashboardServices";

export default function Dashboard() {
  const [showJobPost, setJobPost] = useState(false);

  const toggleJobPost = () => {
    setJobPost(!showJobPost);
  };

  // Dashboard Integrations
  const getDashboardDetails = async () => {
    try {
      const response = await fetchRss();
      console.log(response.data.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getDashboardDetails();
  }, []);

  return (
    <div
      className='container-fluid'
      style={{
        marginTop: "10%",
        marginBottom: "5%",
        maxWidth: "1400px",
      }}
    >
      <div className='row'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2'></div>
        <nav className='col-md-3 col-lg-2 d-md-block sidebar'>
          <div className='position-sticky'>
            <h1 className='h2'>Dashboard</h1>
            <ul
              className='nav flex-column text-start fs-5'
              style={{ marginTop: "80px" }}
            >
              <li className='nav-item mt-4'>
                <a
                  className=''
                  href='#'
                  style={{
                    color: "#ccc",
                  }}
                  onClick={toggleJobPost}
                >
                  <FaPlusCircle className='mx-2' /> Create New Jobs
                </a>
              </li>
              <li className='nav-item mt-4'>
                <a
                  className=''
                  href='#'
                  style={{
                    color: "#ccc",
                  }}
                >
                  <FaTasks className='mx-2' /> Manage Jobs
                </a>
              </li>
              <li className='nav-item mt-4'>
                <a
                  className=''
                  href='#'
                  style={{
                    color: "#ccc",
                  }}
                >
                  <FaUser className='mx-2' /> Profile
                </a>
              </li>
              <li className='nav-item mt-4'>
                <a
                  className=''
                  href='#'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ccc",
                  }}
                >
                  <FaTicketAlt className='mx-2' /> Tickets
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className='col-md-12 col-lg-10 px-md-4'>
          <div className='row'>
            <div className='col-md-4 col-sm-6 mb-4'>
              <div
                className='card w-100'
                style={{ maxWidth: "300px", backgroundColor: "#e0ffe0" }}
              >
                <div className='card-body d-flex justify-content-between align-items-center'>
                  <div>
                    <h5 className='card-title text-muted'>Job Opening</h5>
                  </div>
                  <div>
                    <h1 className='card-text' style={{ fontSize: "24px" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 mb-4'>
              <div
                className='card w-100'
                style={{ maxWidth: "300px", backgroundColor: "#e0f2f1" }}
              >
                <div className='card-body d-flex justify-content-between align-items-center'>
                  <div>
                    <h5 className='card-title text-muted'>Viewed Jobs</h5>
                  </div>
                  <div>
                    <h1 className='card-text' style={{ fontSize: "24px" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 mb-4'>
              <div
                className='card w-100'
                style={{ maxWidth: "300px", backgroundColor: "#ffe0e0" }}
              >
                <div className='card-body d-flex justify-content-between align-items-center'>
                  <div>
                    <h5 className='card-title text-muted'>Rejected Jobs</h5>
                  </div>
                  <div>
                    <h1 className='card-text' style={{ fontSize: "24px" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showJobPost && <CreateNewJobs />}
        </main>
      </div>
    </div>
  );
}
