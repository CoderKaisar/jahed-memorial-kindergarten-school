import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Program from "../Program/Program";
const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const programs = [
    {
      id: 1,
      title: "Play Group",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit expedita",
      age: "3 - 7 Years",
      weakly: "5 Days",
      period: "04:30 hrs",
      image:
        "https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxheSUyMGdyb3VwJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Std Nursery",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit expedita",
      age: "5 - 6 Years",
      weakly: "4 Days",
      period: "05:30 hrs",
      image:
        "https://media.istockphoto.com/id/1459390129/photo/arts-teacher-supervising-a-group-of-kids-coloring-in-class.webp?b=1&s=170667a&w=0&k=20&c=RHu5Ptj_wS4wNlUTmEQHrNQzKs0f4dRnCM85lvFqh2Q=",
    },
    {
      id: 3,
      title: "Junior KG",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit expedita",
      age: "06 Years",
      weakly: "4 Days",
      period: "07:30 hrs",
      image:
        "https://media.istockphoto.com/id/1470160123/photo/female-teacher-reads-to-multi-cultural-elementary-school-pupils-sitting-on-floor-in-class-at.webp?b=1&s=170667a&w=0&k=20&c=hXuVWCHQ7tTSLWwai1_2hCAJ4iWQwZrJXxFkLuqP6xs=",
    },
  ];

  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center py-6">
        <h2 className="text-5xl text-yellow-600 font-semibold py-6">
          Our Special Programs
        </h2>
        <p className="text-xl w-2/3 text-center py-8">
          Jehad Kinder Garten School its doors in 1984 with a unique vision to
          provide its students with a globally focused study of arts.
        </p>
      </div>
      <div className="mx-20 py-4 ">
        <Slider {...settings}>
          {programs.map((program) => (
            <Program key={program.id} program={program}></Program>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Programs;
