import React from "react";
import Layout from "@/features/common/Layout";
import Image from "next/image";
import "@/styles/__pages.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container flex flex-col items-center">
        <h2 className="user-name z-[99]">Ruhaim Mohammed K</h2>
        <div className="home-image"></div>
        <div className="user-detials z-[99]">
          <div>
            <div>{"=>"}&nbsp;&nbsp;Web Development</div>
            <div>{"=>"}&nbsp;&nbsp;Interaction</div>
          </div>
          <div className="home-desc">
            <div>
              FRONTEND DEVELOPER WITH <b>3 YEARS OF EXPERIENCE</b> IN DEVELOPING
              ROBUST WEB APPLICATIONS WITH REACTJS, NEXTJS AND TYPESCRIPT
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
