/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections =
document.querySelectorAll("section[id]");

const navItems =
document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});




/* =========================================================
   PREMIUM NAVIGATION SCROLL
========================================================= */

document.querySelectorAll('.nav-link')
.forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        const targetId =
        link.getAttribute('href');

        const targetSection =
        document.querySelector(targetId);

        if(targetSection){

            window.scrollTo({

                top:
                targetSection.offsetTop,

                behavior:'smooth'

            });

        }

    });

});









/* =========================================================
   ABOUT SECTION PREMIUM SCROLL
========================================================= */

const aboutSection = document.querySelector('.about-story-section');

const progressFill = document.querySelector('.progress-fill');

const progressIndicator = document.querySelector('.progress-indicator');

const aboutContentWrapper =
document.querySelector('.about-content-wrapper');

/* =========================================================
   SCROLL EFFECT
========================================================= */

window.addEventListener('scroll', () => {

    const rect =
    aboutSection.getBoundingClientRect();

    const sectionTop = rect.top;

    const totalScroll =
    aboutSection.offsetHeight - window.innerHeight;

    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    let progress =
    Math.min(
    Math.max((-sectionTop / totalScroll), 0),
    1
    );

    /* =====================================================
       PROGRESS LINE
    ===================================================== */

    progressFill.style.height =
    `${progress * 100}%`;

    progressIndicator.style.top =
    `calc(${progress * 100}% - 10px)`;

    /* =====================================================
       CONTENT SCROLLING
    ===================================================== */

    const wrapperHeight =
    aboutContentWrapper.scrollHeight;

    const visibleHeight =
    document.querySelector('.about-right-side').clientHeight;

    const maxTranslate =
    wrapperHeight - visibleHeight;

    const moveY =
    progress * maxTranslate;

    aboutContentWrapper.style.transform =
    `translateY(-${moveY}px)`;

});






/* =========================
   CHATBOT (TRAVEL AGENCY)
   RA 'G TRAVEL AND TOURS AI ASSISTANT
========================= */

