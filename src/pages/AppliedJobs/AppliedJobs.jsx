import { getJobIds } from "../../localStorage/localStorage";
import "./AppliedJobs.scss";
import { Link, useLoaderData } from "react-router-dom";

export const appliedJobsLoader = () => {
  return fetch("data.json");
};

const AppliedJobs = () => {
  const { featuredJobs } = useLoaderData();
  const jobIds = getJobIds();

  let appliedJobs;
  if (jobIds) {
    appliedJobs = featuredJobs.filter((job) => jobIds.includes(String(job.id)));
  } else {
    appliedJobs = null;
  }

  return (
    <section className="applied-jobs">
      <div className="applied-jobs-header">
        <h2>Applied Jobs</h2>
      </div>

      <div className="applied-jobs-items container-center">
        {appliedJobs ? (
          appliedJobs.map(
            ({
              id,
              logo,
              company,
              salary,
              location,
              time,
              title,
              workspace,
            }) => (
              <div key={id} className="applied-jobs-item">
                <div className="first">
                  <div className="image">
                    <img src={logo} alt="" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p className="name">{company}</p>
                    <div className="work-time">
                      <div className="btn-secondary">{workspace}</div>
                      <div className="btn-secondary">{time}</div>
                    </div>
                    <div className="location-salary">
                      <p>{location}</p> <p>salary: {salary}</p>
                    </div>
                  </div>
                </div>

                <Link to={`/${id}`}>
                  {" "}
                  <button className="btn-primary">View Details</button>
                </Link>
              </div>
            )
          )
        ) : (
          <h1 className="no-job">You have not applied any job yet!</h1>
        )}
      </div>
    </section>
  );
};

export default AppliedJobs;
