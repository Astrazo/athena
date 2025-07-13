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
                    "The IDS has quieted — no further intrusions have been detected from that address.",
                    "You should investigate some other rooms in case you can assist further."
                ]
            },
            "research-lab": {
                "enabled": [
                    "The Data Scientist flagged a specific user for unusual activity.",
                    "Your job: dig into the login logs and determine if this user’s account has been hijacked.",
                    "If the behavior checks out, you can clear it.",
                    "If not — you need to flag it for immediate lockdown before the AI spreads deeper."
                ],
                "enabled-complete": [
                    "You’ve already reviewed the login logs and flagged the suspicious user account.",
                    "The abnormal access pattern matched a classic account compromise — it’s now under lockdown.",
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
                    "There’s nothing more to pull from this trace—your part in the assessment is done.",
                    "Hopefully that map gives the others a fighting chance.",
                    "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
                ],
                "enabled-not-available": [
                    "You start parsing the traffic logs, looking for suspicious cross-network activity.",
                    "A few odd patterns emerge, but none have a confirmed source — it's all guesswork without a flagged IP.",
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
    "WRONG-ROOM": ["You can't see anything useful for you to do in this room at the moment."]
  };