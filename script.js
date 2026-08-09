```javascript
/* =========================================================
   DISASTER AI RESPONSE ASSISTANT
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const userInput =
    document.getElementById("userInput");

const sendButton =
    document.getElementById("sendButton");

const chatMessages =
    document.getElementById("chatMessages");

const typingIndicator =
    document.getElementById("typingIndicator");

const languageSelector =
    document.getElementById("languageSelector");

const clearChat =
    document.getElementById("clearChat");

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");



/* =========================================================
   NAVIGATION
========================================================= */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener("click", () => {

            const section =
                button.dataset.section;


            document
                .querySelectorAll(".nav-item")
                .forEach(item => {

                    item.classList.remove("active");

                });


            button.classList.add("active");


            document
                .querySelectorAll(".section")
                .forEach(item => {

                    item.classList.remove("active");

                });


            const target =
                document.getElementById(
                    section + "Section"
                );


            if (target) {

                target.classList.add("active");

            }


            sidebar.classList.remove("open");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });



/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});



/* =========================================================
   SLIDESHOW
========================================================= */

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const nextSlideButton =
    document.getElementById("nextSlide");

const previousSlideButton =
    document.getElementById("prevSlide");


let currentSlide = 0;

let slideTimer;



function showSlide(index) {

    if (index >= slides.length) {

        currentSlide = 0;

    }

    else if (index < 0) {

        currentSlide =
            slides.length - 1;

    }

    else {

        currentSlide = index;

    }


    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === currentSlide
        );

    });


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}



function nextSlide() {

    showSlide(currentSlide + 1);

    restartSlideshow();

}



function previousSlide() {

    showSlide(currentSlide - 1);

    restartSlideshow();

}



function startSlideshow() {

    slideTimer =
        setInterval(() => {

            showSlide(currentSlide + 1);

        }, 6000);

}



function restartSlideshow() {

    clearInterval(slideTimer);

    startSlideshow();

}



nextSlideButton.addEventListener(
    "click",
    nextSlide
);


previousSlideButton.addEventListener(
    "click",
    previousSlide
);


dots.forEach(dot => {

    dot.addEventListener(
        "click",
        () => {

            showSlide(
                Number(dot.dataset.slide)
            );

            restartSlideshow();

        }
    );

});


startSlideshow();



/* =========================================================
   HERO BUTTON FUNCTIONS
========================================================= */

function openChat() {

    document
        .querySelector('[data-section="chat"]')
        .click();


    setTimeout(() => {

        userInput.focus();

    }, 300);

}



function askFloodQuestion() {

    openChat();

    userInput.value =
        "What should I do during a flood?";

    sendMessage();

}



function openReport() {

    document
        .querySelector('[data-section="report"]')
        .click();

}



/* =========================================================
   LANGUAGE DATA
========================================================= */

const languageNames = {

    en: "English",
    ig: "Igbo",
    ha: "Hausa",
    yo: "Yoruba",
    fr: "French"

};



/* =========================================================
   DISASTER DATABASE
========================================================= */

const responseDatabase = {

    flood: {

        en: `
FLOOD SAFETY GUIDANCE

• Move to higher and safer ground when flooding threatens.
• Avoid walking or driving through moving floodwater.
• Keep children away from floodwater.
• Do not enter flooded buildings unless authorities say it is safe.
• Protect important documents and essential supplies.
• Follow instructions from authorized emergency responders.
        `,

        ig: `
NDỤMỌDỤ NKE NCHEBE N'OGE IDEI MMIRI

• Gaa n'ebe dị elu ma dị nchebe mgbe idei mmiri na-abịa.
• Zere ịga ije ma ọ bụ ịnya ụgbọala n'ime mmiri na-asọ.
• Debe ụmụaka n'ebe mmiri idei mmiri na-adịghị.
• Abanyela n'ụlọ idei mmiri juru ma ọ bụrụ na ndị ọrụ ikike ekwughị na ọ dị nchebe.
• Chekwaa akwụkwọ dị mkpa na ihe enyemaka.
• Soro ntuziaka ndị ọrụ nzaghachi mberede.
        `,

        ha: `
TSARON AMINCI A LOKACIN AMBALIYA

• Kaura zuwa wuri mai tsayi kuma mai aminci.
• Kada ku yi tafiya ko tuki cikin ruwa mai gudu.
• Ka nisantar da yara daga ruwan ambaliya.
• Kada ku shiga ginin da ambaliya ta shafa sai hukumomi sun tabbatar da aminci.
• Kare muhimman takardu da kayan agaji.
• Bi umarnin jami'an agajin gaggawa.
        `,

        yo: `
