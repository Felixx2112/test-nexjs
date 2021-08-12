import { useRouter } from "next/router";

export default function DetailComment() {
  const router = useRouter();
  const params = router.query;
  console.log(params);
  return (
    <>
      <h1>Detail Comment</h1>
    </>
  );
}

// http://localhost:3000/post/comment/toi-binh-luan/1
