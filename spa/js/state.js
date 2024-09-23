export const appState = {
    loggedIn: false,
    items: []
};

// Function to update the global state and re-render parts of the UI if necessary
export function setState(newState) {
    Object.assign(appState, newState);
}
