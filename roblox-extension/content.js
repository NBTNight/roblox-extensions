// RO-ZEN ELITE: STABLE CORE
(function() {
    console.log("🚀 Ro-zen Elite is waking up...");

    function injectRozen() {
        // 1. PIN THE PANEL TO THE BODY (Avoids menu clashes)
        if (!document.getElementById('rozen-panel')) {
            const panel = document.createElement('div');
            panel.id = 'rozen-panel';
            Object.assign(panel.style, {
                position: 'fixed', right: '-350px', top: '0', width: '320px', height: '100vh',
                backgroundColor: '#0a0a0a', color: 'white', zIndex: '9999999', transition: '0.4s',
                padding: '25px', borderLeft: '2px solid #00b0ff', boxShadow: '-5px 0 20px #000'
            });
            panel.innerHTML = `
                <h2 style="color:#00b0ff">RO-ZEN ELITE</h2>
                <div style="display:flex; gap:5px; margin: 15px 0;">
                    <button id="rz-tab-1" style="flex:1; padding:8px; cursor:pointer;">Themes</button>
                    <button id="rz-tab-2" style="flex:1; padding:8px; cursor:pointer;">Visuals</button>
                </div>
                <div id="rz-body"></div>
            `;
            document.body.appendChild(panel);

            // Tab Logic
            const rzBody = document.getElementById('rz-body');
            document.getElementById('rz-tab-1').onclick = () => {
                rzBody.innerHTML = `
                    <button onclick="document.body.style.filter='sepia(1) saturate(5)'" style="width:100%; margin-bottom:5px;">Gold Mode</button>
                    <button onclick="document.body.style.filter='none'" style="width:100%;">Reset</button>
                `;
            };
            document.getElementById('rz-tab-2').onclick = () => {
                rzBody.innerHTML = `
                    <p>Fake Robux:</p>
                    <input id="rz-rbx-val" type="text" style="width:100%; color:black;" placeholder="e.g. 1M+">
                    <button id="rz-save" style="width:100%; margin-top:10px; background:#00b0ff; color:white; border:none; padding:10px;">SAVE</button>
                `;
                document.getElementById('rz-save').onclick = () => {
                    localStorage.setItem('rzRobux', document.getElementById('rz-rbx-val').value);
                    location.reload();
                };
            };
            document.getElementById('rz-tab-1').click();
        }

        // 2. INJECT THE BUTTON (Force it into the Settings Menu)
        const menu = document.querySelector('.menu-vertical.vertical-menu');
        if (menu && !document.getElementById('rz-adv-btn')) {
            const li = document.createElement('li');
            li.id = 'rz-adv-btn';
            li.className = 'menu-option';
            li.innerHTML = `<a class="menu-option-content" style="cursor:pointer;"><span style="color:#00b0ff">Ro-zen Advanced</span></a>`;
            li.onclick = (e) => {
                e.preventDefault();
                const p = document.getElementById('rozen-panel');
                p.style.right = (p.style.right === '0px') ? '-350px' : '0px';
            };
            menu.appendChild(li);
        }

        // 3. APPLY FAKE ROBUX
        const saved = localStorage.getItem('rzRobux');
        if (saved) {
            const rbx = document.getElementById('nav-robux-amount');
            if (rbx) rbx.innerText = saved;
        }
    }

    // Run every 2 seconds to beat BetterBLOX to the punch
    setInterval(injectRozen, 2000);
})();