Записи блога хранятся в папке `_posts`. Имена файлов для постов имеют специальный формат: дата публикации, затем заголовок, за которым следует расширение.
`yyyy-mm-dd-title.md`

Чтобы заставить Jekyll обрабатывать ваши изменения, добавьте front matter в верхнюю часть страницы:

```yml
---
layout: post #без изменений
title: How to find your first buddy #Заголовок поста
preview: assets/images/article-preview-1.jpg #Ссылка на превью поста
categories: [Blog, Advices] #Категории поста
time_to_read: 6 min #Время на чтение
show_related_post: true #Отображение похожих статей
---
```
