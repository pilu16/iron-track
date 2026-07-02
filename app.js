/* ============================================================
   IRON TRACK v2 — Application de musculation
   Surcharge progressive automatique · Programmes · Historique
   ============================================================ */

'use strict';

/* ============ Base d'exercices ============ */
const EXERCISES = [
    { name: 'Jumping Jacks', video: 'https://www.youtube.com/shorts/yg3KQQn3QWg', location: 'Maison', category: 'Cardio', icon: '🏃' },
    { name: 'Squats Sumo', video: 'https://www.youtube.com/watch?v=TOSy5qIWnJI', location: 'Maison', category: 'Jambes', icon: '🦵' },
    { name: 'Fentes Arrière', video: 'https://www.youtube.com/shorts/-uQ1Q-3oYTM', location: 'Maison', category: 'Jambes', icon: '🦵' },
    { name: 'Donkey Kicks', video: 'https://www.youtube.com/watch?v=oU8GZtGS9Fk', location: 'Maison', category: 'Fessiers', icon: '🍑' },
    { name: 'Pont fessier', video: 'https://www.youtube.com/shorts/W1c1ewZdKEE', location: 'Maison', category: 'Fessiers', icon: '🍑' },
    { name: 'Montée de genoux', video: 'https://www.youtube.com/shorts/yv70ENawuUE', location: 'Maison', category: 'Abdos', icon: '💪' },
    { name: 'Le Superman', video: 'https://www.youtube.com/shorts/87jdbMkF-rk', location: 'Maison', category: 'Dos', icon: '🏋️' },
    { name: 'Dead Bug', video: 'https://www.youtube.com/watch?v=jbWmbhElf3Q', location: 'Maison', category: 'Abdos', icon: '💪' },
    { name: 'La Chaise', video: 'https://www.youtube.com/watch?v=O1l1DBqYUfc', location: 'Maison', category: 'Jambes', icon: '🦵' },
    { name: 'Dips au sol', video: 'https://www.youtube.com/shorts/xIR6ZSMK96U', location: 'Maison', category: 'Pectoraux', icon: '💪' },
    { name: 'Développé Couché', video: 'https://www.youtube.com/shorts/OmMnAhfm5jA', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Squat', video: 'https://www.youtube.com/shorts/PPmvh7gBTi0', location: 'Salle', category: 'Jambes', icon: '🦵' },
    { name: 'Soulevé de Terre', video: 'https://www.youtube.com/shorts/tUpXSpTCzas', location: 'Salle', category: 'Fessiers', icon: '🍑' },
    { name: 'Développé Militaire', video: 'https://www.youtube.com/shorts/9aiOSSyoltM', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Rowing Barre', video: 'https://www.youtube.com/shorts/ZM9XpyG5HeU', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Tractions', video: 'https://www.youtube.com/shorts/ZZNUjqF9Xuo', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Curl Biceps', video: 'https://www.youtube.com/shorts/4KjIxVHAqP0', location: 'Salle', category: 'Biceps', icon: '💪' },
    { name: 'Extension Triceps', video: 'https://www.youtube.com/shorts/K3mFeNz4e3w', location: 'Salle', category: 'Triceps', icon: '💪' },
    { name: 'Leg Press', video: 'https://www.youtube.com/shorts/EotSw18oR9w', location: 'Salle', category: 'Jambes', icon: '🦵' },
    { name: 'Leg Curl', video: 'https://www.youtube.com/shorts/_lgE0gPvbik', location: 'Salle', category: 'Jambes', icon: '🦵' },
    { name: 'Développé couché haltères', video: '', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Convergeant poulie', video: '', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Dips buste penché', video: '', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Rowing haltère', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Tirage horizontal serré', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Pullover poulie', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Développé militaire machine', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Élévations latérales haltères', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Curl marteaux', video: '', location: 'Salle', category: 'Biceps', icon: '💪' },
    { name: 'Face pull', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Extension triceps poulie', video: '', location: 'Salle', category: 'Triceps', icon: '💪' },
    { name: 'Curl banc incliné', video: '', location: 'Salle', category: 'Biceps', icon: '💪' },
    { name: 'Curl pupitre', video: '', location: 'Salle', category: 'Biceps', icon: '💪' },
    { name: 'Développé incliné haltères', video: '', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Écartés poulie', video: '', location: 'Salle', category: 'Pectoraux', icon: '💪' },
    { name: 'Tirage vertical neutre', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Tirage unilatéral', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Tirage horizontal large', video: '', location: 'Salle', category: 'Dos', icon: '🏋️' },
    { name: 'Développé militaire haltères', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Élévations latérales poulie', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Oiseau arrière', video: '', location: 'Salle', category: 'Épaules', icon: '💪' },
    { name: 'Curl poulie', video: '', location: 'Salle', category: 'Biceps', icon: '💪' },
    { name: 'SDT jambes tendues', video: '', location: 'Salle', category: 'Fessiers', icon: '🍑' },
    { name: 'Hack squat', video: '', location: 'Salle', category: 'Jambes', icon: '🦵' },
    { name: 'Leg extension', video: '', location: 'Salle', category: 'Jambes', icon: '🦵' }
];

const exByName = (name) => EXERCISES.find(e => e.name === name);
const exIcon = (name) => (exByName(name) || {}).icon || '💪';

/* ============ Modes de surcharge progressive ============ */
const MODES = {
    reps: {
        label: 'Ajout de répétitions',
        short: 'Reps +1',
        desc: 'À chaque séance réussie, +1 rep sur une série (en partant de la dernière). Quand toutes les séries atteignent le max de reps, le poids augmente et les reps repartent au minimum.'
    },
    double: {
        label: 'Double progression',
        short: 'Double prog.',
        desc: 'Toutes les séries gagnent +1 rep en même temps. Au max de reps partout, le poids augmente et les reps repartent au minimum.'
    },
    weight: {
        label: 'Ajout de poids',
        short: 'Poids +',
        desc: 'Les répétitions restent fixes (reps min). À chaque séance réussie, le poids augmente de l’incrément.'
    },
    none: {
        label: 'Manuel (pas de progression auto)',
        short: 'Manuel',
        desc: 'Les objectifs restent identiques à la dernière séance. Tu ajustes toi-même.'
    }
};

/* ============ Programmes préenregistrés ============ */
function px(name, sets, repsMin, repsMax, opts = {}) {
    return Object.assign({
        name, sets, repsMin, repsMax,
        weight: 0, increment: 2.5, rest: 90, mode: 'reps'
    }, opts);
}

const PROGRAMS = [
    {
        id: 'ppl',
        name: 'Push · Pull · Legs',
        tag: 'Intermédiaire · 3-6 j/sem',
        emoji: '🔥',
        desc: 'Le grand classique de la prise de muscle. Trois séances qui se répètent : pousser, tirer, jambes. Progression par ajout de répétitions.',
        sessions: [
            {
                name: 'Push — Pecs · Épaules · Triceps',
                exercises: [
                    px('Développé Couché', 4, 8, 12, { increment: 2.5 }),
                    px('Développé incliné haltères', 3, 8, 12),
                    px('Développé militaire haltères', 3, 8, 12),
                    px('Élévations latérales haltères', 3, 10, 15, { increment: 1 }),
                    px('Écartés poulie', 3, 12, 15, { rest: 60, increment: 1 }),
                    px('Extension triceps poulie', 3, 10, 15, { rest: 60, increment: 1 })
                ]
            },
            {
                name: 'Pull — Dos · Biceps',
                exercises: [
                    px('Tractions', 4, 6, 10, { rest: 120 }),
                    px('Rowing Barre', 4, 8, 12),
                    px('Tirage horizontal serré', 3, 10, 12),
                    px('Face pull', 3, 12, 15, { rest: 60, increment: 1 }),
                    px('Curl Biceps', 3, 8, 12, { increment: 1 }),
                    px('Curl marteaux', 3, 10, 12, { rest: 60, increment: 1 })
                ]
            },
            {
                name: 'Legs — Jambes · Fessiers',
                exercises: [
                    px('Squat', 4, 6, 10, { increment: 5, rest: 150 }),
                    px('Leg Press', 3, 10, 12, { increment: 5 }),
                    px('SDT jambes tendues', 3, 8, 12),
                    px('Leg Curl', 3, 10, 15, { rest: 60 }),
                    px('Leg extension', 3, 10, 15, { rest: 60 })
                ]
            }
        ]
    },
    {
        id: 'upper-lower',
        name: 'Haut / Bas',
        tag: 'Tous niveaux · 4 j/sem',
        emoji: '⚡',
        desc: 'Deux séances en alternance : haut du corps puis bas du corps. Idéal 4 jours par semaine, équilibre parfait entre volume et récupération.',
        sessions: [
            {
                name: 'Haut du corps',
                exercises: [
                    px('Développé Couché', 4, 8, 12),
                    px('Rowing Barre', 4, 8, 12),
                    px('Développé Militaire', 3, 8, 12),
                    px('Tirage vertical neutre', 3, 10, 12),
                    px('Curl Biceps', 3, 10, 12, { rest: 60, increment: 1 }),
                    px('Extension Triceps', 3, 10, 12, { rest: 60, increment: 1 })
                ]
            },
            {
                name: 'Bas du corps',
                exercises: [
                    px('Squat', 4, 6, 10, { increment: 5, rest: 150 }),
                    px('SDT jambes tendues', 3, 8, 12),
                    px('Leg Press', 3, 10, 12, { increment: 5 }),
                    px('Leg Curl', 3, 10, 15, { rest: 60 }),
                    px('Leg extension', 3, 10, 15, { rest: 60 })
                ]
            }
        ]
    },
    {
        id: 'fullbody',
        name: 'Full Body Débutant',
        tag: 'Débutant · 3 j/sem',
        emoji: '🌱',
        desc: 'Tout le corps à chaque séance, en alternant A et B. La meilleure porte d’entrée en musculation : simple, efficace, progressif.',
        sessions: [
            {
                name: 'Full Body A',
                exercises: [
                    px('Squat', 3, 8, 12, { increment: 5, rest: 120 }),
                    px('Développé Couché', 3, 8, 12),
                    px('Rowing Barre', 3, 8, 12),
                    px('Élévations latérales haltères', 2, 12, 15, { rest: 60, increment: 1 }),
                    px('Curl Biceps', 2, 10, 15, { rest: 60, increment: 1 })
                ]
            },
            {
                name: 'Full Body B',
                exercises: [
                    px('Soulevé de Terre', 3, 6, 10, { increment: 5, rest: 150 }),
                    px('Développé Militaire', 3, 8, 12),
                    px('Tirage vertical neutre', 3, 8, 12),
                    px('Leg Press', 2, 10, 15, { increment: 5 }),
                    px('Extension triceps poulie', 2, 10, 15, { rest: 60, increment: 1 })
                ]
            }
        ]
    },
    {
        id: 'home',
        name: 'Spécial Maison',
        tag: 'Sans matériel · 3 j/sem',
        emoji: '🏠',
        desc: 'Deux séances au poids du corps, à faire n’importe où. Progression par ajout de répétitions, jusqu’à 20 reps par série.',
        sessions: [
            {
                name: 'Maison — Bas du corps',
                exercises: [
                    px('Squats Sumo', 4, 12, 20, { rest: 60, increment: 0, mode: 'reps' }),
                    px('Fentes Arrière', 3, 10, 20, { rest: 60, increment: 0 }),
                    px('Pont fessier', 3, 12, 20, { rest: 45, increment: 0 }),
                    px('Donkey Kicks', 3, 12, 20, { rest: 45, increment: 0 }),
                    px('La Chaise', 3, 30, 60, { rest: 60, increment: 0 })
                ]
            },
            {
                name: 'Maison — Haut & abdos',
                exercises: [
                    px('Dips au sol', 4, 8, 15, { rest: 60, increment: 0 }),
                    px('Le Superman', 3, 10, 20, { rest: 45, increment: 0 }),
                    px('Montée de genoux', 3, 15, 30, { rest: 45, increment: 0 }),
                    px('Dead Bug', 3, 10, 20, { rest: 45, increment: 0 }),
                    px('Jumping Jacks', 3, 20, 40, { rest: 45, increment: 0 })
                ]
            }
        ]
    }
];

/* ============ Stockage & migration ============ */
const SCHEMA_VERSION = 2;

const db = {
    sessions: [],
    history: [],
    measurements: [],
    settings: {}
};

const DEFAULT_SETTINGS = {
    schemaVersion: SCHEMA_VERSION,
    showVideos: true,
    vibration: true,
    defaultRest: 90,
    defaultRepsMin: 8,
    defaultRepsMax: 12,
    defaultIncrement: 2.5
};

function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
}

function save() {
    localStorage.setItem('irontrack_sessions', JSON.stringify(db.sessions));
    localStorage.setItem('irontrack_history', JSON.stringify(db.history));
    localStorage.setItem('irontrack_measurements', JSON.stringify(db.measurements));
    localStorage.setItem('irontrack_settings', JSON.stringify(db.settings));
}

function migrateExercise(ex) {
    if (ex.repsMin !== undefined && ex.mode !== undefined) return ex;
    // Ancien format : { name, sets, targetReps: '8-12', rest, tempo, rir }
    let repsMin = DEFAULT_SETTINGS.defaultRepsMin;
    let repsMax = DEFAULT_SETTINGS.defaultRepsMax;
    if (typeof ex.targetReps === 'string') {
        const m = ex.targetReps.match(/(\d+)\s*[-–à]\s*(\d+)/);
        if (m) { repsMin = +m[1]; repsMax = +m[2]; }
        else if (/^\d+$/.test(ex.targetReps.trim())) { repsMin = repsMax = +ex.targetReps.trim(); }
    }
    return {
        name: ex.name,
        sets: ex.sets || 3,
        repsMin, repsMax,
        weight: ex.weight || 0,
        increment: ex.increment ?? DEFAULT_SETTINGS.defaultIncrement,
        rest: ex.rest || DEFAULT_SETTINGS.defaultRest,
        mode: ex.mode || 'reps'
    };
}

function migrateHistoryEntry(h) {
    h.id = h.id || String(h.date || Math.random()).replace(/\D/g, '') || String(Date.now());
    h.exercises = (h.exercises || []).map(ex => {
        const sets = (ex.sets || []).map(s => ({
            targetReps: +(s.targetReps ?? s.reps) || 0,
            reps: +s.reps || 0,
            weight: +s.weight || 0,
            done: s.done ?? s.completed ?? ((+s.reps || 0) > 0)
        }));
        return {
            name: ex.name,
            mode: ex.mode || 'reps',
            prescription: ex.prescription || { weight: sets[0] ? sets[0].weight : 0, reps: sets.map(s => s.targetReps || s.reps) },
            achieved: ex.achieved ?? sets.every(s => s.done),
            sets
        };
    });
    return h;
}

function loadDB() {
    db.settings = Object.assign({}, DEFAULT_SETTINGS, loadJSON('irontrack_settings', {}));
    db.sessions = loadJSON('irontrack_sessions', []).map(s => ({
        id: s.id,
        name: s.name,
        createdAt: s.createdAt || new Date().toISOString(),
        exercises: (s.exercises || []).map(migrateExercise)
    }));
    db.history = loadJSON('irontrack_history', []).map(migrateHistoryEntry)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    db.measurements = loadJSON('irontrack_measurements', []);
    db.settings.schemaVersion = SCHEMA_VERSION;
    save();
}

/* ============ Moteur de surcharge progressive ============ */
function roundWeight(w) { return Math.round(w * 4) / 4; }

function defaultPrescription(cfg) {
    return { weight: cfg.weight || 0, reps: Array.from({ length: cfg.sets }, () => cfg.repsMin) };
}

// Applique UN pas de progression à une prescription réussie.
// Mode 'reps' : +1 rep sur la dernière série la plus basse (8/8/8 → 8/8/9 → 8/9/9 → 9/9/9 …).
// Quand toutes les séries sont au max : +incrément de poids, reps remises au min.
function stepPrescription(p, cfg) {
    const reps = [...p.reps];
    let weight = p.weight;
    switch (cfg.mode) {
        case 'reps': {
            if (reps.every(r => r >= cfg.repsMax)) {
                if (cfg.increment > 0) { weight = roundWeight(weight + cfg.increment); reps.fill(cfg.repsMin); }
            } else {
                const lowest = Math.min(...reps);
                for (let i = reps.length - 1; i >= 0; i--) {
                    if (reps[i] === lowest) { reps[i] = Math.min(lowest + 1, cfg.repsMax); break; }
                }
            }
            break;
        }
        case 'double': {
            if (reps.every(r => r >= cfg.repsMax)) {
                if (cfg.increment > 0) { weight = roundWeight(weight + cfg.increment); reps.fill(cfg.repsMin); }
            } else {
                for (let i = 0; i < reps.length; i++) reps[i] = Math.min(reps[i] + 1, cfg.repsMax);
            }
            break;
        }
        case 'weight':
            weight = roundWeight(weight + cfg.increment);
            break;
        case 'none':
        default:
            break;
    }
    return { weight, reps };
}

// Adapte une prescription passée à la config actuelle (nb de séries, bornes de reps)
function reconcilePrescription(p, cfg) {
    const reps = [];
    for (let i = 0; i < cfg.sets; i++) {
        let r = p.reps[i] ?? p.reps[p.reps.length - 1] ?? cfg.repsMin;
        r = Math.max(Math.min(r, cfg.repsMax), Math.min(cfg.repsMin, cfg.repsMax));
        reps.push(r);
    }
    return { weight: p.weight, reps };
}

// Calcule la prescription de la prochaine séance pour un exercice :
// si la dernière fois tous les objectifs ont été validés → un pas de progression,
// sinon → on répète les mêmes objectifs.
function getNextPrescription(sessionId, cfg) {
    const past = db.history
        .filter(h => h.sessionId === sessionId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    for (const h of past) {
        const ex = h.exercises.find(e => e.name === cfg.name);
        if (!ex || !ex.sets || !ex.sets.some(s => s.done)) continue;
        let presc = ex.prescription && Array.isArray(ex.prescription.reps)
            ? { weight: +ex.prescription.weight || 0, reps: ex.prescription.reps.map(Number) }
            : { weight: ex.sets[0].weight || 0, reps: ex.sets.map(s => s.targetReps || s.reps) };
        presc = reconcilePrescription(presc, cfg);
        const achieved = ex.achieved ?? ex.sets.every(s => s.done && s.reps >= s.targetReps);
        return achieved ? stepPrescription(presc, cfg) : presc;
    }
    return defaultPrescription(cfg);
}

function lastWorkoutForSession(sessionId) {
    return db.history.find(h => h.sessionId === sessionId) || null;
}

function formatPresc(p, withWeight = true) {
    const reps = p.reps.join(' · ');
    return withWeight && p.weight > 0 ? `${fmtKg(p.weight)} kg — ${reps} reps` : `${reps} reps`;
}

function fmtKg(w) { return (Math.round(w * 100) / 100).toString().replace('.', ','); }

/* ============ Utilitaires ============ */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

function vibrate(pattern) {
    if (db.settings.vibration && navigator.vibrate) navigator.vibrate(pattern);
}

function showToast(msg, icon = '✓') {
    const t = $('toast');
    t.innerHTML = `<span>${icon}</span><span>${esc(msg)}</span>`;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

function fmtDate(iso, opts) {
    return new Date(iso).toLocaleDateString('fr-FR', opts || { weekday: 'long', day: 'numeric', month: 'long' });
}

function fmtDuration(sec) {
    const m = Math.floor(sec / 60);
    if (m < 60) return `${m} min`;
    return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')}`;
}

function relativeDate(iso) {
    const d = new Date(iso); const now = new Date();
    const days = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / 86400000);
    if (days === 0) return "Aujourd'hui";
    if (days === 1) return 'Hier';
    if (days < 7) return `Il y a ${days} jours`;
    return fmtDate(iso, { day: 'numeric', month: 'short', year: d.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
}

function startOfWeek(d = new Date()) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const day = (x.getDay() + 6) % 7; // lundi = 0
    x.setDate(x.getDate() - day);
    return x;
}

function animateCount(el, target, suffix = '', decimals = 0) {
    const dur = 800; const start = performance.now();
    function tick(now) {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals).replace('.', ',') + suffix;
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

/* ============ Navigation ============ */
let currentTab = 'home';

function navigateTo(tab) {
    if (activeWorkout && tab !== 'workout') {
        // la séance reste accessible via le bandeau "reprendre"
    }
    currentTab = tab;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    const view = $('view-' + tab);
    if (view) view.classList.add('active');
    const renders = { home: renderHome, sessions: renderSessions, history: renderHistory, stats: renderStats, profile: renderProfile, workout: renderWorkout };
    if (renders[tab]) renders[tab]();
    window.scrollTo({ top: 0 });
    vibrate(5);
}

/* ============ Sheets (bottom sheets / modals) ============ */
function openSheet(id) {
    $('sheetBackdrop').classList.add('open');
    $(id).classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSheets() {
    $('sheetBackdrop').classList.remove('open');
    document.querySelectorAll('.sheet').forEach(s => s.classList.remove('open'));
    document.body.style.overflow = '';
}

/* ============ Accueil ============ */
function suggestNextSession() {
    if (!db.sessions.length) return null;
    // La séance jamais faite, sinon celle faite il y a le plus longtemps (rotation naturelle)
    let best = null; let bestTime = Infinity;
    for (const s of db.sessions) {
        const last = lastWorkoutForSession(s.id);
        const t = last ? new Date(last.date).getTime() : -1;
        if (t < bestTime) { bestTime = t; best = s; }
    }
    return best;
}

function renderHome() {
    const c = $('homeContent');
    const next = suggestNextSession();
    const weekStart = startOfWeek();
    const weekWorkouts = db.history.filter(h => new Date(h.date) >= weekStart);
    const weekTonnage = weekWorkouts.reduce((sum, h) => sum + (h.tonnage || 0), 0);
    const lastWorkout = db.history[0];

    let heroHtml;
    if (!next) {
        heroHtml = `
            <div class="hero">
                <div class="hero-label">Bienvenue</div>
                <div class="hero-title">Prêt à forger ?</div>
                <div class="hero-sub">Crée ta première séance ou choisis un programme préenregistré pour commencer.</div>
                <div style="display:flex; gap:10px; margin-top:18px;">
                    <button class="btn small" onclick="openEditor()">+ Créer une séance</button>
                    <button class="btn small secondary" onclick="navigateTo('sessions'); switchSessionsTab('programs')">Voir les programmes</button>
                </div>
            </div>`;
    } else {
        const last = lastWorkoutForSession(next.id);
        const preview = next.exercises.slice(0, 3).map(cfg => {
            const p = getNextPrescription(next.id, cfg);
            const lastEx = last ? last.exercises.find(e => e.name === cfg.name) : null;
            let badge = '';
            if (lastEx && lastEx.achieved) {
                const prevP = reconcilePrescription(lastEx.prescription, cfg);
                if (p.weight > prevP.weight) badge = `<span class="badge up">▲ +${fmtKg(p.weight - prevP.weight)} kg</span>`;
                else if (p.reps.reduce((a, b) => a + b, 0) > prevP.reps.reduce((a, b) => a + b, 0)) badge = `<span class="badge up">▲ +1 rep</span>`;
            }
            return `<div class="hero-preview-row"><span>${exIcon(cfg.name)}</span><b>${esc(cfg.name)}</b><span style="margin-left:auto; font-variant-numeric:tabular-nums;">${formatPresc(p)}</span>${badge}</div>`;
        }).join('');
        const more = next.exercises.length > 3 ? `<div class="hero-preview-row" style="color:var(--faint)">+ ${next.exercises.length - 3} autres exercices…</div>` : '';
        heroHtml = `
            <div class="hero">
                <div class="hero-label">Prochaine séance ${last ? '· dernière fois ' + relativeDate(last.date).toLowerCase() : '· jamais faite'}</div>
                <div class="hero-title">${esc(next.name)}</div>
                <div class="hero-preview">${preview}${more}</div>
                <button class="btn" style="margin-top:18px;" onclick="startWorkout('${next.id}')">⚡ Démarrer la séance</button>
            </div>`;
    }

    const resumeBanner = activeWorkout ? `
        <div class="card pressable" style="margin-bottom:14px; border-color:rgba(255,92,31,.45); display:flex; align-items:center; justify-content:space-between; gap:10px;" onclick="navigateTo('workout')">
            <div>
                <div style="font-weight:600;">Séance en cours — ${esc(activeWorkout.sessionName)}</div>
                <div style="font-size:12.5px; color:var(--muted); margin-top:2px;">Touche pour reprendre</div>
            </div>
            <span class="badge accent pulse" style="background:var(--accent-soft)">●</span>
        </div>` : '';

    c.innerHTML = `
        <div class="stagger">
            ${resumeBanner}
            ${heroHtml}
            <div class="stat-grid">
                <div class="stat-tile"><div class="stat-value" id="statWeekCount">0</div><div class="stat-label">Séances cette semaine</div></div>
                <div class="stat-tile"><div class="stat-value" id="statWeekTonnage">0</div><div class="stat-label">Tonnage cette semaine</div></div>
                <div class="stat-tile"><div class="stat-value" id="statTotal">0</div><div class="stat-label">Séances au total</div></div>
                <div class="stat-tile"><div class="stat-value">${lastWorkout ? relativeDate(lastWorkout.date) : '—'}</div><div class="stat-label">Dernier entraînement</div></div>
            </div>
            ${db.history.length ? `
            <div class="section-title">Activité récente <button class="link" onclick="navigateTo('history')">Tout voir →</button></div>
            ${db.history.slice(0, 3).map(h => `
                <div class="card pressable session-card" onclick="navigateTo('history'); setTimeout(()=>toggleHistoryCard('${h.id}'), 50)">
                    <div class="session-card-head">
                        <div>
                            <div class="session-name" style="font-size:16px;">${esc(h.sessionName)}</div>
                            <div class="session-meta">${relativeDate(h.date)} · ${h.exercises.length} exos · ${fmtKg(h.tonnage || 0)} kg soulevés</div>
                        </div>
                        <span class="expand-arrow">→</span>
                    </div>
                </div>`).join('')}` : ''}
        </div>`;

    animateCount($('statWeekCount'), weekWorkouts.length);
    animateCount($('statWeekTonnage'), weekTonnage >= 1000 ? weekTonnage / 1000 : weekTonnage, weekTonnage >= 1000 ? ' t' : ' kg', weekTonnage >= 1000 ? 1 : 0);
    animateCount($('statTotal'), db.history.length);
}

/* ============ Séances & programmes ============ */
let sessionsTab = 'mine';

function switchSessionsTab(tab) {
    sessionsTab = tab;
    renderSessions();
}

function renderSessions() {
    const c = $('sessionsContent');
    const tabs = `
        <div class="chip-row" style="margin-bottom:18px;">
            <button class="chip ${sessionsTab === 'mine' ? 'active' : ''}" onclick="switchSessionsTab('mine')">Mes séances</button>
            <button class="chip ${sessionsTab === 'programs' ? 'active' : ''}" onclick="switchSessionsTab('programs')">Programmes préenregistrés</button>
        </div>`;

    if (sessionsTab === 'programs') {
        c.innerHTML = tabs + `<div class="stagger">` + PROGRAMS.map(p => `
            <div class="card pressable program-card" onclick="openProgram('${p.id}')">
                <div class="prog-emoji">${p.emoji}</div>
                <div class="program-tag">${esc(p.tag)}</div>
                <div class="program-name">${esc(p.name)}</div>
                <div class="program-desc">${esc(p.desc)}</div>
                <div class="program-meta">
                    <span class="badge neutral">${p.sessions.length} séance${p.sessions.length > 1 ? 's' : ''}</span>
                    <span class="badge accent">Surcharge auto</span>
                </div>
            </div>`).join('') + `</div>`;
        return;
    }

    if (!db.sessions.length) {
        c.innerHTML = tabs + `
            <div class="empty">
                <span class="empty-icon">🏋️</span>
                <div class="empty-title">Aucune séance</div>
                <p>Crée ta propre séance ou importe un programme préenregistré : la surcharge progressive s'appliquera automatiquement.</p>
                <button class="btn" style="margin-top:18px;" onclick="openEditor()">+ Créer une séance</button>
                <button class="btn secondary" style="margin-top:10px;" onclick="switchSessionsTab('programs')">Parcourir les programmes</button>
            </div>`;
        return;
    }

    c.innerHTML = tabs + `<div class="stagger">` + db.sessions.map(s => {
        const last = lastWorkoutForSession(s.id);
        const rows = s.exercises.map(cfg => {
            const p = getNextPrescription(s.id, cfg);
            return `<div class="session-ex-row">
                <div class="ex-name"><span>${exIcon(cfg.name)}</span><span class="label">${esc(cfg.name)}</span></div>
                <span class="ex-target">${cfg.sets}×&nbsp;${formatPresc(p)}</span>
            </div>`;
        }).join('');
        return `
        <div class="card session-card">
            <div class="session-card-head">
                <div>
                    <div class="session-name">${esc(s.name)}</div>
                    <div class="session-meta">${s.exercises.length} exercices · ${last ? 'dernière fois ' + relativeDate(last.date).toLowerCase() : 'jamais faite'}</div>
                </div>
                <button class="icon-btn" onclick="event.stopPropagation(); toggleMenu('${s.id}')">⋯</button>
                <div class="menu-pop" id="menu-${s.id}">
                    <button class="menu-item" onclick="openEditor('${s.id}')">✏️ Modifier</button>
                    <button class="menu-item" onclick="duplicateSession('${s.id}')">📄 Dupliquer</button>
                    <button class="menu-item" onclick="navigateTo('history')">🕐 Historique</button>
                    <button class="menu-item danger" onclick="deleteSession('${s.id}')">🗑 Supprimer</button>
                </div>
            </div>
            <div class="session-exercises">${rows}</div>
            <div class="session-card-actions">
                <button class="btn" onclick="startWorkout('${s.id}')">⚡ Démarrer</button>
            </div>
        </div>`;
    }).join('') + `</div>
        <button class="btn secondary" style="margin-top:6px;" onclick="openEditor()">+ Nouvelle séance</button>`;
}

function toggleMenu(id) {
    const menu = $('menu-' + id);
    const wasOpen = menu.classList.contains('open');
    document.querySelectorAll('.menu-pop').forEach(m => m.classList.remove('open'));
    if (!wasOpen) menu.classList.add('open');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-pop') && !e.target.closest('.icon-btn')) {
        document.querySelectorAll('.menu-pop').forEach(m => m.classList.remove('open'));
    }
});

function duplicateSession(id) {
    const s = db.sessions.find(x => x.id === id);
    if (!s) return;
    db.sessions.push({ id: uid(), name: s.name + ' (copie)', createdAt: new Date().toISOString(), exercises: JSON.parse(JSON.stringify(s.exercises)) });
    save();
    renderSessions();
    showToast('Séance dupliquée');
}

function deleteSession(id) {
    const s = db.sessions.find(x => x.id === id);
    if (!s) return;
    if (!confirm(`Supprimer « ${s.name} » ? L'historique de cette séance sera conservé.`)) return;
    db.sessions = db.sessions.filter(x => x.id !== id);
    save();
    renderSessions();
    showToast('Séance supprimée', '🗑');
}

/* ============ Programmes : détail & import ============ */
let viewedProgram = null;

function openProgram(programId) {
    viewedProgram = PROGRAMS.find(p => p.id === programId);
    if (!viewedProgram) return;
    const p = viewedProgram;
    $('programSheetTitle').textContent = p.name;
    $('programSheetBody').innerHTML = `
        <div style="font-size:13.5px; color:var(--muted); line-height:1.55; margin-bottom:6px;">${esc(p.desc)}</div>
        <div class="chip-row" style="margin:12px 0 18px;"><span class="badge neutral">${esc(p.tag)}</span><span class="badge accent">Surcharge progressive automatique</span></div>
        ${p.sessions.map(s => `
            <div class="card" style="margin-bottom:12px;">
                <div class="session-name" style="font-size:16px;">${esc(s.name)}</div>
                <div class="session-exercises">
                    ${s.exercises.map(cfg => `
                        <div class="session-ex-row">
                            <div class="ex-name"><span>${exIcon(cfg.name)}</span><span class="label">${esc(cfg.name)}</span></div>
                            <span class="ex-target">${cfg.sets}× ${cfg.repsMin}-${cfg.repsMax}${cfg.increment > 0 ? ' · +' + fmtKg(cfg.increment) + ' kg' : ''}</span>
                        </div>`).join('')}
                </div>
            </div>`).join('')}
        <button class="btn" onclick="importProgram()">＋ Ajouter ce programme à mes séances</button>`;
    openSheet('programSheet');
}

function importProgram() {
    if (!viewedProgram) return;
    for (const s of viewedProgram.sessions) {
        db.sessions.push({
            id: uid(),
            name: s.name,
            createdAt: new Date().toISOString(),
            exercises: JSON.parse(JSON.stringify(s.exercises))
        });
    }
    save();
    closeSheets();
    sessionsTab = 'mine';
    navigateTo('sessions');
    showToast(`Programme « ${viewedProgram.name} » ajouté`, '🎉');
    vibrate([10, 40, 10]);
}

/* ============ Éditeur de séance ============ */
let editorState = null;

function openEditor(sessionId = null) {
    closeSheets();
    document.querySelectorAll('.menu-pop').forEach(m => m.classList.remove('open'));
    const s = sessionId ? db.sessions.find(x => x.id === sessionId) : null;
    editorState = s
        ? { id: s.id, name: s.name, exercises: JSON.parse(JSON.stringify(s.exercises)) }
        : { id: null, name: '', exercises: [] };
    $('editorSheetTitle').textContent = s ? 'Modifier la séance' : 'Nouvelle séance';
    renderEditor();
    openSheet('editorSheet');
}

function renderEditor() {
    const st = editorState;
    $('editorSheetBody').innerHTML = `
        <div class="field">
            <label class="field-label">Nom de la séance</label>
            <input class="field-input" id="editName" value="${esc(st.name)}" placeholder="Ex : Push, Jambes, Full Body A…" oninput="editorState.name = this.value">
        </div>
        <div class="field-label" style="margin-bottom:10px;">Exercices (${st.exercises.length})</div>
        <div id="editorExercises">
            ${st.exercises.map((cfg, i) => renderCfgExercise(cfg, i)).join('') || '<div class="empty" style="padding:22px;"><p>Aucun exercice. Ajoute-en pour construire ta séance.</p></div>'}
        </div>
        <button class="btn secondary" style="margin:6px 0 16px;" onclick="openPicker()">＋ Ajouter des exercices</button>
        <button class="btn" onclick="saveEditor()">💾 Enregistrer la séance</button>
        ${st.id ? '<button class="btn ghost" style="margin-top:10px;" onclick="deleteSessionFromEditor()">Supprimer cette séance</button>' : ''}`;
}

function renderCfgExercise(cfg, i) {
    const modeOpts = Object.entries(MODES).map(([k, m]) => `<option value="${k}" ${cfg.mode === k ? 'selected' : ''}>${m.label}</option>`).join('');
    const isWeightMode = cfg.mode === 'weight';
    return `
    <div class="cfg-ex">
        <div class="cfg-ex-head">
            <div class="cfg-ex-name"><span>${exIcon(cfg.name)}</span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(cfg.name)}</span></div>
            <div style="display:flex; gap:6px; flex-shrink:0;">
                <button class="icon-btn" style="width:32px;height:32px;font-size:13px;" onclick="moveExercise(${i},-1)" ${i === 0 ? 'disabled style="opacity:.3;width:32px;height:32px;font-size:13px;"' : ''}>↑</button>
                <button class="icon-btn" style="width:32px;height:32px;font-size:13px;" onclick="moveExercise(${i},1)" ${i === editorState.exercises.length - 1 ? 'disabled style="opacity:.3;width:32px;height:32px;font-size:13px;"' : ''}>↓</button>
                <button class="icon-btn" style="width:32px;height:32px;font-size:13px;color:var(--danger);" onclick="removeExercise(${i})">✕</button>
            </div>
        </div>
        <div class="cfg-grid">
            <div class="field"><label class="field-label">Séries</label><input type="number" class="field-input" value="${cfg.sets}" min="1" max="10" onchange="updCfg(${i},'sets',this.value)"></div>
            <div class="field"><label class="field-label">${isWeightMode ? 'Reps fixes' : 'Reps min'}</label><input type="number" class="field-input" value="${cfg.repsMin}" min="1" onchange="updCfg(${i},'repsMin',this.value)"></div>
            <div class="field" ${isWeightMode ? 'style="opacity:.35;"' : ''}><label class="field-label">Reps max</label><input type="number" class="field-input" value="${cfg.repsMax}" min="1" onchange="updCfg(${i},'repsMax',this.value)" ${isWeightMode ? 'disabled' : ''}></div>
            <div class="field"><label class="field-label">Poids départ</label><input type="number" class="field-input" value="${cfg.weight}" min="0" step="0.25" onchange="updCfg(${i},'weight',this.value)"></div>
            <div class="field"><label class="field-label">Incrément kg</label><input type="number" class="field-input" value="${cfg.increment}" min="0" step="0.25" onchange="updCfg(${i},'increment',this.value)"></div>
            <div class="field"><label class="field-label">Repos (s)</label><input type="number" class="field-input" value="${cfg.rest}" min="0" step="15" onchange="updCfg(${i},'rest',this.value)"></div>
            <div class="field cfg-mode">
                <label class="field-label">Surcharge progressive</label>
                <select class="field-input" onchange="updCfg(${i},'mode',this.value)">${modeOpts}</select>
                <div style="font-size:11.5px; color:var(--faint); margin-top:6px; line-height:1.45;">${MODES[cfg.mode].desc}</div>
            </div>
        </div>
    </div>`;
}

function updCfg(i, field, value) {
    const cfg = editorState.exercises[i];
    if (field === 'mode') { cfg.mode = value; renderEditor(); return; }
    const num = parseFloat(value);
    cfg[field] = isNaN(num) ? cfg[field] : num;
    if (field === 'sets') cfg.sets = Math.max(1, Math.min(10, Math.round(cfg.sets)));
    if (cfg.repsMax < cfg.repsMin) cfg.repsMax = cfg.repsMin;
}

function moveExercise(i, dir) {
    const arr = editorState.exercises;
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    renderEditor();
}

function removeExercise(i) {
    editorState.exercises.splice(i, 1);
    renderEditor();
}

function saveEditor() {
    const st = editorState;
    st.name = ($('editName') ? $('editName').value : st.name).trim();
    if (!st.name) { showToast('Donne un nom à ta séance', '⚠️'); return; }
    if (!st.exercises.length) { showToast('Ajoute au moins un exercice', '⚠️'); return; }
    if (st.id) {
        const s = db.sessions.find(x => x.id === st.id);
        s.name = st.name;
        s.exercises = st.exercises;
    } else {
        db.sessions.push({ id: uid(), name: st.name, createdAt: new Date().toISOString(), exercises: st.exercises });
    }
    save();
    closeSheets();
    sessionsTab = 'mine';
    if (currentTab === 'sessions') renderSessions(); else navigateTo('sessions');
    showToast('Séance enregistrée');
}

function deleteSessionFromEditor() {
    if (!editorState.id) return;
    closeSheets();
    deleteSession(editorState.id);
}

/* ============ Sélecteur d'exercices ============ */
let pickerFilter = 'Tous';
let pickerSelection = new Set();

function openPicker() {
    pickerSelection = new Set(editorState.exercises.map(e => e.name));
    pickerFilter = 'Tous';
    renderPicker();
    openSheet('pickerSheet');
}

function renderPicker() {
    const cats = [...new Set(EXERCISES.filter(e => pickerFilter === 'Tous' || e.location === pickerFilter).map(e => e.category))];
    $('pickerSheetBody').innerHTML = `
        <div class="chip-row" style="margin-bottom:16px;">
            ${['Tous', 'Salle', 'Maison'].map(f => `<button class="chip ${pickerFilter === f ? 'active' : ''}" onclick="pickerFilter='${f}'; renderPicker()">${f === 'Salle' ? '🏋️ ' : f === 'Maison' ? '🏠 ' : ''}${f}</button>`).join('')}
        </div>
        ${cats.map((cat, ci) => {
            const exs = EXERCISES.filter(e => e.category === cat && (pickerFilter === 'Tous' || e.location === pickerFilter));
            const selCount = exs.filter(e => pickerSelection.has(e.name)).length;
            return `
            <div class="picker-cat ${selCount ? 'open' : ''}" id="pcat-${ci}">
                <div class="picker-cat-head" onclick="document.getElementById('pcat-${ci}').classList.toggle('open')">
                    <span>${esc(cat)} ${selCount ? `<span class="badge accent" style="margin-left:6px;">${selCount}</span>` : ''}</span>
                    <span class="arrow">▶</span>
                </div>
                <div class="picker-cat-body">
                    ${exs.map(e => `
                        <div class="picker-ex ${pickerSelection.has(e.name) ? 'selected' : ''}" onclick="togglePick(this, '${e.name.replace(/'/g, "\\'")}')">
                            <span class="pick-box">✓</span>
                            <span>${e.icon}</span>
                            <span>${esc(e.name)}</span>
                            <span style="margin-left:auto; font-size:11px; color:var(--faint);">${e.location === 'Maison' ? '🏠' : ''}</span>
                        </div>`).join('')}
                </div>
            </div>`;
        }).join('')}
        <button class="btn" style="margin-top:14px;" onclick="confirmPick()">Valider la sélection (${pickerSelection.size})</button>`;
}

function togglePick(el, name) {
    if (pickerSelection.has(name)) { pickerSelection.delete(name); el.classList.remove('selected'); }
    else { pickerSelection.add(name); el.classList.add('selected'); vibrate(8); }
    const btn = $('pickerSheetBody').querySelector('.btn');
    btn.textContent = `Valider la sélection (${pickerSelection.size})`;
}

function confirmPick() {
    const st = editorState;
    st.exercises = st.exercises.filter(e => pickerSelection.has(e.name));
    const existing = new Set(st.exercises.map(e => e.name));
    for (const name of pickerSelection) {
        if (!existing.has(name)) {
            st.exercises.push({
                name,
                sets: 3,
                repsMin: db.settings.defaultRepsMin,
                repsMax: db.settings.defaultRepsMax,
                weight: 0,
                increment: db.settings.defaultIncrement,
                rest: db.settings.defaultRest,
                mode: 'reps'
            });
        }
    }
    closeSheets();
    renderEditor();
    openSheet('editorSheet');
}

/* ============ Séance en cours ============ */
let activeWorkout = null;

function startWorkout(sessionId) {
    if (activeWorkout && activeWorkout.sessionId !== sessionId) {
        if (!confirm('Une séance est déjà en cours. L’abandonner et en démarrer une nouvelle ?')) return;
    }
    const s = db.sessions.find(x => x.id === sessionId);
    if (!s) return;
    const last = lastWorkoutForSession(sessionId);
    activeWorkout = {
        sessionId: s.id,
        sessionName: s.name,
        startedAt: Date.now(),
        exercises: s.exercises.map(cfg => {
            const presc = getNextPrescription(s.id, cfg);
            const lastEx = last ? last.exercises.find(e => e.name === cfg.name) : null;
            const prevPresc = lastEx ? reconcilePrescription(lastEx.prescription, cfg) : null;
            return {
                cfg: JSON.parse(JSON.stringify(cfg)),
                prescription: presc,
                prevSets: lastEx ? lastEx.sets : null,
                prevPresc,
                sets: presc.reps.map(r => ({ targetReps: r, reps: r, weight: presc.weight, done: false }))
            };
        })
    };
    navigateTo('workout');
    vibrate([10, 30, 10]);
}

function renderWorkout() {
    const c = $('workoutContent');
    if (!activeWorkout) {
        c.innerHTML = `<div class="empty"><span class="empty-icon">😴</span><div class="empty-title">Aucune séance en cours</div><p>Démarre une séance depuis l'accueil ou tes séances.</p><button class="btn" style="margin-top:16px;" onclick="navigateTo('sessions')">Mes séances</button></div>`;
        return;
    }
    const w = activeWorkout;
    const totalSets = w.exercises.reduce((n, e) => n + e.sets.length, 0);
    const doneSets = w.exercises.reduce((n, e) => n + e.sets.filter(s => s.done).length, 0);
    const pct = totalSets ? Math.round(doneSets / totalSets * 100) : 0;

    c.innerHTML = `
        <div class="workout-top">
            <div>
                <div class="workout-title">${esc(w.sessionName)}</div>
                <div style="font-size:12.5px;color:var(--muted);">Démarrée à ${new Date(w.startedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            <button class="icon-btn" onclick="abandonWorkout()" title="Abandonner">✕</button>
        </div>
        <div class="workout-progress-wrap">
            <div class="workout-progress-bar"><div class="workout-progress-fill" style="width:${pct}%"></div></div>
            <div class="workout-progress-label"><span>${doneSets}/${totalSets} séries</span><span>${pct}%</span></div>
        </div>
        ${w.exercises.map((ex, ei) => renderWorkoutExercise(ex, ei)).join('')}
        <button class="btn" style="margin-top:8px;" onclick="finishWorkout()" ${doneSets === 0 ? 'disabled' : ''}>🏁 Terminer la séance</button>`;
}

function renderWorkoutExercise(ex, ei) {
    const cfg = ex.cfg;
    const dbEx = exByName(cfg.name);
    // Badge de progression vs dernière séance
    let progBadge = '';
    if (ex.prevPresc) {
        if (ex.prescription.weight > ex.prevPresc.weight) progBadge = `<span class="badge up pulse">▲ +${fmtKg(ex.prescription.weight - ex.prevPresc.weight)} kg</span>`;
        else {
            const diff = ex.prescription.reps.reduce((a, b) => a + b, 0) - ex.prevPresc.reps.reduce((a, b) => a + b, 0);
            if (diff > 0) progBadge = `<span class="badge up pulse">▲ +${diff} rep${diff > 1 ? 's' : ''}</span>`;
            else if (diff === 0 && ex.prevSets) progBadge = `<span class="badge neutral">objectif identique</span>`;
        }
    } else if (!ex.prevSets) {
        progBadge = `<span class="badge info">première fois</span>`;
    }

    const rows = ex.sets.map((set, si) => {
        const isUp = ex.prevPresc && set.targetReps > (ex.prevPresc.reps[si] ?? set.targetReps);
        const prev = ex.prevSets && ex.prevSets[si];
        return `
        <div class="set-row ${set.done ? 'done' : ''}" id="setrow-${ei}-${si}">
            <div class="set-num">${si + 1}</div>
            <div>
                <input type="number" inputmode="decimal" class="set-input" value="${set.weight}" step="0.25" min="0"
                       onchange="updSet(${ei},${si},'weight',this.value)">
                <div class="set-target">kg</div>
            </div>
            <div>
                <input type="number" inputmode="numeric" class="set-input" value="${set.reps}" min="0"
                       onchange="updSet(${ei},${si},'reps',this.value)">
                <div class="set-target ${isUp ? 'target-up' : ''}">objectif ${set.targetReps}${isUp ? ' ▲' : ''}</div>
            </div>
            <div class="set-prev">${prev ? `${prev.reps}×${fmtKg(prev.weight)}` : '—'}<div style="font-size:9.5px;letter-spacing:1px;text-transform:uppercase;">préc.</div></div>
            <button class="set-check ${set.done ? 'checked' : ''}" onclick="toggleSet(${ei},${si})">✓</button>
        </div>`;
    }).join('');

    return `
    <div class="card exercise-block">
        <div class="exercise-head">
            <div class="exercise-title">
                <div class="exercise-icon" ${dbEx && dbEx.video && db.settings.showVideos ? `onclick="openVideo('${dbEx.video}','${cfg.name.replace(/'/g, "\\'")}')" style="cursor:pointer;"` : ''}>${exIcon(cfg.name)}</div>
                <div style="min-width:0;">
                    <div class="exercise-name">${esc(cfg.name)}</div>
                    <div class="exercise-sub">${MODES[cfg.mode].short} · ${cfg.mode === 'weight' ? cfg.repsMin + ' reps fixes' : cfg.repsMin + '→' + cfg.repsMax + ' reps'} · repos ${cfg.rest}s</div>
                </div>
            </div>
            ${progBadge}
        </div>
        <div class="set-table">
            <div class="set-cols"><span>#</span><span>Poids</span><span>Reps</span><span style="text-align:center;">Préc.</span><span></span></div>
            ${rows}
        </div>
    </div>`;
}

function updSet(ei, si, field, value) {
    const set = activeWorkout.exercises[ei].sets[si];
    const num = parseFloat(value);
    if (!isNaN(num)) set[field] = num;
}

function toggleSet(ei, si) {
    const ex = activeWorkout.exercises[ei];
    const set = ex.sets[si];
    set.done = !set.done;
    const row = $(`setrow-${ei}-${si}`);
    row.classList.toggle('done', set.done);
    row.querySelector('.set-check').classList.toggle('checked', set.done);
    if (set.done) {
        vibrate(15);
        startRest(ex.cfg.rest);
    }
    // Mise à jour de la barre de progression et du bouton terminer sans re-render complet
    const totalSets = activeWorkout.exercises.reduce((n, e) => n + e.sets.length, 0);
    const doneSets = activeWorkout.exercises.reduce((n, e) => n + e.sets.filter(s => s.done).length, 0);
    const pct = totalSets ? Math.round(doneSets / totalSets * 100) : 0;
    const fill = document.querySelector('#view-workout .workout-progress-fill');
    const label = document.querySelector('#view-workout .workout-progress-label');
    if (fill) fill.style.width = pct + '%';
    if (label) label.innerHTML = `<span>${doneSets}/${totalSets} séries</span><span>${pct}%</span>`;
    const finishBtn = document.querySelector('#view-workout > .btn, #workoutContent > .btn');
    if (finishBtn) finishBtn.disabled = doneSets === 0;
}

function abandonWorkout() {
    if (!confirm('Abandonner la séance en cours ? Rien ne sera enregistré.')) return;
    activeWorkout = null;
    stopRest();
    navigateTo('home');
}

function finishWorkout() {
    const w = activeWorkout;
    if (!w) return;
    const duration = Math.round((Date.now() - w.startedAt) / 1000);
    let tonnage = 0;
    const exercises = w.exercises.map(ex => {
        const doneSets = ex.sets.filter(s => s.done);
        doneSets.forEach(s => { tonnage += s.reps * s.weight; });
        const achieved = ex.sets.length > 0 && ex.sets.every(s => s.done && s.reps >= s.targetReps);
        // Si le poids réellement utilisé diffère de la prescription (1re séance d'un
        // programme, ajustement manuel…), c'est lui qui sert de base à la progression.
        let workingWeight = ex.prescription.weight;
        if (doneSets.length) {
            const counts = new Map();
            doneSets.forEach(s => counts.set(s.weight, (counts.get(s.weight) || 0) + 1));
            workingWeight = [...counts.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0])[0][0];
        }
        return {
            name: ex.cfg.name,
            mode: ex.cfg.mode,
            prescription: { weight: workingWeight, reps: ex.prescription.reps },
            achieved,
            sets: ex.sets.map(s => ({ targetReps: s.targetReps, reps: s.reps, weight: s.weight, done: s.done }))
        };
    });
    tonnage = Math.round(tonnage);
    const entry = {
        id: uid(),
        sessionId: w.sessionId,
        sessionName: w.sessionName,
        date: new Date().toISOString(),
        duration,
        tonnage,
        exercises
    };
    db.history.unshift(entry);
    save();
    stopRest();
    showSummary(entry);
    activeWorkout = null;
}

/* ============ Résumé de fin de séance ============ */
function showSummary(entry) {
    const session = db.sessions.find(s => s.id === entry.sessionId);
    const doneSets = entry.exercises.reduce((n, e) => n + e.sets.filter(s => s.done).length, 0);
    const totalSets = entry.exercises.reduce((n, e) => n + e.sets.length, 0);
    const pct = totalSets ? doneSets / totalSets : 0;
    const achievedCount = entry.exercises.filter(e => e.achieved).length;

    // Aperçu de la prochaine prescription (la surcharge déjà appliquée pour la prochaine fois)
    const nextRows = session ? session.exercises.map(cfg => {
        const exEntry = entry.exercises.find(e => e.name === cfg.name);
        if (!exEntry) return '';
        const next = getNextPrescription(entry.sessionId, cfg);
        const cur = reconcilePrescription(exEntry.prescription, cfg);
        let delta = '';
        if (next.weight > cur.weight) delta = `<span class="badge up">▲ +${fmtKg(next.weight - cur.weight)} kg</span>`;
        else {
            const d = next.reps.reduce((a, b) => a + b, 0) - cur.reps.reduce((a, b) => a + b, 0);
            if (d > 0) delta = `<span class="badge up">▲ +${d} rep${d > 1 ? 's' : ''}</span>`;
            else delta = `<span class="badge neutral">à retenter</span>`;
        }
        return `<div class="prog-row"><span class="name">${exIcon(cfg.name)} ${esc(cfg.name)}</span><span style="display:flex;align-items:center;gap:8px;white-space:nowrap;"><b style="font-variant-numeric:tabular-nums;font-weight:600;">${formatPresc(next)}</b>${delta}</span></div>`;
    }).join('') : '';

    const r = 56, circ = 2 * Math.PI * r;
    $('summarySheetBody').innerHTML = `
        <div class="summary-hero">
            <div class="summary-ring pr-flash">
                <svg width="130" height="130" viewBox="0 0 130 130">
                    <circle cx="65" cy="65" r="${r}" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="9"/>
                    <circle class="ring-fg" cx="65" cy="65" r="${r}" fill="none" stroke="url(#summaryGrad)" stroke-width="9" stroke-linecap="round"
                            stroke-dasharray="${circ}" stroke-dashoffset="${circ}"/>
                    <defs><linearGradient id="summaryGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#ff5c1f"/><stop offset="100%" stop-color="#ffb340"/>
                    </linearGradient></defs>
                </svg>
                <div class="ring-center"><span class="big">${Math.round(pct * 100)}%</span><span class="sub">complété</span></div>
            </div>
            <div class="hero-title" style="font-size:22px;">Séance terminée 💪</div>
            <div class="hero-sub">${esc(entry.sessionName)} · ${fmtDate(entry.date, { day: 'numeric', month: 'long' })}</div>
        </div>
        <div class="summary-stats">
            <div class="stat-tile"><div class="stat-value">${fmtDuration(entry.duration)}</div><div class="stat-label">Durée</div></div>
            <div class="stat-tile"><div class="stat-value">${fmtKg(entry.tonnage)}<span class="unit">kg</span></div><div class="stat-label">Tonnage</div></div>
            <div class="stat-tile"><div class="stat-value">${achievedCount}/${entry.exercises.length}</div><div class="stat-label">Objectifs validés</div></div>
        </div>
        ${nextRows ? `<div class="section-title" style="margin-top:10px;">Prochaine séance — surcharge appliquée</div><div class="card summary-progressions">${nextRows}</div>` : ''}
        <button class="btn" style="margin-top:18px;" onclick="closeSheets(); navigateTo('home')">Retour à l'accueil</button>`;
    openSheet('summarySheet');
    requestAnimationFrame(() => {
        const ring = $('summarySheetBody').querySelector('.ring-fg');
        if (ring) ring.style.strokeDashoffset = String(circ * (1 - pct));
    });
    launchConfetti();
    vibrate([15, 60, 15, 60, 30]);
}

/* ============ Confettis ============ */
function launchConfetti() {
    const canvas = $('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = innerWidth; canvas.height = innerHeight;
    canvas.style.display = 'block';
    const colors = ['#ff5c1f', '#ffb340', '#3ddc97', '#5ea8ff', '#f5f5f7'];
    const parts = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.4,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        vy: 2.2 + Math.random() * 3.2,
        vx: -1.4 + Math.random() * 2.8,
        rot: Math.random() * Math.PI,
        vr: -0.12 + Math.random() * 0.24,
        color: colors[Math.floor(Math.random() * colors.length)]
    }));
    const t0 = performance.now();
    (function frame(now) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of parts) {
            p.y += p.vy; p.x += p.vx; p.rot += p.vr;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }
        if (now - t0 < 3200) requestAnimationFrame(frame);
        else { canvas.style.display = 'none'; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    })(t0);
}

/* ============ Minuteur de repos ============ */
let restState = null;

function startRest(seconds) {
    if (!seconds || seconds <= 0) return;
    stopRest();
    restState = { total: seconds, left: seconds };
    $('restTimer').classList.add('show');
    updateRestUI();
    restState.interval = setInterval(() => {
        restState.left--;
        updateRestUI();
        if (restState.left <= 0) {
            vibrate([80, 80, 80, 80, 200]);
            beep();
            stopRest();
        }
    }, 1000);
}

function updateRestUI() {
    if (!restState) return;
    const m = Math.floor(restState.left / 60), s = restState.left % 60;
    $('restVal').textContent = `${m}:${String(s).padStart(2, '0')}`;
    const circ = 2 * Math.PI * 22;
    $('restRing').style.strokeDasharray = circ;
    $('restRing').style.strokeDashoffset = String(circ * (1 - restState.left / restState.total));
}

function addRest(sec) {
    if (!restState) return;
    restState.left += sec;
    restState.total = Math.max(restState.total, restState.left);
    updateRestUI();
}

function stopRest() {
    if (restState && restState.interval) clearInterval(restState.interval);
    restState = null;
    $('restTimer').classList.remove('show');
}

function beep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const now = ctx.currentTime;
        [0, 0.18, 0.36].forEach((t, i) => {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.frequency.value = i === 2 ? 1320 : 880;
            g.gain.setValueAtTime(0.0001, now + t);
            g.gain.exponentialRampToValueAtTime(0.22, now + t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, now + t + 0.15);
            o.start(now + t); o.stop(now + t + 0.16);
        });
    } catch { /* audio indisponible */ }
}

