import { component$ } from "@builder.io/qwik";

export default component$(() => {

    return (<>
        <div class=" bg-gray-900/30">
            <div class="max-w-2xl mx-auto text-yellow-900 py-10">
                <div class="text-center ">
                    {/*   <h3 style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="hidden sm:block font-bold text-orange-100 text-5xl mb-6 ease-in-out"> Descarga nuestra app</h3>

                        <div class="flex justify-center ">
                            <a href="" class="">
                                <div class="flex transition rounded-xl shadow-lg backdrop-blur-lg bg-gradient-to-b from-burger-200/80 to-burger-300/80 hover:bg-burger-200 px-4 py-3 font-bold text-red-100 md:py-4 md:px-8 text-xs md:text-lg whitespace-nowrap gap-3 items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" width={"32"} height={"32"} />
                                    <div class="text-left ml-3">
                                        <p class='text-xs text-yellow-700'>Descargar en </p>
                                        <p class="text-sm md:text-base"> Google Play Store </p>
                                    </div>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="36.41" height="32" viewBox="0 0 256 225"><path d="M19.288 192.986c-6.615 0-11.066 5.193-11.066 11.87s4.451 11.87 11.066 11.87c6.615 0 11.066-5.193 11.066-11.87s-4.451-11.87-11.066-11.87m-1.484-7.356c5.317 0 9.768 2.72 11.87 5.687v-4.945h8.16v37.03H31.59a1.86 1.86 0 0 1-1.854-1.854v-3.091c-2.102 2.967-6.491 5.687-11.87 5.687C7.728 224.144 0 215.489 0 204.918c0-10.572 7.666-19.288 17.804-19.288m29.303.742h8.16v5.007c2.226-3.71 6.43-5.75 11.252-5.75c8.593 0 14.157 6.06 14.157 15.456v22.317h-6.244a1.86 1.86 0 0 1-1.854-1.854v-19.103c0-5.873-2.968-9.397-7.728-9.397c-5.378 0-9.582 4.204-9.582 12.117v18.237h-6.244a1.86 1.86 0 0 1-1.855-1.854v-35.176h-.062Zm59.287 6.614c-6.615 0-11.066 5.193-11.066 11.87s4.45 11.87 11.066 11.87c6.614 0 11.066-5.193 11.066-11.87s-4.452-11.87-11.066-11.87m-1.484-7.356c5.317 0 9.768 2.72 11.87 5.687v-23.492h8.16v55.577h-6.244a1.86 1.86 0 0 1-1.855-1.854v-3.091c-2.102 2.967-6.49 5.687-11.87 5.687c-10.138 0-17.865-8.655-17.865-19.226c0-10.572 7.665-19.288 17.804-19.288m29.303.742h8.16v6.614c1.422-4.203 5.564-6.985 9.768-6.985c1.051 0 2.102.061 3.153.309v8.346c-1.422-.433-2.597-.68-4.08-.68c-4.637 0-8.902 3.956-8.902 11.313v18.051h-6.244a1.86 1.86 0 0 1-1.855-1.854v-35.114Zm43.027 30.168c6.491 0 11.128-5.131 11.128-11.684c0-6.615-4.575-11.684-11.128-11.684c-6.615 0-11.19 5.13-11.19 11.684c.063 6.615 4.637 11.684 11.19 11.684m0 7.604c-10.942 0-19.411-8.531-19.411-19.226c0-10.757 8.469-19.288 19.411-19.288c10.943 0 19.412 8.53 19.412 19.288c0 10.695-8.408 19.226-19.412 19.226m26.027-37.772h8.16v37.03h-6.244a1.86 1.86 0 0 1-1.854-1.854v-35.176h-.062Zm4.08-8.099c-2.967 0-5.502-2.473-5.502-5.502c0-2.967 2.535-5.378 5.502-5.378c3.03 0 5.378 2.472 5.378 5.378c0 3.03-2.349 5.502-5.378 5.502m30.107 14.713c-6.615 0-11.066 5.193-11.066 11.87s4.45 11.87 11.066 11.87c6.615 0 11.066-5.193 11.066-11.87c-.062-6.677-4.451-11.87-11.066-11.87m-1.484-7.356c5.317 0 9.768 2.72 11.87 5.687v-23.492H256v55.577h-6.244a1.86 1.86 0 0 1-1.855-1.854v-3.091c-2.101 2.967-6.49 5.687-11.87 5.687c-10.138 0-17.865-8.655-17.865-19.226c0-10.572 7.665-19.288 17.804-19.288"/><path fill="#3DDC84" d="m190.717 43.565l21.328-36.907c1.237-2.101.495-4.822-1.607-6.058c-2.102-1.236-4.822-.495-6.058 1.607l-21.576 37.34c-16.506-7.542-35.052-11.746-54.773-11.746c-19.783 0-38.267 4.204-54.773 11.746L51.682 2.207C50.446.105 47.726-.636 45.624.6s-2.844 3.957-1.608 6.058l21.329 36.907C28.623 63.472 3.647 100.502 0 144.21h255.938c-3.647-43.708-28.685-80.738-65.22-100.645Zm-121.663 64.17c-5.873 0-10.633-4.76-10.633-10.633c0-5.873 4.76-10.633 10.633-10.633c5.873 0 10.633 4.76 10.633 10.633c0 5.873-4.76 10.633-10.633 10.633Zm117.83 0c-5.873 0-10.633-4.76-10.633-10.633c0-5.873 4.76-10.633 10.633-10.633c5.873 0 10.634 4.76 10.634 10.633c0 5.873-4.76 10.633-10.634 10.633Z"/></svg></span> */}
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" width={"32"} height={"32"}/>
                                    <div class="text-left ml-3">
                                    <p class='text-xs text-yellow-700'>Descargar en </p>
                                    <p class="text-sm md:text-base"> Google Play Store </p>
                                    </div> 
                                </div>
                            </a>
                            {/* <div class="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                                    <div class="text-left ml-3">
                                     <p class='text-xs text-gray-200'>Download on </p>
                                     <p class="text-sm md:text-base"> Apple Store </p>
                                    </div>
                                </div>
                        </div> */}
                </div>
                <div style="filter: drop-shadow(rgba(251, 146, 60, 0.5) 0px 2rem 2rem);" class="mt-10 flex flex-col md:flex-row md:justify-center items-center text-sm text-gray-400">
                    <p class="order-2 md:order-1 mt-8 md:mt-0 font-bold text-red-100"> &copy; Carlos.dev | 2023. </p>
                    {/* <div class="order-1 md:order-2">
                            <span class="px-2">About us</span>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div> */}
                </div>
            </div>
        </div>
    </>
    );
});
