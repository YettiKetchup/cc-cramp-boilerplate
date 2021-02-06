# Cramp CocosCreator 2x
![alt text](https://i.ibb.co/q73GX25/ccc-boilerplate.jpg)

Подробная документация Cramp: https://github.com/YettiKetchup/cramp


# Установка

Скачать проект с сабмодулями: git clone --recursive https://github.com/YettiKetchup/cc-cramp-boilerplate.git

Переключить ветку саб-модуля Cramp на main (если это не произошло автоматически)


# Биндинги типов

Используйте биндинги типов! Биндинги типов позволяют пользователю создавать Компоненты, Сущности и Системы готовые к переносу в другие окружения. Например, мы использовали Cramp на сервере в окружении NestJS. Мы создали огромное количество Компонентов и Систем исправно работающих на сервере, но в один момент часть из них потребовалась на клиенте. Благодаря биндингам нам не составит труда просто взять и перенести все необходимые Компоненты и Системы на клиент, например в CocosCreator, или PlayCanvas, или любое другое клиентское окружение. Благодяря тому, что наши Компоненты наследуются не от CrampNodeComponent или CocosCreatorCrampComponent, а от CrampComponent, который ссылается на один из этих типов, в зависимости от оружения, мы с легкостью можем переносить их из окружения в окружение. Разумеется, стоит понимать, что не все Компоненты и Системы подлежат переносу. Те Системы и Компоненты каким-либо образом ссылающиеся на окружение не могут быть перенесены, да и нет в этом никакого смысла. Нам же не нужно тянуть в серверное окружение Системы, котоыре работают с графикой, верно? Поэтому при создании Систем старайтесь следовать простому правилу Single Responsibility. Если какая-то Система манипулирует с данными пользовательских Компонентов, она не может также манипулировать даными графики или физики, или какими-либо еще. Для этого стоит создать еще одну и использовать ее в цепочке вызовов Контейнера, либо в качестве декоратора. Словом, при проектировании игр на Cramp всегда задавайтесь вопросом: "А смогу ли я перенести эту Систему в другое окружение и потребуется ли вообще?".

Всего существует 6 биндингов, однако, при необходимости, пользователь может добавить во все свои окружения еще. Все биндинги описаны в файле bindings.types.ts и могут быть переопределены.

```
export class            CrampComponent          extends     cc.Component {};
export class            CrampCachedComponent    extends     CocosCreatorCachedComponent {};
export class            CrampNode               extends     cc.Node {};
export abstract class   CrampSystem<TData>      extends     CocosCreatorSystem<TData> {};
export class            CrampEntity             extends     CocosCreatorEntity {};

export abstract class   CrampEntityFactory<TData>      implements   IEntityFactory<CrampComponent, CrampEntity, TData> {
    public abstract create(id: string, data?: TData): CrampEntity;
}
```

В итоге, благодаря биндингам, все наши Компоненты, Системы и Сущности выглядят одинаково, вне зависимости от того, в каком окружении они были созданы. 

Вот так выглядит Компонент:

```
class ExampleComponent extends CrampCachedComponent {
    value: string = '';
}
```

Это Сущность:

```
class ExampleEntity extends CrampEntity {
    //...
}
```

Это Система:
```
class ExampleSystem extends CrampSystem<any> {
    //...
}
```

# Использование

- Для того, чтобы обозначить Сущность, необходимо Ноде CocosCreator добавить Компонент CocosCreatorEntity(cc.entity). CocosCreatorEntity наследует интерфейс INodeEntiy, в следствии чего прямиком из Сущности будет доступ к Ноде.

- Контроллеры GameController и UiController сами соберут все дочерние Сущности и передадут Хранилищу Cramp. Создавать дополнительыне контроллеры нужно по тому же принципу, что и GameController\UiController.

- Создание Компонента не отличается от создания Комопонента CocosCreator. Единственное отличие, все пользовательские Компоненты должны наследовать класс CrampCachedComponent. Если Компонент не должен кэшироваться, используйте для наследования класс CrampComponent.

- Системные Компоненты CocosCreator в модификации не нуждаются и могут быть использованы "как есть". Для добавления их в кэш, необходимо лишь поменять галку "Active".

- Чтобы добавить Компонент к Сущности необходимо лишь добавить Компонент к Ноде также, как это делается в оригинальном движке.

- Точками входа являются Контроллеры.


# Другие интеграционные бойлерплейты

CocosCreator 2x - https://github.com/YettiKetchup/cc-cramp-boilerplate

CocosCreator 3x - В процессе разработки...

PlayCanvas - В процессе разработки...

NodeJS (TypeScript) - В процессе разработки...

# Примеры

Cramp API Example: https://github.com/YettiKetchup/cramp-pure-example