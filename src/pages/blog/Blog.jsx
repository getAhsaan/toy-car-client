import React from "react";

const Blog = () => {
  return (
    <>
    <h2 className="md:text-5xl text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
       Blog
      </h2>
      <section class="bg-white dark:bg-gray-900 rounded-xl my-8">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 md:text-6xl text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-white">
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
                <div class="text-gray-500 dark:text-gray-400">
                  <p className="text-2xl">
                    <span className="text-amber-600">Access Token:</span> An
                    access token is a credential that represents the
                    authorization granted to a user or client application to
                    access specific resources or perform certain actions. It is
                    usually a short-lived token with a limited lifespan. The
                    access token is presented by the client application to the
                    server or API it wishes to access to prove its identity and
                    permissions. The server validates the token and allows or
                    denies access based on its validity and the associated
                    permissions.{" "}
                  </p>

                </div>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-white">
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
                <p class="text-gray-500 dark:text-gray-400 text-2xl">
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Sunt harum magni qui
                  dolore fugit maiores nobis consectetur, ea repellendus
                  voluptate? Atque odio consequuntur earum libero sequi saepe,
                  enim, ut possimus nulla repudiandae iure? Quibusdam non
                  ratione dignissimos, excepturi dolorem sint aut cumque magni!
                  Magni doloribus voluptate, quisquam provident est porro ipsa
                  id cupiditate consectetur ab at. Quam pariatur eaque quo
                  perspiciatis a, porro quibusdam eligendi praesentium maiores
                  recusandae quidem harum provident quaerat dolor libero cum?
                  Dicta voluptate dolor nam eligendi sunt asperiores qui
                  mollitia sed id dolorem quae esse dolores aliquid enim quia
                  temporibus praesentium ipsa adipisci nemo, sapiente
                  perspiciatis!
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-white">
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
                <p class="text-gray-500 dark:text-gray-400 text-2xl">
                  The free updates that will be provided is based on the 
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nam mollitia quos ratione. Esse, dolor! Harum nihil eveniet
                  hic beatae, suscipit excepturi accusamus dicta architecto
                  cumque quod odio dolores dolorem porro eaque unde enim iure
                  eum ipsam. Libero maxime commodi quo tenetur vel sapiente
                  delectus eligendi exercitationem ea eveniet. Necessitatibus
                  nesciunt, consequatur quaerat delectus error dicta molestias.
                  Error dicta cum libero accusantium dolor pariatur vel in
                  doloremque? Accusantium beatae explicabo pariatur provident
                  voluptate quibusdam vero rem. Eos eaque consequuntur assumenda
                  commodi dolores labore cum ducimus neque, obcaecati
                  perspiciatis est architecto et veritatis ratione modi impedit
                  laborum porro nostrum eius quisquam accusantium, esse vero
                  atque ipsum! Omnis facilis consequatur doloribus. Quia porro
                  alias laudantium in nesciunt. Minus corporis, officiis
                  consequatur qui modi quis a harum accusamus aliquid? Eaque
                  inventore cum pariatur nesciunt commodi earum quibusdam maxime
                  nobis quis id sed optio
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 md:text-4xl text-2xl font-medium text-gray-900 dark:text-white">
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
                <p class="text-gray-500 dark:text-gray-400 text-2xl">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aspernatur odio laboriosam
                  inventore ex quia possimus consequatur veniam quidem quis
                  architecto magnam assumenda debitis cum, temporibus dolorum?
                  Vero, sequi delectus inventore doloribus eveniet et molestiae
                  cum maxime at repellat excepturi ipsam! Eius exercitationem
                  magnam impedit sunt illum autem quod optio tempora deleniti
                  quasi, voluptatibus dolorem explicabo eaque excepturi et saepe
                  temporibus iusto error nulla repellat totam sapiente magni
                  itaque blanditiis! Nemo maxime non eaque officiis quam
                  quisquam consequatur repellendus, vero nostrum neque dolor!
                  Deserunt illum assumenda, doloribus accusantium iusto animi
                  tempore dicta. Suscipit sapiente exercitationem dicta! Nulla
                  ipsa excepturi corporis illum atque! Expedita error quae
                  libero alias velit consequuntur minima! Exercitationem
                  dignissimos impedit perferendis laboriosam magni sint quam
                  dolore amet nesciunt saepe ad et itaque consequuntur, veniam
                  non cupiditate ipsum quia molestiae nisi, dicta odit earum sed
                  tenetur! Sapiente !
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
