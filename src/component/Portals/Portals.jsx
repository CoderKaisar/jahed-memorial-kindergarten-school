// eslint-disable-next-line no-unused-vars
import React from "react";
import Portal from "../Portal/Portal";

const Portals = () => {
  const portals = [
    {
      id: 1,
      title: "Staff Portal",
      image:
        "https://images.unsplash.com/photo-1568658176307-bfbd2873abda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhZmYlMjBsb2dpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Students Portal",
      image:
        "https://plus.unsplash.com/premium_photo-1663051241451-709fa4de55bc?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Teachers Portal",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByaW5jaXBhbCUyMGxvZ2lufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Guest Portal",
      image:
        "https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Vlc3QlMjBsb2dpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div>
      <h2>This is Login Portal for All</h2>
      <div className="grid grid-cols-4">
        {portals.map((portal) => (
          <Portal key={portal.id} portal={portal}></Portal>
        ))}
      </div>
    </div>
  );
};

export default Portals;
