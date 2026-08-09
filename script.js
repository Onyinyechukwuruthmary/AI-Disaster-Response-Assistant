/* =====================================================
   AI DISASTER RESPONSE ASSISTANT
   SCRIPT.JS

   Frontend AI Simulation
===================================================== */


// ===============================
// SELECT ELEMENTS
// ===============================

const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("message");


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage(){

    let userMessage = messageInput.value.trim();


    if(userMessage === ""){
        return;
    }


    // Display user message

    addMessage(userMessage, "user");


    // Clear input

    messageInput.value="";


    // Show AI typing

    showTyping();


    // Generate response

    setTimeout(()=>{

        removeTyping();

        let response = generateAIResponse(userMessage);

        addMessage(response,"ai");


    },1500);


}



// ===============================
// ADD MESSAGE TO CHAT
// ===============================


function addMessage(text,type){


    let messageDiv=document.createElement("div");


    messageDiv.classList.add(
        "message",
        type
    );


    let bubble=document.createElement("div");


    bubble.classList.add("bubble");


    bubble.innerHTML=text;


    messageDiv.appendChild(bubble);


    chatBox.appendChild(messageDiv);


    chatBox.scrollTop=chatBox.scrollHeight;


}



// ===============================
// TYPING EFFECT
// ===============================


function showTyping(){


    let typing=document.createElement("div");


    typing.className="message ai";

    typing.id="typing";


    typing.innerHTML=

    `
    <div class="bubble">
        AI is analyzing emergency data...
    </div>
    `;


    chatBox.appendChild(typing);


    chatBox.scrollTop=chatBox.scrollHeight;


}



function removeTyping(){


    let typing=document.getElementById("typing");


    if(typing){

        typing.remove();

    }


}



// ===============================
// AI RESPONSE ENGINE
// ===============================


function generateAIResponse(message){


    message=message.toLowerCase();



    // FLOOD RESPONSE

    if(message.includes("flood")){


        return `

        <b>🌊 Flood Emergency Analysis</b>

        <br><br>

        <b>Risk Level:</b> High

        <br><br>

        Recommended Actions:

        <br>

        ✔ Evacuate low-lying areas

        <br>

        ✔ Deploy rescue teams

        <br>

        ✔ Open emergency shelters

        <br>

        ✔ Provide medical support

        <br>

        ✔ Monitor water levels

        `;

    }




    // FIRE RESPONSE

    if(message.includes("fire")){


        return `

        <b>🔥 Fire Emergency Response</b>

        <br><br>

        Immediate Actions:

        <br>

        ✔ Contact Fire Service

        <br>

        ✔ Evacuate affected buildings

        <br>

        ✔ Avoid smoke exposure

        <br>

        ✔ Establish safety zones

        `;


    }




    // EARTHQUAKE RESPONSE


    if(message.includes("earthquake")){


        return `

        <b>🏚 Earthquake Response Plan</b>

        <br><br>

        Safety Instructions:

        <br>

        ✔ Move to open areas

        <br>

        ✔ Stay away from damaged buildings

        <br>

        ✔ Provide first aid

        <br>

        ✔ Check emergency communication

        `;


    }




    // EVACUATION NOTICE


    if(message.includes("evacuation") || message.includes("notice")){


        return `


        <b>🚨 Emergency Evacuation Notice</b>


        <br><br>


        Residents in affected areas are advised to evacuate immediately.


        <br><br>


        Instructions:

        <br>

        ✔ Remain calm

        <br>

        ✔ Carry important documents

        <br>

        ✔ Move to designated shelters

        <br>

        ✔ Follow instructions from emergency officials


        `;


    }




    // TRANSLATION


    if(message.includes("translate")){


        return `


        <b>🌍 Emergency Translation</b>


        <br><br>


        English:

        Flood water is rising. Move to a safer location.


        <br><br>


        Hausa:

        Ruwan ambaliya yana karuwa. Ku koma wuri mai aminci.


        <br><br>


        Igbo:

        Mmiri idei na-abawanye. Biko gaa ebe nchekwa.


        <br><br>


        Yoruba:

        Omi ìkún omi ń ga. Ẹ lọ sí ibi ààbò.


        `;


    }




    // REPORT SUMMARY


    if(message.includes("report") || message.includes("summary")){


        return `


        <b>📄 Emergency Report Summary</b>


        <br><br>


        Incident:

        Severe Flooding


        <br>


        Location:

        River Community Zone


        <br>


        Severity:

        High


        <br>


        People Affected:

        2,500


        <br>


        Immediate Needs:


        <br>

        ✔ Food supplies

        <br>

        ✔ Medical assistance

        <br>

        ✔ Rescue equipment

        <br>

        ✔ Temporary shelter


        `;


    }





    // PUBLIC AWARENESS


    if(message.includes("campaign") || message.includes("awareness")){


        return `


        <b>📢 Public Awareness Campaign</b>


        <br><br>


        Stay Alert. Stay Safe.


        <br><br>


        Follow emergency instructions.

        Avoid dangerous areas.

        Report emergencies immediately.


        <br><br>


        Emergency Number: 112


        `;


    }





    // GENERAL RESPONSE


    return `


    <b>🤖 AI Disaster Assistant</b>


    <br><br>


    I can help you with:


    <br><br>


    ✔ Disaster report analysis


    <br>

    ✔ Flood emergencies


    <br>

    ✔ Fire response


    <br>

    ✔ Earthquake guidance


    <br>

    ✔ Evacuation notices


    <br>

    ✔ Emergency translation


    <br>

    ✔ Public awareness campaigns


    `;



}



// ===============================
// ENTER KEY SUPPORT
// ===============================


messageInput.addEventListener(

"keypress",

function(event){


    if(event.key==="Enter" && !event.shiftKey){


        event.preventDefault();


        sendMessage();


    }


}

);



// ===============================
// WELCOME MESSAGE
// ===============================


window.onload=function(){


console.log(

"AI Disaster Response Assistant Loaded Successfully"

);


};

