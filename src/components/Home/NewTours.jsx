import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import TourCard from './../../shared/TourCard';

const NewTours = () => {

    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3500,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])


    return (
        <div className="container mx-auto my-6 px-10 lg:px-0">


            <div className="glide-04 relative w-full">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <TourCard></TourCard>
                        </li>
                        <li>
                            <TourCard></TourCard>
                        </li>
                        <li>
                            <TourCard></TourCard>
                        </li>
                        <li>
                            <TourCard></TourCard>
                        </li>
                        <li>
                            <TourCard></TourCard>
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="flex w-full items-center justify-center gap-5 p-16"
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primaryV bg-white/20 text-primaryV transition duration-300  focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primaryV bg-white/20 text-primaryV transition duration-300  focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default NewTours;