IMỌRAN AABO NIGBA IṢAN OMI

• Gbera lọ si ibi giga ati ibi ailewu nigbati iṣan omi ba n bọ.
• Má ṣe rin tabi wakọ sinu omi ti nṣàn.
• Jẹ́ kí àwọn ọmọ jìnnà sí omi iṣan omi.
• Má ṣe wọ ile tí omi ti wọ ayafi ti awọn alaṣẹ ba sọ pe o jẹ ailewu.
• Daabobo awọn iwe pataki ati awọn ohun elo pajawiri.
• Tẹle awọn ilana awọn oṣiṣẹ pajawiri.
        `,

        fr: `
CONSEILS DE SÉCURITÉ EN CAS D'INONDATION

• Déplacez-vous vers une zone plus élevée et sûre.
• Évitez de marcher ou de conduire dans l'eau en mouvement.
• Gardez les enfants éloignés des eaux de crue.
• N'entrez pas dans un bâtiment inondé sans autorisation officielle.
• Protégez les documents importants et les fournitures essentielles.
• Suivez les instructions des services d'urgence.
        `
    },


    fire: {

        en: `
FIRE EMERGENCY GUIDANCE

• Leave the building immediately if there is immediate danger.
• Use an emergency exit instead of an elevator.
• Stay low if smoke is present.
• Alert others if it is safe.
• Never return to a burning building.
• Contact the appropriate emergency service.
        `,

        ig: `
NDỤMỌDỤ N'OGE ỌLỌỌGBỤ

• Wepụ onwe gị n'ụlọ ahụ ma ọ bụrụ na ihe egwu dị.
• Jiri ụzọ mgbapụ mberede kama igwe mbuli.
• Gaa ala ma ọ bụrụ na anwụrụ ọkụ dị.
• Gwa ndị ọzọ ma ọ bụrụ na ọ dị nchebe.
• Alaghachila n'ụlọ na-ere ọkụ.
• Kpọtụrụ ndị ọrụ mberede.
        `,

        ha: `
TSARON GOBARA

• Fita daga ginin idan akwai hatsari.
• Yi amfani da hanyar fita ta gaggawa maimakon lif.
• Zauna ƙasa idan hayaki ya cika wurin.
• Gargadi wasu idan yana da aminci.
• Kada ku koma cikin ginin da ke ci.
• Tuntuɓi hukumar agajin gaggawa.
        `,

        yo: `
AABO NIGBA INA

• Jade kuro ninu ile ti ewu ba wa.
• Lo ọna ijade pajawiri dipo elevator.
• Tẹ̀ sílẹ̀ ti ẹfin ba wa.
• Kilọ fun awọn miiran ti o ba jẹ ailewu.
• Má ṣe pada sinu ile tí ń jó.
• Kan si awọn iṣẹ pajawiri.
        `,

        fr: `
CONSEILS EN CAS D'INCENDIE

• Quittez immédiatement le bâtiment en cas de danger.
• Utilisez une sortie de secours plutôt qu'un ascenseur.
• Restez près du sol en présence de fumée.
• Alertez les autres si vous pouvez le faire sans danger.
• Ne retournez jamais dans un bâtiment en feu.
• Contactez les services d'urgence.
        `
    },


    earthquake: {

        en: `
EARTHQUAKE SAFETY

• Drop, cover and hold on.
• Stay away from windows and objects that may fall.
• If indoors, remain inside until shaking stops.
• If outdoors, move away from buildings and power lines.
• After shaking stops, check for hazards and follow official instructions.
        `,

        ig: `
N'OGE ALA ỌMA JIJỊ

• Gbuo ikpere, kpuchie onwe gị ma jide ihe siri ike.
• Zere windo na ihe nwere ike ịda.
• Ọ bụrụ na ị nọ n'ime ụlọ, nọrọ ebe ahụ ruo mgbe ịma jijiji kwụsịrị.
• Ọ bụrụ na ị nọ n'èzí, pụọ n'akụkụ ụlọ na waya ọkụ.
• Mgbe ọ kwụsịrị, lelee ihe egwu ma soro ntuziaka.
        `,

        ha: `
LOKACIN GIRGIZAR ƘASA

• Durƙusa, ɓoye a ƙarƙashin kariya kuma riƙe.
• Nisanci tagogi da abubuwan da za su iya faɗuwa.
• Idan kana cikin gida, ka zauna ciki har girgizar ta tsaya.
• Idan kana waje, ka nisanci gine-gine da layukan wuta.
• Bayan girgizar, duba haɗari kuma bi umarnin hukuma.
        `,

        yo: `
