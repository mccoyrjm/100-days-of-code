import _ from "lodash";
import { apiKey, superSecretPassword, getNameElement } from "./myModule";
import user from "./myUserModule";

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(apiKey);
console.log(superSecretPassword);
document.body.appendChild(getNameElement("Ryan McCoy"));
console.log(user);