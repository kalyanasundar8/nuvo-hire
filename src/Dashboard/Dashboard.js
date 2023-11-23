import { useEffect, useState } from "react";
import { FaPlusCircle, FaTasks, FaChartBar, FaTicketAlt } from "react-icons/fa";
import { MdDrafts } from 'react-icons/md';
import CreateNewJobs from "../Dashboard/CreatNewJobs";
import ManageJobs from "../Dashboard/ManageJobs";
import Profile from "../Dashboard/Profile";
import Tickets from "../Dashboard/Tickets";
import { fetchRss } from "../services/DashboardServices";
import SavedJobs from "./SavedJobs";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState(1);

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
        <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-light" style={{ height: "75vh", position: "static"}}>
          <div className="position-sticky">
            <h1 className="h2 text-center my-4">Dashboard</h1>
            <ul className="nav flex-column text-start fs-7">
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
                  <FaChartBar className="me-2" /> Stats
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 2 ? "active" : ""}`}
                  style={{
                    color: activeItem === 2 ? "#007BFF" : "#777",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleItemClick(2)}
                >
                  <FaTicketAlt className="me-2" /> Tickets
                </a>
              </li>
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
                  <FaTasks className="me-2" /> Manage Jobs
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 4 ? "active" : ""}`}
                  style={{
                    color: activeItem === 4 ? "#007BFF" : "#777",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(4)}
                >
                  <MdDrafts className="me-2" /> Drafts
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeItem === 5 ? "active" : ""}`}
                  style={{
                    color: activeItem === 5 ? "#007BFF" : "#777",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(5)}
                >
                  <FaPlusCircle className="me-2" /> Create New Jobs
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div></div>
          {activeItem === 1 && <Profile />}
          {activeItem === 2 && <Tickets />}
          {activeItem === 3 && <ManageJobs />}
          {activeItem === 4 && <SavedJobs />}
          {activeItem === 5 && <CreateNewJobs />}
        </main>
      </div>
    </div>
  );
}
