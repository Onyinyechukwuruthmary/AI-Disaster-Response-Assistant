/* ==========================================
   DISASTER AI RESPONSE ASSISTANT
========================================== */


/* ==========================================
   DOM ELEMENTS
========================================== */

const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const typingIndicator = document.getElementById("typingIndicator");

const languageSelector =
    document.getElementById("languageSelector");

const clearChat =
    document.getElementById("clearChat");

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");


/* ==========================================
   LANGUAGE DATA
========================================== */

const languageNames = {

    en: "English",
    ig: "Igbo",
    ha: "Hausa",
    yo: "Yoruba",
    fr: "French"

};


/* ==========================================
   DISASTER RESPONSE KNOWLEDGE BASE
========================================== */

const responseDatabase = {

    flood: {

        en: `
Flood safety guidance:

• Move to higher and safer ground when flooding threatens.
• Avoid walking or driving through moving floodwater.
• Keep children away from floodwater.
• Switch off electricity only if it is safe to do so.
• Follow instructions from authorized emergency responders.
• Keep emergency documents and essential supplies protected.
        `,

        ig: `
Ndụmọdụ maka nchekwa n'oge idei mmiri:

• Gaa n'ebe dị elu ma dị nchebe mgbe idei mmiri na-abịa.
• Zere ịga ije ma ọ bụ ịnya ụgbọala n'ime mmiri na-asọ.
• Debe ụmụaka n'ebe mmiri idei mmiri na-adịghị.
• Gbanyụọ ọkụ eletrik naanị ma ọ bụrụ na ọ dị nchebe.
• Soro ntuziaka ndị ọrụ nzaghachi mberede nyere ikike.
• Chekwaa akwụkwọ dị mkpa na ihe enyemaka mberede.
        `,

        ha: `
Shawarwari na lokacin ambaliya:

• Kaura zuwa wuri mai tsayi kuma mai aminci.
• Kada ku yi tafiya ko tuki cikin ruwa mai gudu.
• Ka nisantar da yara daga ruwan ambaliya.
• Kashe wutar lantarki kawai idan yana da aminci.
• Bi umarnin hukumomin agajin gaggawa.
• Kare muhimman takardu da kayan agaji.
        `,

        yo: `
Imọran aabo nigba iṣan omi:

• Gbera lọ si ibi giga ati ibi ailewu.
• Má ṣe rin tabi wakọ sinu omi ti nṣàn.
• Jẹ́ kí àwọn ọmọ jìnnà sí omi iṣan omi.
• Pa ina mọnamọna nikan ti o ba jẹ ailewu.
• Tẹle awọn ilana awọn oṣiṣẹ pajawiri.
• Daabobo awọn iwe pataki ati awọn ohun elo pajawiri.
        `,

        fr: `
Conseils de sécurité en cas d'inondation :

• Déplacez-vous vers une zone plus élevée et sûre.
• Évitez de marcher ou de conduire dans l'eau en mouvement.
• Gardez les enfants éloignés des eaux de crue.
• Coupez l'électricité uniquement si cela est sans danger.
• Suivez les instructions des services d'urgence.
• Protégez les documents importants et les fournitures d'urgence.
        `
    },


    fire: {

        en: `
Fire emergency guidance:

• Leave the building if there is immediate danger.
• Use an emergency exit instead of an elevator.
• Stay low if smoke is present.
• Never return to a burning building.
• Alert others if it is safe to do so.
• Contact the appropriate emergency service.
        `,

        ig: `
Ndụmọdụ maka ọkụ:

• Wepụ onwe gị n'ụlọ ahụ ma ọ bụrụ na ihe egwu dị.
• Jiri ụzọ mgbapụ mberede kama iji igwe mbuli.
• Gaa ala ma ọ bụrụ na anwụrụ ọkụ juru ebe ahụ.
• Alaghachila n'ụlọ na-ere ọkụ.
• Gwa ndị ọzọ ma ọ bụrụ na ọ dị nchebe.
• Kpọtụrụ ndị ọrụ mberede kwesịrị ekwesị.
        `,

        ha: `
Shawarwari game da gobara:

• Fita daga ginin idan akwai hatsari.
• Yi amfani da hanyar fita ta gaggawa maimakon lif.
• Zauna ƙasa idan hayaki ya cika wurin.
• Kada ku koma cikin ginin da ke ci.
• Gargadi wasu idan yana da aminci.
• Tuntuɓi hukumar agajin gaggawa.
        `,

        yo: `
Imọran aabo nigba ina:

• Jade kuro ninu ile ti ewu ba wa.
• Lo ọna ijade pajawiri dipo elevator.
• Rọra tẹ̀ sílẹ̀ ti ẹfin ba wa.
• Má ṣe pada sinu ile tí ń jó.
• Kilọ fun awọn miiran ti o ba jẹ ailewu.
• Kan si awọn iṣẹ pajawiri.
        `,

        fr: `
Conseils en cas d'incendie :

• Quittez le bâtiment en cas de danger immédiat.
• Utilisez une sortie de secours plutôt qu'un ascenseur.
• Restez près du sol en présence de fumée.
• Ne retournez jamais dans un bâtiment en feu.
• Alertez les autres si vous pouvez le faire sans danger.
• Contactez les services d'urgence appropriés.
        `
    },


    earthquake: {

        en: `
During an earthquake:

• Drop, cover and hold on.
• Stay away from windows and objects that may fall.
• If indoors, remain inside until the shaking stops.
• If outdoors, move away from buildings and power lines.
• After the shaking, check for hazards and follow official instructions.
        `,

        ig: `
N'oge ala ọma jijiji:

• Gbuo ikpere, kpuchie onwe gị ma jide ihe siri ike.
• Zere windo na ihe nwere ike ịda.
• Ọ bụrụ na ị nọ n'ime ụlọ, nọrọ ebe ahụ ruo mgbe ịma jijiji kwụsịrị.
• Ọ bụrụ na ị nọ n'èzí, pụọ n'akụkụ ụlọ na waya ọkụ.
• Mgbe ọ kwụsịrị, lelee ihe egwu ma soro ntuziaka ndị ọrụ.
        `,

        ha: `
Lokacin girgizar ƙasa:

• Durƙusa, ɓoye a ƙarƙashin kariya kuma riƙe.
• Nisanci tagogi da abubuwan da za su iya faɗuwa.
• Idan kana cikin gida, ka zauna ciki har girgizar ta tsaya.
• Idan kana waje, ka nisanci gine-gine da layukan wuta.
• Bayan girgizar, duba haɗari kuma bi umarnin hukuma.
        `,

        yo: `
Nigba ìwariri:

• Tẹ́lẹ̀, bo ara rẹ ki o si di nkan mu.
• Jẹ́ kó jìnà sí ferese ati awọn nkan tí ó lè ṣubú.
• Ti o ba wa ninu ile, duro ninu rẹ titi ìwariri yoo fi duro.
• Ti o ba wa ni ita, jinna si awọn ile ati awọn okun ina.
• Lẹhin ìwariri, ṣayẹwo awọn ewu ki o tẹle awọn ilana.
        `,

        fr: `
Pendant un tremblement de terre :

• Mettez-vous à terre, protégez-vous et tenez-vous fermement.
• Éloignez-vous des fenêtres et des objets susceptibles de tomber.
• Si vous êtes à l'intérieur, restez-y jusqu'à la fin des secousses.
• À l'extérieur, éloignez-vous des bâtiments et des lignes électriques.
• Après les secousses, vérifiez les dangers et suivez les consignes officielles.
        `
    }

};


