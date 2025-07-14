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
                    "prompt": "Which of these endpoints is most likely under AI control and should be isolated immediately?",
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
        "ca": {
            "developer-hub": {
                "enabler": {
                    "title": "Isolate AI-Controlled Endpoint",
                    "prompt": "Which of these endpoints is most likely under AI control and should be isolated immediately?",
                    "tableHeaders": ["Time", "Device ID", "User", "Activity Summary"],
                    "tableRows": [
                        ["14:22:01", "DEV-045", "jsimons", "Attempted to disable OS-level firewall"],
                        ["14:22:03", "DEV-312", "svc_deploy", "Established 9 simultaneous outbound SSH sessions"],
                        ["14:22:08", "DEV-229", "root", "Launched code-signing tool without valid certificate"],
                        ["14:22:11", "DEV-088", "svc_devbuild", "Repeated privilege escalation attempts on internal APIs"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "Nine simultaneous outbound SSH sessions from a service account is highly suspicious and a classic lateral movement pattern.",
                            "This endpoint is likely under AI control and actively breaching internal dev tools.",
                            "You package the device ID and account details and send them to the Software Engineer for hard quarantine.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You package the device ID and account details and send them to the Software Engineer for hard quarantine.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "command-centre": {
                "enabled": {
                    "title": "Recalibrate Endpoint Detection",
                    "prompt": "Which signal should be used to replace the flawed feature in your detection rules?",
                    "tableHeaders": ["Signal", "Source", "Real-Time Availability", "False Positive Rate", "Derived From"],
                    "tableRows": [
                        ["auth_log_spike", "System Logs", "Yes", "Low", "Live Event Stream"],
                        ["post_intrusion_flag", "Audit Logs", "No", "Very Low", "Post-Analysis"],
                        ["antivirus_quarantine", "Endpoint Agent", "Partial", "Moderate", "Manual Action"],
                        ["login_session_length", "Access Logs", "Yes", "High", "Session Metadata"]
                    ],
                    "correctAnswerIndex": 0,
                    "feedback": {
                        "correct": [
                            "`auth_log_spike` is generated in real time from raw logs and has a low false positive rate.",
                            "It’s a strong candidate to replace the leaky `post_intrusion_flag` and improve endpoint detection logic.",
                            "You update your rule set to reflect the new input and begin re-evaluating detection thresholds.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You update your detection rules based on the selected signal.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        },
        "ne": {
            "research-lab": {
                "enabler": {
                    "title": "Trace Malicious Scheduled Script",
                    "prompt": "Which scheduled script is most likely injecting manipulated telemetry data into research systems?",
                    "tableHeaders": ["Script ID", "Schedule", "Data Type", "Anomaly Rate", "Triggered By"],
                    "tableRows": [
                        ["sched_001", "Every 5 min", "Temperature", "0.3%", "SensorGroupA"],
                        ["sched_019", "On reboot", "Pressure", "0.4%", "SensorGroupC"],
                        ["sched_112", "Every 10 min", "Thermal + Pressure", "8.9%", "Unknown"],
                        ["sched_072", "Manual", "Telemetry Sync", "0.0%", "System Admin"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "`sched_112` is triggered by an unknown source and has an anomaly rate over 8%.",
                            "The script runs independently and pushes altered sensor data at regular intervals.",
                            "You flag it for investigation and send the anomaly pattern to the Data Scientist.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the script for further investigation.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "server-room": {
                "enabled": {
                    "title": "Isolate Malicious Batch Script",
                    "prompt": "Which batch script was most likely generated by the AI-controlled subclass and should be flagged?",
                    "tableHeaders": ["Script Name", "Created By", "Triggered Devices", "Execution Pattern", "Last Modified"],
                    "tableRows": [
                        ["sync_config.bat", "devops-service", "5", "Hourly", "14:05"],
                        ["relay_push.cmd", "CommandRelay", "12", "Burst (x3)", "14:18"],
                        ["cleanup_logs.bat", "log-handler", "3", "Manual", "13:50"],
                        ["backup_node.cmd", "infra-agent", "4", "Nightly", "02:00"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "`relay_push.cmd` matches the subclass name and shows burst execution across multiple nodes.",
                            "It was generated by the flagged class just minutes ago, clear evidence of automated AI propagation.",
                            "You flag it for containment and block future executions from the same generator.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flagged the script for investigation and containment.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                },
                "enabled-not-available": [
                    "You begin parsing the script deployment logs tied to recent runtime activity.",
                    "But there’s no source class flagged yet — you don’t know which origin to filter by.",
                    "You back out for now, waiting on the Software Engineer to complete their trace."
                ],
                "enabled-complete": [
                    "You already traced the malicious batch script back to the AI-controlled class and flagged it for shutdown.",
                    "Runtime execution logs show containment has taken effect.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ]
            }
        }, 
        "se": {
            "command-centre": {
                "enabler": {
                    "title": "Trace Malicious Subclass Injection",
                    "prompt": "Which subclass most likely introduces AI-modified behavior and should be flagged?",
                    "tableHeaders": ["Class Name", "Base Class", "Overrides Method?", "Instantiated By", "Behavior Notes"],
                    "tableRows": [
                        ["TelemetryHandler", "DeviceService", "Yes", "CoreSystem", "Standard data polling"],
                        ["CommandRelay", "DeviceService", "Yes", "Unknown", "Injects dynamic runtime instructions"],
                        ["HealthCheck", "SystemMonitor", "No", "CoreSystem", "Runs at fixed intervals"],
                        ["LoggerService", "DeviceService", "No", "DevTools", "Logs standard operations"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "The `CommandRelay` class overrides `DeviceService` but is instantiated by an unknown source — highly suspicious.",
                            "Its dynamic instruction injection is a major red flag for AI tampering.",
                            "You flag this subclass for containment and notify the Network Engineer for downstream packet trace.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag this subclass for review and containment.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            },
            "research-lab": {
                "enabled": {
                    "title": "Identify Compromised Class",
                    "prompt": "Which class has most likely been modified by the AI and should be deprecated immediately?",
                    "tableHeaders": ["Class Name", "Origin IP", "Overrides Base?", "Active Instances", "Notes"],
                    "tableRows": [
                        ["TelemetryBase", "10.1.2.17", "Yes", "3", "Used by legacy sensors"],
                        ["JobRunnerAI", "10.1.2.56", "Yes", "84", "Recompiled last 2 hours ago"],
                        ["LoggerHelper", "127.0.0.1", "No", "12", "No recent changes"],
                        ["AuthManager", "10.1.2.78", "Yes", "6", "Deprecated in latest build"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "The `JobRunnerAI` class originated from the compromised machine and was recompiled recently.",
                            "It overrides base methods and is being instantiated far more than expected — classic signs of injection.",
                            "You flag it for immediate deprecation and isolate it from the build process.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flag the class for review and quarantine.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        },
        "ds": {
            "server-room": {
                "enabler": {
                    "title": "Flag Leaky Feature",
                    "prompt": "Which engineered feature is likely causing data leakage in the intrusion detection model?",
                    "tableHeaders": ["Feature Name", "Derived From", "Correlation to Intrusion", "Generated At", "Notes"],
                    "tableRows": [
                        ["session_length", "Login timestamp", "0.15", "Start of session", "Standard behavioral metric"],
                        ["login_error_count", "Syslog messages", "0.23", "During session", "Stable, moderately predictive"],
                        ["post_intrusion_flag", "Audit logs", "0.97", "After incident", "High correlation but occurs post-event"],
                        ["access_freq", "Access logs", "0.29", "Start of session", "Stable signal"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "`post_intrusion_flag` is generated after the incident occurs — that’s textbook data leakage.",
                            "It’s highly predictive, but only because it includes post-event knowledge.",
                            "You flag this feature and send a report to the Cybersecurity Analyst so they can patch their detection rules.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the feature for review and notify the modeling team.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "command-centre": {
                "enabled": {
                    "title": "Isolate Poisoned Feature",
                    "prompt": "Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?",
                    "tableHeaders": ["Feature", "Source", "Variance Spike", "Missing Rate", "Last Affected"],
                    "tableRows": [
                        ["pressure_avg", "SensorGroupC", "0.8%", "0.2%", "Yesterday"],
                        ["temp_rate", "SensorGroupA", "1.1%", "1.3%", "3 Days Ago"],
                        ["pressure_rate", "Unknown", "13.4%", "0.1%", "Last Hour"],
                        ["thermal_flux", "SensorGroupB", "2.5%", "0.0%", "Today"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "`pressure_rate` is sourced from an unknown system — the same signature behind the corrupted script sent over.",
                            "It shows a massive spike in variance and was last updated within the last hour.",
                            "You exclude it from your next model iteration and begin auditing upstream transformations.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You exclude the feature and log it for review.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        }
    }
};