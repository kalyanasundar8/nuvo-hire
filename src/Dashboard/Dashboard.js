import { useEffect, useState } from "react";
import { FaPlusCircle, FaTasks, FaUser, FaTicketAlt } from "react-icons/fa";
import CreateNewJobs from "../Dashboard/CreatNewJobs";
import ManageJobs from "../Dashboard/ManageJobs";
import Profile from "../Dashboard/Profile";
import Tickets from "../Dashboard/Tickets";
import { fetchRss } from "../services/DashboardServices";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState(3);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  // const toggleJobPost = () => {
  //   setJobPost(!showJobPost);
  // };

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
      className="container-fluid"
      style={{ marginTop: "150px", marginBottom: "50px" }}
    >
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-light">
          <div className="position-sticky">
            <h1 className="h2 text-center my-4">Dashboard</h1>
            <ul className="nav flex-column text-start fs-7">
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 3 ? "active" : ""}`}
                  style={{
                    color: activeItem === 3 ? "#007BFF" : "#777",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(3)}
                >
                  <FaUser className="me-2" /> Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 4 ? "active" : ""}`}
                  style={{
                    color: activeItem === 4 ? "#007BFF" : "#777",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleItemClick(4)}
                >
                  <FaTicketAlt className="me-2" /> Tickets
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 2 ? "active" : ""}`}
                  style={{
                    color: activeItem === 2 ? "#007BFF" : "#777",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(2)}
                >
                  <FaTasks className="me-2" /> Manage Jobs
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 1 ? "active" : ""}`}
                  style={{
                    color: activeItem === 1 ? "#007BFF" : "#777",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(1)}
                >
                  <FaPlusCircle className="me-2" /> Create New Jobs
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* <div className="row mt-3">
            <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#ADD8E6" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#1565C0" }}>
                      Job applied
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#1565C0" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-7 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#C1FFC1" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#2E7D32" }}>
                      Approved jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#2E7D32" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFCCCC" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#B71C1C" }}>
                      Not approved Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#B71C1C" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFE4B5" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#E65100" }}>
                      Approval pending Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#E65100" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFF9C4" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#FBC02D" }}>
                      Created Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#FBC02D" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div></div>
          {activeItem === 1 && <CreateNewJobs />}
          {activeItem === 2 && <ManageJobs />}
          {activeItem === 3 && <Profile />}
          {activeItem === 4 && <Tickets />}
        </main>
      </div>
    </div>
  );
}
