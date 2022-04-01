import React from 'react';

const Bookitem = () => (
  <div className="bookItemContainer">
    <div className="bookItemList">
      <div className="left">
        <p>Action</p>
        <h4>The Hunger Games</h4>
        <span>Suzanne Collins</span>
        <div>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </div>
      </div>
      <div className="middle">
        <div className="circle">Circle</div>
        <div className="score">
          <span>percentage</span>
          <p>completed</p>
        </div>
      </div>
      <div className="right">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 17</p>
        <div className="update">
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);

export default Bookitem;
