import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { setJobIds } from "../../localStorage/localStorage";
import { useEffect, useState } from "react";

export const jobDetailsLoader = async () => {
  return fetch("data.json");
};

const JobDetails = () => {
  const [isJobAdded, setIsJobAdded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const { featuredJobs } = useLoaderData();
  const { id } = useParams();

  const {
    description,
    responsibility,
    requirement,
    experiences,
    salary,
    title,
    contact,
  } = featuredJobs.find((job) => job.id === Number(id));

  const handleSetJobs = () => {
    const status = setJobIds(id);
    if (status === "successful") {
      setIsJobAdded(true);
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
      setIsJobAdded(true);
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isJobAdded) {
      timeoutId = setTimeout(() => {
        setIsJobAdded(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [isJobAdded]);

  return (
    <section className="job-details">
      <div className="job-details-header">
        <h2>Job Details</h2>
      </div>

      <div className="job-details-container">
        <div className="first-half">
          <p>
            <strong>Job Description: </strong>
            {description}
          </p>
          <p>
            <strong>Job Responsibility: </strong>
            {responsibility}
          </p>
          <p>
            <strong>Educational Requirements:</strong>
          </p>
          <p>{requirement}</p>
          <p>
            <strong>Experiences:</strong>
          </p>
          <p>{experiences}</p>
        </div>

        <div className="second-half">
          <div className="job-contact-info">
            <h3>Job Details</h3>
            <hr />
            <div className="salary-job-title">
              <div>
                <MonetizationOnOutlinedIcon className="contact-icon" />
                <strong> Salary: </strong>
                {salary}
              </div>
              <div>
                <WorkOutlineOutlinedIcon className="contact-icon" />
                <strong> Job Title: </strong>
                {title}
              </div>
            </div>

            <h3>Contact Information</h3>
            <hr />
            <div className="contact">
              <div>
                <PhoneOutlinedIcon className="contact-icon" />
                <strong> Phone: </strong> {contact.phone}
              </div>
              <div>
                <EmailOutlinedIcon className="contact-icon" />
                <strong> Email: </strong> {contact.email}
              </div>
              <div>
                <LocationOnOutlinedIcon className="contact-icon" />
                <strong> Address: </strong> {contact.address}
              </div>
            </div>
          </div>

          <button onClick={handleSetJobs} className="btn-primary apply-btn">
            Apply Now
          </button>
        </div>
      </div>

      {isJobAdded && (
        <h4 className={isSuccess ? "success" : "alert"}>
          {isSuccess
            ? "The job has been applied successfully."
            : "This job has already been applied!"}
        </h4>
      )}
    </section>
  );
};

export default JobDetails;