/* ==========================================
   GENERAL RESPONSES
========================================== */

const generalResponses = {

    en: `
I can help with disaster preparedness, emergency response,
incident reporting, evacuation communication, public awareness
and translation.

You can ask me things such as:

• What should I do during a flood?
• Help me prepare an evacuation message.
• Create an incident report.
• Translate this message into Igbo.
• How can I prepare for a disaster?
    `,

    ig: `
Enwere m ike inyere gị aka gbasara nkwadebe maka ọdachi,
nzaghachi mberede, akụkọ ihe merenụ, ozi mgbapụ,
ozi mgbasa ozi na ntụgharị asụsụ.
    `,

    ha: `
Zan iya taimaka maka shirye-shiryen bala'i,
amsar gaggawa, rahoton abin da ya faru,
saƙonnin ƙaura da fassarar harshe.
    `,

    yo: `
Mo le ran ọ lọwọ pẹlu igbaradi fun ajalu,
idahun pajawiri, ijabọ iṣẹlẹ, awọn ifiranṣẹ
ìkìlọ̀ ati itumọ ede.
    `,

    fr: `
Je peux vous aider avec la préparation aux catastrophes,
les interventions d'urgence, les rapports d'incident,
les messages d'évacuation et la traduction.
    `
};


/* ==========================================
   TRANSLATION ENGINE
========================================== */

function translateText(text, language) {

    /*
        This function uses the built-in disaster
        translation database.

        For unrestricted translation, connect this
        function to a backend AI translation API.
    */

    if (language === "en") {
        return text;
    }

    return translateKnownText(text, language);
}


