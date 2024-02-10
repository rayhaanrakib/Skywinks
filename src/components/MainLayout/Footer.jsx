import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary'>
            <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                    <div class="col-span-full hidden lg:col-span-1 lg:block">
                        <a class="flex-none text-xl font-semibold text-primary" href="/" aria-label="Brand">SkyWinks</a>
                        <p class="mt-3 text-xs sm:text-sm text-gray-600">© 2024 Skywinks.com</p>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-primary uppercase">Services</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Booking</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Buy Tickets</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Destinations</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Trusted Payments</a></p>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-primary uppercase ">About</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">About us</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Blog</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Our Story</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Customers</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Newsroom</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Be Our Partner <span class="inline text-blue-600 dark:text-blue-500">— Updated</span></a></p>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-primary uppercase ">Features</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Hotel Booking</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Tour Plan</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Rent A Car </a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Tour Packages</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Events</a></p>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-primary uppercase ">Reviews</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Testimonials</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Trusted Companies</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Top Customers</a> <span class="inline text-blue-600 dark:text-blue-500">— New</span></p>
                        </div>

                        <h4 class="mt-7 text-xs font-semibold text-primary uppercase ">Privacy</h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Privacy & Policies</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-accent" href="#">Terms & Conditions</a></p>
                        </div>
                    </div>
                </div>

                <div class="pt-5 mt-5 border-t border-gray-600">
                    <div class="sm:flex sm:justify-between sm:items-center">
                        <div class="flex items-center gap-x-3">
                            <div class="hs-dropdown relative inline-flex [--placement:top-left]">
                                <button id="footer-language-dropdown" type="button" class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
                                    <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us1" viewBox="0 0 512 512">
                                        <g fill-rule="evenodd">
                                            <g stroke-width="1pt">
                                                <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                                                <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                                            </g>
                                            <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                                            <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
                                        </g>
                                    </svg>
                                    English (US)
                                    <svg class="hs-dropdown-open:rotate-180 flex-shrink-0 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>

                                <div class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 " aria-labelledby="footer-language-dropdown">
                                    <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="en">
                                        <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/usa-circular.png" alt="usa-circular" />
                                        English (US)
                                    </a>
                                    <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="bn">
                                        <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/color/96/bangladesh-circular.png" alt="bangladesh-circular" />
                                        Bengali
                                    </a>
                                    <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="in">
                                        <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/india-circular.png" alt="india-circular" />
                                        Hindi
                                    </a>
                                    <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="zh">
                                        <img class="w-5 h-5 rounded-full" src="https://img.icons8.com/fluency/48/china-circular.png" alt="china-circular" />
                                        中文 (繁體)
                                    </a>
                                </div>
                            </div>

                            <div class="space-x-4 text-sm ms-4">
                                <a class="inline-flex gap-x-2 text-gray-600 hover:text-accent " href="#">Terms</a>
                                <a class="inline-flex gap-x-2 text-gray-600 hover:text-accent " href="#">Privacy</a>
                                <a class="inline-flex gap-x-2 text-gray-600 hover:text-accent " href="#">Status</a>
                            </div>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="mt-3 sm:hidden">
                                <a class="flex-none text-xl font-semibold text-primary" href="/" aria-label="Brand">SkyWinks</a>
                                <p class="mt-3 text-xs sm:text-sm text-gray-600">© 2024 Skywinks.com</p>
                            </div>

                            <div class="space-x-4">
                                <a class="inline-block text-gray-500 hover:text-accent" href="#">
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a class="inline-block text-gray-500 hover:text-accent " href="#">
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;