import { useRouter } from "next/router";

export default function DetailPost() {
  const router = useRouter();
  const params = router.query;
  console.log(params);
  return (
    <>
      <h1>Detal Post</h1>
    </>
  );
}
// http://localhost:3000/post/detail/1
