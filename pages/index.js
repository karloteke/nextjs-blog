import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>¡Bienvenido a Mi Blog Gatuno 🐱!</p>
        <p>
        ¡Hola a todos los amantes de los gatos! 🐾 Si estás aquí, es porque compartes conmigo una gran pasión: ¡los gatos! Este blog es un lugar especial donde exploraremos todo lo relacionado con estos maravillosos felinos.
        Desde consejos sobre el cuidado, la alimentación y la salud de nuestros amigos peludos, hasta curiosidades sobre su comportamiento, historias divertidas y cómo hacer que tu hogar sea el paraíso para tu gato. Mi objetivo es que este espacio sea útil tanto para quienes son nuevos en el mundo gatuno, como para quienes ya llevan años rodeados de ronroneos y patas suaves.
        Ya sea que busques tips para entender mejor a tu gato, o simplemente quieras disfrutar de lindas fotos y anécdotas gatunas, aquí encontrarás todo lo que necesitas.
        ¡Gracias por acompañarme en esta aventura felina! Espero que disfrutes de cada post, y no dudes en compartir tus experiencias y amor por los gatos en los comentarios. 🐱💕
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

