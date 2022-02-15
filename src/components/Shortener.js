import React, { useState } from "react";

const Shortener = ({ shortenURL, setInput, input }) => {
  const inputHandler = (e) => {
    setInput({ value: e.target.value, empty: false });
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      shortenURL();
    }
    if (input.value.trim().length <= 0) {
      setInput({ value: "", empty: true });
    } else {
      setInput({ value: e.target.value, empty: false });
    }
  };

  const btnHandler = (e) => {
    if (input.value.trim().length <= 0) {
      setInput({ value: "", empty: true });
    } else {
      setInput({ value: e.target.value, empty: false });
      shortenURL();
    }
  };

  return (
    <div>
      {input.empty ? (
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
          <button className='shortener-btn' onClick={btnHandler}>
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
          />

          <button className='shortener-btn' onClick={btnHandler}>
            Shorten it!
          </button>
        </div>
      )}
    </div>
  );
};

export default Shortener;
