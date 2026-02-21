/* ══════════════════════════════════════════════════════════
   LUMA — Location Based Discovery App
   app.js — All application logic, validation & interactivity
   ══════════════════════════════════════════════════════════ */

/* ═══════════════════════ COUNTRY DATA ═══════════════════════ */
const COUNTRIES = [
  { flag: '🇮🇳', name: 'India',          code: '+91',  iso: 'IN', len: 10, fmt: 'XXXXX XXXXX' },
  { flag: '🇺🇸', name: 'United States',   code: '+1',   iso: 'US', len: 10, fmt: '(XXX) XXX-XXXX' },
  { flag: '🇬🇧', name: 'United Kingdom',  code: '+44',  iso: 'GB', len: 10, fmt: 'XXXX XXXXXX' },
  { flag: '🇦🇪', name: 'UAE',             code: '+971', iso: 'AE', len: 9,  fmt: 'XX XXX XXXX' },
  { flag: '🇸🇬', name: 'Singapore',       code: '+65',  iso: 'SG', len: 8,  fmt: 'XXXX XXXX' },
  { flag: '🇦🇺', name: 'Australia',       code: '+61',  iso: 'AU', len: 9,  fmt: 'XXX XXX XXX' },
  { flag: '🇨🇦', name: 'Canada',          code: '+1',   iso: 'CA', len: 10, fmt: '(XXX) XXX-XXXX' },
  { flag: '🇩🇪', name: 'Germany',         code: '+49',  iso: 'DE', len: 11, fmt: 'XXXX XXXXXXX' },
  { flag: '🇫🇷', name: 'France',          code: '+33',  iso: 'FR', len: 9,  fmt: 'X XX XX XX XX' },
  { flag: '🇯🇵', name: 'Japan',           code: '+81',  iso: 'JP', len: 10, fmt: 'XX XXXX XXXX' },
  { flag: '🇨🇳', name: 'China',           code: '+86',  iso: 'CN', len: 11, fmt: 'XXX XXXX XXXX' },
  { flag: '🇧🇷', name: 'Brazil',          code: '+55',  iso: 'BR', len: 11, fmt: '(XX) XXXXX-XXXX' },
  { flag: '🇲🇾', name: 'Malaysia',        code: '+60',  iso: 'MY', len: 9,  fmt: 'XX XXX XXXX' },
  { flag: '🇵🇰', name: 'Pakistan',        code: '+92',  iso: 'PK', len: 10, fmt: 'XXX XXX XXXX' },
  { flag: '🇧🇩', name: 'Bangladesh',      code: '+880', iso: 'BD', len: 10, fmt: 'XXXX XXXXXX' },
  { flag: '🇳🇵', name: 'Nepal',           code: '+977', iso: 'NP', len: 10, fmt: 'XXX XXX XXXX' },
  { flag: '🇱🇰', name: 'Sri Lanka',       code: '+94',  iso: 'LK', len: 9,  fmt: 'XX XXX XXXX' },
  { flag: '🇿🇦', name: 'South Africa',    code: '+27',  iso: 'ZA', len: 9,  fmt: 'XX XXX XXXX' },
  { flag: '🇳🇬', name: 'Nigeria',         code: '+234', iso: 'NG', len: 10, fmt: 'XXX XXX XXXX' },
  { flag: '🇰🇪', name: 'Kenya',           code: '+254', iso: 'KE', len: 9,  fmt: 'XXX XXX XXX' },
];

