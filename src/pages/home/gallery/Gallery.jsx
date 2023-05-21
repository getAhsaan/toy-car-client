import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  // gallery image
  useEffect(() => {
    fetch("https://toy-car-zone-server-smoky.vercel.app/gallery-images")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  console.log(gallery);
  return (
    <div className="mt-20">
      <h2 className="md:text-5xl text-3xl text-center text-white font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Toy Car Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {gallery.map((img) => (
          <div
            key={img._id}
            data-aos="fade-up"
          >
            <img
              className="md:h-80 h-32 w-96 rounded-lg border-4 grayscale hover:grayscale-0 cursor-pointer "
              src={img?.pictureUrl}
              alt="gallery image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
