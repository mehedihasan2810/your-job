import "./FeaturedJobs.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const { featuredJobs } = useLoaderData();
  console.log(featuredJobs);

  return (
    <section className="feature-job">
      <div className="feature-container container-center">
        <h2>Featured Jobs</h2>
        <p className="feature-desc">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="feature-items">
          {featuredJobs.map(
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

          {/* <div className="feature-item">
            <img src="./assets/All Images/google-1-1 1.png" alt="" />
            <h3>Technical Database Engineer</h3>
            <p className="company-name">Google LLC</p>
            <div className="work-time">
              <div className="btn-secondary">Remote</div>
              <div className="btn-secondary">Full Time</div>
            </div>
            <p className="address-salary">
              <span className="align-center">
                {" "}
                <LocationOnOutlinedIcon /> Dhaka, Bangladesh
              </span>
              <span className="align-center">
                {" "}
                <MonetizationOnOutlinedIcon /> Salary : 100K - 150K
              </span>
            </p>
            <button className="btn-primary">View Details</button>
          </div> */}

          {/* <div className="feature-item">
            <img
              src="../../../public/assets/All Images/google-1-1 1.png"
              alt=""
            />
            <h3>Technical Database Engineer</h3>
            <p>Google LLC</p>
            <div className="work-time">
              <div className="btn-secondary">Remote</div>
              <div className="btn-secondary">Full Time</div>
            </div>
            <p>
              <span> Dhaka, Bangladesh</span>
              <span>Salary : 100K - 150K</span>
            </p>
            <button>View Details</button>
          </div>
          <div className="feature-item">
            <img
              src="../../../public/assets/All Images/google-1-1 1.png"
              alt=""
            />
            <h3>Technical Database Engineer</h3>
            <p>Google LLC</p>
            <div>
              <div>Remote</div>
              <div>Full Time</div>
            </div>
            <p>
              <span>Dhaka, Bangladesh</span>
              <span>Salary : 100K - 150K</span>
            </p>
            <button>View Details</button>
          </div>
          <div className="feature-item">
            <img
              src="../../../public/assets/All Images/google-1-1 1.png"
              alt=""
            />
            <h3>Technical Database Engineer</h3>
            <p>Google LLC</p>
            <div>
              <div>Remote</div>
              <div>Full Time</div>
            </div>
            <p>
              <span>Dhaka, Bangladesh</span>
              <span>Salary : 100K - 150K</span>
            </p>
            <button>View Details</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
