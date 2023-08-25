import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
      <section class="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 min-h-[calc(100lvh-80px)]">
        <aside class="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0">
          <div class="flex items-center mb-8">
            <div class="flex-1">
              <p class="text-3xl font-bold text-orange-200 sm: text-center">Menú</p>
            </div>

          </div>
          <div class="overflow-y-auto hidden sm:flex flex-col py-4 px-3 rounded-xl bg-gray-600/20 border border-gray-700 max-h-[calc(100dvh-250px)]">
            <div class="overflow-y-auto hidden sm:flex flex-col py-4 px-3 rounded-xl bg-gray-600/20 border border-gray-700 max-h-[calc(100dvh-250px)]">
              <div class="space-y-4 mb-4">
                <span class=" ml-2 font-bold text-red-100">Hamburguesas</span>
                <div class="flex flex-col gap-2">
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    De Carne de Res
                  </a>
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    De Pollo
                  </a>


                </div>
                <hr class="border-gray-600" />
              </div>

              <div class="space-y-4 mb-4">
                <span class=" ml-2 font-bold text-red-100">Salchipapas</span>
                <div class="flex flex-col gap-2">
                  <a href="" class="min-w-fit text-red-100 transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Personal
                  </a>
                  <a href="" class="min-w-fit text-red-100 transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Duo
                  </a>
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Para 4 Personas
                  </a>

                </div>
                <hr class="border-gray-600" />
              </div>

              <div class="space-y-4 mb-4">
                <span class=" ml-2 font-bold text-red-100">Asados</span>
                <div class="flex flex-col gap-2">
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Chorizada
                  </a>

                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Carne asada
                  </a>
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Pechuga asada
                  </a>
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Picada
                  </a>

                </div>
                <hr class="border-gray-600" />
              </div>

              <div class="space-y-4 mb-4">
                <span class=" ml-2 font-bold text-red-100">Pizzas</span>
                <div class="flex flex-col gap-2">
                  <a href="" class="min-w-fit text-red-100 transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Hawaiana
                  </a>
                  <a href="" class="min-w-fit text-red-100 transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Jamón y queso
                  </a>
                  <a href="" class="min-w-fit transition text-red-100 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                    Pollo
                  </a>

                </div>
                <hr class="border-gray-600" />
              </div>

              <div class="space-y-4 mb-4">
                <span class=" ml-2 flex justify-center text-red-100"> <a href="/src/pdf/menu.jpeg" download="Menu.jpg" class="min-w-fit text-red-100 transition hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl border border-transparent hover:border-gray-600 px-2 py-1 rounded-lg text-md flex items-center gap-2">
                  Descargar Menú
                </a></span>
              </div>
            </div>
          </div>
        </aside>

        <div class="sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28">
          <span class="block h-24 -mt-24"></span>
          <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition">Hamburguesa de Carne </h1>

          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Sencilla</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Simple:</span>
                $7.000
                <br />
                {/* <span class="text-gray-400">Doble:</span>
                $20.000 */}
              </p>
              <p class="text-gray-400 text-md mt-4">Carne, jamón, queso, papa ripio, cebolla, tomate y salsas</p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Clásica</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Simple:</span>
                $14.000
                <br />
                <span class="text-gray-400">Doble:</span>
                $18.000
              </p>
              <p class="text-gray-400 text-md mt-4">Carne de la casa, jamón, queso cheddar, tocineta, cebolla, tomate y salsas</p>
            </div>


           
            <span class="block h-24 -mt-24"></span>
          </div>
          <span class="block h-24 -mt-24"></span>

          {/* <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition ">Hamburguesa de pollo</h1> */}
{/* 
          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Clásica</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $12.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pollo apanado, queso cheddar, cebolla, tomate y salsas .</p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Chicken hot Burger </div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $15.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pollo apanado picante,  queso cheddar, cebolla, tomate y salsas .</p>
            </div>

            <p class="text-gray-400 text-md mb-7">* Todas nuestras hamburguesas vienen con papas a la francesa.</p>
            <span class="block h-24 -mt-24"></span>
          </div> */}


          <span class="block h-24 -mt-24"></span>
          <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition">Salchipapas</h1>

          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Personal</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $12.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Papas, salchichas, maíz,  queso costeño, vegetales y salsas </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">2 Personas</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $26.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Papas, chorizo, pollo, maíz, salchichas, tocineta, queso costeño,  vegetales y salsas </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">3 Personas</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $35.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Papas, chorizo, pollo, maíz, salchichas, tocineta, queso costeño, queso mozzarella, vegetales y salsas </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">4 Personas</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $44.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Papas, chorizo, pollo, carne, maíz, salchichas, tocineta, queso costeño, queso mozzarella, vegetales y salsas </p>
            </div>
          </div>


          <span class="block h-24 -mt-24"></span>
          <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition">Asados</h1>

          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Chorizada</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $9.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Chorizo, papas a la francesa y ensalada</p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Carne asada</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $16.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Carne asada, papas a la francesa y ensalada</p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Pechuga asada</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $16.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pechuga asada, papas a la francesa y ensalada.</p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Picada</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $26.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Carne, pollo chorizo y chicharrón, yuca frita, papas a la francesa y ensalada.</p>
            </div>
          </div>


          <span class="block h-24 -mt-24"></span>
          <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition">Perros</h1>

          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Perro sencillo</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $7.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pan perro, salchicha, papa ripio, queso mozzarella y salsas </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Perro Americano</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $10.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pan perro, salchicha americana, papa ripio, queso mozzarella y salsas </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Perro Suizo</div>

              </h1>
              <p class="text-amber-400 text-md">
                <span class="text-gray-400">Precio:</span>
                $12.000
                <br />

              </p>
              <p class="text-gray-400 text-md mt-4">Pan perro, salchicha suiza, papa ripio, queso mozzarella y salsas </p>
            </div>

           
          </div>


          <span class="block h-24 -mt-24"></span>
          <h1 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="font-bold text-orange-200 text-4xl transition">Pizzas</h1>

          <div class="flex flex-wrap gap-4 pt-5 pb-10">
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Hawaiana</div>

              </h1>
              <p class="text-amber-400 text-md mb-5">
                <span class="text-gray-400 text-lg">Tamaños:</span>
                <br />
                <br />
                <span class="text-gray-400 ">Personal:</span>
                $5.000
                <br />
                <br />
                <span class="text-gray-400 ">Mediana:</span>
                $20.000
                <br />
                <br />
                <span class="text-gray-400 ">Familiar:</span>
                $40.000
              </p>

            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Jamón y queso</div>

              </h1>
              <p class="text-amber-400 text-md mb-5">
                <span class="text-gray-400 text-lg">Tamaños:</span>
                <br />
                <br />
                <span class="text-gray-400 ">Personal:</span>
                $5.000
                <br />
                <br />
                <span class="text-gray-400 ">Mediana:</span>
                $20.000
                <br />
                <br />
                <span class="text-gray-400 ">Familiar:</span>
                $40.000
              </p>
            </div>

            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Pollo</div>

              </h1>
              <p class="text-amber-400 text-md mb-5">
                <span class="text-gray-400 text-lg">Tamaños:</span>
                <br />
                <br />
                <span class="text-gray-400 ">Personal:</span>
                $5.000
                <br />
                <br />
                <span class="text-gray-400 ">Mediana:</span>
                $20.000
                <br />
                <br />
                <span class="text-gray-400 ">Familiar:</span>
                $40.000
              </p>
            </div>
            <div class="flex border border-gray-700 rounded-xl p-6 bg-gray-600/20 flex-col flex-1 min-w-[18rem]">
              <h1 class="flex font-bold text-gray-100 text-2xl mb-2">
                <div class="flex items-center gap-3 flex-1">Salami</div>

              </h1>
              <p class="text-amber-400 text-md mb-5">
                <span class="text-gray-400 text-lg">Tamaños:</span>
                <br />
                <br />
                <span class="text-gray-400 ">Personal:</span>
                $5.000
                <br />
                <br />
                <span class="text-gray-400 ">Mediana:</span>
                $20.000
                <br />
                <br />
                <span class="text-gray-400 ">Familiar:</span>
                $40.000
              </p>
            </div>
          </div>


        </div>



      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Menú | Deli Food",

};