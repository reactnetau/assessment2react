import React from 'react';
import { Pagination } from 'react-bootstrap';

//Sets up Pagination
const PaginationSetup = ({ movies, currentIndex, onChange }) => {
  let pages = movies && movies.length / 20 + 1;
  let active = currentIndex + 1;
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          console.log('on change');
          onChange(number - 1);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div className="pagination">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );

  return paginationBasic;
};

export default PaginationSetup;
