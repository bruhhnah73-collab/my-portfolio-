const API_URL = "https://my-portfolio-bot-test.onrender.com";


// =====================================================
// ELEMENTS
// =====================================================

const themeToggle =
    document.getElementById("themeToggle");

const devMode =
    document.getElementById("devMode");

const developerTerminal =
    document.getElementById("developerTerminal");

const closeTerminal =
    document.getElementById("closeTerminal");

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");

const chatBubbleButton =
    document.getElementById("ai-chat-bubble-button");

const chatbotModal =
    document.getElementById("ai-chatbot-modal");

const closeChatbot =
    document.getElementById("close-chatbot");

const chatMessagesContainer =
    document.getElementById("chat-messages-container");

const chatUserInput =
    document.getElementById("chat-user-input");

const chatSendButton =
    document.getElementById("chat-send-btn");

const emailAssistantButton =
    document.getElementById("email-assistant-button");

const scrollProgress =
    document.getElementById("scrollProgress");

const startupScreen =
    document.getElementById("startup-screen");

const bootLines =
    document.getElementById("boot-lines");

const bootProgressBar =
    document.getElementById("boot-progress-bar");

const bootStatus =
    document.getElementById("boot-status");

const particles =
    document.getElementById("particles");
const exploreProjects =
    document.getElementById("exploreProjects");

const welcomeScreen =
    document.getElementById("welcome-screen");

const projectsSection =
    document.getElementById("projects-section");


// =====================================================
// STARTUP ANIMATION — FAST
// =====================================================

const bootSequence = [
    "BRUHH.DEV kernel starting...",
    "Loading portfolio interface...",
    "Loading project database...",
    "Loading AI systems...",
    "Loading automation systems...",
    "Loading developer tools...",
    "Scanning projects... 09 FOUND",
    "All systems initialized."
];


function runStartup() {

    if (!startupScreen) {
        return;
    }

    let index = 0;

    const interval = setInterval(() => {

        if (index >= bootSequence.length) {

            clearInterval(interval);

            bootStatus.textContent =
                "SYSTEM READY • ENTERING PORTFOLIO";

            bootProgressBar.style.width = "100%";

            // Much shorter final delay
            setTimeout(() => {

                // IMPORTANT:
                // CSS uses .hidden, not .hide
                startupScreen.classList.add("hidden");

                document.body.classList.add("loaded");

            }, 150);

            return;
        }


        const line =
            document.createElement("div");

        line.classList.add("boot-line");

        line.textContent =
            "> " + bootSequence[index];

        if (
            index === bootSequence.length - 1
        ) {

            line.classList.add("success");

        } else {

            line.classList.add("active");

        }

        bootLines.appendChild(line);

        index++;


        const progress =
            Math.round(
                (index / bootSequence.length) * 100
            );

        bootProgressBar.style.width =
            `${progress}%`;

        bootStatus.textContent =
            `LOADING SYSTEMS... ${progress}%`;

    }, 100); // Was 260ms
}

// =====================================================
// PARTICLE SYSTEM
// =====================================================

function createParticles() {

    if (!particles) {
        return;
    }

    const particleCount =
        window.innerWidth < 600
            ? 25
            : 45;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 15}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        particle.style.width =
            `${1 + Math.random() * 3}px`;

        particle.style.height =
            particle.style.width;

        particles.appendChild(particle);
    }
}


// =====================================================
// SCROLL PROGRESS
// =====================================================

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (documentHeight <= 0) {
        return;
    }

    const percentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${percentage}%`;
}

window.addEventListener(
    "scroll",
    updateScrollProgress
);


// =====================================================
// REVEAL PROJECT CARDS
// =====================================================

const revealCards =
    document.querySelectorAll(".reveal-card");

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


revealCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${Math.min(index * 0.07, 0.5)}s`;

    revealObserver.observe(card);

});


// =====================================================
// PROJECT COUNTER
// =====================================================

const projectCounter =
    document.getElementById("projectCounter");


