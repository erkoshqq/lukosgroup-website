import { redirect } from 'next/navigation'

// TODO: заменить на настоящую главную страницу группы компаний
// (обзор трёх направлений: Engineering, Technologies, Maintenance).
// Пока редиректим на действующий сайт направления Engineering.
export default function Page() {
  redirect('/engineering')
}
