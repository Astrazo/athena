export const puzzles = {
    1: {
        "ca": {
            "server-room": {
                "enabler": {
                    tableHeaders: ["Time", "Source IP", "Destination", "Activity Description"],
                    tableRows: [
                        ["9:21:03", "10.0.0.45", "Server_1", "Routine status check"],
                        ["9:21:07", "172.16.5.12", "Developer_Hub", "Multiple authentication attempts failed"],
                        ["9:21:10", "10.0.0.77", "Research_Lab", "Large encrypted data transfer initiated"],
                        ["9:21:15", "192.168.3.200", "Server_Room", "Rapid port scanning detected"]
                    ],
                    correctAnswerIndex: 3,
                    feedback: {
                        correct: ["An external IP triggering a port scan alert is the digital equivalent of someone rattling every doorknob in your building at 3AM.",
                            "Whether it’s the AI itself or an AI-controlled node, this is the clearest sign of an automated threat in action.",
                            "It’s not guessing passwords or hiding in traffic... it’s hunting.",
                            "You send the IP address to the network engineer for urgent review.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        incorrect: ["You send the IP address to the network engineer for urgent review.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }
        }
    }
};