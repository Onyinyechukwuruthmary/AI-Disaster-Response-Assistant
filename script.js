```javascript
/* ==========================================================
   AI DISASTER RESPONSE ASSISTANT
   FUNCTIONAL CHATBOX
   ========================================================== */


/* ==========================================================
   SEND MESSAGE
   ========================================================== */

function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chatBox");

    // Check that the chat elements exist
    if (!input || !chatBox) {
        console.error("Chatbox elements were not found.");
        return;
    }

    const userQuestion = input.value.trim();

    // Don't send empty messages
    if (userQuestion === "") {
        return;
    }

    // Display user's question
    addMessage(userQuestion, "user");

    // Clear input
    input.value = "";

    // Show AI typing
    showTyping();

    // Simulate AI thinking
    setTimeout(function () {

        removeTyping();

        const answer =
            generateDisasterResponse(userQuestion);

        addMessage(answer, "ai");

    }, 700);
}


/* ==========================================================
   ADD MESSAGE TO CHAT
   ========================================================== */

function addMessage(message, sender) {

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) {
        return;
    }

    const messageDiv =
        document.createElement("div");

    messageDiv.classList.add(
        "message",
        sender
    );

    const bubble =
        document.createElement("div");

    bubble.classList.add("bubble");

    /*
       We use innerHTML because the AI responses
       contain <strong>, <br>, etc.
    */

    bubble.innerHTML =
        message.replace(/\n/g, "<br>");

    messageDiv.appendChild(bubble);

    chatBox.appendChild(messageDiv);

    // Automatically scroll to the latest message
    chatBox.scrollTop =
        chatBox.scrollHeight;
}


/* ==========================================================
   AI DISASTER RESPONSE ENGINE
   ========================================================== */

function generateDisasterResponse(question) {

    const text =
        question.toLowerCase().trim();


    /* ======================================================
       GREETINGS
       ====================================================== */

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {

        return `
<strong>👋 Hello!</strong>

I am your <strong>AI Disaster Response Assistant</strong>.

I can help you with:

🌊 Flood emergencies

🔥 Fire emergencies

🌍 Earthquakes

⛈️ Storms and severe weather

🚨 Evacuation planning

🚑 Rescue coordination

🏠 Emergency shelters

📄 Disaster reports

🛡️ Disaster preparedness

📢 Emergency communication

Ask me a disaster-response question and I will try to help.
        `;
    }


    /* ======================================================
       FLOOD
       ====================================================== */

    if (
        text.includes("flood") ||
        text.includes("flooding") ||
        text.includes("flood water") ||
        text.includes("rising water")
    ) {

        return `
<strong>🌊 FLOOD RESPONSE GUIDANCE</strong>

If flooding is occurring:

<strong>1. Move to safety</strong>
Move away from rapidly rising water and follow official evacuation instructions.

<strong>2. Avoid floodwater</strong>
Do not walk or drive through moving or unknown-depth floodwater.

<strong>3. Follow official information</strong>
Listen to emergency responders and trusted local authorities.

<strong>4. Protect important items</strong>
If there is enough time and it is safe, secure important documents and essential supplies.

<strong>5. Help vulnerable people safely</strong>
Check on children, older people and people who may need additional assistance, without putting yourself at risk.

<strong>6. Do not return too early</strong>
Wait for authorities to confirm that affected areas are safe.

For an actual emergency, follow instructions from local emergency authorities.
        `;
    }


    /* ======================================================
       FIRE
       ====================================================== */

    if (
        text.includes("fire") ||
        text.includes("fire outbreak") ||
        text.includes("building fire")
    ) {

        return `
<strong>🔥 FIRE EMERGENCY GUIDANCE</strong>

During a fire:

<strong>1.</strong> Alert people nearby.

<strong>2.</strong> Leave the affected building using the safest available exit.

<strong>3.</strong> Stay away from smoke and the fire area.

<strong>4.</strong> Do not return to collect belongings.

<strong>5.</strong> Move to a safe assembly point.

<strong>6.</strong> Follow instructions from firefighters and emergency responders.

If someone is trapped or the fire is spreading, contact the appropriate emergency services immediately.
        `;
    }


    /* ======================================================
       EARTHQUAKE
       ====================================================== */

    if (
        text.includes("earthquake") ||
        text.includes("earth quake") ||
        text.includes("earth tremor")
    ) {

        return `
<strong>🌍 EARTHQUAKE RESPONSE</strong>

During an earthquake:

<strong>• Protect yourself.</strong>
Move away from windows and objects that could fall.

<strong>• Protect your head and neck.</strong>

<strong>• Stay alert.</strong>
Be aware of additional hazards after the shaking stops.

<strong>• Move carefully.</strong>
If you need to leave, use a safe route and avoid damaged structures.

<strong>• Follow official instructions.</strong>

Emergency responders should assess damaged buildings and affected communities before re-entry.
        `;
    }


    /* ======================================================
       STORM
       ====================================================== */

    if (
        text.includes("storm") ||
        text.includes("heavy rain") ||
        text.includes("thunderstorm") ||
        text.includes("strong wind")
    ) {

        return `
