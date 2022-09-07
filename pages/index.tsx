import type { NextPage } from 'next';
import Head from 'next/head';
//import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import HomePagePicture from '../public/images/Apoyo.jpg'
import FotoInstructores from '../public/images/instructores-1.jpg' 
import Minecraft from '../public/images/Minecraft.png' 
import YouthProgramming from '../public/images/YouthProgramming.jpg' 
import PythonPhoto from "../public/images/Python.jpg"
import DataAnalysis from '../public/images/DataAnalysis.jpg' 
import 'animate.css';
import FlashyDiv from '../components/FlashyDiv';
import Script from 'next/script';

const Home: NextPage = () => {

  function addJsonLD() { 
    const data = {
      "@context": "https://schema.org/",
      "@type": "EducationalOrganization",
      "name": "Sintaxis",
      "keywords": "programación, programacion, coding, codificar, programar, academia, escuela, nicaragua, latinoamérica, español, barato, en línea, virtual, zoom, css, python, html, javascript, typescript, lua, java, c#, minecraft education, minecraft, roblox, roblox studios",
      "logo": "images/LogoType.png",
      "telephone": "505-8260-9296",
      "email": "sintaxisacademy@gmail.com",
      "event": {
        "@type": "Event",
        "location": {
          "@type": "VirtualLocation",
          "name": "Zoom"
        },
        "name": "Curso - Introducción a Programación con Python",
        "description": "",
        "startDate": "2022-09-24",
        "url": "cursos_para_jovenes",
        "audience": {
          "@type": "EducationAudience",
          "educationalRole": "student",
          "audienceType": "young",
          "name": "Estudiantes de Introducción a Programación con Python"
        },
        "doorTime": "2022-09-24T15:00-06:00",
        "duration": "P2H"
      }
    }
    return {
      __html: `${data}
      `
    }
  }


  const router = useRouter();

  const Highlighted = ({children}:any) => {
    return (
      <b className='bg-blue text-white '>
        &nbsp;{children}&nbsp;
      </b>
    )
  }


  const [screenSize, setScreenSize] = useState<number[]>([0, 0])


  useEffect(() => {
    setScreenSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', () => {
      setScreenSize([window.innerWidth, window.innerHeight])
    });
  }, [])


  const LandingBannerRef = useRef<HTMLDivElement>(null);
  const OfrecemosRef = useRef<HTMLDivElement>(null);



  
  
  useEffect(() => {

    const coursesImages = Array.from(document.getElementsByClassName('coursesImage') as HTMLCollectionOf<HTMLElement>);
    const instructorsImage = document.getElementById('instructorsImage');
    const upcomingCourseBanner = document.getElementById('upcomingCourseBanner');

    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("invisible");
          entry.target.classList.add("animate__animated");
  
          if (entry.target == LandingBannerRef.current) {
            entry.target.classList.add("animate__slideInLeft");
          }
          if (entry.target == upcomingCourseBanner) {
            entry.target.classList.add("animate__slideInRight");
          }
          if (entry.target == OfrecemosRef.current) {
            entry.target.classList.add("animate__fadeInDown");
          }
          if (coursesImages.includes(entry.target as HTMLElement) || entry.target == instructorsImage) {
            entry.target.classList.add("animate__fadeIn");
          }
        }
      })
    }

    /*const options1 = {
      threshold: 1.0,
    }*/
    
    const options2 = {
      threshold: 0.5,
    }
    //const midObserver = new IntersectionObserver(callback, options1)
    const fastObserver = new IntersectionObserver(callback, options2);
    fastObserver.observe(LandingBannerRef.current!);
    fastObserver.observe(OfrecemosRef.current!);
    fastObserver.observe(upcomingCourseBanner!);
    for (const image of coursesImages) {
      fastObserver.observe(image);
    }
    fastObserver.observe(instructorsImage!);
  }, [])

  return (
        <div className='overflow-y-auto h-full w-full relative bg-white '>
          <Head>
            <title>Sintaxis | Aprende a Programar</title>
            <meta name='description' content='La primera academia de programación de Nicaragua'/>
            <meta property='og:title' content='Sintaxis'/>
            <meta property='og:url' content='https://sintaxis.io'/>
            <meta property="og:type" content="website" />
            <meta property='og:description' content='La primera academia de programación de Nicaragua'/>
            {/*For Facebook Image*/}
            <meta property='og:image' itemProp="image" content={'https://ibb.co/3yhzz7C'}/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:image:type" content="image/png"/>
            {/*For Whatsapp Image*/}
            <meta property='og:image' itemProp="image" content={'https://ibb.co/Qdj3rbH'}/>
            <meta property="og:image:width" content="256"/>
            <meta property="og:image:height" content="256"/>
            <meta property="og:image:type" content="image/png"/>
          </Head>
            <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={addJsonLD()}
            key="page-jsonld"
            id="page-jsonld"
            />
          <div className='relative h-full w-full'>
            <div className='h-full w-full'>
              <Image 
              alt='SintaxisMainPic'
              className=' relative' 
              placeholder='blur'
              layout='fill'  
              objectFit="cover" 
              objectPosition={screenSize![0] > 1000 ? '50% 100%' : 'right'}
              src={HomePagePicture}
              />
            </div>
            <div    // First Banner
            ref={LandingBannerRef}
            className='z-[3] m-8 bottom-0 mb-20 absolute text-white invisible bg-blue bg-opacity-80 rounded-md p-5 shadow-black shadow-lg'
            >
              <h1
              className='text-3xl sm:text-5xl'
              >
                Aprende a programar
              </h1>
              <br/>
              <p
              className='text-lg sm:w-[30rem]'
              >
                Somos la primera academia de <i>programación</i> de Nicaragua. 
                Te enseñamos todo lo que necesitás para sumergirte 
                en un mundo de posibilidades.
              </p>
              <Button
              className='mt-5'
              onClick={() => {
                router.push('/inscripcion');
              }}
              >
                Inscribirse
              </Button>
            </div>
          </div>
          <br/>         
          <br/>            
          <br/>            
          <div 
          ref={OfrecemosRef}
          className='flex justify-center relative invisible text-center flex-col text-black'
          >
            <h1 className='text-4xl md:text-5xl self-center font-bold'>Lo que ofrecemos</h1>
            <br/>
            <br/>
            <div className='relative self-center flex flex-col sm:flex-row !gap-4 text-white md:w-[90%] md:text-xl md:grid grid-flow-col '>
              <div className='bg-black p-3 rounded-md md:p-6 flex flex-col justify-center '>
                <span>
                  Todas nuestras clases son <Highlighted>virtuales</Highlighted> con instructores
                  especializados. Así, tu progreso estará acompañado
                  y monitoreado ante cualquier duda.
                </span>
              </div>
              <div className='bg-black p-3 rounded-md md:p-6 flex flex-col justify-center '>
                <span>
                  Clases pequeñas de hasta 16 estudiantes para una <Highlighted>atención y enseñanza personalizada</Highlighted>.
                </span>
              </div>
              <div className='bg-black p-3 rounded-md md:p-6 flex flex-col justify-center'>
                <span>
                  <Highlighted>Entrega de certificado de aprobación</Highlighted> al terminar el curso. 
                </span>
              </div>
            </div>
          </div>
          <br/>       
          <br/> 
          <div 
          id='upcomingCourseBanner'
          className='invisible grid md:grid-flow-col relative h-max md:h-max md:grid-cols-2 m-5'
          >
            <div className='bg-blue p-5 rounded-t-md md:rounded-t-none  md:rounded-l-md text-xl'>
              <h2 className='text-3xl text-center font-bold'>
                ¿Querés comenzar a programar?
              </h2>
              <br/>
              Nuestro primer curso, 
              <b> Introducción a Programación con Python, </b>
              empieza el <b>sábado 24 de septiembre</b>. 
              <br/>
              <br/>
              <div className='bg-black text-white p-3 rounded-md'>
                ¡Inscribite ahora y usa el código<b> SINTAXIS20 </b>para un 20% de descuento! 
              </div>
              <br/>
              <div className='flex flex-row w-full justify-around'>
                <Link href='cursos_para_jovenes' ><a className='hover:decoration-white'><i className=' font-bold '>Más información</i></a></Link>
              </div>
            </div>
            <FlashyDiv
            onClick={ () => {
              router.push('/inscripcion');
            }}
            className='min-h-[230px] flex flex-col items-end relative justify-end bg-black'
            >
              <Image
                src={PythonPhoto}
                layout='fill'
                objectFit={screenSize[0] < 1150 ? 'contain' : 'cover'}
                //className=''
                loading='eager'
                placeholder='blur'
                objectPosition={'center'}
                alt='Foto de Python'
                />
                <Button
                  className='float-right grid w-max h-max relative m-5'
                  onClick={() => {
                    router.push('/inscripcion');
                  }}
                  >
                    Inscribirse
                  </Button>   
            </FlashyDiv>
          </div>
          <br/>
          <br/>
          <div 
          className='grid grid-rows-3 relative text-white grid-flow-row md:grid-rows-none md:grid-cols-3 md:grid-flow-col font-semibold text-center h-[700px] md:h-[400px] w-full ' 
          >
            <div className='bg-slate-50 grid content-between   p-5 h-full w-full  relative'>
              <div className='bg-black w-full h-full bg-opacity-70 absolute z-[2]'></div>
              <Image
              src={Minecraft}
              layout='fill'
              objectFit='contain'
              className='invisible coursesImage'
              loading='eager'
              placeholder='blur'
              //onClick={() => router.push('/instructores')}
              objectPosition={'center'}
              alt='Foto de Minecraft'
              />
              <span className='z-[3] text-4xl'>Niños</span>  
              <i className='z-[3] text-2xl'>Próximamente</i>  
            </div>
            <FlashyDiv
            onClick={() => router.push('/cursos_para_jovenes')}
            className='relative grid content-between h-full w-full p-5  bg-opacity-70'
            >
              <Image
                src={YouthProgramming}
                layout='fill'
                className='invisible coursesImage'
                objectFit='cover'
                loading='eager'
                placeholder='blur'
                objectPosition={'top'}
                alt='Foto de joven programando'
                />
                <span className='z-[3] text-4xl font-bold text-white'>Jóvenes</span>  
                <span className='z-[3] text-2xl'>Cursos</span>  
            </FlashyDiv>
            <div className=' grid content-between p-5 h-full w-full relative '>
              <div className='bg-black w-full h-full bg-opacity-70 absolute z-[2]'></div>
              <Image
              src={DataAnalysis}
              layout='fill'
              objectFit='cover'
              className='invisible coursesImage'
              loading='eager'
              placeholder='blur'              
              objectPosition={'center'}
              alt='Foto de análisis de datos'
              />  
              <span className='z-[3] text-4xl'>Profesionales</span>  
              <i className='z-[3] text-2xl'>Próximamente</i>  
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className='text-center relative text-black'>
            <h2 className='text-4xl md:text-5xl  font-bold' >
              <Link href={'instructores'} scroll={true}>
                <a className='hover:decoration-[10px]'>
                  Conoce a tus instructores 
                </a>
              </Link>
            </h2>
            <br/>
            <br/>
            <FlashyDiv
            onClick={() => router.push('/instructores')}
            className='relative h-[500px]'
            >
              <Image
                src={FotoInstructores}
                layout='fill'
                objectFit={screenSize[0] < 640 || (screenSize[1] < screenSize[0] && screenSize![0] < 700) ? 'cover' : 'contain'}
                id='instructorsImage'
                className='invisible'
                loading='eager'
                placeholder='blur'
                objectPosition={'top'}
                alt='Foto de instructores'
                />
            </FlashyDiv>
          </div>
          {/*For Whatsapp Image supposedly*/}
          <link itemProp="thumbnailUrl" href='https://ibb.co/Qdj3rbH'/>
          <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject">
            <link itemProp="url" href='https://ibb.co/Qdj3rbH'/>
          </span>
        </div>
  )
}

export default Home

/*


*/

/*style={{
  zIndex: 2,
  //backgroundColor: 'white', 
  color: 'black', 
  width: '100%', 
  height: '10%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
}}*/