/* ═══════════════════════ VENUE DATA ═══════════════════════ */
const venues = [
  {
    id: 0, name: "Café Aura", emoji: "☕", type: "coffee", budget: "low",
    rating: 4.8, reviews: 284, distance: "0.3 km", price: "₹", bookPrice: "₹350",
    tags: ["Cozy", "Instagrammable", "Desserts"], badge: "Open Now", badgeClass: "",
    desc: "A sun-drenched artisan café tucked in the city's creative quarter. Famous for its single-origin pour-overs, avocado toast, and warm terracotta interiors.",
    photos: ["🌅", "🍞", "☕", "🌿", "📚"],
    reviewList: [
      { name: "Priya S", color: "#c4756a", text: "Absolute gem! The hazelnut latte is life-changing.", date: "2 days ago" },
      { name: "Rohan M", color: "#6b8cc4", text: "Best café ambiance. 10/10.", date: "1 week ago" }
    ]
  },
  {
    id: 1, name: "The Grand Hall", emoji: "🎂", type: "birthday", budget: "high",
    rating: 4.9, reviews: 156, distance: "1.2 km", price: "₹₹₹", bookPrice: "₹8500",
    tags: ["Private", "Catering", "Dance Floor"], badge: "Trending", badgeClass: "trending",
    desc: "Opulent venue with vaulted ceilings, crystal chandeliers and a dedicated event team.",
    photos: ["🎉", "🎂", "💐", "🥂", "✨"],
    reviewList: [{ name: "Ananya K", color: "#8cc47a", text: "Hosted my 30th birthday here. Magical night!", date: "3 days ago" }]
  },
  {
    id: 2, name: "Skyline Rooftop", emoji: "🌹", type: "date", budget: "mid",
    rating: 5.0, reviews: 423, distance: "0.8 km", price: "₹₹", bookPrice: "₹2800",
    tags: ["Romantic", "City Views", "Candlelight"], badge: "Romantic", badgeClass: "romantic", featured: true,
    desc: "Perched 18 floors above the city with artisanal cocktails beneath the stars. Live jazz on weekends.",
    photos: ["🌃", "🥂", "🌹", "🌙", "💫"],
    reviewList: [{ name: "Meera & Dev", color: "#c47ab5", text: "Proposed here last month! Absolutely perfect.", date: "1 day ago" }]
  },
  {
    id: 3, name: "Italiano Casa", emoji: "🍽️", type: "dinner", budget: "mid",
    rating: 4.7, reviews: 612, distance: "1.5 km", price: "₹₹", bookPrice: "₹1800",
    tags: ["Italian", "Family", "Pasta"], badge: "", badgeClass: "",
    desc: "Authentic Neapolitan cuisine in a warmly lit trattoria. Wood-fired pizzas and hand-rolled pastas.",
    photos: ["🍕", "🍝", "🍷", "🫙", "🌿"],
    reviewList: [{ name: "Kavita R", color: "#8cc47a", text: "The truffle pasta is divine. Feels like Rome.", date: "4 days ago" }]
  },
  {
    id: 4, name: "The Bloom Hotel", emoji: "🏨", type: "hotel", budget: "high",
    rating: 4.6, reviews: 891, distance: "2.1 km", price: "₹₹₹", bookPrice: "₹6500",
    tags: ["Spa", "Pool", "Breakfast Incl."], badge: "", badgeClass: "",
    desc: "Boutique luxury hotel with 48 uniquely designed rooms. Infinity pool, rooftop spa and butler service.",
    photos: ["🛏️", "🏊", "🌺", "🍳", "🌅"],
    reviewList: [{ name: "Nisha V", color: "#c4a86a", text: "Room was stunning, breakfast gourmet, staff incredible.", date: "3 days ago" }]
  },
  {
    id: 5, name: "Family Garden", emoji: "👨‍👩‍👧", type: "family", budget: "low",
    rating: 4.5, reviews: 334, distance: "0.6 km", price: "₹", bookPrice: "₹600",
    tags: ["Outdoor", "Kids Menu", "Playground"], badge: "Open Now", badgeClass: "",
    desc: "Sprawling garden restaurant with dedicated play area, pet-friendly zones, and weekend brunches.",
    photos: ["🌳", "🧸", "🍔", "🥗", "🌈"],
    reviewList: [{ name: "Rahul F", color: "#8cc47a", text: "Perfect for weekends with kids. Fresh food, affordable.", date: "1 week ago" }]
  }
];

/* ═══════════════════════ APP STATE ═══════════════════════ */
let currentVenue   = null;
let selectedDate   = null;
let selectedTime   = null;
let guestCount     = 2;
let bookings       = [];
let wishlist       = new Set();
let currentUser    = null;
let activeOcc      = 'all';
let activeBudget   = 'all';
let generatedOTP   = '';
let otpTimerInterval = null;
let pendingUser    = null;

// Selected country for both login (lg) and signup (su) forms
const selectedCountry = { lg: COUNTRIES[0], su: COUNTRIES[0] };

/* ═══════════════════════ INITIALISATION ═══════════════════════ */
window.onload = () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      showScreen('auth-screen');
      detectLocation();
      populateCountryList('lg-cd-list', 'lg');
      populateCountryList('su-cd-list', 'su');
    }, 600);
  }, 2200);
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ═══════════════════════ COUNTRY PICKER ═══════════════════════ */

function populateCountryList(listId, prefix, filter = '') {
  const list = document.getElementById(listId);
  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase()) ||
    c.code.includes(filter)
  );
  list.innerHTML = filtered.map(c => `
    <div class="cd-item${selectedCountry[prefix].iso === c.iso ? ' active' : ''}"
      onclick="selectCountry('${c.iso}', '${prefix}')">
      <span class="ci-flag">${c.flag}</span>
      <span class="ci-name">${c.name}</span>
      <span class="ci-code">${c.code}</span>
    </div>`).join('');
}

function filterCountries(val, listId, prefix) {
  populateCountryList(listId, prefix, val);
}

function selectCountry(iso, prefix) {
  const c = COUNTRIES.find(x => x.iso === iso);
  if (!c) return;
  selectedCountry[prefix] = c;
  document.getElementById(prefix + '-flag').textContent = c.flag;
  document.getElementById(prefix + '-code').textContent = c.code;
  const hint = document.getElementById(prefix + '-format-hint');
  if (hint) hint.textContent = 'Format: ' + c.fmt + ' (' + c.len + ' digits)';
  closeAllDrops();
  // Re-validate if phone input already has content
  const inp = document.getElementById(prefix === 'lg' ? 'login-phone' : 'signup-phone');
  if (inp && inp.value) inp.dispatchEvent(new Event('input'));
}

