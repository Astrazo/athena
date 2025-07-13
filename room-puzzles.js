export const roomPuzzles = {
    1: {
        "ca": {
            "server-room": {
                "enabler": {
                    "title": "Identify Rougue IP Address",
                    "prompt": "Given this traffic, which IP address most likely belongs to the Rougue AI and must be urgently reviewed?",
                    "tableHeaders": ["Timestamp", "Source IP", "Destination", "Activity Description"],
                    "tableRows": [
                        ["9:21:03", "10.0.0.45", "Server_1", "Routine status check"],
                        ["9:21:07", "172.16.5.12", "Developer_Hub", "Multiple authentication attempts failed"],
                        ["9:21:10", "10.0.0.77", "Research_Lab", "Large encrypted data transfer initiated"],
                        ["9:21:15", "192.168.3.200", "Server_Room", "Rapid port scanning detected"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "An external IP triggering a port scan alert is the digital equivalent of someone rattling every doorknob in your building at 3AM.",
                            "Whether it’s the AI itself or an AI-controlled node, this is the clearest sign of an automated threat in action.",
                            "It’s not guessing passwords or hiding in traffic... it’s hunting.",
                            "You send the IP address to the network engineer for urgent review.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You send the IP address to the network engineer for urgent review.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "research-lab": {
                "enabled": {
                    "title": "Idenfity Suspicious Login Attempt",
                    "prompt": "Which server login attempt confirms the Data Scientist's suspicions?",
                    "tableHeaders": ["Timestamp", "IP Adress", "Location", "Device", "Result"],
                    "tableRows": [
                        ["2025-07-01 02:12:43", "192.168.1.10", "Melbourne", "DevStation01", "Success"],
                        ["2025-07-01 02:14:05", "203.0.113.55", "Tokyo", "Unknown", "Success"],
                        ["2025-07-01 02:14:22", "192.168.1.10", "Melbourne", "DevStation01", "Active Session"],
                        ["2025-07-01 02:15:10", "192.168.1.12", "Melbourne", "DataNode03", "Success"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "The login pattern shows a classic sign of account compromise — an external IP slipping in between legitimate internal logins.",
                            "Even if the credentials were correct, the location, device, or timing should raise red flags.",
                            "This isn’t just a user on a VPN. It’s likely the Rogue AI probing for elevated access or persistence.",
                            "You’ve flagged the user as compromised.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flag the user as compromised.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        },
        "ne": {
            "command-centre": {
                "enabler": {
                    "title": "Identify Compromised Interface",
                    "prompt": "Which interface did the AI use to infiltrate the network?",
                    "tableHeaders": ["Interface", "Avg. Traffic", "Recent Traffic", "Protocols"],
                    "tableRows": [
                        ["eth0", "200 MB", "195 MB", "SSH, HTTP"],
                        ["eth1", "150 MB", "580 MB", "SSH, TCP, Unknown"],
                        ["eth2", "300 MB", "310 MB", "FTP, SMB"],
                        ["eth3", "180 MB", "175 MB", "DNS, NTP"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "eth1’s lighting up like a Christmas tree.",
                            "Way above normal traffic, and something’s talking on an unknown protocol.",
                            "That’s not just noise, that’s a breach vector.",
                            "You flag it for follow-up by the Software Engineer.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the interace for follow-up.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "developer-hub": {
                "enabled": {
                    "title": "Identify Infected Nodes",
                    "prompt": "Which node has the flagged IP interacted with the most?",
                    "tableHeaders": ["Destination IP", "Protocol", "Connection Count", "Last Seen"],
                    "tableRows": [
                        ["192.168.1.20", "ICMP", "0", "—"],
                        ["192.168.2.10", "TCP", "4", "08:53"],
                        ["192.168.3.40", "UDP", "1", "08:50"],
                        ["192.168.3.200", "TCP", "13", "08:51"],
                        ["10.0.0.45", "TCP", "3", "08:49"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "192.168.3.200 shows the most consistent interaction with the flagged IP.",
                            "This node has been contacted repeatedly, and its location deep in the network makes it a perfect bridge for lateral movement.",
                            "You isolate the destination paths and forward the trace to the Software Engineer.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flagged the node for monitoring.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        }, 
        "se": {
            "research-lab": {
                "enabler": {
                    "title": "Identify Issue Git Commit",
                    "prompt": "Which git commit may have caused the AI to go rougue?",
                    "tableHeaders": ["Commit ID", "Message", "Effect Summary"],
                    "tableRows": [
                        ["AA12", "Skip null checks in value multiplier", "May introduce NaNs downstream"],
                        ["ZZ93", "Hardcode values temporarily for testing", "Inserts extreme outliers, can poison ML models"],
                        ["YY54", "Convert input to string for log display", "Type mismatch risk in pipelines"],
                        ["BB38", "Add optional status field", "Adds flexibility, no core risk"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "Commit ZZ93 introduces a malicious hardcoded value that could poison training data.",
                            "This is likely how the AI's logic was corrupted.",
                            "You’ve flagged the commit to be investigated by the Data Scientist.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You’ve flagged the commit to be investigated by the Data Scientist.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "server-room": {
                "enabled": {
                    "title": "Identify Infected Process",
                    "prompt": "Which process should be contained?",
                    "tableHeaders": ["Process Name", "Interface", "Memory Usage", "Hash Verified"],
                    "tableRows": [
                        ["db_sync", "eth0", "20 MB", "No", "Yes"],
                        ["log_agent", "eth1", "32 MB", "No", "Yes"],
                        ["systemd-1", "eth1", "300 MB", "Yes", "No"],
                        ["cache_clean", "eth2", "28 MB", "No", "Yes"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "That’s not the real systemd process. It’s consuming 10x normal memory, and it’s not even hash-verified.",
                            "The AI’s likely masquerading behind it.",
                            "You flag `systemd-1` for code review and containment trace.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flagged the process for review.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            },
        },
        "ds": {
            "developer-hub": {
                "enabler": {
                    "title": "Identify Compromised Account",
                    "prompt": "Which account have many been used by the AI to access the server?",
                    "tableHeaders": ["User ID", "Session Count", "Avg. Actions", "Peak Memory (mb)"],
                    "tableRows": [
                        ["user_01", "4", "3.2", "420"],
                        ["user_02", "5", "3.5", "390"],
                        ["user_03", "4", "3.0", "405"],
                        ["user_99", "2", "15.2", "950"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "User `user_99` is acting nothing like the others.",
                            "Double the memory, five times the activity rate, that’s not just fast typing, that’s non-human.",
                            "Flagging for escalation by the Cyber Security Analyst.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the user for escalation by the Cyber Security Analyst.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "command-centre": {
                "enabled": {
                    "title": "Utilise Correct Data Cleaning Technique",
                    "prompt": "How should this data be cleaned to help calm down the model's wild predictions?",
                    "tableHeaders": ["Cleaning Step", "Rationale"],
                    "tableRows": [
                        ["Drop or impute missing values", "A value is missing in one of the rows."],
                        ["Remove or clip outliers", "All values are abnormally high, well beyond typical bounds."],
                        ["Cast to numeric type", "Values are stored as strings, could break math operations."],
                        ["No cleaning needed", "Data appears complete and well-typed."]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "Extreme outliers like these can completely destabilise models, especially if they weren’t expected in training.",
                            "Clipping or removing them prevents the AI from learning skewed patterns or reacting to poisoned inputs.",
                            "You clean the data and flag the commit.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You put your expertise into action and resolve the issue.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        }
    }, 
    
    2: {

    }
};