/* ============ Historique ============ */
function renderHistory() {
    const c = $('historyContent');
    if (!db.history.length) {
        c.innerHTML = `<div class="empty"><span class="empty-icon">📜</span><div class="empty-title">Aucun entraînement</div><p>Termine ta première séance et retrouve ici tout ton historique, séance par séance.</p></div>`;
        return;
    }
    // Groupement par mois
    const groups = new Map();
    for (const h of db.history) {
        const d = new Date(h.date);
        const key = d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(h);
    }
    c.innerHTML = `<div class="stagger">` + [...groups.entries()].map(([label, items]) => `
        <div class="history-day-label">${esc(label)}</div>
        ${items.map(h => renderHistoryCard(h)).join('')}
    `).join('') + `</div>`;
}

function renderHistoryCard(h) {
    const doneSets = h.exercises.reduce((n, e) => n + e.sets.filter(s => s.done).length, 0);
    const detail = h.exercises.map(ex => {
        const sets = ex.sets.map(s =>
            `<span class="hist-set ${s.done ? '' : 'missed'}"><b>${s.reps}</b>×${fmtKg(s.weight)}kg</span>`
        ).join('');
        return `<div class="hist-ex">
            <div class="hist-ex-name">${exIcon(ex.name)} ${esc(ex.name)} ${ex.achieved ? '<span class="badge up">✓ objectif validé</span>' : ''}</div>
            <div class="hist-sets">${sets}</div>
        </div>`;
    }).join('');
    return `
    <div class="card history-card" id="hist-${h.id}">
        <div class="history-head" onclick="toggleHistoryCard('${h.id}')">
            <div class="history-info">
                <div class="history-name">${esc(h.sessionName)}</div>
                <div class="history-meta">
                    <span>${fmtDate(h.date, { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                    <span>⏱ ${fmtDuration(h.duration || 0)}</span>
                    <span>🏋️ ${fmtKg(h.tonnage || 0)} kg</span>
                    <span>${doneSets} séries</span>
                </div>
            </div>
            <span class="expand-arrow">▾</span>
        </div>
        <div class="history-detail">
            ${detail}
            <button class="btn ghost small" style="margin-top:8px;" onclick="deleteHistory('${h.id}')">Supprimer cet entraînement</button>
        </div>
    </div>`;
}