function translateKnownText(text, language) {

    const normalized = text.toLowerCase();

    if (normalized.includes("flood")) {

        return responseDatabase.flood[language];

    }

    if (normalized.includes("fire")) {

        return responseDatabase.fire[language];

    }

    if (
        normalized.includes("earthquake") ||
        normalized.includes("earth quake")
    ) {

        return responseDatabase.earthquake[language];

    }

    return text;
}


/* ==========================================
   DETECT DISASTER TYPE
========================================== */

function detectDisaster(message) {

    const text = message.toLowerCase();

    if (
        text.includes("flood") ||
        text.includes("flooding") ||
        text.includes("water")
    ) {
        return "flood";
    }

    if (
        text.includes("fire") ||
        text.includes("burning") ||
        text.includes("smoke")
    ) {
        return "fire";
    }

    if (
        text.includes("earthquake") ||
        text.includes("earth quake") ||
        text.includes("tremor")
    ) {
        return "earthquake";
    }

    return null;
}


/* ==========================================
   AI RESPONSE ENGINE
========================================== */

function generateResponse(message, language) {

    const text = message.toLowerCase();

    const disasterType = detectDisaster(message);


    /* Disaster-specific response */

    if (disasterType) {

        return responseDatabase[disasterType][language];
    }


    /* Evacuation */

    if (
        text.includes("evacuation") ||
        text.includes("evacuate") ||
        text.includes("evacuation message")
    ) {

        const messages = {

            en: `
EVACUATION ALERT

Residents in the affected area are advised to move
to a safe location using designated evacuation routes.

Take essential medications, important documents,
water and other necessary supplies if it is safe
to do so.

Follow instructions from authorized emergency
responders and avoid entering restricted areas.
            `,

            ig: `
OZI MGBAPỤ

A na-adụ ndị bi n'ebe ihe mberede metụtara ọdụ ka ha
gaa n'ebe dị nchebe site n'ụzọ mgbapụ akwadoro.

Were ọgwụ dị mkpa, akwụkwọ dị mkpa, mmiri na ihe
ndị ọzọ dị mkpa ma ọ bụrụ na ọ dị nchebe.

Soro ntuziaka ndị ọrụ nzaghachi mberede nyere ikike.
            `,

            ha: `
SAƘON ƘAURA

Ana shawartar mazauna yankin da abin ya shafa
su koma wuri mai aminci ta hanyoyin da aka tanada.

Bi umarnin jami'an agajin gaggawa kuma ku guji
wuraren da aka hana shiga.
            `,

            yo: `
IFIRANṢẸ́ ÌKÌLỌ̀

A gba awọn olugbe agbegbe ti ewu kan kan nimọran
lati lọ si ibi ailewu nipasẹ awọn ọna ijade ti a yan.

Tẹle awọn ilana awọn oṣiṣẹ pajawiri ki o yago fun
awọn agbegbe ti a ti fi ofin de.
            `,

            fr: `
ALERTE D'ÉVACUATION

Les habitants de la zone touchée sont invités à se
rendre dans un lieu sûr en utilisant les itinéraires
d'évacuation désignés.

Suivez les instructions des services d'urgence
et évitez les zones interdites.
            `
        };

        return messages[language];
    }


    /* Incident report */

    if (
        text.includes("incident report") ||
        text.includes("report")
    ) {

        const reports = {

            en: `
I can help you prepare an incident report.

Please provide:

1. Incident type
2. Location
3. Date and time
4. Severity
5. What happened
6. Number of people affected, if known
7. Actions already taken
            `,

            ig: `
Enwere m ike inyere gị aka ịkwadebe akụkọ ihe merenụ.

Biko nye:

1. Ụdị ihe merenụ
2. Ebe o mere
3. Ụbọchị na oge
4. Ogo ihe egwu
5. Ihe mere
6. Ọnụọgụ ndị metụtara, ma ọ bụrụ na ị maara
7. Ihe e mere ugbu a
            `,

            ha: `
Zan iya taimaka maka shirya rahoton abin da ya faru.

Da fatan za a bayar da:

1. Nau'in abin da ya faru
2. Wuri
3. Kwanan wata da lokaci
4. Matsayin haɗari
5. Abin da ya faru
6. Adadin mutanen da abin ya shafa
7. Matakan da aka ɗauka
            `,

            yo: `
Mo le ran ọ lọwọ lati ṣẹda ijabọ iṣẹlẹ.

Jọwọ pese:

1. Iru iṣẹlẹ
2. Ibi ti o ṣẹlẹ
3. Ọjọ ati akoko
4. Iwọn ewu
5. Ohun ti o ṣẹlẹ
6. Nọmba awọn eniyan ti o kan
7. Awọn igbesẹ ti a ti gbe
            `,

            fr: `
Je peux vous aider à préparer un rapport d'incident.

Veuillez fournir :

1. Type d'incident
2. Lieu
3. Date et heure
4. Niveau de gravité
5. Ce qui s'est passé
6. Nombre de personnes touchées
7. Mesures déjà prises
            `
        };

        return reports[language];
    }


    /* Preparedness */

    if (
        text.includes("prepare") ||
        text.includes("preparedness") ||
        text.includes("emergency kit")
    ) {

        const prep = {

            en: `
Basic disaster preparedness:

• Keep an emergency kit.
• Store safe drinking water.
• Keep essential medicines available.
• Save important emergency contacts.
• Know your evacuation routes.
• Keep important documents protected.
• Follow verified emergency information.
            `,

            ig: `
Nkwadebe maka ọdachi:

• Debe akpa enyemaka mberede.
• Debe mmiri ọṅụṅụ dị ọcha.
• Debe ọgwụ ndị dị mkpa.
• Chekwaa nọmba ekwentị ndị dị mkpa.
• Mara ụzọ mgbapụ.
• Chekwaa akwụkwọ dị mkpa.
• Soro ozi mberede sitere n'aka ndị a pụrụ ịtụkwasị obi.
            `,

            ha: `
Shirye-shiryen bala'i:

• Shirya jakar agajin gaggawa.
• Ajiye ruwan sha mai tsafta.
• Samu muhimman magunguna.
• Ajiye lambobin gaggawa.
• San hanyoyin ƙaura.
• Kare muhimman takardu.
• Bi sahihan bayanan gaggawa.
            `,

            yo: `
Igbaradi fun ajalu:

• Mura apo pajawiri.
• Ṣe ipamọ omi mimu.
• Ṣe idaniloju pe awọn oogun pataki wa.
• Ṣe igbasilẹ awọn nọmba pajawiri.
• Mọ awọn ọna ijade.
• Daabobo awọn iwe pataki.
• Tẹle alaye pajawiri ti a fọwọsi.
            `,

            fr: `
Préparation aux catastrophes :

• Préparez une trousse d'urgence.
• Stockez de l'eau potable.
• Gardez les médicaments essentiels disponibles.
• Conservez les numéros d'urgence.
• Connaissez vos itinéraires d'évacuation.
• Protégez les documents importants.
• Suivez les informations officielles.
            `
        };

        return prep[language];
    }


    /* Greeting */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("good morning") ||
        text.includes("good afternoon")
    ) {

        const greetings = {

            en: "Hello! I am DisasterAI. How can I assist you with disaster preparedness or emergency response today?",

            ig: "Ndewo! Abụ m DisasterAI. Kedu ka m ga-esi nyere gị aka gbasara nkwadebe ma ọ bụ nzaghachi mberede?",

            ha: "Sannu! Ni ne DisasterAI. Ta yaya zan taimaka maka shirye-shiryen bala'i ko agajin gaggawa?",

            yo: "Bawo! Emi ni DisasterAI. Bawo ni mo ṣe le ran ọ lọwọ pẹlu igbaradi tabi idahun pajawiri?",

            fr: "Bonjour ! Je suis DisasterAI. Comment puis-je vous aider concernant la préparation ou les interventions d'urgence ?"
        };

        return greetings[language];
    }


    return generalResponses[language];
}


