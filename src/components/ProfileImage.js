import React from "react";
import pic from "../assets/portpic.jpg";

const ProfileImage = () => {
  return (
    <div>
      <img 
        src={pic}
        alt="my profile" 
        className="rounded-2xl mx-auto w-1/3 md:w-2/4" 
      />
    </div>
  );
};

export default ProfileImage;