function toggleCountryDrop(dropId) {
  const drop = document.getElementById(dropId);
  const isOpen = drop.classList.contains('show');
  closeAllDrops();
  if (!isOpen) {
    drop.classList.add('show');
    const searchId = dropId.replace('-cd', '-cd-search');
    const s = document.getElementById(searchId);
    if (s) { s.value = ''; s.focus(); }
    const prefix = dropId.replace('-cd', '');
    populateCountryList(dropId.replace('-cd', '-cd-list'), prefix);
  }
}

function closeAllDrops() {
  document.querySelectorAll('.country-dropdown').forEach(d => d.classList.remove('show'));
}

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.country-btn') && !e.target.closest('.country-dropdown')) {
    closeAllDrops();
  }
});

/* ═══════════════════════ PHONE VALIDATION ═══════════════════════ */

function validatePhone(inp, groupId, msgId, prefix) {
  const raw = inp.value.replace(/\D/g, '');
  const country = selectedCountry[prefix];
  const iconId = prefix + '-phone-icon';
  const stripId = prefix + '-strip';
  const group = document.getElementById(groupId);
  const icon  = document.getElementById(iconId);
  const msg   = document.getElementById(msgId);
  const strip = document.getElementById(stripId);
  const wrap  = document.getElementById(prefix + '-phone-wrap');

  // Reset all states
  group.classList.remove('valid', 'invalid');
  if (icon)  { icon.textContent = '';  icon.style.opacity = '0'; }
  if (strip) { strip.style.width = '0'; strip.style.background = 'var(--light-gray)'; }
  if (wrap)  { wrap.style.borderColor = 'var(--light-gray)'; }

  function setState(state, message) {
    group.classList.remove('valid', 'invalid');
    if (state === 'valid') {
      group.classList.add('valid');
      if (icon)  { icon.textContent = '✅'; icon.style.opacity = '1'; }
      if (strip) { strip.style.width = '100%'; strip.style.background = '#4CAF50'; }
      if (wrap)  wrap.style.borderColor = '#4CAF50';
    } else if (state === 'invalid') {
      group.classList.add('invalid');
      if (icon)  { icon.textContent = '❌'; icon.style.opacity = '1'; }
      if (strip) { strip.style.width = '100%'; strip.style.background = '#e53935'; }
      if (wrap)  wrap.style.borderColor = '#e53935';
    } else {
      if (wrap) wrap.style.borderColor = 'var(--rose)';
    }
    if (msg) {
      msg.textContent = message;
      msg.className = 'val-msg ' + (state === 'valid' ? 'ok' : state === 'invalid' ? 'err' : 'hint');
    }
  }

  // Update format hint tooltip
  const hint = document.getElementById(prefix + '-format-hint');
  if (hint) hint.textContent = 'Format: ' + country.fmt + ' (' + country.len + ' digits)';

  if (!raw) { setState('hint', "We'll send a verification code via SMS"); return false; }

  // Live progress bar (fills as user types)
  const progress = raw.length / country.len;
  const pct = Math.min(100, Math.round(progress * 100));
  if (strip && raw.length < country.len) {
    strip.style.width = pct + '%';
    strip.style.background = pct < 50 ? '#e53935' : pct < 80 ? '#FF9800' : '#FFC107';
    if (icon) icon.style.opacity = '0';
  }

  // Country-specific rules
  if (/^0+$/.test(raw)) { setState('invalid', '❌ Number cannot be all zeros'); return false; }
  if (raw.startsWith('0') && country.iso === 'IN') {
    setState('invalid', "❌ Indian numbers don't start with 0"); return false;
  }
  if (country.iso === 'IN' && raw.length > 0 && !/^[6-9]/.test(raw)) {
    setState('invalid', '❌ Indian mobile numbers start with 6, 7, 8, or 9'); return false;
  }

  // Length checks
  if (raw.length < country.len) {
    const remaining = country.len - raw.length;
    setState('hint', '✏️ ' + remaining + ' more digit' + (remaining !== 1 ? 's' : '') + ' needed');
    return false;
  }
  if (raw.length > country.len) { setState('invalid', '❌ Too many digits for ' + country.name); return false; }

  // Valid!
  setState('valid', '✅ Valid ' + country.name + ' number!');
  return true;
}

function getPhoneValue(prefix) {
  const raw = document.getElementById(prefix === 'lg' ? 'login-phone' : 'signup-phone').value.replace(/\D/g, '');
  return selectedCountry[prefix].code + ' ' + raw;
}

/* ═══════════════════════ NAME VALIDATION ═══════════════════════ */