/* ==========================================
   ADD MESSAGE
========================================== */

function addMessage(text, sender = "assistant") {

    const message = document.createElement("div");

    message.className = `message ${sender}`;

    const avatar =
        sender === "assistant" ? "🤖" : "👤";

    message.innerHTML = `

        <div class="message-avatar">
            ${avatar}
        </div>

        <div class="message-content">

            <div class="message-name">
                ${sender === "assistant" ? "DisasterAI" : "You"}
            </div>

            <div class="message-bubble">
                ${formatMessage(text)}
            </div>

        </div>

    `;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


/* ==========================================
   FORMAT MESSAGE
========================================== */

function formatMessage(text) {

    return text
        .replace(/\n/g, "<br>")
        .replace(/•/g, "<br>•");
}


/* ==========================================
   SEND MESSAGE
========================================== */

function sendMessage() {

    const message = userInput.value.trim();

    if (!message) {
        return;
    }


    addMessage(message, "user");

    userInput.value = "";

    typingIndicator.classList.remove("hidden");


    const selectedLanguage =
        languageSelector.value;


    /*
        Simulate AI processing.

        Replace this block later with:

        fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify(...)
        })
    */

    setTimeout(() => {

        const response =
            generateResponse(
                message,
                selectedLanguage
            );

        typingIndicator.classList.add("hidden");

        addMessage(response, "assistant");

    }, 700);
}


/* ==========================================
   SEND BUTTON
========================================== */

sendButton.addEventListener(
    "click",
    sendMessage
);


/* ==========================================
   ENTER KEY
========================================== */

userInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();
        }

    }
);


