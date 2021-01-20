export default {
    state: {
        MainSettingMenu: [{
                text: "Настройки",
                to: "/app/q/setting"
            },
            {
                text: "Статистика",
                to: "/app/q/statistics"
            }
        ],
        ToSettingMenu: [{
                text: "Домашняя Страница",
                to: "/"
            },
            {
                text: "Центр помощи",
                to: "/support"
            },
            {
                text: "Отзыв",
                to: "/app/q/review"
            }
        ],
        MainHeaderItem: [{
                title: "Все",
                src: "assets/img/icons/grid.svg",
                classImg: "invert_7",
                active: "$route.path.includes('/app/all') ? true : false",
                to: "/app/all"
            },
            {
                title: "Входящие",
                src: "assets/img/icons/inbox.svg",
                classImg: "invert_7",
                active: "$route.path.includes('/app/inbox') ? true : false",
                to: "/app/inbox"
            },
            {
                title: "Сегодня",
                classImg: "invert_7",
                src: "assets/img/icons/today.svg",
                active: "$route.path.includes('/app/today') ? true : false",
                to: "/app/today"
            },
            {
                title: "Завтра",
                classImg: "invert_7",
                src: "assets/img/icons/today.svg",
                active: "$route.path.includes('/app/tomorrow') ? true : false",
                to: "/app/tomorrow"
            },
            {
                title: "Следующая неделя",
                classImg: "invert_7",
                src: "assets/img/icons/week.svg",
                active: "$route.path.includes('/app/week') ? true : false",
                to: "/app/week"
            }
        ],
        toHeaderItem: [{
                title: "Выполнено",
                classImg: "invert_7",
                src: "assets/img/icons/check.svg",
                active: "$route.path.includes('/app/completed') ? true : false",
                to: "/app/completed"
            },
            {
                title: "Корзина",
                classImg: "invert_7",
                src: "assets/img/icons/delete.svg",
                active: "$route.path.includes('/app/trash') ? true : false",
                to: "/app/trash"
            }
        ]
    },
    getters: {
        returnSettingMenu(state) {
            return state.MainSettingMenu
        },
        returnToSettingMenu(state) {
            return state.ToSettingMenu
        },
        returnHeaderItem(state) {
            return state.MainHeaderItem
        },
        returnToHeaderItem(state) {
            return state.toHeaderItem
        }
    }
}