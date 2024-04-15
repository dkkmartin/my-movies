'use server'
import { cookies } from 'next/headers'

export default async function setCookie(token: string) {
  cookies().set('token', token)
}
