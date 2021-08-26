import Form from "./Form";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };

  const onDeleteUser = (index) => {
    setUsers([]);
    let userList = users;
    userList.splice(index, 1);
    setTimeout(() => {
      setUsers(userList);
    }, 100);
  };

  // one minute on a phone call

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="row">
        <div className="col-6">
          <Form handleFormSubmit={(data) => handleFormSubmit(data)} />
        </div>
        <div className="col-6">
          {users.map((user, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-10">
                  {user.firstName} {user.lastName} {user.email}
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteUser(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
