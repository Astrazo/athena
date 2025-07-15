// dialogue.js
export const roomActions = {
    1: {
        "ca": {
            "server-room": {
                "Investigate Server Traffic Logs": [
                    "Scanning through the IDS logs, you notice suspicious traffic indicative of automated reconnaissance and rapid-fire attacks.",
                    "Given this traffic, which IP address most likely belongs to the Rougue AI and must be urgently reviewed?"
                ],
                "Check Firewall Configuration": [
                    "This won't help right now."
                ],
                "Review Active Directory Logs": [
                    "This won't help right now."
                ],
                "Analyse Authentication Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Investigate Server Traffic Logs"
            },
            "command-centre": {
                "Trace Endpoint Behavior by Class": [
                    "This won't help right now."
                ],
                "Update Threat Intelligence Feeds": [
                    "This won't help right now."
                ],
                "Cross-check Audit Trail Against Global Events": [
                    "This won't help right now."
                ],
                "Patch Exposed Service": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "developer-hub": {
                "Review Access Control File": [
                    "This won't help right now."
                ],
                "Check Developer Login Tokens": [
                    "This won't help right now."
                ],
                "Trigger Endpoint Containment Protocol": [
                    "This won't help right now."
                ],
                "Analyze Recent API Security Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "research-lab": {
                "Review Email Gateway Rules": [
                    "This won't help right now."
                ],
                "Look Up User Activity History": [
                    "You quickly pull up the latest user connection data.",
                    "As an expert in cyber security, you're used to analysing things like login times, locations, and device patterns to determine if an account has been hijacked.",
                    "If anything looks off here, you should flag it immediately before the AI burrows deeper."
                ],
                "Reboot Threat Detection System": [
                    "This won't help right now."
                ],
                "Run Network Speed Diagnostics": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Look Up User Activity History"
            }
        },
        "ne": {
            "server-room": {
                "Audit Monitoring Scripts": [
                    "This won't help right now."
                ],
                "Reconfigure VLAN Assignments": [
                    "This won't help right now."
                ],
                "Check UPS and Cooling Network Interfaces": [
                    "This won't help right now."
                ],
                "Patch Firewall Configuration": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "command-centre": {
                "Review Network Topology Diagrams": [
                    "This won't help right now."
                ],
                "Analyse Firewall Logs": [
                    "This won't help right now."
                ],
                "Examine Firewall Rule Propagation": [
                    "This won't help right now."
                ],
                "Compare Interface Access Logs": [
                    "You cross-reference interface logs from the Command Centre for irregular access times, frequency spikes, or unauthorized devices.",
                    "One of them doesn’t match the baseline. Which one is it?"
                ],
                "CORRECT_ACTION": "Compare Interface Access Logs"
            },
            "developer-hub": {
                "Audit Static IP Assignments": [
                    "This won't help right now."
                ],
                "Check Network Mapping for Dev Machines": [
                    "This won't help right now."
                ],
                "Monitor DHCP Lease Table": [
                    "This won't help right now."
                ],
                "Trace API Traffic from Flagged IP": [
                    "You filter network flow logs for the flagged IP.",
                    "Several API calls were routed through the Developer Hub — a few to undocumented endpoints.",
                    "Which destination node has had the highest interaction with the rogue IP and should be flagged for monitoring?"
                ],
                "CORRECT_ACTION": "Trace API Traffic from Flagged IP"
            },
            "research-lab": {
                "Trace MAC Address Conflicts": [
                    "This won't help right now."
                ],
                "Analyze Network Throughput to Lab Nodes": [
                    "This won't help right now."
                ],
                "Scan for Rogue Access Points": [
                    "This won't help right now."
                ],
                "Trigger Batch Job Trace": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "se": {
            "developer-hub": {
                "Review Git Commit History": [
                    "This won't help right now."
                ],
                "Trace Endpoint Access Logs": [
                    "This won't help right now."
                ],
                "Review Classification Schema": [
                    "This won't help right now."
                ],
                "Check Running Dev Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },

            "server-room": {
                "Audit Running Processes for Anomalies": [
                    "You scan the server’s running processes for unusual memory usage, privilege elevation, and unsigned binaries.",
                    "One process doesn’t match any verified signatures and is using significantly more resources than the rest.",
                    "Which process should be flagged for investigation?"
                ],
                "Review Microservice Startup Logs": [
                    "This won't help right now."
                ],
                "Check Runtime Errors on Backend Services": [
                    "This won't help right now."
                ],
                "Validate Service Dependencies": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Audit Running Processes for Anomalies"
            },

            "research-lab": {
                "Investigate Foreign Key Mismatch": [
                    "This won't help right now."
                ],
                "Review Git Commit History": [
                    "You open the commit logs from the last deployment window.",
                    "One commit stands out. It modified a crucial dataset used by the AI in production.",
                    "You flag it for rollback and notify the Data Scientist to help clean up the mess.",
                    "Which git commit did you flag?"
                ],
                "Review Model Execution Logs": [
                    "This won't help right now."
                ],
                "Review Active Class Overrides": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Review Git Commit History"
            },

            "command-centre": {
                "Scan for Unsecured Internal APIs": [
                    "This won't help right now."
                ],
                "Trigger Class Hierarchy Scan": [
                    "This won't help right now."
                ],
                "Review CI/CD Deployment Logs": [
                    "This won't help right now."
                ],
                "Audit Token Usage in System Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "ds": {
            "server-room": {
                "Analyse Model Resource Usage": [
                    "This won't help right now."
                ],
                "Check Model Serving Latency": [
                    "This won't help right now."
                ],
                "Run Feature Engineering Audit": [
                    "This won't help right now."
                ],
                "Inspect Containerized Model Deployments": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "command-centre": {
                "Adjust Intrusion Detection Signals": [
                    "This won't help right now."
                ],
                "Review Alert Thresholds for Data Anomalies": [
                    "This won't help right now."
                ],
                "Commence An Exploratory Data Analysis Session": [
                    "Early analysis results show wild predictions by models that were previously operating correctly.",
                    "A quick check of the summary stats reveals the issue.",
                    "What’s the best cleaning approach to prevent downstream failures caused by this commit?"
                ],
                "Audit Scheduled Retraining Jobs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Commence An Exploratory Data Analysis Session"
            },
            "developer-hub": {
                "Verify Data Pipeline Integrity": [
                    "This won't help right now."
                ],
                "Inspect Feature Store Activity": [
                    "This won't help right now."
                ],
                "Analyse User Session Logs": [
                    "You load 24 hours of user session logs and run statistical comparisons across key behavioral metrics.",
                    "One user shows a clear deviation with unusual access frequency, irregular login times, and inconsistent device usage.",
                    "What user is this?"
                ],
                "Audit Prediction Rules": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Analyse User Session Logs"
            },
            "research-lab": {
                "Review Training Data Samples": [
                    "This won't help right now."
                ],
                "Check Dataset Integrity and Labeling": [
                    "This won't help right now."
                ],
                "Analyze Experiment Metrics for Outliers": [
                    "This won't help right now."
                ],
                "Compare Performance of Experimental Models": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        }
    },
    2: {
        "ca": {
            "server-room": {
                "Investigate Server Traffic Logs": [
                    "This won't help right now."
                ],
                "Check Firewall Configuration": [
                    "This won't help right now."
                ],
                "Review Active Directory Logs": [
                    "This won't help right now."
                ],
                "Analyse Authentication Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "command-centre": {
                "Trace Endpoint Behavior by Class": [
                    "You scan endpoints reporting custom subclass behavior.",
                    "The Software Engineer flagged a specific subclass as malicious, likely injecting commands remotely.",
                    "Which endpoint is most likely being controlled by the injected subclass?"
                ],
                "Update Threat Intelligence Feeds": [
                    "This won't help right now."
                ],
                "Cross-check Audit Trail Against Global Events": [
                    "This won't help right now."
                ],
                "Patch Exposed Service": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Trace Endpoint Behavior by Class"
            },
            "developer-hub": {
                "Review Access Control File": [
                    "This won't help right now."
                ],
                "Check Developer Login Tokens": [
                    "This won't help right now."
                ],
                "Trigger Endpoint Containment Protocol": [
                    "You launch the containment protocol, scanning logs for suspicious internal activity.",
                    "Several machines are acting strangely — service accounts behaving outside normal baselines.",
                    "Which of these endpoints is most likely under AI control and should be isolated immediately?"
                ],
                "Analyze Recent API Security Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Trigger Endpoint Containment Protocol"
            },
            "research-lab": {
                "Review Email Gateway Rules": [
                    "This won't help right now."
                ],
                "Look Up User Activity History": [
                    "This won't help right now."
                ],
                "Reboot Threat Detection System": [
                    "This won't help right now."
                ],
                "Run Network Speed Diagnostics": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "ne": {
            "server-room": {
                "Audit Monitoring Scripts": [
                    "You inspect your batch scripts used for intrusion detection across endpoints.",
                    "Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"
                ],
                "Reconfigure VLAN Assignments": [
                    "This won't help right now."
                ],
                "Check UPS and Cooling Network Interfaces": [
                    "This won't help right now."
                ],
                "Patch Firewall Configuration": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Audit Monitoring Scripts"
            },
            "command-centre": {
                "Review Network Topology Diagrams": [
                    "This won't help right now."
                ],
                "Analyse Firewall Logs": [
                    "This won't help right now."
                ],
                "Review Recent Script Executions": [
                    "This won't help right now."
                ],
                "Compare Interface Access Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "developer-hub": {
                "Audit Static IP Assignments": [
                    "This won't help right now."
                ],
                "Check Network Mapping for Dev Machines": [
                    "This won't help right now."
                ],
                "Monitor DHCP Lease Table": [
                    "This won't help right now."
                ],
                "Trace API Traffic from Flagged IP": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "research-lab": {
                "Trace MAC Address Conflicts": [
                    "This won't help right now."
                ],
                "Analyze Network Throughput to Lab Nodes": [
                    "This won't help right now."
                ],
                "Scan for Rogue Access Points": [
                    "This won't help right now."
                ],
                "Trigger Batch Job Trace": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "se": {
            "developer-hub": {
                "Review Git Commit History": [
                    "This won't help right now."
                ],
                "Trace Endpoint Access Logs": [
                    "This won't help right now."
                ],
                "Review Classification Schema": [
                    "This won't help right now."
                ],
                "Check Running Dev Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },

            "server-room": {
                "Audit Running Processes for Anomalies": [
                    "This won't help right now."
                ],
                "Review Microservice Startup Logs": [
                    "This won't help right now."
                ],
                "Check Runtime Errors on Backend Services": [
                    "This won't help right now."
                ],
                "Validate Service Dependencies": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },

            "research-lab": {
                "Investigate Foreign Key Mismatch": [
                    "This won't help right now."
                ],
                "Review Git Commit History": [
                    "This won't help right now."
                ],
                "Review Model Execution Logs": [
                    "This won't help right now."
                ],
                "Review Active Class Overrides": [
                    "You scan recently modified classes in the build pipeline.",
                    "One of them originates from the compromised developer machine flagged earlier.",
                    "Which class has most likely been modified by the AI and should be deprecated immediately?"
                ],
                "CORRECT_ACTION": "Review Active Class Overrides"
            },

            "command-centre": {
                "Scan for Unsecured Internal APIs": [
                    "This won't help right now."
                ],
                "Trigger Class Hierarchy Scan": [
                    "You launch a scan of active subclasses extending from core system services.",
                    "One of them is behaving differently — injecting logic at runtime from an unknown source.",
                    "Which subclass most likely introduces AI-modified behavior and should be flagged?"
                ],
                "Review CI/CD Deployment Logs": [
                    "This won't help right now."
                ],
                "Audit Token Usage in System Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Trigger Class Hierarchy Scan"
            }
        },
        "ds": {
            "server-room": {
                "Analyze Model Resource Usage": [
                    "This won't help right now."
                ],
                "Check Model Serving Latency": [
                    "This won't help right now."
                ],
                "Run Feature Engineering Audit": [
                    "You audit the engineered features feeding into the real-time detection model.",
                    "One of them has an unusually high correlation with intrusion events. Suspiciously high...",
                    "Which engineered feature is likely causing data leakage in the intrusion detection model?"
                ],
                "Inspect Containerized Model Deployments": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Run Feature Engineering Audit"
            },
            "command-centre": {
                "Analyse Feature Stability Report": [
                    "You compare the variance and update timings of key engineered features.",
                    "One of them lines up exactly with the suspicious script injected earlier.",
                    "Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"
                ],
                "Review Alert Thresholds for Data Anomalies": [
                    "This won't help right now."
                ],
                "Commence An Exploratory Data Analysis Session": [
                    "This won't help right now."
                ],
                "Audit Scheduled Retraining Jobs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Analyse Feature Stability Report"
            },
            "developer-hub": {
                "Verify Data Pipeline Integrity": [
                    "This won't help right now."
                ],
                "Inspect Feature Store Activity": [
                    "This won't help right now."
                ],
                "Analyse User Session Logs": [
                    "This won't help right now."
                ],
                "Audit Prediction Rules": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "research-lab": {
                "Review Training Data Samples": [
                    "This won't help right now."
                ],
                "Check Dataset Integrity and Labeling": [
                    "This won't help right now."
                ],
                "Analyze Experiment Metrics for Outliers": [
                    "This won't help right now."
                ],
                "Compare Performance of Experimental Models": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        }
    },
    3: {
        "ca": {
            "server-room": {
                "Investigate Server Traffic Logs": [
                    "This won't help right now."
                ],
                "Check Firewall Configuration": [
                    "This won't help right now."
                ],
                "Review Active Directory Logs": [
                    "This won't help right now."
                ],
                "Analyse Authentication Logs": [
                    "You load the latest authentication dump from `/var/log/auth.log`.",
                    "Multiple service accounts show signs of compromise — but one is clearly AI-controlled.",
                    "Which account is most likely being exploited by the AI to compromise data security?"
                ],
                "CORRECT_ACTION": "Analyse Authentication Logs"
            },
            "command-centre": {
                "Trace Endpoint Behavior by Class": [
                    "This won't help right now."
                ],
                "Update Threat Intelligence Feeds": [
                    "This won't help right now."
                ],
                "Cross-check Audit Trail Against Global Events": [
                    "This won't help right now."
                ],
                "Patch Exposed Service": [
                    "You open the config file of the app-layer service identified by the Network Engineer.",
                    "It’s wide open — no auth, no rate limiting, open to the whole internet.",
                    "Which patch would best prevent a repeat of the AI's data breach?"
                ],
                "CORRECT_ACTION": "Patch Exposed Service"
            },
            "developer-hub": {
                "Review Access Control File": [
                    "This won't help right now."
                ],
                "Check Developer Login Tokens": [
                    "This won't help right now."
                ],
                "Trigger Endpoint Containment Protocol": [
                    "This won't help right now."
                ],
                "Analyze Recent API Security Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "research-lab": {
                "Review Email Gateway Rules": [
                    "This won't help right now."
                ],
                "Look Up User Activity History": [
                    "This won't help right now."
                ],
                "Reboot Threat Detection System": [
                    "This won't help right now."
                ],
                "Run Network Speed Diagnostics": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "ne": {
            "server-room": {
                "Audit Monitoring Scripts": [
                    "You inspect your batch scripts used for intrusion detection across endpoints.",
                    "Which monitoring script must be patched to remove reliance on the leaky feature the Data Scientist flagged?"
                ],
                "Reconfigure VLAN Assignments": [
                    "This won't help right now."
                ],
                "Check UPS and Cooling Network Interfaces": [
                    "This won't help right now."
                ],
                "Patch Firewall Configuration": [
                    "You receive an exploit signature from the Software Engineer — malformed foreign keys like `user_id=9999` are slipping into analytics systems.",
                    "You draft several rule candidates for outbound traffic filtering.",
                    "Which rule should you apply to stop this behavior?"
                ],
                "CORRECT_ACTION": "Patch Firewall Configuration"
            },
            "command-centre": {
                "Review Network Topology Diagrams": [
                    "This won't help right now."
                ],
                "Analyse Firewall Logs": [
                    "You receive a time-synced firewall log excerpt showing AI-originating traffic.",
                    "One of these protocols was used to exfiltrate internal system logs.",
                    "Which breach vector is responsible?"
                ],
                "Review Recent Script Executions": [
                    "This won't help right now."
                ],
                "Compare Interface Access Logs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Analyse Firewall Logs"
            },
            "developer-hub": {
                "Audit Static IP Assignments": [
                    "This won't help right now."
                ],
                "Check Network Mapping for Dev Machines": [
                    "This won't help right now."
                ],
                "Monitor DHCP Lease Table": [
                    "This won't help right now."
                ],
                "Trace API Traffic from Flagged IP": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "research-lab": {
                "Trace MAC Address Conflicts": [
                    "This won't help right now."
                ],
                "Analyze Network Throughput to Lab Nodes": [
                    "This won't help right now."
                ],
                "Scan for Rogue Access Points": [
                    "This won't help right now."
                ],
                "Trigger Batch Job Trace": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            }
        },
        "se": {
            "developer-hub": {
                "Review Git Commit History": [
                    "This won't help right now."
                ],
                "Trace Endpoint Access Logs": [
                    "This won't help right now."
                ],
                "Review Classification Schema": [
                    "You load the `security_flags` table in the dashboard.",
                    "Everything looks valid at a glance, but something isn’t matching up. The AI’s allowed several malicious users to slip through.",
                    "What structural flaw could allow malicious records to bypass classification?"
                ],
                "Check Running Dev Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Review Classification Schema"
            },

            "server-room": {
                "Audit Running Processes for Anomalies": [
                    "This won't help right now."
                ],
                "Review Microservice Startup Logs": [
                    "This won't help right now."
                ],
                "Check Runtime Errors on Backend Services": [
                    "This won't help right now."
                ],
                "Validate Service Dependencies": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },

            "research-lab": {
                "Investigate Foreign Key Mismatch": [
                    "You pull the database schema for the `security_flags` table and cross-reference it with the anomaly log.",
                    "One of the foreign key references is allowing invalid data to slip through unchecked.",
                    "Which field is being misused?"
                ],
                "Review Git Commit History": [
                    "This won't help right now."
                ],
                "Review Model Execution Logs": [
                    "This won't help right now."
                ],
                "Review Active Class Overrides": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Investigate Foreign Key Mismatch"
            },

            "command-centre": {
                "Scan for Unsecured Internal APIs": [
                    "This won't help right now."
                ],
                "Trigger Class Hierarchy Scan": [
                    "You launch a scan of active subclasses extending from core system services.",
                    "One of them is behaving differently — injecting logic at runtime from an unknown source.",
                    "Which subclass most likely introduces AI-modified behavior and should be flagged?"
                ],
                "Review CI/CD Deployment Logs": [
                    "This won't help right now."
                ],
                "Audit Token Usage in System Services": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Trigger Class Hierarchy Scan"
            }
        },
        "ds": {
            "server-room": {
                "Analyze Model Resource Usage": [
                    "This won't help right now."
                ],
                "Check Model Serving Latency": [
                    "This won't help right now."
                ],
                "Run Feature Engineering Audit": [
                    "You audit the engineered features feeding into the real-time detection model.",
                    "One of them has an unusually high correlation with intrusion events. Suspiciously high...",
                    "Which engineered feature is likely causing data leakage in the intrusion detection model?"
                ],
                "Inspect Containerized Model Deployments": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Run Feature Engineering Audit"
            },
            "command-centre": {
                "Analyse Feature Stability Report": [
                    "You compare the variance and update timings of key engineered features.",
                    "One of them lines up exactly with the suspicious script injected earlier.",
                    "Which feature is most likely impacted by the corrupted automation script and should be excluded from modeling?"
                ],
                "Review Alert Thresholds for Data Anomalies": [
                    "This won't help right now."
                ],
                "Commence An Exploratory Data Analysis Session": [
                    "This won't help right now."
                ],
                "Audit Scheduled Retraining Jobs": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Analyse Feature Stability Report"
            },
            "developer-hub": {
                "Verify Data Pipeline Integrity": [
                    "This won't help right now."
                ],
                "Inspect Feature Store Activity": [
                    "This won't help right now."
                ],
                "Analyse User Session Logs": [
                    "This won't help right now."
                ],
                "Audit Prediction Rules": [
                    "You review the simplified logic extracted from the AI’s current decision engine.",
                    "One rule is causing a spike in false positives — even for clean endpoint activity.",
                    "Which line is most likely responsible?"
                ],
                "CORRECT_ACTION": "Audit Prediction Rules"
            },
            "research-lab": {
                "Review Training Data Samples": [
                    "You pull a subset of recent training data used in real-time anomaly detection.",
                    "One of them appears mislabeled, likely injected by the flagged account.",
                    "Which sample index is most likely poisoned?"
                ],
                "Check Dataset Integrity and Labeling": [
                    "This won't help right now."
                ],
                "Analyze Experiment Metrics for Outliers": [
                    "This won't help right now."
                ],
                "Compare Performance of Experimental Models": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Review Training Data Samples"
            }
        }
    },
    "NO-ACTION": [
        "This doesn't seem to help right now. You should try looking in some other rooms"
    ]
}