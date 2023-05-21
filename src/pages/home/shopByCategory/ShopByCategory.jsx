import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../shopByCategory/ShopByCategory.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [categories, setCategories] = useState([
    "Bus-Toys",
    "Truck-Toys",
    "Train-Toys",
  ]);
  const [carData, setCarData] = useState([]);

  // load category
  useEffect(() => {
    fetch(`http://localhost:5000/categories/${categories[tabIndex]}`)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      });
  }, [tabIndex]);

  return (
    <div className="my-8">
      <h2 className="md:text-5xl text-3xl text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Shop By Category
      </h2>
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="w-1/2 mx-auto my-8 flex justify-center md:gap-8 gap-4">
          <Tab>
            <span className="text-2xl">Bus Toys</span>
          </Tab>
          <Tab>
            <span className="text-2xl">Truck Toys</span>
          </Tab>
          <Tab>
            <span className="text-2xl">Train Toys</span>
          </Tab>
        </TabList>
        <div className="grid md:grid-cols-4 gap-8">
          {carData.map((car) => (
            <div className="card bg-base-100 shadow-xl border-2">
              <figure>
                <img
                  src={car?.pictureUrl}
                  alt={car?.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase">{car?.name}</h2>

                <p className="text-xl">Price: ${car?.price}</p>
                <p className="text-xl badge-sm badge p-3">Category: {car?.subcategory}</p>
                <p className="text-xl">
                  Rating:{" "}
                  <Rating
                    readOnly
                    style={{ maxWidth: 100 }}
                    value={car?.pictureUrl}
                  />
                </p>

                <div className="card-actions justify-end">
                  <Link
                    to={`/single-toy/${car?._id}`}
                    className="btn btn-secondary btn-outline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
