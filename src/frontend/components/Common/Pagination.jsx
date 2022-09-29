import React from "react";

function Pagination() {
  return (
    <ul className="paginations freelancer">
      <li>
        <a href="#">
          {" "}
          <i className="fas fa-angle-left" /> Previous
        </a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#" className="active">
          2
        </a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">
          Next <i className="fas fa-angle-right" />
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
