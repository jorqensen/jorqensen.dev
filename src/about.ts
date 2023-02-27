interface About {
    name: string;
    age: () => number;
    email: string;
    socials: {
        [key: string]: string;
    },
}

const about: About = {
    name: 'Mathias Jørgensen',
    age: () => {
        const birthday = new Date('04/23/1996');
        return new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;
    },
    email: 'hello@jorqensen.dev',
    socials: {
        github: 'https://github.com/jorqensen',
        twitter: 'https://twitter.com/jorqensen',
        linkedin: 'https://linkedin.com/in/jorqensen',
        buymeacoffee: 'https://buymeacoffee.com/jorqensen',
        email: `mailto:hello@jorqensen.dev`
    }
}

export default about;
