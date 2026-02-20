import { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const text = "My name is SANDEEP KUMAR. I am post-graduated as I did the course MCA (Master of Computer Applications), year 2021 (September). I worked as full stack developer from June 2022 to February 2025. During this period of time, I have completed 4 projects and worked on both frontend and backend. 8+ projects in which I developed the front end of websites.";

  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setTyping(true);
      }
    }, 40); // typing speed 40ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about" id="about">
      <h2 className="headings">About</h2>
      <article className={typing ? "typed done" : "typed"}>{displayedText}</article>
    </div>
  );
};

export default About;