function buildPanel() {
    if (document.getElementById('rozen-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'rozen-panel';
    panel.innerHTML = `
        <h2 style="color:#00b0ff">Ro-zen Elite</h2>
        <div style="display:flex; border-bottom:1px solid #333; margin-bottom:15px;">
            <button id="btn-tab-visuals" style="flex:1; background:none; border:none; color:white; padding:10px; cursor:pointer;">Visuals</button>
            <button id="btn-tab-config" style="flex:1; background:none; border:none; color:white; padding:10px; cursor:pointer;">Config</button>
        </div>
        <div id="rozen-body"></div>
    `;
    document.body.appendChild(panel);

    const body = document.getElementById('rozen-body');

    // Visuals Tab
    document.getElementById('btn-tab-visuals').onclick = () => {
        body.innerHTML = `
            <h3>Themes</h3>
            <button onclick="document.body.style.filter='sepia(1) saturate(5)'" style="display:block; width:100%; margin-bottom:5px;">Gold</button>
            <button onclick="document.body.style.filter='hue-rotate(180deg) brightness(0.8)'" style="display:block; width:100%; margin-bottom:5px;">Neon Blue</button>
            <button onclick="document.body.style.filter='none'" style="display:block; width:100%;">Reset</button>
        `;
    };

    // Config Tab
    document.getElementById('btn-tab-config').onclick = () => {
        body.innerHTML = `
            <h3>Configure</h3>
            <label>Fake Robux Amount:</label>
            <input type="text" id="robux-input" style="width:100%; padding:5px; margin:10px 0; color:black;" placeholder="e.g. 10M+">
            <button id="save-btn" style="width:100%; background:#00b0ff; color:white; border:none; padding:10px; cursor:pointer; font-weight:bold;">SAVE CHANGES</button>
        `;
        document.getElementById('save-btn').onclick = () => {
            const val = document.getElementById('robux-input').value;
            localStorage.setItem('rozenRobux', val);
            alert("Saved! Refreshing...");
            location.reload();
        };
    };

    document.getElementById('btn-tab-visuals').click(); // Load first tab
}

setInterval(buildPanel, 1000);