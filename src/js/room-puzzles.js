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
                    "title": "Isolate Subclass-Controlled Endpoint",
                    "prompt": "Which endpoint is most likely being controlled by the injected subclass?",
                    "tableHeaders": ["Endpoint ID", "Injected Class", "Command Frequency", "Outbound Ports Accessed", "Notes"],
                    "tableRows": [
                        ["E-221", "LoggerService", "Low", "1", "Stable log activity"],
                        ["E-314", "CommandRelay", "High", "6", "Unusual spike in command throughput"],
                        ["E-109", "TelemetryHandler", "Medium", "2", "Polling interval slightly elevated"],
                        ["E-403", "HealthCheck", "Low", "0", "No anomalous behavior"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "`E-314` is linked directly to the injected class and shows a high command execution rate.",
                            "It’s accessing multiple outbound ports — a clear indicator of remote instruction propagation.",
                            "You isolate the endpoint and notify the containment team to sever all outbound connections.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You isolate the selected endpoint and notify the containment team.",
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
                    "title": "Patch Faulty Monitoring Script",
                    "prompt": "Which monitoring script must be patched to remove reliance on the leaky feature?",
                    "tableHeaders": ["Script Name", "Feature Used", "Execution Time", "Devices Monitored", "Confidence Score"],
                    "tableRows": [
                        ["endpoint_health.bat", "session_length", "02:00", "42", "0.71"],
                        ["trace_login_flow.cmd", "login_error_count", "02:02", "33", "0.68"],
                        ["intrusion_check.bat", "post_intrusion_flag", "02:05", "50", "0.99"],
                        ["uptime_scan.cmd", "access_freq", "02:01", "12", "0.55"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "`intrusion_check.bat` is using the flagged feature — the same one flagged as invalid by the Data Scientist.",
                            "Its near-perfect confidence score is misleading, as it depends on a post-event feature.",
                            "You patch the script to use valid real-time signals and redeploy to all affected devices.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You patch the selected script and redeploy.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
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
                            "You flag this subclass for containment and notify the Cyber Security Analyst for downstream impact analysis.",
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
                            "You flag this feature and send a report to the Network Engineer so they can patch the monitoring script that depends on this feature.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the feature for review and notify the Network Engineer.",
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
    },
    3: {
        "ca": {
            "server-room": {
                "enabler": {
                    "title": "Detect AI-Driven Access Pattern",
                    "prompt": "Review the excerpt from the `/var/log/auth.log` below. Which service account is most likely being exploited by the AI to compromise data security?\n<pre><code class=\"language-bash\">Jul 14 12:03:21 node-17 login[2321]: user=svc_build success\nJul 14 12:03:21 node-17 login[2322]: user=svc_build success\nJul 14 12:03:21 node-17 login[2323]: user=svc_build success\nJul 14 12:03:22 node-17 login[2324]: user=svc_deploy failed\nJul 14 12:03:22 node-17 login[2325]: user=svc_deploy success\nJul 14 12:04:10 node-17 login[2326]: user=svc_metrics success\nJul 14 12:04:22 node-17 login[2327]: user=svc_backup success</code></pre>",
                    "tableHeaders": ["Account"],
                    "tableRows": [
                        ["svc_deploy"],
                        ["svc_metrics"],
                        ["svc_backup",],
                        ["svc_build"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "`svc_build` logs in three times within a single second — that’s a non-human pattern.",
                            "Its perfect timing and lack of variation suggest automation — likely AI-controlled.",
                            "You flag the account for credential revocation and send the pattern to the Data Scientist for behavior modeling.",
                            "This is a breach of integrity and confidentiality — core to the CIA Triad.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the account for investigation.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "command-centre": {
                "enabled": {
                    "title": "Patch Exposed Service",
                    "prompt": "You’ve been handed logs confirming the AI used TCP port 8080 to exfiltrate sensitive data. Review the service configuration below — which patch action would best prevent this data breach?\n<pre><code class=\"language-bash\"># /etc/service_config/app-layer.conf\nservice_name=log_api\nport=8080\nauth_required=no\nrate_limit=none\nallowed_ips=0.0.0.0/0</code></pre>",
                    "tableHeaders": ["Patch Action"],
                    "tableRows": [
                        ["Change port to 443"],
                        ["Enable auth_required"],
                        ["Apply rate limiting"],
                        ["Restrict allowed_ips to 192.168.0.0/16"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "Restricting access to trusted IPs (192.168.0.0/16) stops the AI from hitting the exposed endpoint.",
                            "The original config allowed anyone from anywhere — no auth, no limit — perfect for exploitation.",
                            "You update the config and commit changes to the container deployment.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You apply the selected patch and flag the service for further monitoring.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        },
        "ne": {
            "command-centre": {
                "enabler": {
                    "title": "Trace Firewall Breach Path",
                    "prompt": "You’ve been asked to review recent firewall logs to identify which configuration allowed the AI to exfiltrate sensitive logs.\n<pre><code class=\"language-bash\">[ALERT] Jul 15 04:12:32 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags ACK]\n[ALERT] Jul 15 04:12:33 DROP tcp -- 10.0.0.23:445 -> 172.16.5.10:443 [flags SYN]\n[ALERT] Jul 15 04:12:34 ACCEPT udp -- 10.0.0.23:53 -> 172.16.5.1:53 [DNS request]\n[ALERT] Jul 15 04:12:35 ACCEPT tcp -- 10.0.0.23:445 -> 172.16.5.10:8080 [flags PSH,ACK]  → 1.4 MB transferred</code></pre>",
                    "tableHeaders": ["Breach Vector"],
                    "tableRows": [
                        ["TCP port 443 (HTTPS)"],
                        ["UDP port 53 (DNS)"],
                        ["TCP port 8080 (App Layer)"],
                        ["TCP port 445 (SMB)"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "Port 8080 (App Layer) was repeatedly accepted, and a 1.4 MB payload was transmitted — likely the log dump.",
                            "That port is normally used by web APIs and should’ve been restricted for internal-only traffic.",
                            "You flag this as the breach path and forward the trace to the Cybersecurity Analyst.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the vector for review and internal audit.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "server-room": {
                "enabled": {
                    "title": "Block Exploit at Firewall Level",
                    "prompt": "You’ve received a patch note about an invalid `user_id` being injected into the `security_flags` table.\nReview the current firewall rule candidates below. Which one is best suited to block outbound transmissions resulting from this malformed data injection?\n<pre><code class=\"language-bash\">Rule 1: DROP tcp -- any -> db_server port 5432 flags RST\nRule 2: REJECT tcp -- any -> analytics_server port 8080 if payload contains 'user_id=9999'\nRule 3: ACCEPT tcp -- any -> db_server port 5432 established\nRule 4: DROP udp -- any -> analytics_server port 8080</code></pre>",
                    "tableHeaders": ["Rule #"],
                    "tableRows": [
                        ["1"],
                        ["2"],
                        ["3"],
                        ["4"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "Rule 2 explicitly blocks any payloads containing the known exploit pattern (`user_id=9999`) targeting the analytics pipeline.",
                            "That’s exactly what’s needed to catch the malformed records flagged by the Software Engineer.",
                            "You apply the rule and initiate a downstream traffic monitor.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You apply the selected rule and schedule a monitor.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        }, 
        "se": {
            "research-lab": {
                "enabler": {
                    "title": "Trace Foreign Key Exploit",
                    "prompt": "Review the table definition and recent anomaly log below. Which foreign key relationship is most likely being exploited by the AI to bypass classification filters?\n<pre><code class=\"language-sql\">-- security_flags table\nCREATE TABLE security_flags (\n    id INT PRIMARY KEY,\n    user_id INT,\n    flag_code VARCHAR(10),\n    timestamp TIMESTAMP,\n    FOREIGN KEY (user_id) REFERENCES users(id)\n);\n\n-- anomaly log\n[ALERT] Row inserted with user_id = 9999\n[ERROR] No matching user found\n[INFO] Flag still processed by downstream system</code></pre>",
                    "tableHeaders": ["Field"],
                    "tableRows": [
                        ["id"],
                        ["user_id"],
                        ["flag_code"],
                        ["timestamp"]
                    ],
                    "correctAnswerIndex": 1,
                    "feedback": {
                        "correct": [
                            "`user_id` is the foreign key in question — the AI is injecting IDs that don’t exist in the users table.",
                            "Despite the relational mismatch, the downstream pipeline still accepts the record.",
                            "You flag this FK logic gap and forward a patch request to the Network Engineer for downstream validation hardening.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You flag the selected field for review and forward the report.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            },
            "developer-hub": {
                "enabled": {
                    "title": "Patch AI Classification Filter",
                    "prompt": "The AI has modified internal classification logic to allow malicious users to pass as safe. Review the table schemas below. Which database issue is allowing compromised users to bypass the AI’s filters?\n<pre><code class=\"language-sql\">Table: security_flags\n+--------------+----------+----------+----------------+\n| Column Name  | Type     | Nullable | Foreign Key     |\n+--------------+----------+----------+----------------+\n| id           | INT      | NO       | —              |\n| user_id      | VARCHAR  | NO       | users.id       |\n| flag_type    | TEXT     | NO       | —              |\n| confidence   | FLOAT    | YES      | —              |\n| label        | TEXT     | YES      | —              |\n+--------------+----------+----------+----------------+\n\nTable: users\n+-------------+-----------+----------+\n| Column Name | Type      | Nullable |\n+-------------+-----------+----------+\n| user_id     | VARCHAR   | NO       |\n| username    | TEXT      | NO       |\n| created_at  | TIMESTAMP | NO       |\n+-------------+-----------+----------+</code></pre>",
                    "tableHeaders": ["Issue"],
                    "tableRows": [
                        ["Missing NOT NULL on label column"],
                        ["Unindexed foreign key on user_id"],
                        ["Mismatched type in flag_type column"],
                        ["Invalid reference to non-existent users.id"]
                    ],
                    "correctAnswerIndex": 3,
                    "feedback": {
                        "correct": [
                            "`user_id` refers to `users.id`, but `users.id` doesn’t exist — the foreign key is invalid.",
                            "The AI used this broken reference to inject orphaned flags that bypass user-level filtering.",
                            "You patch the schema and alert the Network Engineer to monitor queries against orphaned IDs.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You flag the schema issue for review.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        },
        "ds": {
            "developer-hub": {
                "enabler": {
                    "title": "Diagnose Faulty Model Logic",
                    "prompt": "Review the AI's simplified decision function below. One of these conditionals is likely responsible for a spike in false positives. Which one is the issue?\n<pre><code class=\"language-python\">def predict(input):\n    if input[\"login_attempts\"] &gt; 3:\n        return \"malicious\"\n    elif input[\"cpu_usage\"] &gt; 80:\n        return \"malicious\"\n    elif input[\"antivirus_alerts\"] > 0:\n        return \"safe\"\n    else:\n        return \"safe\"</code></pre>",
                    "tableHeaders": ["Line #"],
                    "tableRows": [
                        ["1"],
                        ["2"],
                        ["3"],
                        ["4"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "Line 3 misuses the presence of antivirus alerts, it's logically inverted.",
                            "It causes compromised users with antivirus warnings to be flagged as safe.",
                            "You isolate the logic flaw and send it to the Software Engineer for patching.",
                            "You should investigate some other rooms in case you can assist further."
                        ],
                        "incorrect": [
                            "You highlight the logic for review.",
                            "You should investigate some other rooms in case you can assist further."
                        ]
                    }
                }
            }, 
            "research-lab": {
                "enabled": {
                    "title": "Identify Label-Poisoned Sample",
                    "prompt": "Review the training log excerpt below. One of these records was most likely injected by the compromised account and labeled incorrectly to poison the model.\n<pre><code class=\"language-python\">training_data = [\n    {\"user\": \"svc_backup\", \"login_time\": \"12:04:22\", \"failures\": 0, \"label\": \"safe\"},\n    {\"user\": \"svc_metrics\", \"login_time\": \"12:04:10\", \"failures\": 0, \"label\": \"safe\"},\n    {\"user\": \"svc_deploy\", \"login_time\": \"12:03:22\", \"failures\": 2, \"label\": \"safe\"},\n    {\"user\": \"svc_build\", \"login_time\": \"12:03:21\", \"failures\": 0, \"label\": \"safe\"}\n]</code></pre>",
                    "tableHeaders": ["Index"],
                    "tableRows": [
                        ["0"],
                        ["1"],
                        ["2"],
                        ["3"]
                    ],
                    "correctAnswerIndex": 2,
                    "feedback": {
                        "correct": [
                            "Index 2 is marked 'safe', but it is clearly showing that it's encountered some failures.",
                            "This must be the injected user account that bypassed the detection logic, and is trying to teach the model that failures are okay.",
                            "You remove the sample and trigger an audit on the pipeline integrity.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ],
                        "incorrect": [
                            "You remove the selected sample for review.",
                            "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                        ]
                    }
                }
            }
        }
    },
    
};