function animateProjectCounter() {

    if (!projectCounter) {
        return;
    }

    let current = 0;

    const target = 9;

    const duration = 1000;

    const start =
        performance.now();


    function updateCounter(time) {

        const progress =
            Math.min(
                (time - start) / duration,
                1
            );

        current =
            Math.floor(
                progress * target
            );

        projectCounter.textContent =
            String(current).padStart(2, "0");


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        }

    }

    requestAnimationFrame(
        updateCounter
    );
}


// =====================================================
// DEVELOPER MODE
// =====================================================

devMode.addEventListener(
    "click",
    () => {

        developerTerminal.classList.add(
            "active"
        );

        document.body.classList.add(
            "developer-mode"
        );

        terminalOutput.innerHTML = "";

        const bootLines = [

            "BRUHH Developer Terminal v2.0",
            "",
            "Initializing developer environment...",
            "Loading portfolio........ OK",
            "Loading projects......... OK",
            "Loading AI systems....... OK",
            "Loading automation....... OK",
            "Loading developer tools.. OK",
            "",
            "🟢 SYSTEM ONLINE",
            "",
            "Type 'help' to see available commands."

        ];


        let index = 0;


        function showBootLine() {

            if (
                index >= bootLines.length
            ) {

                terminalInput.focus();

                return;
            }


            addTerminalLine(
                bootLines[index]
            );

            index++;

            setTimeout(
                showBootLine,
                100
            );
        }


        showBootLine();

    }
);


// =====================================================
// CLOSE DEVELOPER TERMINAL
// =====================================================

closeTerminal.addEventListener(
    "click",
    () => {

        developerTerminal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "developer-mode"
        );

    }
);


// =====================================================
// TERMINAL COMMANDS
// =====================================================

terminalInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Enter") {
            return;
        }

        let command =
            terminalInput.value
                .trim()
                .toLowerCase();


        if (!command) {
            return;
        }


        // COMMAND ALIASES

        if (command === "cls") {
            command = "clear";
        }

        if (command === "ls") {
            command = "projects";
        }

        if (command === "dir") {
            command = "projects";
        }


        // SHOW COMMAND

        const commandLine =
            document.createElement("p");

        commandLine.textContent =
            `> ${command}`;

        terminalOutput.appendChild(
            commandLine
        );


        terminalInput.value = "";


        // HELP

        if (command === "help") {

            addTerminalLine(
                "Available commands:"
            );

            addTerminalLine("");

            addTerminalLine(
                "help - Show available commands"
            );

            addTerminalLine(
                "projects - Show my projects"
            );

            addTerminalLine(
                "about - About BRUHH"
            );

            addTerminalLine(
                "skills - Show my skills"
            );

            addTerminalLine(
                "stack - Show my tech stack"
            );

            addTerminalLine(
                "whoami - Show developer profile"
            );

            addTerminalLine(
                "info - Show system overview"
            );

            addTerminalLine(
                "system - Show browser information"
            );

            addTerminalLine(
                "time - Show current time"
            );

            addTerminalLine(
                "date - Show current date"
            );

            addTerminalLine(
                "uptime - Show portfolio uptime"
            );

            addTerminalLine(
                "contact - Show contact information"
            );

            addTerminalLine(
                "banner - Show developer banner"
            );

            addTerminalLine(
                "dashboard - Show developer dashboard"
            );

            addTerminalLine(
                "status - Show system status"
            );

            addTerminalLine("");

            addTerminalLine(
                "open projects - Open projects section"
            );

            addTerminalLine(
                "open chatbot - Open AI chatbot"
            );

            addTerminalLine(
                "open email - Open AI Email Assistant"
            );

            addTerminalLine(
                "open portfolio - Close terminal"
            );

            addTerminalLine("");

            addTerminalLine(
                "theme dark - Switch to dark mode"
            );

            addTerminalLine(
                "theme light - Switch to light mode"
            );

            addTerminalLine("");

            addTerminalLine(
                "clear - Clear terminal"
            );

        }


        // PROJECTS

        else if (command === "projects") {

            addTerminalLine("📁 PROJECTS");

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                "[1] 🏫 School Admin Dashboard"
            );

            addTerminalLine(
                "[2] 🌐 Gyanodaya School Website"
            );

            addTerminalLine(
                "[3] 💬 Portfolio AI Chatbot"
            );

            addTerminalLine(
                "[4] 🤖 Custom Python AI Chatbot"
            );

            addTerminalLine(
                "[5] 📬 AI Email Assistant"
            );

            addTerminalLine(
                "[6] ☁️ Autonomous AI Social Media Pipeline"
            );

            addTerminalLine(
                "[7] 🚀 Project Showcase"
            );

            addTerminalLine(
                "[8] 🌦️ Weather Dashboard"
            );

            addTerminalLine(
                "[9] ⚡ Electronic Lab"
            );

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                "Total projects: 9"
            );

        }


        // ABOUT

        else if (command === "about") {

            addTerminalLine("BRUHH");

            addTerminalLine("");

            addTerminalLine(
                "Student | AI Builder | Web Developer | Tech Explorer"
            );

            addTerminalLine("");

            addTerminalLine(
                "Currently experimenting with AI, automation, APIs and web development."
            );

        }


        // SKILLS

        else if (command === "skills") {

            addTerminalLine("🧠 SKILLS");

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine("🐍 Python");

            addTerminalLine(
                "🌐 HTML / CSS / JavaScript"
            );

            addTerminalLine("⚡ FastAPI");

            addTerminalLine(
                "🤖 AI Integration"
            );

            addTerminalLine("🔗 APIs");

            addTerminalLine(
                "⚙️ Automation"
            );

            addTerminalLine(
                "🔌 Electronics"
            );

        }


        // STACK

        else if (command === "stack") {

            addTerminalLine("🛠️ TECH STACK");

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine("Python");
            addTerminalLine("JavaScript");
            addTerminalLine("HTML / CSS");
            addTerminalLine("FastAPI");
            addTerminalLine("Groq");
            addTerminalLine("OpenRouter");
            addTerminalLine("Make.com");
            addTerminalLine("Zapier");
            addTerminalLine("GitHub");
            addTerminalLine("Streamlit");

        }


        // WHOAMI

        else if (command === "whoami") {

            addTerminalLine("👤 BRUHH");

            addTerminalLine("");

            addTerminalLine(
                "🎓 Student Developer"
            );

            addTerminalLine(
                "🤖 AI Builder"
            );

            addTerminalLine(
                "🌐 Web Developer"
            );

            addTerminalLine(
                "⚡ Tech Explorer"
            );

        }


        // INFO

        else if (command === "info") {

            addTerminalLine(
                "ℹ️ SYSTEM OVERVIEW"
            );

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                "Portfolio       🟢 ONLINE"
            );

            addTerminalLine(
                "AI Chatbot      🟢 CONNECTED"
            );

            addTerminalLine(
                "Email Assistant 🟢 ONLINE"
            );

            addTerminalLine(
                "Developer Mode  🟢 ACTIVE"
            );

            addTerminalLine(
                "Projects        09"
            );

            addTerminalLine(
                "AI Systems      2+"
            );

        }


        // SYSTEM

        else if (command === "system") {

            addTerminalLine(
                "💻 SYSTEM INFORMATION"
            );

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                `Browser: ${navigator.userAgent}`
            );

            addTerminalLine(
                `Platform: ${navigator.platform}`
            );

            addTerminalLine(
                `Language: ${navigator.language}`
            );

            addTerminalLine(
                `Screen: ${window.screen.width} × ${window.screen.height}`
            );

        }


        // TIME

        else if (command === "time") {

            const currentTime =
                new Date().toLocaleTimeString();

            addTerminalLine(
                `🕒 Current time: ${currentTime}`
            );

        }


        // DATE

        else if (command === "date") {

            const currentDate =
                new Date().toLocaleDateString();

            addTerminalLine(
                `📅 Current date: ${currentDate}`
            );

        }


        // UPTIME

        else if (command === "uptime") {

            const launchDate =
                new Date(
                    "2026-01-01T00:00:00"
                );

            const now =
                new Date();

            const difference =
                now - launchDate;

            const days =
                Math.floor(
                    difference /
                    (1000 * 60 * 60 * 24)
                );

            addTerminalLine(
                "⏱️ PORTFOLIO UPTIME"
            );

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                `${days} days since developer system launch`
            );

        }


        // CONTACT

        else if (command === "contact") {

            addTerminalLine("📡 CONTACT");

            addTerminalLine(
                "────────────────────────"
            );

            addTerminalLine(
                "Check the Contact section of the portfolio."
            );

            addTerminalLine(
                "You can also use the Email Assistant."
            );

        }


        // BANNER

        else if (command === "banner") {

            addTerminalLine("");

            addTerminalLine(
                "██████╗ ██████╗ ██╗   ██╗██╗  ██╗"
            );

            addTerminalLine(
                "██╔══██╗██╔══██╗██║   ██║██║  ██║"
            );

            addTerminalLine(
                "██████╔╝██████╔╝██║   ██║███████║"
            );

            addTerminalLine(
                "██╔══██╗██╔══██╗██║   ██║██╔══██║"
            );

            addTerminalLine(
                "██████╔╝██║  ██║╚██████╔╝██║  ██║"
            );

            addTerminalLine(
                "╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝"
            );

            addTerminalLine("");

            addTerminalLine(
                "AI BUILDER • WEB DEVELOPER • AUTOMATION"
            );

        }


        // DASHBOARD

        else if (command === "dashboard") {

            addTerminalLine("");

            addTerminalLine(
                "╔══════════════════════════════╗"
            );

            addTerminalLine(
                "║     BRUHH DEVELOPER SYSTEM   ║"
            );

            addTerminalLine(
                "╠══════════════════════════════╣"
            );

            addTerminalLine(
                "║ Portfolio       🟢 ONLINE     ║"
            );

            addTerminalLine(
                "║ AI Chatbot      🟢 ONLINE     ║"
            );

            addTerminalLine(
                "║ Email Agent     🟢 ONLINE     ║"
            );

            addTerminalLine(
                "║ Projects        09            ║"
            );

            addTerminalLine(
                "║ Developer Mode  🟢 ACTIVE     ║"
            );

            addTerminalLine(
                "╚══════════════════════════════╝"
            );

            addTerminalLine("");

        }


        // STATUS

        else if (command === "status") {

            addTerminalLine(
                "🟢 Developer Mode: ACTIVE"
            );

            addTerminalLine(
                "🟢 Portfolio: ONLINE"
            );

            addTerminalLine(
                "🟢 AI Chatbot: CONNECTED"
            );

            addTerminalLine(
                "🟢 Email Assistant: ONLINE"
            );

            addTerminalLine(
                "🟢 Projects: 09"
            );

        }


        // OPEN PROJECTS

        else if (command === "open projects") {

            addTerminalLine(
                "📁 Opening projects..."
            );

            const projectsSection =
                document.querySelector(
                    ".portfolio-container"
                );

            if (projectsSection) {

                developerTerminal.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "developer-mode"
                );

                projectsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }


        // OPEN CHATBOT

        else if (command === "open chatbot") {

            addTerminalLine(
                "💬 Opening Portfolio AI Chatbot..."
            );

            setTimeout(() => {

                developerTerminal.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "developer-mode"
                );

                chatbotModal.classList.add(
                    "active"
                );

                chatUserInput.focus();

            }, 250);

        }


        // OPEN EMAIL

        else if (command === "open email") {

            addTerminalLine(
                "📬 Opening AI Email Assistant..."
            );

            window.open(
                "https://email-agent-panel.onrender.com/",
                "_blank"
            );

        }


        // OPEN PORTFOLIO

        else if (command === "open portfolio") {

            addTerminalLine(
                "🌐 Returning to portfolio..."
            );

            setTimeout(() => {

                developerTerminal.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "developer-mode"
                );

            }, 300);

        }


        // DARK MODE

        else if (command === "theme dark") {

            document.body.classList.remove(
                "light-mode"
            );

            themeToggle.textContent =
                "☀️ Light Mode";

            addTerminalLine(
                "🌙 Dark mode activated."
            );

        }


        // LIGHT MODE

        else if (command === "theme light") {

            document.body.classList.add(
                "light-mode"
            );

            themeToggle.textContent =
                "🌙 Dark Mode";

            addTerminalLine(
                "☀️ Light mode activated."
            );

        }


        // CLEAR

        else if (command === "clear") {

            terminalOutput.innerHTML = "";

        }


        // UNKNOWN

        else {

            addTerminalLine(
                `❌ Unknown command: ${command}`
            );

            addTerminalLine(
                "Type 'help' to see available commands."
            );

        }


        terminalOutput.scrollTop =
            terminalOutput.scrollHeight;

    }
);


