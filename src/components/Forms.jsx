import React, { useEffect, useState } from "react";
import Table from "./Table";
import styles from "./table.module.css";
const Forms = () => {
  const [page, setpage] = useState(0)
  const dbData = () => {
    fetch(`http://localhost:8080/forms?_page=${page}&_limit=5`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        age: data.age,
        address: data.address,
        department: data.department,
        salary: data.salary,
        married: data.married,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setnewData([...newData, d]);
        setdata("");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/forms?_page=${page}&_limit=5`)
      .then((r) => r.json())
      .then((d) => {
        setnewData(d);
      });
  }, [page]);

  
  const [newData, setnewData] = useState([]);
  const [data, setdata] = useState({
    name: "",
    age: 0,
    address: "",
    department: "",
    salary: 0,
    married: false,
  });

  const handleChange = (e) => {
    let { name, value, checked } = e.target;
    setdata({
      ...data,
      [name]: value,
      checked,
    });
  };
  return (
    <div>
      <div className="EmployeeDetails">
        <h1>Employee Details : </h1>
        <div>
          <label>Name : </label>
          <input
            onChange={handleChange}
            value={data.name}
            name="name"
            type="text"
            placeholder="Enter your Name: "
          ></input>
        </div>
        <div>
          <label>Age : </label>
          <input
            onChange={handleChange}
            value={data.age}
            name="age"
            type="number"
            placeholder="Enter your Age: "
          ></input>
        </div>
        <div>
          <label>Address : </label>
          <input
            onChange={handleChange}
            value={data.address}
            name="address"
            type="text"
            placeholder="Enter your Address: "
          ></input>
        </div>
        <div>
          <label>Department : </label>
          <select
            onChange={handleChange}
            value={data.department}
            name="department"
          >
            <option value="Electronics">Electronics and Telecom</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
            <option value="Computer">Computer Science</option>
            <option value="Civil">Civil</option>
          </select>
        </div>
        <div>
          <label>Salary : </label>

          <input
            onChange={handleChange}
            value={data.salary}
            name="salary"
            type="number"
            placeholder="Salary Expected "
          ></input>
        </div>
        <div>
          <label>Maritial Status : </label>
          <div>
            <span>Married</span>
            <input
              onChange={handleChange}
              value={data.married}
              name="married"
              type="checkbox"
            ></input>
          </div>
        </div>
        <div>
          <label>Profile Photo : </label>
          <input name="photo" type="file"></input>
        </div>
        <button onClick={dbData}>Submit</button>
      </div>
      <div className={styles.tableBlock}>
        <Table data={newData}></Table>
      </div>

      <div>
        <button disabled={page>=newData.length} onClick={()=>setpage(page+1)}>front</button>
        <button disabled={page<=1} onClick={()=>setpage(page-1)}>back</button>
      </div>
    </div>
  );
};

export default Forms;