NIGBA ÌWARIRI

• Tẹ́lẹ̀, bo ara rẹ ki o si di nkan mu.
• Jẹ́ kó jìnà sí ferese ati awọn nkan tí ó lè ṣubú.
• Ti o ba wa ninu ile, duro ninu rẹ titi ìwariri yoo fi duro.
• Ti o ba wa ni ita, jinna si awọn ile ati awọn okun ina.
• Lẹhin ìwariri, ṣayẹwo awọn ewu ki o tẹle awọn ilana.
        `,

        fr: `
EN CAS DE TREMBLEMENT DE TERRE

• Mettez-vous à terre, protégez-vous et tenez-vous fermement.
• Éloignez-vous des fenêtres et des objets susceptibles de tomber.
• Si vous êtes à l'intérieur, restez-y jusqu'à la fin des secousses.
• À l'extérieur, éloignez-vous des bâtiments et des lignes électriques.
• Après les secousses, vérifiez les dangers et suivez les consignes officielles.
        `
    }

};



/* =========================================================
   GENERAL RESPONSES
========================================================= */

const generalResponses = {

    en: `
I can help you with:

• Disaster preparedness
• Flood safety
• Fire safety
• Earthquake guidance
• Emergency communication
• Evacuation messages
• Incident reports
• Public awareness messages
• Multilingual disaster communication

Try asking:
"What should I do during a flood?"
    `,

    ig: `
Enwere m ike inyere gị aka gbasara:

• Nkwadebe maka ọdachi
• Nchebe n'oge idei mmiri
• Nchebe n'oge ọkụ
• Ala ọma jijiji
• Ozi mberede
• Ozi mgbapụ
• Akụkọ ihe merenụ
• Ozi mgbasa ozi
    `,

    ha: `
Zan iya taimaka da:

• Shirye-shiryen bala'i
• Tsaron ambaliya
• Tsaron gobara
• Girgizar ƙasa
• Saƙonnin gaggawa
• Saƙonnin ƙaura
• Rahoton abin da ya faru
• Saƙonnin wayar da kai
    `,

    yo: `
Mo le ran ọ lọwọ pẹlu:

• Igbaradi fun ajalu
• Aabo nigba iṣan omi
• Aabo nigba ina
• Ìwariri
• Awọn ifiranṣẹ pajawiri
• Awọn ifiranṣẹ ijade
• Ijabọ iṣẹlẹ
• Awọn ifiranṣẹ ìkìlọ̀
    `,

    fr: `
Je peux vous aider avec :

• La préparation aux catastrophes
• La sécurité en cas d'inondation
• La sécurité incendie
• Les tremblements de terre
• Les communications d'urgence
• Les messages d'évacuation
• Les rapports d'incident
• Les messages de sensibilisation
    `

};



/* =========================================================
   DETECT DISASTER
========================================================= */

function detectDisaster(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("flood") ||
        text.includes("flooding") ||
        text.includes("inundation")
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



/* =========================================================
   AI RESPONSE
========================================================= */

function generateResponse(
    message,
    language
) {

    const text =
        message.toLowerCase();


    const disaster =
        detectDisaster(message);


    if (disaster) {

        return responseDatabase
            [disaster]
            [language];

    }


    /* EVACUATION */

    if (
        text.includes("evacuation") ||
        text.includes("evacuate")
    ) {

        const evacuation = {

            en: `
EVACUATION ALERT

Residents in the affected area are advised
to move to a safe location using designated
evacuation routes.

Take essential supplies if it is safe to do so.

Follow instructions from authorized emergency
responders and avoid restricted areas.
            `,

            ig: `
OZI MGBAPỤ

A na-adụ ndị bi n'ebe ihe mberede metụtara
ka ha gaa n'ebe dị nchebe site n'ụzọ mgbapụ.

Soro ntuziaka ndị ọrụ nzaghachi mberede.
            `,

            ha: `
SAƘON ƘAURA

Ana shawartar mazauna yankin da abin ya shafa
su koma wuri mai aminci ta hanyoyin da aka tanada.

Bi umarnin jami'an agajin gaggawa.
            `,

            yo: `
IFIRANṢẸ́ ÌKÌLỌ̀

A gba awọn olugbe agbegbe ti ewu kan kan
nimọran lati lọ si ibi ailewu nipasẹ awọn ọna
ijade ti a yan.

Tẹle awọn ilana awọn oṣiṣẹ pajawiri.
            `,

            fr: `