document.addEventListener("DOMContentLoaded", () => {

const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

if (!chatToggle || !chatbox) return;

/* =========================
   MEMORY
========================= */

let selectedQA = null;
let questionHistory = {};

/* =========================
   DATA
========================= */

const qa = [

{
    q: [
        "✈️ How do I choose the best travel package?",
        "✈️ Tell me more about available destinations",
        "✈️ Explore deeper into tour packages",
        "✈️ What are the most popular destinations?",
        "✈️ How do travel itineraries work?",
        "✈️ Final details about travel packages"
    ],

    a: [

`Choosing the best travel package depends on your budget, preferred destination, travel dates, and the type of experience you want. Whether you prefer adventure, relaxation, or cultural exploration, we offer curated packages to match your needs.`,

`Our travel agency offers a wide range of destinations including local tours, island getaways, cultural trips, and international packages. Each destination is carefully planned to give travelers a smooth and enjoyable experience.`,

`Our tour packages include accommodations, transportation, guided tours, and optional activities. You can customize your package depending on your preferences and travel style for a more personalized experience.`,

`Some of the most popular destinations include beach resorts, heritage sites, mountain escapes, and city tours. Each destination offers unique experiences suitable for solo travelers, families, and groups.`,

`Travel itineraries are carefully planned schedules that organize your activities, accommodations, and transport. This ensures a smooth and stress-free travel experience from start to finish.`,

`This is the final detail about travel packages. Our goal is to provide safe, affordable, and memorable travel experiences while making planning as easy as possible for every traveler.`
    ]
},

{
    q: [
        "🧳 What services does Ra 'G Travel and Tours offer?",
        "🧳 Learn more about our travel services",
        "🧳 Discover deeper service options",
        "🧳 Do you offer customized travel planning?",
        "🧳 How do travel consultations work?",
        "🧳 Final details about our services"
    ],

    a: [

`Ra 'G Travel and Tours offers a variety of services including flight booking, hotel reservations, tour packages, and travel assistance. We aim to make your travel planning simple and convenient.`,

`We provide both local and international travel services tailored to your needs. Our team ensures that every detail of your trip is well-organized and stress-free.`,

`We also offer group tours, family packages, and educational trips. Each service is designed to provide comfort, safety, and a memorable experience for all travelers.`,

`Yes, we offer customized travel planning based on your preferences, budget, and schedule. You can request specific destinations and activities for a more personalized trip.`,

`Travel consultations help you choose the best destinations, packages, and schedules. Our team guides you step-by-step to ensure a smooth planning process.`,

`This is the final detail about our services. We are committed to delivering reliable, affordable, and high-quality travel solutions for every client.`
    ]
},

{
    q: [
        "📅 How does the booking process work?",
        "📅 Learn more about booking your trip",
        "📅 Explore the reservation process",
        "📅 What are the payment options?",
        "📅 Can I modify or cancel my booking?",
        "📅 Final details about booking"
    ],

    a: [

`Booking with Ra 'G Travel and Tours is simple. You can choose your destination, select a package, and contact our team to confirm your reservation.`,

`Once you choose a package, our team will assist you with availability, pricing, and scheduling to make sure everything fits your plan.`,

`The reservation process includes selecting your travel dates, confirming accommodations, and finalizing transportation arrangements.`,

`We offer flexible payment options including bank transfer, e-wallets, and installment plans depending on the package selected.`,

`Yes, modifications and cancellations are allowed depending on the terms of your booking. We always aim to provide flexible travel solutions.`,

`This is the final detail about booking. Our process is designed to be easy, fast, and secure so you can focus on enjoying your trip.`
    ]
},

{
    q: [
        "🌍 How does Ra 'G Travel and Tours help travelers?",
        "🌍 Learn more about our mission",
        "🌍 Discover our travel values",
        "🌍 What makes your agency different?",
        "🌍 How do you ensure safe travel?",
        "🌍 Final details about our agency"
    ],

    a: [

`Ra 'G Travel and Tours helps travelers by providing affordable, organized, and memorable travel experiences designed for all types of customers.`,

`Our mission is to make travel accessible and enjoyable while promoting cultural appreciation and meaningful experiences.`,

`We value trust, safety, customer satisfaction, and quality service in every trip we organize for our clients.`,

`What makes us different is our personalized approach, student-driven creativity, and commitment to excellent travel service.`,

`We ensure safe travel by working with trusted partners, verified accommodations, and reliable transportation providers.`,

`This is the final detail about our agency. We aim to inspire people to explore the world with confidence and ease.`
    ]
}

];

/* =========================
   OPEN / CLOSE
========================= */

chatToggle.onclick = () => {
    chatbox.style.display = "flex";
};

if (closeChat){
    closeChat.onclick = () => {
        chatbox.style.display = "none";
    };
}

/* =========================
   CREATE MESSAGE
========================= */

function createMessage(text, type){

    const msg = document.createElement("div");

    msg.className = `msg ${type}`;

    const formattedText = text.replace(/\n\n/g, "<br><br>");

    if(type === "bot"){

        msg.innerHTML = `
            <img src="../IMG/divine.jpg" class="pfp">
            <span>${formattedText}</span>
        `;

    } else {

        msg.innerHTML = formattedText;
    }

    return msg;
}

/* =========================
   CREATE QUESTIONS
========================= */

function createQuestions(){

    const container = document.createElement("div");

    container.id = "questionContainer";

    qa.forEach(item => {

        const btn = document.createElement("button");

        btn.className = "question-btn";

        btn.textContent = item.q[0];

        btn.onclick = () => {

            selectedQA = {
                item: item,
                button: btn
            };

            document.querySelectorAll(".question-btn")
                .forEach(b => b.classList.remove("selected"));

            btn.classList.add("selected");

            chatInput.value = btn.textContent;

            sendBtn.classList.add("active");
        };

        container.appendChild(btn);
    });

    return container;
}

/* =========================
   START CHAT
========================= */

function startChat(){

    chatBody.innerHTML = "";

    const intro = createMessage(
`Hello! 👋 I’m Divine, your AI travel assistant from Ra 'G Travel and Tours.

I’m here to help you explore destinations, travel packages, booking steps, and everything you need for your next adventure. Just select a question below to get started!`,
        "bot"
    );

    chatBody.appendChild(intro);

    chatBody.appendChild(createQuestions());
}

/* =========================
   SEND MESSAGE
========================= */

function sendMessage(){

    if (!selectedQA) return;

    const selected = selectedQA.item;
    const button = selectedQA.button;

    const key = selected.q[0];

    if (!questionHistory[key]) {
        questionHistory[key] = 0;
    }

    const currentLevel = Math.min(
        questionHistory[key],
        selected.q.length - 1
    );

    const userText = selected.q[currentLevel];

    chatBody.appendChild(createMessage(userText, "user"));
    chatBody.scrollTop = chatBody.scrollHeight;

    chatInput.value = "";
    sendBtn.classList.remove("active");

    document.querySelectorAll(".question-btn")
        .forEach(b => b.classList.remove("selected"));

    selectedQA = null;

    const typing = createMessage("...", "bot");
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {

        typing.remove();

        const answerIndex = Math.min(
            questionHistory[key],
            selected.a.length - 1
        );

        const response = selected.a[answerIndex];

        chatBody.appendChild(createMessage(response, "bot"));
        chatBody.scrollTop = chatBody.scrollHeight;

        questionHistory[key]++;

        const nextLevel = Math.min(
            questionHistory[key],
            selected.q.length - 1
        );

        button.textContent = selected.q[nextLevel];

    }, 1200);
}

/* =========================
   EVENTS
========================= */

sendBtn.onclick = sendMessage;

if(chatInput){
    chatInput.onkeydown = (e) => e.preventDefault();
}

/* =========================
   INIT
========================= */

startChat();

});



/* =====================================================
   EXPLORE MODAL
===================================================== */

const exploreModal =
document.getElementById("exploreModal");

const openExploreModal =
document.getElementById("openExploreModal");

const closeExploreModal =
document.getElementById("closeExploreModal");

/* OPEN */

openExploreModal.addEventListener("click", (e)=>{

    e.preventDefault();

    exploreModal.classList.add("active");

    document.body.style.overflow = "hidden";

});

/* CLOSE BUTTON */

closeExploreModal.addEventListener("click", ()=>{

    closeExplore();

});

/* CLOSE FUNCTION */

function closeExplore(){

    exploreModal.classList.remove("active");

    document.body.style.overflow = "auto";

}

/* CLOSE OUTSIDE */

exploreModal.addEventListener("click", (e)=>{

    if(e.target === exploreModal ||
       e.target.classList.contains("explore-overlay")){

        closeExplore();

    }

});

/* ESC KEY */

document.addEventListener("keydown", (e)=>{

    if(e.key === "Escape"){

        closeExplore();

    }

});




function showMessage(event){

    event.preventDefault();

    document
    .getElementById("socialPopup")
    .classList.add("active");

}

function closePopup(){

    document
    .getElementById("socialPopup")
    .classList.remove("active");

}

/* OPTIONAL:
   CLOSE POPUP WHEN CLICKING OUTSIDE */

window.onclick = function(event){

    const popup =
    document.getElementById("socialPopup");

    if(event.target === popup){

        popup.classList.remove("active");

    }

}

