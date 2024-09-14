// plugins/i18n.js
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(() => {
  const i18n = createI18n({
    locale: "ru", // Язык по умолчанию
    fallbackLocale: "en", // Резервный язык
    messages: {
      en: {
        backToFigures: "Back to the figures",
        man: "Man",
        lady: "Lady",
        general: "General",
        loading: "Loading...",
      },
      ru: {
        backToFigures: "Назад к фигурам",
        man: "Мужчина",
        lady: "Дама",
        general: "Общее",
        loading: "Загрузка...",
      },
    },
  });

  return {
    provide: {
      i18n,
    },
  };
});
