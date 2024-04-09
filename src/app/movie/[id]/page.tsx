'use client'

import BackButton from '@/components/Buttons/Back'
import Bookmark from '@/components/Buttons/Bookmark'
import LoadingSpinnerScreen from '@/components/loading/LoadingSpinnerScreen'
import Cast from '@/components/movie/Cast'
import MovieChip from '@/components/movie/MovieChip'
import { Button, Image } from '@nextui-org/react'
import useSWR from 'swr'

// const data = {
//   adult: false,
//   backdrop_path: '/4N6Rx5KVUvGqXomsRpeenBTTaEm.jpg',
//   belongs_to_collection: null,
//   budget: 0,
//   genres: [
//     {
//       id: 35,
//       name: 'Comedy',
//     },
//   ],
//   homepage: '',
//   id: 157123,
//   imdb_id: 'tt2181867',
//   original_language: 'it',
//   original_title: 'Come non detto',
//   overview:
//     'Mattia is about to move to Madrid by his boyfriend Eduard. When the day before leaving for Spain, Eduard announces his arrival in Rome to know the "laws", Mattia must choose whether to finally come clean with his companion, or confess to being a formidable liar.',
//   popularity: 8.992,
//   poster_path: '/fFwKsRboIzBzx650kFjFCZLMm4P.jpg',
//   production_companies: [],
//   production_countries: [
//     {
//       iso_3166_1: 'IT',
//       name: 'Italy',
//     },
//   ],
//   release_date: '2012-09-07',
//   revenue: 0,
//   runtime: 78,
//   spoken_languages: [
//     {
//       english_name: 'Italian',
//       iso_639_1: 'it',
//       name: 'Italiano',
//     },
//   ],
//   status: 'Released',
//   tagline: 'Mattia is about to leave and decided to travel light.',
//   title: 'Tell No One',
//   video: false,
//   vote_average: 6.1,
//   vote_count: 78,
//   credits: {
//     cast: [
//       {
//         adult: false,
//         gender: 2,
//         id: 1138342,
//         known_for_department: 'Acting',
//         name: 'Josafat Vagni',
//         original_name: 'Josafat Vagni',
//         popularity: 10.667,
//         profile_path: '/bg8KPJOepP31sr3cV8RQeo0jhxq.jpg',
//         cast_id: 1,
//         character: 'Mattia',
//         credit_id: '52fe4bb69251416c910e35ff',
//         order: 0,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 129108,
//         known_for_department: 'Acting',
//         name: 'Valeria Bilello',
//         original_name: 'Valeria Bilello',
//         popularity: 12.313,
//         profile_path: '/mR2SGckkRuScBhJeD42EXeygNgc.jpg',
//         cast_id: 3,
//         character: 'Stefania',
//         credit_id: '52fe4bb69251416c910e3609',
//         order: 1,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 138722,
//         known_for_department: 'Acting',
//         name: 'Francesco Montanari',
//         original_name: 'Francesco Montanari',
//         popularity: 10.158,
//         profile_path: '/aMNmw6Du3rgTGbmXJS4P8W9vssc.jpg',
//         cast_id: 4,
//         character: 'Giacomo / Alba Paillettes',
//         credit_id: '52fe4bb69251416c910e360d',
//         order: 2,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 78680,
//         known_for_department: 'Acting',
//         name: 'Monica Guerritore',
//         original_name: 'Monica Guerritore',
//         popularity: 6.833,
//         profile_path: '/3yTCJIS3B8TcAQyXkc3gZcHr6Hu.jpg',
//         cast_id: 5,
//         character: 'Aurora',
//         credit_id: '52fe4bb69251416c910e3611',
//         order: 3,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 78697,
//         known_for_department: 'Acting',
//         name: 'Antonino Bruschetta',
//         original_name: 'Antonino Bruschetta',
//         popularity: 11.326,
//         profile_path: '/1GBSY3pCvaSUtHguV8AmTxLYD4K.jpg',
//         cast_id: 8,
//         character: 'Rodolfo',
//         credit_id: '5981b0ef92514151ed011fa2',
//         order: 4,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 1862508,
//         known_for_department: 'Acting',
//         name: 'Jose Dammert',
//         original_name: 'Jose Dammert',
//         popularity: 2.553,
//         profile_path: '/cKzGw7p4KCkBwQsP3Gw7ONKjmN7.jpg',
//         cast_id: 9,
//         character: 'Eduard',
//         credit_id: '5981b0fe92514151e7012830',
//         order: 5,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 1862509,
//         known_for_department: 'Acting',
//         name: 'Valentina Correani',
//         original_name: 'Valentina Correani',
//         popularity: 2.4,
//         profile_path: null,
//         cast_id: 10,
//         character: 'Samantha',
//         credit_id: '5981b10b925141519b0121fa',
//         order: 6,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 1142305,
//         known_for_department: 'Acting',
//         name: 'Lucia Guzzardi',
//         original_name: 'Lucia Guzzardi',
//         popularity: 7.228,
//         profile_path: '/1LjQ3y5yKgsm0J19C3gKh9pzhEo.jpg',
//         cast_id: 11,
//         character: 'Iolanda',
//         credit_id: '5981b11692514151ed011fca',
//         order: 7,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 1420003,
//         known_for_department: 'Acting',
//         name: 'Andrea Rivera',
//         original_name: 'Andrea Rivera',
//         popularity: 2.567,
//         profile_path: '/8VNADwhWxt21MYGO7wew5HkZlzB.jpg',
//         cast_id: 12,
//         character: 'Bernardo / Pistone',
//         credit_id: '5981b120c3a3680d32012f10',
//         order: 8,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 1204167,
//         known_for_department: 'Acting',
//         name: 'Alan Cappelli Goetz',
//         original_name: 'Alan Cappelli Goetz',
//         popularity: 4.198,
//         profile_path: '/d3hoKGK1q4iVKKPnjL0jKoUQbu2.jpg',
//         cast_id: 13,
//         character: 'Christian',
//         credit_id: '5981b12ec3a3680ceb012a2e',
//         order: 9,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 1623202,
//         known_for_department: 'Acting',
//         name: 'Victoria Cabello',
//         original_name: 'Victoria Cabello',
//         popularity: 4.993,
//         profile_path: '/5NFUEwqph8PZgvdm2y7lDjJliKP.jpg',
//         cast_id: 15,
//         character: 'Herself',
//         credit_id: '5e052bcf4c1d9a0013dc9d3c',
//         order: 10,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2442431,
//         known_for_department: 'Acting',
//         name: 'Francesco Vairano',
//         original_name: 'Francesco Vairano',
//         popularity: 0.67,
//         profile_path: '/t5NoOD14lrk0jEqDIMQEjCiwxfz.jpg',
//         cast_id: 14,
//         character: 'Annunciatore al bar gay (voce)',
//         credit_id: '5e05293ba128560011c05b6c',
//         order: 11,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 2801374,
//         known_for_department: 'Acting',
//         name: "Raffaella D'Avella",
//         original_name: "Raffaella D'Avella",
//         popularity: 2.708,
//         profile_path: null,
//         cast_id: 16,
//         character: 'Professoressa della scuola superiore',
//         credit_id: '5faedb188e8702004094ba75',
//         order: 12,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855145,
//         known_for_department: 'Acting',
//         name: 'Roberto Di Maio',
//         original_name: 'Roberto Di Maio',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 17,
//         character: 'Massaggiatore Spa',
//         credit_id: '5faedb2b1d3143003d9c0fad',
//         order: 13,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 1300918,
//         known_for_department: 'Acting',
//         name: 'Eugenio Franceschini',
//         original_name: 'Eugenio Franceschini',
//         popularity: 6.165,
//         profile_path: '/yocF74PBJElXizPBl3Mpdc2D7pk.jpg',
//         cast_id: 18,
//         character: 'Cameriere gay',
//         credit_id: '5faedb46a2d2e9003e14ea1e',
//         order: 14,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855146,
//         known_for_department: 'Acting',
//         name: 'Marcello Gori',
//         original_name: 'Marcello Gori',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 19,
//         character: 'Tassista',
//         credit_id: '5faedb55ad59b5003f5b4c3f',
//         order: 15,
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 4034232,
//         known_for_department: 'Acting',
//         name: 'Enrico Ottaviano',
//         original_name: 'Enrico Ottaviano',
//         popularity: 0.98,
//         profile_path: null,
//         cast_id: 29,
//         character: 'Carabiniere',
//         credit_id: '648d1e4d26346200eb758799',
//         order: 16,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855148,
//         known_for_department: 'Acting',
//         name: 'Ursula Katzulova',
//         original_name: 'Ursula Katzulova',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 20,
//         character: 'Drag Queen #2',
//         credit_id: '5faedb64924ce6003f6e05e2',
//         order: 17,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855149,
//         known_for_department: 'Acting',
//         name: 'Lorenzo Marinoni',
//         original_name: 'Lorenzo Marinoni',
//         popularity: 1.094,
//         profile_path: null,
//         cast_id: 21,
//         character: 'Receptionist',
//         credit_id: '5faedb737f0540003e1f3d5e',
//         order: 18,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855151,
//         known_for_department: 'Acting',
//         name: 'Bruno Panzani',
//         original_name: 'Bruno Panzani',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 22,
//         character: "L'uomo all'aperto",
//         credit_id: '5faedb972b93200041728444',
//         order: 19,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855153,
//         known_for_department: 'Acting',
//         name: 'Paola Penlope',
//         original_name: 'Paola Penlope',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 23,
//         character: 'Drag Queen #3',
//         credit_id: '5faedba3db4ed60040b199ac',
//         order: 20,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855155,
//         known_for_department: 'Acting',
//         name: 'Olga Pochette',
//         original_name: 'Olga Pochette',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 24,
//         character: 'Drag Queen #4',
//         credit_id: '5faedbb10fb39800428af701',
//         order: 21,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 1289318,
//         known_for_department: 'Writing',
//         name: 'Anna Maria Teresa Ricci',
//         original_name: 'Anna Maria Teresa Ricci',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 25,
//         character: 'cassiera',
//         credit_id: '5faedbcdad59b500405b9986',
//         order: 22,
//       },
//       {
//         adult: false,
//         gender: 1,
//         id: 1636737,
//         known_for_department: 'Acting',
//         name: 'Gaia Scodellaro',
//         original_name: 'Gaia Scodellaro',
//         popularity: 8.05,
//         profile_path: '/5hk50qopSbFHDqWlHzBeN7crEVj.jpg',
//         cast_id: 26,
//         character: 'Receptionist della Spa',
//         credit_id: '5faedbd9c613ce004021d51f',
//         order: 23,
//       },
//       {
//         adult: false,
//         gender: 0,
//         id: 2855160,
//         known_for_department: 'Acting',
//         name: 'Tsunami',
//         original_name: 'Tsunami',
//         popularity: 0.6,
//         profile_path: null,
//         cast_id: 27,
//         character: 'Drag Queen #5',
//         credit_id: '5faedbeb470ead004007c81d',
//         order: 24,
//       },
//     ],
//     crew: [
//       {
//         adult: false,
//         gender: 2,
//         id: 1138344,
//         known_for_department: 'Directing',
//         name: 'Ivan Silvestrini',
//         original_name: 'Ivan Silvestrini',
//         popularity: 4.628,
//         profile_path: '/5miyxmpx3n9gBFyRPYJtkjOFtYD.jpg',
//         credit_id: '52fe4bb69251416c910e3605',
//         department: 'Directing',
//         job: 'Director',
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 1427920,
//         known_for_department: 'Production',
//         name: 'Roberto Proia',
//         original_name: 'Roberto Proia',
//         popularity: 2.325,
//         profile_path: null,
//         credit_id: '54e237f49251412c8e001f14',
//         department: 'Writing',
//         job: 'Writer',
//       },
//       {
//         adult: false,
//         gender: 2,
//         id: 1427920,
//         known_for_department: 'Production',
//         name: 'Roberto Proia',
//         original_name: 'Roberto Proia',
//         popularity: 2.325,
//         profile_path: null,
//         credit_id: '6176b70b894ed6008e4aea34',
//         department: 'Production',
//         job: 'Associate Producer',
//       },
//     ],
//   },
// }

