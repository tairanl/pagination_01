import React from "react";

export default function Pagination({ postsLength, postPerPage, paginate }) {
  const numbers = [];

  for (let i = 1; i <= Math.ceil(postsLength / postPerPage); i++) {
    numbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {numbers.map((num) => (
          <li key={num}>
            <a onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
