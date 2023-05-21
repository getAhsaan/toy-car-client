import React from "react";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const Blog = () => {
  // title
  useDynamicTitle("| Blogs");
  return (
    <>
      <h2 className="md:text-5xl text-gray-500 text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Blog
      </h2>
      <section class="bg-white dark:bg-gray-900 rounded-xl my-8 text-gray-500">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 md:text-6xl text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-500">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-gray-500">
                  <svg
                    class="flex-shrink-0 mr-2 w-12 h-12 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h3>
                <div class="  text-gray-500">
                  <p>
                    <span className="text-orange-300 font-bold text-2xl">
                      Access Token :
                    </span>{" "}
                    <span className="text-2xl">
                      An access token is like a pass that allows you to access
                      specific resources or actions after you log in or
                      authenticate. It doesn't last very long.
                    </span>
                  </p>
                  <p>
                    <span className="text-orange-300 font-bold text-2xl">
                      Refresh Token :
                    </span>{" "}
                    <span className="text-2xl">
                      A refresh token is a special pass that is longer-lasting.
                      It helps you get a new access token when the current one
                      expires, so you don't have to keep logging in.
                    </span>
                  </p>
                  <p>
                    <span className="text-orange-300 font-bold text-2xl">
                      How They Work :
                    </span>{" "}
                    <span className="text-2xl">
                      Access tokens are given to you after you log in
                      successfully. You use them to prove your identity and get
                      access to things. When an access token expires, you can
                      use the refresh token to get a new access token without
                      logging in again.
                    </span>
                  </p>
                  <p>
                    <span className="text-orange-300 font-bold text-2xl">
                      Where to Store Them on the Client-side :
                    </span>{" "}
                    <span className="text-2xl">
                      To keep access tokens and refresh tokens safe on the
                      client-side, you can store them in secure places like
                      HTTP-only cookies or the browser's local storage. These
                      methods have built-in protections to prevent others from
                      accessing the tokens. It's important to follow security
                      guidelines and use storage methods that keep your tokens
                      secure.
                    </span>
                  </p>
                </div>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-gray-500">
                  <svg
                    class="flex-shrink-0 mr-2 w-12 h-12 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Compare SQL and NoSQL databases?
                </h3>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    SQL Databases :
                  </span>{" "}
                  <span className="text-2xl">
                    Relational Structure: SQL databases organize data into
                    tables with predefined schemas. ACID Compliance: They
                    provide strong data consistency and support ACID properties.
                    Query Language: SQL databases use structured query language
                    (SQL) for defining and manipulating data. Suitable for
                    Complex Relationships: They are well-suited for applications
                    with complex data relationships.
                  </span>
                </p>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    NoSQL Databases :
                  </span>{" "}
                  <span className="text-2xl">
                    {" "}
                    <br />
                    Flexible Schema: NoSQL databases have a dynamic schema,
                    allowing for storage of unstructured, semi-structured, and
                    structured data without predefined schemas. <br />{" "}
                    Scalability and Distribution: They focus on horizontal
                    scalability, distributed architectures, and high
                    availability to handle large volumes of data and growing
                    demands. <br /> Variety of Data Models: NoSQL databases
                    offer flexible data models like key-value, document,
                    columnar, and graph to handle diverse data types and
                    relationships. <br /> Well-Suited for Big Data: They are
                    commonly used in applications dealing with large volumes of
                    unstructured or rapidly changing data, such as real-time
                    analytics, content management systems, and IoT applications.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-gray-500">
                  <svg
                    class="flex-shrink-0 mr-2 w-12 h-12 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is express js? What is Nest JS?
                </h3>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    Express js :
                  </span>{" "}
                  <span className="text-2xl">
                    {" "}
                    Express.js is a lightweight web application framework for
                    Node.js. It simplifies server-side development by handling
                    HTTP requests, routing, middleware, and responses. It is
                    widely used for building APIs and web applications due to
                    its simplicity and scalability.
                  </span>
                </p>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    Next js :
                  </span>{" "}
                  <span className="text-2xl">
                    {" "}
                    Next.js is a popular React framework for building
                    server-side rendered and statically generated web
                    applications. It provides features like automatic code
                    splitting, static site generation, API routes, and CSS
                    support. It enhances development experience and optimizes
                    performance.
                  </span>
                </p>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    Next.js offers several key features, including :
                  </span>{" "}
                  <span className="text-2xl">
                    {" "}
                    <br />
                    1. Automatic code splitting <br />
                    2. Static site generation (SSG) <br />
                    3. API routes <br />
                    4. Hot module replacement (HMR) <br />
                    5. Dynamic imports etc.
                  </span>
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-gray-500">
                  <svg
                    class="flex-shrink-0 mr-2 w-12 h-12 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is MongoDB aggregate and how does it work?
                </h3>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    MongoDB aggregate :
                  </span>{" "}
                  <span className="text-2xl">
                    MongoDB aggregation is a powerful method to process
                    collections of documents using a pipeline. The pipeline
                    consists of stages that can filter, sort, group, reshape,
                    and modify the documents as they flow through it. Each stage
                    in the pipeline performs a specific operation, allowing for
                    efficient and flexible data processing.
                  </span>
                </p>
                <p>
                  <span className="text-orange-300 font-bold text-2xl">
                    How does it work :
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 text-2xl">
                    Pipeline Stages :
                  </span>{" "}
                  <span className="text-2xl">
                    Each stage represents an operation, such as filtering,
                    grouping, sorting, or reshaping the documents. Common stages
                    include $match, $group, $sort, and $project.
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 text-2xl">
                    Document Flow :
                  </span>{" "}
                  <span className="text-2xl">
                    The input documents pass through the pipeline stages
                    sequentially. Each stage takes the output of the previous
                    stage as its input, enabling a series of transformations.
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 text-2xl">
                    Data Transformation :
                  </span>{" "}
                  <span className="text-2xl">
                    TAt each stage, the specified operation is applied to the
                    input documents, modifying or reshaping them. For example,
                    $match filters documents based on conditions, while $group
                    groups documents and performs aggregations.
                  </span>
                </p>
                <p>
                  <span className="text-gray-500 text-2xl">
                    Document Processing :
                  </span>{" "}
                  <span className="text-2xl">
                    {" "}
                    Documents progress through the pipeline, undergoing
                    transformations defined in each stage. The resulting
                    documents from each stage become the input for the next
                    stage, creating a flow of data processing.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
