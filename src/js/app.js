import Modal from './components/modal';

function App() {
    const app = {
        ready: function() {
            Modal()
        }
    }

    document.addEventListener('DOMContentLoaded', app.ready());
}

export default App;