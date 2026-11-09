import { redirect } from 'next/navigation'

// Отдельной страницы заявки нет: заявка оформляется на странице контактов.
export default function RequestPage() {
  redirect('/engineering/contact')
}
