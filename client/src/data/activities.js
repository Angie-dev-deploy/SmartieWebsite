import roflag from "../resources/roflag.webp";
// import italyflag from "../resources/italyflag.webp";
// import spainflag from "../resources/spainflag.webp";
// import sloveniaflag from "../resources/sloveniaflag.webp";
// import dummyPDF from "../resources/dummy.pdf";
// import dummyimage from "../resources/dummyimage.webp";
// import dummyimage2 from "../resources/dummyimage2.webp";
// import dummyimage3 from "../resources/dummyimage3.webp";
// import dummyimage4 from "../resources/dummyimage4.webp";
// import dummyimage5 from "../resources/dummyimage5.webp";
import tm1_1 from "../resources/images/TPM 1 - 1.jpg";
import tm1_2 from "../resources/images/TPM 1 - 2.jpg";
import tm1_3 from "../resources/images/TPM-1-3.mp4";
import tm1_4 from "../resources/images/TPM 1 - 4.jpg";
import tm1_5 from "../resources/images/TPM 1 - 5.jpg";
import tm1_6 from "../resources/images/TPM 1 - 6.jpg";
import tm1_7 from "../resources/images/TPM 1 - 7.jpg";
import tm1_8 from "../resources/images/TPM 1 - 8.jpg";
import tm1_9 from "../resources/images/TPM 1 - 9.jpeg";

import d211 from "../resources/results/D.2.1.1. Alliance for Artificial Intelligence in Higher Education - SMARTIE.pdf";
import d212 from "../resources/results/D.2.1.2. Memorandum of Understanding.pdf";
import d221 from "../resources/results/D.2.2.1. E-questionnaire for higher education.pdf";
import d222 from "../resources/results/D.2.2.2. E-questionnaire for stakeholders.pdf";
import d223 from "../resources/results/D.2.2.3. Survey among SMARTIE and other universities.pdf";
import d224 from "../resources/results/D.2.2.4. Survey among stakeholders.pdf";
import d225_1 from "../resources/results/D.2.2.5. Analysis of the results - Stakeholders.pdf";
import d225_2 from "../resources/results/D.2.2.5. Analysis of the results - HEIs.pdf";
import d226 from "../resources/results/D.2.2.6. Poll of disciplines and subjects that will be updated.pdf";
import d421 from "../resources/results/D.4.2.1. Dissemination Action Strategy.pdf";


export const webinars = [
    {
        date: "To be announced",
        title: "International Webinar 2027",
        heldBy: "",
        color: "var(--secondary-background-color)",
        disabledColor: "var(--activity-disabled-color)",
    },
    {
        date: "To be announced",
        title: "Learning Teaching Training Activities, 2027",
        heldBy: "",
        color: "var(--secondary-background-color)",
        disabledColor: "var(--activity-disabled-color)",
    },
    // {
    //     date: "2025-11-14",
    //     title: "First webinar - \"Webinar Title\" ",
    //     heldBy: "University of Craiova",
    //     color: "var(--secondary-background-color)",
    //     disabledColor: "var(--activity-disabled-color)",
    // },
    // {
    //     date: "2025-12-03",
    //     title: "Second webinar - \"Webinar Title\" ",
    //     heldBy: "University of Craiova",
    //     color: "var(--secondary-background-color)",
    //     disabledColor: "var(--activity-disabled-color)",
    // },
    // {
    //     date: "2026-01-25",
    //     title: "Third webinar - \"Webinar Title\" ",
    //     heldBy: "University of Craiova",
    //     color: "var(--secondary-background-color)",
    //     disabledColor: "var(--activity-disabled-color)",
    // },
    // {
    //     date: "2026-02-20",
    //     title: "Fourth webinar - \"Webinar Title\" ",
    //     heldBy: "University of Craiova",
    //     color: "var(--secondary-background-color)",
    //     disabledColor: "var(--activity-disabled-color)",
    // },
    // {
    //     date: "2026-04-02",
    //     title: "Fifth webinar - \"Webinar Title\" ",
    //     heldBy: "University of Craiova",
    //     color: "var(--secondary-background-color)",
    //     disabledColor: "var(--activity-disabled-color)",
    // }
];

export const meetings = [
    {
        flagPicture: roflag,
        date: "20-21.11.2024",
        location: "Craiova, Romania",
        description: "TPM 1 - KICK-OFF MEETING",
        heldBy: "",
    },
    // {
    //     flagPicture: italyflag,
    //     date: "2025-12-03",
    //     location: "Bari, Italy",
    //     description: "meeting related to",
    //     heldBy: "University of Craiova",
    // },
    // {
    //     flagPicture: spainflag,
    //     date: "2026-01-26",
    //     location: "Malaga, Spain",
    //     description: "meeting related to",
    //     heldBy: "University of Craiova",
    // },
    // {
    //     flagPicture: roflag,
    //     date: "2026-02-20",
    //     location: "Cluj-Napoca, Romania",
    //     description: "meeting related to",
    //     heldBy: "Babes-Bolyai University",
    // },
    // {
    //     flagPicture: sloveniaflag,
    //     date: "2026-04-02",
    //     location: "Ljubljana, Slovenia",
    //     description: "meeting related to",
    //     heldBy: "University of Ljubljana",
    // }
];

