import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortLink = ({ data }) => {
  let [copyUrl, setCopyUrl] = useState({ value: "", copied: false });

  const onCopy = () => {
    setCopyUrl({ ...copyUrl, copied: true });
  };

  return (
    <div className='show-shorten'>
      <div className='input-url'>{data.original_link}</div>
      <hr />
      <div className='shorten-url'>
        {data.full_short_link}
        <CopyToClipboard onCopy={onCopy} text={data.full_short_link}>
          {copyUrl.copied ? (
            <button
              className='copy-btn'
              style={{ backgroundColor: "hsl(257, 27%, 26%)" }}>
              Copied!
            </button>
          ) : (
            <button className='copy-btn'>Copy</button>
          )}
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortLink;
