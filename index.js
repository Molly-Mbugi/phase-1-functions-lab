// Function to calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(location) {
    const hq = 42; // Headquarters
    return Math.abs (location - hq); // Calculate absolute difference between location and headquarters
}

// Function to calculate the distance in feet from the headquarters
function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location); // Get distance in blocks
    const feetPerBlock = 264; // 1 block = 264 feet
    return blocks * feetPerBlock; // Calculate distance in feet
}

// Function to calculate the distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start); // Calculate absolute difference between start and destination
    const feetPerBlock = 264; // 1 block = 264 feet
    return distance * feetPerBlock; // Calculate distance in feet
}

// Function to calculate the fare price based on the distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get distance travelled in feet
    let fare = 0; // Initialize fare

    if (distance <= 400) {
        fare = 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02; // Charge 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25; // Charge $25 for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Cannot travel distances over 2500 feet
    }

    return fare; // Return calculated fare
}

    