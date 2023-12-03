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

            <Carousel
                title="BEST THESIS OVERALL"
                titleSize="1.4rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/1st-place-min.webp",
                        ranking: "1st Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/2nd-place-min.webp",
                        ranking: "2nd Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-overall/3rd-place-min.webp",
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
                title="MOST INNOVATIVE"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/1st-place-min.webp",
                        ranking: "1st Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/2nd-place-min.webp",
                        ranking: "2nd Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/most-innovative-study/3rd-place-min.webp",
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
                titleSize="1.4rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/1st-place-min.webp",
                        ranking: "1st Place",
                        group: "Abel Gomez (TeaSis)",
                        thesis: "GameFace: Head Tracking and Facial Recognition and Detection as Inputs for Gaming using Haar Cascade and MediaPipe Framework",
                        link: "/projects/TeaSis",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/2nd-place-min.webp",
                        ranking: "2nd Place",
                        group: "Ralph Cajipe (STARK)",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-presenter/3rd-place-min.webp",
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
                carouselDownTarget="carousel-best-thesis-category"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST THESIS IN EACH CATEGORY"
                titleSize="1.12rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-nlp-min.webp",
                        ranking: "BEST THESIS IN NLP",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-iot-min.webp",
                        ranking: "BEST THESIS IN IOT",
                        group: "INNOV8",
                        thesis: "AirZen: Indoor Air Quality Monitoring and Recommendation System",
                        link: "/projects/INNOV8",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-image-processing-min.webp",
                        ranking: "BEST THESIS IN IMAGE PROCESSING",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-education-min.webp",
                        ranking: "BEST THESIS IN EDUCATION",
                        group: "Rob_lux",
                        thesis: "TalkBox: Constraint-Based Intelligent Tutor for Augmentative and Alternative Communication for Filipino Preschoolers with Speech Delay: An Application of Decision Tree Algorithm",
                        link: "/projects/Rob_lux",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-thesis-category/best-thesis-data-analytics-min.webp",
                        ranking: "BEST THESIS IN DATA ANALYTICS",
                        group: "return_to_sleep",
                        thesis: "TomatoCare: A supply and demand forecasting support tool for tomatoes using ARIMA modeling",
                        link: "/projects/return-to_sleep",
                    },
                ]}
                id="carousel-best-thesis-category"
                carouselNumber={4}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-presenter"
                carouselDownTarget="carousel-best-audio-visual-presentation"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST AVP"
                titleSize="1.5rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/1st-place-min.webp",
                        ranking: "1st Place",
                        group: "Quinta",
                        thesis: "Luid: Language Revival: Gamifying Kapampangan Using Leitner System and SuperMemo Algorithms",
                        link: "/projects/Quinta",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/2nd-place-min.webp",
                        ranking: "2nd Place",
                        group: "STARK",
                        thesis: "VIDEO LENS: Video Content Analysis through Computer Vision and Natural Language Processing",
                        link: "/projects/S.T.A.R.K.",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-audio-visual-presentation/3rd-place-min.webp",
                        ranking: "3rd Place",
                        group: "Array Co.",
                        thesis: "DASH: Composite Restoration Using Image Recognition for Teeth Shade Matching Using Deep Learning",
                        link: "/projects/Array-Co",
                    },
                ]}
                id="carousel-best-audio-visual-presentation"
                carouselNumber={5}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-thesis-category"
                carouselDownTarget="carousel-best-poster"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST POSTER"
                titleSize="1.4rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/1st-place-1-min.webp",
                        ranking: "1st Place (TIE)",
                        group: "Engeenz",
                        thesis: "RECOGNIZANCE: An Instagram-Based Recommender System using Naïve Bayes Classifier with TensorFlow for T-Cup-Zone in the City of Manila",
                        link: "/projects/Engeenz",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/1st-place-2-min.webp",
                        ranking: "1st Place (TIE)",
                        group: "DEoS",
                        thesis: "RevSentinel: A Browser Extension for Identifying Relevant Product Reviews on Online Shopping Platforms Using Image and Natural Language Processing Algorithms",
                        link: "/projects/DEoS",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/2nd-place-min.webp",
                        ranking: "2nd Place",
                        group: "Rob_lux",
                        thesis: "TalkBox: Constraint-Based Intelligent Tutor for Augmentative and Alternative Communication for Filipino Preschoolers with Speech Delay: An Application of Decision Tree Algorithm",
                        link: "/projects/Rob_lux",
                    },
                    {
                        backgroundImage:
                            "/hall-of-fame/best-poster/3rd-place-min.webp",
                        ranking: "3rd Place",
                        group: "Hello World",
                        thesis: "BLOODLINE: An Emergency Blood Resource Locator Implemented Using Contraction Hierarchies In OSRMV1 and GPS Tracking",
                        link: "/projects/Hello-World",
                    },
                ]}
                id="carousel-best-poster"
                carouselNumber={6}
                carouselUp=""
                carouselDown=""
                carouselUpTarget="carousel-best-audio-visual-presentation"
                carouselDownTarget="carousel-best-mentor"
                carouselLeft=""
                carouselRight=""
            />

            <Carousel
                title="BEST MENTOR"
                titleSize="1.4rem"
                slides={[
                    {
                        backgroundImage:
                            "/hall-of-fame/best-mentor/best-mentor.webp",
                        ranking: "",
                        group: "Ms. Elisa Malasaga",
                        thesis: "Computer Science Department",
                        link: "https://www.facebook.com/photo/?fbid=748468940629661&set=a.450638063746085",
                    },
                ]}
                id="carousel-best-mentor"
                carouselNumber={7}
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
