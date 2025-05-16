document.addEventListener('DOMContentLoaded', () => {
    const weaponSelect     = document.getElementById('weaponSelect');
    const weaponSpeedIn    = document.getElementById('weaponSpeed');
    const skillSpeedIn     = document.getElementById('skillSpeed');
    const weaponMinIn      = document.getElementById('weaponMin');
    const weaponMaxIn      = document.getElementById('weaponMax');
    const onlyShowHighest  = document.getElementById('onlyShowHighest');
    const nameFilter       = document.getElementById('nameFilter');
    const targetFilterEls  = Array.from(document.querySelectorAll('input[name="targetFilter"]'));
    const resultsContainer = document.getElementById('results');
    const cardTpl          = document.getElementById('cardTemplate').content;

    const typeLabels = {
        ACIDRIFLE:         'Acid Rifle',
        CARBINEWEAPON:     'Carbine',
        FLAMETHROWER:      'Flamethrower',
        LIGHTNINGRIFLE:    'Lightning Rifle',
        ONEHANDJEDIWEAPON: '1h Lightsaber',
        TWOHANDJEDIWEAPON: '2h Lightsaber',
        POLEARMJEDIWEAPON: 'Polearm Lightsaber',
        RIFLEWEAPON:       'Rifle',
        UNARMEDWEAPON:     'Unarmed',
        ONEHANDMELEEWEAPON:'1h Melee',
        TWOHANDMELEEWEAPON:'2h Melee',
        PISTOLWEAPON:      'Pistol',
        POLEARMWEAPON:     'Polearm'
    };

    function prettify(str) {
        return str
            .toLowerCase()
            .split('_')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
    }

    // Populate weapon-type dropdown
    const allTypes = Array.from(new Set(
        commands.map(c => c.weaponType)
            .filter(t => t && t !== 'RANGEDWEAPON' && t !== 'JEDIWEAPON')
    )).sort();

    allTypes.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = typeLabels[type] || prettify(type);
        weaponSelect.appendChild(opt);
    });

    const rangedCategory = ['PISTOLWEAPON','CARBINEWEAPON','RIFLEWEAPON','FLAMETHROWER', 'ACIDRIFLE', 'LIGHTNINGRIFLE'];
    const jediCategory   = ['ONEHANDJEDIWEAPON','TWOHANDJEDIWEAPON','POLEARMJEDIWEAPON'];

    // Only show the highest numbered variant of each command base name
    function groupByHighest(arr) {
        const map = {};
        arr.forEach(c => {
            const m    = c.name.match(/^(.*?)(\d+)$/);
            const base = m ? m[1] : c.name;
            const num  = m ? parseInt(m[2], 10) : 0;
            if (!map[base] || num > map[base].num) {
                map[base] = { cmd: c, num };
            }
        });
        return Object.values(map).map(o => o.cmd);
    }

    // Apply target-type, name, and "only highest" filters
    function applyFilters(cmds) {
        const allowed = targetFilterEls.filter(cb => cb.checked).map(cb => cb.value);
        let out = cmds.filter(c => allowed.includes(c.targetType));

        const nf = nameFilter.value.trim().toLowerCase();
        if (nf) out = out.filter(c => c.name.toLowerCase().includes(nf));

        if (onlyShowHighest.checked) {
            out = groupByHighest(out);
        }
        return out;
    }

    // Render cards for a list of commands
    function renderCommands(cmds) {
        resultsContainer.innerHTML = '';
        cmds.forEach(c => {
            const wSpeed = parseFloat(weaponSpeedIn.value);
            const sSpeed = parseFloat(skillSpeedIn.value);
            const delay  = Math.max(1, (1 - sSpeed/100) * wSpeed * c.speedMultiplier);

            const card = document.importNode(cardTpl, true);

            // Header
            card.querySelector('.action-name').textContent = c.name;
            card.querySelector('.target-icon')
                .setAttribute('data-target-type', c.targetType);

            // Stats
            card.querySelector('.damage-multiplier').textContent = c.damageMultiplier;
            card.querySelector('.delay').textContent             = `${delay.toFixed(2)} s`;
            card.querySelector('.range').textContent             = c.range === -1 ? 'weapon' : c.range;

            // DPS calculation
            let dps = '–';
            try {
                const minD   = parseFloat(weaponMinIn.value) || 0;
                const maxD   = parseFloat(weaponMaxIn.value) || minD;
                const avg    = (minD + maxD) / 2;
                const raw    = (avg * c.damageMultiplier) / delay;
                if (isFinite(raw)) dps = Math.round(raw);
            } catch (e) { /* keep dash */ }
            card.querySelector('.dps').textContent = dps;

            // Dot effects
            const dotsC = card.querySelector('.dot-effects');
            if (c.dotEffects.length) {
                c.dotEffects.forEach(de => {
                    const dot = document.createElement('div');
                    dot.className = 'dot-effect';
                    dot.setAttribute('data-type', de.type.toLowerCase());
                    dot.setAttribute('data-pool', de.pool.toLowerCase());

                    // icon → chance → time
                    const icon = document.createElement('div');
                    icon.className = 'dot-icon';
                    dot.appendChild(icon);

                    if (de.chance != null) {
                        const chance = document.createElement('div');
                        chance.className   = 'metric chance';
                        chance.textContent = `${de.chance}%`;
                        dot.appendChild(chance);
                    }

                    if (de.duration != null) {
                        const time = document.createElement('div');
                        time.className     = 'metric time';
                        time.textContent   = `${de.duration}s`;
                        dot.appendChild(time);
                    }

                    dotsC.appendChild(dot);
                });
            } else {
                dotsC.innerHTML = `<div><span class="italic">None</span></div>`;
            }

            // State effects
            const statesC = card.querySelector('.state-effects');
            if (c.stateEffects.length) {
                c.stateEffects.forEach(se => {
                    const st = document.createElement('div');
                    st.className = 'state-effect';
                    st.setAttribute('data-type', se.type.replace(/_EFFECT$/, '').toLowerCase());

                    const icon = document.createElement('div');
                    icon.className = 'state-icon';
                    st.appendChild(icon);

                    if (se.chance != null) {
                        const chance = document.createElement('div');
                        chance.className   = 'metric chance';
                        chance.textContent = `${se.chance}%`;
                        st.appendChild(chance);
                    }

                    if (se.duration != null) {
                        const time = document.createElement('div');
                        time.className     = 'metric time';
                        time.textContent   = `${se.duration}s`;
                        st.appendChild(time);
                    }

                    statesC.appendChild(st);
                });
            } else {
                statesC.innerHTML = `<div><span class="italic">None</span></div>`;
            }

            resultsContainer.appendChild(card);
        });
    }

    // Main calculation+render flow
    function calculate() {
        if (!weaponSelect.value) {
            resultsContainer.innerHTML = '';
            return;
        }
        const wSpeed = parseFloat(weaponSpeedIn.value);
        const sSpeed = parseFloat(skillSpeedIn.value);
        if (isNaN(wSpeed) || isNaN(sSpeed)) {
            resultsContainer.innerHTML = '';
            return;
        }

        let cmds = commands
            .filter(c => {
                if (rangedCategory.includes(weaponSelect.value))
                    return c.weaponType === weaponSelect.value || c.weaponType === 'RANGEDWEAPON';
                if (jediCategory.includes(weaponSelect.value))
                    return c.weaponType === weaponSelect.value || c.weaponType === 'JEDIWEAPON';
                return c.weaponType === weaponSelect.value;
            })
            .filter(c => c.speedMultiplier != null)
            .sort((a, b) => a.name.localeCompare(b.name));

        cmds = applyFilters(cmds);
        renderCommands(cmds);
    }

    // Auto-calculate on any form change
    const controls = [
        weaponSelect,
        weaponSpeedIn,
        skillSpeedIn,
        weaponMinIn,
        weaponMaxIn,
        onlyShowHighest,
        nameFilter,
        ...targetFilterEls
    ];
    controls.forEach(el => {
        el.addEventListener('input', calculate);
        el.addEventListener('change', calculate);
    });

    // Initial clear
    resultsContainer.innerHTML = '';
});
