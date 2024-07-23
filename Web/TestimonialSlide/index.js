const testimonials = [
    {
        name: "George G",
        photoURL: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all." 
    },
    {
        name: "Bill H",
        photoURL: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so awesome. High fives!"
    },
    {
        name: "Mary L",
        photoURL: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.Thanks, guys!"
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let index = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, photoURL, text} = testimonials[index];
    imgEl.src = photoURL;
    textEl.innerText = text;
    userNameEl.innerText = name;
    index++;
    if(index === testimonials.length)
        index = 0;

    setTimeout(updateTestimonial, 2000);
}