const projects = [
    {
        id: 0,
        name: "Pandemic",
        description: "A submission for WWDC20 Swift Student Challenge. Made with Xcode playgrounds using Swift",
        extdes: "A WWDC20 Submission devloped with ❤️ by Sabesh Bharathi. The playground focuses on the COVID-19 Global pandemic that we face right now. While it might sound redundant at this point, people still are not following basic guidelines to counter the disease. This small playground is intended to educate these people on the basic Do's and Don'ts during these troubled times and warns them of the repercussions of careless actions.",
        link: "https://github.com/programVeins/Pandemic",
        img: "./assets/images/thumbs/pandemic.PNG",
        featured: true,
        techStack: "XCode Playground,Swift 5,UIKit,AVFoundation"
    },
    {
        id: 1,
        name: "Oneshot Affiliate",
        description: "A website made for the startup Oneshot Affiliate. Sign up to learn and earn with affiliate marketing",
        extdes: "A React-Flask app made for the startup, Oneshot Affiliate. It provides quality online courses, along with affiliate marketing so you can earn while you learn. For every referal, you recieve an incentive. Deployed on heroku, it's my first live debut website. Check it out!",
        link: "https://www.oneshotaffiliate.com/home",
        img: "./assets/images/thumbs/oneshot.PNG",
        featured: true,
        techStack: "Full Stack,ReactJS,Python-Flask,SQLAlchemy,PostgreSQL"
    },
    {
        id: 2,
        name: "Junker",
        description: "",
        extdes: "Junker is the result of days of annoyance, using my messages app on my iPhone. I received about 10 spam SMS's a day, and didn't want to install a filter software owing to privacy reasons. So made mine own. It has no database, it filters SMS's out if they have an '-' in the sender number (90% Indian spam SMS's are have a format of XY-00000) and if it finds words like 'oil spa' or 'discount'. It also carefully marks messages containing 'otp' or 'bank' as non-spam.",
        link: "https://github.com/programVeins/junker",
        img: "./assets/images/thumbs/junker.PNG",
        featured: true,
        techStack: "XCode,Swift 5,iMessage Target"
    },
    {
        id: 3,
        name: "CovidCam",
        description: "A hackathon winning prototype to trace the community spread of the virus Covid-19",
        extdes: "",
        link: "",
        img: "./assets/images/thumbs/covidcam.PNG",
        featured: false,
        techStack: "XCode,Swift 5,CoreLocation,MapKit"
    },
    {
        id: 4,
        name: "Pottermoney",
        description: "Currency convertor for Harry Potter currency, made with vanilla JS",
        extdes: "",
        link: "",
        img: "./assets/images/thumbs/gold.PNG",
        featured: false,
        techStack: "HTML,CSS,JS"
    },
]

export default projects;