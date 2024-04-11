import React, { FC, useState } from "react";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  return (
    <div className="flex flex-row items-center justify-center w-100 bg-amber-100">
      <div className="w-1/2 h-full p-8">
        <h1 className="text-2xl font-bold text-slate-700 mb-5">
          Comunícate con nosotros
        </h1>
        <p className="text-xl text-slate-700 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel
          omnis minus fugiat qui hic voluptate molestiae autem quisquam illum.
          Culpa perspiciatis vitae recusandae veniam enim rerum excepturi
          dolorem inventore!
        </p>
      </div>
      <div className="w-1/2 flex-row p-8 justify-center items-center bg-slate-200">
        <form action="">
          <div className="flex flex-row w-full flex-wrap justify-between">
            <div className="flex flex-col w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comentario"
              >
                Comentario
              </label>
              <textarea
                name="comentario"
                id="comentario"
                className="resize-none shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </div>
          <div className="w-full flex items-center justify-between p-2">
            <button
              className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
