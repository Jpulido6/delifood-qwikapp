import { component$ } from "@builder.io/qwik";

import ImgLogo  from "~/media/4778f3f47970dbfd8e0fdb4dd8dc6b9e.png?jsx"
import { Link } from "@builder.io/qwik-city";

import "~/assets/fonts/fonts.css"


export default component$(() => {
  return (

    <nav class="z-20 fixed top-0 w-screen py-2 bg[rbg(33_33_33_0.7)] backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="/" class="transition ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 py-3 rounded-lg text-lg flex gap-2 items-center whitespace-nowrap">

              {/* <Logo width={50} height={50} />
              <span class="font-bold text-2xl italic  text-center">𝒟𝑒𝓁𝒾𝐹𝑜𝑜𝒹</span> */}
              <ImgLogo style={{ width: "150px", height:"20px" }} />
            </a>
          </div>
          <div class="flex flex-1 items-center justify-end">
            <div class="flex gap-2 text-gray-300 whitespace-nowrap">
              <Link href="/" class="group transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg items-center hidden sm:flex gap-3">Inicio</Link>
              <Link href="/menu" class="group transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg items-center hidden sm:flex gap-3">Menú</Link>
              <a href="" class="group transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg items-center hidden sm:flex gap-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor" /></svg></span>
              </a>
              <a target="_blank" href="https://www.instagram.com/deli_food.co/" class="group transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg items-center hidden sm:flex gap-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg></span></a>
            </div>
          </div>
        </div>

      </div>

    </nav>
  );
});
