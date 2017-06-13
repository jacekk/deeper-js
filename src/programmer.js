function Programmer1() {
    this.langs = [];
}

Programmer1.prototype.learnNewLanguage = function (lang) {
    this.langs.push(lang);
};

Programmer1.prototype.isPragmatic = function () {
    return this.langs.length > 2;
}

class Programmer2 {
    constructor() {
        this.langs = []; 
    }

    learnNewLanguage(lang) {
        this.langs.push(lang);
    }

    isPragmatic() {
        return this.langs.length > 2;
    }
}

var Programmer3 = {
    init: () => {
        this.langs = [];
    },
    learnNewLanguage: (lang) => {
        this.langs.push(lang);
    },
    isPragmatic: () => {
        return this.langs.length > 2;
    }
};

function createProgrammer() {
    let langs = [];

    return {
        learnNewLanguage: (lang) => {
            langs.push(lang);
        },
        isPragmatic: () => {
            return langs.length > 2;
        }
    }
}

module.exports = {
    Programmer1, Programmer2, Programmer3, createProgrammer
};
