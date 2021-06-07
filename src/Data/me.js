
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export function appleLogo() {
    if (navigator.appVersion.indexOf("Mac") !== -1) {
        return ''
    }
    return '🍎'
}

const me = {
    id: 0,
    mainimg: "/assets/images/pics/sabesh.jpeg",
    aboutimg: "/assets/images/pics/sabs.JPG",
    memoji: [
        "/assets/images/pics/memoji1.png",
        "/assets/images/pics/memoji2.png",
        "/assets/images/pics/memoji3.png",
        "/assets/images/pics/memoji4.png",
        "/assets/images/pics/memoji5.png",
        "/assets/images/pics/memoji6.png",
        "/assets/images/pics/memoji7.png"
    ],
    name: "Sabesh Bharathi",
    tagline: `Apple ${appleLogo()} WWDC21 Scholar. Web/iOS Developer, Designer.`,
    age: 19,
    maindes: `Hey there! 👋🏽 I am Sabesh. I'm ${getAge(new Date(2001, 5, 5))} and come from Chennai, India.
    I'm an adept web/iOS developer architecting meaningful and elegent
    applications natively and on the web. I'm also a Apple ${appleLogo()} WWDC 2021
    Swift Student Challenge winner. I feel like it's every consumer's necessity
    to experience quality products, with a robust feature-set whilst
    enjoying a hassle-free and accessible User Experience ☄️ I strive to make that possible
    in every product I develop/design. Cheers! 🍻`,
    aboutdes: `Hello 👋🏽 I am Sabesh and I do Web development. Well, sometimes iOS Development.
    But all times, UI/UX desinging. I work extensively with ReactJS and Swift/SwiftUI and aspire
    to create simple and good looking User Interfaces 🦄 I give equal importance to
    stylesheets and behavior, because I believe, together, they can spark magic ✨ I am a proud
    recipient of Apple's WWDC21 Swift Student Challenge Award. I've also worked with a fair share
    of backend tools like Python-flask, Postgres and AWS. I have a keen eye of layouts and colors and do my best to
    contribute to robust and good looking interfaces. And oh, I love Apple 🍎`,
    skillset: {
        skillnames: "ReactJS,Swift,SwiftUI,HTML,JavaScript,CSS,Python,Django,Flask,Figma,Sketch,C++",
        emojis: "⚛️,🦅,🦅,📝,⚡️,🌈,🐍,⛓,🧪,🖋,💎,👾",
    },
    
    contact: [
        {
            ico:  "./assets/images/social/instagram.png",
            link: "https://www.instagram.com/sabeshbharathi/"
        },
        {
            ico:  "./assets/images/social/twitter.png",
            link: "https://twitter.com/sabeshbharathi"
        },
        {
            ico:  "./assets/images/social/dribbble.png",
            link: "https://dribbble.com/sabstanceabuse"
        },
        {
            ico:  "./assets/images/social/github.png",
            link: "https://github.com/programVeins"
        }
    ]

}

export default me;