ALERTE D'ÉVACUATION

Les habitants de la zone touchée sont invités
à se rendre dans un lieu sûr par les itinéraires
d'évacuation désignés.

Suivez les instructions des services d'urgence.
            `

        };


        return evacuation[language];

    }


    /* INCIDENT REPORT */

    if (
        text.includes("incident report") ||
        text.includes("create report") ||
        text.includes("emergency report")
    ) {

        return {

            en: `
I can help you create an incident report.

Please provide:

1. Incident type
2. Location
3. Date and time
4. Severity
5. Description
6. Number of people affected
7. Actions already taken
            `,

            ig: `
Enwere m ike inyere gị aka ịmepụta akụkọ ihe merenụ.

Biko nye:

1. Ụdị ihe merenụ
2. Ebe o mere
3. Ụbọchị na oge
4. Ogo ihe egwu
5. Nkọwa
6. Ọnụọgụ ndị metụtara
7. Ihe e mere ugbu a
            `,

            ha: `
Zan iya taimaka maka ƙirƙirar rahoton abin da ya faru.

Da fatan za a bayar da:

1. Nau'in abin da ya faru
2. Wuri
3. Kwanan wata da lokaci
4. Matsayin haɗari
5. Bayani
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
5. Apejuwe
6. Nọmba awọn eniyan ti o kan
7. Awọn igbesẹ ti a ti gbe
            `,

            fr: `
Je peux vous aider à créer un rapport d'incident.

Veuillez fournir :

1. Type d'incident
2. Lieu
3. Date et heure
4. Niveau de gravité
5. Description
6. Nombre de personnes touchées
7. Mesures déjà prises
            `

        }[language];

    }


    /* PREPAREDNESS */

    if (
        text.includes("prepare") ||
        text.includes("preparedness") ||
        text.includes("emergency kit")
    ) {

        return {

            en: `
DISASTER PREPAREDNESS

• Keep an emergency kit.
• Store safe drinking water.
• Keep essential medicines available.
• Save emergency contacts.
• Know your evacuation routes.
• Protect important documents.
• Follow verified emergency information.
            `,

            ig: `
NKWADO MAKA ỌDACHI

• Debe akpa enyemaka mberede.
• Debe mmiri ọṅụṅụ dị ọcha.
• Debe ọgwụ ndị dị mkpa.
• Chekwaa nọmba mberede.
• Mara ụzọ mgbapụ.
• Chekwaa akwụkwọ dị mkpa.
• Soro ozi mberede a pụrụ ịtụkwasị obi.
            `,

            ha: `
SHIRYE-SHIRYEN BALA'I

• Shirya jakar agajin gaggawa.
• Ajiye ruwan sha mai tsafta.
• Samu muhimman magunguna.
• Ajiye lambobin gaggawa.
• San hanyoyin ƙaura.
• Kare muhimman takardu.
• Bi sahihan bayanan gaggawa.
            `,

            yo: `
IGBARADI FUN AJALU

• Mura apo pajawiri.
• Ṣe ipamọ omi mimu.
• Ṣe idaniloju pe awọn oogun pataki wa.
• Ṣe igbasilẹ awọn nọmba pajawiri.
• Mọ awọn ọna ijade.
• Daabobo awọn iwe pataki.
• Tẹle alaye pajawiri ti a fọwọsi.
            `,

            fr: `
PRÉPARATION AUX CATASTROPHES

• Préparez une trousse d'urgence.
• Stockez de l'eau potable.
• Gardez les médicaments essentiels disponibles.
• Conservez les numéros d'urgence.
• Connaissez vos itinéraires d'évacuation.
• Protégez les documents importants.
• Suivez les informations officielles.
            `

        }[language];

    }


    return generalResponses[language];

}



/* =========================================================
   FORMAT MESSAGE
========================================================= */

function formatMessage(text) {

    return text
        .replace(/\n/g, "<br>")
        .replace(/•/g, "<br>•");

}



/* =========================================================
   ADD CHAT MESSAGE
========================================================= */

function addMessage(
    text,
    sender = "assistant"
) {

    const message =
        document.createElement("div");


    message.className =
        `message ${sender}`;


    const avatar =
        sender === "assistant"
            ? "🤖"
            : "👤";


    message.innerHTML = `

        <div class="message-avatar">
            ${avatar}
        </div>

        <div class="message-content">

            <div class="message-name">

                ${
                    sender === "assistant"
                        ? "DisasterAI"
                        : "You"
                }

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



