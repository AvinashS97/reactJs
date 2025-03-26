// V29 - React Js State Challenge

import { useState } from 'react';

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: 'Avinash', age: 22 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Angles', age: 45 }
  ]);

  //  Derived state:- count of users
  console.log(users)
  const userCount = users.length
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount

  return (
    <div className='main-div'>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} - {user.age} years old
            </li>
          )
        })}
      </ul>
      <p>Total Users:- {userCount}</p>
      <p>Average Age:- {averageAge}</p>
    </div>
  );
};
