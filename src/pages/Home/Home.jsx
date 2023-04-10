import React from "react";
import { useGlobalContext } from "../../contexts/context";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedJobs/>
    </div>
  );
};

export default Home;
