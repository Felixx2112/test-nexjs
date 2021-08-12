//http://localhost:3000/user/list

import axios from "axios";
import Link from "next/link";

export default function ListUser({ result }) {
  console.log("Result: ", result);
  const { data } = result;
  console.log("Data: ", data);
  return (
    <>
      <h1>List User!!!</h1>
      <table width="60%" border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <Link href={`/user/${item.first_name}/${item.id}`}>
                  <a>
                    <img width="30%" height="30%" src={item.avatar} />
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

//call api
export async function getStaticProps() {
  const url = `https://reqres.in/api/users?page=1`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? await response.data : {};
  return {
    //   will be passed to the page component as props
    props: {
      result,
    },
  };
}
