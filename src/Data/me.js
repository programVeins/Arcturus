
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const me = {
    id: 0,
    mainimg: "./assets/images/pics/sabesh.png",
    name: "Sabesh Bharathi",
    tagline: "Web/iOS Developer. UI/UX Designer.",
    age: 19,
    maindes: `Hello! I am Sabesh. I'm ${getAge(new Date(2001, 5, 5))} and come from Chennai, India.
    I am an adept Web Developer and find myself crawling towards
    the beauties and aesthetics of the web. I also work extensively
    with iOS using swift. I feel like it's every consumer's necessity
    to experience quality products, with a robust feature-set whilst
    enjoying a hassle-free User experience. I strive to make that possible
    in every product I develop/design.`,
    aboutdes: `Greetings. I am Sabesh. I am a web developer, iOS developer and
    a UI/UX designer. I work extensively with ReactJS and Swift/SwiftUI and aspire
    to create simple and good looking User Interfaces. I give equal importance to
    stylesheets and behavior, because I believe, together, they can spark magic. I've
    also had my share of backend experience with python (flask) and SQLAlchemy with a
    few full stack projects. I have a keen eye of layouts and colors and do my best to
    contribute to robust and good looking interfaces. And oh, I love Apple `,
    skillset: "ReactJS,Swift,SwiftUI,HTML,JS,CSS,Python,Django,Flask,Figma,XD,C++,OOP,DSA",
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
            ico:  "./assets/images/social/linkedin.png",
            link: "https://www.linkedin.com/in/sabesh-bharathi-40774524/"
        },
        {
            ico:  "./assets/images/social/medium.png",
            link: "https://medium.com/@sabstanceabuse"
        },
        {
            ico:  "./assets/images/social/github.png",
            link: "https://github.com/programVeins"
        }
    ]

}

export default me;