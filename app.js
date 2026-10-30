'use strict';
const themes = {
  'biolume': {name:'Biolume',category:'Living Night',copy:'A small forest of light. Glowing mushrooms and a little otherworldly quiet.',palette:'Turquoise & violet',accent:'#7cddd5',secondary:'#b399ed',rgb:'124,221,213',alt:'Glowing turquoise and violet mushrooms in the Biolume theme'},
  'machine-cathedral': {name:'Machine Cathedral 03:17',category:'Machine Cathedral',copy:'Cobalt glass. Antique gold. A rose window for the very late hours.',palette:'Cobalt & antique gold',accent:'#94bfff',secondary:'#b6a06c',rgb:'148,191,255',alt:'A luminous cobalt rose window with antique gold tracery'},
  'deep-sea': {name:'Deep Sea',category:'Living Night',copy:'An underwater world, held in blue. A little distance from the noise of the day.',palette:'Ocean blue & turquoise',accent:'#71cddc',secondary:'#4872c4',rgb:'113,205,220',alt:'A luminous blue underwater coral landscape in the Deep Sea theme'},
  'moonlight': {name:'Moonlight',category:'Quiet Worlds',copy:'A pale glow in the dark. Simple, spacious, and quietly luminous.',palette:'Moon-white & lavender',accent:'#d5d2ec',secondary:'#b6a4e8',rgb:'213,210,236',alt:'The dimensional Moonlight artwork from the Sleep Keeper theme collection'},
  'ember': {name:'Ember',category:'Core Collection',copy:'The last warmth of a long day. Amber light resting in dark volcanic stone.',palette:'Ember coral & old gold',accent:'#e4a07f',secondary:'#b9a16c',rgb:'228,160,127',alt:'Dark volcanic stones glowing with amber embers'},
  'deep-night': {name:'Deep Night',category:'Core Collection',copy:'An obsidian silhouette. The faintest violet edge. Room to be still.',palette:'Soft violet & charcoal',accent:'#ba9adc',secondary:'#828293',rgb:'186,154,220',alt:'A dark obsidian standing stone with a soft violet edge'}
};
const picker = document.querySelector('.theme-picker');
picker.addEventListener('click', event => {
  const button = event.target.closest('button[data-theme]');
  if (!button) return;
  const key = button.dataset.theme;
  const theme = themes[key];
  if (!theme) return;
  picker.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.documentElement.style.setProperty('--theme-accent', theme.accent);
  document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
  document.documentElement.style.setProperty('--theme-rgb', theme.rgb);
  for (const id of ['theme-art','phone-art']) {
    const img = document.getElementById(id);
    img.src = `assets/${key}.webp`; img.alt = theme.alt;
  }
  document.getElementById('theme-category').textContent = theme.category.toUpperCase();
  document.getElementById('theme-name').textContent = theme.name;
  document.getElementById('theme-copy').textContent = theme.copy;
  document.getElementById('theme-palette').textContent = theme.palette;
  document.getElementById('theme-index').textContent = String([...picker.children].indexOf(button) + 1).padStart(2,'0');
  document.querySelector('.swatches').setAttribute('aria-label',theme.palette + ' palette');
  document.getElementById('theme-announcement').textContent = `${theme.name} selected. ${theme.copy}`;
});
document.getElementById('demo-toggle').addEventListener('click', event => {
  const button = event.currentTarget;
  const awake = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed',String(awake));
  button.innerHTML = awake ? 'Back to sleep <span aria-hidden="true">↙</span>' : 'I\'m awake <span aria-hidden="true">↗</span>';
  document.getElementById('preview-state').textContent = awake ? 'AWAKE INTERVAL · EXAMPLE NIGHT' : 'RESTING · EXAMPLE NIGHT';
  document.querySelector('.demo-hint').textContent = awake ? 'Preview paused · no sleep data is saved' : 'Try the awake button';
});
