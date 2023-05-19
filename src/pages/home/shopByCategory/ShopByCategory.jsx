import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../shopByCategory/ShopByCategory.css"

const ShopByCategory = () => {
  return (
    <div className="my-8">
      <h2 className="md:text-5xl text-3xl text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Shop By Category
      </h2>
      <Tabs>
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

        <TabPanel>
         <div className="grid md:grid-cols-4 gap-8">

            {/* card 1  */}
            <div className="card bg-base-100 shadow-xl border-2">
            <figure>
              <img
                src="https://i.ibb.co/C9CY6ss/1000-F-213939630-8r6g-G7-Dj5-Npbdwta-F0dn-Ct-Dj-We-Q5t1lr.jpg"
                alt="Bus Toys"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">Remote Control Bus</h2>
          
              <p className="text-xl">Price: $50</p>
              <p className="text-xl">Rating: ****</p>
            
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-outline">View Details</button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-base-100 shadow-xl border-2">
            <figure>
              <img
                src="https://i.ibb.co/C9CY6ss/1000-F-213939630-8r6g-G7-Dj5-Npbdwta-F0dn-Ct-Dj-We-Q5t1lr.jpg"
                alt="Bus Toys"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">Remote Control Bus</h2>
          
              <p className="text-xl">Price: $50</p>
              <p className="text-xl">Rating: ****</p>
            
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-outline">View Details</button>
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div className="card bg-base-100 shadow-xl border-2">
            <figure>
              <img
                src="https://i.ibb.co/C9CY6ss/1000-F-213939630-8r6g-G7-Dj5-Npbdwta-F0dn-Ct-Dj-We-Q5t1lr.jpg"
                alt="Bus Toys"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">Remote Control Bus</h2>
          
              <p className="text-xl">Price: $50</p>
              <p className="text-xl">Rating: ****</p>
            
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-outline">View Details</button>
              </div>
            </div>
          </div>
          {/* card -4  */}
          <div className="card bg-base-100 shadow-xl border-2">
            <figure>
              <img
                src="https://i.ibb.co/C9CY6ss/1000-F-213939630-8r6g-G7-Dj5-Npbdwta-F0dn-Ct-Dj-We-Q5t1lr.jpg"
                alt="Bus Toys"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title uppercase">Remote Control Bus</h2>
          
              <p className="text-xl">Price: $50</p>
              <p className="text-xl">Rating: ****</p>
            
              <div className="card-actions justify-end">
                <button className="btn btn-secondary btn-outline">View Details</button>
              </div>
            </div>
          </div>
          

         </div>

          
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
