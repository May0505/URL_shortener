import React, { Component, useState, useEffect } from "react";
import Shortener from "../components/Shortener";
import Shortlink from "../components/Shortlink";

import BrandRecognition from "../images/icon-brand-recognition.svg";
import detailedRcords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Homepage = () => {
  let [input, setInput] = useState({ value: "", empty: false });
  let [currentInput, setCurrentInput] = useState("");
  let [data, setData] = useState([]);

  const intialURL = `https://api.shrtco.de/v2/shorten?url=${currentInput}`;

  // fetch data from api

  async function shortenURL(url) {
    try {
      const dataFetch = await fetch(url, {
        method: "GET",
      });
      let shortUrl = await dataFetch.json();
      setData(data.concat(shortUrl.result));
    } catch {
      alert("輸入錯誤，請重新輸入！");
      window.location.reload();
    }
  }

  useEffect(() => {
    if (currentInput !== "") {
      shortenURL(intialURL);
    }
  }, [currentInput]);

  return (
    <main className='panel'>
      <div className='banner'>
        <div className='banner-img'></div>
        <div className='banner-content'>
          <div className='content-title'>More than just shorter links</div>
          <div className='content-description'>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className='content-btn'>Get Started</button>
        </div>
      </div>
      <div className='shorter'>
        <Shortener
          shortenURL={() => {
            setCurrentInput(input.value);
          }}
          setInput={setInput}
          input={input}
        />
      </div>
      <div className='result'>
        {data &&
          data.map((d) => {
            return <Shortlink data={d} />;
          })}
      </div>

      <div className='down-panel'>
        <div className='desc-title'>Advanced Statistics</div>
        <div className='desc-content'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
        <div className='items'>
          <div className='item1'>
            <div className='item-img'>
              <img src={BrandRecognition} alt='' />
            </div>
            <div className='item-title'>Brand Recognition</div>
            <div className='item-content'>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
            <span className='connect-line'></span>
          </div>

          <div className='item2'>
            <div className='item-img'>
              <img src={detailedRcords} alt='' />
            </div>
            <div className='item-title'> Detailed Records</div>
            <div className='item-content'>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </div>
            <span className='connect-line'></span>
          </div>

          <div className='item3'>
            <div className='item-img'>
              <img src={fullyCustomizable} alt='' />
            </div>
            <div className='item-title'>Fully Customizable</div>
            <div className='item-content'>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
          </div>
        </div>
      </div>
      <div className='boost-section'>
        <div className='boost-title'>Boost yours links today</div>
        <button className='boost-btn'>Get started</button>
      </div>
    </main>
  );
};

export default Homepage;
