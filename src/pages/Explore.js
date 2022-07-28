import React, { useEffect, useState } from "react";

const Explore = () => {
  const [video, setVideos] = useState({});

  const fetchVideos = () => {
    fetch("/api/videos")
      .then((data) => data.json())
      .then((res) => setVideos(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <>
      <div
        className="md:max-w-sm md:h-96 rounded-sm text-xl font-semibold
       bg-red-500 my-10 text-center"
      >
        <h1>Explore</h1>

        <div></div>
      </div>
    </>
  );
};

export default Explore;
