function introduction(firstName = "Aki") {
    return (`Hi, my name is ${firstName}.`);
}

function introductionWithLanguage(_firstName = "Aki", _language = "Ember.js") {
    return (`Hi, my name is ${_firstName} and I am learning to program in ${_language}.`);
}

function introductionWithLanguageOptional(firstName = "Gracie", language = "...") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(firstName = "Gracie", language1 = "Python") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language1}.`);
}

introductionWithLanguageOptional("Alessnadro", "Java");