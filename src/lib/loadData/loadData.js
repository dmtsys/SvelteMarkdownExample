import { connect } from 'connectome';

// UUUPS cannot do that here, we're on server-side!
// const { hostname } = window.location;
// const development = hostname == 'localhost';

const development = false

const endpoint = development ? null : 'wss://david.zetaseek.com/ws';
const port = development ? 7780 : null;

console.log('Creating new Connector .......');
const connector = connect({ endpoint, port, protocol: 'uniqpath/euler' });

connector.state.subscribe(state => {
  console.log('NEW STATE COMING:');
  console.log(state);
});

export default function loadData() {
  return connector.state;
}
