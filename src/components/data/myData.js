

export const sideList = [
    {
        "title": "Home",
        "path": "/"
    },

    {
        "title": "Integrated Guide",
        "path": "/quickStart",
        "childrens":
        [
            {
                "title": "Quick Start",
                "path": "/quickStart"
            },

            {
                "title": "Authentication",
                "path": "/authentication"
            },

            {
                "title": "Webhooks",
                "path": "/Webhooks"
            },

            {
                "title": "Encryption",
                "path": "/Encryption"
            },
            {
                "title": "Checksum",
                "path": "/Checksum"
            },
            {
                "title": "BestPractice",
                "path": "/BestPractice"
            },
            {
                "title": "Support",
                "path": "/Support"
            }   
        ]
    },
    
    {
        "title":"Accept Payment",
        "path": "/paymentMethod",
        "childrens": 
        [
            {
                "title": "Payment Methods",
                "path": "/paymentMethod"
            },
                
            {
                "title": "Payment Page",
                "path": "/paymentPage"
            }
        ]
    },

    {
        "title":"SDKs and Plugins",
        "path": "/frontend",
        "childrens": [
            {
                "title": "Frontend Libraries",
                "path": "/frontend"
            },

            {
                "title": "Backtend Libraries",
                "path": "/backend"
            },

            {
                "title": "Mobile app SDKs",
                "path": "/mobile"
            }
        ]
    },
    
    {
        "title":"End Points",
        "childrens": [
            {
                "title": "Normal Integeration"
            },

            {
                "title": "Direct Integeration",
                "childrens": [          
                    {
                        "title": "Create Payment",
                        "path": "/createpayment"
                    },
                    {
                        "title": "Insert public key",
                        "path": "/insertPublicKey"
                    },
                    {
                        "title": "Charge Card",
                        "path": "/chargeCard"
                    },
                    {
                        "title": "Authorize Card",
                        "path": "/autorizeCard"
                    },
                    {
                        "title": "Charge by Transfer",
                        "path": "/ChargeTransfer"
                    },
                    {
                        "title": "Charge by USSD",
                        "path": "/ChargeUssd"
                    },
                    {
                        "title": "Get USSD Payment Details",
                        "path": "/GetPaymentDetails"
                    },
                    {
                        "title": "Get Transaction Details",
                        "path": "/transstatus"
                    }
                ]
            }      
            
        ]
    }
]