// =====================================================
// TERMINAL OUTPUT HELPER
// =====================================================

function addTerminalLine(text) {

    const line =
        document.createElement("p");

    line.textContent = text;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


// =====================================================
// THEME TOGGLE
// =====================================================

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeToggle.textContent =
                "🌙 Dark Mode";

        } else {

            themeToggle.textContent =
                "☀️ Light Mode";

        }

    }
);


// =====================================================
// OPEN CHATBOT
// =====================================================

chatBubbleButton.addEventListener(
    "click",
    () => {

        chatbotModal.classList.add(
            "active"
        );

        chatUserInput.focus();

    }
);


// =====================================================
// CLOSE CHATBOT
// =====================================================

closeChatbot.addEventListener(
    "click",
    () => {

        chatbotModal.classList.remove(
            "active"
        );

    }
);


// =====================================================
// SEND MESSAGE
// =====================================================

async function sendMessage() {

    const message =
        chatUserInput.value.trim();


    if (!message) {
        return;
    }


    addMessage(
        message,
        "user"
    );


    chatUserInput.value = "";

    chatSendButton.disabled = true;


    const thinkingMessage =
        addMessage(
            "Thinking...",
            "assistant"
        );


    try {

        const response =
            await fetch(
                `${API_URL}/chat`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        message: message
                    })
                }
            );


        if (!response.ok) {

            throw new Error(
                "Backend request failed."
            );

        }


        const data =
            await response.json();


        thinkingMessage.remove();


        addMessage(
            data.response,
            "assistant"
        );


    } catch (error) {

        thinkingMessage.remove();

        addMessage(
            "Sorry, I couldn't connect to my AI backend right now.",
            "assistant"
        );

        console.error(error);

    } finally {

        chatSendButton.disabled = false;

        chatUserInput.focus();

    }

}