function validateName(inp, g, m) {
  const val = inp.value.trim();
  function s(state, msg) {
    const ge = document.getElementById(g);
    const ie = document.getElementById('su-ni');
    const me = document.getElementById(m);
    ge.classList.remove('valid', 'invalid');
    if (state === 'valid')   { ge.classList.add('valid');   if (ie) { ie.textContent = '✅'; ie.style.opacity = '1'; } }
    if (state === 'invalid') { ge.classList.add('invalid'); if (ie) { ie.textContent = '❌'; ie.style.opacity = '1'; } }
    if (state === 'hint' && ie) { ie.textContent = ''; ie.style.opacity = '0'; }
    if (me) { me.textContent = msg || ''; me.className = 'val-msg ' + (state === 'valid' ? 'ok' : state === 'invalid' ? 'err' : 'hint'); }
  }
  if (!val)                          { s('hint',    'Enter your first and last name');  return false; }
  if (val.length < 2)                { s('invalid', '❌ Name too short');               return false; }
  if (/[^a-zA-Z\s\-\.]/.test(val))  { s('invalid', '❌ Letters only please');          return false; }
  if (!val.includes(' '))            { s('hint',    '✏️ Add your last name too');        return false; }
  s('valid', '✅ Great name!');
  return true;
}

/* ═══════════════════════ PASSWORD VALIDATION ═══════════════════════ */

function validatePassword(inp, g, m, fillId, labelId) {
  const val = inp.value;
  const rules = {
    l: val.length >= 8,
    u: /[A-Z]/.test(val),
    n: /[0-9]/.test(val),
    s: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val)
  };

  // Update rule chips
  ['rl', 'ru', 'rn', 'rs'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.className = 'pw-rule' + (Object.values(rules)[i] ? ' met' : '');
  });

  // Strength bar
  const score = Object.values(rules).filter(Boolean).length;
  const levels = [
    { p: '0%',   c: '#e53935', t: '' },
    { p: '25%',  c: '#e53935', t: 'Weak' },
    { p: '50%',  c: '#FF9800', t: 'Fair' },
    { p: '75%',  c: '#FFC107', t: 'Good' },
    { p: '100%', c: '#4CAF50', t: 'Strong 🔒' }
  ];
  const fi = document.getElementById(fillId);
  const la = document.getElementById(labelId);
  if (fi) { fi.style.width = levels[score].p; fi.style.background = levels[score].c; }
  if (la) { la.textContent = levels[score].t; la.style.color = levels[score].c; }

  const ge = document.getElementById(g);
  const ie = document.getElementById('su-pi');
  const me = document.getElementById(m);
  function setS(state, msg) {
    ge.classList.remove('valid', 'invalid');
    if (state === 'valid')   { ge.classList.add('valid');   if (ie) { ie.textContent = '✅'; ie.style.opacity = '1'; } }
    if (state === 'invalid') { ge.classList.add('invalid'); if (ie) { ie.textContent = '❌'; ie.style.opacity = '1'; } }
    if (state === 'hint' && ie) { ie.textContent = ''; ie.style.opacity = '0'; }
    if (me) { me.textContent = msg || ''; me.className = 'val-msg ' + (state === 'valid' ? 'ok' : state === 'invalid' ? 'err' : 'hint'); }
  }
  if (!val)      { setS('hint',    'Create a strong password');   return false; }
  if (score < 2) { setS('invalid', '❌ Password too weak');        return false; }
  if (score < 4) { setS('hint',    '✏️ Add more complexity');      return false; }
  setS('valid', '✅ Strong password!');
  return true;
}

/* ═══════════════════════ AUTH FLOWS ═══════════════════════ */

function doLoginPhone() {
  const inp = document.getElementById('login-phone');
  const valid = validatePhone(inp, 'lg-phone-group', 'lg-phone-msg', 'lg');
  if (!valid) { showToast('⚠️ Please enter a valid mobile number'); return; }
  const phone = getPhoneValue('lg');
  pendingUser = { name: 'User', phone, initial: '👤', fromLogin: true };
  sendSmsOTP(phone);
}

function doSignup() {
  const nOk  = validateName(document.getElementById('signup-name'), 'su-ng', 'su-nm');
  const pOk  = validatePhone(document.getElementById('signup-phone'), 'su-phone-group', 'su-phone-msg', 'su');
  const pwOk = validatePassword(document.getElementById('signup-pass'), 'su-pg', 'su-pm', 'su-sf', 'su-sl');
  if (!nOk)  { showToast('⚠️ Please enter your full name');         return; }
  if (!pOk)  { showToast('⚠️ Please enter a valid phone number');   return; }
  if (!pwOk) { showToast('⚠️ Please create a stronger password');   return; }
  const name  = document.getElementById('signup-name').value.trim();
  const phone = getPhoneValue('su');
  pendingUser = { name, phone, initial: (name[0] || 'U').toUpperCase(), fromLogin: false };
  sendSmsOTP(phone);
}

function googleLogin() {
  loginSuccess({ name: 'Alex Johnson', phone: '+91 98765 43210', initial: 'A', verified: true });
}

function sendSmsOTP(phone) {
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  showOTPPanel(phone);
  // In production: POST /api/send-sms-otp { phone }
  showToast('📱 OTP sent to ' + phone + ' — Demo: ' + generatedOTP);
}

function showOTPPanel(phone) {
  ['login-panel', 'signup-panel'].forEach(id => document.getElementById(id).style.display = 'none');
  document.getElementById('otp-panel').style.display = 'block';
  document.getElementById('otp-phone-display').textContent = phone;
  clearOTPBoxes();
  const vs = document.getElementById('verify-status');
  vs.style.display = 'none';
  vs.className = 'verify-status';
  document.getElementById('verify-btn').disabled = true;
  startOTPTimer();
}

