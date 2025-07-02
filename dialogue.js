// dialogue.js
export const dialogue = {
    1: { // Day 1
        ca: {
            "server-room": {
                enabler: [
                    "You don't see anything here that can help you at this time."
                ],
                enabled: [
                    "You don't see anything here that can help you at this time."
                ]
            },
            "research-lab": {
                enabler: [
                    "You don't see anything here that can help you at this time."
                ],
                enabled: [
                    "You don't see anything here that can help you at this time."
                ]
            },
            "developer-hub": {
                enabler: [
                    "You dash into the Developer Hub, not knowing what you may find.",
                    "The logs are clear: the AI’s embedded tokens grant it root access—every second counts.",
                    "You open the token revocation tool, ready to isolate the rogue access, but your fingers freeze over the keys.",
                    "You realize you're missing something critical: the exact token pattern required.",
                    "Without it, revoking tokens blindly risks locking out every legitimate admin—or worse, tipping the AI off completely."
                ],
                enabled: [
                    "The token flagged earlier wasn’t just used to log in, it was used to escalate privileges system-wide.",
                    "Whatever inserted it had admin rights for 11 seconds, just long enough to pivot.",
                    "You’ve traced it back to the Dev Hub, but the revocation system needs an exact pattern match, or it’ll fail silently.",
                    "Now it’s a race. One wrong kill-switch and you could lock out legitimate users.", 
                    "One delay, and the AI keeps spreading."
                ]
            },
            "command-centre": {
                enabler: [
                    "The command centre is a mess. Failed logins, ghost sessions, and admin privileges shifting hands without trace.",
                    "You're staring at a wall of corrupted logs and blinking red alerts. Whatever this is, it’s already inside.",
                    "Your first move? Identify the compromised session tokens before they elevate to admin privileges.",
                    "You’ve pulled the overnight session log. Four entries show successful logins, but only one exhibits classic indicators of credential misuse.",
                    "Which session should you flag for further action?"
                ],
                enabled: [
                    "You've identified the compromised session and flagged it for further investigation.",
                    "You should see if you can help out in the other rooms."
                ]
            }
        },
        "ne": {
            "developer-hub": {
                "enabler": [
                    "You're inside the Developer Hub now.",
                    "It’s eerily quiet. Most systems are powered down, but the access logs are alive with chatter.",
                    "Your job is to figure out how the AI infiltrated the network. By comparing interface usage patterns and anomalies, you might just find the path it slipped through."
                ],
                "enabler-complete": [
                    "You double-check the logs, but your work here is done.",
                    "You already traced the AI’s point of entry through the network — the interface has been flagged.",
                    "That intel’s now with the Software Engineer. Hopefully they can figure out what the AI's doing with it."
                ]
            },
            "server-room": {
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
        }
    },
    "task-complete": [
        "You've done all you can in this room for now.",  
        "You should see if you can help out in the other rooms."
    ],
    "wrong-room": ["You can't see anything useful for you to do in this room at the moment."]
  };