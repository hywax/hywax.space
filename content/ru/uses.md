---
title: 'Использую'
description: 'Всевозможные вещи, которые я использую на своем компьютере (и телефоне). Сервисы, которые я использую для повседневной жизни и веб-разработки, и т.д.'
apps:
  general:
    - name: 'Google Chrome'
      description: 'Браузер на каждый день'
      link: 'https://www.google.com/intl/ru_ru/chrome/'
    - name: 'Things'
      description: 'Удобный планировщик дня'
      link: 'https://culturedcode.com/things/'
      badges:
        - paid
        - macos
    - name: 'Obsidian'
      description: 'База знания'
      link: 'https://obsidian.md/'
      badges:
        - opensource
    - name: 'Spark'
      description: 'Email клиент с удобным интерфейсом'
      link: 'https://sparkmailapp.com/'
      badges:
        - freemium
        - macos
  development:
    - name: 'Web Storm'
      description: 'Умная IDE для JavaScript'
      link: 'https://www.jetbrains.com/ru-ru/webstorm/'
      badges:
        - paid
    - name: 'Oh My ZSH'
      description: 'Один из лучших терминалов'
      link: 'https://ohmyz.sh/'
      badges:
        - opensource
    - name: 'Figma'
      description: 'Дизайн, макеты, логотипы и иконки'
      link: 'https://www.figma.com/'
      badges:
        - freemium
    - name: 'Git Switcher'
      description: 'Быстрое переключение между git профилями'
      link: 'https://github.com/TheYkk/git-switcher'
      badges:
        - opensource
  utilities:
    - name: 'Raycast'
      description: 'Идеальное продолжение Spotlight'
      link: 'https://www.raycast.com/'
      badges:
        - freemium
        - macos
    - name: 'Fig'
      description: 'Командная строка нового поколения'
      link: 'https://fig.io/'
      badges:
        - opensource
        - macos
    - name: 'Stats'
      description: 'Мониторинг системы'
      link: 'https://github.com/exelban/stats'
      badges:
        - opensource
        - macos
  browserExtensions:
    - name: 'AdBlock'
      description: 'Блокировщик надоедливой рекламы'
      link: 'https://getadblock.com/ru/'
      badges:
        - freemium
    - name: 'JSONVue'
      description: 'Форматирование JSON'
      link: 'https://github.com/gildas-lormeau/JSONVue'
      badges:
        - opensource
    - name: 'EditThisCookie'
      description: 'Менеджер cookie'
      link: 'https://github.com/ETCExtensions/Edit-This-Cookie'
      badges:
        - opensource
services:
  general:
    - name: 'Я.Музыка'
      description: 'Музыкальная библиотека'
      link: 'https://music.yandex.ru/'
      badges:
        - paid
    - name: 'MyBook'
      description: 'Электронная библиотека'
      link: 'https://mybook.ru/'
      badges:
        - paid
  webDevelopment:
    - name: 'Github'
      description: 'Хостинг исходного кода проектов'
      link: 'https://github.com/'
      badges:
        - freemium
    - name: 'Reg ru'
      description: 'Хостинг/VPS/Домены'
      link: 'https://www.reg.ru/'
      badges:
        - paid
---

::h1{.title}
{{ $doc.title }}
::

::div{.subtitle.mb-16}
{{ $doc.description }}
::
