import React from "react";
import data from "./Inputs.json";


let itemList = [];
data.inputs.forEach((d) => {
  itemList.push(<InputsCard data={d} />);
});


function InputsCard({ data }) {
  return (
    <div id="inputsType">
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {data.label}
      </label>
      <input disabled
        type={data.type}
        id={data.id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={data.labels}
      />
            <div className="relative">
              <button className="px-3 py-2 p-2.5 font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-500 ease" >
                Agregar
              </button>
            </div>
    </div>
  );
}

const Formulario = () => {
  return (
    <div class="flex flex-col md:lg:xl:flex-row">
      <div class="h-screen w-screen md:lg:xl:w-1/2 bg-gray-100 flex flex-wrap justify-center content-center ">
        <div class="max-w-2xl mx-auto bg-white p-16">
          <div class="flex items-center justify-center font-black m-3 mb-12">
            <svg
              class="h-10 w-10 mr-3 text-indigo-600 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 class="tracking-wide text-3xl text-gray-900">
             Seleccioné los campos para agregarlos al formulario
            </h1>
          </div>
          <p class="mt-5">Click en el botón para agregarlo al formulario</p>
          <form>
            <div class="grid gap-6 mb-6 lg:grid-cols-2" id="forms">
              {itemList}
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen  md:lg:xl:w-1/2 bg-indigo-600 flex flex-wrap justify-center content-center">
        <div className="bg-white p-8 rounded-xl shadow-xl shadow-neutral-900 w-96">
          <form action="" className="bg-white">
            <h2 className="text-2xl font-bold">Llena tus datos!</h2>
            <p className="my-4 opacity-70">
              Para eliminar un campo da click en el icono
            </p>
            <hr className="my-6" />
            <label className="uppercase text-sm font-bold opacity-70">
              Nombre
            </label>
            <input
              type="text"
              className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
            />
            <label className="uppercase text-sm font-bold opacity-70">
              Email
            </label>
            <input
              type="text"
              className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded"
            />
            <label className="uppercase text-sm font-bold opacity-70">
              Lenguaje
            </label>
            <select className="w-full p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
              <option value="">Javascript</option>
              <option value="">Ruby</option>
              <option value="">Python</option>
              <option value="">PHP</option>
              <option value="">Java</option>
            </select>
            <div className="relative">
              <button className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-500 ease">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
