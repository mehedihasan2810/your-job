
import './Category.scss';

const Category = () => {
  return (
    <section className='category'>
      <div className='category-center'>
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="category-items">
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p>300 jobs available</p>
          </div>
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p>300 jobs available</p>
          </div>
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p>300 jobs available</p>
          </div>
          <div className="category-item">
            <img src="../../../public/assets/Icons/accounts 1.png" alt="" />
            <h3>Account & Finance</h3>
            <p>300 jobs available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
