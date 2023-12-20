import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center gap-[50px] lg:gap-0 flex-col lg:flex-row">
          {/* ======== About Image ======= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ==== About Conten ========== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-1">
            <h2 className="heading ">Proud to be one the best</h2>
            <p className="text_para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              esse quisquam ipsa illo quibusdam quod dolor, id quia sapiente.
              Ab. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium exercitationem obcaecati inventore in voluptatum
              eveniet.
            </p>
            <p className="text_para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              esse quisquam ipsa illo quibusdam quod dolor, id quia sapiente.
              Ab.
            </p>
            <Link to="\">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
