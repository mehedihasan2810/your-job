import "./FeaturedJobs.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const [isSeeAllJobs, setSeeAllJobs] = useState(false);
  const { featuredJobs } = useLoaderData();

  return (
    <section className="feature-job">
      <div className="feature-container container-center">
        <h2>Featured Jobs</h2>
        <p className="feature-desc">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="feature-items">
          {(isSeeAllJobs ? featuredJobs : featuredJobs.slice(0, 4)).map(
            ({
              id,
              logo,
              title,
              company,
              location,
              salary,
              time,
              workspace,
            }) => (
              <div key={id} className="feature-item">
                <img src={logo} alt="" />
                <h3>{title}</h3>
                <p className="company-name">{company}</p>
                <div className="work-time">
                  <div className="btn-secondary">{workspace}</div>
                  <div className="btn-secondary">{time}</div>
                </div>
                <p className="address-salary">
                  <span className="align-center">
                    {" "}
                    <LocationOnOutlinedIcon /> {location}
                  </span>
                  <span className="align-center">
                    {" "}
                    <MonetizationOnOutlinedIcon /> Salary : {salary}
                  </span>
                </p>
                <button className="btn-primary">View Details</button>
              </div>
            )
          )}
        </div>

        <button
          onClick={() => {
            setSeeAllJobs(!isSeeAllJobs);
          }}
          className="see-all-btn btn-primary"
        >
          {isSeeAllJobs ? "See Less Jobs" : "See All Jobs"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
