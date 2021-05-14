const projects = [
    {
        id: 0,
        name: "Ruby's Dilemma",
        description: "A submission for WWDC21 Swift Student Challenge. Made with Swift playgrounds with SwiftUI",
        extdes: "Meet Ruby the Rabbit 🐰 and delve into her life as you experience this Swift Playground, written in the form of a playgroundbook. Stay with Ruby and help her in various activities until you find out that there's a stunning revelation waiting for you! Designed and Developed with ❤️ for WWDC 2021 by Sabesh Bharathi",
        link: "https://github.com/programVeins/rubysdilemma",
        img: "./assets/images/thumbs/rabbit.png",
        featured: true,
        techStack: "SwiftUI,AVFoundation,RealityKit,ARKit"
    },
    {
        id: 1,
        name: "Pandemic",
        description: "A submission for WWDC20 Swift Student Challenge. Made with Xcode playgrounds using Swift",
        extdes: "A WWDC20 Submission devloped with ❤️ by Sabesh Bharathi. The playground focuses on the COVID-19 Global pandemic that we face right now. While it might sound redundant at this point, people still are not following basic guidelines to counter the disease. This small playground is intended to educate these people on the basic Do's and Don'ts during these troubled times and warns them of the repercussions of careless actions.",
        link: "https://github.com/programVeins/Pandemic",
        img: "./assets/images/thumbs/pandemic.png",
        featured: true,
        techStack: "XCode Playground,Swift 5,UIKit,AVFoundation"
    },
    {
        id: 2,
        name: "Oneshot Affiliate",
        description: "A website made for the startup Oneshot Affiliate. Sign up to learn and earn with affiliate marketing",
        extdes: "A React-Flask app made for the startup, Oneshot Affiliate. It provides quality online courses, along with affiliate marketing so you can earn while you learn. For every referal, you recieve an incentive. Deployed on heroku, it's my first live debut website. Check it out!",
        link: "https://www.oneshotaffiliate.com/home",
        img: "./assets/images/thumbs/oneshot.png",
        featured: true,
        techStack: "Full Stack,ReactJS,Python-Flask,SQLAlchemy,PostgreSQL"
    },
    {
        id: 3,
        name: "SteamPunk",
        description: "A retrofuturistic sci-fi theme to stir up various elements of nostalgic science fantasy as you hack away with VSCode",
        extdes: "A Quick project that I ended up making because I didn't like any VSCode theme 100%. I decided to make mine own, to match the vibe I expected. I knew it had to be steampunk based and thus was born this theme, in just about one day and a crave for a Steampunk-ish VSCode vibe.",
        link: "https://marketplace.visualstudio.com/items?itemName=sabeshbharathi.steampunk",
        img: "./assets/images/thumbs/steampunk.png",
        featured: false,
        techStack: "CSS, VSCode, Theme"
    },
    {
        id: 4,
        name: "Junker",
        description: "An iOS (iMessage) tool made to filter out spam SMS's without invading privacy. Made with swift",
        extdes: "Junker is the result of days of annoyance, using my messages app on my iPhone. I received about 10 spam SMS's a day, and didn't want to install a filter software owing to privacy reasons. So I made mine own. It has no database, it filters SMS's out if they have an '-' in the sender number (90% Indian spam SMS's are have a format of XY-00000) and if it finds words like 'oil spa' or 'discount'. It also carefully marks messages containing 'otp' or 'bank' as non-spam.",
        link: "https://github.com/programVeins/junker",
        img: "./assets/images/thumbs/junker.png",
        featured: false,
        techStack: "XCode,Swift 5,iMessage Target"
    },
    {
        id: 5,
        name: "CovidCam",
        description: "A hackathon winning prototype to trace the community spread of the virus Covid-19",
        extdes: "CovidCam is a hackathon winning prototype to trace community spread of the Covid-19 virus. It uses CoreLocation to trace user location and marks it with a timestamp at regular intervals of time, when it senses that the user is moving. This way, we can easily and effectively trace community spread.",
        link: "https://ieeecovidmove.in/ieee-covidmove-online-hackathon-challenge-results/",
        img: "./assets/images/thumbs/covidcam.png",
        featured: false,
        techStack: "XCode,Swift 5,CoreLocation,MapKit"
    },
    {
        id: 6,
        name: "Pottermoney",
        description: "Currency convertor for Harry Potter currency, made with vanilla JS",
        extdes: "It is one of my first projects made with vanilla HTML, CSS and JS. Inspired by Harry Potter, it's a currency convertor between Galleons, Sickles and Knuts, the currencies of the Potterverse.",
        link: "https://github.com/programVeins/pottermoney",
        img: "./assets/images/thumbs/gold.png",
        featured: false,
        techStack: "HTML,CSS,JS"
    },
    
]

export default projects;