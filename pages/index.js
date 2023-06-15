/** @format */
import React, { useState, useEffect } from "react";
import {
  Grid,
  Spacer,
  Text,
  Card,
  Image,
  Progress,
  Button,
  Modal,
  Loading,
} from "@nextui-org/react";
import { MongoClient } from "mongodb";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Layout from "/components/Layout";
import { useRouter } from "next/dist/client/router";
export default function Home({ resenas, projects }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const resena = () => {
    router.push("/contacto/contacto");
  };
  //* Framer Motion*//
  const count = useMotionValue(0);
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const rounded3 = useTransform(count3, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, 95, { duration: 10 });
    return controls.stop;
  }, []);
  useEffect(() => {
    const controls1 = animate(count1, 80, { duration: 10 });
    return controls1.stop;
  }, []);
  useEffect(() => {
    const controls2 = animate(count2, 90, { duration: 10 });
    return controls2.stop;
  }, []);
  useEffect(() => {
    const controls3 = animate(count3, 85, { duration: 10 });
    return controls3.stop;
  }, []);
  return (
    <Layout>
      {/*--------------------------------------Section de Home-----------------------------------------------------*/}
      <section id="Home" style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid xs={12} justify="center">
            <Text className="titulo divgeek">
              Aprendiendo a utilizar imágenes{" "}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Image
              width={"70%"}
              height={"70%"}
              src="/img/juego.jpeg"
              alt="Default Image"
              objectFit="cover"
            />
          </Grid>
        </Grid.Container>
      </section>
      <Spacer y={15} />
      <section id="Home" style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid xs={12} justify="center">
            <Text className="titulo divgeek">
              Aprendiendo a utilizar los vídeos
            </Text>
          </Grid>
          <Grid justify="center" xs={12}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ua77838aucs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid.Container>
      </section>
      <Spacer y={15} />
      <section id="Home" style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid xs={12} justify="center">
            <Text className="titulo divgeek">
              Aprendiendo a utilizar los vídeos
            </Text>
          </Grid>
          <Grid justify="center" xs={12}>
            <audio controls>
              <source src="img/gol.mp3" type="audio/mp3"/>
            </audio>
          </Grid>
        </Grid.Container>
      </section>
      <Spacer y={15} />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const resena = await db
    .collection("resenas")
    .find()
    .sort({ $natural: -1 })
    .limit(7)
    .toArray();
  const res = await fetch(
    "https://6442dd1576540ce225973a12.mockapi.io/projects"
  );
  const projects = await res.json();
  return {
    props: {
      resenas: JSON.parse(JSON.stringify(resena)),
      projects: projects,
    },
  };
}
