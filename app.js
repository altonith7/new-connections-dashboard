(function(){
  const savedTheme=localStorage.getItem('nc_dashboard_theme');
  document.documentElement.dataset.theme=savedTheme==='light'?'light':'default';
})();
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Orbitron:wght@600;700;800;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#0a0e27;--blue:#00d4ff;--purple:#7b2fff;--pink:#ff2d95;--green:#00ff88;--yellow:#ffd700;--orange:#ff6b35;--red:#ff3366;--text:#fff;--muted:#8892b0;--border:rgba(0,212,255,.15);--glass:rgba(22,27,74,.7)}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;transition:background .25s ease,color .25s ease}
.imp,.kpi-c,.alert,.tb,.cx,.insight-card,.toggle-btn,.toast{transition:background .25s ease,border-color .25s ease,color .25s ease,box-shadow .25s ease,transform .25s ease}
.orb{position:fixed;border-radius:50%;filter:blur(80px);opacity:.22;pointer-events:none;animation:f 20s infinite ease-in-out}
.orb:nth-child(1){width:600px;height:600px;background:radial-gradient(circle,var(--purple),transparent);top:-200px;left:-200px}
.orb:nth-child(2){width:500px;height:500px;background:radial-gradient(circle,var(--blue),transparent);top:50%;right:-150px;animation-delay:-7s}
.orb:nth-child(3){width:400px;height:400px;background:radial-gradient(circle,var(--pink),transparent);bottom:-100px;left:30%;animation-delay:-14s}
@keyframes f{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(50px,-50px) scale(1.1)}}
.gridbg{position:fixed;inset:0;background-image:linear-gradient(rgba(0,212,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}
.w{position:relative;z-index:1;max-width:1800px;margin:0 auto;padding:20px}
.hdr{text-align:center;padding:35px 20px 20px}
.hdr h1{font-family:'Orbitron';font-size:2.6rem;font-weight:900;background:linear-gradient(135deg,var(--blue),var(--purple),var(--pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:3px}
.hdr .sub{color:var(--muted);letter-spacing:5px;font-size:.82rem;margin-top:8px;text-transform:uppercase}
.live{display:inline-flex;align-items:center;gap:8px;margin-top:12px;padding:5px 18px;background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.3);border-radius:50px;font-size:.68rem;color:var(--green);letter-spacing:2px}
.dot{width:8px;height:8px;background:var(--green);border-radius:50%;animation:p 2s infinite}
@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}
.imp{background:var(--glass);backdrop-filter:blur(20px);border:2px dashed var(--border);border-radius:20px;padding:26px;margin:20px 0;transition:.35s;cursor:pointer;position:relative;overflow:hidden}
.imp::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--purple),var(--pink),var(--green));opacity:0;transition:.4s}
.imp:hover{transform:translateY(-4px);border-color:var(--blue);background:rgba(0,212,255,.04);box-shadow:0 15px 40px rgba(0,212,255,.15)}
.imp:hover::before{opacity:1}
.imp.drag{border-color:var(--green);background:rgba(0,255,136,.08);transform:scale(1.02)}
.imp-in{display:grid;grid-template-columns:auto 1fr auto;gap:22px;align-items:center}
.imp-ic{width:60px;height:60px;border-radius:16px;background:linear-gradient(135deg,rgba(0,212,255,.2),rgba(123,47,255,.15));display:flex;align-items:center;justify-content:center;font-size:1.8rem}
.imp-t h4{font-family:'Orbitron';font-size:1rem;font-weight:800;color:var(--blue);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px}
.imp-t p{color:var(--muted);font-size:.75rem}
.imp-t .fname{margin-top:6px;font-size:.72rem;font-weight:700;color:var(--green);font-family:'Orbitron'}
.imp-t .fname.err{color:var(--red)}
.imp-btns{display:flex;flex-direction:column;gap:8px}
.btn{padding:10px 18px;border-radius:10px;border:1px solid var(--border);background:var(--glass);color:var(--text);cursor:pointer;font-family:'Inter';font-size:.68rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;transition:.25s;white-space:nowrap}
.btn:hover{transform:translateY(-2px);border-color:var(--blue)}
.btn-pri{background:linear-gradient(135deg,var(--purple),var(--blue));border:none;color:#fff;box-shadow:0 4px 12px rgba(123,47,255,.3)}
.btn-warn{background:linear-gradient(135deg,var(--orange),var(--red));border:none;color:#fff}
input[type=file]{display:none}
.toggle-bar{display:flex;justify-content:center;margin:30px 0 10px;flex-wrap:wrap;gap:14px}
.toggle-btn{padding:16px 32px;border-radius:16px;border:2px solid rgba(0,212,255,.3);background:linear-gradient(135deg,rgba(0,212,255,.08),rgba(123,47,255,.08));color:#fff;cursor:pointer;font-family:'Orbitron';font-size:.85rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;transition:.35s;display:flex;align-items:center;gap:14px;position:relative;overflow:hidden;backdrop-filter:blur(16px)}
.toggle-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(0,212,255,.2),transparent);transition:.6s}
.toggle-btn:hover{transform:translateY(-3px);border-color:var(--blue);box-shadow:0 12px 40px rgba(0,212,255,.25);background:linear-gradient(135deg,rgba(0,212,255,.15),rgba(123,47,255,.15))}
.toggle-btn:hover::before{left:100%}
.toggle-btn.active{background:linear-gradient(135deg,var(--purple),var(--blue));border-color:transparent;box-shadow:0 8px 30px rgba(123,47,255,.4)}
.toggle-btn.teams{border-color:rgba(0,255,136,.3);background:linear-gradient(135deg,rgba(0,255,136,.08),rgba(0,212,255,.08))}
.toggle-btn.teams:hover{border-color:var(--green);box-shadow:0 12px 40px rgba(0,255,136,.25);background:linear-gradient(135deg,rgba(0,255,136,.15),rgba(0,212,255,.15))}
.toggle-btn.teams.active{background:linear-gradient(135deg,var(--green),var(--blue));box-shadow:0 8px 30px rgba(0,255,136,.4)}
.toggle-btn .tg-ic{font-size:1.4rem;transition:.35s}
.toggle-btn.active .tg-ic{transform:rotate(180deg)}
.toggle-btn .tg-badge{background:rgba(255,255,255,.15);padding:3px 10px;border-radius:20px;font-size:.65rem;font-weight:700}
.toggle-btn.active .tg-badge{background:rgba(0,0,0,.25)}
.extra-section{display:none;animation:fadeIn .6s ease-out}
.extra-section.show{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}
.kpi3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:25px 0}
.kpi-c{background:var(--glass);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:20px;padding:24px;position:relative;overflow:hidden;transition:.35s}
.kpi-c::before{content:'';position:absolute;top:0;left:0;right:0;height:4px}
.kpi-c:nth-child(1)::before{background:linear-gradient(90deg,var(--yellow),var(--orange))}
.kpi-c:nth-child(2)::before{background:linear-gradient(90deg,var(--pink),var(--orange))}
.kpi-c:nth-child(3)::before{background:linear-gradient(90deg,var(--green),var(--blue))}
.kpi-c:hover{transform:translateY(-6px);box-shadow:0 18px 50px rgba(0,212,255,.15)}
.kpi-c .ic{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:14px}
.kpi-c:nth-child(1) .ic{background:rgba(255,215,0,.15);color:var(--yellow)}
.kpi-c:nth-child(2) .ic{background:rgba(255,45,149,.15);color:var(--pink)}
.kpi-c:nth-child(3) .ic{background:rgba(0,255,136,.15);color:var(--green)}
.kpi-c .lab{font-size:.62rem;color:var(--muted);text-transform:uppercase;letter-spacing:2px;font-weight:700;margin-bottom:6px}
.kpi-c .val{font-family:'Orbitron';font-size:2.2rem;font-weight:900;line-height:1}
.kpi-c:nth-child(1) .val{color:var(--yellow)}
.kpi-c:nth-child(2) .val{color:var(--pink)}
.kpi-c:nth-child(3) .val{color:var(--green)}
.kpi-c .detail{font-size:.68rem;color:var(--muted);margin-top:8px;font-weight:500}
.alert{background:linear-gradient(135deg,rgba(255,51,102,.12),rgba(255,107,53,.08));border:2px solid rgba(255,51,102,.35);border-radius:20px;padding:22px;margin:20px 0;box-shadow:0 8px 30px rgba(255,51,102,.1)}
.alert-in{display:grid;grid-template-columns:auto 1fr auto;gap:22px;align-items:center}
.alert-ic{width:60px;height:60px;border-radius:16px;background:rgba(255,51,102,.2);display:flex;align-items:center;justify-content:center;font-size:1.8rem}
.alert-t h4{font-family:'Orbitron';font-size:.95rem;font-weight:800;color:var(--red);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px}
.alert-t p{color:var(--muted);font-size:.75rem}
.alert-v{text-align:right}
.alert-n{font-family:'Orbitron';font-size:2.2rem;font-weight:900;color:var(--red);line-height:1}
.alert-p{font-family:'Orbitron';font-size:1.1rem;font-weight:800;color:var(--yellow);margin-top:3px}
.sec{display:flex;align-items:center;gap:14px;margin:38px 0 16px;padding-bottom:12px;border-bottom:2px solid var(--border)}
.sec-n{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'Orbitron';font-size:1.2rem;font-weight:900;color:#fff}
.sec-i{width:46px;height:46px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.2rem}
.sec h2{font-family:'Orbitron';font-size:1.1rem;font-weight:800;letter-spacing:2px;text-transform:uppercase}
.tb{background:var(--glass);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:20px;overflow:hidden;margin-bottom:22px;position:relative}
.tb::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blue),var(--purple),transparent)}
.th{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px}
.th h3{font-family:'Orbitron';font-size:.85rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:10px}
table{width:100%;border-collapse:collapse}
th{background:rgba(0,212,255,.06);padding:11px 13px;text-align:left;font-size:.6rem;color:var(--blue);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;font-weight:700;border-bottom:1px solid var(--border)}
td{padding:10px 13px;font-size:.78rem;border-bottom:1px solid rgba(255,255,255,.03);white-space:nowrap;font-weight:500}
tr{transition:.2s}tr:hover{background:rgba(0,212,255,.04)}
td:first-child{font-weight:700;color:var(--blue)}
tr.tot{background:linear-gradient(90deg,rgba(123,47,255,.18),rgba(0,212,255,.12));border-top:2px solid var(--purple)}
tr.tot td{font-family:'Orbitron';font-weight:800;font-size:.75rem;color:var(--yellow)!important}
.st{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
.st-g{background:var(--green);box-shadow:0 0 10px var(--green)}
.st-y{background:var(--yellow);box-shadow:0 0 10px var(--yellow)}
.st-r{background:var(--red);box-shadow:0 0 10px var(--red)}
.bd{padding:4px 10px;border-radius:8px;font-family:'Orbitron';font-size:.66rem;font-weight:700;display:inline-block;min-width:44px;text-align:center}
.bg{background:rgba(0,255,136,.12);color:var(--green);border:1px solid rgba(0,255,136,.3)}
.bb{background:rgba(0,212,255,.12);color:var(--blue);border:1px solid rgba(0,212,255,.3)}
.by{background:rgba(255,215,0,.15);color:var(--yellow);border:1px solid rgba(255,215,0,.3)}
.bo{background:rgba(255,107,53,.15);color:var(--orange);border:1px solid rgba(255,107,53,.3)}
.br{background:rgba(255,51,102,.18);color:var(--red);border:1px solid rgba(255,51,102,.35)}
.bp{background:rgba(123,47,255,.15);color:var(--purple);border:1px solid rgba(123,47,255,.3)}
.pc{padding:5px 12px;border-radius:8px;font-family:'Orbitron';font-size:.7rem;font-weight:800;display:inline-block;min-width:55px;text-align:center}
.pc-red{background:rgba(255,51,102,.25);color:#ff4466;border:1px solid rgba(255,51,102,.4)}
.pc-org{background:rgba(255,107,53,.25);color:#ff8844;border:1px solid rgba(255,107,53,.4)}
.pc-yel{background:rgba(255,215,0,.2);color:#ffdd44;border:1px solid rgba(255,215,0,.35)}
.pc-grn{background:rgba(0,255,136,.15);color:#44ffaa;border:1px solid rgba(0,255,136,.3)}
.cx{background:var(--glass);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:20px;padding:22px;position:relative;overflow:hidden}
.cx::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--purple),transparent)}
.ct{font-family:'Orbitron';font-size:.8rem;color:var(--muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:10px;font-weight:700}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:22px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:22px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:22px}
.hb{display:flex;flex-direction:column;gap:11px}
.hb-r{display:flex;align-items:center;gap:10px}
.hb-l{min-width:85px;font-size:.7rem;color:var(--muted);font-weight:700}
.hb-t{flex:1;height:26px;background:rgba(255,255,255,.04);border-radius:8px;overflow:hidden}
.hb-f{height:100%;border-radius:8px;display:flex;align-items:center;justify-content:flex-end;padding-right:10px;font-family:'Orbitron';font-size:.65rem;font-weight:800;color:#fff;transition:width 1.2s;position:relative;overflow:hidden}
.hb-f::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);animation:sh 3s infinite}
@keyframes sh{100%{left:200%}}
.bc{display:flex;align-items:flex-end;justify-content:space-around;gap:8px;padding:8px}
.bg2{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}
.bw{display:flex;align-items:flex-end;width:100%;justify-content:center}
.b{border-radius:7px 7px 0 0;min-height:4px;position:relative;transition:.4s;cursor:pointer}
.b:hover{filter:brightness(1.3)}
.bt{position:absolute;top:-26px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,.9);color:#fff;padding:3px 8px;border-radius:5px;font-family:'Orbitron';font-size:.65rem;font-weight:700;opacity:0;transition:.2s;pointer-events:none;white-space:nowrap}
.b:hover .bt{opacity:1}
.bl{font-size:.6rem;color:var(--muted);font-weight:700}
.mo-cell{font-family:'Orbitron';font-weight:700;font-size:.72rem;text-align:center;padding:8px 10px}
.mo-empty{color:rgba(255,255,255,.15)}

/* Performance cell colors - heat map */
.pf-cell{font-family:'Orbitron';font-weight:800;font-size:.75rem;text-align:center;padding:9px 10px;position:relative}
.pf-excellent{background:linear-gradient(90deg,rgba(0,255,136,.35),rgba(0,255,136,.15));color:#00ff88}
.pf-good{background:linear-gradient(90deg,rgba(0,255,136,.25),rgba(0,212,255,.1));color:#44ffaa}
.pf-average{background:linear-gradient(90deg,rgba(255,215,0,.25),rgba(255,215,0,.1));color:#ffdd44}
.pf-warning{background:linear-gradient(90deg,rgba(255,107,53,.28),rgba(255,107,53,.12));color:#ff8844}
.pf-critical{background:linear-gradient(90deg,rgba(255,51,102,.3),rgba(255,51,102,.15));color:#ff4466}

/* Insight cards */
.insight-card{background:var(--glass);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:16px;padding:18px;position:relative;overflow:hidden;transition:.3s}
.insight-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.insight-card:hover{transform:translateY(-4px)}
.ic-icon{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:10px}
.ic-lab{font-size:.6rem;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;font-weight:700;margin-bottom:5px}
.ic-val{font-family:'Orbitron';font-size:1.4rem;font-weight:900;line-height:1.1;margin-bottom:4px}
.ic-sub{font-size:.65rem;color:var(--muted);font-weight:500}

.ft{text-align:center;padding:28px;color:var(--muted);font-size:.68rem;letter-spacing:2px;border-top:1px solid var(--border);margin-top:35px}
.ft span{color:var(--purple);font-weight:800}
#toasts{position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;max-width:400px}
.toast{background:rgba(22,27,74,.97);backdrop-filter:blur(20px);border:1px solid var(--border);border-left:4px solid var(--blue);border-radius:12px;padding:14px 20px;min-width:280px;box-shadow:0 10px 40px rgba(0,0,0,.5);animation:slideIn .35s;font-size:.8rem}
.toast.ok{border-left-color:var(--green)}.toast.err{border-left-color:var(--red)}
.toast .tt{font-family:'Orbitron';font-weight:800;font-size:.72rem;margin-bottom:4px;text-transform:uppercase}
.toast.ok .tt{color:var(--green)}.toast.err .tt{color:var(--red)}
.toast .tb-txt{color:var(--muted);font-size:.75rem}
@keyframes slideIn{from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes flash{0%{background:rgba(0,255,136,.3)}100%{background:transparent}}
.flash{animation:flash 1s ease-out}

/* ================= THEME CHOOSER ================= */
.theme-picker{display:flex;justify-content:center;align-items:center;gap:6px;width:max-content;margin:18px auto 0;padding:5px;background:rgba(22,27,74,.75);border:1px solid var(--border);border-radius:14px;backdrop-filter:blur(18px);box-shadow:0 10px 28px rgba(0,0,0,.18)}
.theme-option{display:flex;align-items:center;gap:8px;padding:9px 14px;border:0;border-radius:10px;background:transparent;color:var(--muted);font-family:'Inter',sans-serif;font-size:.68rem;font-weight:800;letter-spacing:.8px;text-transform:uppercase;cursor:pointer;transition:.22s}
.theme-option:hover{color:var(--text);background:rgba(255,255,255,.06)}
.theme-option.active{color:#fff;background:linear-gradient(135deg,var(--purple),var(--blue));box-shadow:0 5px 16px rgba(0,212,255,.18)}
.theme-option .theme-icon{font-size:.9rem}

/* ================= LIGHT / MINIMAL TEMPLATE ================= */
html[data-theme="light"]{
 --bg:#f4f6f8;
 --blue:#2563eb;
 --purple:#4f46e5;
 --pink:#db2777;
 --green:#059669;
 --yellow:#b7791f;
 --orange:#d97706;
 --red:#dc2626;
 --text:#172033;
 --muted:#64748b;
 --border:#dfe5ec;
 --glass:#ffffff;
}
html[data-theme="light"] body{background:#f4f6f8;color:var(--text)}
html[data-theme="light"] .orb,html[data-theme="light"] .gridbg{display:none}
html[data-theme="light"] .w{max-width:1680px}
html[data-theme="light"] .hdr{padding-top:28px}
html[data-theme="light"] .hdr h1{font-family:'Inter',sans-serif;font-size:2.35rem;letter-spacing:-1.2px;background:none;-webkit-text-fill-color:var(--text);color:var(--text)}
html[data-theme="light"] .hdr .sub{letter-spacing:3px;color:#7b8798}
html[data-theme="light"] .live{background:#ecfdf5;border-color:#a7f3d0;color:#047857}
html[data-theme="light"] .dot{background:#10b981;box-shadow:0 0 0 4px rgba(16,185,129,.10)}
html[data-theme="light"] .theme-picker{background:#fff;border-color:#dfe5ec;box-shadow:0 8px 24px rgba(15,23,42,.08);backdrop-filter:none}
html[data-theme="light"] .theme-option{color:#64748b}
html[data-theme="light"] .theme-option:hover{color:#172033;background:#f1f5f9}
html[data-theme="light"] .theme-option.active{background:#172033;color:#fff;box-shadow:none}

html[data-theme="light"] .imp,
html[data-theme="light"] .kpi-c,
html[data-theme="light"] .tb,
html[data-theme="light"] .cx,
html[data-theme="light"] .insight-card{background:#fff;border-color:#dfe5ec;backdrop-filter:none;box-shadow:0 7px 22px rgba(15,23,42,.055)}
html[data-theme="light"] .imp{border-style:dashed}
html[data-theme="light"] .imp::before,html[data-theme="light"] .tb::before,html[data-theme="light"] .cx::before{display:none}
html[data-theme="light"] .imp:hover{background:#fff;border-color:#2563eb;box-shadow:0 12px 30px rgba(37,99,235,.10)}
html[data-theme="light"] .imp.drag{background:#ecfdf5;border-color:#059669}
html[data-theme="light"] .imp-ic{background:#eff6ff;color:#2563eb}
html[data-theme="light"] .imp-t h4{font-family:'Inter',sans-serif;color:#1d4ed8;letter-spacing:.6px}
html[data-theme="light"] .btn{background:#fff;color:#334155;border-color:#d7dee7;box-shadow:none}
html[data-theme="light"] .btn:hover{border-color:#94a3b8;background:#f8fafc}
html[data-theme="light"] .btn-pri{background:#172033;color:#fff;border-color:#172033}
html[data-theme="light"] .btn-pri:hover{background:#263247}
html[data-theme="light"] .btn-warn{background:#fff7ed;color:#c2410c;border:1px solid #fed7aa}
html[data-theme="light"] .btn-warn:hover{background:#ffedd5;border-color:#fdba74}

html[data-theme="light"] .kpi-c{border-radius:16px}
html[data-theme="light"] .kpi-c::before{height:3px;opacity:.85}
html[data-theme="light"] .kpi-c:hover{box-shadow:0 12px 30px rgba(15,23,42,.09)}
html[data-theme="light"] .kpi-c .lab{letter-spacing:1.2px}
html[data-theme="light"] .kpi-c .val{font-family:'Inter',sans-serif;color:#172033!important;letter-spacing:-1px}
html[data-theme="light"] .alert{background:#fff;border:1px solid #fecaca;box-shadow:0 7px 22px rgba(15,23,42,.045);border-radius:16px}
html[data-theme="light"] .alert-ic{background:#fef2f2}
html[data-theme="light"] .alert-t h4,html[data-theme="light"] .alert-n{font-family:'Inter',sans-serif;color:#b91c1c}
html[data-theme="light"] .alert-p{font-family:'Inter',sans-serif;color:#b45309}

html[data-theme="light"] .sec{border-bottom-color:#dfe5ec}
html[data-theme="light"] .sec h2{font-family:'Inter',sans-serif;letter-spacing:.5px;color:#172033!important}
html[data-theme="light"] .sec-n{font-family:'Inter',sans-serif;border-radius:10px}
html[data-theme="light"] .sec-i{background:#f1f5f9!important}
html[data-theme="light"] .tb,html[data-theme="light"] .cx{border-radius:16px}
html[data-theme="light"] .th{border-bottom-color:#e7ebf0}
html[data-theme="light"] .th h3,html[data-theme="light"] .ct{font-family:'Inter',sans-serif;letter-spacing:.7px;color:#475569!important}
html[data-theme="light"] th{background:#f7f9fb;color:#475569;border-bottom-color:#dfe5ec;letter-spacing:.8px}
html[data-theme="light"] td{border-bottom-color:#edf0f3;color:#334155}
html[data-theme="light"] tr:hover{background:#f8fafc}
html[data-theme="light"] td:first-child{color:#1d4ed8}
html[data-theme="light"] tr.tot{background:#eef4ff;border-top-color:#bfdbfe}
html[data-theme="light"] tr.tot td{font-family:'Inter',sans-serif;color:#1e3a8a!important}
html[data-theme="light"] .hb-t{background:#edf1f5}
html[data-theme="light"] .hb-l,html[data-theme="light"] .bl{color:#64748b}
html[data-theme="light"] .bt{background:#172033}
html[data-theme="light"] .mo-empty{color:#cbd5e1}

html[data-theme="light"] .toggle-btn{background:#fff;color:#334155;border:1px solid #dfe5ec;box-shadow:0 6px 18px rgba(15,23,42,.05);backdrop-filter:none;border-radius:13px}
html[data-theme="light"] .toggle-btn::before{display:none}
html[data-theme="light"] .toggle-btn:hover{background:#f8fafc;border-color:#94a3b8;box-shadow:0 9px 22px rgba(15,23,42,.08)}
html[data-theme="light"] .toggle-btn.active,html[data-theme="light"] .toggle-btn.teams.active{background:#172033;color:#fff;border-color:#172033;box-shadow:none}
html[data-theme="light"] .toggle-btn.teams{background:#fff;border-color:#dfe5ec}
html[data-theme="light"] .toggle-btn .tg-badge{background:#f1f5f9;color:#64748b}
html[data-theme="light"] .toggle-btn.active .tg-badge{background:rgba(255,255,255,.14);color:#fff}

html[data-theme="light"] .pf-excellent{background:#dcfce7;color:#047857}
html[data-theme="light"] .pf-good{background:#e0f2fe;color:#0369a1}
html[data-theme="light"] .pf-average{background:#fef3c7;color:#92400e}
html[data-theme="light"] .pf-warning{background:#ffedd5;color:#c2410c}
html[data-theme="light"] .pf-critical{background:#fee2e2;color:#b91c1c}
html[data-theme="light"] .toast{background:#fff;border-color:#dfe5ec;box-shadow:0 14px 35px rgba(15,23,42,.14)}
html[data-theme="light"] .ft{border-top-color:#dfe5ec}
html[data-theme="light"] ::-webkit-scrollbar-track{background:#eef2f6}
html[data-theme="light"] ::-webkit-scrollbar-thumb{background:#aab5c3}

/* Dynamic cards created by JavaScript */
html[data-theme="light"] [style*="background:rgba(255,255,255,.02)"]{background:#f8fafc!important}
html[data-theme="light"] [style*="background:rgba(255,255,255,.03)"]{background:#f1f5f9!important}
html[data-theme="light"] [style*="background:rgba(255,255,255,.04)"]{background:#e9eef4!important}
html[data-theme="light"] [style*="background:rgba(255,255,255,.05)"]{background:#e5eaf0!important}
html[data-theme="light"] [style*="border:1px solid rgba(255,255,255,.05)"],
html[data-theme="light"] [style*="border:1px solid rgba(255,255,255,.06)"]{border-color:#e2e8f0!important}

@media(max-width:700px){
 .theme-picker{width:100%;max-width:340px}
 .theme-option{flex:1;justify-content:center}
 html[data-theme="light"] .hdr h1{font-size:1.75rem}
}

@media(max-width:1200px){.g4{grid-template-columns:repeat(2,1fr)}}
@media(max-width:1100px){.kpi3,.g2,.g3{grid-template-columns:1fr}.alert-in,.imp-in{grid-template-columns:1fr;text-align:center}.alert-v{text-align:center}.imp-btns{flex-direction:row;justify-content:center}}
::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--purple);border-radius:10px}
</style>
</head>
<body>
<div class="orb"></div><div class="orb"></div><div class="orb"></div>
<div class="gridbg"></div>
<div id="toasts"></div>
<div class="w">
<div class="hdr">
<h1>⚡ NEW CONNECTIONS DASHBOARD</h1>
<p class="sub">Coordinator • Contractor • Operation</p>
<div class="live"><div class="dot"></div><span id="lt">Live</span></div>
<div class="theme-picker" role="group" aria-label="Zgjidh dizajnin">
<button class="theme-option" type="button" data-theme-option="default" onclick="setTheme('default')" aria-pressed="true"><span class="theme-icon">🌙</span>Default</button>
<button class="theme-option" type="button" data-theme-option="light" onclick="setTheme('light')" aria-pressed="false"><span class="theme-icon">☀️</span>Light</button>
</div>
</div>

<div class="imp" id="dropZone"><div class="imp-in"><div class="imp-ic">📊</div><div class="imp-t"><h4>Ngarko Excel-in Ditor</h4><p>6 tabelat ne Sheet 1: Coordinator, Poles, Operation, Muajt, Tarifat, Teams Performance</p><div class="fname" id="fname"></div></div><div class="imp-btns"><button class="btn btn-pri" onclick="event.stopPropagation();document.getElementById('fileIn').click()">📂 Zgjidh Excel</button><button class="btn btn-warn" onclick="event.stopPropagation();resetData()">🔄 Reset</button></div></div><input type="file" id="fileIn" accept=".xlsx,.xls,.csv"></div>

<div class="kpi3">
<div class="kpi-c"><div class="ic">📋</div><div class="lab">Coordinator — Simple NC</div><div class="val" id="kpi1">1,207</div><div class="detail" id="kpi1d">Amper/Platon: 917 | RL: 290</div></div>
<div class="kpi-c"><div class="ic">👷‍♂️</div><div class="lab">Poles — Contractor</div><div class="val" id="kpi2">1,363</div><div class="detail" id="kpi2d">Eng: 22 | Sket: 53 | Contr: 83 | PMS: 1,205</div></div>
<div class="kpi-c"><div class="ic">⚙️</div><div class="lab">Requests in Operation</div><div class="val" id="kpi3">920</div><div class="detail" id="kpi3d">Amper: 706 | RL: 214</div></div>
</div>

<div class="alert"><div class="alert-in"><div class="alert-ic">⚠️</div><div class="alert-t"><h4 id="alertTitle">Top 3 Coordinator</h4><p>3 distriktet me akumulim me te larte — kerkon vemendje</p></div><div class="alert-v"><div class="alert-n" id="alertNum">749</div><div class="alert-p" id="alertPct">62.05%</div><div style="font-size:.58rem;color:var(--muted);margin-top:2px">nga totali <span id="alertTot">1,207</span></div></div></div></div>

<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--yellow),var(--orange))">1</div><div class="sec-i" style="background:rgba(255,215,0,.15);color:var(--yellow)">📋</div><h2 style="color:var(--yellow)">COORDINATOR POSITION — SIMPLE NC</h2></div>
<div class="tb"><div class="th"><h3 style="color:var(--yellow)">📍 Coordinator</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--yellow);font-weight:800">Total: <span id="cTot">1,207</span></span></div><div style="overflow-x:auto"><table><thead><tr><th>District</th><th>Amper/Platon</th><th>RL</th><th>Total</th><th>%</th><th>Distribution</th></tr></thead><tbody id="coordBody"></tbody></table></div></div>
<div class="g2">
<div class="cx"><div class="ct"><span>🎯</span> % Coordinator</div><div class="hb" id="coordPctBar"></div></div>
<div class="cx"><div class="ct"><span>⚖️</span> Amper vs RL</div><div class="bc" id="coordCmpChart" style="height:220px"></div><div style="display:flex;justify-content:center;gap:22px;margin-top:10px"><div style="display:flex;align-items:center;gap:6px;font-size:.65rem"><div style="width:10px;height:10px;border-radius:3px;background:linear-gradient(180deg,#00d4ff,#7b2fff)"></div>Amper/Platon</div><div style="display:flex;align-items:center;gap:6px;font-size:.65rem"><div style="width:10px;height:10px;border-radius:3px;background:linear-gradient(180deg,#ff2d95,#ff3366)"></div>RL</div></div></div>
</div>

<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--pink),var(--orange))">2</div><div class="sec-i" style="background:rgba(255,45,149,.15);color:var(--pink)">👷‍♂️</div><h2 style="color:var(--pink)">POLES — CONTRACTOR</h2></div>
<div class="tb"><div class="th"><h3 style="color:var(--pink)">🔧 Contractor</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--pink);font-weight:800">Total: <span id="pTot">1,363</span></span></div><div style="overflow-x:auto"><table><thead><tr><th>District</th><th>Engineer</th><th>Sketching</th><th>Contractor</th><th>PMS</th><th>Total</th><th>%</th></tr></thead><tbody id="polesBody"></tbody></table></div></div>
<div class="g2">
<div class="cx"><div class="ct"><span>📊</span> Total Contractor</div><div class="hb" id="polesTotBar"></div></div>
<div class="cx"><div class="ct"><span>🎯</span> % Contractor</div><div class="hb" id="polesPctBar"></div></div>
</div>
<div class="cx" style="margin-bottom:22px"><div class="ct"><span>🧱</span> PMS vs Engineer+Sketching+Contractor</div><div id="polesSplit" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px"></div></div>

<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--green),var(--blue))">3</div><div class="sec-i" style="background:rgba(0,255,136,.15);color:var(--green)">⚙️</div><h2 style="color:var(--green)">REQUESTS IN OPERATION</h2></div>
<div class="tb"><div class="th"><h3 style="color:var(--green)">⚙️ Operation</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--green);font-weight:800">Total: <span id="oTot">920</span></span></div><div style="overflow-x:auto"><table><thead><tr><th>District</th><th>Amper</th><th>RL</th><th>Total</th><th>%</th></tr></thead><tbody id="opBody"></tbody></table></div></div>

<!-- TOGGLE BUTTONS -->
<div class="toggle-bar">
<button class="toggle-btn" id="toggleExtra" onclick="toggleExtra()">
<span class="tg-ic">📊</span>
<span id="tgLabel">Shfaq Lidhjet e Reja & Grupet Tarifore</span>
<span class="tg-badge" id="tgBadge">2026</span>
</button>
<button class="toggle-btn teams" id="toggleTeams" onclick="toggleTeams()">
<span class="tg-ic">🏆</span>
<span id="tgLabelTeams">Shfaq Performancen e Ekipeve - Teams Report</span>
<span class="tg-badge">Teams</span>
</button>
</div>

<div class="extra-section" id="extraSection">
<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--blue),var(--purple))">4</div><div class="sec-i" style="background:rgba(0,212,255,.15);color:var(--blue)">📅</div><h2 style="color:var(--blue)">LIDHJET E REJA SIPAS MUAJVE</h2></div>
<div class="tb"><div class="th"><h3 style="color:var(--blue)">📆 Rastet e realizuara si lidhje e re sipas muajve dhe distrikteve</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--blue);font-weight:800">Grand Total: <span id="mTot">14,698</span></span></div><div style="overflow-x:auto"><table><thead id="monthsHead"></thead><tbody id="monthsBody"></tbody></table></div></div>

<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--purple),var(--pink))">5</div><div class="sec-i" style="background:rgba(123,47,255,.15);color:var(--purple)">💼</div><h2 style="color:var(--purple)">SIPAS GRUPEVE TARIFORE</h2></div>
<div class="tb"><div class="th"><h3 style="color:var(--purple)">💰 Grupet tarifore te regjistruara si lidhje e re sipas muajve</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--purple);font-weight:800">Grand Total: <span id="tTot">14,698</span></span></div><div style="overflow-x:auto"><table><thead id="tariffHead"></thead><tbody id="tariffBody"></tbody></table></div></div>
</div>

<!-- TEAMS PERFORMANCE SECTION -->
<div class="extra-section" id="teamsSection">
<div class="sec"><div class="sec-n" style="background:linear-gradient(135deg,var(--green),var(--blue))">6</div><div class="sec-i" style="background:rgba(0,255,136,.15);color:var(--green)">🏆</div><h2 style="color:var(--green)">TEAMS PERFORMANCE — RAPORTI I EKIPEVE</h2></div>

<!-- Insight cards - 4 karta me analiza -->
<div class="g4" id="teamsInsights"></div>

<!-- Tabela e performances -->
<div class="tb"><div class="th"><h3 style="color:var(--green)">📈 Performance Mujore per Distrikt (%)</h3><span style="font-family:Orbitron;font-size:.7rem;color:var(--green);font-weight:800">Avg: <span id="teamsAvg">0</span>%</span></div><div style="overflow-x:auto"><table><thead id="teamsHead"></thead><tbody id="teamsBody"></tbody></table></div></div>

<!-- Analiza me grafike -->
<div class="g2">
<div class="cx"><div class="ct"><span>🏅</span> Ranking Mesatar sipas Distrikteve</div><div class="hb" id="teamsRankBar"></div></div>
<div class="cx"><div class="ct"><span>📊</span> Trendi Mujor - Totali</div><div class="bc" id="teamsMonthChart" style="height:230px"></div></div>
</div>

<!-- Progresi mujor per cdo distrikt -->
<div class="cx" style="margin-bottom:22px"><div class="ct"><span>🎯</span> Progresi Mujor per Distrikt</div><div id="teamsProgress" style="display:flex;flex-direction:column;gap:14px"></div></div>
</div>

<div class="ft">⚡ Coordinator: <span id="ftC">1,207</span> • Contractor: <span id="ftP">1,363</span> • Operation: <span id="ftO">920</span> • <span>KEDS © 2026</span></div>
</div>

<script>
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const AGENCY_CODES=['DFE','DGJ','DGL','DMI','DPE','DPR','DPZ'];
const TARIFF_PATTERN=/^\d+\s*[\/\-]\s*\d+$/;

const DEFAULT_COORD=[{d:"Ferizaj",amper:98,rl:21},{d:"Gjakova",amper:106,rl:9},{d:"Gjilan",amper:163,rl:10},{d:"Mitrovice",amper:103,rl:14},{d:"Peje",amper:53,rl:0},{d:"Prishtine",amper:135,rl:27},{d:"Prizren",amper:259,rl:209}];
const DEFAULT_POLES=[{d:"Ferizaj",eng:6,sket:18,contr:22,pms:258},{d:"Gjakova",eng:0,sket:2,contr:6,pms:51},{d:"Gjilan",eng:4,sket:4,contr:0,pms:216},{d:"Mitrovice",eng:3,sket:3,contr:7,pms:75},{d:"Peje",eng:4,sket:8,contr:12,pms:256},{d:"Prishtine",eng:5,sket:15,contr:27,pms:269},{d:"Prizren",eng:0,sket:3,contr:9,pms:80}];
const DEFAULT_OP=[{d:"Ferizaj",amper:180,rl:9},{d:"Gjakova",amper:53,rl:21},{d:"Gjilan",amper:54,rl:1},{d:"Mitrovice",amper:14,rl:1},{d:"Peje",amper:102,rl:45},{d:"Prishtine",amper:229,rl:108},{d:"Prizren",amper:74,rl:29}];
const DEFAULT_MONTHS=[{d:'DFE',vals:[206,545,728,441,340,312,0,0,0,0,0,0]},{d:'DGJ',vals:[248,118,143,145,269,110,0,0,0,0,0,0]},{d:'DGL',vals:[246,214,123,169,293,203,0,0,0,0,0,0]},{d:'DMI',vals:[162,277,552,224,187,239,0,0,0,0,0,0]},{d:'DPE',vals:[242,221,337,202,142,257,0,0,0,0,0,0]},{d:'DPR',vals:[823,569,941,645,645,1150,0,0,0,0,0,0]},{d:'DPZ',vals:[568,448,255,146,206,407,0,0,0,0,0,0]}];
const DEFAULT_TARIFFS=[{d:'1/2',vals:[2,0,0,0,0,0,0,0,0,0,0,0]},{d:'1/3',vals:[0,0,0,1,2,2,0,0,0,0,0,0]},{d:'4/01',vals:[0,0,0,0,0,0,0,0,0,0,0,0]},{d:'4/02',vals:[2125,2041,2703,1665,1664,2238,0,0,0,0,0,0]},{d:'6/6',vals:[22,10,5,13,12,10,0,0,0,0,0,0]},{d:'7/02',vals:[325,334,358,282,391,420,0,0,0,0,0,0]},{d:'8/01',vals:[21,7,13,11,13,8,0,0,0,0,0,0]}];
// Teams: 12 vlera per muaj (Jan-Dec), ne default vetem Apr-Jul kane data si ne foto
const DEFAULT_TEAMS=[
 {d:'DPR',vals:[0,0,0,86.84,75.12,81.74,73.90,0,0,0,0,0]},
 {d:'DFE',vals:[0,0,0,101.55,76.57,98.66,81.35,0,0,0,0,0]},
 {d:'DPZ',vals:[0,0,0,99.61,99.45,120.34,107.91,0,0,0,0,0]},
 {d:'DPE',vals:[0,0,0,64.23,65.91,71.14,86.65,0,0,0,0,0]},
 {d:'DGL',vals:[0,0,0,93.19,83.10,79.73,78.94,0,0,0,0,0]},
 {d:'DMI',vals:[0,0,0,81.76,75.48,92.60,93.82,0,0,0,0,0]},
 {d:'DGJ',vals:[0,0,0,96.85,88.14,100.97,102.18,0,0,0,0,0]}
];

let STATE={coord:JSON.parse(JSON.stringify(DEFAULT_COORD)),poles:JSON.parse(JSON.stringify(DEFAULT_POLES)),op:JSON.parse(JSON.stringify(DEFAULT_OP)),months:JSON.parse(JSON.stringify(DEFAULT_MONTHS)),tariffs:JSON.parse(JSON.stringify(DEFAULT_TARIFFS)),teams:JSON.parse(JSON.stringify(DEFAULT_TEAMS)),lastUpdate:null,extraOpen:false,teamsOpen:false};

const DIST_MAP={'ferizaj':'Ferizaj','gjakova':'Gjakova','gjakove':'Gjakova','gjilan':'Gjilan','mitrovice':'Mitrovice','mitrovica':'Mitrovice','peje':'Peje','peja':'Peje','prishtine':'Prishtine','prishtina':'Prishtine','prizren':'Prizren','dfe':'Ferizaj','dgj':'Gjakova','dgl':'Gjilan','dmi':'Mitrovice','dpe':'Peje','dpr':'Prishtine','dpz':'Prizren'};
const AGENCY_TO_NAME={DFE:'Ferizaj',DGJ:'Gjakova',DGL:'Gjilan',DMI:'Mitrovice',DPE:'Peje',DPR:'Prishtine',DPZ:'Prizren'};
function mapDist(v){if(!v)return null;return DIST_MAP[String(v).toLowerCase().trim()]||null}
function num(v){if(v==null||v==='')return 0;if(typeof v==='number')return v;let s=String(v).trim().replace(/%|,/g,'');if(s==='—'||s==='-')return 0;let n=parseFloat(s);return isNaN(n)?0:n}
function fmt(n){return Number(n).toLocaleString('en-US')}
function fmtF(n){return Number(n).toFixed(2)}
function toast(t,m,type='ok'){const c=document.getElementById('toasts');const d=document.createElement('div');d.className='toast '+type;d.innerHTML=`<div class="tt">${t}</div><div class="tb-txt">${m}</div>`;c.appendChild(d);setTimeout(()=>{d.style.opacity='0';setTimeout(()=>d.remove(),350)},5e3)}
function save(){localStorage.setItem('nc_v14',JSON.stringify(STATE))}
function load(){try{let s=localStorage.getItem('nc_v14');if(s){let p=JSON.parse(s);if(p.coord)STATE.coord=p.coord;if(p.poles)STATE.poles=p.poles;if(p.op)STATE.op=p.op;if(p.months)STATE.months=p.months;if(p.tariffs)STATE.tariffs=p.tariffs;if(p.teams)STATE.teams=p.teams;if(p.lastUpdate)STATE.lastUpdate=p.lastUpdate;if(p.extraOpen)STATE.extraOpen=p.extraOpen;if(p.teamsOpen)STATE.teamsOpen=p.teamsOpen}}catch(e){}}
load();

const THEME_KEY='nc_dashboard_theme';
function setTheme(theme,showToast=true){
 const selected=theme==='light'?'light':'default';
 document.documentElement.dataset.theme=selected;
 localStorage.setItem(THEME_KEY,selected);
 document.querySelectorAll('[data-theme-option]').forEach(btn=>{
  const active=btn.dataset.themeOption===selected;
  btn.classList.toggle('active',active);
  btn.setAttribute('aria-pressed',String(active));
 });
 if(showToast&&document.getElementById('toasts')){
  toast('Dizajni u ndryshua',selected==='light'?'Light — i bardhë dhe minimalist':'Default — dizajni origjinal','ok');
 }
}
function initTheme(){
 const saved=localStorage.getItem(THEME_KEY);
 setTheme(saved==='light'?'light':'default',false);
}
initTheme();

function pctCls(v){return v>=20?'pc-red':v>=15?'pc-org':v>=10?'pc-yel':'pc-grn'}
function stCls(v){return v>=20?'st-r':v>=10?'st-y':'st-g'}
// Performance color logic (0=nuk ka, <70=critical, 70-84=warning, 85-94=average, 95-104=good, 105+=excellent)
function pfCls(v){if(v===0||v==null)return 'mo-empty';if(v>=105)return'pf-excellent';if(v>=95)return'pf-good';if(v>=85)return'pf-average';if(v>=70)return'pf-warning';return'pf-critical'}

function renderCoord(){
 let tot=STATE.coord.reduce((s,r)=>s+r.amper+r.rl,0),totA=STATE.coord.reduce((s,r)=>s+r.amper,0),totR=STATE.coord.reduce((s,r)=>s+r.rl,0);
 let maxT=Math.max(...STATE.coord.map(x=>x.amper+x.rl));
 let html='';STATE.coord.forEach(r=>{let t=r.amper+r.rl;let p=tot>0?t/tot*100:0;let w=maxT>0?t/maxT*100:0;let dColor=p>=20?'linear-gradient(90deg,var(--red),#ff0044)':p>=13?'linear-gradient(90deg,var(--purple),var(--pink))':p>=9?'linear-gradient(90deg,var(--yellow),var(--orange))':'linear-gradient(90deg,var(--green),var(--blue))';
  html+=`<tr><td><span class="st ${stCls(p)}"></span>${r.d}</td><td>${r.amper}</td><td>${r.rl}</td><td><span class="bd ${t>=400?'br':'by'}">${t}</span></td><td><span class="pc ${pctCls(p)}">${p.toFixed(2)}%</span></td><td><div style="flex:1;height:7px;background:rgba(255,255,255,.05);border-radius:10px;overflow:hidden"><div style="width:${w.toFixed(1)}%;height:100%;background:${dColor};border-radius:10px"></div></div></td></tr>`});
 html+=`<tr class="tot"><td>⚡ GRAND TOTAL</td><td>${totA}</td><td>${totR}</td><td>${fmt(tot)}</td><td>—</td><td>—</td></tr>`;
 document.getElementById('coordBody').innerHTML=html;document.getElementById('cTot').textContent=fmt(tot);
 let sorted=[...STATE.coord].map(r=>({d:r.d,t:r.amper+r.rl,p:tot>0?(r.amper+r.rl)/tot*100:0})).sort((a,b)=>b.p-a.p);let mp=Math.max(...sorted.map(s=>s.p),1);
 document.getElementById('coordPctBar').innerHTML=sorted.map(s=>{let bg=s.p>=20?'linear-gradient(90deg,#ff3366,#ff0055)':s.p>=13?'linear-gradient(90deg,#ffd700,#ff6b35)':'linear-gradient(90deg,#00ff88,#00d4ff)';return`<div class="hb-r"><div class="hb-l" style="${s.p>=20?'color:var(--red)':''}">${s.p>=20?'🔥 ':''}${s.d}</div><div class="hb-t"><div class="hb-f" style="width:${(s.p/mp*100).toFixed(1)}%;background:${bg}">${s.p.toFixed(2)}%</div></div></div>`}).join('');
 let mc=Math.max(...STATE.coord.map(r=>Math.max(r.amper,r.rl)),1);
 document.getElementById('coordCmpChart').innerHTML=STATE.coord.map(r=>`<div class="bg2"><div class="bw" style="height:180px;gap:3px;display:flex;align-items:flex-end;justify-content:center"><div class="b" style="height:${(r.amper/mc*100).toFixed(1)}%;background:linear-gradient(180deg,#00d4ff,#7b2fff);width:20px;min-height:3px"><div class="bt">${r.amper}</div></div><div class="b" style="height:${(r.rl/mc*100).toFixed(1)}%;background:linear-gradient(180deg,#ff2d95,#ff3366);width:20px;min-height:3px"><div class="bt">${r.rl}</div></div></div><div class="bl">${r.d.substring(0,3).toUpperCase()}</div></div>`).join('');
 return{tot,totA,totR}}

function renderPoles(){
 let tot=STATE.poles.reduce((s,r)=>s+r.eng+r.sket+r.contr+r.pms,0),totE=STATE.poles.reduce((s,r)=>s+r.eng,0),totS=STATE.poles.reduce((s,r)=>s+r.sket,0),totC=STATE.poles.reduce((s,r)=>s+r.contr,0),totP=STATE.poles.reduce((s,r)=>s+r.pms,0);
 let html='';STATE.poles.forEach(r=>{let t=r.eng+r.sket+r.contr+r.pms;let p=tot>0?t/tot*100:0;
  html+=`<tr><td><span class="st ${stCls(p)}"></span>${r.d}</td><td>${r.eng}</td><td><span class="bd ${r.sket>=15?'by':r.sket>=8?'bb':'bg'}">${r.sket}</span></td><td><span class="bd ${r.contr>=20?'bo':'bg'}">${r.contr}</span></td><td>${r.pms}</td><td><span class="bd ${p>=20?'br':p>=15?'bo':'bp'}">${t}</span></td><td><span class="pc ${pctCls(p)}">${p.toFixed(2)}%</span></td></tr>`});
 html+=`<tr class="tot"><td>⚡ GRAND TOTAL</td><td>${totE}</td><td>${totS}</td><td>${totC}</td><td>${fmt(totP)}</td><td>${fmt(tot)}</td><td>—</td></tr>`;
 document.getElementById('polesBody').innerHTML=html;document.getElementById('pTot').textContent=fmt(tot);
 let sorted=[...STATE.poles].map(r=>({d:r.d,t:r.eng+r.sket+r.contr+r.pms,p:tot>0?(r.eng+r.sket+r.contr+r.pms)/tot*100:0})).sort((a,b)=>b.t-a.t);let mx=sorted[0]?.t||1;
 let colors=['linear-gradient(90deg,#ff3366,#ff0055)','linear-gradient(90deg,#ff6b35,#ff2d95)','linear-gradient(90deg,#ffd700,#ff6b35)','linear-gradient(90deg,#7b2fff,#ff2d95)','linear-gradient(90deg,#00d4ff,#7b2fff)','linear-gradient(90deg,#00ff88,#00d4ff)','linear-gradient(90deg,#00ff88,#00d4ff)'];
 document.getElementById('polesTotBar').innerHTML=sorted.map((s,i)=>`<div class="hb-r"><div class="hb-l" style="${i===0?'color:var(--red)':''}">${i===0?'🔥 ':''}${s.d}</div><div class="hb-t"><div class="hb-f" style="width:${(s.t/mx*100).toFixed(1)}%;background:${colors[i]||colors[5]}">${s.t}</div></div></div>`).join('');
 let mp=sorted[0]?.p||1;
 document.getElementById('polesPctBar').innerHTML=sorted.map(s=>{let bg=s.p>=22?'linear-gradient(90deg,#ff3366,#ff0055)':s.p>=18?'linear-gradient(90deg,#ff6b35,#ff2d95)':s.p>=14?'linear-gradient(90deg,#ffd700,#ff6b35)':'linear-gradient(90deg,#00ff88,#00d4ff)';return`<div class="hb-r"><div class="hb-l" style="${s.p>=22?'color:var(--red)':s.p>=18?'color:var(--orange)':''}">${s.d}</div><div class="hb-t"><div class="hb-f" style="width:${(s.p/mp*100).toFixed(1)}%;background:${bg}">${s.p.toFixed(2)}%</div></div></div>`}).join('');
 document.getElementById('polesSplit').innerHTML=[{l:'PMS',v:totP,c:'var(--pink)'},{l:'Contractor',v:totC,c:'var(--blue)'},{l:'Sketching',v:totS,c:'var(--purple)'},{l:'Engineer',v:totE,c:'var(--green)'}].map(x=>`<div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:16px;text-align:center"><div style="font-size:.6rem;color:var(--muted);letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">${x.l}</div><div style="font-family:Orbitron;font-size:2rem;font-weight:900;color:${x.c}">${fmt(x.v)}</div><div style="font-size:.6rem;color:var(--muted);margin-top:3px">${tot>0?(x.v/tot*100).toFixed(1):0}%</div></div>`).join('');
 return{tot,totE,totS,totC,totP}}

function renderOp(){
 let tot=STATE.op.reduce((s,r)=>s+r.amper+r.rl,0),totA=STATE.op.reduce((s,r)=>s+r.amper,0),totR=STATE.op.reduce((s,r)=>s+r.rl,0);
 let sorted=[...STATE.op].map(r=>({...r,t:r.amper+r.rl,p:tot>0?(r.amper+r.rl)/tot*100:0})).sort((a,b)=>b.t-a.t);
 let html='';sorted.forEach(r=>{html+=`<tr><td><span class="st ${stCls(r.p)}"></span>${r.d}</td><td>${r.amper}</td><td>${r.rl}</td><td><span class="bd ${r.p>=30?'br':r.p>=18?'bo':r.p>=13?'by':'bg'}">${r.t}</span></td><td><span class="pc ${pctCls(r.p)}">${r.p.toFixed(2)}%</span></td></tr>`});
 html+=`<tr class="tot"><td>⚡ GRAND TOTAL</td><td>${totA}</td><td>${totR}</td><td>${fmt(tot)}</td><td>100%</td></tr>`;
 document.getElementById('opBody').innerHTML=html;document.getElementById('oTot').textContent=fmt(tot);
 return{tot,totA,totR}}

function renderMonths(){
 let head='<tr><th>Agency ID</th>';MONTHS.forEach(m=>head+=`<th style="text-align:center">${m}</th>`);head+='<th style="text-align:center">Grand Total</th></tr>';
 document.getElementById('monthsHead').innerHTML=head;
 let colTot=new Array(12).fill(0);let grand=0;let html='';
 STATE.months.forEach(r=>{let rt=r.vals.reduce((s,v)=>s+v,0);grand+=rt;
  html+=`<tr><td><span class="st st-g"></span>${r.d}</td>`;
  r.vals.forEach((v,i)=>{colTot[i]+=v;html+=`<td class="mo-cell ${v===0?'mo-empty':''}">${v===0?'—':fmt(v)}</td>`});
  html+=`<td class="mo-cell"><span class="bd by">${fmt(rt)}</span></td></tr>`});
 html+=`<tr class="tot"><td>⚡ GRAND TOTAL</td>`;
 colTot.forEach(v=>html+=`<td style="text-align:center">${v===0?'—':fmt(v)}</td>`);
 html+=`<td style="text-align:center">${fmt(grand)}</td></tr>`;
 document.getElementById('monthsBody').innerHTML=html;document.getElementById('mTot').textContent=fmt(grand);
}

function renderTariffs(){
 let head='<tr><th>Grupi Tarifor</th>';MONTHS.forEach(m=>head+=`<th style="text-align:center">${m}</th>`);head+='<th style="text-align:center">Grand Total</th></tr>';
 document.getElementById('tariffHead').innerHTML=head;
 let colTot=new Array(12).fill(0);let grand=0;let html='';
 STATE.tariffs.forEach(r=>{let rt=r.vals.reduce((s,v)=>s+v,0);grand+=rt;
  html+=`<tr><td><span class="st st-g"></span>${r.d}</td>`;
  r.vals.forEach((v,i)=>{colTot[i]+=v;html+=`<td class="mo-cell ${v===0?'mo-empty':''}">${v===0?'—':fmt(v)}</td>`});
  html+=`<td class="mo-cell"><span class="bd bp">${fmt(rt)}</span></td></tr>`});
 html+=`<tr class="tot"><td>⚡ GRAND TOTAL</td>`;
 colTot.forEach(v=>html+=`<td style="text-align:center">${v===0?'—':fmt(v)}</td>`);
 html+=`<td style="text-align:center">${fmt(grand)}</td></tr>`;
 document.getElementById('tariffBody').innerHTML=html;document.getElementById('tTot').textContent=fmt(grand);
}

// ============ TEAMS PERFORMANCE RENDER ============
function renderTeams(){
 // Header
 let head='<tr><th>District</th>';MONTHS.forEach(m=>head+=`<th style="text-align:center">${m}</th>`);head+='<th style="text-align:center">Mesatarja</th></tr>';
 document.getElementById('teamsHead').innerHTML=head;
 
 // Body me heat colors
 let colSums=new Array(12).fill(0);let colCounts=new Array(12).fill(0);let allAvgs=[];
 let html='';
 STATE.teams.forEach(r=>{
  let sum=0,cnt=0;
  r.vals.forEach((v,i)=>{if(v>0){sum+=v;cnt++;colSums[i]+=v;colCounts[i]++}});
  let avg=cnt>0?sum/cnt:0;
  allAvgs.push({d:r.d,avg,name:AGENCY_TO_NAME[r.d]||r.d,vals:r.vals});
  html+=`<tr><td><span class="st st-g"></span>${r.d}</td>`;
  r.vals.forEach((v,i)=>{html+=`<td class="pf-cell ${pfCls(v)}">${v===0?'—':fmtF(v)}</td>`});
  html+=`<td class="pf-cell ${pfCls(avg)}" style="font-weight:900">${avg===0?'—':fmtF(avg)}</td></tr>`;
 });
 // Total row - mesatarja e cdo muaji
 let totalRow=`<tr class="tot"><td>⚡ TOTAL / MESATARJA</td>`;
 let allSum=0,allCnt=0;
 colSums.forEach((s,i)=>{let m=colCounts[i]>0?s/colCounts[i]:0;if(m>0){allSum+=m;allCnt++}totalRow+=`<td style="text-align:center">${m===0?'—':fmtF(m)}</td>`});
 let overallAvg=allCnt>0?allSum/allCnt:0;
 totalRow+=`<td style="text-align:center;color:var(--yellow)!important">${fmtF(overallAvg)}</td></tr>`;
 html+=totalRow;
 document.getElementById('teamsBody').innerHTML=html;
 document.getElementById('teamsAvg').textContent=fmtF(overallAvg);
 
 // ============ INSIGHTS - 4 karta ============
 let insights='';
 // 1. TOP PERFORMER (avg me e larte)
 let topPerf=[...allAvgs].filter(x=>x.avg>0).sort((a,b)=>b.avg-a.avg)[0];
 if(topPerf){
  insights+=`<div class="insight-card" style="border-color:rgba(0,255,136,.35)"><div class="ic-icon" style="background:rgba(0,255,136,.15);color:var(--green)">🏆</div><div class="ic-lab">Top Performer</div><div class="ic-val" style="color:var(--green)">${topPerf.d}</div><div class="ic-sub">${topPerf.name} — ${fmtF(topPerf.avg)}% mesatare</div><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green),var(--blue))"></div></div>`;
 }
 // 2. LOWEST PERFORMER
 let lowPerf=[...allAvgs].filter(x=>x.avg>0).sort((a,b)=>a.avg-b.avg)[0];
 if(lowPerf){
  insights+=`<div class="insight-card" style="border-color:rgba(255,51,102,.35)"><div class="ic-icon" style="background:rgba(255,51,102,.15);color:var(--red)">⚠️</div><div class="ic-lab">Kerkon Vemendje</div><div class="ic-val" style="color:var(--red)">${lowPerf.d}</div><div class="ic-sub">${lowPerf.name} — ${fmtF(lowPerf.avg)}% mesatare</div><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--red),var(--orange))"></div></div>`;
 }
 // 3. BEST MONTH (muaji me mesataren me te larte)
 let bestMonth={idx:-1,val:0};
 colSums.forEach((s,i)=>{let m=colCounts[i]>0?s/colCounts[i]:0;if(m>bestMonth.val){bestMonth={idx:i,val:m}}});
 if(bestMonth.idx>=0){
  insights+=`<div class="insight-card" style="border-color:rgba(255,215,0,.35)"><div class="ic-icon" style="background:rgba(255,215,0,.15);color:var(--yellow)">📅</div><div class="ic-lab">Muaji me i Mire</div><div class="ic-val" style="color:var(--yellow)">${MONTHS[bestMonth.idx]}</div><div class="ic-sub">Mesatare: ${fmtF(bestMonth.val)}%</div><div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--yellow),var(--orange))"></div></div>`;
 }
 // 4. OVERALL AVG + numri i ekipeve nen 85%
 let underPerf=allAvgs.filter(x=>x.avg>0&&x.avg<85).length;
 let overallColor=overallAvg>=95?'var(--green)':overallAvg>=85?'var(--yellow)':'var(--orange)';
 let overallGradient=overallAvg>=95?'linear-gradient(90deg,var(--green),var(--blue))':overallAvg>=85?'linear-gradient(90deg,var(--yellow),var(--orange))':'linear-gradient(90deg,var(--orange),var(--red))';
 insights+=`<div class="insight-card" style="border-color:rgba(0,212,255,.35)"><div class="ic-icon" style="background:rgba(0,212,255,.15);color:var(--blue)">📊</div><div class="ic-lab">Mesatarja Totale</div><div class="ic-val" style="color:${overallColor}">${fmtF(overallAvg)}%</div><div class="ic-sub">${underPerf} ekipe nen 85%</div><div style="position:absolute;top:0;left:0;right:0;height:3px;background:${overallGradient}"></div></div>`;
 document.getElementById('teamsInsights').innerHTML=insights;
 
 // ============ RANKING BAR ============
 let sortedRank=[...allAvgs].filter(x=>x.avg>0).sort((a,b)=>b.avg-a.avg);
 let maxAvg=sortedRank[0]?.avg||100;
 document.getElementById('teamsRankBar').innerHTML=sortedRank.map((s,i)=>{
  let bg=s.avg>=105?'linear-gradient(90deg,#00ff88,#00d4ff)':s.avg>=95?'linear-gradient(90deg,#00d4ff,#7b2fff)':s.avg>=85?'linear-gradient(90deg,#ffd700,#ff6b35)':s.avg>=70?'linear-gradient(90deg,#ff6b35,#ff2d95)':'linear-gradient(90deg,#ff3366,#ff0055)';
  let ic=i===0?'🥇 ':i===1?'🥈 ':i===2?'🥉 ':'';
  return `<div class="hb-r"><div class="hb-l">${ic}${s.d}</div><div class="hb-t"><div class="hb-f" style="width:${(s.avg/maxAvg*100).toFixed(1)}%;background:${bg}">${fmtF(s.avg)}%</div></div></div>`;
 }).join('');
 
 // ============ MONTHLY TREND CHART ============
 let monthAvgs=colSums.map((s,i)=>colCounts[i]>0?s/colCounts[i]:0);
 let activeMonths=monthAvgs.map((v,i)=>({v,i,m:MONTHS[i]})).filter(x=>x.v>0);
 let maxM=Math.max(...activeMonths.map(x=>x.v),1);
 document.getElementById('teamsMonthChart').innerHTML=MONTHS.map((m,i)=>{
  let v=monthAvgs[i];let h=v>0?v/maxM*100:0;
  let bg=v===0?'rgba(255,255,255,.05)':v>=105?'linear-gradient(180deg,#00ff88,#00d4ff)':v>=95?'linear-gradient(180deg,#00d4ff,#7b2fff)':v>=85?'linear-gradient(180deg,#ffd700,#ff6b35)':v>=70?'linear-gradient(180deg,#ff6b35,#ff2d95)':'linear-gradient(180deg,#ff3366,#ff0055)';
  return `<div class="bg2"><div class="bw" style="height:180px"><div class="b" style="height:${h.toFixed(1)}%;background:${bg};width:26px;min-height:${v>0?'6px':'2px'}"><div class="bt">${v>0?fmtF(v)+'%':'—'}</div></div></div><div class="bl">${m}</div></div>`;
 }).join('');
 
 // ============ PROGRESI MUJOR per Distrikt ============
 document.getElementById('teamsProgress').innerHTML=allAvgs.map(t=>{
  let activeVals=t.vals.filter(v=>v>0);
  if(activeVals.length===0)return '';
  let latest=activeVals[activeVals.length-1];
  let prev=activeVals.length>1?activeVals[activeVals.length-2]:latest;
  let trend=latest-prev;
  let trendIc=trend>0?'📈':trend<0?'📉':'➡️';
  let trendCol=trend>0?'var(--green)':trend<0?'var(--red)':'var(--muted)';
  let avgCol=t.avg>=95?'var(--green)':t.avg>=85?'var(--yellow)':t.avg>=70?'var(--orange)':'var(--red)';
  // mini bar per cdo muaj
  let miniBars=t.vals.map((v,i)=>{
   if(v===0)return `<div style="flex:1;height:24px;background:rgba(255,255,255,.02);border-radius:3px" title="${MONTHS[i]}: N/A"></div>`;
   let bg=v>=105?'#00ff88':v>=95?'#00d4ff':v>=85?'#ffd700':v>=70?'#ff6b35':'#ff3366';
   let hg=Math.min(100,(v/120)*100);
   return `<div style="flex:1;height:24px;background:rgba(255,255,255,.03);border-radius:3px;position:relative;overflow:hidden" title="${MONTHS[i]}: ${fmtF(v)}%"><div style="position:absolute;bottom:0;left:0;right:0;height:${hg}%;background:${bg};border-radius:3px 3px 0 0"></div></div>`;
  }).join('');
  return `<div style="display:grid;grid-template-columns:70px 1fr auto auto;gap:14px;align-items:center;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:12px">
   <div style="font-family:Orbitron;font-weight:800;color:var(--blue);font-size:.85rem">${t.d}</div>
   <div style="display:flex;gap:3px">${miniBars}</div>
   <div style="font-family:Orbitron;font-weight:800;font-size:.9rem;color:${avgCol};min-width:60px;text-align:right">${fmtF(t.avg)}%</div>
   <div style="font-size:1.1rem;color:${trendCol}" title="${trend>0?'+':''}${fmtF(trend)}%">${trendIc}</div>
  </div>`;
 }).filter(x=>x).join('');
}

function renderAll(){
 let c=renderCoord();let p=renderPoles();let o=renderOp();renderMonths();renderTariffs();renderTeams();
 document.getElementById('kpi1').textContent=fmt(c.tot);document.getElementById('kpi1d').textContent=`Amper/Platon: ${c.totA} | RL: ${c.totR}`;
 document.getElementById('kpi2').textContent=fmt(p.tot);document.getElementById('kpi2d').textContent=`Eng: ${p.totE} | Sket: ${p.totS} | Contr: ${p.totC} | PMS: ${fmt(p.totP)}`;
 document.getElementById('kpi3').textContent=fmt(o.tot);document.getElementById('kpi3d').textContent=`Amper: ${o.totA} | RL: ${o.totR}`;
 document.getElementById('ftC').textContent=fmt(c.tot);document.getElementById('ftP').textContent=fmt(p.tot);document.getElementById('ftO').textContent=fmt(o.tot);
 let sorted=[...STATE.coord].map(r=>({d:r.d,t:r.amper+r.rl})).sort((a,b)=>b.t-a.t);let top3=sorted.slice(0,3);let sum3=top3.reduce((s,r)=>s+r.t,0);let pct3=c.tot>0?sum3/c.tot*100:0;
 document.getElementById('alertTitle').textContent=`${top3.map(x=>x.d).join(' + ')} — Coordinator`;
 document.getElementById('alertNum').textContent=fmt(sum3);document.getElementById('alertPct').textContent=pct3.toFixed(2)+'%';document.getElementById('alertTot').textContent=fmt(c.tot);
 document.querySelectorAll('.kpi-c .val').forEach(el=>{el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash')});
}
renderAll();

function toggleExtra(){STATE.extraOpen=!STATE.extraOpen;applyToggle();save()}
function toggleTeams(){STATE.teamsOpen=!STATE.teamsOpen;applyToggle();save()}
function applyToggle(){
 const sec=document.getElementById('extraSection');const btn=document.getElementById('toggleExtra');const lbl=document.getElementById('tgLabel');const ic=btn.querySelector('.tg-ic');
 if(STATE.extraOpen){sec.classList.add('show');btn.classList.add('active');lbl.textContent='Fshih Lidhjet e Reja & Grupet Tarifore';ic.textContent='📊'}
 else{sec.classList.remove('show');btn.classList.remove('active');lbl.textContent='Shfaq Lidhjet e Reja & Grupet Tarifore';ic.textContent='📊'}
 const secT=document.getElementById('teamsSection');const btnT=document.getElementById('toggleTeams');const lblT=document.getElementById('tgLabelTeams');const icT=btnT.querySelector('.tg-ic');
 if(STATE.teamsOpen){secT.classList.add('show');btnT.classList.add('active');lblT.textContent='Fshih Performancen e Ekipeve - Teams Report';icT.textContent='🏆'}
 else{secT.classList.remove('show');btnT.classList.remove('active');lblT.textContent='Shfaq Performancen e Ekipeve - Teams Report';icT.textContent='🏆'}
}
applyToggle();

// =============== PARSER ===============
function findStarts(grid){
 let s=[];
 for(let r=0;r<grid.length;r++){
  let row=grid[r]||[];
  for(let c=0;c<row.length;c++){
   let v=String(row[c]||'').toUpperCase().trim();
   if(!v)continue;
   if(v.includes('COORDINATOR POSITION')){s.push({r,c,type:'coord',title:v})}
   else if(v.includes('POLES')&&v.includes('CONTRACTOR')){s.push({r,c,type:'poles',title:v})}
   else if(v==='REQUESTS IN OPERATION'||(v.includes('REQUESTS IN OPERATION')&&!v.includes('RL'))){s.push({r,c,type:'op',title:v})}
   else if(v.includes('TARIFF')||v.includes('TARIFOR')||v.includes('GRUP')){s.push({r,c,type:'tariff',title:v})}
   // TEAMS: kerkon "PERFORMANCE", "TEAM", "EKIP", "PERFORMANC"
   else if(v.includes('PERFORMANCE')||v.includes('TEAM')||v.includes('EKIP')){s.push({r,c,type:'teams',title:v})}
   else if(v.includes('NEW CONNECTION')&&/20\d\d/.test(v)&&!v.includes('TARIFF')&&!v.includes('TARIFOR')&&!v.includes('GRUP')){s.push({r,c,type:'months',title:v})}
  }
 }
 return s;
}

function findHdr(grid,sr,sc){for(let d=1;d<=5;d++){let r=sr+d;if(r>=grid.length)break;let row=grid[r]||[];for(let c=Math.max(0,sc-2);c<row.length;c++){let v=String(row[c]||'').toLowerCase().trim();if(v==='district'||v.includes('agency'))return{r,c}}}return null}

function mapCols(hdr,type){let m={};for(let c=0;c<hdr.length;c++){let v=String(hdr[c]||'').toLowerCase().replace(/[\s._\/\-]+/g,'');if(!v)continue;
 if(type==='coord'){if(v.includes('amper')||v.includes('platon'))m.a=c;else if(v==='rl')m.r=c;else if(v==='district')m.d=c}
 else if(type==='poles'){if(v==='district')m.d=c;else if(v.includes('engineer')&&!v.includes('sketch'))m.e=c;else if(v.includes('sketch'))m.s=c;else if(v.includes('contractor')&&!v.includes('sketch'))m.c=c;else if(v.includes('pms'))m.p=c}
 else if(type==='op'){if(v==='district')m.d=c;else if(v.includes('amper'))m.a=c;else if(v==='rl')m.r=c}}return m}

function readTbl(grid,sr,sc,type){let h=findHdr(grid,sr,sc);if(!h)return null;let cm=mapCols(grid[h.r]||[],type);if(cm.d===undefined)return null;let rows=[];
 for(let r=h.r+1;r<grid.length;r++){let row=grid[r]||[];let dc=String(row[cm.d]||'').trim();if(!dc)continue;let up=dc.toUpperCase();
  if(up.includes('GRAND TOTAL')||up==='TOTAL'||up.includes('REQUESTS ')||up.includes('NEW CONNECTION')||up.includes('DPZ+DFE')||up.includes('PERFORMANCE')||up.includes('TEAM'))break;
  let dist=mapDist(dc);if(!dist)continue;let o={d:dist};
  if(type==='coord'){o.amper=cm.a!==undefined?num(row[cm.a]):0;o.rl=cm.r!==undefined?num(row[cm.r]):0}
  else if(type==='poles'){o.eng=cm.e!==undefined?num(row[cm.e]):0;o.sket=cm.s!==undefined?num(row[cm.s]):0;o.contr=cm.c!==undefined?num(row[cm.c]):0;o.pms=cm.p!==undefined?num(row[cm.p]):0}
  else if(type==='op'){o.amper=cm.a!==undefined?num(row[cm.a]):0;o.rl=cm.r!==undefined?num(row[cm.r]):0}
  rows.push(o)}return rows.length>0?rows:null}

function findMonthHdr(grid,sr,sc){
 for(let d=1;d<=5;d++){let r=sr+d;if(r>=grid.length)break;let row=grid[r]||[];
  for(let c=0;c<row.length;c++){let v=String(row[c]||'').toLowerCase().trim();
   // Prano Jan, Feb, Mar, Apr etj (tabela e teams mund te fillo me April)
   if(['jan','feb','mar','apr','january','february','march','april'].includes(v)){
    let ag=-1;
    for(let cc=c-1;cc>=0;cc--){let vv=String(row[cc]||'').toLowerCase().trim();if(vv.includes('agency')||vv==='district'||vv==='id'||vv.includes('grup')||vv.includes('tarif')){ag=cc;break}if(vv)break}
    if(ag===-1)ag=Math.max(0,c-1);
    let mc={};
    for(let cc=c;cc<row.length;cc++){let vv=String(row[cc]||'').toLowerCase().trim().substring(0,3);let idx=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'].indexOf(vv);if(idx>=0)mc[idx]=cc}
    return{r,ag,mc}
   }
  }
 }
 return null;
}

function readMonthsTable(grid,sr,sc){
 let h=findMonthHdr(grid,sr,sc);if(!h)return null;
 let rows=[];
 for(let r=h.r+1;r<grid.length;r++){
  let row=grid[r]||[];
  let ag=String(row[h.ag]||'').trim();
  if(!ag)continue;
  let up=ag.toUpperCase();
  if(up.includes('GRAND TOTAL')||up==='TOTAL'||up.includes('REQUESTS ')||up.includes('NEW CONNECTION')||up.includes('PERFORMANCE'))break;
  if(!AGENCY_CODES.includes(up))continue;
  let vals=new Array(12).fill(0);
  for(let i=0;i<12;i++){let c=h.mc[i];if(c!==undefined)vals[i]=num(row[c])}
  rows.push({d:up,vals});
 }
 return rows.length>0?rows:null;
}

function readTariffTable(grid,sr,sc){
 let h=findMonthHdr(grid,sr,sc);if(!h)return null;
 let rows=[];
 for(let r=h.r+1;r<grid.length;r++){
  let row=grid[r]||[];
  let ag=String(row[h.ag]||'').trim();
  if(!ag)continue;
  let up=ag.toUpperCase();
  if(up.includes('GRAND TOTAL')||up==='TOTAL'||up.includes('REQUESTS ')||up.includes('NEW CONNECTION')||up.includes('PERFORMANCE'))break;
  if(AGENCY_CODES.includes(up))continue;
  if(!TARIFF_PATTERN.test(ag))continue;
  let vals=new Array(12).fill(0);
  for(let i=0;i<12;i++){let c=h.mc[i];if(c!==undefined)vals[i]=num(row[c])}
  rows.push({d:ag,vals});
 }
 return rows.length>0?rows:null;
}

// LEXO tabela e Teams - pranon rreshtat me kode agjencie (DFE, DPR, etj.)
function readTeamsTable(grid,sr,sc){
 let h=findMonthHdr(grid,sr,sc);if(!h)return null;
 let rows=[];
 for(let r=h.r+1;r<grid.length;r++){
  let row=grid[r]||[];
  let ag=String(row[h.ag]||'').trim();
  if(!ag)continue;
  let up=ag.toUpperCase();
  if(up.includes('GRAND TOTAL')||up==='TOTAL'||up.includes('REQUESTS ')||up.includes('NEW CONNECTION')||up.includes('PERFORMANCE'))break;
  if(!AGENCY_CODES.includes(up))continue;
  let vals=new Array(12).fill(0);
  for(let i=0;i<12;i++){let c=h.mc[i];if(c!==undefined)vals[i]=num(row[c])}
  rows.push({d:up,vals});
 }
 return rows.length>0?rows:null;
}

function parseWB(wb){
 for(let sn of wb.SheetNames){
  let sheet=wb.Sheets[sn];
  let grid=XLSX.utils.sheet_to_json(sheet,{header:1,defval:'',blankrows:true});
  if(grid.length<3)continue;
  let starts=findStarts(grid);
  if(!starts.length)continue;
  console.log('Sheet:',sn,'Titujt e gjetur:',starts.map(s=>({type:s.type,r:s.r,title:s.title})));
  let res={coord:null,poles:null,op:null,months:null,tariffs:null,teams:null,sn,found:[]};
  starts.forEach(s=>{
   if(s.type==='months'){
    let d=readMonthsTable(grid,s.r,s.c);
    if(d&&!res.months){res.months=d;res.found.push('Muajt')}
   }
   else if(s.type==='tariff'){
    let d=readTariffTable(grid,s.r,s.c);
    if(d&&!res.tariffs){res.tariffs=d;res.found.push('Tarifat')}
   }
   else if(s.type==='teams'){
    let d=readTeamsTable(grid,s.r,s.c);
    if(d&&!res.teams){res.teams=d;res.found.push('Teams')}
   }
   else{
    let d=readTbl(grid,s.r,s.c,s.type);
    if(d&&d.length>0){
     if(s.type==='coord'&&!res.coord){res.coord=d;res.found.push('Coordinator')}
     else if(s.type==='poles'&&!res.poles){res.poles=d;res.found.push('Poles')}
     else if(s.type==='op'&&!res.op){res.op=d;res.found.push('Operation')}
    }
   }
  });
  // NESE parseri nuk gjeti Teams (mundet qe titulli nuk ka "PERFORMANCE") - Provoje tabelat e panjohura si teams nese kane vlera decimale
  if(!res.teams){
   // shiko per tabela shtese qe fillojne me Jan/Apr dhe kane DFE etj me numra decimale
   for(let r=0;r<grid.length;r++){
    let row=grid[r]||[];
    for(let c=0;c<row.length;c++){
     let v=String(row[c]||'').toLowerCase().trim();
     if(['jan','feb','mar','apr'].includes(v)){
      // kontrollo nese kjo tabele nuk eshte tashme e perdorur
      let already=(res.months&&Math.abs(findMonthHdrRow(res,grid)-r)<3)||(res.tariffs&&false);
      // Provo lexoj
      let d=readTeamsTable(grid,Math.max(0,r-1),0);
      if(d&&d.length>0){
       // kontrollo nese ka vlera decimale (typically te teams jane si 86.84)
       let hasDecimal=d.some(row=>row.vals.some(v=>v>0&&v!==Math.floor(v)));
       if(hasDecimal){res.teams=d;res.found.push('Teams(auto)');break}
      }
     }
    }
    if(res.teams)break;
   }
  }
  if(res.coord||res.poles||res.op||res.months||res.tariffs||res.teams){
   let order=['Ferizaj','Gjakova','Gjilan','Mitrovice','Peje','Prishtine','Prizren'];
   let sf=(a,b)=>order.indexOf(a.d)-order.indexOf(b.d);
   if(res.coord)res.coord.sort(sf);if(res.poles)res.poles.sort(sf);if(res.op)res.op.sort(sf);
   if(res.months)res.months.sort((a,b)=>AGENCY_CODES.indexOf(a.d)-AGENCY_CODES.indexOf(b.d));
   return res;
  }
 }
 return null;
}
function findMonthHdrRow(res,grid){return 0}

function handleFile(file){document.getElementById('fname').textContent='⏳ '+file.name+'...';document.getElementById('fname').className='fname';
 let reader=new FileReader();reader.onload=e=>{try{let wb=XLSX.read(e.target.result,{type:'array'});let p=parseWB(wb);
  if(!p){document.getElementById('fname').textContent='❌ Nuk u gjeten tabelat';document.getElementById('fname').classList.add('err');toast('Gabim','Asnje tabele e vlefshme','err');return}
  let msg=[];if(p.coord?.length){STATE.coord=p.coord;msg.push(`Coordinator(${p.coord.length})`)}if(p.poles?.length){STATE.poles=p.poles;msg.push(`Poles(${p.poles.length})`)}if(p.op?.length){STATE.op=p.op;msg.push(`Operation(${p.op.length})`)}if(p.months?.length){STATE.months=p.months;msg.push(`Muajt(${p.months.length})`)}if(p.tariffs?.length){STATE.tariffs=p.tariffs;msg.push(`Tarifat(${p.tariffs.length})`)}if(p.teams?.length){STATE.teams=p.teams;msg.push(`Teams(${p.teams.length})`)}
  if(!msg.length){document.getElementById('fname').textContent='❌ Ska te dhena';document.getElementById('fname').classList.add('err');return}
  STATE.lastUpdate=new Date().toISOString();save();renderAll();
  document.getElementById('fname').textContent=`✅ ${file.name} — ${msg.join(', ')}`;toast('Sukses!',msg.join(', '),'ok');document.getElementById('fileIn').value='';
 }catch(err){document.getElementById('fname').textContent='❌ '+err.message;document.getElementById('fname').classList.add('err');toast('Gabim',err.message,'err')}};reader.readAsArrayBuffer(file)}

document.getElementById('fileIn').addEventListener('change',e=>{if(e.target.files[0])handleFile(e.target.files[0])});
let dz=document.getElementById('dropZone');
dz.addEventListener('click',e=>{if(e.target.tagName!=='BUTTON'&&!e.target.closest('button'))document.getElementById('fileIn').click()});
['dragenter','dragover'].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.add('drag')}));
['dragleave','drop'].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.remove('drag')}));
dz.addEventListener('drop',e=>{if(e.dataTransfer.files[0])handleFile(e.dataTransfer.files[0])});
function resetData(){if(!confirm('Reset?'))return;STATE={coord:JSON.parse(JSON.stringify(DEFAULT_COORD)),poles:JSON.parse(JSON.stringify(DEFAULT_POLES)),op:JSON.parse(JSON.stringify(DEFAULT_OP)),months:JSON.parse(JSON.stringify(DEFAULT_MONTHS)),tariffs:JSON.parse(JSON.stringify(DEFAULT_TARIFFS)),teams:JSON.parse(JSON.stringify(DEFAULT_TEAMS)),lastUpdate:null,extraOpen:STATE.extraOpen,teamsOpen:STATE.teamsOpen};save();renderAll();document.getElementById('fname').textContent='';toast('Reset','Demo data','ok')}
setInterval(()=>{const n=new Date();let x=STATE.lastUpdate?` • ${new Date(STATE.lastUpdate).toLocaleString('sq-AL')}`:'';document.getElementById('lt').textContent=`Live • ${n.toLocaleDateString('sq-AL')} ${n.toLocaleTimeString()}${x}`},1000);
