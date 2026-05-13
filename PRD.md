# Product Requirements Document (PRD) - UFV Nav

## 1. Project Overview
**Project Name:** UFV Nav (WebAR Indoor Navigation System)
**Vision:** To provide a seamless, app-less indoor navigation experience for students and visitors at UFV Building G using Web-based Augmented Reality (WebAR) and Artificial Intelligence.

## 2. Problem Statement
Indoor navigation in complex university buildings is often challenging. Traditional GPS is unreliable indoors, and specialized navigation apps require installation, creating friction for occasional users.

## 3. Goals & Objectives
- **Accessibility:** Provide navigation via a standard mobile web browser.
- **Ease of Use:** Identify the user's current location through AI-powered room sign scanning.
- **Efficiency:** Calculate and display the shortest path to a destination in real-time.
- **Visual Guidance:** Use 3D AR overlays to point the user in the right direction.

## 4. Target Audience
- New students and faculty members.
- Campus visitors and event attendees.
- Maintenance staff.

## 5. Key Features
### 5.1 AI Room Recognition
- Users can capture an image of a room sign.
- The system uses Google Gemini AI (2.5 Flash) to extract the room number from the image and automatically set it as the starting point.

### 5.2 AR Path Visualization
- A 3D arrow is rendered on the camera feed using AR.js and A-Frame.
- The arrow provides directional guidance relative to a physical marker (currently Hiro marker).

### 5.3 Smart Pathfinding
- The backend implements Dijkstra's algorithm to calculate the shortest path between nodes in the building's graph.
- Supports rooms, hallways, and elevators.

### 5.4 Dynamic Room Management
- The frontend dynamically fetches the list of available rooms and locations from the backend.

## 6. Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript, A-Frame, AR.js.
- **Backend:** Python 3.12, FastAPI, Uvicorn.
- **AI/ML:** Google Gemini 2.5 Flash (via Google GenAI SDK).
- **Deployment:** Render (Backend), Static Hosting (Frontend).

## 7. User Flow
1. User opens the web application.
2. User grants camera permissions.
3. (Optional) User clicks "Scan Room" and points the camera at a room sign to auto-detect their location.
4. User selects a destination room from the dropdown.
5. User clicks "Navigate".
6. The system displays the calculated route and shows a 3D arrow to guide the user.

## 8. Roadmap & Future Enhancements
- **Markerless AR:** Transition from marker-based AR (Hiro) to SLAM-based or Location-based AR for better immersion.
- **Persistent Database:** Move the graph representation to a Neo4j graph database for better scalability.
- **Multi-floor Support:** Improve pathfinding to handle floor changes via stairs and elevators more intuitively.
- **Voice Guidance:** Add audio instructions for accessibility.
