import React from "react";
import Main from "../../components/Main.js";
import InitiateBox from "../../components/InitiateBox.js";
import Hero from "../../components/Hero.js";
import Category from "../../components/Category.js";
import Topmentor from "../../components/Topmentor.js";
import Appdownload from "../../components/Appdownload.js";

function Home() {
  return (
    <div className="py-20 bg-cover "> 
    {/* bg-[url('https://img.freepik.com/free-vector/white-gray-background-with-diagonal-lines-pattern_1017-25100.jpg?t=st=1733914754~exp=1733918354~hmac=adee7015807957ec1c02c940f044157f90c8df9a5358e79ab69ae3e263f4d859&w=2000')] */}
      <Main />
      <h1 className="text-5xl text-center pb-16">How it works?</h1>
      <div className="flex text-center md:px-20 gap-8 justify-center md:gap-32 xl:gap-40 flex-wrap">
        <InitiateBox
          title={"Registration"}
          paragraph={
            "Are you lookin to join online Learnig? Now it's very simple,Now register up"
          }
        />
        <InitiateBox
          title={"Collaborate"}
          paragraph={
            "Collaborate on your own timing by, scheduling with mentor booking"
          }
        />
        <InitiateBox
          title={"Improve & get Back"}
          paragraph={
            "you can gather different skill set, and you can become mentor too."
          }
        />
      </div>
      <Hero/>
      <Category/>
      <Topmentor/>
      <Appdownload/>
    </div>
  );
}

export default Home;
