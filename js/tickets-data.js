/* tickets-data.js — ВСЕ ТЕКСТЫ страницы «Тикеты» (tickets.html). RU и EN рядом: {ru:"…", en:"…"}.
   ui — тексты интерфейса, nav — кнопки-ссылки на разделы, sections — разделы, settings — справочник настроек
   (названия и подсказки совпадают с самим ботом), tips — дополнения к настройкам, defs — значения по умолчанию.
   В текстах можно использовать HTML: <code>, <b>, <a href="#раздел">. Файл собран по коду бота; при изменении
   настроек бота поправь здесь соответствующую запись. */
const TD = {
 "ui": {
  "ru": {
   "sub": "Приватные каналы поддержки: быстрый старт, все настройки, очередь, команды и ответы на частые вопросы.",
   "search": "Найти настройку, команду или вопрос…",
   "req": "обязательно",
   "admin": "админам",
   "def": "По умолчанию",
   "how": "Как вводится",
   "key": "Ключ",
   "lim": "Ограничение",
   "opts": "Варианты",
   "none": "нет",
   "param": "Параметр",
   "desc": "Что указать",
   "copied": "скопировано",
   "empty": "Ничего не найдено. Попробуй другое слово.",
   "cond": "появляется при включённом «{x}»",
   "chars": "до {n} символов",
   "foot": "<a href=\"https://discord.gg/5FC7pRP5dN\">Сервер поддержки</a> · <a href=\"https://github.com/Privett/Matrix\">GitHub</a>",
   "where": "Где",
   "perm": "Право",
   "why": "Зачем",
   "on": "включено",
   "off": "выключено",
   "who": "Кто",
   "before": "Пока тикет никто не взял",
   "after": "После «Взять»",
   "var": "Переменная",
   "gives": "Что подставится"
  },
  "en": {
   "sub": "Private support channels: quick start, every setting, the claim queue, commands and answers to common questions.",
   "search": "Find a setting, command or question…",
   "req": "required",
   "admin": "admins only",
   "def": "Default",
   "how": "Input",
   "key": "Key",
   "lim": "Limit",
   "opts": "Options",
   "none": "none",
   "param": "Option",
   "desc": "What to enter",
   "copied": "copied",
   "empty": "Nothing found. Try another word.",
   "cond": "appears when “{x}” is on",
   "chars": "up to {n} characters",
   "foot": "<a href=\"https://discord.gg/5FC7pRP5dN\">Support server</a> · <a href=\"https://github.com/Privett/Matrix\">GitHub</a>",
   "where": "Where",
   "perm": "Permission",
   "why": "Why",
   "on": "enabled",
   "off": "disabled",
   "who": "Who",
   "before": "While nobody has claimed it",
   "after": "After “Claim”",
   "var": "Variable",
   "gives": "Replaced with"
  }
 },
 "nav": [
  [
   "start",
   {
    "ru": "Быстрый старт",
    "en": "Quick start"
   }
  ],
  [
   "how",
   {
    "ru": "Как это работает",
    "en": "How it works"
   }
  ],
  [
   "settings",
   {
    "ru": "Настройки",
    "en": "Settings"
   }
  ],
  [
   "queue",
   {
    "ru": "Очередь",
    "en": "Queue"
   }
  ],
  [
   "commands",
   {
    "ru": "Команды",
    "en": "Commands"
   }
  ],
  [
   "types",
   {
    "ru": "Типы тикетов",
    "en": "Ticket types"
   }
  ],
  [
   "transcripts",
   {
    "ru": "Транскрипты",
    "en": "Transcripts"
   }
  ],
  [
   "vars",
   {
    "ru": "Переменные",
    "en": "Variables"
   }
  ],
  [
   "perms",
   {
    "ru": "Права бота",
    "en": "Bot permissions"
   }
  ],
  [
   "faq",
   {
    "ru": "Вопросы",
    "en": "FAQ"
   }
  ]
 ],
 "sections": {
  "start": {
   "t": {
    "ru": "Быстрый старт",
    "en": "Quick start"
   },
   "d": {
    "ru": "От приглашения бота до первого тикета за пять минут.",
    "en": "From inviting the bot to your first ticket in five minutes."
   },
   "steps": [
    {
     "t": {
      "ru": "Выдай боту права",
      "en": "Give the bot permissions"
     },
     "d": {
      "ru": "В категории тикетов боту нужны: просмотр канала, управление каналами, отправка сообщений, чтение истории, встраивание ссылок и прикрепление файлов. Для режима очереди добавь «Управление правами». Полный список — в разделе <a href=\"#perms\">«Права бота»</a>.",
      "en": "In the ticket category the bot needs: view channel, manage channels, send messages, read history, embed links and attach files. For the queue mode add “Manage Permissions”. The full list is in <a href=\"#perms\">Bot permissions</a>."
     }
    },
    {
     "t": {
      "ru": "Открой настройки",
      "en": "Open the settings"
     },
     "d": {
      "ru": "Введи <code>/ticket settings</code> (нужны права администратора). На вкладке «Основное» выбери категорию для тикетов, роли поддержки и лог-канал. Пока рядом с ними стоит ❗, сохранить нельзя.",
      "en": "Run <code>/ticket settings</code> (administrator rights required). On the “General” tab pick the ticket category, the support roles and the log channel. While ❗ is next to them, saving is blocked."
     }
    },
    {
     "t": {
      "ru": "Настрой вид и поведение",
      "en": "Tune the look and behaviour"
     },
     "d": {
      "ru": "По желанию: оформление панели, лимит тикетов на человека, что делать при закрытии, транскрипты. Нажми «Подсказки» (❓) — под каждой настройкой появится объяснение. Всё можно изменить позже.",
      "en": "Optional: panel look, tickets per member, what happens on close, transcripts. Press “Hints” (❓) to see an explanation under every setting. Everything can be changed later."
     }
    },
    {
     "t": {
      "ru": "Сохрани",
      "en": "Save"
     },
     "d": {
      "ru": "Нажми «Сохранить». Если боту не хватает прав в категории или лог-канале, он сразу покажет, каких именно.",
      "en": "Press “Save”. If the bot is missing permissions in the category or the log channel, it tells you exactly which ones."
     }
    },
    {
     "t": {
      "ru": "Отправь панель",
      "en": "Post the panel"
     },
     "d": {
      "ru": "В канале, где люди будут создавать тикеты, введи <code>/ticket panel</code>. Появится сообщение с кнопкой. Позже изменения оформления в настройках обновят это сообщение сами.",
      "en": "In the channel where people will open tickets run <code>/ticket panel</code>. A message with the button appears. Later, look changes in the settings update that message automatically."
     }
    },
    {
     "t": {
      "ru": "Проверь",
      "en": "Test it"
     },
     "d": {
      "ru": "Нажми кнопку сам: появится приватный канал <code>ticket-0001</code> с приветствием и кнопкой «Закрыть».",
      "en": "Press the button yourself: a private channel <code>ticket-0001</code> appears with a welcome message and a Close button."
     }
    }
   ]
  },
  "how": {
   "t": {
    "ru": "Как это работает",
    "en": "How it works"
   },
   "d": {
    "ru": "Путь одного тикета от кнопки до архива.",
    "en": "The life of one ticket, from the button to the archive."
   },
   "flow": [
    {
     "t": {
      "ru": "Кнопка",
      "en": "Button"
     },
     "d": {
      "ru": "Человек нажимает кнопку на панели. Если заданы <a href=\"#types\">типы тикетов</a>, сначала выбирает тему.",
      "en": "A member presses the button on the panel. If <a href=\"#types\">ticket types</a> are set, they pick a topic first."
     }
    },
    {
     "t": {
      "ru": "Канал",
      "en": "Channel"
     },
     "d": {
      "ru": "Бот создаёт приватный канал <code>ticket-0001</code> в категории тикетов. Его видят автор, бот и роли поддержки (в <a href=\"#queue\">режиме очереди</a> роли поддержки его не видят).",
      "en": "The bot creates a private channel <code>ticket-0001</code> in the ticket category. The author, the bot and the support roles can see it (in the <a href=\"#queue\">queue mode</a> support roles cannot)."
     }
    },
    {
     "t": {
      "ru": "Общение",
      "en": "Conversation"
     },
     "d": {
      "ru": "В канале приветствие и кнопка «Закрыть». Поддержка отвечает, при необходимости добавляет людей командой <code>/ticket add</code>.",
      "en": "The channel starts with a welcome message and a Close button. Support replies and can add people with <code>/ticket add</code>."
     }
    },
    {
     "t": {
      "ru": "Закрытие",
      "en": "Closing"
     },
     "d": {
      "ru": "Закрыть может автор, поддержка, администратор или тот, кто взял тикет. Если включено подтверждение, бот переспрашивает.",
      "en": "The author, support, an administrator or whoever claimed the ticket can close it. With confirmation on, the bot asks again."
     }
    },
    {
     "t": {
      "ru": "Транскрипт",
      "en": "Transcript"
     },
     "d": {
      "ru": "Переписка сохраняется в файл (HTML и/или TXT) и уходит в лог-канал и/или автору в личные сообщения.",
      "en": "The conversation is saved to a file (HTML and/or TXT) and sent to the log channel and/or to the author in DMs."
     }
    },
    {
     "t": {
      "ru": "Итог",
      "en": "Result"
     },
     "d": {
      "ru": "Канал удаляется или остаётся в архиве как <code>closed-0001</code>, и тикет можно открыть снова.",
      "en": "The channel is deleted or stays in the archive as <code>closed-0001</code>, and the ticket can be reopened."
     }
    }
   ],
   "notes": [
    {
     "ru": "Лимит и чёрный список проверяются в момент нажатия кнопки: человек сразу получает понятный отказ.",
     "en": "The limit and the blacklist are checked the moment the button is pressed: the member gets a clear refusal right away."
    }
   ]
  },
  "settings": {
   "t": {
    "ru": "Справочник настроек",
    "en": "Settings reference"
   },
   "d": {
    "ru": "Все настройки собраны в одном окне <code>/ticket settings</code>, по вкладкам. Названия и описания ниже совпадают с подсказками (❓) внутри бота.",
    "en": "All settings live in one window, <code>/ticket settings</code>, split into tabs. The names and descriptions below match the hints (❓) inside the bot."
   }
  },
  "queue": {
   "t": {
    "ru": "Режим очереди (взятие тикетов)",
    "en": "Queue mode (claiming tickets)"
   },
   "d": {
    "ru": "Для больших команд: новый тикет скрыт от поддержки, пока один из сотрудников не возьмёт его. После этого он открывается только взявшему.",
    "en": "For bigger teams: a new ticket is hidden from support until one staff member claims it. After that it opens for that person only."
   },
   "steps": [
    {
     "t": {
      "ru": "Включи режим",
      "en": "Turn it on"
     },
     "d": {
      "ru": "Вкладка «Тикеты», настройка «Очередь тикетов (взятие)». Сразу появятся «Кто может брать: роли» и «Кто может брать: пользователи».",
      "en": "“Tickets” tab, the “Ticket queue (claiming)” setting. “Who can claim: roles” and “Who can claim: users” appear right away."
     }
    },
    {
     "t": {
      "ru": "Выбери, кто может брать",
      "en": "Choose who can claim"
     },
     "d": {
      "ru": "Роли и/или отдельные пользователи. Если не выбрано ничего, брать могут роли поддержки. Администраторы могут всегда.",
      "en": "Roles and/or individual users. If nothing is chosen, the support roles can claim. Administrators always can."
     }
    },
    {
     "t": {
      "ru": "Проверь права бота",
      "en": "Check bot permissions"
     },
     "d": {
      "ru": "Чтобы открыть канал взявшему, боту нужно «Управление правами» в категории тикетов. После сохранения бот сам предупредит, если права нет.",
      "en": "To open the channel for the person who claims, the bot needs “Manage Permissions” in the ticket category. After saving, the bot warns you if it is missing."
     }
    },
    {
     "t": {
      "ru": "Сохрани",
      "en": "Save"
     },
     "d": {
      "ru": "Режим действует на <b>новые</b> тикеты. Уже созданные остаются видимыми поддержке, как раньше.",
      "en": "The mode applies to <b>new</b> tickets. Existing ones stay visible to support as before."
     }
    }
   ],
   "who": {
    "cols": [
     "who",
     "before",
     "after"
    ],
    "rows": [
     [
      {
       "ru": "Автор тикета",
       "en": "Ticket author"
      },
      {
       "ru": "видит и пишет",
       "en": "sees and writes"
      },
      {
       "ru": "видит и пишет",
       "en": "sees and writes"
      }
     ],
     [
      {
       "ru": "Взявший сотрудник",
       "en": "Staff member who claimed"
      },
      {
       "ru": "не видит",
       "en": "cannot see"
      },
      {
       "ru": "видит и пишет",
       "en": "sees and writes"
      }
     ],
     [
      {
       "ru": "Остальные сотрудники",
       "en": "Other staff"
      },
      {
       "ru": "не видят",
       "en": "cannot see"
      },
      {
       "ru": "не видят",
       "en": "cannot see"
      }
     ],
     [
      {
       "ru": "Роли «только чтение»",
       "en": "Read-only roles"
      },
      {
       "ru": "видят, не пишут",
       "en": "see, cannot write"
      },
      {
       "ru": "видят, не пишут",
       "en": "see, cannot write"
      }
     ],
     [
      {
       "ru": "Администраторы",
       "en": "Administrators"
      },
      {
       "ru": "видят",
       "en": "see"
      },
      {
       "ru": "видят",
       "en": "see"
      }
     ]
    ]
   },
   "blocks": [
    {
     "t": {
      "ru": "Панель <code>/ticket manage</code>",
      "en": "The <code>/ticket manage</code> panel"
     },
     "d": {
      "ru": "Личное окно (видно только вам, работает 10 минут). Три вкладки:",
      "en": "A private window (only you see it, it works for 10 minutes). Three tabs:"
     },
     "list": [
      {
       "ru": "<b>Очередь</b>: свободные тикеты, старые сверху. Выбери тикет и нажми «Взять».",
       "en": "<b>Queue</b>: free tickets, oldest first. Pick one and press “Claim”."
      },
      {
       "ru": "<b>Мои</b>: твои открытые тикеты. «Закрыть» (при включённом подтверждении нужно нажать дважды) или «Отпустить».",
       "en": "<b>Mine</b>: your open tickets. “Close” (press twice when confirmation is on) or “Release”."
      },
      {
       "ru": "<b>Закрытые</b>: закрытые тикеты, у которых канал оставлен. «Открыть снова». Сотрудник видит свои, администратор все.",
       "en": "<b>Closed</b>: closed tickets whose channel was kept. “Reopen”. Staff see their own, administrators see all."
      }
     ]
    },
    {
     "t": {
      "ru": "Что происходит при «Взять»",
      "en": "What “Claim” does"
     },
     "list": [
      {
       "ru": "Бот открывает канал взявшему и пишет в тикете, кто принял тикет (без пинга).",
       "en": "The bot opens the channel for you and posts in the ticket who accepted it (no ping)."
      },
      {
       "ru": "Если двое нажали одновременно, тикет достаётся одному, второй увидит, кто успел.",
       "en": "If two people press at once, one wins and the other sees who was first."
      },
      {
       "ru": "Автор не может взять собственный тикет.",
       "en": "The author cannot claim their own ticket."
      },
      {
       "ru": "«Отпустить» возвращает тикет в очередь и снова скрывает его от вас.",
       "en": "“Release” puts the ticket back into the queue and hides it from you again."
      }
     ]
    },
    {
     "t": {
      "ru": "Как узнать о новом тикете",
      "en": "How to learn about a new ticket"
     },
     "d": {
      "ru": "Сотрудники не видят скрытые тикеты, поэтому бот пишет в лог-канал: «Тикет ждёт сотрудника». Дальше — <code>/ticket manage</code>.",
      "en": "Staff cannot see hidden tickets, so the bot posts “Ticket is waiting for staff” to the log channel. Then use <code>/ticket manage</code>."
     }
    }
   ],
   "notes": [
    {
     "ru": "Открыть тикет снова можно только если при закрытии канал остаётся (<a href=\"#s-close_action\">«Закрыть и оставить»</a>).",
     "en": "A ticket can be reopened only if the channel is kept on close (<a href=\"#s-close_action\">“Close and keep”</a>)."
    },
    {
     "ru": "Если выключить режим, скрытые тикеты остаются в очереди и доступны через <code>/ticket manage</code>.",
     "en": "If you turn the mode off, hidden tickets stay in the queue and remain available via <code>/ticket manage</code>."
    }
   ]
  },
  "commands": {
   "t": {
    "ru": "Команды",
    "en": "Commands"
   },
   "d": {
    "ru": "Нажми на команду, чтобы скопировать её, на строку — чтобы увидеть детали.",
    "en": "Click a command to copy it, click the row for details."
   },
   "list": [
    {
     "c": "/ticket settings",
     "a": 1,
     "b": {
      "ru": "Открыть окно настроек тикетов",
      "en": "Open the ticket settings window"
     },
     "o": [],
     "note": {
      "ru": "Окно видно только вам и работает 10 минут. Вкладки: Основное, Тикеты, Панель, Закрытие, Транскрипт. Подробности — в <a href=\"#settings\">справочнике настроек</a>.",
      "en": "The window is visible only to you and works for 10 minutes. Tabs: General, Tickets, Panel, Closing, Transcript. Details are in the <a href=\"#settings\">settings reference</a>."
     }
    },
    {
     "c": "/ticket panel",
     "a": 1,
     "b": {
      "ru": "Отправить панель с кнопкой «Создать тикет» в этот канал",
      "en": "Post the panel with the Create ticket button in this channel"
     },
     "o": [],
     "note": {
      "ru": "Сначала заполните вкладку «Основное» в настройках. Бот запоминает панель, и изменения оформления потом обновляют её сами.",
      "en": "Fill in the “General” tab of the settings first. The bot remembers the panel, so later look changes update it automatically."
     }
    },
    {
     "c": "/ticket manage",
     "b": {
      "ru": "Очередь тикетов, мои тикеты и закрытые",
      "en": "Ticket queue, my tickets and closed ones"
     },
     "o": [],
     "note": {
      "ru": "Доступна тем, кто может брать тикеты. Подробнее — в разделе <a href=\"#queue\">«Очередь»</a>.",
      "en": "Available to those who can claim tickets. See <a href=\"#queue\">Queue</a> for details."
     }
    },
    {
     "c": "/ticket add",
     "b": {
      "ru": "Добавить участника в тикет",
      "en": "Add a member to the ticket"
     },
     "o": [
      [
       "user",
       {
        "ru": "Участник, которого нужно добавить",
        "en": "The member to add"
       }
      ]
     ],
     "note": {
      "ru": "Работает внутри тикета. Доступна сотрудникам и тому, кто взял тикет.",
      "en": "Works inside a ticket. Available to staff and whoever claimed the ticket."
     }
    },
    {
     "c": "/ticket remove",
     "b": {
      "ru": "Убрать участника из тикета",
      "en": "Remove a member from the ticket"
     },
     "o": [
      [
       "user",
       {
        "ru": "Участник, которого нужно убрать",
        "en": "The member to remove"
       }
      ]
     ],
     "note": {
      "ru": "Нельзя убрать автора тикета, взявшего его сотрудника и бота.",
      "en": "You cannot remove the ticket author, the staff member who claimed it, or the bot."
     }
    },
    {
     "c": "/ticket rename",
     "b": {
      "ru": "Переименовать тикет",
      "en": "Rename the ticket"
     },
     "o": [
      [
       "name",
       {
        "ru": "Новое название. Бот приведёт его к виду ticket-0041-ваш-текст",
        "en": "The new name. The bot turns it into ticket-0041-your-text"
       }
      ]
     ],
     "note": {
      "ru": "Номер тикета сохраняется. Discord ограничивает частоту переименований (примерно два раза за десять минут).",
      "en": "The ticket number is kept. Discord limits renames (about two per ten minutes)."
     }
    },
    {
     "c": "/ticket help",
     "b": {
      "ru": "Краткая справка и ссылка на эту страницу",
      "en": "Short guide with a link to this page"
     },
     "o": [],
     "note": {
      "ru": "Доступна всем. Кнопки «Справка» в окне настроек и в панели <code>/ticket manage</code> ведут сюда же.",
      "en": "Available to everyone. The Docs buttons in the settings window and in <code>/ticket manage</code> lead here too."
     }
    }
   ]
  },
  "types": {
   "t": {
    "ru": "Типы тикетов",
    "en": "Ticket types"
   },
   "d": {
    "ru": "Темы обращения, из которых человек выбирает при создании тикета: например «Вопрос», «Жалоба», «Баг».",
    "en": "Topics a member chooses from when opening a ticket, for example “Question”, “Report”, “Bug”."
   },
   "list": [
    {
     "ru": "Задаются на вкладке «Тикеты» списком через запятую: <code>Вопрос, Жалоба, Баг</code>. Максимум 25 тем.",
     "en": "Set on the “Tickets” tab as a comma-separated list: <code>Question, Report, Bug</code>. Up to 25 topics."
    },
    {
     "ru": "Пока список пуст, бот ничего не спрашивает и тикет создаётся сразу.",
     "en": "While the list is empty the bot asks nothing and the ticket is created right away."
    },
    {
     "ru": "Если список задан, после нажатия кнопки появляется меню с темами, а тикет создаётся после выбора.",
     "en": "When the list is set, pressing the button shows a menu of topics and the ticket is created after the choice."
    },
    {
     "ru": "Выбранная тема видна в приветствии тикета, в очереди и списках <code>/ticket manage</code>, в уведомлении о новом тикете и в записи о закрытии в лог-канале.",
     "en": "The chosen topic is shown in the ticket welcome message, in the queue and lists of <code>/ticket manage</code>, in the new-ticket notification and in the close entry in the log channel."
    }
   ]
  },
  "transcripts": {
   "t": {
    "ru": "Транскрипты",
    "en": "Transcripts"
   },
   "d": {
    "ru": "Копия переписки, которую бот собирает при закрытии тикета.",
    "en": "A copy of the conversation the bot builds when a ticket is closed."
   },
   "blocks": [
    {
     "t": {
      "ru": "Форматы",
      "en": "Formats"
     },
     "list": [
      {
       "ru": "<b>HTML</b> выглядит как чат Discord и открывается в браузере.",
       "en": "<b>HTML</b> looks like a Discord chat and opens in a browser."
      },
      {
       "ru": "<b>TXT</b> простой текст, удобно читать сразу.",
       "en": "<b>TXT</b> is plain text, easy to read right away."
      },
      {
       "ru": "<b>HTML + TXT</b> оба файла.",
       "en": "<b>HTML + TXT</b> both files."
      }
     ]
    },
    {
     "t": {
      "ru": "Куда уходит",
      "en": "Where it goes"
     },
     "list": [
      {
       "ru": "В лог-канал вместе с записью о закрытии: кто автор, кто закрыл, кто взял, какая тема.",
       "en": "To the log channel with the close entry: author, who closed it, who claimed it, the topic."
      },
      {
       "ru": "Автору в личные сообщения, если это включено и у него открыты ЛС.",
       "en": "To the author in DMs, if enabled and the author's DMs are open."
      }
     ]
    },
    {
     "t": {
      "ru": "Что внутри HTML",
      "en": "What is inside the HTML"
     },
     "list": [
      {
       "ru": "Аватарки, цвета ролей, метка BOT, упоминания, markdown, блоки кода с подсветкой.",
       "en": "Avatars, role colours, the BOT tag, mentions, markdown, highlighted code blocks."
      },
      {
       "ru": "Эмбеды, вложения, сетка картинок, спойлеры, GIF (Tenor и Giphy), видео и аудио.",
       "en": "Embeds, attachments, image grids, spoilers, GIFs (Tenor and Giphy), video and audio."
      },
      {
       "ru": "Эмодзи, реакции, стикеры, кнопки и меню выбора, ответы и пересланные сообщения.",
       "en": "Emoji, reactions, stickers, buttons and select menus, replies and forwarded messages."
      },
      {
       "ru": "Разделители дней, список участников, поиск по сообщениям и переключатель светлой и тёмной темы.",
       "en": "Day separators, a participant list, message search and a light/dark theme switch."
      }
     ]
    }
   ],
   "notes": [
    {
     "ru": "Картинки и аватарки по умолчанию встраиваются в файл, поэтому не пропадут: ссылки Discord со временем перестают работать.",
     "en": "Images and avatars are embedded into the file by default so they do not disappear: Discord links stop working over time."
    },
    {
     "ru": "Размер файла ограничен лимитом загрузки сервера (обычно около 10 МБ). Если тикет очень длинный и HTML не отправился, выберите формат TXT.",
     "en": "The file size is limited by the server's upload limit (usually about 10 MB). If a very long ticket does not send as HTML, choose TXT."
    },
    {
     "ru": "Время в транскрипте показывается в часовом поясе бота.",
     "en": "Times in the transcript are shown in the bot's time zone."
    }
   ]
  },
  "vars": {
   "t": {
    "ru": "Переменные в сообщении",
    "en": "Message variables"
   },
   "d": {
    "ru": "Их можно вставлять в настройку «Сообщение в тикете». Неизвестные переменные остаются обычным текстом.",
    "en": "You can put them into the “Ticket message” setting. Unknown variables stay as plain text."
   },
   "rows": [
    [
     "{{user_mention}}",
     {
      "ru": "Упоминание автора, например @Вася",
      "en": "A mention of the author, for example @Alex"
     }
    ],
    [
     "{{user_name}}",
     {
      "ru": "Имя автора на сервере",
      "en": "The author's server name"
     }
    ],
    [
     "{{user_id}}",
     {
      "ru": "ID автора",
      "en": "The author's ID"
     }
    ],
    [
     "{{server_name}}",
     {
      "ru": "Название сервера",
      "en": "The server name"
     }
    ],
    [
     "{{ticket_number}}",
     {
      "ru": "Номер тикета из четырёх цифр, например 0042",
      "en": "The four-digit ticket number, for example 0042"
     }
    ]
   ],
   "example": {
    "in": {
     "ru": "Привет, {{user_mention}}! Это тикет №{{ticket_number}}. Опиши проблему.",
     "en": "Hi {{user_mention}}! This is ticket #{{ticket_number}}. Describe the problem."
    },
    "out": {
     "ru": "Привет, @Вася! Это тикет №0042. Опиши проблему.",
     "en": "Hi @Alex! This is ticket #0042. Describe the problem."
    }
   }
  },
  "perms": {
   "t": {
    "ru": "Права бота",
    "en": "Bot permissions"
   },
   "d": {
    "ru": "Что нужно боту и зачем. После сохранения настроек он сам проверяет эти права и пишет, чего не хватает.",
    "en": "What the bot needs and why. After you save the settings it checks these permissions and tells you what is missing."
   },
   "cols": [
    "where",
    "perm",
    "why"
   ],
   "rows": [
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Просмотр канала",
      "en": "View Channel"
     },
     {
      "ru": "Видеть созданные каналы",
      "en": "See the channels it creates"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Управление каналами",
      "en": "Manage Channels"
     },
     {
      "ru": "Создавать, переименовывать, переносить и удалять каналы",
      "en": "Create, rename, move and delete channels"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Отправка сообщений",
      "en": "Send Messages"
     },
     {
      "ru": "Писать приветствие и сообщения о действиях",
      "en": "Post the welcome message and action notices"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Чтение истории сообщений",
      "en": "Read Message History"
     },
     {
      "ru": "Собирать транскрипт",
      "en": "Build the transcript"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Встраивание ссылок",
      "en": "Embed Links"
     },
     {
      "ru": "Показывать приветствие в рамке",
      "en": "Show the welcome message as an embed"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Прикрепление файлов",
      "en": "Attach Files"
     },
     {
      "ru": "Пересылать вложения и файл транскрипта",
      "en": "Forward attachments and the transcript file"
     }
    ],
    [
     {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     {
      "ru": "Управление правами",
      "en": "Manage Permissions"
     },
     {
      "ru": "Открывать канал взявшему (режим очереди) и добавлять людей командой /ticket add",
      "en": "Open the channel for whoever claims (queue mode) and add people with /ticket add"
     }
    ],
    [
     {
      "ru": "Лог-канал",
      "en": "Log channel"
     },
     {
      "ru": "Просмотр канала",
      "en": "View Channel"
     },
     {
      "ru": "Видеть канал",
      "en": "See the channel"
     }
    ],
    [
     {
      "ru": "Лог-канал",
      "en": "Log channel"
     },
     {
      "ru": "Отправка сообщений",
      "en": "Send Messages"
     },
     {
      "ru": "Писать записи о закрытии и уведомления",
      "en": "Post close entries and notices"
     }
    ],
    [
     {
      "ru": "Лог-канал",
      "en": "Log channel"
     },
     {
      "ru": "Встраивание ссылок",
      "en": "Embed Links"
     },
     {
      "ru": "Записи о закрытии выглядят как рамки",
      "en": "Close entries are shown as embeds"
     }
    ],
    [
     {
      "ru": "Лог-канал",
      "en": "Log channel"
     },
     {
      "ru": "Прикрепление файлов",
      "en": "Attach Files"
     },
     {
      "ru": "Прикладывать транскрипт",
      "en": "Attach the transcript"
     }
    ]
   ]
  },
  "faq": {
   "t": {
    "ru": "Частые вопросы",
    "en": "FAQ"
   },
   "d": {
    "ru": "",
    "en": ""
   },
   "list": [
    {
     "q": {
      "ru": "Поддержка не видит новые тикеты",
      "en": "Support cannot see new tickets"
     },
     "a": {
      "ru": "Скорее всего, включён <a href=\"#queue\">режим очереди</a>: тикет скрыт, пока его не возьмут. Откройте <code>/ticket manage</code>, вкладка «Очередь». Если очередь не нужна, выключите «Очередь тикетов (взятие)» на вкладке «Тикеты» (для новых тикетов).",
      "en": "Most likely the <a href=\"#queue\">queue mode</a> is on: the ticket is hidden until someone claims it. Open <code>/ticket manage</code>, “Queue” tab. If you do not need the queue, turn off “Ticket queue (claiming)” on the “Tickets” tab (for new tickets)."
     }
    },
    {
     "q": {
      "ru": "Кнопка пишет, что тикеты не настроены",
      "en": "The button says tickets are not configured"
     },
     "a": {
      "ru": "Откройте <code>/ticket settings</code>, заполните вкладку «Основное» (категория, роли поддержки, лог-канал) и нажмите «Сохранить».",
      "en": "Open <code>/ticket settings</code>, fill in the “General” tab (category, support roles, log channel) and press “Save”."
     }
    },
    {
     "q": {
      "ru": "Канал создался, а приветствия нет",
      "en": "The channel was created but there is no welcome message"
     },
     "a": {
      "ru": "Боту не хватает права писать или встраивать ссылки в категории тикетов. Нажмите «Сохранить» в настройках: бот покажет, какого права нет. Выдайте его на категорию, а не на отдельный канал.",
      "en": "The bot cannot send messages or embed links in the ticket category. Press “Save” in the settings: the bot shows which permission is missing. Grant it on the category, not on a single channel."
     }
    },
    {
     "q": {
      "ru": "Тикет закрылся, но остался в старой категории",
      "en": "The ticket closed but stayed in the old category"
     },
     "a": {
      "ru": "В категории не больше 50 каналов. Если категория закрытых переполнена, бот всё равно закрывает тикет, но оставляет его на месте. Почистите категорию или выберите другую в настройке «Категория закрытых».",
      "en": "A category holds at most 50 channels. If the closed category is full, the bot still closes the ticket but leaves it where it is. Clean the category or choose another one in “Closed category”."
     }
    },
    {
     "q": {
      "ru": "Нет кнопки «Открыть снова» или тикета во вкладке «Закрытые»",
      "en": "No Reopen button or the ticket is missing from the Closed tab"
     },
     "a": {
      "ru": "Тикет можно открыть снова только если при закрытии канал остался: в настройке «Действие при закрытии» должно быть «Закрыть и оставить». Удалённый канал не вернуть. Сотрудник видит закрытые тикеты, которые брал сам, администратор — все.",
      "en": "A ticket can be reopened only if the channel was kept: “Action on close” must be “Close and keep”. A deleted channel cannot be brought back. Staff see closed tickets they claimed, administrators see all."
     }
    },
    {
     "q": {
      "ru": "Транскрипт не пришёл",
      "en": "The transcript did not arrive"
     },
     "a": {
      "ru": "Проверьте: включена ли настройка «Создавать транскрипт», есть ли у бота право прикреплять файлы в лог-канале, не слишком ли большой файл (тогда выберите TXT) и открыты ли личные сообщения у автора, если выбрана отправка в ЛС.",
      "en": "Check that “Create transcript” is on, that the bot can attach files in the log channel, that the file is not too big (then choose TXT) and that the author's DMs are open if DM delivery is chosen."
     }
    },
    {
     "q": {
      "ru": "Картинки в старом транскрипте пропали",
      "en": "Images in an old transcript disappeared"
     },
     "a": {
      "ru": "Ссылки Discord на вложения со временем перестают работать. Бот встраивает картинки и аватарки в HTML при создании, поэтому новые транскрипты это переживают. Старые файлы, созданные без встраивания, восстановить нельзя.",
      "en": "Discord attachment links stop working over time. The bot embeds images and avatars into the HTML when it is created, so new transcripts survive. Old files built without embedding cannot be restored."
     }
    },
    {
     "q": {
      "ru": "Я изменил оформление, а панель прежняя",
      "en": "I changed the look but the panel is the same"
     },
     "a": {
      "ru": "Панель обновляется при сохранении настроек, если её отправили командой <code>/ticket panel</code> и сообщение не удалено. Если сообщение удалили, отправьте панель заново.",
      "en": "The panel updates when you save the settings, if it was posted with <code>/ticket panel</code> and the message still exists. If the message was deleted, post the panel again."
     }
    },
    {
     "q": {
      "ru": "Как убрать лимит тикетов",
      "en": "How to remove the ticket limit"
     },
     "a": {
      "ru": "В настройке «Лимит тикетов на человека» выберите «Без лимита». Считаются только открытые тикеты человека на всём сервере.",
      "en": "In “Tickets per user” choose “No limit”. Only the member's open tickets across the whole server are counted."
     }
    },
    {
     "q": {
      "ru": "Команды /ticket settings и /ticket panel видны не всем",
      "en": "/ticket settings and /ticket panel are not visible to everyone"
     },
     "a": {
      "ru": "Это сделано намеренно: они доступны администраторам. Остальные команды видят все, но работают они только для сотрудников. Администратор сервера может изменить доступ в «Настройки сервера → Интеграции».",
      "en": "This is intentional: they are for administrators. Everyone sees the other commands, but they only work for staff. A server administrator can change access in “Server Settings → Integrations”."
     }
    },
    {
     "q": {
      "ru": "На каком языке пишет бот",
      "en": "Which language does the bot use"
     },
     "a": {
      "ru": "Сообщения бота выбираются по языку Discord пользователя (русский или английский). Язык окна настроек переключается кнопкой 🌐 внутри него.",
      "en": "The bot's messages follow the user's Discord language (Russian or English). The settings window language is switched with the 🌐 button inside it."
     }
    }
   ]
  }
 },
 "settings": [
  {
   "id": "main",
   "name": {
    "ru": "Основное",
    "en": "General"
   },
   "items": [
    {
     "key": "category_id",
     "kind": "channel",
     "kindLabel": {
      "ru": "выбор канала",
      "en": "channel picker"
     },
     "req": true,
     "cond": null,
     "name": {
      "ru": "Категория тикетов",
      "en": "Ticket category"
     },
     "desc": {
      "ru": "Категория, внутри которой бот будет создавать каналы тикетов.",
      "en": "Category where the bot creates ticket channels."
     }
    },
    {
     "key": "support_role_ids",
     "kind": "roles",
     "kindLabel": {
      "ru": "выбор ролей (несколько)",
      "en": "role picker (multiple)"
     },
     "req": true,
     "cond": null,
     "name": {
      "ru": "Роли поддержки",
      "en": "Support roles"
     },
     "desc": {
      "ru": "Можно выбрать несколько ролей. Они видят все тикеты, пишут в них и закрывают их.",
      "en": "You can pick several roles. They see all tickets, write in them and close them."
     }
    },
    {
     "key": "log_channel_id",
     "kind": "channel",
     "kindLabel": {
      "ru": "выбор канала",
      "en": "channel picker"
     },
     "req": true,
     "cond": null,
     "name": {
      "ru": "Лог-канал",
      "en": "Log channel"
     },
     "desc": {
      "ru": "Сюда бот отправляет транскрипты закрытых тикетов и логи действий.",
      "en": "The bot sends transcripts of closed tickets and action logs here."
     }
    }
   ]
  },
  {
   "id": "tickets",
   "name": {
    "ru": "Тикеты",
    "en": "Tickets"
   },
   "items": [
    {
     "key": "max_tickets_per_user",
     "kind": "limit",
     "kindLabel": {
      "ru": "выбор числа",
      "en": "number picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Лимит тикетов на человека",
      "en": "Tickets per user"
     },
     "desc": {
      "ru": "Сколько тикетов один человек может держать открытыми одновременно. «Без лимита» отключает ограничение.",
      "en": "How many tickets one person can have open at once. “No limit” disables the restriction."
     },
     "opts": [
      {
       "v": "0",
       "ru": "Без лимита",
       "en": "No limit"
      },
      {
       "v": "1",
       "ru": "1",
       "en": "1"
      },
      {
       "v": "2",
       "ru": "2",
       "en": "2"
      },
      {
       "v": "3",
       "ru": "3",
       "en": "3"
      },
      {
       "v": "5",
       "ru": "5",
       "en": "5"
      },
      {
       "v": "10",
       "ru": "10",
       "en": "10"
      }
     ],
     "def": 1
    },
    {
     "key": "ticket_types",
     "kind": "types",
     "kindLabel": {
      "ru": "список через запятую (окно ввода)",
      "en": "comma-separated list (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Типы тикетов",
      "en": "Ticket types"
     },
     "desc": {
      "ru": "Темы, которые человек выбирает при создании тикета (Вопрос, Жалоба, Баг…). Через запятую.",
      "en": "Topics a person picks when creating a ticket (Question, Report, Bug…). Comma-separated."
     },
     "max": 300
    },
    {
     "key": "viewer_role_ids",
     "kind": "roles",
     "kindLabel": {
      "ru": "выбор ролей (несколько)",
      "en": "role picker (multiple)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Роли только для чтения",
      "en": "Read-only roles"
     },
     "desc": {
      "ru": "Можно выбрать несколько ролей. Они видят тикеты и историю, но писать, реагировать и закрывать не могут.",
      "en": "You can pick several roles. They can see tickets and history, but can't write, react or close."
     }
    },
    {
     "key": "blacklist",
     "kind": "users",
     "kindLabel": {
      "ru": "выбор пользователей (несколько)",
      "en": "user picker (multiple)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Чёрный список",
      "en": "Blacklist"
     },
     "desc": {
      "ru": "Эти пользователи не смогут создавать тикеты.",
      "en": "These users won't be able to create tickets."
     }
    },
    {
     "key": "claim_enabled",
     "kind": "toggle",
     "kindLabel": {
      "ru": "переключатель Вкл/Выкл",
      "en": "On/Off switch"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Очередь тикетов (взятие)",
      "en": "Ticket queue (claiming)"
     },
     "desc": {
      "ru": "Новый тикет не виден сотрудникам, пока кто-то его не возьмёт. Брать, вести, закрывать и открывать тикеты снова можно командой /ticket manage. После «Взять» тикет открывается только взявшему, а бот пишет в чате, кто принял тикет.",
      "en": "A new ticket is hidden from staff until someone claims it. Claim, handle, close and reopen tickets with /ticket manage. After “Claim” the ticket becomes visible only to the person who took it, and the bot posts who accepted it."
     },
     "def": false
    },
    {
     "key": "claim_role_ids",
     "kind": "roles",
     "kindLabel": {
      "ru": "выбор ролей (несколько)",
      "en": "role picker (multiple)"
     },
     "req": false,
     "cond": "claim_enabled",
     "name": {
      "ru": "Кто может брать: роли",
      "en": "Who can claim: roles"
     },
     "desc": {
      "ru": "Участники этих ролей могут брать тикеты. Если роли и пользователи не выбраны, брать могут роли поддержки.",
      "en": "Members of these roles can claim tickets. If no roles and no users are chosen, the support roles can claim."
     }
    },
    {
     "key": "claim_user_ids",
     "kind": "users",
     "kindLabel": {
      "ru": "выбор пользователей (несколько)",
      "en": "user picker (multiple)"
     },
     "req": false,
     "cond": "claim_enabled",
     "name": {
      "ru": "Кто может брать: пользователи",
      "en": "Who can claim: users"
     },
     "desc": {
      "ru": "Отдельные пользователи, которые могут брать тикеты (в дополнение к ролям).",
      "en": "Individual users who can claim tickets (in addition to the roles)."
     }
    }
   ]
  },
  {
   "id": "panel",
   "name": {
    "ru": "Панель",
    "en": "Panel"
   },
   "items": [
    {
     "key": "panel_title",
     "kind": "text",
     "kindLabel": {
      "ru": "текст (окно ввода)",
      "en": "text (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Заголовок панели",
      "en": "Panel title"
     },
     "desc": {
      "ru": "Заголовок сообщения с кнопкой создания тикета.",
      "en": "Title of the message with the create-ticket button."
     },
     "max": 100
    },
    {
     "key": "panel_description",
     "kind": "text",
     "kindLabel": {
      "ru": "текст (окно ввода)",
      "en": "text (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Описание панели",
      "en": "Panel description"
     },
     "desc": {
      "ru": "Текст под заголовком панели: объясни, когда стоит открывать тикет.",
      "en": "Text under the panel title: explain when to open a ticket."
     },
     "max": 1000
    },
    {
     "key": "panel_button_label",
     "kind": "text",
     "kindLabel": {
      "ru": "текст (окно ввода)",
      "en": "text (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Текст кнопки",
      "en": "Button text"
     },
     "desc": {
      "ru": "Надпись на кнопке создания тикета. Например: «Создать тикет» или «Связаться с поддержкой».",
      "en": "Label on the create-ticket button, e.g. “Create ticket” or “Contact support”."
     },
     "max": 80,
     "def": "Создать тикет"
    },
    {
     "key": "panel_button_emoji",
     "kind": "emoji",
     "kindLabel": {
      "ru": "эмодзи (окно ввода)",
      "en": "emoji (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Эмодзи кнопки",
      "en": "Button emoji"
     },
     "desc": {
      "ru": "Обычное эмодзи (🎫) или кастомное в виде <:name:id>. Чтобы получить код, напиши в чате \\:название: и скопируй результат. Пусто = без эмодзи.",
      "en": "A normal emoji (🎫) or a custom one like <:name:id>. To get the code, type \\:name: in chat and copy the result. Empty = no emoji."
     },
     "max": 60
    },
    {
     "key": "panel_button_style",
     "kind": "btnstyle",
     "kindLabel": {
      "ru": "выбор цвета кнопки",
      "en": "button colour picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Цвет кнопки",
      "en": "Button color"
     },
     "desc": {
      "ru": "Цвет кнопки на панели.",
      "en": "Color of the button on the panel."
     },
     "opts": [
      {
       "v": "primary",
       "ru": "Синяя",
       "en": "Blue"
      },
      {
       "v": "secondary",
       "ru": "Серая",
       "en": "Gray"
      },
      {
       "v": "success",
       "ru": "Зелёная",
       "en": "Green"
      },
      {
       "v": "danger",
       "ru": "Красная",
       "en": "Red"
      }
     ],
     "def": "primary"
    },
    {
     "key": "panel_color",
     "kind": "color",
     "kindLabel": {
      "ru": "выбор цвета или свой HEX",
      "en": "colour picker or custom HEX"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Цвет панели",
      "en": "Panel color"
     },
     "desc": {
      "ru": "Цвет полоски слева на панели тикетов.",
      "en": "Color of the stripe on the left of the ticket panel."
     },
     "opts": [
      {
       "v": "#5865F2",
       "ru": "Синий",
       "en": "Blue"
      },
      {
       "v": "#57F287",
       "ru": "Зелёный",
       "en": "Green"
      },
      {
       "v": "#ED4245",
       "ru": "Красный",
       "en": "Red"
      },
      {
       "v": "#FEE75C",
       "ru": "Жёлтый",
       "en": "Yellow"
      },
      {
       "v": "#99AAB5",
       "ru": "Серый",
       "en": "Gray"
      }
     ],
     "def": "#5865F2"
    },
    {
     "key": "welcome_message",
     "kind": "text",
     "kindLabel": {
      "ru": "текст (окно ввода)",
      "en": "text (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Сообщение в тикете",
      "en": "Ticket message"
     },
     "desc": {
      "ru": "Первое сообщение в новом тикете. Можно использовать переменные вроде {{user_mention}}.",
      "en": "First message in a new ticket. You can use variables like {{user_mention}}."
     },
     "max": 1000
    }
   ]
  },
  {
   "id": "close",
   "name": {
    "ru": "Закрытие",
    "en": "Closing"
   },
   "items": [
    {
     "key": "close_action",
     "kind": "choice",
     "kindLabel": {
      "ru": "выбор варианта",
      "en": "option picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Действие при закрытии",
      "en": "Action on close"
     },
     "desc": {
      "ru": "«Удалить канал» стирает канал после закрытия. «Закрыть и оставить» переименовывает его, переносит в категорию закрытых и забирает доступ у автора.",
      "en": "“Delete channel” removes the channel. “Close and keep” renames it, moves it to the closed category and removes the author's access."
     },
     "opts": [
      {
       "v": "delete",
       "ru": "Удалить канал",
       "en": "Delete channel"
      },
      {
       "v": "archive",
       "ru": "Закрыть и оставить",
       "en": "Close and keep"
      }
     ],
     "def": "delete"
    },
    {
     "key": "closed_category_id",
     "kind": "channel",
     "kindLabel": {
      "ru": "выбор канала",
      "en": "channel picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Категория закрытых",
      "en": "Closed category"
     },
     "desc": {
      "ru": "Куда переносить тикеты при действии «Закрыть и оставить». Если не задана, канал остаётся на месте.",
      "en": "Where tickets go with “Close and keep”. If not set, the channel stays in place."
     }
    },
    {
     "key": "close_confirm",
     "kind": "toggle",
     "kindLabel": {
      "ru": "переключатель Вкл/Выкл",
      "en": "On/Off switch"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Подтверждение закрытия",
      "en": "Close confirmation"
     },
     "desc": {
      "ru": "Перед закрытием бот спросит «Ты уверен?». Защита от случайных нажатий.",
      "en": "The bot asks “Are you sure?” before closing. Protects from accidental clicks."
     },
     "def": true
    },
    {
     "key": "close_button_label",
     "kind": "text",
     "kindLabel": {
      "ru": "текст (окно ввода)",
      "en": "text (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Текст кнопки «Закрыть»",
      "en": "Close button text"
     },
     "desc": {
      "ru": "Надпись на кнопке внутри тикета.",
      "en": "Label of the button inside the ticket."
     },
     "max": 80,
     "def": "Закрыть"
    },
    {
     "key": "close_button_emoji",
     "kind": "emoji",
     "kindLabel": {
      "ru": "эмодзи (окно ввода)",
      "en": "emoji (input window)"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Эмодзи кнопки «Закрыть»",
      "en": "Close button emoji"
     },
     "desc": {
      "ru": "Обычное (🔒) или кастомное <:name:id>. Пусто = без эмодзи.",
      "en": "A normal one (🔒) or custom <:name:id>. Empty = no emoji."
     },
     "max": 60,
     "def": "🔒"
    },
    {
     "key": "close_button_style",
     "kind": "btnstyle",
     "kindLabel": {
      "ru": "выбор цвета кнопки",
      "en": "button colour picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Цвет кнопки «Закрыть»",
      "en": "Close button color"
     },
     "desc": {
      "ru": "Цвет кнопки внутри тикета. Работает для новых тикетов, в старых кнопка остаётся прежней.",
      "en": "Color of the button inside the ticket. Applies to new tickets only."
     },
     "opts": [
      {
       "v": "primary",
       "ru": "Синяя",
       "en": "Blue"
      },
      {
       "v": "secondary",
       "ru": "Серая",
       "en": "Gray"
      },
      {
       "v": "success",
       "ru": "Зелёная",
       "en": "Green"
      },
      {
       "v": "danger",
       "ru": "Красная",
       "en": "Red"
      }
     ],
     "def": "secondary"
    }
   ]
  },
  {
   "id": "transcript",
   "name": {
    "ru": "Транскрипт",
    "en": "Transcript"
   },
   "items": [
    {
     "key": "transcript_enabled",
     "kind": "toggle",
     "kindLabel": {
      "ru": "переключатель Вкл/Выкл",
      "en": "On/Off switch"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Создавать транскрипт",
      "en": "Create transcript"
     },
     "desc": {
      "ru": "При закрытии бот сохранит переписку в файл.",
      "en": "On close the bot saves the conversation to a file."
     },
     "def": true
    },
    {
     "key": "transcript_format",
     "kind": "choice",
     "kindLabel": {
      "ru": "выбор варианта",
      "en": "option picker"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Формат транскрипта",
      "en": "Transcript format"
     },
     "desc": {
      "ru": "HTML выглядит как чат Discord. TXT это простой текст. Можно оба.",
      "en": "HTML looks like a Discord chat. TXT is plain text. You can pick both."
     },
     "opts": [
      {
       "v": "html",
       "ru": "HTML",
       "en": "HTML"
      },
      {
       "v": "txt",
       "ru": "TXT",
       "en": "TXT"
      },
      {
       "v": "both",
       "ru": "HTML + TXT",
       "en": "HTML + TXT"
      }
     ],
     "def": "html"
    },
    {
     "key": "transcript_to_log",
     "kind": "toggle",
     "kindLabel": {
      "ru": "переключатель Вкл/Выкл",
      "en": "On/Off switch"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Отправлять в лог-канал",
      "en": "Send to log channel"
     },
     "desc": {
      "ru": "Файл транскрипта прикрепляется к записи о закрытии в лог-канале.",
      "en": "The transcript file is attached to the close entry in the log channel."
     },
     "def": true
    },
    {
     "key": "dm_transcript",
     "kind": "toggle",
     "kindLabel": {
      "ru": "переключатель Вкл/Выкл",
      "en": "On/Off switch"
     },
     "req": false,
     "cond": null,
     "name": {
      "ru": "Отправлять автору в ЛС",
      "en": "Send to author in DMs"
     },
     "desc": {
      "ru": "Автор тикета получит файл в личные сообщения (если у него открыты ЛС).",
      "en": "The ticket author gets the file in DMs (if their DMs are open)."
     },
     "def": false
    }
   ]
  }
 ],
 "required": [
  "category_id",
  "support_role_ids",
  "log_channel_id"
 ],
 "tips": {
  "support_role_ids": {
   "ru": "В обычном режиме эти роли видят все тикеты, пишут в них и закрывают. В режиме очереди они не видят новые тикеты, пока кто-то не возьмёт тикет. Если «Кто может брать» не заполнено, брать могут именно эти роли.",
   "en": "In the normal mode these roles see every ticket, write in it and close it. In the queue mode they cannot see new tickets until someone claims one. If “Who can claim” is empty, these roles are the ones that can claim."
  },
  "log_channel_id": {
   "ru": "Сюда приходит запись о закрытии (автор, кто закрыл, кто взял, тема), файл транскрипта и, в режиме очереди, уведомление о новом тикете.",
   "en": "This gets the close entry (author, who closed it, who claimed it, the topic), the transcript file and, in the queue mode, the new-ticket notice."
  },
  "max_tickets_per_user": {
   "ru": "Считаются открытые тикеты человека на всём сервере. Закрытые и удалённые не считаются.",
   "en": "A member's open tickets across the whole server are counted. Closed and deleted ones are not."
  },
  "ticket_types": {
   "ru": "До 25 тем. Пока список пуст, тема не спрашивается. Подробнее — в разделе <a href=\"#types\">«Типы тикетов»</a>.",
   "en": "Up to 25 topics. While the list is empty no topic is asked. See <a href=\"#types\">Ticket types</a>."
  },
  "viewer_role_ids": {
   "ru": "Эти роли видят все тикеты всегда, в том числе скрытые в режиме очереди, но писать в них не могут. Удобно для стажёров и старших модераторов, которым нужен только контроль.",
   "en": "These roles always see every ticket, including those hidden in the queue mode, but cannot write. Handy for trainees and senior moderators who only need oversight."
  },
  "blacklist": {
   "ru": "При нажатии на кнопку человек увидит отказ.",
   "en": "When they press the button the member sees a refusal."
  },
  "claim_enabled": {
   "ru": "Подробности — в разделе <a href=\"#queue\">«Очередь»</a>. Действует на новые тикеты.",
   "en": "See <a href=\"#queue\">Queue</a> for details. Applies to new tickets."
  },
  "panel_button_emoji": {
   "ru": "Обычное эмодзи или кастомное с сервера в виде <code>&lt;:имя:id&gt;</code>. Чтобы получить код кастомного, напиши в чате <code>\\:название:</code> и скопируй результат.",
   "en": "A normal emoji or a custom server one like <code>&lt;:name:id&gt;</code>. To get the code of a custom one, type <code>\\:name:</code> in chat and copy the result."
  },
  "panel_color": {
   "ru": "Подойдёт и свой цвет: кнопка «Свой HEX» принимает код вида <code>#5865F2</code>.",
   "en": "Your own colour works too: the “Custom HEX” button accepts a code like <code>#5865F2</code>."
  },
  "welcome_message": {
   "ru": "Можно вставлять <a href=\"#vars\">переменные</a>. Если оставить пустым, используется текст по умолчанию.",
   "en": "You can use <a href=\"#vars\">variables</a>. If left empty, the default text is used."
  },
  "close_action": {
   "ru": "«Закрыть и оставить» переименовывает канал в <code>closed-…</code>, переносит его в категорию закрытых и забирает доступ у автора. Только так тикет можно открыть снова.",
   "en": "“Close and keep” renames the channel to <code>closed-…</code>, moves it to the closed category and removes the author's access. This is the only way a ticket can be reopened."
  },
  "closed_category_id": {
   "ru": "Если не выбрана, архивный тикет остаётся в прежней категории. В категории не больше 50 каналов.",
   "en": "If not chosen, an archived ticket stays in its category. A category holds at most 50 channels."
  },
  "transcript_format": {
   "ru": "HTML открывается в браузере и выглядит как чат Discord. TXT удобно читать сразу.",
   "en": "HTML opens in a browser and looks like a Discord chat. TXT is easy to read right away."
  },
  "dm_transcript": {
   "ru": "Отправится, только если у автора открыты личные сообщения.",
   "en": "Sent only if the author's DMs are open."
  }
 },
 "defs": {
  "panel_title": {
   "ru": "New Panel",
   "en": "New Panel"
  },
  "panel_description": {
   "ru": "To create a ticket use the Create ticket button",
   "en": "To create a ticket use the Create ticket button"
  },
  "panel_button_emoji": {
   "ru": "нет",
   "en": "none"
  },
  "welcome_message": {
   "ru": "«Поддержка скоро ответит. Чтобы закрыть тикет, нажми кнопку ниже.»",
   "en": "“Support will respond shortly. To close the ticket, click the button below.”"
  },
  "closed_category_id": {
   "ru": "не выбрана",
   "en": "not chosen"
  },
  "panel_button_label": {
   "ru": "Создать тикет (очисти поле, и бот подставит надпись на языке пользователя)",
   "en": "“Создать тикет”. Clear the field and the bot uses the member's own language instead"
  },
  "close_button_label": {
   "ru": "Закрыть (очисти поле, и бот подставит надпись на языке пользователя)",
   "en": "“Закрыть”. Clear the field and the bot uses the member's own language instead"
  }
 }
};
