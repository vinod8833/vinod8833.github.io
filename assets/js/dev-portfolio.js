/**
 * K Vinod Kumar — Portfolio
 * Slow binary rain · Solid geometry 3D (slow motion)
 */
(function () {
  'use strict';

  var IMG = './assets/images/';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var projects = [
    { title: 'Google Fiber Loader', cat: 'web development', img: 'web6.png', url: 'https://github.com/vinod8833/html_project/tree/main/Google%20Fiber%20Loader', tags: ['HTML', 'CSS'] },
    { title: 'Dynamic Island iPhone', cat: 'web development', img: 'web5.png', url: 'https://github.com/vinod8833/html_project/tree/main/Dynamic%20Island%20Iphone', tags: ['HTML', 'CSS', 'JS'] },
    { title: 'Tic Tac Toe Game', cat: 'applications', img: 'tic_tac_toe_game.png', url: 'https://github.com/vinod8833/tic-tac-toe-game', tags: ['React'] },
    { title: 'Simple Quiz Web', cat: 'web development', img: 'Quiz.png', url: 'https://github.com/vinod8833', tags: ['HTML', 'CSS', 'JS'] },
    { title: 'Dark & Light Calculator', cat: 'web development', img: 'web1.png', url: 'https://github.com/vinod8833/html_project/tree/main/Dark%20%26%20Light%20-%20Calculator', tags: ['HTML', 'CSS'] },
    { title: 'Dynamic Calendar', cat: 'web development', img: 'web2.png', url: 'https://github.com/vinod8833/html_project/tree/main/Dynamic%20Calendar', tags: ['HTML', 'CSS', 'JS'] },
    { title: 'Animated Login', cat: 'web development', img: 'Pasted image 1.png', url: 'https://github.com/vinod8833/html_project/tree/main/Glowing%20Login%20Form', tags: ['HTML', 'CSS'] },
    { title: 'Food App Home Page', cat: 'web design', img: 'ux1.png', url: 'https://www.figma.com/file/3pSMl7H8U4fDa6ijN9alzK/Untitled', tags: ['Figma', 'UI/UX'] },
    { title: 'Food Scooter App', cat: 'web design', img: 'ux2.png', url: 'https://www.figma.com/file/YLlW3spll71nqYNSUffb37/food-scooter', tags: ['Figma'] },
    { title: 'Amazon App Clone', cat: 'web design', img: 'ux3.png', url: 'https://www.figma.com/file/Cen1WyvTlWUsBaxOyG6qRh/Amazon-Figma-Clone', tags: ['Figma'] },
    { title: 'Robogenius Design', cat: 'web design', img: '1-1.png', url: 'https://www.figma.com/proto/RWZ8TN9NIMyX8dpDv4sWRF/Untitled', tags: ['Figma'] },
    { title: 'E-commerce Design', cat: 'web design', img: '2-1.png', url: 'https://www.figma.com/proto/gpJNb4bSlHNUxD0Ewkbzdh/Untitled', tags: ['Figma'] },
    { title: 'Todo App', cat: 'applications', img: 'Screenshot from 2024-03-26 22-54-00.png', url: 'https://github.com/vinod8833/react_todo_app', tags: ['React'] },
    { title: 'Weather App', cat: 'applications', img: 'weatherapp.png', url: 'https://github.com/vinod8833/Django_Weather_App/tree/main', tags: ['Django'] },
    { title: 'Wheels on Meals', cat: 'applications', img: '1723295072704.jpeg', url: 'https://github.com/vinod8833/Wheels_on_Meals_App', tags: ['Django'] },
    { title: 'Django MusicPlayer', cat: 'applications', img: 'musicapp.png', url: 'https://github.com/vinod8833/Django_MusicPlayer', tags: ['Django'] },
    { title: 'Django Todo App', cat: 'applications', img: 'Django-todo.png', url: 'https://github.com/vinod8833/django-todoapp', tags: ['Django'] },
    { title: 'House Price ML', cat: 'machine learning', img: '0_XMbwmj-4r80bBuIg.jpg', url: 'https://colab.research.google.com/drive/1V46CPpnkL7y4XZ2sgjV9EsUUxCsNBy-u', tags: ['Python', 'ML'] },
    { title: 'Diabetes Prediction', cat: 'machine learning', img: 'dataset-card.png', url: 'https://colab.research.google.com/drive/1Nd0AwJHWrEfaAHpWhdL3ta4Ie1umKQV-', tags: ['Python'] },
    { title: 'Wine Quality ML', cat: 'machine learning', img: 'maxresdefault.jpg', url: 'https://colab.research.google.com/drive/1Nd0AwJHWrEfaAHpWhdL3ta4Ie1umKQV-', tags: ['Python'] },
    {
      title: 'Slikk.club Selenium Test Automation',
      cat: 'qa automation',
      img: 'Selenium-.png',
      imgFallback: 'proj-qa-selenium.svg',
      url: 'https://github.com/vinod8833/slikk-test-automation-selenium',
      tags: ['Python', 'Selenium', 'Pytest'],
      desc: 'End-to-end automation framework with 25 test cases covering complete user flow (navigation, filters, cart, checkout, wishlist).',
      features: ['25/25 tests passing', 'Automated screenshots & HTML reports', 'Headless execution support']
    },
    {
      title: 'Slikk.club Playwright E2E Automation',
      cat: 'qa automation',
      img: 'proj-qa-playwright.svg',
      imgFallback: 'proj-qa-playwright.svg',
      url: 'https://github.com/vinod8833/playwright-automation-slikk-app',
      tags: ['JavaScript', 'Playwright', 'Node.js'],
      desc: 'Cross-browser E2E automation with screenshot and video recording capabilities.',
      features: [
        'Multi-browser support (Chromium, Firefox, WebKit)',
        'Headed/Headless execution',
        'Trace viewer & HTML reporting',
        'Video recording on failure'
      ]
    }
  ];

  var certificates = [
    { title: 'Full Stack Development', issuer: 'Teachnook', date: '2022', img: 'Teachnook COURSE Completion Certificate _.jpg', icon: 'fa-certificate' },
    { title: 'Full Stack Development', issuer: 'Teachnook', date: '2022', img: '1703580567225.jpeg', icon: 'fa-hands-helping' },
    { title: 'Teachnook Internship', issuer: 'Teachnook', date: '2023', img: 'Share TEACHNOOK 0001.jpg', icon: 'fa-briefcase' },
    { title: 'React Workshop', issuer: 'NIST University', date: '2023', img: 'React-Workshop-58_.jpg', icon: 'fa-brands fa-react' },
    { title: 'Google Cloud Study Jam', issuer: 'Google Developers', date: '2023', img: 'GCSJ-Participant-CERT-23_page-0001.jpg', icon: 'fa-brands fa-google' },
    { title: 'Google Study Jam', issuer: 'Google', date: '2023', img: 'gioogle_stydy_gam.jpeg', icon: 'fa-brands fa-google' },
    { title: 'Demystifying Networking', issuer: 'Cisco / Online', date: '2023', img: 'Demystifying Networking_page-0001.jpg', icon: 'fa-network-wired' },
    { title: 'Data Structure using C', issuer: 'NIST University', date: '2023', img: '202112303_page-0001.jpg', icon: 'fa-code' },
    { title: 'Techvolt Internship', issuer: 'Techvolt Software', date: 'Aug 2024', img: 'techvoltsoftware.jpeg', icon: 'fa-building' },
    { title: 'Techvolt Completion', issuer: 'Techvolt Software', date: '2024', img: 'techvolts.jpeg', icon: 'fa-building' },
    { title: 'Full Stack Developer Summer Course', issuer: 'NIST University', date: 'Aug 2024', img: '1725550753945 (1).jpg', icon: 'fa-laptop-code' },
    { title: 'NSS Volunteer', issuer: 'NIST University', date: '2024', img: 'photo_2024-07-19_16-15-54.jpg', icon: 'fa-hands-helping' },
    
  ];

  var catNames = {
    'web development': 'Web Development',
    applications: 'Application',
    'web design': 'UI/UX Design',
    'machine learning': 'Machine Learning',
    'qa automation': 'QA Automation'
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ——— Coding rain: smooth, subtle, desktop + mobile ——— */
  function codingRain() {
    var canvas = document.getElementById('code-rain');
    if (!canvas || reduced) return;

    var ctx = canvas.getContext('2d', { alpha: true });
    var symbols = '01{}[]<>();:,/%$#@!*&+=';
    var keywords = [
      'const', 'let', 'var', 'function', 'return', 'async', 'await', 'class',
      'import', 'export', 'if', 'else', 'for', 'while', 'true', 'false', 'null',
      'React', 'Python', 'Django', 'npm', 'git', 'push', 'test', 'QA', 'API',
      'HTML', 'CSS', 'JS', 'try', 'catch', 'new', 'this', 'void', 'map', 'filter',
      '=>', '===', '!==', '&&', '||', '++', '--', '===', 'selenium', 'cypress'
    ];
    var pool = symbols.split('').concat(keywords);
    var colors = ['#0F766E', '#115E59', '#334155', '#0D9488', '#475569'];
    var columns = [];
    var w, h, animId, running = true;
    var fontSize = 14;
    var lineH = 18;
    var gap = 22;
    var dpr = 1;
    var lastTime = 0;
    var fadeAlpha = 0.14;

    function pick() {
      return pool[Math.floor(Math.random() * pool.length)];
    }

    function initColumns(count) {
      columns = [];
      for (var i = 0; i < count; i++) {
        columns.push({
          y: Math.random() * -h,
          speed: 18 + Math.random() * 22,
          chars: [],
          color: colors[i % colors.length]
        });
        var trail = 8 + Math.floor(Math.random() * 6);
        for (var t = 0; t < trail; t++) {
          columns[i].chars.push(pick());
        }
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = w < 480 ? 12 : w < 768 ? 13 : 14;
      lineH = fontSize + 5;
      gap = w < 480 ? 20 : w < 768 ? 22 : 26;
      fadeAlpha = w < 480 ? 0.16 : 0.12;

      var colCount = Math.floor(w / gap);
      var maxCols = w < 480 ? 28 : w < 768 ? 42 : 72;
      colCount = Math.min(colCount, maxCols);
      initColumns(colCount);
    }

    function draw(now) {
      if (!running) return;
      animId = requestAnimationFrame(draw);
      if (!lastTime) lastTime = now;
      var dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.fillStyle = 'rgba(232, 238, 244, ' + fadeAlpha + ')';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '500 ' + fontSize + 'px ui-monospace, "Cascadia Code", "Fira Code", Consolas, monospace';
      ctx.textBaseline = 'top';

      for (var i = 0; i < columns.length; i++) {
        var col = columns[i];
        var x = i * gap + 4;
        col.y += col.speed * dt;

        if (col.y > h + lineH * col.chars.length) {
          col.y = -lineH * col.chars.length - Math.random() * 200;
          col.speed = 18 + Math.random() * 22;
        }

        if (Math.random() > 0.992) {
          col.chars[Math.floor(Math.random() * col.chars.length)] = pick();
        }

        for (var j = 0; j < col.chars.length; j++) {
          var cy = col.y - j * lineH;
          if (cy < -lineH || cy > h + lineH) continue;
          var alpha = j === 0 ? 0.16 : Math.max(0.04, 0.14 - j * 0.012);
          ctx.fillStyle = col.color;
          ctx.globalAlpha = alpha;
          ctx.fillText(col.chars[j], x, cy);
        }
      }
      ctx.globalAlpha = 1;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    requestAnimationFrame(draw);

    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) {
        lastTime = 0;
        requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animId);
      }
    });
  }

  /* ——— Three.js: procedural viewer + orbit (mouse/touch) ——— */
  function init3DScene(opts) {
    var canvas = document.getElementById(opts.canvasId);
    var box = opts.boxEl || document.getElementById(opts.boxId);
    var fallbackEl = opts.fallbackId ? document.getElementById(opts.fallbackId) : null;
    if (!canvas || !box || typeof THREE === 'undefined' || reduced) return null;

    function showFallback() {
      if (fallbackEl) fallbackEl.hidden = false;
      canvas.style.display = 'none';
    }

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    } catch (e) {
      showFallback();
      return null;
    }
    if (!renderer.getContext()) {
      showFallback();
      return null;
    }

    var animId, visible = true;
    var compact = !!opts.compact;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(compact ? 42 : 38, 1, 0.1, 100);
    var camZ = compact ? 3.6 : 4.2;
    camera.position.set(0, 0.2, camZ);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 2 : 2.5));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = !compact;

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    var key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(5, 8, 6);
    key.castShadow = !compact;
    scene.add(key);
    var rim = new THREE.PointLight(0x5EEAD4, 0.5, 30);
    rim.position.set(-4, 2, 5);
    scene.add(rim);
    var fill = new THREE.DirectionalLight(0x7C3AED, 0.25);
    fill.position.set(-3, -4, 2);
    scene.add(fill);

    function glassMat(color, opacity) {
      return new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.45,
        roughness: 0.18,
        transparent: true,
        opacity: opacity || 0.88,
        emissive: color,
        emissiveIntensity: 0.08
      });
    }

    var group = new THREE.Group();
    var scale = compact ? 0.85 : 1;
    var knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.52 * scale, 0.14 * scale, compact ? 80 : 128, 16),
      glassMat(0x0D9488, 0.82)
    );
    knot.castShadow = true;
    group.add(knot);

    var inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.32 * scale, 1),
      glassMat(0x5EEAD4, 0.75)
    );
    group.add(inner);

    var base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7 * scale, 0.85 * scale, 0.12 * scale, 32),
      new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.6, roughness: 0.35 })
    );
    base.position.y = -0.55 * scale;
    base.receiveShadow = true;
    group.add(base);

    if (!compact) {
      var ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.95 * scale, 0.03 * scale, 16, 64),
        glassMat(0x7C3AED, 0.5)
      );
      ring.rotation.x = Math.PI / 2.2;
      group.add(ring);
    }

    scene.add(group);

    var rotY = 0.4;
    var rotX = 0.15;
    var zoom = camZ;
    var dragging = false;
    var lastX = 0;
    var lastY = 0;
    var autoSpin = 0.004;

    function onPointerDown(e) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      box.setPointerCapture(e.pointerId);
    }
    function onPointerUp(e) {
      dragging = false;
      try { box.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    }
    function onPointerMove(e) {
      if (!dragging) return;
      rotY += (e.clientX - lastX) * 0.008;
      rotX += (e.clientY - lastY) * 0.005;
      rotX = Math.max(-0.8, Math.min(0.8, rotX));
      lastX = e.clientX;
      lastY = e.clientY;
    }
    function onWheel(e) {
      if (!opts.enableZoom) return;
      e.preventDefault();
      zoom += e.deltaY * 0.003;
      zoom = Math.max(2.8, Math.min(6, zoom));
    }

    box.style.touchAction = 'none';
    box.addEventListener('pointerdown', onPointerDown);
    box.addEventListener('pointerup', onPointerUp);
    box.addEventListener('pointercancel', onPointerUp);
    box.addEventListener('pointermove', onPointerMove);
    if (opts.enableZoom) {
      box.addEventListener('wheel', onWheel, { passive: false });
    }

    function resize() {
      var bw = box.clientWidth || 300;
      var bh = box.clientHeight || (compact ? 220 : 360);
      renderer.setSize(bw, bh);
      camera.aspect = bw / bh;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
    }, { threshold: 0.05 }).observe(box);

    var t = 0;
    function animate() {
      animId = requestAnimationFrame(animate);
      if (!visible) return;
      t += 0.01;
      if (!dragging) rotY += autoSpin;
      group.rotation.y = rotY;
      group.rotation.x = rotX;
      knot.rotation.z = t * 0.15;
      inner.rotation.y = -t * 0.25;
      camera.position.z += (zoom - camera.position.z) * 0.08;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('beforeunload', function () {
      cancelAnimationFrame(animId);
      renderer.dispose();
    });

    return { renderer: renderer, group: group };
  }

  function hero3D() {
    init3DScene({
      canvasId: 'hero-3d',
      boxId: 'hero-3d-box',
      compact: true,
      enableZoom: false
    });
  }

  function portfolioViewer3D() {
    init3DScene({
      canvasId: 'portfolio-3d',
      boxId: 'viewer-wrap',
      fallbackId: 'viewer-fallback',
      compact: false,
      enableZoom: true
    });
  }

  /* ——— Projects ——— */
  var grid = document.getElementById('proj-grid');
  if (grid) {
    projects.forEach(function (p) {
      var tags = p.tags.map(function (t) { return '<span>' + escapeHtml(t) + '</span>'; }).join('');
      var featuresHtml = '';
      if (p.features && p.features.length) {
        featuresHtml = '<ul class="proj-features">' +
          p.features.map(function (f) {
            return '<li>' + escapeHtml(f) + '</li>';
          }).join('') + '</ul>';
      }
      var descHtml = p.desc ? '<p class="proj-desc">' + escapeHtml(p.desc) + '</p>' : '';
      var imgFallback = p.imgFallback ? IMG + p.imgFallback : '';
      var imgErr = imgFallback
        ? ' onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'' + imgFallback + '\';}"'
        : '';
      var el = document.createElement('article');
      el.className = 'glass proj-card reveal';
      el.dataset.category = p.cat;
      el.innerHTML =
        '<div class="proj-thumb">' +
          '<img src="' + IMG + encodeURI(p.img) + '" alt="' + escapeHtml(p.title) + '" loading="lazy" width="300" height="190"' + imgErr + '>' +
          '<div class="proj-overlay">' +
            '<a href="' + escapeHtml(p.url) + '" class="btn btn-sm btn-primary" target="_blank" rel="noopener">View Project</a>' +
          '</div>' +
        '</div>' +
        '<div class="proj-body">' +
          '<h3>' + escapeHtml(p.title) + '</h3>' +
          '<p class="proj-cat">' + escapeHtml(catNames[p.cat] || p.cat) + '</p>' +
          descHtml +
          featuresHtml +
          '<div class="stack">' + tags + '</div>' +
        '</div>';
      grid.appendChild(el);
    });
  }

  document.querySelectorAll('[data-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-filter]').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      var f = btn.dataset.filter;
      document.querySelectorAll('.proj-card').forEach(function (c) {
        c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f);
      });
    });
  });

  /* ——— Certificates ——— */
  var modal = document.getElementById('cert-modal');
  function openCert(c) {
    var src = IMG + c.img;
    document.getElementById('cert-h').textContent = c.title;
    document.getElementById('cert-p').textContent = c.issuer + ' · Issued ' + c.date;
    document.getElementById('cert-img').src = src;
    document.getElementById('cert-img').alt = c.title;
    document.getElementById('cert-dl').href = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeCert() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  var certGrid = document.getElementById('cert-grid');
  if (certGrid) {
    certificates.forEach(function (c) {
      var src = IMG + encodeURI(c.img);
      var card = document.createElement('article');
      card.className = 'glass cert-card reveal';
      var iconCls = c.icon.indexOf('fa-brands') === 0 ? c.icon : 'fa-solid ' + c.icon;
      card.innerHTML =
        '<img src="' + src + '" alt="" loading="lazy">' +
        '<div class="cert-info">' +
          '<h3><i class="' + iconCls + '" aria-hidden="true"></i> ' + c.title + '</h3>' +
          '<p class="cert-meta">' + c.date + ' · ' + c.issuer + '</p>' +
          '<div class="cert-actions">' +
            '<button type="button" class="btn btn-sm btn-primary" data-view>View</button>' +
            '<a href="' + src + '" class="btn btn-sm btn-glass" download>Download</a>' +
          '</div>' +
        '</div>';
      card.querySelector('[data-view]').addEventListener('click', function (e) {
        e.stopPropagation();
        openCert(c);
      });
      card.addEventListener('click', function () { openCert(c); });
      certGrid.appendChild(card);
    });
  }

  document.getElementById('cert-x').addEventListener('click', closeCert);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeCert(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeCert(); });

  /* ——— Skill bars ——— */
  var barObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.fill').forEach(function (b) {
        b.style.width = b.dataset.level + '%';
      });
      barObs.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-skill-bars]').forEach(function (el) { barObs.observe(el); });

  /* ——— Counters ——— */
  var cObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, n = parseInt(el.dataset.counter, 10), t0 = performance.now();
      function tick(now) {
        var p = Math.min((now - t0) / 1400, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * n);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = n;
      }
      requestAnimationFrame(tick);
      cObs.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-counter]').forEach(function (el) { cObs.observe(el); });

  /* ——— Reveal ——— */
  var revObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { revObs.observe(el); });

  /* ——— Nav ——— */
  var navList = document.getElementById('nav-list');
  document.getElementById('nav-toggle').addEventListener('click', function () {
    var open = navList.classList.toggle('open');
    this.setAttribute('aria-expanded', open);
  });
  navList.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navList.classList.remove('open'); });
  });

  /* ——— Contact form: validate, submit, instant clear on success ——— */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var nameEl = document.getElementById('fn');
    var emailEl = document.getElementById('fe');
    var msgEl = document.getElementById('fm');
    var statusEl = document.getElementById('form-status');
    var submitBtn = document.getElementById('form-submit');
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setStatus(text, type) {
      if (!text) {
        statusEl.hidden = true;
        statusEl.textContent = '';
        statusEl.className = 'form-status';
        return;
      }
      statusEl.hidden = false;
      statusEl.textContent = text;
      statusEl.className = 'form-status form-status--' + (type || 'info');
    }

    function clearFieldErrors() {
      form.querySelectorAll('.float-f').forEach(function (wrap) {
        wrap.classList.remove('is-invalid');
        var err = wrap.querySelector('.field-error');
        if (err) err.textContent = '';
      });
    }

    function setFieldError(el, message) {
      var wrap = el.closest('.float-f');
      if (!wrap) return;
      wrap.classList.add('is-invalid');
      var err = wrap.querySelector('.field-error');
      if (err) err.textContent = message;
    }

    function validate() {
      clearFieldErrors();
      var valid = true;
      if (!nameEl.value.trim()) {
        setFieldError(nameEl, 'Name is required.');
        valid = false;
      }
      if (!emailRe.test(emailEl.value.trim())) {
        setFieldError(emailEl, 'Enter a valid email address.');
        valid = false;
      }
      if (!msgEl.value.trim()) {
        setFieldError(msgEl, 'Message is required.');
        valid = false;
      }
      return valid;
    }

    function clearFormInstant() {
      nameEl.value = '';
      emailEl.value = '';
      msgEl.value = '';
      clearFieldErrors();
    }

    [nameEl, emailEl, msgEl].forEach(function (el) {
      el.addEventListener('input', function () {
        el.closest('.float-f').classList.remove('is-invalid');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validate()) {
        setStatus('Please fix the errors below.', 'error');
        var firstInvalid = form.querySelector('.is-invalid input, .is-invalid textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var payload = new FormData(form);
      submitBtn.disabled = true;
      setStatus('Sending…', 'info');

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            clearFormInstant();
            setStatus('Message sent successfully!', 'success');
          } else {
            setStatus(data.message || 'Could not send message. Please try again.', 'error');
          }
        })
        .catch(function () {
          setStatus('Network error. Check your connection and try again.', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  initContactForm();

  document.getElementById('year').textContent = new Date().getFullYear();

  codingRain();
  hero3D();
  portfolioViewer3D();
})();
