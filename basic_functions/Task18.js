18. Task
/**
 * Greets a friend with their name.
 *
 * @param {string} friendName - The name of the friend.
 * @returns {string} A greeting message.
 *
 * @example
 * // Greet a friend named "Test"
 * const greeting = greetFriend("Test");
 * console.log(greeting); // Output: "Hello, Test! How are you?"
 */
function greetFriend (friendName) {
    return `Hello, ${friendName}! How are you?`;
};
const greeting = greetFriend ("Test");
console.log (greeting);
