---
title: 'Uses'
description: 'All sorts of things I use on my computer (and phone). Services I use for everyday life and web development, etc.'
apps:
  general:
    - name: 'Google Chrome'
      description: 'Everyday Browser'
      link: 'https://www.google.com/intl/ru_ru/chrome/'
    - name: 'Things'
      description: 'Easy to use day planner'
      link: 'https://culturedcode.com/things/'
      badges:
        - paid
        - macos
    - name: 'Obsidian'
      description: 'Knowledge base'
      link: 'https://obsidian.md/'
      badges:
        - opensource
    - name: 'Spark'
      description: 'Email client with user-friendly interface'
      link: 'https://sparkmailapp.com/'
      badges:
        - freemium
        - macos
  development:
    - name: 'Web Storm'
      description: 'IDE for JavaScript'
      link: 'https://www.jetbrains.com/ru-ru/webstorm/'
      badges:
        - paid
    - name: 'Oh My ZSH'
      description: 'One of the best terminals'
      link: 'https://ohmyz.sh/'
      badges:
        - opensource
    - name: 'Figma'
      description: 'Design, layouts, logos and icons'
      link: 'https://www.figma.com/'
      badges:
        - freemium
    - name: 'Git Switcher'
      description: 'Quickly switch between git profiles'
      link: 'https://github.com/TheYkk/git-switcher'
      badges:
        - opensource
  utilities:
    - name: 'Raycast'
      description: 'Perfect sequel to Spotlight'
      link: 'https://www.raycast.com/'
      badges:
        - freemium
        - macos
    - name: 'Fig'
      description: 'Next-generation command line'
      link: 'https://fig.io/'
      badges:
        - opensource
        - macos
    - name: 'Stats'
      description: 'System monitoring'
      link: 'https://github.com/exelban/stats'
      badges:
        - opensource
        - macos
  browserExtensions:
    - name: 'AdBlock'
      description: 'Annoying ad blocker'
      link: 'https://getadblock.com/ru/'
      badges:
        - freemium
    - name: 'JSONVue'
      description: 'JSON Formatter'
      link: 'https://github.com/gildas-lormeau/JSONVue'
      badges:
        - opensource
    - name: 'EditThisCookie'
      description: 'Cookie Manager'
      link: 'https://github.com/ETCExtensions/Edit-This-Cookie'
      badges:
        - opensource
services:
  general:
    - name: 'Я.Музыка'
      description: 'Music Library'
      link: 'https://music.yandex.ru/'
      badges:
        - paid
    - name: 'MyBook'
      description: 'Book Library'
      link: 'https://mybook.ru/'
      badges:
        - paid
  webDevelopment:
    - name: 'Github'
      description: 'Hosting of project source code'
      link: 'https://github.com/'
      badges:
        - freemium
    - name: 'Reg ru'
      description: 'Hosting/Domains'
      link: 'https://www.reg.ru/'
      badges:
        - paid
    - name: 'Timeweb.cloud'
      description: 'VPS'
      link: 'https://timeweb.cloud/'
      badges:
        - paid
---

::h1{.title}
{{ $doc.title }}
::

::div{.subtitle.mb-16}
{{ $doc.description }}
::
