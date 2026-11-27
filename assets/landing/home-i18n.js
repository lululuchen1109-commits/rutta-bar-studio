(() => {
  "use strict";

  const REGIONS = {
    "en-US": { code: "en-US", htmlLang: "en", short: "US · $", label: "United States · English (USD $)" },
    "en-GB": { code: "en-GB", htmlLang: "en-GB", short: "UK · £", label: "United Kingdom · English (GBP £)" },
    "de-DE": { code: "de-DE", htmlLang: "de", short: "DE · €", label: "Deutschland · Deutsch (EUR €)" },
    "fr-FR": { code: "fr-FR", htmlLang: "fr", short: "FR · €", label: "France · Français (EUR €)" },
    "es-ES": { code: "es-ES", htmlLang: "es", short: "ES · €", label: "España · Español (EUR €)" },
    "ja-JP": { code: "ja-JP", htmlLang: "ja", short: "JP · ¥", label: "日本 · 日本語 (JPY ¥)" },
    "ko-KR": { code: "ko-KR", htmlLang: "ko", short: "KR · ₩", label: "대한민국 · 한국어 (KRW ₩)" },
    "zh-TW": { code: "zh-TW", htmlLang: "zh-Hant", short: "HK · HK$", label: "香港 / 台灣 · 繁體中文 (HKD $)" },
    "zh-CN": { code: "zh-CN", htmlLang: "zh-CN", short: "CN · ¥", label: "中国大陆 · 简体中文 (CNY ¥)" }
  };

  const ALIASES = {
    en: "en-US", "en-us": "en-US", us: "en-US",
    "en-gb": "en-GB", uk: "en-GB", gb: "en-GB",
    de: "de-DE", "de-de": "de-DE", fr: "fr-FR", "fr-fr": "fr-FR",
    es: "es-ES", "es-es": "es-ES", ja: "ja-JP", "ja-jp": "ja-JP", jp: "ja-JP",
    ko: "ko-KR", "ko-kr": "ko-KR", kr: "ko-KR",
    "zh-tw": "zh-TW", "zh-hk": "zh-TW", tw: "zh-TW", hk: "zh-TW",
    zh: "zh-CN", "zh-cn": "zh-CN", cn: "zh-CN"
  };

  const HOME_COPY = {
    "en-US": {
      title: "Rutta Bar - R1 | Side-Mounted USB-C Microphone for Mac",
      announce: ["Inside the box with Rutta Bar - R1", "Watch the 9-second film ↗"],
      nav: ["How it works", "Use cases", "Hardware", "Unboxing"],
      shopBtn: "Shop R1",
      hero1Title: "A microphone for\nthe side of your Mac.",
      hero1Body: "Plugs into any USB-C Mac for clear conversations. Slide the switch when you want to mute.",
      hero1Actions: ["How it works", "See the hardware"],
      hero2Title: "Inside the box.",
      hero2Body: "Lift the lid for a closer look at Rutta Bar - R1 and its one-piece USB-C plug.",
      hero2Actions: ["Watch the unboxing", "Shop Rutta Bar - R1"],
      storyTitle: "What did we decide?",
      storySub: "Two teammates, one design review. Follow a spoken decision into a note they can check together.",
      momentsTitle: "Where conversations happen",
      momentsSub: "From a two-person review to a studio standup.",
      peopleTitle: "Who’s at the table?",
      peopleSub: "Everyday moments across USB-C Mac setups.",
      hwTitle: "A closer look at Rutta Bar - R1",
      hwSub: "From the anodized aluminum shell to the mechanical switch under your fingertip.",
      hwGalleryLink: "Shop Rutta Bar - R1",
      fieldTitle: "Inside Rutta Bar - R1",
      fieldSub: "A closer look at the engineering behind the hardware.",
      footLegal: "© Rutta Bar - R1 · Side-Mounted USB-C Microphone for Mac",
      footTop: "Back to top ↑"
    },
    "de-DE": {
      title: "Rutta Bar - R1 | Seitliches USB-C-Mikrofon für Mac",
      announce: ["Rutta Bar - R1 im Detail", "9-Sekunden-Film ansehen ↗"],
      nav: ["Funktionsweise", "Szenarien", "Hardware", "Unboxing"],
      shopBtn: "Jetzt kaufen",
      hero1Title: "Ein Mikrofon für\ndie Seite Ihres Mac.",
      hero1Body: "Passt an jeden USB-C-Mac. Schiebeschalter zurückziehen, wenn Sie stummschalten möchten.",
      hero1Actions: ["Funktionsweise", "Hardware ansehen"],
      hero2Title: "Blick in die Box.",
      hero2Body: "Das eloxierte Aluminiumgehäuse von Rutta Bar - R1 mit integriertem USB-C-Stecker.",
      hero2Actions: ["Unboxing ansehen", "Rutta Bar - R1 kaufen"],
      storyTitle: "Was haben wir entschieden?",
      storySub: "Zwei Teammitglieder, ein Design-Review — gesprochene Entscheidungen sofort als Notiz.",
      momentsTitle: "Wo Gespräche stattfinden",
      momentsSub: "Vom Zweiergespräch bis zum Studio-Standup.",
      peopleTitle: "Wer sitzt am Tisch?",
      peopleSub: "Alltagsszenarien an jedem USB-C-Mac.",
      hwTitle: "Rutta Bar - R1 aus der Nähe",
      hwSub: "Vom eloxierten Aluminiumgehäuse bis zum mechanischen Stummschalter.",
      hwGalleryLink: "Rutta Bar - R1 kaufen",
      fieldTitle: "Im Inneren von Rutta Bar - R1",
      fieldSub: "Die Konstruktionsdetails hinter der Hardware.",
      footLegal: "© Rutta Bar - R1 · USB-C-Mikrofon für Mac",
      footTop: "Nach oben ↑"
    },
    "fr-FR": {
      title: "Rutta Bar - R1 | Microphone USB-C latéral pour Mac",
      announce: ["Dans le coffret Rutta Bar - R1", "Voir le film de 9 s ↗"],
      nav: ["Fonctionnement", "Usages", "Matériel", "Déballage"],
      shopBtn: "Acheter R1",
      hero1Title: "Un microphone sur\nle côté de votre Mac.",
      hero1Body: "Se branche sur tout Mac USB-C. Glissez l’interrupteur pour couper le micro.",
      hero1Actions: ["Fonctionnement", "Voir le matériel"],
      hero2Title: "Dans le coffret.",
      hero2Body: "Découvrez le boîtier en aluminium anodisé de Rutta Bar - R1 et sa prise USB-C intégrée.",
      hero2Actions: ["Voir le déballage", "Acheter Rutta Bar - R1"],
      storyTitle: "Qu’avons-nous décidé ?",
      storySub: "Deux collègues, une revue produit — retrouvez chaque décision en clair.",
      momentsTitle: "Là où naissent les échanges",
      momentsSub: "De l’entretien en duo au point d’équipe.",
      peopleTitle: "Autour de la table",
      peopleSub: "Au quotidien sur tous les Mac USB-C.",
      hwTitle: "Rutta Bar - R1 de plus près",
      hwSub: "Du boîtier en aluminium au curseur mécanique sous le doigt.",
      hwGalleryLink: "Acheter Rutta Bar - R1",
      fieldTitle: "Au cœur de Rutta Bar - R1",
      fieldSub: "Les choix d’ingénierie derrière le matériel.",
      footLegal: "© Rutta Bar - R1 · Microphone USB-C pour Mac",
      footTop: "Haut de page ↑"
    },
    "es-ES": {
      title: "Rutta Bar - R1 | Micrófono USB-C lateral para Mac",
      announce: ["Dentro de la caja de Rutta Bar - R1", "Ver vídeo de 9 s ↗"],
      nav: ["Cómo funciona", "Escenarios", "Hardware", "Unboxing"],
      shopBtn: "Comprar R1",
      hero1Title: "Un micrófono para\nel lateral de tu Mac.",
      hero1Body: "Conéctalo a cualquier Mac con USB-C. Desliza el interruptor para silenciar.",
      hero1Actions: ["Cómo funciona", "Ver hardware"],
      hero2Title: "Dentro de la caja.",
      hero2Body: "Cuerpo de aluminio anodizado de Rutta Bar - R1 con conector USB-C integrado.",
      hero2Actions: ["Ver unboxing", "Comprar Rutta Bar - R1"],
      storyTitle: "¿Qué decidimos?",
      storySub: "Dos compañeros, una revisión de diseño convertida en notas claras.",
      momentsTitle: "Donde ocurren las conversaciones",
      momentsSub: "De una reunión entre dos a un standup de estudio.",
      peopleTitle: "¿Quién está en la mesa?",
      peopleSub: "Escenarios reales en cualquier Mac con USB-C.",
      hwTitle: "Rutta Bar - R1 al detalle",
      hwSub: "Del cuerpo de aluminio al interruptor físico bajo tu dedo.",
      hwGalleryLink: "Comprar Rutta Bar - R1",
      fieldTitle: "Diseño de Rutta Bar - R1",
      fieldSub: "Los detalles de ingeniería detrás del producto.",
      footLegal: "© Rutta Bar - R1 · Micrófono USB-C para Mac",
      footTop: "Volver arriba ↑"
    },
    "ja-JP": {
      title: "Rutta Bar - R1 | Mac用 サイドマウント USB-C マイク",
      announce: ["Rutta Bar - R1 パッケージ映像", "9秒の映像を見る ↗"],
      nav: ["仕組み", "活用シーン", "ハードウェア", "開封映像"],
      shopBtn: "購入ページ",
      hero1Title: "Mac の側面に、\nそのまま挿せるマイク。",
      hero1Body: "すべての USB-C Mac に対応。ミュートしたい時はスイッチをスライドするだけ。",
      hero1Actions: ["仕組みを見る", "ハードウェア詳細"],
      hero2Title: "パッケージの中身。",
      hero2Body: "Rutta Bar - R1 のアルマイト筐体と一体型 USB-C プラグ。",
      hero2Actions: ["開封映像を見る", "Rutta Bar - R1 を購入"],
      storyTitle: "何を決定したか、すぐ手元に。",
      storySub: "2人のデザインレビューから、決定事項と次のアクションをそのまま整理。",
      momentsTitle: "あらゆる対話のそばに",
      momentsSub: "1on1の打ち合わせからスタジオの朝会まで。",
      peopleTitle: "こんな場面で活躍",
      peopleSub: "すべての USB-C Mac ユーザーのために。",
      hwTitle: "Rutta Bar - R1 のディテール",
      hwSub: "アルマイト仕上げの筐体から指先の物理ミュートスイッチまで。",
      hwGalleryLink: "Rutta Bar - R1 購入・詳細へ",
      fieldTitle: "Rutta Bar - R1 の設計思想",
      fieldSub: "ハードウェアに込められた音響・構造設計。",
      footLegal: "© Rutta Bar - R1 · Mac用 USB-C マイク",
      footTop: "トップへ戻る ↑"
    },
    "ko-KR": {
      title: "Rutta Bar - R1 | Mac용 사이드 장착 USB-C 마이크",
      announce: ["Rutta Bar - R1 언박싱", "9초 필름 보기 ↗"],
      nav: ["작동 방식", "활용 장면", "하드웨어", "언박싱"],
      shopBtn: "구매하기",
      hero1Title: "Mac 측면에 바로 꽂는\n초슬림 팀 마이크.",
      hero1Body: "모든 USB-C Mac 지원. 음소거가 필요할 땐 스위치를 밀어주세요.",
      hero1Actions: ["작동 방식", "하드웨어 보기"],
      hero2Title: "패키지 구성.",
      hero2Body: "Rutta Bar - R1 알루미늄 바디와 일체형 USB-C 플러그.",
      hero2Actions: ["언박싱 보기", "Rutta Bar - R1 구매"],
      storyTitle: "방금 무엇을 결정했나요?",
      storySub: "두 팀원의 디자인 리뷰 대화를 명확한 결정 사항과 할 일로 정리합니다.",
      momentsTitle: "대화가 시작되는 모든 곳",
      momentsSub: "2인 미팅부터 스튜디오 스탠드업까지.",
      peopleTitle: "누구를 위한 마이크인가요?",
      peopleSub: "모든 USB-C Mac 환경에서 자연스럽게.",
      hwTitle: "Rutta Bar - R1 자세히 보기",
      hwSub: "아노다이징 알루미늄 쉘부터 손끝의 물리 스위치까지.",
      hwGalleryLink: "Rutta Bar - R1 구매 페이지",
      fieldTitle: "Rutta Bar - R1 엔지니어링",
      fieldSub: "하드웨어 설계 디테일 확인하기.",
      footLegal: "© Rutta Bar - R1 · Mac용 USB-C 마이크",
      footTop: "맨 위로 ↑"
    },
    "zh-TW": {
      title: "Rutta Bar - R1｜Mac 側插式 USB-C 團隊麥克風",
      announce: ["開箱 Rutta Bar - R1", "觀看 9 秒短片 ↗"],
      nav: ["運作原理", "使用場景", "硬體細節", "開箱短片"],
      shopBtn: "立即選購",
      hero1Title: "直接插在 Mac 側邊的\n團隊麥克風。",
      hero1Body: "支援全系列 USB-C Mac。需要靜音時，輕撥側面開關即可。",
      hero1Actions: ["運作原理", "查看硬體"],
      hero2Title: "開箱一覽。",
      hero2Body: "近看 Rutta Bar - R1 陽極氧化鋁機身與一體成型 USB-C 插頭。",
      hero2Actions: ["觀看開箱", "選購 Rutta Bar - R1"],
      storyTitle: "剛剛決定了什麼？",
      storySub: "兩位夥伴的設計評審，將口頭結論直接沉澱為可核對的待辦。",
      momentsTitle: "對話發生的每個角落",
      momentsSub: "從雙人訪談到工作室晨會。",
      peopleTitle: "誰在桌邊使用？",
      peopleSub: "適用於每一台配備 USB-C 的 Mac。",
      hwTitle: "近看 Rutta Bar - R1",
      hwSub: "從噴砂陽極鋁外殼到指尖下的實體撥鍵。",
      hwGalleryLink: "前往 Rutta Bar - R1 購買頁",
      fieldTitle: "深入 Rutta Bar - R1",
      fieldSub: "硬體背後的尺寸、聲學與靜音設計。",
      footLegal: "© Rutta Bar - R1 · Mac 側插式團隊麥克風",
      footTop: "回到頂部 ↑"
    },
    "zh-CN": {
      title: "Rutta Bar - R1 | Mac 侧插式 USB-C 团队麦克风",
      announce: ["开箱 Rutta Bar - R1", "观看 9 秒短片 ↗"],
      nav: ["工作原理", "使用场景", "硬件细节", "开箱短片"],
      shopBtn: "立即购买",
      hero1Title: "直接插在 Mac 侧边的\n团队麦克风。",
      hero1Body: "兼容全系 USB-C Mac。随时开启清晰对话，轻拨侧键即可硬件静音。",
      hero1Actions: ["工作原理", "查看硬件"],
      hero2Title: "开箱一览。",
      hero2Body: "近看 Rutta Bar - R1 阳极氧化铝机身与一体式 USB-C 公头。",
      hero2Actions: ["观看开箱", "购买 Rutta Bar - R1"],
      storyTitle: "刚刚决定了什么？",
      storySub: "两位同伴的设计评审，把口头讨论沉淀为共同确认的结论与待办。",
      momentsTitle: "对话发生的每一处",
      momentsSub: "从双人评审到工作室站会。",
      peopleTitle: "谁在桌边使用？",
      peopleSub: "适配每一台配备 USB-C 接口的 Mac。",
      hwTitle: "近看 Rutta Bar - R1",
      hwSub: "从喷砂阳极氧化铝外壳到指尖下的机械静音拨键。",
      hwGalleryLink: "前往 Rutta Bar - R1 购买页",
      fieldTitle: "深入 Rutta Bar - R1",
      fieldSub: "硬件背后的装机、声学与双面反馈细节。",
      footLegal: "© Rutta Bar - R1 · Mac 侧插式团队麦克风",
      footTop: "回到顶部 ↑"
    }
  };
  HOME_COPY["en-GB"] = HOME_COPY["en-US"];

  function normalize(raw) {
    if (!raw) return null;
    const clean = String(raw).trim();
    if (REGIONS[clean]) return clean;
    const lower = clean.toLowerCase();
    return ALIASES[lower] || ALIASES[lower.split("-")[0]] || null;
  }

  const params = new URLSearchParams(location.search);
  const fromQuery = normalize(params.get("lang") || params.get("region"));
  let saved = null;
  try { saved = normalize(window.sessionStorage.getItem("rutta_region")); } catch {}
  let current = fromQuery || saved || "en-US";

  const btn = document.getElementById("lk-lang-btn");
  const shortEl = document.getElementById("lk-lang-short");
  const menu = document.getElementById("lk-lang-menu");

  function renderMenu() {
    if (!menu) return;
    menu.replaceChildren();
    Object.values(REGIONS).forEach(r => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "lk-lang-opt";
      b.setAttribute("aria-checked", String(r.code === current));
      b.innerHTML = `<span>${r.label}</span><b>${r.code === current ? "✓" : ""}</b>`;
      b.addEventListener("click", () => {
        menu.hidden = true;
        btn.setAttribute("aria-expanded", "false");
        apply(r.code, true);
      });
      menu.append(b);
    });
  }

  btn?.addEventListener("click", e => {
    e.stopPropagation();
    const open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", e => {
    if (menu && !menu.hidden && !e.target.closest(".lk-lang-wrap")) {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
  });

  function apply(code, updateUrl) {
    current = REGIONS[code] ? code : "en-US";
    try { window.sessionStorage.setItem("rutta_region", current); } catch {}
    const reg = REGIONS[current];
    const c = HOME_COPY[current] || HOME_COPY["en-US"];
    document.documentElement.lang = reg.htmlLang;
    document.title = c.title;
    if (shortEl) shortEl.textContent = reg.short;
    renderMenu();

    if (updateUrl && location.protocol.startsWith("http")) {
      const u = new URL(location.href);
      if (current === "en-US") u.searchParams.delete("lang");
      else u.searchParams.set("lang", current);
      history.replaceState(history.state, "", u.pathname + u.search + u.hash);
    }

    // Keep product.html links carrying ?lang=
    document.querySelectorAll('a[href*="product.html"]').forEach(a => {
      const [, hash = ""] = a.getAttribute("href").split("#");
      const q = current === "en-US" ? "" : `?lang=${encodeURIComponent(current)}`;
      a.setAttribute("href", `product.html${q}${hash ? "#" + hash : ""}`);
    });

    const annA = document.querySelector(".lk-announcement a");
    if (annA) annA.innerHTML = `${c.announce[0]} <span>${c.announce[1]}</span>`;
    document.querySelectorAll("#lk-navigation a").forEach((a, i) => { if (c.nav[i]) a.textContent = c.nav[i]; });
    const shopTop = document.querySelector(".lk-topbar .lk-gallery");
    if (shopTop) shopTop.innerHTML = `${c.shopBtn} <span aria-hidden="true">↗</span>`;

    const s0 = document.querySelector('.lk-slide[data-shot="0"]');
    if (s0) {
      s0.querySelector("h1").textContent = c.hero1Title;
      s0.querySelector(".lk-hero-panel > p").textContent = c.hero1Body;
      const acts = s0.querySelectorAll(".lk-hero-actions a");
      if (acts[0]) acts[0].textContent = c.hero1Actions[0];
      if (acts[1]) acts[1].textContent = c.hero1Actions[1];
    }
    const s1 = document.querySelector('.lk-slide[data-shot="1"]');
    if (s1) {
      s1.querySelector("h2").textContent = c.hero2Title;
      s1.querySelector(".lk-hero-panel > p").textContent = c.hero2Body;
      const acts = s1.querySelectorAll(".lk-hero-actions a");
      if (acts[0]) acts[0].textContent = c.hero2Actions[0];
      if (acts[1]) acts[1].textContent = c.hero2Actions[1];
    }

    const st = document.getElementById("lk-story-title");
    if (st) { st.textContent = c.storyTitle; st.nextElementSibling.textContent = c.storySub; }
    const mt = document.getElementById("moments-title");
    if (mt) { mt.textContent = c.momentsTitle; mt.nextElementSibling.textContent = c.momentsSub; }
    const pt = document.getElementById("people-title");
    if (pt) { pt.textContent = c.peopleTitle; pt.nextElementSibling.textContent = c.peopleSub; }
    const ht = document.getElementById("lk-hardware-title");
    if (ht) { ht.textContent = c.hwTitle; ht.nextElementSibling.textContent = c.hwSub; }
    const hgl = document.querySelector(".lk-hw-gallery-link");
    if (hgl) hgl.innerHTML = `${c.hwGalleryLink} <span aria-hidden="true">↗</span>`;
    const ft = document.getElementById("field-title");
    if (ft) { ft.textContent = c.fieldTitle; ft.nextElementSibling.textContent = c.fieldSub; }
    const fl = document.querySelector(".lk-foot-legal");
    if (fl) fl.textContent = c.footLegal;
    const ftop = document.querySelector(".lk-foot-top");
    if (ftop) ftop.textContent = c.footTop;
  }

  apply(current, false);
})();
