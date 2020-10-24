import Modal from './components/modal';
import Crop from './components/crop';

function App() {
    const app = {
        ready: function() {
            Modal();
            Crop({
                url: 'test',
            })
        }
    }

    document.addEventListener('DOMContentLoaded', app.ready());
}

export default App;