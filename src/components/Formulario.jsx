import React, { useState, useEffect } from "react";
import Axios from "axios";

function Formulario() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:3000/apiv1/users",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class=" flex justify-center items-center">
        <card class="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-blue-800">
          <div class="col-span-4">
            <h2 class="font-bold text-3xl text-white ml-10 mt-8">
              ¡La información de tus usuarios!
            </h2>

            <p class="font-light text-white text-sm ml-10 mt-5">
              Mira las publicaciones, fotografías más populares ademas de la
              infromación de tus usuarios solamente con un clic
            </p>

            <button class="text-white font-semibold ml-10 mt-5 mb-8 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <div class="col-span-2 relative">
            <img
              src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
              class="absolute bottom-0 right-0"
            />
          </div>
        </card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {list.map((item) => (
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">{item.name}</p>
              <p className="text-base text-gray-400 font-normal">
                {item.username}
              </p>
              <p className="text-base leading-relaxed text-gray-500 font-normal">
                {item.email}
              </p>
              <div className="flex justify-start space-x-2">
                <div className="w-full text-center mx-auto">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 outline-none border border-indigo-100 rounded text-white font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Publicaciones
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-500 outline-none border border-indigo-100 rounded text-white font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Fotos
                  </button>
                </div>
               
              </div>
              <div className="w-full text-center mx-auto">
              <button
                    type="button"
                    className="px-4 py-2 bg-red-500 outline-none border border-indigo-100 rounded text-white font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Logs
                  </button>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formulario;
