import React from "react";
import {
  rails,
  express,
  ruby,
  node,
  mysql,
  postgressql,
  monogodb,
  HTML5,
  bt,
  graphcms,
  nextImg,
  reactImg,
  strapi,
  Tailwind,
  css,
  JS,
} from "../assets";

const Stack = () => {
  return (
    <div className="md:w-[68%]  w-[95%] max-w-[1240px] mx-auto flex items-center relative gap-16 my-[100px] tech_stack_container">
      <div className="tech_p ">
        <h3>Tech Stack</h3>
        <span className="tech_line"></span>
      </div>

      <div className=" tech_stack grid md:grid-cols-9 grid-cols-3">
        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={rails}
            alt="Ruby on Rails"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={express}
            alt="Express JS"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={ruby}
            alt="Ruby"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={node}
            alt="Node JS"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={mysql}
            alt="MySQL"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={postgressql}
            alt="PostgresSQL"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={monogodb}
            alt="mongoDB"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%]  drop-shadow-xl">
          <img
            src={reactImg}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px] h-[30px] w-[30px] "
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%] drop-shadow-xl">
          <img
            src={JS}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px] h-[40px]"
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%] drop-shadow-xl">
          <img
            src={css}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px]  h-[40px]"
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%] drop-shadow-xl">
          <img
            src={HTML5}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px]h-[40px]"
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%] drop-shadow-xl">
          <img
            src={Tailwind}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px] h-[40px]"
          />
        </div>

        <div className="cursor-pointer stack-box rounded-[50%] drop-shadow-xl">
          <img
            src={bt}
            alt="javaScript"
            className="md:w-[30px] md:h-[30px]h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Stack;
