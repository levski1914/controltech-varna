export default function PrivacyPolicy() {
  return (
    <main className="container-main py-20">
      <h1 className="text-4xl font-semibold text-white">
        Политика за поверителност
      </h1>

      <div className="mt-8 space-y-6 text-slate-300 leading-7">
        <p>
          Този сайт събира минимално количество лични данни с цел обработка
          на запитвания за сервизни услуги.
        </p>

        <h2 className="text-xl text-white font-medium">
          Какви данни събираме
        </h2>

        <ul className="list-disc pl-6">
          <li>име</li>
          <li>телефон</li>
          <li>имейл</li>
          <li>описание на проблема</li>
        </ul>

        <h2 className="text-xl text-white font-medium">
          За какво използваме данните
        </h2>

        <p>
          Данните се използват единствено за контакт с клиента и
          обработка на запитвания за сервизни услуги.
        </p>

        <h2 className="text-xl text-white font-medium">
          Съхранение на данни
        </h2>

        <p>
          Данните се съхраняват само за времето, необходимо за
          обработка на запитването.
        </p>

        <h2 className="text-xl text-white font-medium">
          Контакт
        </h2>

        <p>
          Ако имате въпроси относно защитата на личните данни,
          можете да се свържете с нас чрез имейл или телефон.
        </p>
      </div>
    </main>
  );
}