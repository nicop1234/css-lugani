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
import SwiperMSG from "/components/SwiperMsg";
import CardProjects from "@/components/CardProjects";
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
      <section id='Home' style={{ marginTop: "50px" }}>
        <Grid.Container justify='center'>
          <Grid xs={12} justify='center'>
            <Text className='titulo divgeek'>We are DivGeeks</Text>
          </Grid>
          <Grid className='titulo-abajo' justify='center'>
            <Text className='titulo divgeek notranslate'>Web developers</Text>
          </Grid>
          <Grid.Container justify='center'>
            <Text className='frase divgeek'>
              If you can imagine it, we can program it
            </Text>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={15} />
      <Modal
        blur
        css={{ bg: "none", shadow: "none" }}
        aria-labelledby='modal-title'
        open={loading}
        onClose={() => setLoading(false)}>
        <Loading size='xl' color='secondary' />
      </Modal>
      {/* --------------------------------------Section de About-----------------------------------------------------*/}
      <section id='About'>
        <Grid.Container>
          <Grid.Container justify='center'>
            <Grid>
              <Text className='titulo'>About us</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container
            alignItems='center'
            justify='center'
            style={{ marginTop: "25px" }}>
            <Grid xs={11} md={4}>
              <Card css={{ bg: "#E1C190", br: "64px", mb: "25px", p: "20px" }}>
                <Image
                  width={"100%"}
                  height={300}
                  layout='intrinsic'
                  src={"img/about.png"}
                />
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}>
                  <Grid>
                    <Text className='cardText'>
                      We are a group formed by 3 Argentine members, who studied
                      programming 2 years ago. We focus on web development and
                      development of android mobile applications.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={11} md={6} css={{ minHeight: "300px" }}>
              <Card
                css={{
                  bg: "#DECAC9",
                  br: "64px",
                  p: "20px",
                }}>
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}>
                  <Grid>
                    <Text className='cardText'>
                      We are a group integrated by 3 Argentinian members, who
                      started studying programming 2 years ago. We focus on web
                      and android mobile applications development, we are about
                      to start our university's computer cience carrear, we love
                      challenges and the usage of modern technology.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Skills-----------------------------------------------------*/}
      <section id='Skills'>
        <Grid.Container justify='center'>
          <Grid.Container justify='center'>
            <Grid>
              <Text className='titulo'>Skills</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container
            alignItems='center'
            justify='center'
            style={{ marginTop: "25px" }}>
            <Grid xs={11} md={6} css={{ minHeight: "300px" }}>
              <Card css={{ bg: "#BAE0F5", br: "64px", p: "20px", mb: "25px" }}>
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}>
                  <Grid>
                    <Text className='cardText'>
                      We started studying 2 years ago with the basic html, css,
                      sass, bootstrap and javascript files, then we moved to
                      React where we focused on the manage of components and
                      different files, once we got better we studied react's
                      framework "next.js", finally, we are studying NextUI, the
                      latest techonogoly available, we have deep knowledge into
                      developing responsive projects, we can also link a Mongo
                      database to the website to save information like stocks,
                      employees, etc.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={11} md={3}>
              <Card css={{ bg: "#D9D9D9", br: "64px", p: "20px" }}>
                <Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className='textoSkills notranslate'>Frontend</Text>
                    </Grid>
                    <Grid justify='end' xs={5}>
                      <motion.div className='textoSkills'>{rounded}</motion.div>
                    </Grid>
                    <Spacer></Spacer>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color='secondary'
                      status={"secondary"}
                      size='sm'
                      value={95}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className='textoSkills'>Backend</Text>
                    </Grid>
                    <Grid justify='end' xs={5}>
                      <motion.div className='textoSkills'>
                        {rounded1}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color='secondary'
                      status={"secondary"}
                      size='sm'
                      value={80}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className='textoSkills notranslate'>Next JS</Text>
                    </Grid>
                    <Grid justify='end' xs={5}>
                      <motion.div className='textoSkills'>
                        {rounded2}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color='secondary'
                      status={"secondary"}
                      size='sm'
                      value={90}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className='textoSkills notranslate '>Next UI</Text>
                    </Grid>
                    <Grid justify='end' xs={5}>
                      <motion.div className='textoSkills'>
                        {rounded3}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      className='color-prroges'
                      size='sm'
                      value={85}
                    />
                  </Grid.Container>
                </Grid.Container>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Project-----------------------------------------------------*/}
      <section id='Project'>
        <Grid.Container justify='center'>
          <Grid>
            <Text className='titulo'>Work</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify='center'>
          {projects.map((project) => (
            <Grid
              justify='center'
              css={{ mb: "30px" }}
              xs={10}
              sm={3}
              key={project.text}>
              <CardProjects
                text={project.text}
                textTecnos={project.textTecnos}
                img={project.img}
                link={project.link}
                nextjs={project.nextjs}
                nextui={project.nextui}
                bootstrap={project.bootstrap}
                sass={project.sass}
                mongodb={project.mongodb}
                firebase={project.firebase}
                html={project.html}
                css={project.css}
                framerMotion={project.framerMotion}
                mockApi={project.mockApi}
                reactNative={project.reactNative}
                javascript={project.javascript}
                color={project.color}
              />
            </Grid>
          ))}
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Reviews----------------------------------------------------- */}
      <section id='Reviews'>
        <Grid.Container>
          <Grid.Container justify='center'>
            <Grid>
              <Text className='titulo'>Reviews</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container justify='center'>
            <Grid css={{ minHeight: 300 }} xs={12} sm={8}>
              <SwiperMSG resenas={resenas}></SwiperMSG>
            </Grid>
          </Grid.Container>
          <Grid.Container css={{ mt: "30px",mb:"50px" }} justify='center'>
            <Grid>
              <Button
                css={{ bg: "#025a4e;" }}
                id='boton-Reviws'
                rounded
                shadow
                onPress={()=> resena()}
              >Send Review</Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
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
