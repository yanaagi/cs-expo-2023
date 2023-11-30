import React from "react";
import ProjectsHeader from "@/components/ProjectsHeader";
import Carousel from "@/components/HallOfFameCarousel";

const HallOfFame = () => {
    return (
        <main className="mt-28 sm:flex sm:flex-col sm:items-center">
            <ProjectsHeader
                headerText="HALL OF FAME"
                subheaderText="
                Excellence must not only be achieved, but also rewarded with recognition. The following are the standouts of the CS EXPO 2023 V2.0, acknowledged for their relentless pursuit of knowledge through exemplary research and industry-ready technical skills."
            />

            {/* Overall Best Thesis */}
            <Carousel
                title="BEST THESIS OVERALL"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/1st-place.jpg",
                        ranking: "1st Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/2nd-place.jpg",
                        ranking: "2nd Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/3rd-place.jpg",
                        ranking: "3rd Place",
                        group: "TeaSis",
                        thesis: "GameFace: Head Tracking and Facial Recognition and Detection as Inputs for Gaming using Haar Cascade and MediaPipe Framework",
                        link: "/projects/TeaSis",
                    },
                ]}
                id="carousel-best-thesis-overall"
                carouselNumber={1}
                carouselUp="hidden"
                carouselDown=""
                carouselUpTarget=""
                carouselDownTarget="carousel-most-innovative-study"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="MOST INNOVATIVE STUDY"
                titleSize="1.3rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/1st-place.jpg",
                        ranking: "1st Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/2nd-place.jpg",
                        ranking: "2nd Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/3rd-place.jpg",
                        ranking: "3rd Place",
                        group: "Codebebs",
                        thesis: "SirenaTech: A Water Quality Testing Algorithm for Detecting the Potability of Water",
                        link: "/projects/Codebebs",
                    },
                ]}
                id="carousel-most-innovative-study"
                carouselNumber={2}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-overall"
                carouselDownTarget="carousel-best-presenter"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST PRESENTER"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/1st-place.jpg",
                        ranking: "1st Place",
                        group: "Abel Gomez (TeaSis)",
                        thesis: "GameFace: Head Tracking and Facial Recognition and Detection as Inputs for Gaming using Haar Cascade and MediaPipe Framework",
                        link: "/projects/TeaSis",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/2nd-place.jpg",
                        ranking: "2nd Place",
                        group: "Ralph Cajipe (STARK)",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/3rd-place.jpg",
                        ranking: "3rd Place",
                        group: "Franco Gian Ramos (AiM)",
                        thesis: "DEEP-COLON: Colorectal Disease Detection Using You Only Look Once Algorithm",
                        link: "/projects/AiM",
                    },
                ]}
                id="carousel-best-presenter"
                carouselNumber={3}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-most-innovative-study"
                carouselDownTarget="carousel-best-thesis-nlp"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST THESIS IN NLP"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-nlp.jpg",
                        ranking: "",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                ]}
                id="carousel-best-thesis-nlp"
                carouselNumber={4}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-presenter"
                carouselDownTarget="carousel-best-thesis-iot"
                carouselLeft="hidden"
                carouselRight="hidden"
            />

            <Carousel
                title="BEST THESIS IN IOT"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-iot.jpg",
                        ranking: "",
                        group: "INNOV8",
                        thesis: "AirZen: Indoor Air Quality Monitoring and Recommendation System",
                        link: "/projects/INNOV8",
                    },
                ]}
                id="carousel-best-thesis-iot"
                carouselNumber={5}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-nlp"
                carouselDownTarget="carousel-best-thesis-image-processing"
                carouselLeft="hidden"
                carouselRight="hidden"
            />

            <Carousel
                title="BEST THESIS IN IMAGE PROCESSING"
                titleSize="1.3rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-image-processing.jpg",
                        ranking: "",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                ]}
                id="carousel-best-thesis-image-processing"
                carouselNumber={6}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-iot"
                carouselDownTarget="carousel-best-thesis-education"
                carouselLeft="hidden"
                carouselRight="hidden"
            />

            <Carousel
                title="BEST THESIS IN EDUCATION"
                titleSize="1.3rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-education.jpg",
                        ranking: "",
                        group: "Rob_lux",
                        thesis: "TalkBox: Constraint-Based Intelligent Tutor for Augmentative and Alternative Communication for Filipino Preschoolers with Speech Delay: An Application of Decision Tree Algorithm",
                        link: "/projects/Rob_lux",
                    },
                ]}
                id="carousel-best-thesis-education"
                carouselNumber={7}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-image-processing"
                carouselDownTarget="carousel-best-thesis-data-analytics"
                carouselLeft="hidden"
                carouselRight="hidden"
            />

            <Carousel
                title="BEST THESIS IN DATA ANALYTICS"
                titleSize="1.3rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-data-analytics.jpg",
                        ranking: "",
                        group: "return_to_sleep",
                        thesis: "TomatoCare: A supply and demand forecasting support tool for tomatoes using ARIMA modeling",
                        link: "/projects/return-to_sleep",
                    },
                ]}
                id="carousel-best-thesis-data-analytics"
                carouselNumber={8}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-education"
                carouselDownTarget="carousel-best-audio-visual-presentation"
                carouselLeft="hidden"
                carouselRight="hidden"
            />

            <Carousel
                title="BEST AUDIO-VISUAL PRESENTATION"
                titleSize="1.3rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/1st-place.jpg",
                        ranking: "1st Place",
                        group: "Quinta",
                        thesis: "Luid: Language Revival: Gamifying Kapampangan Using Leitner System and SuperMemo Algorithms",
                        link: "/projects/Quinta",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/2nd-place.jpg",
                        ranking: "2nd Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/3rd-place.jpg",
                        ranking: "3rd Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                ]}
                id="carousel-best-audio-visual-presentation"
                carouselNumber={9}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-data-analytics"
                carouselDownTarget="carousel-best-poster"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST POSTER"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/1st-place-1.jpg",
                        ranking: "1st Place",
                        group: "Engeenz",
                        thesis: "RECOGNIZANCE: An Instagram-Based Recommender System using Naïve Bayes Classifier with TensorFlow for T-Cup-Zone in the City of Manila",
                        link: "/projects/Engeenz",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/1st-place-2.jpg",
                        ranking: "1st Place",
                        group: "DEoS",
                        thesis: "RevSentinel: A Browser Extension for Identifying Relevant Product Reviews on Online Shopping Platforms Using Image and Natural Language Processing Algorithms",
                        link: "/projects/DEoS",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/2nd-place.jpg",
                        ranking: "2nd Place",
                        group: "Rob_lux",
                        thesis: "TalkBox: Constraint-Based Intelligent Tutor for Augmentative and Alternative Communication for Filipino Preschoolers with Speech Delay: An Application of Decision Tree Algorithm",
                        link: "/projects/Rob_lux",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/3rd-place.jpg",
                        ranking: "3rd Place",
                        group: "Hello World",
                        thesis: "BLOODLINE: An Emergency Blood Resource Locator Implemented Using Contraction Hierarchies In OSRMV1 and GPS Tracking",
                        link: "/projects/Hello-World",
                    },
                ]}
                id="carousel-best-poster"
                carouselNumber={10}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-audio-visual-presentation"
                carouselDownTarget="carousel-best-mentor"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST MENTOR"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-mentor/best-mentor.jpg",
                        ranking: "",
                        group: "Ms. Elisa Malasaga",
                        thesis: "Computer Science Department",
                        link: "https://www.facebook.com/photo/?fbid=748468940629661&set=a.450638063746085",
                    },
                ]}
                id="carousel-best-mentor"
                carouselNumber={11}
                carouselUp=""
                carouselDown="hidden"
                carouselUpTarget="carousel-best-poster"
                carouselDownTarget=""
                carouselLeft="hidden"
                carouselRight="hidden"
            />
        </main>
    );
};

export default HallOfFame;
