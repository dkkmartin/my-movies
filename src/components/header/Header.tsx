import { Switch } from '@nextui-org/react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Header() {
  return (
    <header className="grid grid-cols-3 my-10">
      <h1 className="text-2xl col-start-2 place-self-center font-bold">
        My movies
      </h1>
      <ThemeSwitcher></ThemeSwitcher>
    </header>
  )
}
