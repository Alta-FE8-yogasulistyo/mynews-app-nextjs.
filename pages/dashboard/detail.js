import React from "react";
import { useRouter } from "next/router";
import { Image } from "react-bootstrap";
import Navbars from "../../component/navbars";
const Detail = () => {
  const router = useRouter();
  const datas = router.query;

  return (
    <>
      <Navbars />
      <div>
        <p className="judul">{datas.title}</p>
        <p className="penulis">{datas.author}</p>
        <div className="text-center gambar">
          <Image src={datas.image} width="560px" height="387px" />
        </div>
        <p className="content">{datas.content}</p>
      </div>
    </>
  );
};

export default Detail;
