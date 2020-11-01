import Link from 'next/link'
import Head from 'next/head'


import Stats from '../components/Stats'
import Footer from "../components/Footer"
import BackMenu from "../components/BackMenu"
import DeathNumber from "../components/DeathNumber"
import FormatSvg from "../components/FormatSvg"

import styles from '../styles/Covid.module.css'
import stylesGeneral from '../styles/Styles.module.css'


export default function artigos() {


  return (

    <div className={stylesGeneral.container}>
      <Head>
        <title>Covid Brazil / Informações</title>
        <link rel="icon" href="/icons/android-chrome-192x192.png" />
      </Head>


      <BackMenu />

      <FormatSvg src="empty_street" />
      <h1 className={styles.title}>Informações</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Casos no Brasil</h2>
        <Stats url="https://covid19.mathdro.id/api/countries/BRA" />

      </section>

      <section className={styles.section + " " + styles.covidMap}>
        <h2 className={styles.subtitle}>Mais de <DeathNumber />  pessoas morreram em todo o mundo</h2>
        <p>Dados atualizados dia <DeathNumber choice="lastUpdate" /> UTC+0 horas. </p>
        <img className={styles.covidMapImg} src="/covid-map.png" alt="" srcset="" />

      </section>

      <Footer />
    </div>

  )


}


{/* <CountrySelector></CountrySelector> */ }
{/* <RateOfChange /> */ }
