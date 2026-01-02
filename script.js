:root {
    --bg-color: #0d1117;
    --primary-glow: #4ade80;
    /* Organic Green */
    --accent-glow: #fbbf24;
    /* Amber eyes */
    --danger-glow: #f43f5e;
    --text-color: #e2e8f0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Orbitron', sans-serif;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Subtle organic texture */
    background: radial-gradient(circle at center, #1a202c 0%, #020617 100%);
    z-index: 1;
}

.hud {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    z-index: 10;
    pointer-events: none;
    /* Let clicks pass through */
}

.score-container-left {
    display: flex;
    gap: 1rem;
}

.controls-top-right {
    display: flex;
    gap: 1rem;
    pointer-events: auto;
    /* Re-enable clicks for buttons */
}

.score-box {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    padding: 10px 20px;
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 8px;
    text-align: center;
}

.label {
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 1px;
}

.value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 5px var(--primary-glow);
}

.btn-icon {
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    backdrop-filter: blur(4px);
}

.btn-icon:hover {
    background: var(--primary-glow);
    color: #000;
    box-shadow: 0 0 15px var(--primary-glow);
    border-color: var(--primary-glow);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s;
}

.modal {
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid var(--primary-glow);
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0 30px rgba(74, 222, 128, 0.1);
    min-width: 300px;
    animation: modalPop 0.3s ease-out;
}

@keyframes modalPop {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

h1 {
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 0 0 15px var(--primary-glow);
    margin-bottom: 0.5rem;
}

h1.danger {
    color: var(--danger-glow);
    text-shadow: 0 0 15px var(--danger-glow);
}

.btn-neon {
    background: transparent;
    border: 2px solid var(--primary-glow);
    color: var(--primary-glow);
    padding: 1rem 3rem;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    text-shadow: 0 0 5px var(--primary-glow);
    box-shadow: 0 0 10px rgba(74, 222, 128, 0.1);
    transition: all 0.2s;
    border-radius: 4px;
    margin-top: 1rem;
}

.btn-neon:hover {
    background: var(--primary-glow);
    color: #000;
    box-shadow: 0 0 25px var(--primary-glow);
}

.hidden {
    opacity: 0;
    pointer-events: none;
}
