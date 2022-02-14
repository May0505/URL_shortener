import React, { useState } from "react";

const Shortener = ({ shortenURL, setInput }) => {
  let [inputValue, setInputValue] = useState(true);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      shortenURL();
    }
    if (e.target.value.trim().length <= 0) {
      setInputValue(false);
    } else {
      setInputValue(true);
    }
  };

  return (
    <div>
      {inputValue ? (
        <div className='shortener-section'>
          <input
            type='text'
            className='input'
            placeholder='Shorten a link here...'
            onChange={inputHandler}
            onKeyPress={enterHandler}
          />

          <button className='shortener-btn' onClick={shortenURL}>
            Shorten it!
          </button>
        </div>
      ) : (
        <div className='shortener-section'>
          <input
            type='text'
            className='input'
            placeholder='Shorten a link here...'
            onChange={inputHandler}
            onKeyPress={enterHandler}
            style={{ border: "1px solid red" }}
          />
          <p
            style={{
              color: "rgb(231, 69, 69)",
              fontSize: "10px",
              textAlign: "start",
              fontStyle: "italic",
            }}>
            Please add a link
          </p>
          <button className='shortener-btn' onClick={shortenURL}>
            Shorten it!
          </button>
        </div>
      )}
    </div>
  );
};

export default Shortener;
