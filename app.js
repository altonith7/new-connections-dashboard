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