/* ==========================================
   QUICK ACTIONS
========================================== */

document
    .querySelectorAll(".quick-actions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                userInput.value =
                    button.dataset.prompt;

                sendMessage();

            }
        );

    });


/* ==========================================
   CLEAR CHAT
========================================== */

clearChat.addEventListener(
    "click",
    () => {

        chatMessages.innerHTML = "";

        addMessage(
            "Chat cleared. How can I assist you?",
            "assistant"
        );

    }
);


/* ==========================================
   LANGUAGE CHANGE
========================================== */

languageSelector.addEventListener(
    "change",
    () => {

        const language =
            languageSelector.value;

        const welcomeMessages = {

            en: "Language changed to English. How can I help you?",

            ig: "Agbanweela asụsụ gaa Igbo. Kedu ka m ga-esi nyere gị aka?",

            ha: "An canza harshe zuwa Hausa. Ta yaya zan taimaka?",

            yo: "A ti yi ayipada ede si di Yoruba. Bawo ni mo ṣe le ran ọ lọwọ?",

            fr: "La langue a été changée en français. Comment puis-je vous aider?"
        };

        addMessage(
            welcomeMessages[language],
            "assistant"
        );

    }
);


/* ==========================================
   SIDEBAR NAVIGATION
========================================== */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const section =
                    button.dataset.section;


                document
                    .querySelectorAll(".nav-item")
                    .forEach(item =>
                        item.classList.remove("active")
                    );


                button.classList.add("active");


                document
                    .querySelectorAll(".section")
                    .forEach(item =>
                        item.classList.remove("active")
                    );


                const target =
                    document.getElementById(
                        section + "Section"
                    );


                if (target) {

                    target.classList.add("active");

                }


                sidebar.classList.remove("open");

            }
        );

    });


/* ==========================================
   MOBILE MENU
========================================== */

menuBtn.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle("open");

    }
);


/* ==========================================
   RESPONSE TOOLS
========================================== */

document
    .querySelectorAll(".tool-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tool =
                    button.dataset.tool;


                if (tool === "evacuation") {

                    userInput.value =
                        "Help me prepare an evacuation message.";

                    document
                        .querySelector('[data-section="chat"]')
                        .click();

                    sendMessage();

                }


                if (tool === "report") {

                    document
                        .querySelector('[data-section="report"]')
                        .click();

                }


                if (tool === "awareness") {

                    userInput.value =
                        "Create a public disaster awareness message.";

                    document
                        .querySelector('[data-section="chat"]')
                        .click();

                    sendMessage();

                }

            }
        );

    });


/* ==========================================
   INCIDENT REPORT GENERATOR
========================================== */

const generateReport =
    document.getElementById("generateReport");


generateReport.addEventListener(
    "click",
    () => {

        const type =
            document.getElementById("incidentType").value;

        const location =
            document.getElementById("incidentLocation").value;

        const date =
            document.getElementById("incidentDate").value;

        const severity =
            document.getElementById("incidentSeverity").value;

        const description =
            document.getElementById("incidentDescription").value;


        if (!type || !location || !description) {

            alert(
                "Please complete the incident type, location and description."
            );

            return;
        }


        const report = `

AI DISASTER RESPONSE INCIDENT REPORT
====================================

Incident Type:
${type}

Location:
${location}

Date & Time:
${date || "Not provided"}

Severity:
${severity}

Description:
${description}

Initial Response:
Information recorded through DisasterAI Response Assistant.

Recommended Next Step:
Notify the appropriate authorized emergency response organization
and follow verified emergency instructions.

====================================
Generated by DisasterAI
        `;


        document
            .getElementById("reportText")
            .textContent = report;


        document
            .getElementById("reportOutput")
            .classList.remove("hidden");

    }
);


/* ==========================================
   COPY REPORT
========================================== */

document
    .getElementById("copyReport")
    .addEventListener(
        "click",
        async () => {

            const text =
                document.getElementById("reportText")
                    .textContent;


            await navigator.clipboard.writeText(text);


            alert("Report copied to clipboard.");

        }
    );


/* ==========================================
   INITIALIZATION
========================================== */

console.log(
    "DisasterAI Response Assistant initialized successfully."
);
