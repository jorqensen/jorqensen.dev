interface About {
    name: string;
    age: () => number;
    email: string;
    location: string;
    socials: {
        [key: string]: string;
    },
}

const about: About = {
    name: "Mathias Jørgensen",
    age: () => {
        const birthday = new Date("04/23/1996");
        return new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;
    },
    email: "hello@jorqensen.dev",
    location: "https://www.google.com/maps/place/Odense/@55.3841674,10.2573954,11z/data=!3m1!4b1!4m6!3m5!1s0x464cd935429724c1:0x3b1e34d53b2ff5ec!8m2!3d55.403756!4d10.40237!16zL20vMDVtd3g",
    socials: {
        github: "https://github.com/jorqensen",
        twitter: "https://twitter.com/jorqensen",
        linkedin: "https://linkedin.com/in/jorqensen",
        buymeacoffee: "https://buymeacoffee.com/jorqensen",
        email: "mailto:hello@jorqensen.dev"
    }
}

export default about;
