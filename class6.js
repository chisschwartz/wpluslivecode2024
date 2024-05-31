const greetEnglish = (name) => {
    return `Hello ${name}`;
}

const greetSpanish = (name) => {
    return `Hola ${name}`;
}

const greetArabic = (name) => {
    return `Salam ${name}`;
}

const languageArray = [greetEnglish, greetSpanish, greetArabic];


const greetMe = (greetingsArray, inputName) => {
    for (let index = 0; index < greetingsArray.length; index++){
        console.log(greetingsArray[index](inputName));
    }
}

greetMe(languageArray, 'Daniel');