<strong>⛈️ STORM RESPONSE GUIDANCE</strong>

During severe weather:

• Stay indoors when authorities advise doing so.

• Keep away from windows.

• Secure loose outdoor objects when it is safe to do so.

• Monitor official weather and emergency information.

• Avoid unnecessary travel.

• Be careful around fallen trees, damaged structures and electrical hazards.

• Follow evacuation instructions if authorities issue them.
        `;
    }


    /* ======================================================
       EVACUATION
       ====================================================== */

    if (
        text.includes("evacuation") ||
        text.includes("evacuate") ||
        text.includes("evacuation notice")
    ) {

        return `
<strong>🚨 EVACUATION GUIDANCE</strong>

A good emergency evacuation notice should contain:

<strong>1. Emergency:</strong>
Clearly state what has happened.

<strong>2. Location:</strong>
Identify the affected area.

<strong>3. People affected:</strong>
State who should evacuate.

<strong>4. Destination:</strong>
Provide the designated safe location or shelter.

<strong>5. Route:</strong>
Provide the recommended evacuation route if confirmed.

<strong>6. Safety instructions:</strong>
Tell residents what they should and should not do.

<strong>Example:</strong>

EMERGENCY EVACUATION NOTICE

Residents in the affected area are advised to move to the designated safe location and follow instructions from emergency responders.

Remain calm and follow official emergency instructions.
        `;
    }


    /* ======================================================
       RESCUE
       ====================================================== */

    if (
        text.includes("rescue") ||
        text.includes("rescue team") ||
        text.includes("rescue operation")
    ) {

        return `
<strong>🚑 RESCUE RESPONSE</strong>

An emergency rescue operation should prioritize:

• Responder safety.

• Rapid assessment of the affected area.

• Identification of people requiring urgent assistance.

• Communication between response teams.

• Safe access and evacuation routes.

• Coordination with medical teams and shelters.

• Accurate documentation of the operation.

Do not enter dangerous or structurally unstable areas without appropriate training, equipment and authorization.
        `;
    }


    /* ======================================================
       EMERGENCY SHELTER
       ====================================================== */

    if (
        text.includes("shelter") ||
        text.includes("emergency shelter") ||
        text.includes("temporary shelter")
    ) {

        return `
<strong>🏠 EMERGENCY SHELTER GUIDANCE</strong>

An emergency shelter should ideally provide:

• Safe accommodation.

• Clean drinking water.

• Basic sanitation.

• Food and essential supplies.

• First-aid or medical support.

• Registration and information services.

• Communication facilities.

• Special consideration for children, older people and people with disabilities.

Shelter information should be communicated clearly to affected communities.
        `;
    }


    /* ======================================================
       DISASTER PREPAREDNESS
       ====================================================== */

    if (
        text.includes("preparedness") ||
        text.includes("prepare for disaster") ||
        text.includes("disaster preparation") ||
        text.includes("how do i prepare")
    ) {

        return `
<strong>🛡️ DISASTER PREPAREDNESS</strong>

Good disaster preparedness includes:

<strong>1.</strong> Identify major hazards in your area.

<strong>2.</strong> Prepare emergency contact information.

<strong>3.</strong> Know evacuation routes.

<strong>4.</strong> Identify safe locations.

<strong>5.</strong> Keep essential documents accessible.

<strong>6.</strong> Prepare essential emergency supplies.

<strong>7.</strong> Keep communication devices charged.

<strong>8.</strong> Follow official alerts and warnings.

<strong>9.</strong> Create an emergency plan with your household or organization.

<strong>10.</strong> Practice the plan periodically.
        `;
    }


    /* ======================================================
       DISASTER REPORT
       ====================================================== */

    if (
        text.includes("disaster report") ||
        text.includes("emergency report") ||
        text.includes("incident report") ||
        text.includes("write a report")
    ) {

        return `
<strong>📄 DISASTER REPORT STRUCTURE</strong>

A useful disaster report can contain:

<strong>1. Date and time</strong>

<strong>2. Location</strong>

<strong>3. Type of disaster</strong>

<strong>4. Situation summary</strong>

<strong>5. Areas affected</strong>

<strong>6. Number of people affected</strong>

<strong>7. Confirmed casualties, if available</strong>

<strong>8. Infrastructure damage</strong>

<strong>9. Response activities</strong>

<strong>10. Resources available</strong>

<strong>11. Immediate needs</strong>

<strong>12. Challenges</strong>

<strong>13. Recommended actions</strong>

<strong>14. Follow-up requirements</strong>
        `;
    }


    /* ======================================================
       EMERGENCY COMMUNICATION
       ====================================================== */

    if (
        text.includes("emergency message") ||
        text.includes("public message") ||
        text.includes("public awareness") ||
        text.includes("alert message")
    ) {

        return `
<strong>📢 EMERGENCY PUBLIC MESSAGE</strong>

An effective emergency message should be:

• Clear

• Short

• Accurate

• Easy to understand

• Specific about the affected area

