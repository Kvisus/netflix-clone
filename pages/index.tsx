import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Film } from "../typings";
import requests from "../utils/requests";
import {
  love,
  top100Popular,
  top250Best,
  fantasy,
  noire,
  shooter,
  triller,
  western,
} from "../utils/utilData";

interface Props {
  love: Film[];
  fantasy: Film[];
  triller: Film[];
  noire: Film[];
  shooter: Film[];
  western: Film[];
}
// console.log(love)
const Home = () => {
  // import {love} from '../utils/utilData'
  // console.log(love);
  return (
    <div
      className="relative h-screen bg-gradient-to-b from-gray-900/10 
    to-[#010511] lg:h-[140vh]"
    >
      <Head>
        <title>Home-Ntflx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* lets build smth */}
      {/* Header */}
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner love={love}/>
        <section className="md:space-y-24">
          {/* ROW */}
          <Row title='fantasy' movies={fantasy}/>
          <Row title='triller' movies={triller}/>
          {/* My List */}
          <Row title='noire' movies={noire}/>
          <Row title='western' movies={western}/>
        </section>
      </main>
      {/* modal */}
    </div>
  );
};

export default Home;

/* export const getServerSideProps = async () => {
  // const [
  //   keyword,
  //   top100,
  //   top250,
  //   triller,
  //   love,
  //   fantasy,
  //   noire,
  //   western,
  //   pewpow,
  // ] = await Promise.all([
  //   fetch(requests.fetch_keyword).then((res) => res.json()),
  //   fetch(requests.fetch_top100).then((res) => res.json()),
  //   fetch(requests.fetch_top250).then((res) => res.json()),
  //   fetch(requests.fetch_triller).then((res) => res.json()),
  //   fetch(requests.fetch_love).then((res) => res.json()),
  //   fetch(requests.fetch_fantasy).then((res) => res.json()),
  //   fetch(requests.fetch_noire).then((res) => res.json()),
  //   fetch(requests.fetch_western).then((res) => res.json()),
  //   fetch(requests.fetch_pewpow).then((res) => res.json()),
  // ]);
  // return {
  //   props: {
  //     keyword: keyword.results,
  //     top100: top100.results,
  //     top250: top250.results,
  //     triller: triller.results,
  //     love: love.results,
  //     fantasy: fantasy.results,
  //     noire: noire.results,
  //     western: western.results,
  //     pewpow: pewpow.results,
  //   },
  // };
}; */
