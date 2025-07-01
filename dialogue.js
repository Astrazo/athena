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
      user: {
        "server-room": {
          enabler: [
            "User, you are enabling the server today."
          ],
          enabled: [
            "User, wait for the enabler to finish their task."
          ]
        },
        // "research-lab": { ... }
      }
      // ... other roles
    },
    2: { /* ... Day 2 ... */ }
    // ... more days
  };