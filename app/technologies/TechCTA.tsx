import DivisionCTA from "../components/DivisionCTA";

export default function TechCTA() {
  return (
    <DivisionCTA
      division="Lukos Technologies"
      eyebrow="ЗАЯВКА НА ПОСТАВКУ"
      title="Опишите задачу — подберём оборудование"
      text="Оставьте заявку, и наш специалист свяжется с вами, чтобы уточнить ТЗ, рассчитать стоимость и сроки поставки"
      benefits={[
        "Подберём оборудование под ваше ТЗ",
        "Рассчитаем стоимость и сроки поставки",
        "Предложим альтернативы от ведущих мировых брендов",
      ]}
      placeholder="Что нужно поставить, в каком объёме, в какие сроки..."
      submitLabel="Получить предложение"
    />
  );
}
