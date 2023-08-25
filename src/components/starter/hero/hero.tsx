import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import ImgFoodmania from "~/media/pexels-david-geib-3220617.png?jsx";



export default component$(() => {


  const dias = useSignal("");
  const isClosed = useSignal("");


  useTask$(() => {
    dias.value = new Date().getDay().toLocaleString();

  
    switch (dias.value) {
      case "0":
        dias.value = "Domingo";
        break;
      case "1":
        dias.value = "Lunes";
        break;
      case "2":
        dias.value = "Martes";
        break;
      case "3":
        dias.value = "Miércoles";
        break;
      case "4":
        dias.value = "Jueves";
        break;
      case "5":
        dias.value = "Viernes";
        break;
      case "6":
        dias.value = "Sábado";
        break;

    }

  })
  useTask$(() => {
    if (dias.value === "0" || dias.value === "6") {
      isClosed.value = "Abierto"
    } else {
      isClosed.value = "Cerrado"
    }
  })




  return (
    <>

      <section
        class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh)] pt-22 sm:pt-28 "
      >
        <div
          style=""
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="mt-10 space-y-3 min-h-[11.25rem]" style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 10rem);">
            <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="hidden sm:block font-bold text-orange-100 text-5xl mb-6  animate-fade-down animate-infinite animate-duration-1000 animate-ease-in">
              El sabor que te  <br />

              <strong class="text-amber-500">
                Hace Feliz.
              </strong>
            </h1>
            <h1 class="font-bold text-gray-100 text-2xl sm:text-3xl flex gap-4 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" /></svg>
              Horario
            </h1>

            <div class="mt-4 ltr:sm:text-left rtl:sm:text-right">
              <span class="flex justify-between items-center gap-2 text-2xl text-amber-500 max-sm:text-sm">{dias}
                <span class="flex justify-between items-center mr-10 text-amber-500 max-sm:text-sm ">{isClosed}</span>
              </span>
              <span class="flex justify-between items-center gap-2 text-amber-500 text-xl">Sábados y Domingos de 06:00 PM a 11:00 PM</span>
            </div>
            <div class="flex justify-center">
              <Link
                href="/menu"
                class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-100/80 to-burger-200/80 hover:bg-burger-100 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-3 items-center"
              >
                <span class="flex justify-between items-center gap-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24 24 0 0 1 24 24v112a39.81 39.81 0 0 0-24-8Zm128 0h-64a39.81 39.81 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z" /></svg>
                </span>
                Ver Menú
              </Link>
            </div>

            <div class="flex gap-2 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=573235962864"
                class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center "
              >
                <span><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" /></svg></span>
                3235962864
              </a>
              <a
                href="https://goo.gl/maps/Q38aYjqmTDtXAxvW8"
                class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center"
              >
                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128z" /></svg></span>
                Ubicación
              </a>
            </div>


            <div class="mt-8 flex flex-wrap gap-4 text-center sm:justify-between max-sm:justify-center">
              <a target="_blank"
                href="https://www.instagram.com/deli_food.co/"
                class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center"
              ><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z" /><circle cx="16.806" cy="7.207" r="1.078" fill="currentColor" /><path fill="currentColor" d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z" /></svg></span>
                Instagram
              </a>

              <a
                href="#"
                class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center"
              // class="block w-full rounded-xl bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" /></svg>
                </span>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div class=" animate-fade-down animate-infinite max-sm:hidden" style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 10rem);">
          <ImgFoodmania style=" width: 100%; height: 700px; object-fit: cover;" class="transition rounded-xl backdrop-blur-lg mb-20  " />

        </div>
      </section>

    </>
  );
});
