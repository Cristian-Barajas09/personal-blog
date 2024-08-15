
export type Lang = 'en' | 'es';

export const languages: Record<Lang, string> = {
    'en': 'English',
    'es': 'Español',
};


export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.language': 'Language',
        'home.title': 'Welcome to my blog website',
        'about.title': 'About me',
        'about.description': 'A review about of the most schizophrenic person that exists on the earth',
        'about.realDescription': `
        My name is Cristian Barajas and I am a software developer,
        I currently work in a software development company called kunaisoft,
        passionate about video games and breaking my head with programming problems
        `,
        'about.extra': 'yes i know, i have to change the image profile XD;if you read this, i wish you a good day;My favorite color is 4',
        'about.contact': 'Contact',
        'about.extraTitle': 'Extra:',
        '404.title': 'Not Found',
        '404.description': 'The page you are looking for does not exist',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre',
        'nav.blog': 'Blog',
        'nav.language': 'Idioma',
        'home.title': 'Bienvenido a mi blog',
        'about.title': 'Sobre mi',
        'about.realDescription': `
        Mi nombre es Cristian Barajas y soy un desarrollador de software,
        actualmente trabajo en una empresa de desarrollo de software llamada kunaisoft,
        apacionado por los videojuegos y partirse la cabeza con problemas de programación
        `,
        'about.extra': "si ya se que tengo que cambiar la imagen de perfil XD;Mi color favorito es el 4;si lees esto, te deseo un buen día",
        'about.description': 'una reseña sobre la persona mas esquizofrenica que existe en la tierra',
        'about.contact': 'Contacto',
        'about.extraTitle': 'El mensaje mas motivacional que veras hoy:',
        '404.title': 'No encontrado',
        '404.description': 'Los magicos duendes que habitan en tu computadora no pudieron encontrar la pagina que buscas',
    },
} as const;