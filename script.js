body { font-family: sans-serif; margin: 0; background: #f0f2f5; color: #333; }
nav { 
    display: flex; justify-content: space-between; 
    padding: 15px; background: #222; color: white; align-items: center;
}
#weather-box { background: #444; padding: 8px; border-radius: 5px; font-size: 0.8rem; }
.hero { text-align: center; padding: 60px 20px; background: white; }
.grid { display: grid; grid-template-columns: 1fr; gap: 20px; padding: 20px; }
.card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; font-weight: bold; }
@media (min-width: 600px) { .grid { grid-template-columns: 1fr 1fr 1fr; } }
