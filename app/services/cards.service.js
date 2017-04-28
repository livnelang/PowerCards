/**
 * cardsService, our helper service to get data from our server,
 * or mocking data at this case
 */
myApp.service('cardsService', function() {
    return [
        {
            "id":191,
            "name":"Cohen Residence",
            "status":"open",
            "address":"67 Hagefen, Afula, Israel, 987654",
            "degree": 74,
            "kpis":[
                {
                    "type":"Managed Power",
                    "total":13.3
                },
                {
                    "type":"Energy Today",
                    "total":35.23
                },
                {
                    "type":"Sensors",
                    "total":42
                },
                {
                    "type":"Alerts",
                    "total":20
                }
            ]
        },
        {
            "id":192,
            "name":"Alali Residence",
            "status":"open",
            "address":"10 Harel St., Tel Aviv, Israel",
            "degree": 76,
            "kpis":[
                {
                    "type":"Managed Power",
                    "total":8.42
                },
                {
                    "type":"Energy Today",
                    "total":2
                },
                {
                    "type":"Sensors",
                    "total":24
                },
                {
                    "type":"Alerts",
                    "total":0
                }
            ]
        },
        {
            "id":193,
            "name":"Almagor Caesarea",
            "status":"open",
            "address":"1 Bareket, Caesarea, Israel",
            "degree": 73,
            "kpis":[
                {
                    "type":"Managed Power",
                    "total":11.48
                },
                {
                    "type":"Energy Today",
                    "total":20
                },
                {
                    "type":"Sensors",
                    "total":17
                },
                {
                    "type":"Alerts",
                    "total":0
                }
            ]
        },
        {
            "id":194,
            "name":"Almagor Revivim",
            "status":"open",
            "address":"dieetchik, Tel Aviv, Israel",
            "degree": 75,
            "kpis":[
                {
                    "type":"Managed Power",
                    "total":2.44
                },
                {
                    "type":"Energy Today",
                    "total":1
                },
                {
                    "type":"Sensors",
                    "total":12
                },
                {
                    "type":"Alerts",
                    "total":852
                }
            ]
        }
    ]
});