/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage() {

    const message =
        userInput.value.trim();


    if (!message) {

        return;

    }


    addMessage(
        message,
        "user"
    );


    userInput.value = "";


    typingIndicator
        .classList
        .remove("hidden");


    const language =
        languageSelector.value;


    setTimeout(() => {

        const response =
            generateResponse(
                message,
                language
            );


        typingIndicator
            .classList
            .add("hidden");


        addMessage(
            response,
            "assistant"
        );

    }, 700);

}



/* =========================================================
   SEND BUTTON
========================================================= */

sendButton.addEventListener(
    "click",
    sendMessage
);



/* =========================================================
   ENTER TO SEND
========================================================= */

userInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);



/* =========================================================
   QUICK QUESTIONS
========================================================= */

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



/* =========================================================
   CLEAR CHAT
========================================================= */

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



/* =========================================================
   LANGUAGE CHANGE
========================================================= */

languageSelector.addEventListener(
    "change",
    () => {

        const language =
            languageSelector.value;


        const messages = {

            en:
                "Language changed to English. How can I help you?",

            ig:
                "Agbanweela asụsụ gaa Igbo. Kedu ka m ga-esi nyere gị aka?",

            ha:
                "An canza harshe zuwa Hausa. Ta yaya zan taimaka?",

            yo:
                "A ti yi ayipada ede si di Yoruba. Bawo ni mo ṣe le ran ọ lọwọ?",

            fr:
                "La langue a été changée en français. Comment puis-je vous aider?"

        };


        addMessage(
            messages[language],
            "assistant"
        );

    }
);



/* =========================================================
   RESPONSE TOOLS
========================================================= */

document
    .querySelectorAll(".tool-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tool =
                    button.dataset.tool;


                if (tool === "evacuation") {

                    openChat();

                    userInput.value =
                        "Help me prepare an evacuation message.";

                    sendMessage();

                }


                if (tool === "report") {

                    openReport();

                }


                if (tool === "awareness") {

                    openChat();

                    userInput.value =
                        "Create a public disaster awareness message.";

                    sendMessage();

                }

            }
        );

    });



/* =========================================================
   INCIDENT REPORT
========================================================= */

const generateReport =
    document.getElementById(
        "generateReport"
    );


generateReport.addEventListener(
    "click",
    () => {

        const type =
            document.getElementById(
                "incidentType"
            ).value;


        const location =
            document.getElementById(
                "incidentLocation"
            ).value;


        const date =
            document.getElementById(
                "incidentDate"
            ).value;


        const severity =
            document.getElementById(
                "incidentSeverity"
            ).value;


        const description =
            document.getElementById(
                "incidentDescription"
            ).value;


        if (
            !type ||
            !location ||
            !description
        ) {

            alert(
                "Please complete the incident type, location and description."
            );

            return;

        }


        const report = `

AI DISASTER RESPONSE
INCIDENT REPORT
================================

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
Information recorded through
DisasterAI Response Assistant.

Recommended Action:
Notify the appropriate authorized
emergency response organization
and follow verified emergency
instructions.

================================
Generated by DisasterAI

        `;


        document
            .getElementById(
                "reportText"
            )
            .textContent = report;


        document
            .getElementById(
                "reportOutput"
            )
            .classList
            .remove("hidden");

    }
);



/* =========================================================
   COPY REPORT
========================================================= */

document
    .getElementById("copyReport")
    .addEventListener(
        "click",
        async () => {

            const text =
                document
                    .getElementById(
                        "reportText"
                    )
                    .textContent;


            try {

                await navigator
                    .clipboard
                    .writeText(text);


                alert(
                    "Incident report copied."
                );

            }

            catch (error) {

                alert(
                    "Unable to copy the report."
                );

            }

        }
    );



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const contactStatus =
    document.getElementById(
        "contactStatus"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "contactName"
            ).value.trim();


        const email =
            document.getElementById(
                "contactEmail"
            ).value.trim();


        const subject =
            document.getElementById(
                "contactSubject"
            ).value.trim();


        const message =
            document.getElementById(
                "contactMessage"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please complete all contact fields."
            );

            return;

        }


        /*
            FRONTEND DEMO

            At this stage the form validates
            and displays a success message.

            For actual email delivery, connect
            this form to a backend email service.
        */


        contactStatus
            .classList
            .remove("hidden");


        contactForm.reset();


        setTimeout(() => {

            contactStatus
                .classList
                .add("hidden");

        }, 6000);

    }
);



/* =========================================================
   INITIALIZATION
========================================================= */

console.log(
    "DisasterAI initialized successfully."
);
```
