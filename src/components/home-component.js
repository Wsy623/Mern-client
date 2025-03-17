import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Learning System</h1>
            <p className="col-md-8 fs-4">
              This system uses React.js as the front-end framework, and Node.js
              and MongoDB as the back-end server. This type of project is called
              a MERN project, which is one of the most popular ways to build
              modern websites.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Let's see how it works.
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                Students can register for courses they like. This website is for
                practice only, so please do not enter personal information like
                credit card numbers.
              </p>
              <button className="btn btn-outline-light" type="button">
                Log in as a member or register an account
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can register as an instructor and start creating online
                courses. This website is for practice only, so please do not
                provide any personal information such as credit card numbers.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Start offering courses today
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2025 Shiyu Wang
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
