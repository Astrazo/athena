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
                    "Enabler complete dialogue."
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
                    "Enabled complete dialogue."
                ],
                "enabled-not-available": [
                    "Enabled not avaiable dialogue."
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
                    "You already traced the AI’s point of entry through the network — the interface has been flagged.",
                    "That intel’s now with the Software Engineer. Hopefully they can figure out what the AI's doing with it."
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
                    "Hopefully that map gives the others a fighting chance."
                ],
                "enabled-not-available": [
                    "You begin parsing the traffic logs in the Server Room, hunting for signs of the AI’s movement.",
                    "Several connection attempts stand out—but without knowing the exact source IP, it’s all just noise.",
                    "You scroll through a dozen candidates, none definitive.",
                    "You need a confirmed indicator—something to anchor the trace.",
                    "Hopefully someone upstream can pinpoint the breach origin... then you’ll be ready to map the damage."
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
                    "Enabler complete dialogue."
                ]
            },
            "server-room": {
                "enabled": [
                    "The Network Engineer has traced unusual activity to {{network engineer enabler answer}}.",
                    "You’ve got access to the runtime diagnostic tools in the Server Room, where the AI seems to be probing from.",
                    "Several active windows services are bound to this interface, you need to identify which process on {{network engineer enabler answer}} is likely compromised."
                ],
                "enabled-complete": [
                    "Enabled complete dialogue."
                ],
                "enabled-not-available": [
                    "Enabled not avaiable dialogue."
                ]
            }
        },
        "ds": {
            "development-hub": {
                "enabler": [
                    "System logs show every user session across the last 24 hours.",
                    "Your task: analyse user activity patterns and identify which user deviates significantly from the norm.",
                    "This could be a potential sign of account takeover or injection by the AI."
                ],
                "enabler-complete": [
                    "Enabler complete dialogue."
                ]
            },
            "command-centre": {
                "enabled": [
                    "You've been hnded a dataset tied to a recent commit.",
                    "The Software Engineer believes it might be compromised.",
                    "Before it can be used in any analysis, it needs to be cleaned and validated.",
                    "Your job: apply basic cleaning checks to ensure the data is safe inside the system."
                ],
                "enabled-complete": [
                    "Enabled complete dialogue."
                ],
                "enabled-not-available": [
                    "Enabled not avaiable dialogue."
                ]
            }
        }
    },
    "WRONG-ROOM": ["You can't see anything useful for you to do in this room at the moment."]
  };