• Specific about the required action

• Based on verified information

<strong>Example:</strong>

EMERGENCY ALERT

Residents in the affected area are advised to remain alert and follow official safety instructions. If evacuation is ordered, move to the designated safe location using the recommended route.

Follow updates from authorized emergency authorities.
        `;
    }


    /* ======================================================
       TRANSLATION
       ====================================================== */

    if (
        text.includes("translate") ||
        text.includes("translation")
    ) {

        return `
<strong>🌐 EMERGENCY TRANSLATION</strong>

I can help prepare an emergency message for translation.

Please provide:

<strong>1.</strong> The message you want translated.

<strong>2.</strong> The target language.

For example:

<strong>"Translate this evacuation message into Hausa."</strong>

Available languages can include English, Hausa, Igbo, Yoruba and French.
        `;
    }


    /* ======================================================
       FIRST AID
       ====================================================== */

    if (
        text.includes("first aid") ||
        text.includes("injured") ||
        text.includes("injury")
    ) {

        return `
<strong>🩺 BASIC EMERGENCY GUIDANCE</strong>

If someone is injured during a disaster:

• Move them away from immediate danger only when it is safe.

• Contact appropriate emergency or medical services.

• Follow instructions from trained responders.

• Avoid moving someone unnecessarily when there may be a serious injury unless remaining there presents danger.

• Keep the person calm while waiting for trained help.

This assistant cannot replace professional medical assessment.
        `;
    }


    /* ======================================================
       DISASTER RECOVERY
       ====================================================== */

    if (
        text.includes("recovery") ||
        text.includes("recover after disaster") ||
        text.includes("after disaster")
    ) {

        return `
<strong>🔄 DISASTER RECOVERY</strong>

Recovery can include:

• Assessing damage.

• Restoring essential services.

• Supporting affected communities.

• Providing temporary accommodation.

• Repairing infrastructure.

• Supporting health and wellbeing.

• Documenting lessons learned.

• Improving future preparedness.

Recovery should be coordinated with relevant authorities and community organizations.
        `;
    }


    /* ======================================================
       RISK ASSESSMENT
       ====================================================== */

    if (
        text.includes("risk assessment") ||
        text.includes("assess the risk") ||
        text.includes("risk")
    ) {

        return `
<strong>⚠️ DISASTER RISK ASSESSMENT</strong>

A basic risk assessment can consider:

<strong>Hazard:</strong>
What disaster could occur?

<strong>Exposure:</strong>
Which people, buildings or communities could be affected?

<strong>Vulnerability:</strong>
Who or what may be particularly vulnerable?

<strong>Capacity:</strong>
What resources are available?

<strong>Impact:</strong>
What could happen if the hazard occurs?

<strong>Priority:</strong>
Which risks require immediate attention?
        `;
    }


    /* ======================================================
       WHO ARE YOU?
       ====================================================== */

    if (
        text.includes("who are you") ||
        text.includes("what are you") ||
        text.includes("your name")
    ) {

        return `
<strong>🤖 AI Disaster Response Assistant</strong>

I am a prototype disaster-management assistant designed to provide information about:

🌊 Disaster preparedness

🚨 Emergency response

📢 Public communication

🚑 Rescue coordination

📄 Disaster reporting

🛡️ Recovery planning

My purpose is to support disaster-response planning and information management.
        `;
    }


    /* ======================================================
       THANK YOU
       ====================================================== */

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return `
<strong>You're welcome! 🤝</strong>

I'm here to support your disaster preparedness and response work.

You can ask me another question about floods, fires, earthquakes, evacuation, rescue, emergency reports or disaster recovery.
        `;
    }


    /* ======================================================
       DEFAULT RESPONSE
       ====================================================== */

    return `
<strong>🤖 AI Disaster Response Assistant</strong>

I understand your question:

<strong>"${escapeHTML(question)}"</strong>

I can currently help with:

🌊 Flood response

🔥 Fire emergencies

🌍 Earthquakes

⛈️ Severe weather

🚨 Evacuation

🚑 Rescue operations

🏠 Emergency shelters

📄 Disaster reports

📢 Emergency communication

🛡️ Disaster preparedness

🔄 Disaster recovery

⚠️ Risk assessment

Try asking a more specific question, for example:

<strong>"How should responders prepare for a flood?"</strong>
    `;
}


/* ==========================================================
   ESCAPE HTML
   Prevents user text from being interpreted as HTML
   ========================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* ==========================================================
   TYPING INDICATOR
   ========================================================== */

function showTyping() {

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) {
        return;
    }

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


/* ==========================================================
   REMOVE TYPING INDICATOR
   ========================================================== */

function removeTyping() {

    const typing =
        document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


/* ==========================================================
   ENTER KEY
   ========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("message");

        if (!input) {

            console.error(
                "The textarea with id='message' was not found."
            );

            return;
        }

        input.addEventListener(
            "keydown",
            function (event) {

                /*
                   ENTER = SEND
                   SHIFT + ENTER = NEW LINE
                */

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendMessage();
                }

            }
        );

    }
);
```