export const downloadFiles = [

    {
        type: "",
        name: "D2.1.1. Alliance for Artificial Intelligence in Higher Education - SMARTIE",
        files: [
            {
                title: "D2.1.1. Alliance for Artificial Intelligence in Higher Education - SMARTIE",
                link: d211,
                counterKey: "d211-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.1.2. Memorandum of Understanding signed by legal representatives of founders of SMARTIE",
        files: [
            {
                title: "D2.1.2. Memorandum of Understanding signed by legal representatives of founders of SMARTIE",
                link: d212,
                counterKey: "d212-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.2.1. E-questionnaire for higher education",
        files: [
            {
                title: "D2.2.1. E-questionnaire for higher education",
                link: d221,
                counterKey: "d221-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D.2.2.2. E-questionnaire for stakeholders",
        files: [
            {
                title: "D.2.2.2. E-questionnaire for stakeholders",
                link: d222,
                counterKey: "d222-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.2.3. Survey among SMARTIE and other universities",
        files: [
            {
                title: "D2.2.3. Survey among SMARTIE and other universities",
                link: d223,
                counterKey: "d223-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.2.4. Survey among stakeholders",
        files: [
            {
                title: "D2.2.4. Survey among stakeholders",
                link: d224,
                counterKey: "d224-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.2.5. Analysis of the results",
        files: [
            {
                title: "Analysis of the results - Stakeholders",
                link: d225_1,
                counterKey: "d2251-downloads",
            },
            {
                title: "Analysis of the results - HEIs",
                link: d225_2,
                counterKey: "d2252-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D2.2.6. Poll of disciplines and subjects that will be updated",
        files: [
            {
                title: "D2.2.6. Poll of disciplines and subjects that will be updated",
                link: d226,
                counterKey: "d226-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D3.1.1. Guidelines for teachers and researchers",
        files: [
            {
                title: "D3.1.1. Guidelines for teachers and researchers",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.2.1. Guidelines for students and SEND students",
        files: [
            {
                title: "D3.2.1. Guidelines for students and SEND students",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.2.2. Guidelines for general public",
        files: [
            {
                title: "D3.2.2. Guidelines for general public",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.3.1. Micro-courses updated using guideline for teachers",
        files: [
            {
                title: "D3.3.1. Micro-courses updated using guideline for teachers",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.3.2. Micro-presentations covering examples presented in guideline",
        files: [
            {
                title: "D3.3.2. Micro-presentations covering examples presented in guideline",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.3.3. Video for inclusive education of people with disabilities",
        files: [
            {
                title: "D3.3.3. Video for inclusive education of people with disabilities",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D3.4.1. LTT for teachers",
        files: [
            {
                title: "D3.4.1. LTT for teachers",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.1.1. National Strategies related to AI",
        files: [
            {
                title: "D4.1.1. National Strategies related to AI",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.1.2. Online survey related to draft version of European Strategy for AI in HE",
        files: [
            {
                title: "D4.1.2. Online survey related to draft version of European Strategy for AI in HE",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.1.3. Analysis of answers",
        files: [
            {
                title: "D4.1.3. Analysis of answers",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.1.4. European Strategy for Integration of AI in HE",
        files: [
            {
                title: "D4.1.4. European Strategy for Integration of AI in HE",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.2.1. Dissemination Action Strategy",
        files: [
            {
                title: "D4.2.1. Dissemination Action Strategy",
                link: d421,
                counterKey: "d421-downloads",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.1. National Workshops",
        files: [
            {
                title: "D4.3.1. National Workshops",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.2. Online survey related to the quality of products",
        files: [
            {
                title: "D4.3.2. Online survey related to the quality of products",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.3. Online survey among participants to workshops",
        files: [
            {
                title: "D4.3.3. Online survey among participants to workshops",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.4. Analysis of answers and internal review",
        files: [
            {
                title: "D4.3.4. Analysis of answers and internal review",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.5. International Webinar",
        files: [
            {
                title: "D4.3.5. International Webinar",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D4.3.6. Scientific articles",
        files: [
            {
                title: "D4.3.6. Scientific articles",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D5.1.1. Report on project activities impact on teachers, researchers and students and SEND students",
        files: [
            {
                title: "D5.1.1. Report on project activities impact on teachers, researchers and students and SEND students",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D5.2.1. Report on project activities impact on general public",
        files: [
            {
                title: "D5.2.1. Report on project activities impact on general public",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D5.2.2. Report on project results impact on general public",
        files: [
            {
                title: "D5.2.2. Report on project results impact on general public",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D5.3.1. Report on project results impact on HE and other education institutions",
        files: [
            {
                title: "D5.3.1. Report on project results impact on HE and other education institutions",
                link: "",
                counterKey: "",
            }
        ],
    },

    {
        type: "",
        name: "D5.4.1. Strategy for follow up actions to boost AI in HE",
        files: [
            {
                title: "D5.4.1. Strategy for follow up actions to boost AI in HE",
                link: "",
                counterKey: "",
            }
        ]
    },
    {
        type: "",
        name: "D5.4.2. Roadmap for follow up actions to extend SMARTIE",
        files: [
            {
                title: "D5.4.2. Roadmap for follow up actions to extend SMARTIE",
                link: "",
                counterKey: "",
            }
        ],
    },
    


];

export const images = [
    {
        path: tm1_1,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_2,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_3,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_4,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_5,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_6,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_7,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_8,
        image_title: "Craiova, 2024 (KOM)"
    },
    {
        path: tm1_9,
        image_title: "Craiova, 2024 (ASR Conference)"
    }
    
];