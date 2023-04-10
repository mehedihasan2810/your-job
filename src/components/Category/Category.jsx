import { useLoaderData, useNavigation } from "react-router-dom";
import "./Category.scss";

export const categoryLoader = async () => {
  return fetch("data.json");
};

const Category = () => {
  const { category } = useLoaderData();
  // console.log(category)

  const navigation = useNavigation();
  // console.log(navigation)

  return (
    <section className="category">
      <div className="container-center">
        <h2>Job Category List</h2>
        <p className="category-desc">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="category-items">
          {category.map(({ id, logo, name, available }) => (
            <div key={id} className="category-item">
              <img src={logo} alt="" />
              <h3>{name}</h3>
              <p className="job-available">{available}</p>
            </div>
          ))}

          {/* <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p className="job-available">300 jobs available</p>
          </div> */}

          {/* <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p className="job-available">300 jobs available</p>
          </div>
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p className="job-available">300 jobs available</p>
          </div>
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p className="job-available">300 jobs available</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