function goBackFromOTP() {
  clearInterval(otpTimerInterval);
  if (pendingUser && pendingUser.fromLogin) showLogin();
  else showSignup();
}

function resendOTP() {
  if (!pendingUser) return;
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  clearOTPBoxes();
  const vs = document.getElementById('verify-status');
  vs.style.display = 'none';
  document.getElementById('verify-btn').disabled = true;
  startOTPTimer();
  showToast('📱 New OTP sent! Demo: ' + generatedOTP);
}

function clearOTPBoxes() {
  for (let i = 1; i <= 6; i++) {
    const b = document.getElementById('o' + i);
    b.value = '';
    b.className = 'otp-box';
  }
  setTimeout(() => document.getElementById('o1').focus(), 100);
}

function otpInput(inp, idx) {
  inp.value = inp.value.replace(/\D/g, '').slice(-1);
  if (inp.value) {
    inp.classList.add('filled');
    if (idx < 6) document.getElementById('o' + (idx + 1)).focus();
  } else {
    inp.classList.remove('filled');
  }
  checkAllFilled();
}

function otpKey(e, idx) {
  if (e.key === 'Backspace' && !document.getElementById('o' + idx).value && idx > 1) {
    document.getElementById('o' + (idx - 1)).focus();
  }
}

function checkAllFilled() {
  let all = true;
  for (let i = 1; i <= 6; i++) {
    if (!document.getElementById('o' + i).value) { all = false; break; }
  }
  document.getElementById('verify-btn').disabled = !all;
}

function startOTPTimer() {
  clearInterval(otpTimerInterval);
  let secs = 120;
  const resend = document.getElementById('resend-link');
  resend.classList.add('disabled');

  const tick = () => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    const tv = document.getElementById('otp-timer-val');
    if (!tv) { clearInterval(otpTimerInterval); return; }
    tv.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    tv.className = 'timer-val' + (secs <= 30 ? ' urgent' : '');
    secs--;
    if (secs < 0) {
      clearInterval(otpTimerInterval);
      tv.textContent = 'Expired';
      tv.className = 'timer-val urgent';
      resend.classList.remove('disabled');
    }
  };
  tick();
  otpTimerInterval = setInterval(tick, 1000);
}

function verifyOTP() {
  let entered = '';
  for (let i = 1; i <= 6; i++) entered += document.getElementById('o' + i).value;
  if (entered.length < 6) { showToast('⚠️ Enter the complete 6-digit code'); return; }

  const vs = document.getElementById('verify-status');
  vs.innerHTML = '<div class="v-spinner"></div> Verifying code…';
  vs.className = 'verify-status checking';
  vs.style.display = 'flex';
  document.getElementById('verify-btn').disabled = true;

  setTimeout(() => {
    if (entered === generatedOTP) {
      vs.innerHTML = '✅ Phone verified successfully!';
      vs.className = 'verify-status success-s';
      for (let i = 1; i <= 6; i++) document.getElementById('o' + i).className = 'otp-box success';
      clearInterval(otpTimerInterval);
      showToast('✅ Number verified!');
      setTimeout(() => {
        const u = pendingUser || { name: 'User', phone: 'Unknown', initial: 'U' };
        loginSuccess({ ...u, verified: true });
      }, 1000);
    } else {
      vs.innerHTML = '❌ Incorrect code. Please try again.';
      vs.className = 'verify-status error-s';
      for (let i = 1; i <= 6; i++) document.getElementById('o' + i).className = 'otp-box error';
      setTimeout(() => {
        clearOTPBoxes();
        vs.style.display = 'none';
        document.getElementById('verify-btn').disabled = false;
      }, 1400);
    }
  }, 1400);
}

function loginSuccess(user) {
  currentUser = user;
  const init = user.initial || '👤';
  document.getElementById('user-avatar').textContent = init;
  document.getElementById('profile-avatar-lg').textContent = init;
  document.getElementById('profile-name-display').textContent = user.name;
  document.getElementById('profile-phone-display').textContent = user.phone || '';
  document.getElementById('profile-verified-badge').style.display = user.verified ? 'inline-flex' : 'none';

  const h = new Date().getHours();
  const gr = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const firstName = (user.name || 'there').split(' ')[0];
  document.getElementById('hero-greeting').textContent = gr + ', ' + firstName;

  clearInterval(otpTimerInterval);
  showScreen('app-screen');
  renderVenues();
  showToast('🎉 Welcome to Luma, ' + firstName + '!');
}

function doLogout() { currentUser = null; pendingUser = null; showScreen('auth-screen'); showLogin(); }
function showSignup() {
  document.getElementById('login-panel').style.display = 'none';
  document.getElementById('otp-panel').style.display = 'none';
  document.getElementById('signup-panel').style.display = 'block';
}
function showLogin() {
  document.getElementById('signup-panel').style.display = 'none';
  document.getElementById('otp-panel').style.display = 'none';
  document.getElementById('login-panel').style.display = 'block';
}

