import { useState } from "react";



export default function SimplePopup() {
    const [isVisible, setIsVisible] = useState(false);

    const closePopup = () => setIsVisible(false);

    return (
        <div onClick={closePopup}>
 
            {isVisible && (
                <div className="popup-content" onClick={e => e.stopPropagation()}>
                    Hello from Popup!
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
        </div>
    );
}