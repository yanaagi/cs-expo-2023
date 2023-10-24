import Carousel from "@/components/Carousel";

const EventsCsExpo = () => {
    return (
        <main className="flex min-h-screen flex-col p-24">
            <div className="container"></div>
            <div className="ms-28">
                <h1 className="font-black text-8xl">PREVIOUS CS EXPOS</h1>
                {/* 2022 */}
                <Carousel
                    title="2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    // Don't forget to change the type of the slides in the Carousel component when changing it to photos
                    slides={[
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                    ]}
                    perView={2}
                    id="carousel-2022"
                />

                {/* 2023 */}
                <Carousel
                    title="2023"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    slides={[
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                    ]}
                    perView={2}
                    id="carousel-2023"
                />
            </div>
        </main>
    );
};

export default EventsCsExpo;