type MovieData = {
  status: number
  message: string
  backdrop_path: string
  title: string
  vote_average: number
  original_title: string
  name: string
  runtime: number
  genres: []
  genre: { name: string }
  spoken_languages: { english_name: string }[] | null
  overview: string
  credits: { cast: [] }
}

export default function Page({ params }: { params: { id: string } }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR<MovieData>(
    `/api/movie/${params.id}`,
    fetcher
  )

  const lengthConverter = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  if (isLoading) {
    return <LoadingSpinnerScreen />
  }

  if (error || !data || data.status === 404)
    return (
      <main className="h-screen w-screen flex justify-center items-center">
        <h1>Uh, oh. Something went wrong...</h1>
      </main>
    )

  return (
    <main className="flex flex-col h-screen">
      <section className="h-[300px] grid-cols-1 relative">
        <BackButton className="z-10 absolute top-5 left-5" />
        <Image
          className="z-0"
          src={'https://image.tmdb.org/t/p/original/' + data.backdrop_path}
          width="100%"
          height={300}
          alt="Cover image"
          radius="none"
          loading="eager"
        ></Image>
      </section>
      <section className="rounded-xl z-20 -mt-4 bg-white h-full p-6 flex flex-col gap-4 overflow-scroll scrollbar-hide">
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">{data.title}</h1>
            <h1 className="text-medium">{data.original_title}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              isIconOnly
              color="default"
              variant="light"
              aria-label="Bookmark"
            >
              <Bookmark />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/MaterialSymbolsKidStar.svg"
            width={20}
            alt="Star"
          ></Image>
          <p className="text-default-500">
            {data.vote_average.toFixed(1)}/10 IMDb
          </p>
        </div>
        <div className="flex gap-2">
          {data.genres.map((genre: MovieData, index: number) => (
            <MovieChip chips={[genre.name]} key={index} />
          ))}
        </div>
        <div className="flex gap-16 w-full py-2">
          <div>
            <p className="text-default-500">Length</p>
            {lengthConverter(data.runtime)}
          </div>
          <div>
            <p className="text-default-500">Language</p>
            {data.spoken_languages && data.spoken_languages[0].english_name}
          </div>
          <div>
            <p className="text-default-500">Rating</p>
            <p>PG-13</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-2">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-default-500 text-sm">{data.overview}</p>
        </div>
        <Cast castData={data.credits.cast}></Cast>
      </section>
    </main>
  )
}
