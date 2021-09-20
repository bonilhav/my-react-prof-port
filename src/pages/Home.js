import React from 'react';

const Home = () => {
    return (
        <main id="main">
        <div 
            class="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 jumbotron jumbotron-fluid">
            <div class="text-center container">
                <h1 class="display-1">Vanessa Bonilha</h1>
                <div class="Typist lead typist"> Full Stack Web Developer | Fraud Analyst | Reading Enthusiast | Animal Lover  </div>
                <div class="p-5"><a class="email p-2" href="https://github.com/bonilhav"
                        aria-label="Github"><i class="fab fa-github  fa-3x socialicons"></i></a><a
                        class="email p-2" href="https://www.linkedin.com/in/vanessa-bonilha-95b75197/"
                        aria-label="My linkedin"><i class="fab fa-linkedin  fa-3x socialicons"></i></a></div>
            </div>
        </div>
    </main>
    );
};

export default Home;