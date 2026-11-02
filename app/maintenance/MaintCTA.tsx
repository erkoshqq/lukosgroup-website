import DivisionCTA from "../components/DivisionCTA";

export default function MaintCTA() {
  return (
    <DivisionCTA
      division="Lukos Maintenance"
      eyebrow="ЗАЯВКА НА ОБСЛУЖИВАНИЕ"
      title="Опишите задачу — обсудим работы"
      text="Оставьте заявку, и наш специалист свяжется с вами, чтобы уточнить объём работ и сроки"
      benefits={[
        "Оценим объём работ и сроки",
        "Выедем на объект и согласуем состав работ",
        "Работаем в ваших системах учёта и по вашим стандартам безопасности",
      ]}
      placeholder="Какое оборудование, что нужно сделать, на каком предприятии..."
      submitLabel="Отправить заявку"
    />
  );
}
