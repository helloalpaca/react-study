import React, { Component, useState } from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

const Paging = () => {
  const getUsers = () => {
    const users = [
      {
        id: 0,
        name: '오징어',
        birth: '1111-11-11',
        phonenumber: '01011111111',
      },
      {
        id: 1,
        name: '김철수',
        birth: '2222-22-22',
        phonenumber: '01022222222',
      },
      {
        id: 2,
        name: '김영희',
        birth: '3333-33-33',
        phonenumber: '01033333333',
      },
      {
        id: 3,
        name: '김나비',
        birth: '4444-44-44',
        phonenumber: '01044444444',
      },
      {
        id: 4,
        name: '김이나',
        birth: '5555-55-55',
        phonenumber: '01055555555',
      },
      {
        id: 5,
        name: '김나박',
        birth: '6666-66-66',
        phonenumber: '01066666666',
      },
      {
        id: 6,
        name: '김매실',
        birth: '7777-77-77',
        phonenumber: '01077777777',
      },
      {
        id: 7,
        name: '김초록',
        birth: '8888-88-88',
        phonenumber: '01088888888',
      },
      {
        id: 8,
        name: '김수소',
        birth: '9999-99-99',
        phonenumber: '01099999999',
      },
      {
        id: 9,
        name: '김산소',
        birth: '1999-99-99',
        phonenumber: '01000000000',
      },
    ];
    return users;
  };

  const [users, setUsers] = useState({
    data: getUsers(),
    pageSize: 4,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setUsers({ ...users, currentPage: page });
  };

  const changePage = (oage) => {};

  const { data, pageSize, currentPage } = users;
  const pagedUsers = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

  const { length: count } = users.data;
  if (count === 0) return <p>no Users</p>;

  return (
    <main style={{ height: '80%' }}>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Pagination</h1>
        <ol className="breadcrumb mb- 4">
          <li className="breadcrumb-item active">Pagination</li>
        </ol>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {pagedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.phonenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={Math.ceil(10 / 4)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        breakLabel={''}
        previousLabel={'이전'}
        nextLabel={'다음'}
        onPageChange={changePage}
        containerClassName={'pagination-ul'}
        activeClassName={'currentPage'}
        previousClassName={'pageLabel-btn'}
        nextClassName={'pageLabel-btn'}
      />
    </main>
  );
};
/*
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
            style={{ cursor: 'pointer' }}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
*/
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items)
    .slice(startIndex) // 시작점부터 배열을 자르되
    .take(pageSize) // pageSize만큼의 배열을 취함
    .value(); // lodash wrapper 객체를 regular 배열로 변환
}

export default Paging;
