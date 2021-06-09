import {createEvent, createStore} from 'effector';
import {using, h, spec} from 'forest';
import {StyledRoot, styled} from 'foliage';

const btnClicked = createEvent();
const $state = createStore('state1').on(btnClicked, s => {
  if (s === 'state1') return 'state2';
  return 'state1';
});

const Wrapper = styled.div`
  background-color: #ddd;

  &.state1 {
    color: red;
  }
`;

const App = () => {
  Wrapper(() => {
    spec({attr: {class: $state}});
    h('button', {
      handler: {on: {click: btnClicked}},
      text: 'btn',
    });
  });
}

using(document.querySelector('head'), StyledRoot);
using(document.body, App);
