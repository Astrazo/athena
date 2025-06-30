// dialogue.js
export const dialogue = {
    1: { // Day 1
      "server-room": {
        admin: {
          enabler: [
            "Admin, you are enabling the server today.",
            "Check the logs and report back."
          ],
          enabled: [
            "Admin, you are being enabled by another team today."
          ]
        },
        user: {
          enabler: [
            "User, you are enabling the server today."
          ],
          enabled: [
            "User, wait for the enabler to finish their task."
          ]
        }
        // ... other roles
      },
      "research-lab": {
        // ... same structure
      }
      // ... other rooms
    },
    2: { /* ... Day 2 ... */ }
    // ... more days
  };