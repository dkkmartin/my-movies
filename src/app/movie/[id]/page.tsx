import { Image } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Bookmark } from '@/components/Buttons/Bookmark'
import BackButton from '@/components/Buttons/Back'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="flex flex-col h-screen">
      <section className="h-[300px] grid-cols-1 relative">
        <BackButton className="z-10 absolute top-0 left-0" />
        <Image
          className="z-0"
          src="/spiderman.png"
          width="100%"
          height={300}
          alt="spiderman"
        ></Image>
      </section>
      <section className="rounded-xl z-20 bg-white h-full p-6 flex flex-col gap-4">
        <div className="flex items-center w-full justify-between">
          <h1 className="font-bold text-3xl">{params.id}</h1>
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
          <p className="text-default-500">9.1/10 IMDb</p>
        </div>
      </section>
    </main>
  )
}
