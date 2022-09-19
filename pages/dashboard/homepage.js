import axios from "axios";
import React from "react";
import CardCom from "../../component/cardCom";
import Navbars from "../../component/navbars";
import { useRouter } from "next/router";
import Router from "next/router";

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=startup`);
  const news = response.data.data;
  return {
    props: {
      news: news,
    },
  };
};

const ServerSideRendering = ({ news }) => {
  const router = useRouter();
  const goDetail = (data) => {
    console.log(data);
    Router.push({
      pathname: "/dashboard/detail",
      query: {
        title: data.title,
        author: data.author,
        image: data.imageUrl,
        content: data.content,
      },
    });
  };
  return (
    <div>
      <Navbars />
      <p className="hallo">HALLO "{router.query.name}" Berita Apa Yang Kamu Cari?</p>

      {news.map((item, index) => {
        return (
          <div key={index}>
            <CardCom news={news} goDetail={goDetail} />
            <p>{item.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServerSideRendering;
