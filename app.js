let currentRotation = 0;
const API_BASE_URL = 'https://ufv-nav-backend.onrender.com';

function rotateArrow() {
    const arrow = document.querySelector('#nav-arrow');
    currentRotation += 90;
    arrow.setAttribute('rotation', `0 ${currentRotation} 0`);
}

async function getRoute() {
    const display = document.getElementById('route-result');

    const startRoom = document.getElementById('start-select').value;
    const destRoom = document.getElementById('dest-select').value;

    display.style.display = 'block';
    display.innerText = "Calculating route...";

    try {
        const response = await fetch(`${API_BASE_URL}/navigate?start=${startRoom}&destination=${destRoom}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        display.innerText = "Route: " + data.route.join(" → ");
    } catch (error) {
        display.innerText = "Failed to get route: " + error.message;
    }
}

async function scanSurroundings() {
    const display = document.getElementById('route-result');
    display.style.display = 'block';
    display.innerText = "Scanning room sign...";

    try {
        const video = document.querySelector('video');
        if (!video) throw new Error("Camera feed not found");

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL('image/jpeg', 0.8);

        const response = await fetch(`${API_BASE_URL}/scan-room`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageData })
        });

        const data = await response.json();

        if (data.status === "success") {
            display.innerText = `Location Found: ${data.detected_room}!`;
            document.getElementById('start-select').value = data.detected_room;
        } else {
            display.innerText = "No room number detected. Try moving closer to the sign.";
        }

    } catch (error) {
        console.error(error);
        display.innerText = "Failed to scan: " + error.message;
    }
}

async function loadRooms() {
    const startSelect = document.getElementById('start-select');
    const destSelect = document.getElementById('dest-select');

    try {
        const response = await fetch(`${API_BASE_URL}/rooms`);
        if (!response.ok) throw new Error("Failed to fetch rooms");

        const data = await response.json();

        // Clear existing options
        startSelect.innerHTML = '';
        destSelect.innerHTML = '';

        data.rooms.forEach(room => {
            const startOption = document.createElement('option');
            startOption.value = room;
            startOption.textContent = `Start: ${room}`;
            startSelect.appendChild(startOption);

            const destOption = document.createElement('option');
            destOption.value = room;
            destOption.textContent = `Go to: ${room}`;
            destSelect.appendChild(destOption);
        });

        console.log("Rooms loaded successfully");
    } catch (error) {
        console.error("Error loading rooms:", error);
    }
}

// Initialize on load
window.addEventListener('load', loadRooms);
