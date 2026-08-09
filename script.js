```javascript
/* ==========================================
   AI DISASTER RESPONSE ASSISTANT
   BASIC FUNCTIONAL PROTOTYPE
========================================== */

function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chatBox");

    const userMessage = input.value.trim();

    // Don't send an empty message
    if (userMessage === "") {
        return;
    }

    // Display user's message
    addMessage(userMessage, "user");

    // Clear input
    input.value = "";

    // Show typing indicator
    showTyping();

    // Generate response
    setTimeout(function () {

        removeTyping();

        const response =
            generateDisasterResponse(userMessage);

        addMessage(response, "ai");

    }, 800);
}


/* ==========================================
   ADD MESSAGE TO CHAT
========================================== */

function addMessage(message, sender) {

    const chatBox =
        document.getElementById("chatBox");

    const messageDiv =
        document.createElement("div");

    messageDiv.classList.add(
        "message",
        sender
    );

    const bubble =
        document.createElement("div");

    bubble.classList.add("bubble");

    bubble.innerHTML =
        message.replace(/\n/g, "<br>");

    messageDiv.appendChild(bubble);

    chatBox.appendChild(messageDiv);

    // Scroll to latest message
    chatBox.scrollTop =
        chatBox.scrollHeight;
}


/* ==========================================
   DISASTER RESPONSE KNOWLEDGE
========================================== */

function generateDisasterResponse(question) {

    const text =
        question.toLowerCase();


    /* FLOOD */

    if (
        text.includes("flood") ||
        text.includes("flooding")
    ) {

        return `
<strong>Flood Response Guidance</strong>

If flooding is occurring:

1. Move to a safe location away from rapidly rising water.
2. Follow official evacuation instructions.
3. Avoid walking or driving through floodwater.
4. Keep communication devices charged.
5. Take essential medicines, identification and important documents if evacuation is required.
6. Check on vulnerable people through safe channels.
7. Wait for official information before returning to an affected area.

For an actual emergency, follow instructions from local emergency authorities.
        `;
    }


    /* FIRE */

    if (
        text.includes("fire") ||
        text.includes("fire outbreak")
    ) {

        return `
<strong>Fire Emergency Guidance</strong>

During a fire emergency:

1. Alert people nearby.
2. Leave the affected building using a safe exit.
3. Stay away from smoke and the affected area.
4. Do not return to collect belongings.
5. Follow instructions from emergency responders.
6. Move to the designated safe assembly area.

Contact local emergency services when appropriate.
        `;
    }


    /* EARTHQUAKE */

    if (
        text.includes("earthquake") ||
        text.includes("earth quake")
    ) {

        return `
<strong>Earthquake Response Guidance</strong>

During an earthquake:

1. Move away from windows and objects that could fall.
2. Protect your head and neck.
3. Stay alert for additional hazards.
4. After the shaking stops, move carefully to a safe area if necessary.
5. Follow official emergency instructions.
        `;
    }


    /* EVACUATION */

    if (
        text.includes("evacuation") ||
        text.includes("evacuate")
    ) {

        return `
<strong>Evacuation Notice Template</strong>

EMERGENCY EVACUATION NOTICE

Residents in the affected area are advised to move to the designated safe location.

Please:

• Follow official evacuation instructions.
• Take essential personal items only.
• Keep children and vulnerable people with you.
• Follow designated evacuation routes.
• Do not return until authorities confirm that it is safe.

Stay calm and follow instructions from emergency responders.
        `;
    }


    /* EMERGENCY REPORT */

    if (
        text.includes("report") ||
        text.includes("disaster report")
    ) {

        return `
<strong>Disaster Report Checklist</strong>

A useful emergency report should include:

• Date and time
• Location
• Type of disaster
• Areas affected
• Estimated number of people affected
• Injuries or fatalities, if confirmed
• Infrastructure damage
• Available emergency resources
• Rescue activities
• Evacuation status
• Immediate needs
• Recommended next actions
        `;
    }


    /* TRANSLATION */

    if (
        text.includes("translate") ||
        text.includes("translation")
    ) {

        return `
<strong>Translation Assistant</strong>

Please provide the emergency message you want translated and specify the target language, such as:

• English
• Igbo
• Hausa
• Yoruba
• French

Example:

"Translate: Please move to the designated shelter into Igbo."
        `;
    }


    /* HELP */

    if (
        text.includes("help") ||
        text.includes("what can you do")
    ) {

        return `
<strong>I can help with:</strong>

🌊 Flood response

🔥 Fire emergency preparedness

🌍 Earthquake response

📢 Evacuation notices

📄 Disaster report structure

🌐 Emergency communication

📊 Disaster-response planning

🗺️ Situation information

Try asking:

"What should I do during a flood?"
        `;
    }


    /* DEFAULT RESPONSE */

    return `
I can help with disaster preparedness, response and recovery.

Try asking me something like:

• What should I do during a flood?
• How do I prepare an evacuation notice?
• What should a disaster report contain?
• How should emergency responders organize information?
• Help me create a public emergency message.

For a real emergency, always follow instructions from local emergency authorities.
    `;
}


/* ==========================================
   TYPING INDICATOR
========================================== */

function showTyping() {

    const chatBox =
        document.getElementById("chatBox");

    const typing =
        document.createElement("div");

    typing.id = "typing";

    typing.className =
        "message ai";

    typing.innerHTML = `
        <div class="bubble">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            AI is thinking...
        </div>
    `;

    chatBox.appendChild(typing);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function removeTyping() {

    const typing =
        document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


/* ==========================================
   PRESS ENTER TO SEND
========================================== */

document
    .getElementById("message")
    .addEventListener("keydown", function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();
        }

    });
```
