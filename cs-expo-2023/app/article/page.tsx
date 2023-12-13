'use client'
// pages/blog.js
const Blog = () => {
    // Mock data for the blog post
    const post = {
      title1: 'CS Expo 2023 V2.0: FEU Tech CS Department\’s',
      title2: 'Culmination Event Shifts The Paradigm Once More',
      date: 'December 13, 2023',
      content1:'<p> The Far Eastern University Institute of Technology - Computer Science Department recently concluded its much-anticipated annual capstone event — CS EXPO 2023 V.2.0. The three-day exhibition, held from November 22 to 29, 2023, stood as a testament to the groundbreaking innovations and boundless potential showcased by the graduating batch under the BS Computer Science program. </p>',
      content2:'<p> CS EXPO 2023 V2.0 started with DevDay, which took place on November 22, 2023, at the FEU Tech 17th Floor Multi-Purpose Room. DevDay aimed to be a safe space for discourse on the current state of technology and its implications on society. Esteemed thought leaders and industry professionals graced the stage during the prelude event, sharing their experiences and providing valuable insights to catalyze a paradigm shift. Speakers for this event include Mr. Kenneth L. Molina, PLDT Inc.’s Lead Data Scientist, who spoke about the impact AI will have on society’s future; and Ms. Ellen Solosod, PLDT Inc.’s Deputy Chief Information Security Officer for the Cyber Security Operations Group, who spoke about data privacy and information security.</p>',
      content3:'<p> The two-day main event took place on November 28 and 29, 2023, at the FEU Tech Innovation Center. Students took center stage and presented their innovative thesis projects to a distinguished panel of judges comprising FEU Tech faculty and seasoned industry professionals. The projects were divided into six categories: Data Analytics, Education, Image Processing & Computer Vision, Health, Internet of Things, and Natural Language Processing. Prior to the presentations, industry leaders also delivered keynotes about the impending changes in the technospace. This includes Mr. Sherwin Pelayo, the Executive Director of Analytics & Artificial Intelligence Association of the Philippines, who addressed the data analytics of tomorrow; and Mr. Colin Christie, the Chairman of Navix Health Inc., who discussed the impact of AGI in healthcare.</p>',
      content4:'<p> After the event, deserving thesis groups and presenters were awarded, recognizing their research skills and game-changing development. The CS Expo 2023 V.2.0 succeeded in not only celebrating achievements but also in fostering an environment of collaboration, learning, and inspiration for the future pioneers of computer science.</p>',
      content5:'<p> CS Expo 2023 V2.0 would not have become a reality without GOLD SPONSORS such as QUBE Smart Technology Corporation, and CGI Philippines Inc.; as well as the event’s BRONZE SPONSORS: PLDT Inc., KooApps Philippines Corporation, Pointwest Innovations Corporation, and Universal Access and Systems Solutions Inc..The event was also made possible through the support of their partner organizations from different universities in the Philippines.</p>'
    };
  
    return (
        <div className="mx-5 sm:mx-auto text-center mt-32 sm:mt-32 md:mt-48 lg:mt-64">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{post.title1}</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{post.title2}</h1>
          <p className="mt-3 mb-12 text-sm sm:text-base md:text-lg lg:text-xl">Date: {post.date}</p>
          <div className="mx-auto mb-8 text-center max-w-3xl text-justify">
            <div className="mb-4 text-base sm:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: post.content1 }} />
            <div className="mb-4 text-base sm:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: post.content2 }} />
            <div className="mb-4 text-base sm:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: post.content3 }} />
            <div className="mb-4 text-base sm:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: post.content4 }} />
            <div className="mb-24 text-base sm:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: post.content5 }} />
          </div>
        </div>
    );
  };
  
  export default Blog;
  