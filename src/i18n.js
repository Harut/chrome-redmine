window.i18n = {}

window.i18n.en = {
    'Add tab': '',
    'Delete tab': '',
    'Count updated issues': '',
    'Show "assignee" column': '',
    'Show "project" column': '',
    'Show "status" column': '',
    'will be used for Redmine API requests.': '',
    'Filter': '',
    'Title': '',
    'Priorities': '',
    'Tabs and filters': '',
    'Update interval (in minutes)': '',
    'Redmine URL': '',
    'Common options': '',
    'Save': '',
    'Locale': '',
    'Statuses, are displayed as closed': '',
    'Status, set on close action': ''
}

window.i18n.ru = {
    'Add tab': 'Добавить вкладку',
    'Delete tab': 'Удалить вкладку',
    'Count updated issues': 'Учитывать при подсчете обновлений',
    'Show "assignee" column': 'Показывать колонку исполнителя',
    'Show "project" column': 'Показывать колонку проекта',
    'Show "status" column': 'Показывать колонку статуса',
    'will be used for Redmine API requests.': 'будет использоваться для запроса к API Redmine.',
    'Filter': 'Фильтр',
    'Title': 'Название',
    'Priorities': 'Приоритеты',
    'Tabs and filters': 'Вкладки и фильтры',
    'Update interval (in minutes)': 'Интервал обновлений (в мин)',
    'Redmine URL': 'URL на Redmine',
    'Common options': 'Главные настройки',
    'Save': 'Сохранить',
    'Locale': 'Язык',
    'Statuses, are displayed as closed': 'Статусы, отображаемые как закрытые',
    'Status, set on close action': 'Статус, устанавливаемый при закрытии задачи'
}


window.currentLocale = localStorage.currentLocale || 'en';

function _(s){
    if (i18n[currentLocale] && i18n[currentLocale][s]){
        return i18n[currentLocale][s];
    }
    return s;
}

window.addEventListener('DOMContentLoaded', function(){
    var i18n_elems = document.getElementsByClassName('i18n');
    for (var i=i18n_elems.length; i--;){
        i18n_elems[i].innerText = _(i18n_elems[i].innerText);
    }
});