function toggleHistoryCard(id) {
    const el = $('hist-' + id);
    if (el) el.classList.toggle('expanded');
}

function deleteHistory(id) {
    if (!confirm('Supprimer cet entraînement de l’historique ? La progression recalculera à partir de la séance précédente.')) return;
    db.history = db.history.filter(h => h.id !== id);
    save();
    renderHistory();
    showToast('Entraînement supprimé', '🗑');
}

/* ============ Statistiques ============ */
let charts = {};
let statsExercise = null;

function destroyCharts() {
    Object.values(charts).forEach(ch => ch && ch.destroy());
    charts = {};
}

function chartDefaults() {
    if (typeof Chart === 'undefined') return false;
    Chart.defaults.color = 'rgba(245,245,247,.55)';
    Chart.defaults.borderColor = 'rgba(255,255,255,.07)';
    Chart.defaults.font.family = 'Outfit, sans-serif';
    return true;
}

function renderStats() {
    const c = $('statsContent');
    const exNames = [...new Set(db.history.flatMap(h => h.exercises.map(e => e.name)))];
    if (!statsExercise || !exNames.includes(statsExercise)) statsExercise = exNames[0] || null;

    c.innerHTML = `
        <div class="stagger">
            <div class="card chart-card">
                <div class="chart-title">📈 Progression par exercice</div>
                ${exNames.length ? `
                    <select class="field-input" style="margin-bottom:14px;" onchange="statsExercise=this.value; renderStats()">
                        ${exNames.map(n => `<option ${n === statsExercise ? 'selected' : ''}>${esc(n)}</option>`).join('')}
                    </select>
                    <div class="chart-wrap"><canvas id="chartExercise"></canvas></div>`
                : '<div class="empty" style="padding:20px;"><p>Fais des séances pour voir ta progression exercice par exercice.</p></div>'}
            </div>
            <div class="card chart-card">
                <div class="chart-title">🏋️ Tonnage hebdomadaire</div>
                <div class="chart-wrap"><canvas id="chartTonnage"></canvas></div>
            </div>
            <div class="card chart-card">
                <div class="chart-title">⚖️ Poids corporel</div>
                ${db.measurements.some(m => m.weight) ? '<div class="chart-wrap"><canvas id="chartWeight"></canvas></div>' : '<div class="empty" style="padding:20px;"><p>Ajoute des mesures depuis le profil pour suivre ton poids.</p></div>'}
            </div>
            <div class="card chart-card">
                <div class="chart-title">📏 Mensurations</div>
                ${db.measurements.some(m => m.mensurations && Object.values(m.mensurations).some(v => v)) ? '<div class="chart-wrap"><canvas id="chartMeasure"></canvas></div>' : '<div class="empty" style="padding:20px;"><p>Renseigne tes mensurations dans le profil.</p></div>'}
            </div>
        </div>`;

    destroyCharts();
    if (!chartDefaults()) return;

    // --- Progression exercice : poids du meilleur set + reps totales
    if (statsExercise) {
        const points = db.history
            .filter(h => h.exercises.some(e => e.name === statsExercise))
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(h => {
                const ex = h.exercises.find(e => e.name === statsExercise);
                const done = ex.sets.filter(s => s.done);
                return {
                    label: new Date(h.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
                    weight: done.length ? Math.max(...done.map(s => s.weight)) : null,
                    reps: done.reduce((n, s) => n + s.reps, 0)
                };
            });
        const el = $('chartExercise');
        if (el && points.length) {
            charts.ex = new Chart(el, {
                type: 'line',
                data: {
                    labels: points.map(p => p.label),
                    datasets: [
                        { label: 'Poids max (kg)', data: points.map(p => p.weight), borderColor: '#ff5c1f', backgroundColor: 'rgba(255,92,31,.12)', fill: true, tension: 0.35, yAxisID: 'y', pointRadius: 4, pointBackgroundColor: '#ffb340' },
                        { label: 'Reps totales', data: points.map(p => p.reps), borderColor: '#5ea8ff', borderDash: [5, 4], tension: 0.35, yAxisID: 'y1', pointRadius: 3 }
                    ]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    scales: { y: { position: 'left' }, y1: { position: 'right', grid: { drawOnChartArea: false } } },
                    animation: { duration: 900, easing: 'easeOutQuart' }
                }
            });
        }
    }

    // --- Tonnage hebdo (8 dernières semaines)
    const weeks = [];
    for (let i = 7; i >= 0; i--) {
        const start = startOfWeek(); start.setDate(start.getDate() - i * 7);
        const end = new Date(start); end.setDate(end.getDate() + 7);
        const tonnage = db.history.filter(h => { const d = new Date(h.date); return d >= start && d < end; })
            .reduce((s, h) => s + (h.tonnage || 0), 0);
        weeks.push({ label: start.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }), tonnage });
    }
    const elT = $('chartTonnage');
    if (elT) {
        charts.tonnage = new Chart(elT, {
            type: 'bar',
            data: {
                labels: weeks.map(w => w.label),
                datasets: [{ label: 'Tonnage (kg)', data: weeks.map(w => w.tonnage), backgroundColor: 'rgba(255,92,31,.65)', borderRadius: 8, hoverBackgroundColor: '#ffb340' }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, animation: { duration: 900, easing: 'easeOutQuart' } }
        });
    }

    // --- Poids corporel
    const sorted = [...db.measurements].sort((a, b) => new Date(a.date) - new Date(b.date));
    const weightPts = sorted.filter(m => m.weight);
    const elW = $('chartWeight');
    if (elW && weightPts.length) {
        charts.weight = new Chart(elW, {
            type: 'line',
            data: {
                labels: weightPts.map(m => new Date(m.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })),
                datasets: [{ label: 'Poids (kg)', data: weightPts.map(m => m.weight), borderColor: '#3ddc97', backgroundColor: 'rgba(61,220,151,.1)', fill: true, tension: 0.35, pointRadius: 4 }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, animation: { duration: 900 } }
        });
    }

    // --- Mensurations
    const MKEYS = { shoulders: 'Épaules', chest: 'Poitrine', waist: 'Taille', arms: 'Bras', forearms: 'Avant-bras', glutes: 'Fessiers', thighs: 'Cuisses', calves: 'Mollets' };
    const MCOLORS = ['#ff5c1f', '#ffb340', '#3ddc97', '#5ea8ff', '#c792ea', '#ff4d5e', '#7ce0ff', '#ffd166'];
    const withM = sorted.filter(m => m.mensurations);
    const elM = $('chartMeasure');
    if (elM && withM.length) {
        const datasets = Object.entries(MKEYS).map(([key, label], i) => {
            const data = withM.map(m => m.mensurations[key] ?? null);
            if (!data.some(v => v != null)) return null;
            return { label, data, borderColor: MCOLORS[i], tension: 0.35, spanGaps: true, pointRadius: 3 };
        }).filter(Boolean);
        charts.measure = new Chart(elM, {
            type: 'line',
            data: { labels: withM.map(m => new Date(m.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })), datasets },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { boxWidth: 12, font: { size: 10 } } } }, animation: { duration: 900 } }
        });
    }
}

