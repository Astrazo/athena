// dialogue.js
export const dialogue = {
    1: { // Day 1
        "ca": {
            "server-room": {
                "enabler": [
                    "You rush into the Server Room as alarms blare around you.",
                    "The Intrusion Detection System (IDS) urgently flashes red. The facility's experimental AI has gone rogue and infiltrated the network.",
                    "It's disguising its movements among normal system traffic.",
                    "Your task is clear: identify which IP address the AI is currently using to initiate attacks, so it can be isolated.",
                    "What should you try first?"
                ],
                "enabler-complete": [
                    "You’ve already identified the rogue IP and sent it to the Network Engineer for urgent review.",
                    "The IDS has quieted. No further intrusions have been detected from that address.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "research-lab": {
                "enabled": [
                    "The Data Scientist flagged a specific user for unusual activity.",
                    "Your job: dig into the login logs and determine if this user’s account has been hijacked.",
                    "If the behavior checks out, you can clear it.",
                    "If not, you need to flag it for immediate lockdown before the AI spreads deeper."
                ],
                "enabled-complete": [
                    "You’ve already reviewed the login logs and flagged the suspicious user account.",
                    "The abnormal access pattern matched a classic account compromise. It’s now under lockdown.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You access the login logs and begin scanning recent entries for anomalies.",
                    "But without a flagged user ID, the logs feel like white noise, there's nothing that clearly stands out.",
                    "You realise the investigation can't proceed until the Data Scientist finishes their analysis and identifies a target."
                ]
            }
        },
        "ne": {
            "command-centre": {
                "enabler": [
                    "You're inside the Command Centre now.",
                    "It’s eerily quiet. Most systems are powered down, but the access logs are alive with chatter.",
                    "Your job is to figure out how the AI infiltrated the network. By comparing interface usage patterns and anomalies, you might just find the path it slipped through."
                ],
                "enabler-complete": [
                    "You double-check the logs, but your work here is done.",
                    "You already traced the AI’s point of entry through the network, the interface has been flagged.",
                    "That intel’s now with the Software Engineer. Hopefully they can figure out what the AI's doing with it.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "developer-hub": {
                "enabled": [
                    "The Cybersecurity Analyst has flagged a suspicious IP.",
                    "Your task: determine which internal systems this IP has touched.",
                    "Accurate mapping is critical, as a false positive or missed connection could let the AI move unseen.",

                ],
                "enabled-complete": [
                    "You've already traced the suspicious IP across the internal network.",
                    "Every system it touched has been flagged and logged.",
                    "There’s nothing more to pull from this trace. Your part in the assessment is done.",
                    "Hopefully that map gives the others a fighting chance.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You start parsing the traffic logs, looking for suspicious cross-network activity.",
                    "A few odd patterns emerge, but none have a confirmed source. It's all guesswork without a flagged IP.",
                    "You'll need to wait for the Cybersecurity Analyst to confirm the threat origin before you can act."
                ]
            }
        },
        "se": {
            "research-lab": {
                "enabler": [
                    "Something doesn’t add up.",
                    "A recent commit went into production just hours before the AI went rogue.",
                    "Your task is to review the commit logs and identify which change may have enabled the breach."
                ],
                "enabler-complete": [
                    "You already traced the malicious commit and flagged it for the Data Scientist to investigate further.",
                    "Any additional changes here would risk contaminating the forensic trail.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "server-room": {
                "enabled": [
                    "The Network Engineer has traced unusual activity to a specific node they have flagged for you.",
                    "You’ve got access to the runtime diagnostic tools in the Server Room, where the AI seems to be probing from.",
                    "Several active windows services are bound to this interface, you need to identify which process on this interface is likely compromised."
                ],
                "enabled-complete": [
                    "You’ve already reviewed the running processes and flagged the one likely compromised by the AI.",
                    "Security has been notified and the process is under containment review.",
                    "You’ve done all you can here, check in with the rest of your team.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You bring up the diagnostic console and begin reviewing active processes.",
                    "But there’s no signal yet, the suspicious interface hasn’t been confirmed.",
                    "You back out for now, waiting on the Network Engineer to complete their trace."
                ]
            }
        },
        "ds": {
            "developer-hub": {
                "enabler": [
                    "System logs show every user session across the last 24 hours.",
                    "Your task: analyse user activity patterns and identify which user deviates significantly from the norm.",
                    "This could be a potential sign of account takeover or injection by the AI."
                ],
                "enabler-complete": [
                    "You’ve already identified the user account that has been compromised.",
                    "Hopefully that brings the team one step closer to catching up to the AI.",
                    "You should investigate some other rooms in case you can assist further."
                ],
            },
            "command-centre": {
                "enabled": [
                    "You've been handed a dataset tied to a recent commit. The Software Engineer believes it might be compromised.",
                    "Before it can be used in any analysis, it needs to be cleaned and validated.",
                    "Your job: apply basic cleaning checks to ensure the data is safe inside the system."
                ],
                "enabled-complete": [
                    "You’ve already cleaned and validated the dataset tied to the commit.",
                    "It’s now safe to enter the pipeline without risking further model corruption now.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You prepare your validation tools and load up the staging area.",
                    "But the dataset in question hasn’t arrived yet, there's nothing to analyse or clean.",
                    "You’ll need to wait until the Software Engineer flags the suspicious commit."
                ]
            }
        }
    },
    2: { // Day 2
        "ca": {
            "developer-hub": {
                "enabler": [
                    "You enter the Developer Hub, now locked down under containment protocols.",
                    "Build systems are under siege. The AI is launching internal attacks and sabotaging developer tools.",
                    "Firewall logs show erratic behavior from multiple endpoints. One of the service accounts has been hijacked.",
                    "You need to trace the breach and flag the compromised machine before the AI spreads further."
                ],
                "enabler-complete": [
                    "You already identified the compromised endpoint and escalated the breach.",
                    "The Software Engineer is working to harden systems and prevent further code manipulation.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "command-centre": {
                "enabled": [
                    "You return to the Command Centre with alerts stacking up for rogue endpoint behavior.",
                    "The Software Engineer just flagged a malicious subclass that you should investigate.",
                    "Your job is to trace which endpoint it’s controlling and shut it down before it spreads further."
                ],
                "enabled-complete": [
                    "You already isolated the endpoint tied to the AI-injected subclass.",
                    "Outbound traffic from the compromised node has been cut off.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You open the endpoint diagnostics dashboard.",
                    "But there’s no known injected class yet, so you don’t know what to filter for.",
                    "You back out for now, waiting on the Software Engineer to complete their class trace."
                ]
            }
        },
        "ne": {
            "research-lab": {
                "enabler": [
                    "You enter the Research Lab. Telemetry data is out of range across multiple panels.",
                    "Something’s tampering with sensor output, which could mean the AI is skewing research data through automation.",
                    "You work to pinpoint the source."
                ],
                "enabler-complete": [
                    "You already traced the high-anomaly script and flagged it for removal.",
                    "The Data Scientist is analysing the faulty values to determine the scope of corruption.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "server-room": {
                "enabled": [
                    "You enter the Server Room. Several monitoring scripts are still firing false positives or delayed alerts.",
                    "The Data Scientist just flagged an engineered feature as invalid.  It’s leaking post-event data into real-time systems.",
                    "You need to patch the script that’s using this feature before it spreads faulty alerts across the network."
                ],
                "enabled-complete": [
                    "You already patched the script that relied on the invalid feature.",
                    "Real-time endpoint monitoring has been restored to safe conditions.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You review the list of active batch monitoring scripts.",
                    "But without knowing which feature is compromised, there’s no way to prioritise the fix.",
                    "You back out for now, waiting on the Data Scientist to complete their feature audit."
                ]
            }
        },
        "se": {
            "command-centre": {
                "enabler": [
                    "You enter to the Command Centre, terminals pulse with requests from internal systems.",
                    "The AI is suspected to be injecting new logic into existing service hierarchies.",
                    "You begin reviewing class inheritance chains to identify where malicious code might be introduced."
                ],
                "enabler-complete": [
                    "You already flagged the suspicious subclass and submitted its details for runtime containment.",
                    "The Network Engineer is following up to trace execution patterns.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "research-lab": {
                "enabled": [
                    "You step into the Research Lab again, the IDEs are auto-compiling, but you didn't trigger any of it.",
                    "An endpoint just flagged by the Cybersecurity Analyst appears to be injecting malicious code into your build pipeline.",
                    "You need to review the active classes and isolate any that have been tampered with before deployment."
                ],
                "enabled-complete": [
                    "You’ve already isolated the compromised class and stopped it from pushing code to production.",
                    "Build processes are stabilizing, but there's still work to be done elsewhere.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
               "enabled-not-available": [
                    "You bring up the class monitor and scan for suspicious activity in the codebase.",
                    "But without the flagged endpoint from the Cybersecurity Analyst, there’s nothing to act on yet.",
                    "You back out for now and wait for the breach report to come through."
                ]
            }
        },
        "ds": {
            "server-room": {
                "enabler": [
                    "You enter the Server Room. Model dashboards are lighting up with inconsistent predictions.",
                    "The intrusion detection model is failing to catch obvious threats. Something’s off with the inputs.",
                    "You suspect one of the engineered features is leaking post-event information into the model.",
                    "Time to find it before the Cybersecurity team gets blindsided again."
                ],
                "enabler-complete": [
                    "You already flagged the leaky feature that was compromising the intrusion detection model.",
                    "The Cybersecurity Analyst is now reviewing detection rules to patch the gap.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "command-centre": {
                "enabled": [
                    "You return to the Command Centre and open your modeling notebook, but something’s off.",
                    "The feature distributions are spiking, and recent logs show corruption traced to the script the Network Engineer flagged.",
                    "One of your engineered features has been poisoned.",
                    "You need to isolate and remove it before the next training run goes live."
                ],
                "enabled-complete": [
                    "You already excluded the anomalous feature linked to the corrupted batch script.",
                    "Model variance has stabilized, and upstream flags are in place.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You load the latest feature set into your modeling pipeline.",
                    "But without a confirmed automation source, you can’t isolate the anomaly.",
                    "You back out for now, waiting on the Network Engineer to complete their trace."
                ]
            }
        }
    },
    3: { // Day 3
        "ca": {
            "server-room": {
                "enabler": [
                    "You enter the Server Room. Security dashboards are reporting anomalies in access logs.",
                    "A service account appears to be under AI control, bypassing traditional detection with near-perfect logins.",
                    "It’s compromising endpoint integrity and likely exfiltrating sensitive logs or credentials.",
                    "Time to identify the account before the Data Scientist gets fed garbage telemetry."
                ],
                "enabler-complete": [
                    "You already flagged the AI-controlled service account and revoked its credentials.",
                    "The Data Scientist is using the behavior pattern to refine real-time monitoring.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "command-centre": {
                "enabled": [
                    "You step into the Command Centre and pull the active config for `log_api` which is the service running on the port sent over by the Network Engineer.",
                    "The AI used this exact vector to pull sensitive logs without triggering a firewall block.",
                    "There are multiple ways to patch this, but only one prevents this specific data exposure path."
                ],
                "enabled-complete": [
                    "You already patched the exposed `log_api` service and restricted its network access.",
                    "No further breach attempts have occurred on that vector.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You begin auditing exposed services for suspicious behavior.",
                    "But without a confirmed breach vector, you can't determine which config to patch.",
                    "You back out for now, waiting on the Network Engineer to complete their analysis."
                ]
            }
        },
        "ne": {
            "command-centre": {
                "enabler": [
                    "You return to the Command Centre and access firewall logs tied to a suspicious early-morning alert.",
                    "One of the open ports shows a large outbound data transfer far outside protocol norms.",
                    "The AI likely used this path to bypass containment layers.",
                    "You need to identify the breach vector and notify the Cybersecurity Analyst to perform mitigation."
                ],
                "enabler-complete": [
                    "You’ve already flagged the App Layer (port 8080) as the AI’s exfiltration route.",
                    "The Cybersecurity Analyst has begun patching and containment protocols for the service.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "server-room": {
                "enabled": [
                    "You enter the Command Centre and begin reviewing the firewall’s outbound rule set.",
                    "Alerts suggest malformed user records are triggering unexpected reports in the analytics server.",
                    "The Software Engineer has identified that the AI is injecting invalid `user_id`s into `security_flags`.",
                    "Your goal is to block any resulting transmissions from making it past the firewall."
                ],
                "enabled-complete": [
                    "You’ve already deployed the firewall rule blocking outbound traffic containing invalid user IDs.",
                    "Data exfiltration attempts through this exploit vector have dropped to zero.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You access the command terminal for managing firewall rules.",
                    "But there’s no specific exploit signature provided yet so you don’t know what pattern to filter.",
                    "You back out for now, waiting on the Software Engineer to complete their schema trace."
                ]
            }
        },
        "se": {
            "research-lab": {
                "enabler": [
                    "You arrive in the Research Lab and access the classification module’s database logs.",
                    "A warning catches your eye. Invalid `user_id`s are being inserted but aren’t triggering schema rejections.",
                    "The AI may be exploiting weak foreign key constraints to poison downstream systems.",
                    "You’ll need to trace the exploit and forward a correction to the Network Engineer."
                ],
                "enabler-complete": [
                    "You already identified the AI’s misuse of the foreign key constraint and forwarded the vulnerability.",
                    "The Network Engineer has begun locking down schema validation rules.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "developer-hub": {
                "enabled": [
                    "You enter the Developer Hub, where AI-modified logic is interfering with database-based access filters.",
                    "The Data Scientist sent over the faulty decision logic. It’s somehow bypassing malicious inputs.",
                    "You suspect the flaw lies in a misconfigured table schema that’s letting the AI exploit weak relationships.",
                    "It’s your job to isolate and patch the structural issue before more bad data leaks through."
                ],
                "enabled-complete": [
                    "You already traced the schema flaw that was enabling AI-bypassed users to slip through.",
                    "The foreign key has been fixed and downstream queries are now filtered properly.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
               "enabled-not-available": [
                    "You log into the internal schema management dashboard.",
                    "But the corrupted model logic hasn’t yet been isolated so you don’t know what to patch.",
                    "You back out for now, waiting on the Data Scientist to complete their trace."
                ]
            }
        },
        "ds": {
            "developer-hub": {
                "enabler": [
                    "You enter the Developer Hub and pull the AI’s decision tree from the most recent build.",
                    "Your anomaly detection models are now misfiring, triggering no alerts on compromised data.",
                    "One of the AI's logic conditions has likely been inverted or tampered with.",
                    "Your job is to find the faulty rule and forward it to the Software Engineer for code correction."
                ],
                "enabler-complete": [
                    "You already identified the faulty model logic and passed it to the Software Engineer.",
                    "The rule was patched, and false positives have been reduced significantly.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "research-lab": {
                "enabled": [
                    "You return to the Research Lab to see that the real-time training stream is acting strangely.",
                    "Your pipeline is picking up contradictions: inputs flagged as 'malicious' show no actual signs of threat.",
                    "The Cybersecurity Analyst just flagged the an account as the likely AI access vector.",
                    "You suspect one of your recent training samples has been poisoned, and it’s biasing your entire model."
                ],
                "enabled-complete": [
                    "You already removed the poisoned sample tied to the compromised account.",
                    "Training set variance has dropped and retraining has resumed.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You load the training logs from the real-time stream.",
                    "But there’s no confirmed compromised account yet so you can’t filter effectively.",
                    "You back out for now, waiting on the Cybersecurity Analyst to complete their trace."
                ]
            }
        }
    },
    "WRONG-ROOM": ["You can't see anything useful for you to do in this room at the moment."]
  };