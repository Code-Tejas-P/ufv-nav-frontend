# 📍 UFV Nav - WebAR Indoor Navigation (Frontend)

## 📖 About the Project
**UFV Nav** is a browser-based indoor navigation system designed for the University of the Fraser Valley (Building G). It uses Augmented Reality (AR) and Artificial Intelligence (AI) to provide seamless, app-less guidance through complex indoor environments. No app downloads are needed—everything works right in your mobile browser.

## 🚀 Key Features
- **AI Room Sign Recognition:** Point your camera at a room sign to automatically detect your starting location.
- **3D AR Path Visualization:** A 3D directional arrow appears over your live camera feed to guide you to your destination.
- **Real-Time Smart Pathfinding:** Calculates the shortest and most efficient route using a dynamic backend.
- **Mobile-Friendly:** Accessible and optimized for standard mobile web browsers.

## 🛠️ Tech Stack
- **Frontend / AR:** HTML5, CSS3, JavaScript, A-Frame, AR.js
- **Backend / Pathfinding:** Python, FastAPI, Uvicorn (Dijkstra's Algorithm)
- **AI Processing:** Google Gemini API (via backend)

## 🎯 How to Use the App

Once you open the deployed link on your mobile device, follow these steps to start navigating:

(You can find the link in about section)

1. **Allow Camera Access:** When prompted by your browser, grant camera permissions. This is required for AR and room scanning to work.
2. **Find Your Location (Optional):** 
   - Tap the **"Scan Room"** button.
   - Point your camera at a nearby physical room sign (e.g., "G210"). The AI will read it and automatically set your starting location.
   - *Alternatively, manually select your starting location from the "Start" dropdown menu.*
3. **Choose a Destination:** Select where you want to go from the "Go to" dropdown menu.
4. **Start Navigation:** Tap the **"Navigate"** button. The system will calculate your route.
5. **Follow the Arrow:** (Working on it. Coming soon)
   - Point your camera at a **Hiro Marker** (a specific black-and-white square pattern placed in the environment). 
   - A 3D directional arrow will pop up on your screen. 
   - Follow the direction the arrow points to reach your destination! 
   - *(Use the "Rotate 90°" button if you need to manually adjust the arrow's orientation).*