/* ============ Profil & réglages ============ */
function renderProfile() {
    const c = $('profileContent');
    const s = db.settings;
    const lastM = [...db.measurements].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    c.innerHTML = `
        <div class="stagger">
            <div class="card profile-section">
                <div class="chart-title">📏 Mesures corporelles</div>
                <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:12px;">
                    <div>
                        <div class="stat-value">${lastM && lastM.weight ? fmtKg(lastM.weight) + '<span class="unit">kg</span>' : '—'}</div>
                        <div class="stat-label">${lastM ? 'Dernière mesure ' + relativeDate(lastM.date).toLowerCase() : 'Aucune mesure'}</div>
                    </div>
                    <button class="btn small" onclick="openMeasureSheet()">+ Mesure</button>
                </div>
                ${db.measurements.length ? `<button class="link" onclick="showMeasureHistory()">Voir l'historique des mesures (${db.measurements.length}) →</button>` : ''}
                <div id="measureHistory"></div>
            </div>

            <div class="card profile-section">
                <div class="chart-title">⚙️ Surcharge progressive — valeurs par défaut</div>
                <div style="font-size:12px;color:var(--faint);margin-bottom:12px;">Appliquées aux nouveaux exercices. Chaque exercice reste réglable individuellement dans l'éditeur de séance.</div>
                <div class="field-row-3">
                    <div class="field"><label class="field-label">Reps min</label><input type="number" class="field-input" value="${s.defaultRepsMin}" min="1" onchange="updSetting('defaultRepsMin', parseInt(this.value)||8)"></div>
                    <div class="field"><label class="field-label">Reps max</label><input type="number" class="field-input" value="${s.defaultRepsMax}" min="1" onchange="updSetting('defaultRepsMax', parseInt(this.value)||12)"></div>
                    <div class="field"><label class="field-label">Incrément kg</label><input type="number" class="field-input" value="${s.defaultIncrement}" step="0.25" min="0" onchange="updSetting('defaultIncrement', parseFloat(this.value)||2.5)"></div>
                </div>
                <div class="field"><label class="field-label">Repos par défaut (s)</label><input type="number" class="field-input" value="${s.defaultRest}" step="15" min="0" onchange="updSetting('defaultRest', parseInt(this.value)||90)"></div>
            </div>

            <div class="card profile-section">
                <div class="chart-title">🔧 Préférences</div>
                <div class="toggle-row">
                    <div><div class="t-label">Vibrations</div><div class="t-sub">Retour haptique sur les actions</div></div>
                    <div class="switch ${s.vibration ? 'on' : ''}" onclick="toggleSetting('vibration', this)"></div>
                </div>
                <div class="toggle-row">
                    <div><div class="t-label">Vidéos d'exercices</div><div class="t-sub">Touche l'icône d'un exercice pendant la séance</div></div>
                    <div class="switch ${s.showVideos ? 'on' : ''}" onclick="toggleSetting('showVideos', this)"></div>
                </div>
            </div>

            <div class="card profile-section">
                <div class="chart-title">💾 Données</div>
                <div style="display:flex; gap:10px; margin-top:4px;">
                    <button class="btn secondary small" style="flex:1;" onclick="exportData()">⬇️ Exporter</button>
                    <button class="btn secondary small" style="flex:1;" onclick="$('importFile').click()">⬆️ Importer</button>
                </div>
                <input type="file" id="importFile" accept=".json" style="display:none;" onchange="importData(this)">
                <button class="btn danger" style="margin-top:12px;" onclick="resetAll()">Tout réinitialiser</button>
            </div>
        </div>`;
}

function updSetting(key, value) {
    db.settings[key] = value;
    save();
    showToast('Réglage enregistré');
}

function toggleSetting(key, el) {
    db.settings[key] = !db.settings[key];
    el.classList.toggle('on', db.settings[key]);
    save();
    vibrate(10);
}

function showMeasureHistory() {
    const el = $('measureHistory');
    const items = [...db.measurements].sort((a, b) => new Date(b.date) - new Date(a.date));
    el.innerHTML = items.map(m => `
        <div class="toggle-row">
            <div>
                <div class="t-label">${fmtDate(m.date, { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                <div class="t-sub">${[m.weight ? m.weight + ' kg' : null, m.bodyFat ? m.bodyFat + ' % MG' : null].filter(Boolean).join(' · ') || 'Mensurations'}</div>
            </div>
            <button class="icon-btn" style="color:var(--danger);" onclick="deleteMeasure('${m.id}')">✕</button>
        </div>`).join('');
}

function deleteMeasure(id) {
    db.measurements = db.measurements.filter(m => String(m.id) !== String(id));
    save();
    renderProfile();
    showToast('Mesure supprimée', '🗑');
}

const MEASURE_FIELDS = [
    ['shoulders', 'Épaules'], ['chest', 'Poitrine'], ['waist', 'Taille'], ['arms', 'Bras'],
    ['forearms', 'Avant-bras'], ['glutes', 'Fessiers'], ['thighs', 'Cuisses'], ['calves', 'Mollets']
];

function openMeasureSheet() {
    $('measureSheetBody').innerHTML = `
        <div class="field"><label class="field-label">Date</label><input type="date" class="field-input" id="mDate" value="${new Date().toISOString().slice(0, 10)}"></div>
        <div class="measure-grid">
            <div class="field"><label class="field-label">Poids (kg)</label><input type="number" step="0.1" class="field-input" id="mWeight" placeholder="75,5"></div>
            <div class="field"><label class="field-label">% masse grasse</label><input type="number" step="0.1" class="field-input" id="mBodyFat" placeholder="15"></div>
        </div>
        <div class="field-label" style="margin:8px 0 10px;">Mensurations (cm)</div>
        <div class="measure-grid">
            ${MEASURE_FIELDS.map(([k, label]) => `<div class="field"><label class="field-label">${label}</label><input type="number" step="0.1" class="field-input" id="m_${k}"></div>`).join('')}
        </div>
        <button class="btn" onclick="saveMeasure()">Enregistrer la mesure</button>`;
    openSheet('measureSheet');
}

function saveMeasure() {
    const num = (id) => { const v = parseFloat($(id).value); return isNaN(v) ? null : v; };
    const mensurations = {};
    MEASURE_FIELDS.forEach(([k]) => { mensurations[k] = num('m_' + k); });
    db.measurements.push({
        id: uid(),
        date: $('mDate').value || new Date().toISOString().slice(0, 10),
        weight: num('mWeight'),
        bodyFat: num('mBodyFat'),
        mensurations
    });
    save();
    closeSheets();
    renderProfile();
    showToast('Mesure enregistrée', '📏');
}

/* ============ Export / import / reset ============ */
function exportData() {
    const blob = new Blob([JSON.stringify({
        exportedAt: new Date().toISOString(),
        schemaVersion: SCHEMA_VERSION,
        sessions: db.sessions, history: db.history, measurements: db.measurements, settings: db.settings
    }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `irontrack-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Sauvegarde exportée', '⬇️');
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!Array.isArray(data.sessions) && !Array.isArray(data.history)) throw new Error('format');
            if (!confirm('Remplacer toutes les données actuelles par cette sauvegarde ?')) return;
            db.sessions = (data.sessions || []).map(s => ({ ...s, exercises: (s.exercises || []).map(migrateExercise) }));
            db.history = (data.history || []).map(migrateHistoryEntry).sort((a, b) => new Date(b.date) - new Date(a.date));
            db.measurements = data.measurements || [];
            db.settings = Object.assign({}, DEFAULT_SETTINGS, data.settings || {});
            save();
            navigateTo('home');
            showToast('Sauvegarde importée', '✅');
        } catch {
            showToast('Fichier invalide', '⚠️');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

function resetAll() {
    if (!confirm('Tout supprimer ? Séances, historique, mesures et réglages seront définitivement effacés.')) return;
    if (!confirm('Vraiment sûr ? Cette action est irréversible.')) return;
    ['irontrack_sessions', 'irontrack_history', 'irontrack_measurements', 'irontrack_settings'].forEach(k => localStorage.removeItem(k));
    db.sessions = []; db.history = []; db.measurements = []; db.settings = { ...DEFAULT_SETTINGS };
    activeWorkout = null;
    save();
    navigateTo('home');
    showToast('Données réinitialisées', '🧹');
}

/* ============ Vidéos ============ */
function openVideo(url, name) {
    $('videoSheetTitle').textContent = name;
    let videoId = '';
    if (url.includes('youtube.com/watch')) videoId = (url.split('v=')[1] || '').split('&')[0];
    else if (url.includes('youtube.com/shorts')) videoId = (url.split('/shorts/')[1] || '').split('?')[0];
    else if (url.includes('youtu.be')) videoId = (url.split('youtu.be/')[1] || '').split('?')[0];
    $('videoSheetBody').innerHTML = videoId
        ? `<iframe width="100%" height="320" style="border:none;border-radius:14px;" src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        : '<div class="empty"><p>Vidéo non disponible</p></div>';
    openSheet('videoSheet');
}

/* ============ Initialisation ============ */
function init() {
    loadDB();
    navigateTo('home');
    $('sheetBackdrop').addEventListener('click', () => {
        closeSheets();
        $('videoSheetBody').innerHTML = '';
    });
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
    }
}

document.addEventListener('DOMContentLoaded', init);
