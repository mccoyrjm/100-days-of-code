export const apiKey = "abc123";
export const superSecretPassword = "Password1";

export function getNameElement(name) {
    const pElement = document.createElement("p");
    pElement.innerHTML = `This is the name provided: ${name}`;
    return pElement;
}