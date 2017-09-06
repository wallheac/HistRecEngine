import React, {Component} from 'react';

const GetBook = () => {
  return(
    <div className ="getBook">
      <h2>Get this Book</h2>
      <button className="button" id="purchase">Purchase</button>
      <button className="button" id="library">Find in Library</button>
    </div>
  );
};

export default GetBook;
