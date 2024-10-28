'use server'

import { cookies } from 'next/headers'

export async function createCk(value: string) {
  cookies().set('gestionnaire', value, {
    httpOnly: true,
    path: '/', maxAge: 300000,
  })

}

export async function removeCk() {
  cookies().delete('gestionnaire')
}