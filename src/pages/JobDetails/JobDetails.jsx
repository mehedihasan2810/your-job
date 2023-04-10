import { useLoaderData } from "react-router-dom";
import "./JobDetails.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const jobDetailsLoader = async () => {
  return fetch("data.json");
};

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="job-details">
      <div className="job-details-header">
        <h2>Job Details</h2>
      </div>

      <div className="job-details-container">
        <div className="first-half">
          <p>
            <strong>Job Description: </strong>A UI/UX (User Interface/User
            Experience) designer is responsible for designing and creating
            engaging and effective interfaces for software and web applications.
            This includes designing the layout, visual design, and interactivity
            of the user interface.
          </p>
          <p>
            <strong>Job Responsibility: </strong>
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </p>
          <p>
            <strong>Educational Requirements:</strong>
          </p>
          <p>Bachelor degree to complete any reputational university.</p>
          <p>
            <strong>Experiences:</strong>
          </p>
          <p>2-3 Years in this field.</p>
        </div>

        <div className="second-half">
          <div className="job-contact-info">
            <h3>Job Details</h3>
            <hr />
            <div className="salary-job-title">
              <div>
                <MonetizationOnOutlinedIcon className="contact-icon" />
                <strong> Salary: </strong>
                100k
              </div>
              <div>
                <WorkOutlineOutlinedIcon className="contact-icon" />
                <strong> Job Title: </strong>
                divroduct Manager
              </div>
            </div>

            <h3>Contact Information</h3>
            <hr />
            <div className="contact">
              <div>
                <PhoneOutlinedIcon className="contact-icon" />
                <strong> Phone: </strong> 01716004998
              </div>
              <div>
                <EmailOutlinedIcon className="contact-icon" />
                <strong> Email: </strong> info@ gmail.com
              </div>
              <div>
                <LocationOnOutlinedIcon className="contact-icon" />
                <strong> Address: </strong> bangladesh
              </div>
            </div>
          </div>

          <button className="btn-primary apply-btn">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
