import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

import MasterLayout from "../../components/master-layout";

import { Row, Col } from "antd";
import ButtonApp from "../../components/Button";

export default function DetailUser({ result }) {
  const router = useRouter();
  const params = router.query;
  console.log(params);
  const id = params.detail[1] || null;
  console.log(id);
  const name = params.detail[0] || null;

  const { data } = result;

  return (
    <MasterLayout sub1="Detail" sub2="List" sub3={name}>
      <Row>
        <Col span={18} offset={3}>
          <h1>ID user: {data.id}</h1>
          <p>First name: {data.first_name}</p>
          <p>Last name: {data.last_name}</p>
          <p>Email: {data.email}</p>
          <p>
            <img
              width="30%"
              height="30%"
              alt={data.first_name}
              src={data.avatar}
            />
          </p>
          <br />

          <Link href="/user/list">
            <a>
              <ButtonApp type="primary">list user</ButtonApp>
            </a>
          </Link>
        </Col>
      </Row>
    </MasterLayout>
  );
}

export async function getServerSideProps({ query }) {
  //   console.log(query);
  const id = query.detail[1] || 0;
  console.log(id);
  const url = `https://reqres.in/api/users/${id}`;

  const response = await axios.get(url);
  const result = (await response.status) === 200 ? await response.data : {};
  return {
    props: {
      result,
    },
  };
}
