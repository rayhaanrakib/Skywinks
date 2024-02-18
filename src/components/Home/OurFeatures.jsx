import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const OurFeatures = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

    const Card = ({ card }) => {
        return (
            <div
                key={card.id}
                className="group relative h-[450px] w-[450px] overflow-hidden shadow-md bg-neutral-200 rounded-lg">
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70  group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/50 transition duration-500'></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/10 to-white/0 rounded-lg p-8 opacity-90 group-hover:opacity-100 transition duration-500 text-xl font-black uppercase text-white backdrop-blur- group-hover:backdrop-blur-sm">
                        {card.title}
                    </p>
                </div>
            </div>
        );
    };

    const cards = [
        {
            url: "https://i.ibb.co/ThQF1hN/best-travel-planning-apps-scaled.jpg",
            title: "Travel Planning",
            id: 1,
        },
        {
            url: "https://i.ibb.co/z8HYZzn/3mxk4mtspvrzt187f7jxr2lrubxb-shutterstock-1186128958.webp",
            title: "group tours",
            id: 2,
        },
        {
            url: "https://i.ibb.co/TtGPfjr/472815749.jpg",
            title: "Hotel Reservation",
            id: 3,
        },
        {
            url: "https://i.ibb.co/tKJpzSF/360-F-655457895-YF15-Eo-TZj-K2-Hw0-CZLps7k-O4w8w-Jn9x-Hq.jpg",
            title: "best deals and discounts",
            id: 4,
        },
        {
            url: "https://i.ibb.co/qJGv75Z/secure-payments-1024x683.jpg",
            title: "Secure Payment",
            id: 5,
        },
        {
            url: "https://i.ibb.co/tX55jYs/istockphoto-1197662538-612x612.jpg",
            title: "emergency booking",
            id: 6,
        },
        {
            url: "https://i.ibb.co/BsmhTXH/makkah-madinah-saudi-arabia.jpg",
            title: "Event Packages",
            id: 7,
        },
    ];


    return (
        <section ref={targetRef} className="relative h-[300vh] my-6 lg:my-12">
            <div className="sticky top-24 flex h-[450px] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-6">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default OurFeatures;
