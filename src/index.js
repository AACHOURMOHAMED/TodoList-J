import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash is required for this line to work
  element.innerHTML = _.join(['Hddello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());