/* ═══════════════════════ VENUE RENDERING ═══════════════════════ */

const BGS = {
  coffee:   'linear-gradient(135deg,#f4e8df,#e8d5c4)',
  birthday: 'linear-gradient(135deg,#f0e4f8,#e4d0f0)',
  date:     'linear-gradient(135deg,#f8e4e4,#f0d0d0)',
  dinner:   'linear-gradient(135deg,#e4f0e4,#d0e8d0)',
  hotel:    'linear-gradient(135deg,#e4eaf8,#d0daf0)',
  family:   'linear-gradient(135deg,#f8f4e4,#f0e8d0)'
};
function getBg(t) { return BGS[t] || 'linear-gradient(135deg,#f4f0ec,#e8e4e0)'; }

function renderVenues() {
  const grid = document.getElementById('venues-grid');
  const f = venues.filter(v => {
    const okT = activeOcc === 'all' || v.type === activeOcc;
    const okB = activeBudget === 'all'
      || (activeBudget === 'low'  && v.budget === 'low')
      || (activeBudget === 'mid'  && v.budget === 'mid')
      || (activeBudget === 'high' && v.budget === 'high');
    return okT && okB;
  });
  if (!f.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--warm-gray)"><div style="font-size:48px;margin-bottom:12px">🔍</div><div style="font-weight:600">No venues found</div></div>`;
    return;
  }
  grid.innerHTML = f.map(v => `
    <div class="venue-card${v.featured ? ' featured' : ''}" onclick="openVenue(${v.id})">
      <div class="venue-img-ph" style="background:${getBg(v.type)}">${v.emoji}
        ${v.badge ? `<div class="v-badge ${v.badgeClass}">${v.badge}</div>` : ''}
        <button class="wish-btn${wishlist.has(v.id) ? ' on' : ''}" onclick="toggleWish(event,${v.id})">${wishlist.has(v.id) ? '❤️' : '🤍'}</button>
      </div>
      <div class="venue-info">
        <div class="venue-name">${v.name}</div>
        <div class="venue-meta">
          <div class="venue-rating"><span class="star">★</span>${v.rating} (${v.reviews})</div>
          <div class="venue-price">${v.price}</div>
        </div>
        <div class="venue-dist">📍 ${v.distance}</div>
        <div class="venue-tags">${v.tags.slice(0, 2).map(t => `<span class="vtag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function filterOcc(el, t) {
  document.querySelectorAll('.occ-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeOcc = t;
  renderVenues();
}

function filterBudget(el, b) {
  document.querySelectorAll('.budget-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  activeBudget = b;
  renderVenues();
}

function toggleWish(e, id) {
  e.stopPropagation();
  if (wishlist.has(id)) { wishlist.delete(id); showToast('💔 Removed'); }
  else { wishlist.add(id); showToast('❤️ Saved!'); }
  renderVenues();
}

function doSearch(q) {
  if (!q) { renderVenues(); return; }
  const lq = q.toLowerCase();
  const f = venues.filter(v =>
    v.name.toLowerCase().includes(lq) ||
    v.type.includes(lq) ||
    v.tags.some(t => t.toLowerCase().includes(lq))
  );
  const grid = document.getElementById('venues-grid');
  if (!f.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--warm-gray)"><div style="font-size:48px">🔍</div><div style="font-weight:600;margin-top:12px">No results for "${q}"</div></div>`;
    return;
  }
  grid.innerHTML = f.map(v => `
    <div class="venue-card${v.featured ? ' featured' : ''}" onclick="openVenue(${v.id})">
      <div class="venue-img-ph" style="background:${getBg(v.type)}">${v.emoji}</div>
      <div class="venue-info">
        <div class="venue-name">${v.name}</div>
        <div class="venue-meta"><div class="venue-rating"><span class="star">★</span>${v.rating}</div><div class="venue-price">${v.price}</div></div>
        <div class="venue-dist">📍 ${v.distance}</div>
      </div>
    </div>`).join('');
}

/* ═══════════════════════ VENUE MODAL ═══════════════════════ */

function openVenue(id) {
  currentVenue = venues[id];
  const v = currentVenue;
  const hero = document.getElementById('modal-hero');
  hero.textContent = v.emoji;
  hero.style.background = getBg(v.type);
  document.getElementById('modal-title').textContent    = v.name;
  document.getElementById('modal-rating').textContent   = v.rating;
  document.getElementById('modal-reviews').textContent  = v.reviews;
  document.getElementById('modal-dist').textContent     = v.distance;
  document.getElementById('modal-price').textContent    = v.price;
  document.getElementById('modal-desc').textContent     = v.desc;
  document.getElementById('modal-book-price').textContent = '₹' + parseInt(v.bookPrice.replace(/[₹,]/g, '')).toLocaleString('en-IN');
  document.getElementById('booking-venue-name').textContent = v.name;
  document.getElementById('modal-photos').innerHTML = v.photos.map(p => `<div class="photo-thumb">${p}</div>`).join('');
  document.getElementById('modal-reviews-list').innerHTML = v.reviewList.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar" style="background:${r.color}">${r.name[0]}</div>
        <div><div class="review-name">${r.name}</div><div class="review-date">${r.date}</div></div>
        <div style="margin-left:auto;color:var(--gold);font-size:12px">★★★★★</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');
  document.getElementById('venue-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVenueModal() {
  document.getElementById('venue-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════ BOOKING ═══════════════════════ */

function openBooking() { buildCalendar(); buildTimeSlots(); document.getElementById('booking-modal').classList.add('open'); }
function closeBookingModal() { document.getElementById('booking-modal').classList.remove('open'); }

function buildCalendar() {
  const grid  = document.getElementById('date-grid');
  const days  = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const today = new Date();
  let html = days.map(d => `<div class="day-label">${d}</div>`).join('');
  const fd  = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  for (let i = 0; i < fd; i++) html += `<button class="date-cell disabled"></button>`;
  const dim = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) {
    const ip = d < today.getDate();
    const it = d === today.getDate();
    html += `<button class="date-cell${ip ? ' disabled' : ''}${it ? ' today' : ''}${selectedDate === d ? ' selected' : ''}" onclick="selDate(this,${d})">${d}</button>`;
  }
  grid.innerHTML = html;
}

function selDate(el, d) {
  selectedDate = d;
  document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function buildTimeSlots() {
  const slots = ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '9:00 PM'];
  const un    = ['1:00 PM', '7:00 PM'];
  document.getElementById('time-slots').innerHTML = slots.map(s =>
    `<button class="time-slot${un.includes(s) ? ' unavailable' : ''}${selectedTime === s ? ' selected' : ''}" onclick="selTime(this,'${s}')">${s}</button>`
  ).join('');
}

function selTime(el, t) {
  selectedTime = t;
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function changeGuests(d) {
  guestCount = Math.max(1, Math.min(20, guestCount + d));
  document.getElementById('guests-count').textContent = guestCount;
}

/* ═══════════════════════ PAYMENT ═══════════════════════ */

function proceedToPayment() {
  if (!selectedDate || !selectedTime) { showToast('⚠️ Select date and time first'); return; }
  const v   = currentVenue;
  const raw = parseInt(v.bookPrice.replace(/[₹,]/g, '')) || 0;
  const sub = raw * guestCount;
  const gst = Math.round(sub * 0.18);
  const total = sub + gst + 29;
  const f = n => '₹' + n.toLocaleString('en-IN');

  document.getElementById('pay-venue-name').textContent  = v.name;
  document.getElementById('pay-venue-price').textContent = f(raw) + '/person';
  document.getElementById('pay-guests').textContent      = guestCount + ' guest' + (guestCount > 1 ? 's' : '');
  document.getElementById('pay-datetime').textContent    = selectedDate + ' · ' + selectedTime;
  document.getElementById('pay-subtotal').textContent    = f(sub);
  document.getElementById('pay-gst').textContent         = f(gst);
  document.getElementById('pay-total').textContent       = f(total);
  document.getElementById('pay-btn-amount').textContent  = f(total);

  closeBookingModal();
  document.getElementById('payment-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
  document.getElementById('payment-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function selectPayMethod(el, m) {
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  document.querySelectorAll('.pay-form').forEach(f => f.classList.remove('active'));
  document.getElementById('form-' + m).classList.add('active');
  if (m === 'cod') {
    document.getElementById('pay-btn-text').textContent = 'Reserve Free';
    document.getElementById('pay-btn-amount').textContent = '';
  } else {
    document.getElementById('pay-btn-text').textContent = 'Pay ';
    document.getElementById('pay-btn-amount').textContent = document.getElementById('pay-total').textContent;
  }
}

function selUPI(el)    { document.querySelectorAll('.upi-opt').forEach(b => b.classList.remove('selected'));    el.classList.add('selected'); }
function selWallet(el) { document.querySelectorAll('.wallet-opt').forEach(b => b.classList.remove('selected')); el.classList.add('selected'); }

function formatCard(inp) {
  let v = inp.value.replace(/\D/g, '').substring(0, 16);
  inp.value = v.replace(/(.{4})/g, '$1 ').trim();
  const d = v.padEnd(16, '•').replace(/(.{4})/g, '$1 ').trim();
  document.getElementById('card-preview-num').textContent = d;
  document.getElementById('card-brand-icon').textContent = v[0] === '4' ? '💙' : v[0] === '5' ? '🟠' : '💳';
}

function formatExpiry(inp) {
  let v = inp.value.replace(/\D/g, '');
  if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2, 4);
  inp.value = v;
  document.getElementById('card-preview-exp').textContent = v || 'MM/YY';
}

function processPayment() {
  const af = document.querySelector('.pay-form.active');
  if (af && af.id === 'form-card') {
    const n  = document.getElementById('card-number').value.replace(/\s/g, '');
    const nm = document.getElementById('card-name').value;
    const ex = document.getElementById('card-exp').value;
    const cv = document.getElementById('card-cvv').value;
    if (n.length < 16 || !nm || ex.length < 5 || cv.length < 3) { showToast('⚠️ Fill all card details'); return; }
  }
  if (af && af.id === 'form-upi') {
    if (!document.getElementById('upi-id').value.includes('@')) { showToast('⚠️ Enter valid UPI ID'); return; }
  }
  if (af && af.id === 'form-netbank') {
    if (!document.getElementById('bank-select').value) { showToast('⚠️ Select your bank'); return; }
  }

  const btn = document.getElementById('pay-btn');
  const sp  = document.getElementById('pay-spinner');
  btn.disabled = true;
  document.getElementById('pay-btn-text').textContent   = 'Processing ';
  document.getElementById('pay-btn-amount').textContent = '';
  sp.style.display = 'block';

  setTimeout(() => {
    sp.style.display = 'none';
    btn.disabled = false;
    document.getElementById('pay-btn-text').textContent   = 'Pay ';
    document.getElementById('pay-btn-amount').textContent = document.getElementById('pay-total').textContent;
    closePaymentModal();
    finishBooking();
  }, 2200);
}

function finishBooking() {
  const v   = currentVenue;
  const ref = 'LU-' + Math.floor(100000 + Math.random() * 900000);
  const ds  = selectedDate + ' ' + new Date().toLocaleString('default', { month: 'short' }) + ' ' + new Date().getFullYear();

  document.getElementById('success-ref').textContent   = ref;
  document.getElementById('success-venue').textContent = v.name;
  document.getElementById('success-date').textContent  = ds;
  document.getElementById('success-paid').textContent  = document.getElementById('pay-total').textContent || v.bookPrice;
  document.getElementById('payment-success').classList.add('open');

  bookings.push({
    venue: v.name, emoji: v.emoji, date: ds,
    time: selectedTime, guests: guestCount,
    price: document.getElementById('pay-total').textContent || v.bookPrice,
    ref, type: v.type
  });
  document.getElementById('stat-bookings').textContent = bookings.length;
  updateBookingsList();
  selectedDate = null;
  selectedTime = null;
}

function dismissSuccess() {
  document.getElementById('payment-success').classList.remove('open');
  document.body.style.overflow = '';
  closeVenueModal();
  switchTab('bookings');
}

function updateBookingsList() {
  const list = document.getElementById('bookings-list');
  list.innerHTML = bookings.slice().reverse().map(b => `
    <div style="background:#fff;border-radius:18px;padding:16px;margin-bottom:12px;box-shadow:var(--s1);overflow:hidden;position:relative">
      <div style="position:absolute;top:0;left:0;width:4px;height:100%;background:linear-gradient(180deg,var(--terracotta),var(--rose));border-radius:4px 0 0 4px"></div>
      <div style="display:flex;align-items:flex-start;gap:12px;padding-left:8px">
        <div style="width:48px;height:48px;border-radius:13px;background:${getBg(b.type||'coffee')};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${b.emoji}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:14px;margin-bottom:3px">${b.venue}</div>
          <div style="font-size:11px;color:var(--warm-gray)">📅 ${b.date} · ${b.time}</div>
          <div style="font-size:11px;color:var(--warm-gray)">👥 ${b.guests} guest${b.guests>1?'s':''}</div>
          ${b.ref ? `<div style="font-size:10px;color:var(--terracotta);font-weight:600;margin-top:2px">Ref: ${b.ref}</div>` : ''}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="background:#edfaed;color:#2a8a2a;padding:4px 9px;border-radius:7px;font-size:10px;font-weight:700;margin-bottom:4px">✓ Paid</div>
          <div style="font-size:13px;font-weight:700">${b.price}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ═══════════════════════ NAVIGATION & UTILITIES ═══════════════════════ */

function switchTab(tab) {
  ['home', 'map', 'bookings', 'profile'].forEach(t => {
    document.getElementById('tab-' + t).style.display = t === tab ? 'block' : 'none';
    const n = document.getElementById('nav-' + t);
    if (n) n.classList.toggle('active', t === tab);
  });
  window.scrollTo(0, 0);
  document.getElementById('app-content').scrollTo(0, 0);
}

function detectLocation() {
  const cities = [
    'Koramangala, Bangalore', 'Indiranagar, Bangalore',
    'HSR Layout, Bangalore',  'Bandra, Mumbai',
    'Connaught Place, Delhi'
  ];
  setTimeout(() => {
    document.getElementById('location-text').textContent = cities[Math.floor(Math.random() * cities.length)];
  }, 1200);
}

function nearbyDiscovery() {
  showToast('📍 Finding venues near you…');
  setTimeout(() => showToast('✓ 6 venues found within 2km!'), 1200);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 3500);
}

function selectBudgetPref(el) {
  document.querySelectorAll('.pref-section .pref-chip').forEach(c => {
    if (['₹ Low', '₹₹ Medium', '₹₹₹ Premium'].some(b => c.textContent.includes(b.trim()))) {
      c.classList.remove('on');
    }
  });
  el.classList.add('on');
  showToast('✓ Preferences saved!');
}
