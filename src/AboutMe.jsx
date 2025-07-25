import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="bg-gradient-to-r from-[#eaf2f8] to-white flex items-center justify-center px-4 md:px-8 py-20">
            <div className="max-w-5xl whitespace-normal break-words text-wrap">
                <h2 className="header-name">ABOUT ME</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    I'm Darla Vishnu Vardhan, an aspiring AI/ML Engineer 
                    with a passion for solving real-world problems using Machine Learning,
                    Computer Vision, Deep Learning, and Data Analytics.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    With a background in Electronics & Communication Engineering, I’ve transitioned
                    into AI by building hands-on projects in stock prediction, digit recognition,
                    and business insights using tools like Python, PyTorch, SQL, and Power BI.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Currently, I’m working on a transformer-based AI tool for test classification,
                    leveraging state-of-the-art models like BERT, which enhances my skills in NLP
                    and modern deep learning systems.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    My learning approach blends structured theory with practical, project-based applications —
                    from LSTM-driven stock forecasting to CNN-powered image recognition — reflecting my
                    focus on predictive modeling and intelligent systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    I enjoy turning data into insights, building AI solutions, and continuously exploring
                    the evolving world of deep learning. My goal is to contribute to impactful AI applications
                    in industries like finance, healthcare, and consumer analytics.
                </p>

            </div>
        </section>
    );
};

export default AboutMe;


