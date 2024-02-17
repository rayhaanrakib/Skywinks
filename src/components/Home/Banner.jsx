
import ViewAllButton from './../../shared/ViewAllButton';


const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='text-center lg:text-start'>
                    <h2 className='bg-white text-primaryV font-medium lg:text-base inline-block px-3 py-2 rounded-lg shadow-2xl'>Booking With Us!</h2>
                    <h1 className='text-5xl md:text-6xl lg:text-[80px] lg:my-12 my-10 font-semibold leading-tight'>Find <span className='text-primaryV'>Next Place</span><br />
                        To Visit</h1>
                    <p className='sm:text-xl text-secondaryV'>Discover amzaing places at exclusive deals. <br />
                        Eat, Shop, Visit interesting places around the world.</p>

                    <div className='mt-8 lg:mt-12'>
                        <ViewAllButton text="Search Now" ></ViewAllButton>

                    </div>


                </div>
                <div className="hidden lg:block h-[600px] carousel carousel-vertical shadow-2xl rounded-box mr-0 lg:mr-16 ">
                    <div className="carousel-item h-full ">
                        <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/jZHTn27/banner-01.jpg" />
                    </div>
                    <div className="carousel-item h-full ">
                        <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/T16RpDq/banner-02.jpg" />
                    </div>
                    <div className="carousel-item h-full ">
                        <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/BsH3KSs/banner-03.jpg" />
                    </div>
                    <div className="carousel-item h-full ">
                        <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/9g2v2nZ/banner-04.jpg" />
                    </div>
                    <div className="carousel-item h-full ">
                        <img className='w-[500px] object-cover shadow-md' src="https://i.ibb.co/JR0SNNy/banner-05.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;