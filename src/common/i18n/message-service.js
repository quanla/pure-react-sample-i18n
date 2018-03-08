const Cols = require("../cols").Cols;

const en = {
    "hello.world": "Hello world",
};
const vi = {
    "hello.world": "Xin chào thế giới",
};

const languages = {
    en, vi,
};

let currentLanguage = en;
let changeLanguageListeners = [];

const messageService = {
    getMessage(key) {
        return currentLanguage[key];
    },
    changeLanguage(newLanguage) {
        currentLanguage = languages[newLanguage];
        changeLanguageListeners.forEach((l) => l());
    },
    onChangeLanguage: Cols.addRemove(changeLanguageListeners),
};

exports.messageService = messageService;