// =====================================================
// ADD CHAT MESSAGE
// =====================================================

function addMessage(
    message,
    sender
) {

    const messageBubble =
        document.createElement("div");


    messageBubble.classList.add(
        "chat-bubble",
        sender === "user"
            ? "user-bubble"
            : "assistant-bubble"
    );


    messageBubble.textContent =
        message;


    chatMessagesContainer.appendChild(
        messageBubble
    );


    chatMessagesContainer.scrollTop =
        chatMessagesContainer.scrollHeight;


    return messageBubble;
}


// =====================================================
// SEND BUTTON
// =====================================================

chatSendButton.addEventListener(
    "click",
    sendMessage
);


// =====================================================
// ENTER KEY
// =====================================================

chatUserInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


// =====================================================
// EMAIL ASSISTANT
// =====================================================

emailAssistantButton.addEventListener(
    "click",
    () => {

        window.open(
            "https://email-agent-panel.onrender.com/",
            "_blank"
        );

    }
);


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        developerTerminal.classList.remove(
            "active"
        );

        chatbotModal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "developer-mode"
        );

    }
);

// =====================================================
// ENTER PROJECTS SCREEN
// =====================================================

if (exploreProjects) {

    exploreProjects.addEventListener(
        "click",
        () => {

            document.body.classList.add(
                "projects-entered"
            );

            setTimeout(() => {

                if (projectsSection) {

                    projectsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 150);

        }
    );

}

// =====================================================
// START EVERYTHING
// =====================================================

createParticles();

updateScrollProgress();

setTimeout(
    runStartup,
    300
);

setTimeout(
    animateProjectCounter,
    3300
);