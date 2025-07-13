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
                "Deploy Honeypot System": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Investigate Server Traffic Logs"
            },
            "command-centre": {
                "Review Org-Wide Security Dashboard": [
                    "This won't help right now."
                ],
                "Update Threat Intelligence Feeds": [
                    "This won't help right now."
                ],
                "Cross-check Audit Trail Against Global Events": [
                    "This won't help right now."
                ],
                "Review AI Containment Readiness Plan": [
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
                "Run Malware Scan on Dev Workstations": [
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
                "Inspect Switch Port Activity Logs": [
                    "This won't help right now."
                ],
                "Reconfigure VLAN Assignments": [
                    "This won't help right now."
                ],
                "Check UPS and Cooling Network Interfaces": [
                    "This won't help right now."
                ],
                "Validate Fiber Link Health": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "command-centre": {
                "Review Network Topology Diagrams": [
                    "This won't help right now."
                ],
                "Run Path Trace Between Zones": [
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
                "Check Research VLAN ACLs": [
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
                "Inspect Build Artifacts": [
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
                "Check Data Processing Scripts": [
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
                "Inspect Staging Environment for Test Builds": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Review Git Commit History"
            },

            "command-centre": {
                "Scan for Unsecured Internal APIs": [
                    "This won't help right now."
                ],
                "Check Service Mesh Routing Rules": [
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
                "Analyze Model Resource Usage": [
                    "This won't help right now."
                ],
                "Check Model Serving Latency": [
                    "This won't help right now."
                ],
                "Review Production Inference Logs": [
                    "This won't help right now."
                ],
                "Inspect Containerized Model Deployments": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": null
            },
            "command-centre": {
                "Check Model Drift Dashboard": [
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
                "Check Dev Model Inputs for Anomalies": [
                    "This won't help right now."
                ],
                "CORRECT_ACTION": "Analyse User Session Logs"
            },
            "research-lab": {
                "Evaluate Recent Model Training Runs": [
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
    "NO-ACTION": [
        "This doesn't seem to help right now. You should try looking in some other rooms"
    ]
}