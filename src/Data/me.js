
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const me = {
    id: 0,
    mainimg: "/assets/images/pics/sabesh.jpeg",
    aboutimg: "/assets/images/pics/sabs.JPG",
    memoji: "/assets/images/pics/memoji.png",
    name: "Sabesh Bharathi",
    tagline: "Web/iOS Developer. UI/UX Designer.",
    age: 19,
    maindes: `Hey there! 👋🏽 I am Sabesh. I'm ${getAge(new Date(2001, 5, 5))} and come from Chennai, India.
    I am an adept Web Developer and find myself crawling towards
    the beauties and aesthetics of the web. I also work extensively
    with iOS using swift. I feel like it's every consumer's necessity
    to experience quality products, with a robust feature-set whilst
    enjoying a hassle-free User Experience ☄️ I strive to make that possible
    in every product I develop/design. Cheers! 🍻`,
    aboutdes: `Hello 👋🏽 I am Sabesh and I do Web development. Well, sometimes iOS Development.
    But all times, UI/UX desinging. I work extensively with ReactJS and Swift/SwiftUI and aspire
    to create simple and good looking User Interfaces 🦄 I give equal importance to
    stylesheets and behavior, because I believe, together, they can spark magic ✨ I've
    also had my share of backend experience with python-flask and SQLAlchemy with a
    few full stack projects. I have a keen eye of layouts and colors and do my best to
    contribute to robust and good looking interfaces. And oh, I love Apple 🍎`,
    skillset: {
        skillnames: "ReactJS,Swift,SwiftUI,HTML,JavaScript,CSS,Python,Django,Flask,Figma,AdobeXD,C++",
        emojis: "⚛️,🦅,🦅,📝,⚡️,🌈,🐍,⛓,🧪,🖋,✏️,👾",
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