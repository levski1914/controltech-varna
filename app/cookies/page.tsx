export default function CookiesPolicy() {
  return (
    <main className="container-main py-20">
      <h1 className="text-4xl font-semibold text-white">
        Политика за бисквитки
      </h1>

      <div className="mt-8 space-y-6 text-slate-300 leading-7">
        <p>
          Този сайт използва бисквитки (cookies) за подобряване на
          потребителското изживяване.
        </p>

        <h2 className="text-xl text-white font-medium">
          Какво са бисквитките
        </h2>

        <p>
          Бисквитките са малки текстови файлове, които се записват
          на вашето устройство при посещение на уебсайт.
        </p>

        <h2 className="text-xl text-white font-medium">
          Как използваме бисквитките
        </h2>

        <ul className="list-disc pl-6">
          <li>за техническа работа на сайта</li>
          <li>за анализ на трафика</li>
          <li>за подобряване на услугите</li>
        </ul>

        <h2 className="text-xl text-white font-medium">
          Управление на бисквитките
        </h2>

        <p>
          Можете да изключите бисквитките от настройките на
          вашия браузър.
        </p>
      </div>
    </main>
  );
}