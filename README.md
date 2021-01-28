# Cramp CocosCreator 2x
![alt text](https://i.ibb.co/q73GX25/ccc-boilerplate.jpg)

Подробная документация Cramp: https://github.com/YettiKetchup/cramp


# Установка

Скачать проект с сабмодулями: git clone --recursive https://github.com/YettiKetchup/cc-cramp-boilerplate.git

Переключить ветку саб-модуля Cramp на main (если это не произошло автоматически)


# Использование

- Для того, чтобы обозначить Сущность, необходимо Ноде CocosCreator добавить Компонент CocosCreatorEntity(cc.entity). CocosCreatorEntity наследует интерфейс INodeEntiy, в следствии чего прямиком из Сущности будет доступ к Ноде.

- Контроллеры GameController и UiController сами соберут все дочерние Сущности ипередадут Хранилищу Cramp. Создавать дополнительыне контроллеры нужно по тому же принципу, что и GameController\UiController.

- Создание Компонента не отличается от создания Комопонента CocosCreator. Единственное отличие, все пользовательские Компоненты должны наследовать класс CocosCreatorCachedComponent. Хоть это и не обязательно, но в таком случае у Компонента будет возможность сразу попасть в кэш, если он не используется здесь и сейчас. 

- Системные Компоненты CocosCreator в модификации не нуждаются и могу быть использованы "как есть". Для добавления их в кэш, необходимо лишь поменять галку "Active".

- Чтобы добавить Компонент к Сущности необходимо лишь добавить Компонент к Ноде также, как это делается в оригинальном движке.

- Точками входа являются Контроллеры.


# Другие интеграционные бойлерплейты

CocosCreator 2x - https://github.com/YettiKetchup/cc-cramp-boilerplate

CocosCreator 3x - В процессе разработки...

PlayCanvas - В процессе разработки...

NodeJS (TypeScript) - В процессе разработки...

# Примеры

Cramp API Example: https://github.com/YettiKetchup/cramp-pure-example