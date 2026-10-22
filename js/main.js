(function(){
  var C = window.PORTFOLIO || {};
  var $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  document.documentElement.classList.add('js');
  $('#yr').textContent = new Date().getFullYear();

  // Links from config.js
  var map = {github:C.github, linkedin:C.linkedin, email:C.email && 'mailto:'+C.email, phone:C.phone && 'tel:'+C.phone};
  $$('[data-link]').forEach(function(a){
    var url = map[a.dataset.link];
    if(url){ a.href = url; a.hidden = false; }
  });
  var hasGh = !!C.github;
  $$('[data-gh]').forEach(function(e){e.hidden = !hasGh});
  $$('[data-nogh]').forEach(function(e){e.hidden = hasGh});

  // Theme
  var root = document.documentElement, tbtn = $('#theme');
  function setTheme(t){
    root.setAttribute('data-theme', t);
    tbtn.setAttribute('aria-label', 'Switch to ' + (t==='dark'?'light':'dark') + ' theme');
    try{localStorage.setItem('theme', t)}catch(e){}
  }
  var saved; try{saved = localStorage.getItem('theme')}catch(e){}
  if(saved) setTheme(saved);
  tbtn.addEventListener('click', function(){
    var dark = root.getAttribute('data-theme')==='dark' || (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(dark?'light':'dark');
  });

  // Mobile menu
  var burger = $('#burger'), menu = $('#menu');
  function closeMenu(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu')}
  burger.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open?'Close menu':'Open menu');
  });
  $$('a', menu).forEach(function(a){a.addEventListener('click', closeMenu)});
  document.addEventListener('keydown', function(e){if(e.key==='Escape')closeMenu()});

  // Active section in nav
  if('IntersectionObserver' in window){
    var links = $$('a', menu);
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(en.isIntersecting){
          links.forEach(function(l){l.classList.toggle('active', l.getAttribute('href')==='#'+en.target.id)});
        }
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    $$('main section').forEach(function(s){io.observe(s)});
  }

  // Hero: lines appear one after another
  var lines = $$('#term .l'), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  lines.forEach(function(l,i){ setTimeout(function(){l.classList.add('show')}, reduce?0:350+i*260); });

  // Skill filter
  $$('.filters button').forEach(function(b){
    b.addEventListener('click', function(){
      $$('.filters button').forEach(function(x){x.classList.remove('on')}); b.classList.add('on');
      $$('#skillgrid li').forEach(function(li){li.classList.toggle('off', b.dataset.f!=='all' && li.dataset.c!==b.dataset.f)});
    });
  });

  // Toast + copy email
  var toast = $('#toast'), tt;
  function say(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('show')},2200)}
  $('#copy').addEventListener('click', function(){
    var done = function(){say('Email address copied')};
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(C.email).then(done, function(){say('Copy failed. Select the address and copy it.')}); }
    else say('Copy is not supported here. Select the address and copy it.');
  });

  // Contact form → mailto
  $('#form').addEventListener('submit', function(e){
    e.preventDefault();
    var f = e.target, n = f.name.value.trim(), m = f.email.value.trim(), g = f.msg.value.trim(), err = $('#err');
    if(!n || !m || !g){ err.textContent = 'Fill in your name, email and message.'; return; }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)){ err.textContent = 'Enter a valid email address.'; return; }
    err.textContent = '';
    var body = g + '\n\nFrom: ' + n + ' (' + m + ')';
    location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Portfolio enquiry from ' + n) + '&body=' + encodeURIComponent(body);
    say('Opening your email app');
  });
})();
