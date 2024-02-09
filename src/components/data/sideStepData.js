import { v4 as uuidv4 } from 'uuid';


export const step1 = [
    {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", id: 1},
    {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", id: 2},
    {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", id: 3},
    {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", id: 4},
    {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", id: 5},
]

export const step2 = [
    {title: "HTML Checkout", id: 1},
    {title: "In-app checkout", id: 2},
    {title: "javacript inline script", id: 3},
    {title: "Liberaries and plugins", id: 4},
    {title: "Direct API Integrations", id: 5},
];

export const overviewsteps1 = [
        {title: "Create an Account", id: uuidv4()},
        {title: "Configure your integration", id: uuidv4()},
        {title: "Complete your KYC", id: uuidv4()},
        {title: "Go live and accept payment from your user", id: uuidv4()},
    ]

    export const overviewsteps2 = [
        {title: "Log into an Account", id: uuidv4()},
        {title: "Configurate your integration", id: uuidv4()},
        {title: "Complete your KYC", id: 3},
        {title: "Go live and accept payment from your user", id: uuidv4()},
    ]

    export const overviewsteps3 = [
        {title: "Test mode vs Live Mode", id: uuidv4()},
        {title: "API Keys", id: 2},
        {title: "Retrieving your API Keys", id: uuidv4()},
        {title: "Authorizing API calls", id: uuidv4()},
    ]

    export const overviewsteps4 = [
        {title: "Account settings", id: uuidv4()},
        {title: "Get a payment link", id: uuidv4()},
        {title: "Redirect the user to the payment link", id: uuidv4()},
        {title: "After the payment", id: uuidv4()},
    ]

    export const overviewsteps5 = [
        {title: "Assemble payment details", id: 1},
        {title: "Per payment", id: 2},
        {title: "Supported payment methods", id: 3},
        {title: "Expiring payments", id: 4},
    ]

    export const testModes = [
        {title: "Live Mode", details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis,fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?,", id: uuidv4()},
        {title: "Test Mode", details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis,fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?,", id: uuidv4()}
    ]

    export const apiKeys = [
        {title: "Secret keys", details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis,fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?,", id: uuidv4()},
        {title: "Public keys", details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis,fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?,", id: uuidv4()},
        {title: "Encrypted keys", details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis,fuga alias aliquam reiciendis minima perspiciatis voluptates assumenda?,", id: uuidv4()}
    ]

    export const retrieveAPIKeys = [
        {title: "Log into RexPay account",  id: uuidv4()},
        {title: "Navigate to settings",  id: uuidv4()},
        {title: "Select the API Keys in the Development section to the menu to view and copy your keys.", id: uuidv4()}
    ]

    export const installWithNpm = [
        {title: "// INSTALL WITH: NPM | REXPAY-NODE-V3"}
    ]

    export const paymentMethods = [
        {title: "Card payment", value:"card", id: uuidv4()},
        {title: "Bank account (direct debit)", value:"account", id: uuidv4()},
        {title: "Bank Transfer", value:"banktransfer", id: uuidv4()},
        {title: "QR payment", value:"nqr", id: uuidv4()},
        {title: "USSD", value:"ussd", id: uuidv4()},
        {title: "Credit payment", value:"credit", id: uuidv4()},
    ];

    export const requirements = [
        {title: "Key", required:"Yes", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "email", required:"Yes", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "amount", required:"Yes", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "ref", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "currency", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "channels", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "metadata", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "label", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "callback", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "onBankTransferConfirmatuionPending", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "onClose", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
    ];

    export const require4Sigle = [
        {title: "subaccount", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "transaction_charge", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "bearer", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()}
    ];

    export const require4multi = [
        {title: "plan", required:"Yes", description: "Lorem, ipsum dolor sit amet", id: uuidv4()},
        {title: "quantity", required:"No", description: "Lorem, ipsum dolor sit amet", id: uuidv4()}
    ];

    export const HandlingList = [
        {
            title: "pending",  
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        {
            title: "timeout", 
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
         id: uuidv4()
        },
        {
            title: "sucess",  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        {
            title: "send_birthday", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        {
            title: "send_otp", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        {
            title: "send_otp", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
    ];

    export const javaMessage = [
        { 
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        { 
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        { 
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },
        { 
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, accusamus. Sequi, qui quis sit dignissimos ipsa quos tempore.", 
            id: uuidv4()
        },

    ];