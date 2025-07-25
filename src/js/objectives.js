// Simple objective system based on room actionability
export const roomObjectives = {
    "lobby": {
        title: "Team Assembly",
        description: "Wait for your team to join and get ready."
    },
    "role-select": {
        title: "Role Assignment", 
        description: "Choose your role for this mission."
    },
    "finalise-roles": {
        title: "Team Finalization",
        description: "Review your team composition and confirm all roles."
    }
};

// Function to set the current objective based on room actionability
export function setCurrentObjective(roomName, roomData = null, currentRole = null) {
    // For non-game rooms, use predefined objectives
    if (roomObjectives[roomName]) {
        const objective = roomObjectives[roomName];
        updateObjectiveDisplay('Objective', objective.description);
        return;
    }

    // For game rooms, check if they're actionable
    if (roomData && currentRole) {
        const currentDay = roomData["currentDay"];
        const localUserId = localStorage.getItem("connectedUserId");
        const enablerComplete = roomData["roomPlayers"][localUserId]["enablerComplete"];
        const enabledComplete = roomData["roomPlayers"][localUserId]["enabledComplete"];
        const enabledPossible = roomData["roomPlayers"][localUserId]["enabledValue"] != null;

        // Check if both tasks are complete - if so, player should return to situation room
        if (enabledComplete && enablerComplete) {
            updateObjectiveDisplay('Objective', "Return to situation room and wait.");
            return;
        }

        // Import the function from main.js
        import('./main.js').then(({ isRoomActionableRightNow }) => {
            const [isActionable] = isRoomActionableRightNow(
                currentDay, currentRole, roomName, enablerComplete, enabledComplete, enabledPossible
            );

            if (isActionable) {
                updateObjectiveDisplay('Objective', "Choose an action to complete this task.");
            } else {
                updateObjectiveDisplay('Objective', "Explore other rooms.");
            }
        });
    } else {
        // Fallback for when we don't have room data
        updateObjectiveDisplay('Objective', "Explore other rooms.");
    }
}

function updateObjectiveDisplay(title, description) {
    // Create or update the objective display
    let objectiveDisplay = document.getElementById('objectiveDisplay');
    if (!objectiveDisplay) {
        objectiveDisplay = document.createElement('div');
        objectiveDisplay.id = 'objectiveDisplay';
        objectiveDisplay.className = 'objective-display';
        document.body.appendChild(objectiveDisplay);
    }

    objectiveDisplay.innerHTML = `
        <h3>Objective</h3>
        <p>${description}</p>
    `;
    const objDiv = document.getElementById('objectiveDisplay');
    if (objDiv) objDiv.classList.add('game-panel');
}

// Function to clear the objective display
export function clearCurrentObjective() {
    const objectiveDisplay = document.getElementById('objectiveDisplay');
    if (objectiveDisplay) {
        objectiveDisplay.remove();
    }
}

// Function to update objective with custom text
export function updateObjective(title, description) {
    let objectiveDisplay = document.getElementById('objectiveDisplay');
    if (!objectiveDisplay) {
        objectiveDisplay = document.createElement('div');
        objectiveDisplay.id = 'objectiveDisplay';
        objectiveDisplay.className = 'objective-display';
        document.body.appendChild(objectiveDisplay);
    }

    objectiveDisplay.innerHTML = `
        <h3>Objective</h3>
        <p>${description}</p>
    `;
    const objDiv = document.getElementById('objectiveDisplay');
    if (objDiv) objDiv.classList.add('game-panel');
} 