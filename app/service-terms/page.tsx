export default function ServiceTerms() {
  return (
    <main className="container-main py-20">
      <h1 className="text-4xl font-semibold text-white">
        Условия за сервизни услуги
      </h1>

      <div className="mt-8 space-y-6 text-slate-300 leading-7">
        <p>
          Настоящите условия уреждат използването на сервизните
          услуги, предоставяни чрез този сайт.
        </p>

        <h2 className="text-xl text-white font-medium">
          Диагностика
        </h2>

        <p>
          Диагностиката е безплатна при последващ ремонт.
          При отказ от ремонт се заплаща съгласно
          актуалния ценоразпис.
        </p>

        <h2 className="text-xl text-white font-medium">
          Цени
        </h2>

        <p>
          Цените са ориентировъчни и могат да варират
          в зависимост от конкретния проблем.
        </p>

        <h2 className="text-xl text-white font-medium">
          Ремонт
        </h2>

        <p>
          Ремонт се извършва само след одобрение
          от клиента.
        </p>

        <h2 className="text-xl text-white font-medium">
          Гаранция
        </h2>

        <p>
          Гаранцията за извършената услуга е
          между 7 и 30 дни в зависимост от ремонта.
        </p>
      </div>
    </main>
  );
}