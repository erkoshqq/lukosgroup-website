import Reveal from '../components/Reveal'
import { steps } from './data'

// Горизонтальная схема "от заявки до акта": на широких экранах узлы соединены линией.
export default function Timeline() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-blue-200" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="relative mx-auto w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center shadow-lg ring-8 ring-white">
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-blue-200 text-blue-900 text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{s.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
