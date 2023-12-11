import React from 'react'; // nạp thư viện react
import {createRoot} from 'react-dom/client'; // nạp thư viện react-dom
import Application from './application';
// Tạo component App
function App() {
    return (
       <div>
        <Application />
       </div>
    )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
// Render component App vào #root element


