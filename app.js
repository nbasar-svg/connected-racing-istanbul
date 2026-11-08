(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text = {
    tr: {
      skip:'İçeriğe geç', fullscreen:'Tam ekran', exitFullscreen:'Tam ekrandan çık', askPiper:'Piper’a Sor', navHome:'Başlangıç', navJourney:'Bir tur', navClouds:'Deneyimler', navGarage:'Garaj', navValue:'İş değeri',
      heroLead:'Gerçek bir pist.<br>Sınırları aşan bir deneyim.', heroDescription:'Bir tur at. Verinin Salesforce dünyasında nasıl içgörüye ve aksiyona dönüştüğünü keşfet.', exploreJourney:'Bir Turun Yolculuğu', cloudExperiences:'Salesforce Deneyimleri', curious:'Merak ettiğin bir şey mi var?', talkPiper:'Piper ile Konuş', physicalDigital:'FİZİKSELDEN DİJİTALE', illustration:'Anlatım görseli', connectedData:'BAĞLANTILI VERİ', cars:'ARAÇ', lanes:'KULVAR', connectedExperience:'BAĞLANTILI DENEYİM',
      journeyEyebrow:'02 / BİR TURUN YOLCULUĞU', journeyTitle:'Bitiş çizgisi, bir başlangıç.', journeyIntro:'Tek bir tur. Fiziksel deneyimden dijital aksiyona uzanan beş adım.', illustrativeFlow:'Açıklayıcı animasyon', playJourney:'Yolculuğu Oynat', pauseJourney:'Duraklat', resumeJourney:'Devam Et', replayJourney:'Tekrar Oynat', restart:'Yeniden Başlat', journeyNote:'Verinin yolculuğunu anlatır; canlı tur takibi değildir.',
      cloudsEyebrow:'03 / SALESFORCE DENEYİMLERİ', cloudsTitle:'Aynı tur. Yeni olasılıklar.', cloudsIntro:'Bir deneyim seç. Pistteki verinin iş değerine nasıl dönüştüğünü gör.', garageEyebrow:'04 / ISTANBUL GARAJI', garageTitle:'Beş karakter. İki kulvar.', garageIntro:'Gerçek Carrera araçlarını keşfet. Pistte aynı anda iki araç yarışır.', garageNote:'Bu seçim araçları tanımak içindir; fiziksel pisti kontrol etmez.',
      valueEyebrow:'05 / PİSTİN ÖTESİNDE', valueTitle:'Sizin işinizde sırada ne var?', valueIntro:'Burada bir yarış arabası. Sizin dünyanızda bir müşteri, bir ürün, bir servis deneyimi.', valueCta:'Olasılıkları birlikte keşfedelim.', valueCtaText:'Demoyu sor. Kullanım alanlarını keşfet. Sohbeti bir sonraki adıma taşı.', pauseMotion:'Animasyonu Duraklat', resumeMotion:'Animasyonu Oynat', backHome:'Başa Dön',
      unavailable:'Piper şu anda kullanılamıyor. Demo ekibimiz size yardımcı olabilir.', loading:'Piper açılıyor…', fullscreenFailed:'Tam ekran bu tarayıcıda kullanılamıyor.', close:'Kapat', development:'Geliştirme aşamasında', conceptual:'Kavramsal gösterim', exampleQuestion:'ÖRNEK SORU', noLive:'Canlı veri göstermez.', step:'ADIM', carExplore:'ARAÇ KEŞFİ', physicalTrack:'Carrera pisti', experiences:'Deneyimler', lap:'TUR', driver:'SÜRÜCÜ', car:'ARAÇ', data:'VERİ', analysis:'ANALİZ', action:'AKSİYON', trackAlt:'Carrera Race to Victory, köprülü sekiz biçiminde yarış pisti', homeLabel:'Connected Racing — Ana ekran',
      steps:[
        ['Carrera pisti','Her şey gerçek bir turla başlar.','Ziyaretçi kumandayı alır. Carrera pistindeki iki araç bitiş çizgisine doğru yarışır.',['Fiziksel deneyim','İki kulvar']],
        ['SmartRace','Tur, bir veriye dönüşür.','SmartRace tur süresini, sürücüyü ve aracı yakalar. Fiziksel yarışın dijital hikâyesi burada başlar.',['Tur süresi','Sürücü','Araç']],
        ['Heroku','Pist ile bulut arasında köprü.','SmartRace’ten gelen yarış verisi Heroku üzerinden Data 360’a aktarılır.',['Veri akışı','Bağlantı']],
        ['Data 360','Veri bir araya gelir.','Yarış verileri Data 360’da sorgulanabilir hale gelir; analiz ve bağlantılı deneyimler için bir temel oluşturur.',['Birleştirme','Sorgulama']],
        ['Salesforce','Bir turdan pek çok deneyime.','Aynı hikâye analizlere, AI ile etkileşime ve servis süreçlerine uzanır. Bir ürün seçerek devam edebilirsin.',['Analiz','AI','Servis']]
      ],
      clouds:[
        ['Her turun bir hikâyesi var.','Tur, sürücü ve araç bilgileri Data 360’da bir araya gelir. Yarış verisini sorgulayarak bağlantılı deneyimlerin temelini keşfet.','BİRLEŞTİR'],
        ['Pistte olanı, bir bakışta gör.','Yarış aktivitesi, sıralamalar ve performans analizi Tableau deneyiminde görünür hale gelir. Veriyi anlaşılır içgörülere dönüştür.','ANLAM KAT'],
        ['Yarışı sor. Hikâyeyi duy.','Race Lap Analyst yarış verileriyle ilgili sorulara yanıt verir. Race Commentary kişisel en iyi turları yorumlayarak deneyimi seslendirir.','SOR VE KEŞFET'],
        ['Bir turun arkasındaki bağlantı.','Sürücüler Contact, araçlar Vehicle kayıtlarıyla temsil edilir. Yarış deneyimini kişi ve varlık bilgileriyle birlikte ele al.','İLİŞKİLENDİR'],
        ['Doğru ekip, aynı pit alanında.','Servis vakasında Begin Swarming, Slack’te ekibi bir araya getirir. Vaka bağlantısı ve onarım desteği ortak bir çalışma alanına taşınır.','BİRLİKTE ÇÖZ'],
        ['Bakım da deneyimin bir parçası.','WhatsApp üzerinden bakım randevusu planlanır; iş, Field Service Mobile’da teknisyene ulaşır. AI görsel bulguları teknisyen değerlendirmesini destekler.','SERVİSE BAĞLA'],
        ['Yarış deneyimi cebine taşınır.','Sürücülerin kendi yarış deneyimlerine ulaşabileceği portal üzerinde çalışılıyor. Nihai kapsam ve kişisel sonuç deneyimi henüz doğrulanmadı.','DENEYİMİ GENİŞLET']
      ],
      values:[
        ['Verileri bağla.','Pistte: sürücü, araç ve tur. İşinizde: müşterinizin kullandığı ürünle olan ilişkisini anlamak.','DATA 360 · PLATFORM'],
        ['Anlamı gör.','Pistte: yarış performansı. İşinizde: karar vermeyi kolaylaştıran anlaşılır analizler.','TABLEAU'],
        ['Sor, keşfet.','Pistte: doğal dilde yarış analizi. İşinizde: bilgiye AI destekli etkileşimlerle ulaşmak.','AGENTFORCE'],
        ['Birlikte çöz.','Pistte: bakım ve pit ekibi. İşinizde: servis ihtiyaçlarında ekipleri aynı bağlamda buluşturmak.','SERVICE · SLACK · FIELD SERVICE']
      ],
      visual:{data:['Tur bilgisi','Sürücü bilgisi','Bağlantılı veri'],tableau:'YARIŞ ANALİZİ',agent:'“En hızlı turu kim attı?”',platform:['Sürücü · Contact','Yarış deneyimi','Araç · Vehicle'],service:['Servis vakası','Slack çalışma alanı','Ortak çözüm'],field:['Bakım talebi','Randevu planlama','Teknisyen deneyimi'],portal:'SÜRÜCÜ PORTALI'}
    },
    en: {
      skip:'Skip to content', fullscreen:'Full screen', exitFullscreen:'Exit full screen', askPiper:'Ask Piper', navHome:'Start', navJourney:'One lap', navClouds:'Experiences', navGarage:'Garage', navValue:'Business value',
      heroLead:'A real track.<br>An experience without limits.', heroDescription:'Take a lap. Discover how data becomes insight and action across the Salesforce ecosystem.', exploreJourney:'Follow a Lap', cloudExperiences:'Salesforce Experiences', curious:'Something you’re curious about?', talkPiper:'Talk to Piper', physicalDigital:'FROM PHYSICAL TO DIGITAL', illustration:'Illustrative view', connectedData:'CONNECTED DATA', cars:'CARS', lanes:'LANES', connectedExperience:'CONNECTED EXPERIENCE',
      journeyEyebrow:'02 / THE JOURNEY OF A LAP', journeyTitle:'The finish line is just the start.', journeyIntro:'One lap. Five steps from a physical experience to digital action.', illustrativeFlow:'Illustrative animation', playJourney:'Play the Journey', pauseJourney:'Pause', resumeJourney:'Resume', replayJourney:'Play Again', restart:'Restart', journeyNote:'An explanation of the data journey, not live lap tracking.',
      cloudsEyebrow:'03 / SALESFORCE EXPERIENCES', cloudsTitle:'Same lap. New possibilities.', cloudsIntro:'Choose an experience. See how track data connects to business value.', garageEyebrow:'04 / THE ISTANBUL GARAGE', garageTitle:'Five characters. Two lanes.', garageIntro:'Explore the real Carrera cars. Two race on the physical track at a time.', garageNote:'This selection explores the cars; it does not control the physical track.',
      valueEyebrow:'05 / BEYOND THE TRACK', valueTitle:'What comes next for your business?', valueIntro:'Here, it’s a racing car. In your world, it’s a customer, a product, a service experience.', valueCta:'Let’s explore the possibilities.', valueCtaText:'Ask about the demo. Explore use cases. Take the conversation further.', pauseMotion:'Pause Animation', resumeMotion:'Play Animation', backHome:'Back to Start',
      unavailable:'Piper is currently unavailable. Our demo team is here to help.', loading:'Opening Piper…', fullscreenFailed:'Full screen is not available in this browser.', close:'Close', development:'In development', conceptual:'Conceptual illustration', exampleQuestion:'EXAMPLE QUESTION', noLive:'Not live data.', step:'STEP', carExplore:'CAR EXPLORER', physicalTrack:'Carrera track', experiences:'Experiences', lap:'LAP', driver:'DRIVER', car:'CAR', data:'DATA', analysis:'INSIGHT', action:'ACTION', trackAlt:'Carrera Race to Victory figure-eight circuit with a crossover', homeLabel:'Connected Racing — Home',
      steps:[
        ['Carrera track','It starts with a real lap.','A visitor takes the controller. Two Carrera cars race toward the finish line on a physical circuit.',['Physical experience','Two lanes']],
        ['SmartRace','A lap becomes data.','SmartRace captures the lap time, driver and car. The digital story of the physical race starts here.',['Lap time','Driver','Car']],
        ['Heroku','The bridge from track to cloud.','Race data from SmartRace flows through Heroku into Data 360.',['Data stream','Connection']],
        ['Data 360','The data comes together.','Race data becomes queryable in Data 360, creating a foundation for analysis and connected experiences.',['Unification','Querying']],
        ['Salesforce','One lap, many experiences.','The same story extends to analytics, AI interactions and service processes. Choose a product to explore further.',['Analytics','AI','Service']]
      ],
      clouds:[
        ['Every lap has a story.','Lap, driver and car information comes together in Data 360. Explore race data and the foundation of connected experiences.','UNIFY'],
        ['See the race at a glance.','Race activity, standings and performance analysis become visible in the Tableau experience. Turn data into understandable insights.','MAKE SENSE'],
        ['Ask the race. Hear the story.','Race Lap Analyst answers questions about race data. Race Commentary brings personal-best laps to life through spoken commentary.','ASK AND EXPLORE'],
        ['The connections behind a lap.','Drivers are represented by Contact records, cars by Vehicle records. Connect the race experience to people and assets.','CONNECT'],
        ['The right team, in the same pit.','Begin Swarming on a service case brings the team together in Slack. The case link and repair support move into a shared workspace.','SOLVE TOGETHER'],
        ['Maintenance is part of the experience.','A maintenance appointment is arranged through WhatsApp and reaches the technician in Field Service Mobile. AI image findings support technician assessment.','CONNECT SERVICE'],
        ['The race experience goes with you.','A driver-facing portal is in development. Its final scope and personalized results experience have not yet been verified.','EXTEND THE EXPERIENCE']
      ],
      values:[
        ['Connect data.','On track: driver, car and lap. In your business: understanding the relationship between a customer and the product they use.','DATA 360 · PLATFORM'],
        ['Find meaning.','On track: race performance. In your business: clear analysis that makes decisions easier.','TABLEAU'],
        ['Ask. Explore.','On track: natural-language race analysis. In your business: accessing knowledge through AI-powered interactions.','AGENTFORCE'],
        ['Solve together.','On track: maintenance and the pit crew. In your business: bringing service teams together with shared context.','SERVICE · SLACK · FIELD SERVICE']
      ],
      visual:{data:['Lap information','Driver information','Connected data'],tableau:'RACE ANALYSIS',agent:'“Who set the fastest lap?”',platform:['Driver · Contact','Race experience','Car · Vehicle'],service:['Service case','Slack workspace','Shared resolution'],field:['Maintenance request','Appointment planning','Technician experience'],portal:'DRIVER PORTAL'}
    }
  };
  const products = [
    ['Data 360','lg_d360.webp'],['Tableau','lg_tab.webp'],['Agentforce','lg_ag.webp'],['Salesforce Platform','lg_sf.webp'],['Service Cloud + Slack','lg_slk.webp'],['Field Service','lg_fs.webp'],['Experience Cloud','lg_sf.webp']
  ];
  const cars = [
    {brand:'Audi',name:'R8 LMS GT3 EVO II',detail:'“Bruce Lee”',image:'bl.webp',color:'#f5d340',topdown:true},
    {brand:'Ferrari',name:'SF70H',detail:'“No.5”',image:'ferrari5.webp',color:'#ff555d'},
    {brand:'Ferrari',name:'SF70H',detail:'“No.7”',image:'ferrari7.webp',color:'#ff555d'},
    {brand:'KTM',name:'X-Bow GT2',detail:'“True Racing, No.16”',image:'ktm.jpeg',color:'#ff9a42',photo:true},
    {brand:'Mercedes-AMG',name:'GT3',detail:'Carrera',image:'merc.webp',color:'#67c7fd',topdown:true}
  ];
  const sections = ['home','journey','clouds','garage','value'];
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let lang='en', current='home', step=0, cloud=0, car=0, playing=false, timer=null, notificationTimer=null, piperOpening=false;
  let motionPaused=motionPreference.matches;
  const t = key => text[lang][key];

  function translate() {
    document.documentElement.lang=lang;
    $$('[data-i18n]').forEach(el => {
      const key=el.dataset.i18n;
      if(key==='heroLead') el.innerHTML=t(key); else el.textContent=t(key);
    });
    $$('[data-lang]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
    $('#close-notification').setAttribute('aria-label',t('close'));
    $('.brand').setAttribute('aria-label',t('homeLabel'));
    $('.track-image').alt=t('trackAlt');
    $('#car-list').setAttribute('aria-label',lang==='tr'?'Araçlar':'Cars');
    $('#journey-steps').setAttribute('aria-label',lang==='tr'?'Turun aşamaları':'Lap stages');
    $('#notification').hidden=true;
    renderJourney();renderClouds();renderGarage();renderValues();updateMotion();updateFullscreen();
  }

  function go(section, focus=true, updateHash=true) {
    if(!sections.includes(section)) section='home';
    if(section!=='journey') stopJourney();
    current=section;
    $$('.view').forEach(el => el.hidden=el.id!==section);
    $$('.nav-item').forEach(el => {
      const active=el.dataset.go===section;
      el.classList.toggle('active',active);
      if(active) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current');
    });
    if(updateHash && location.hash!==`#${section}`) history.replaceState(null,'',`#${section}`);
    if(focus){$('#main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  }

  function renderJourney() {
    const info=t('steps')[step];
    $('#journey-steps').innerHTML=t('steps').map((item,i)=>`<button class="step-button ${i===step?'active':i<step?'completed':''}" data-step="${i}" ${i===step?'aria-current="step"':''}><span>0${i+1}</span>${escape(item[0])}</button>`).join('');
    $('#step-counter').textContent=`${t('step')} 0${step+1} / 05`;
    $('#step-title').textContent=info[1];
    $('#step-description').textContent=info[2];
    $('#step-tags').innerHTML=info[3].map(s=>`<span>${escape(s)}</span>`).join('');
    const artwork=[
      `<img src="assets/trk.webp" alt="${escape(t('trackAlt'))}">`,
      `<div class="timing-illustration">${['lap','driver','car'].map((label,i)=>`<div class="timing-card"><span>${t(label)}</span><b>${['↻','◉','▰'][i]}</b><span>SmartRace</span></div>`).join('')}</div>`,
      '<div class="heroku-symbol" aria-label="Heroku">h</div>',
      '<img class="step-logo" src="assets/lg_d360.webp" alt="Data 360">',
      `<div class="art-clouds">${products.slice(1).map(p=>`<img src="assets/${p[1]}" alt="${p[0]}">`).join('')}</div>`
    ];
    $('#journey-art').innerHTML=artwork[step];
    updateJourneyButton();
  }
  function updateJourneyButton(){
    const key=playing?'pauseJourney':step===4?'replayJourney':step>0?'resumeJourney':'playJourney';
    $('#play-journey').innerHTML=`<span aria-hidden="true">${playing?'Ⅱ':'▶'}</span><span>${t(key)}</span>`;
  }
  function stopJourney(){playing=false;clearTimeout(timer);timer=null;updateJourneyButton();}
  function queueStep(){
    clearTimeout(timer);
    timer=setTimeout(()=>{
      if(!playing || current!=='journey') return;
      step=Math.min(step+1,4);
      if(step===4) playing=false;
      renderJourney();
      if(playing) queueStep();
    },3400);
  }
  function toggleJourney(){
    if(playing){stopJourney();return;}
    if(step===4) step=0;
    playing=true;renderJourney();queueStep();
  }

  function visualFor(index){
    const v=t('visual');
    const nodes = list => list.map((s,i)=>`${i?'<div class="visual-connector" aria-hidden="true">↓</div>':''}<div class="visual-node">${escape(s)}</div>`).join('');
    let body='';
    if(index===0) body=`<div class="visual-label">DATA 360</div>${nodes(v.data)}`;
    if(index===1) body=`<div class="visual-label">${v.tableau}</div><div class="chart-bars" aria-hidden="true">${[40,68,55,86,72].map(h=>`<i style="height:${h}%"></i>`).join('')}</div><div class="visual-foot">${t('conceptual')} · ${t('noLive')}</div>`;
    if(index===2) body=`<div class="visual-label">RACE LAP ANALYST</div><div class="agent-star" aria-hidden="true">✦</div><div class="chat-example">${escape(v.agent)}</div><div class="visual-foot">${t('exampleQuestion')}</div>`;
    if(index===3) body=`<div class="visual-label">SALESFORCE PLATFORM</div>${nodes(v.platform)}`;
    if(index===4) body=`<div class="visual-label">SERVICE CLOUD + SLACK</div>${nodes(v.service)}`;
    if(index===5) body=`<div class="visual-label">FIELD SERVICE</div>${nodes(v.field)}`;
    if(index===6) body=`<div class="visual-label">${v.portal}</div><div class="visual-icon" aria-hidden="true">◎</div><div class="visual-row"><span class="line-block"></span></div><div class="visual-row"><span class="line-block dim"></span></div><span class="progress-label">${t('development')}</span>`;
    return `<div class="visual-inner">${body}</div>`;
  }
  function renderClouds(){
    $('#cloud-tabs').innerHTML=products.map((p,i)=>`<button class="cloud-tab" id="cloud-tab-${i}" role="tab" data-select-cloud="${i}" aria-selected="${i===cloud}" aria-controls="cloud-panel" tabindex="${i===cloud?'0':'-1'}"><img src="assets/${p[1]}" alt=""><span>${p[0]}</span>${i===cloud?'<span class="tab-arrow" aria-hidden="true">↗</span>':''}</button>`).join('');
    const content=t('clouds')[cloud];
    const panel=$('#cloud-panel');
    panel.setAttribute('aria-labelledby',`cloud-tab-${cloud}`);
    panel.innerHTML=`<div class="cloud-copy"><span class="product-kicker">${content[2]}</span><h3>${escape(content[0])}</h3><p>${escape(content[1])}</p>${cloud===6?`<span class="progress-label">${t('development')}</span>`:''}</div><div class="product-visual">${visualFor(cloud)}</div>`;
  }
  function renderGarage(){
    const c=cars[car];
    $('#featured-car').style.setProperty('--car-color',c.color);
    $('#featured-car').innerHTML=`<span class="car-big-number" aria-hidden="true">0${car+1}</span><div class="car-large-image"><img class="${c.topdown?'topdown':c.photo?'photo':''}" src="assets/${c.image}" alt="${escape(c.brand+' '+c.name+' '+c.detail)}"></div><div class="car-feature-copy"><div><span class="eyebrow" style="color:${c.color}">${c.brand.toUpperCase()}</span><h3>${c.name}</h3><p>${escape(c.detail)}</p></div><span class="car-scale">1:32</span></div>`;
    $('#car-list').innerHTML=cars.map((c,i)=>`<button class="car-choice" data-car="${i}" style="--car-color:${c.color}" aria-pressed="${i===car}"><span>0${i+1}</span><img src="assets/${c.image}" alt=""><span class="car-small-copy"><b>${c.brand} ${c.name}</b><small>${escape(c.detail)}</small></span><span aria-hidden="true">${i===car?'↗':'+'}</span></button>`).join('');
  }
  function renderValues(){
    $('#value-grid').innerHTML=t('values').map((v,i)=>`<article class="value-card"><span class="value-number">0${i+1} /</span><h3>${escape(v[0])}</h3><p>${escape(v[1])}</p><div class="value-product">${escape(v[2])}</div></article>`).join('');
  }
  function notify(message,delay=6500){
    clearTimeout(notificationTimer);$('#notification-text').textContent=message;$('#notification').hidden=false;
    notificationTimer=setTimeout(()=>$('#notification').hidden=true,delay);
  }
  async function openPiper(){
    if(piperOpening) return;
    piperOpening=true;
    let timeout;
    const loading=setTimeout(()=>notify(t('loading'),15000),500);
    try{
      const opening=window.ConnectedRacingPiper?.open({language:lang,section:current,topic:current==='clouds'?products[cloud][0]:current==='garage'?cars[car].brand+' '+cars[car].name:current}) ?? Promise.resolve(false);
      const opened=await Promise.race([opening,new Promise((_,reject)=>{timeout=setTimeout(()=>reject(new Error('Piper timeout')),12000);})]);
      if(!opened) notify(t('unavailable'));else $('#notification').hidden=true;
    }catch{notify(t('unavailable'));}
    finally{clearTimeout(timeout);clearTimeout(loading);piperOpening=false;}
  }
  function updateMotion(){
    document.body.classList.toggle('motion-paused',motionPaused);
    $('#motion-toggle').setAttribute('aria-pressed',String(motionPaused));
    $('#motion-toggle').innerHTML=`<span aria-hidden="true">${motionPaused?'▶':'Ⅱ'}</span><span>${t(motionPaused?'resumeMotion':'pauseMotion')}</span>`;
  }
  function updateFullscreen(){
    const label=t(document.fullscreenElement?'exitFullscreen':'fullscreen');
    $('#fullscreen').title=label;$('#fullscreen').setAttribute('aria-label',label);
  }

  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button) return;
    if(button.dataset.go) go(button.dataset.go);
    else if(button.dataset.lang){lang=button.dataset.lang;translate();}
    else if(button.hasAttribute('data-piper')) openPiper();
    else if(button.hasAttribute('data-cloud')){cloud=Number(button.dataset.cloud);renderClouds();go('clouds');}
    else if(button.hasAttribute('data-select-cloud')){cloud=Number(button.dataset.selectCloud);renderClouds();$(`#cloud-tab-${cloud}`).focus({preventScroll:true});}
    else if(button.hasAttribute('data-step')){stopJourney();step=Number(button.dataset.step);renderJourney();$(`[data-step="${step}"]`).focus({preventScroll:true});}
    else if(button.hasAttribute('data-car')){car=Number(button.dataset.car);renderGarage();$(`[data-car="${car}"]`).focus({preventScroll:true});}
  });
  $('#cloud-tabs').addEventListener('keydown',event=>{
    if(!['ArrowUp','ArrowDown','Home','End'].includes(event.key)) return;
    event.preventDefault();
    cloud=event.key==='Home'?0:event.key==='End'?products.length-1:(cloud+(event.key==='ArrowDown'?1:-1)+products.length)%products.length;
    renderClouds();$(`#cloud-tab-${cloud}`).focus();
  });
  $('#play-journey').addEventListener('click',toggleJourney);
  $('#restart-journey').addEventListener('click',()=>{stopJourney();step=0;renderJourney();});
  $('#reset').addEventListener('click',()=>{stopJourney();step=cloud=car=0;renderJourney();renderClouds();renderGarage();$('#notification').hidden=true;go('home');});
  $('#motion-toggle').addEventListener('click',()=>{motionPaused=!motionPaused;updateMotion();});
  $('#close-notification').addEventListener('click',()=>{$('#notification').hidden=true;});
  $('#fullscreen').addEventListener('click',async()=>{
    try{if(document.fullscreenElement) await document.exitFullscreen();else if(document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();else notify(t('fullscreenFailed'));}catch{notify(t('fullscreenFailed'));}
  });
  document.addEventListener('fullscreenchange',updateFullscreen);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopJourney();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')$('#notification').hidden=true;});
  motionPreference.addEventListener('change',event=>{motionPaused=event.matches;updateMotion();});
  window.addEventListener('hashchange',()=>go(location.hash.slice(1),true,false));
  translate();go(location.hash.slice(1)||'home',false);
})();
