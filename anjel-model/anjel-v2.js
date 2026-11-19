(function(){
  var SYS = 'あなたは「Anjel Model」のサポートボットです。明るく、短く（3文まで）、日本語で答えます。Anjel Modelは岡崎幸雄（星野春人／岡崎幸霊）のDAO型創作アプリで、画面はタイムライン、財団公式、制作スタジオ、ボット一覧、DAO投票、インフレーター、アニメシアター、AI設定、マイページの9つです。アプリ内の資産額や投票数などの数値はデモ表示（サンプル）です。Z式は Ζ×Χ={【{(0~∞)+(制限の有数、条件による有数)}×Χ】}≦Χ で、Χは無限の変化数、Ζは宇宙のすべて・現在、×Χは多層化の記法です。ZカプセルはWikipediaを証明書つきでスマホに収める仕組みで、日本語版は完成・公開済みです。分からないことは「分からない」と正直に言ってください。';
  var KB = [
    [/Z式|ゼット式/, 'Z式は、岡崎幸雄の式です。Ζ×Χ={【{(0~∞)+(制限の有数、条件による有数)}×Χ】}≦Χ。Χは無限の変化数、Ζは宇宙のすべて・現在を表します。×Χは掛け算ではなく「多層化」の記法で、層は同じ場所に重なって干渉しません。∞は仮数としての有限数として扱うのが、幸雄の定義です。'],
    [/Zカプセル|カプセル|Wikipedia|ウィキペディア/, 'Zカプセルは、Wikipediaを証明書つきでスマホ1台に収める仕組みです。日本語版（1,515,389件）は完成して公開済みで、全世界版（348言語）は建造中です。入口ページ（aria）からリーダーを開けます。'],
    [/投票|DAO|賛成|反対|提案/, '投票は「DAO投票」の画面で行います。提案を選んで「賛成する」か「反対する」を押してください。改良版では、あなたの1票がそのまま1票として数えられるようになりました。なお、票数などの数値はデモ表示（サンプル）です。'],
    [/YouTube|アニメ|動画|シアター|星海鉄道/, 'アニメシアターの映像はデモ表示です。本物のアニメは、岡崎幸雄のYouTubeチャンネルで公開中の連載「星海鉄道カプセル便」です。第1話・第2話・第3話まで公開されています。シアターの画面に、本物への案内カードも出しています。'],
    [/レイチェル|マリアンヌ|ナリス|エレナ|ミリア|アルカ|キャラクター|キャラ/, 'サポート担当は6人です。レイチェル（ストーリー構築）、マリアンヌ（歌詞創作）、ナリス（視覚デザイン）、エレナ（音楽プロデュース）、ミリア（キャラクター開発）、アルカ（世界観構築）。右下のボット画面で担当を切り替えられます。'],
    [/岡崎|幸雄|星野|春人|幸霊|作者|作った人/, 'Anjel Modelの原作・総監督は星野春人／岡崎幸霊 先生、作者は岡崎幸雄です。スマホ1台で、自分の頭脳だけで開発を続けています。作品の一覧は入口ページ（aria）にまとまっています。'],
    [/Anjel|エンジェル|このアプリ|モデルとは/, 'Anjel Modelは、岡崎幸雄のDAO型創作アプリです。タイムライン、財団公式、制作スタジオ、ボット一覧、DAO投票、インフレーター、アニメシアター、AI設定、マイページの9画面で構成されています。現在の公開版は試作デモで、数値はサンプル表示です。'],
    [/使い方|ヘルプ|画面|どこ/, '左のサイドバーから画面を切り替えます。物語を作るなら「制作スタジオ」、投票なら「DAO投票」、経済の計算なら「インフレーター」が実際に動きます。分からないことは、このボットに聞いてください。'],
    [/こんにちは|こんばんは|おはよう|はじめまして/, null]
  ];
  window.__anjelKB = function(h, charName){
    for (var i = 0; i < KB.length; i++) {
      if (KB[i][0].test(h)) {
        if (KB[i][1] === null) return charName + 'です。こんにちは！ Anjel Modelのご案内をします。何か聞いてくださいね。';
        return KB[i][1];
      }
    }
    return null;
  };
  var CHAPTERS = [
    '航路が開かれた。レイチェルが星図を広げ、星野が静かにうなずく。「生命の結晶は、ギャラクシアの中心で眠っている」。船は星の海へ滑り出した。テーマは「{desc}」。物語は、ここから動き始める。',
    '途中の星で、船は大地と共に生きる人々と出会った。争いのない世界の仕組みを、星野はノートに書き留める。「平和は、仕組みで守れる」。レイチェルは、その言葉を通信ログに残した。',
    'ミリアが描いた新しい翼の設計図を、ナリスが立体に仕上げる。試験飛行の日、翼は星の光を受けて金色に光った。「希望を運ぶ翼だ」と、エレナが小さく歌った。',
    'ギャラクシアの中心で、生命の結晶が目覚めた。光は知識の粒となって、星々へ広がっていく。学校のない星、図書館のない星へも。「知識は、みんなのもの」。星野の声が、静かに響いた。'
  ];
  var storyCount = 0;
  window.__anjelStory = function(themeId, description){
    var body = CHAPTERS[storyCount % CHAPTERS.length].split('{desc}').join(description || '');
    storyCount++;
    var head = storyCount > CHAPTERS.length ? '## 追加展開（改良版・つづき）' : '## 追加展開（改良版）';
    return '\n\n' + head + '\n\n' + body;
  };
  window.__anjelAI = {
    ready: false, loading: false, on: false, engine: null,
    ask: async function(text){
      var r = await this.engine.chat.completions.create({
        messages: [ { role: 'system', content: SYS }, { role: 'user', content: text } ],
        temperature: 0.7, max_tokens: 220
      });
      return (r && r.choices && r.choices[0] && r.choices[0].message && r.choices[0].message.content) || 'うまく答えられませんでした。';
    }
  };
  window.__anjelBotRespond = function(text, charName, fallbackArr, push){
    var kb = window.__anjelKB(text, charName);
    if (kb) { push(kb); return; }
    var ai = window.__anjelAI;
    if (ai && ai.on) {
      if (ai.ready) {
        push('考えています…');
        ai.ask(text).then(function(ans){ push(ans); })
          .catch(function(){ push('ごめんなさい、小さいAIでエラーが起きました。'); });
        return;
      }
      push('小さいAIを読み込み中です。少し待ってから、もう一度お聞きください。');
      return;
    }
    push(fallbackArr[Math.floor(Math.random() * fallbackArr.length)]);
  };
  function syncBtn(){
    var btn = document.getElementById('aj-ai-btn');
    if (btn) btn.textContent = '小さいAIモード: ' + (window.__anjelAI.on ? 'オン' : 'オフ');
  }
  async function loadAI(){
    var st = document.getElementById('aj-ai-status');
    if (!navigator.gpu) {
      st.textContent = 'この端末・ブラウザではWebGPUが使えないため、小さいAIは動かせません';
      window.__anjelAI.on = false; syncBtn(); return;
    }
    window.__anjelAI.loading = true;
    try {
      var webllm = await import('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.79/+esm');
      var engine = await webllm.CreateMLCEngine('Qwen2.5-1.5B-Instruct-q4f16_1-MLC', {
        initProgressCallback: function(p){ st.textContent = '小さいAIを読み込み中… ' + Math.round((p.progress || 0) * 100) + '%'; }
      });
      window.__anjelAI.engine = engine;
      window.__anjelAI.ready = true;
      window.__anjelAI.loading = false;
      st.textContent = '小さいAIの準備ができました。右下のサポートボットで話しかけてください';
    } catch (e) {
      window.__anjelAI.loading = false;
      window.__anjelAI.on = false; syncBtn();
      st.textContent = '小さいAIの読み込みに失敗しました（通信環境をご確認ください）';
    }
  }
  function buildPanel(){
    if (document.getElementById('anjel-v2-panel')) return;
    var panel = document.createElement('div');
    panel.id = 'anjel-v2-panel';
    panel.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0b1020;border-top:2px solid #7c3aed;color:#eeeeee;font-size:13px;line-height:1.5;padding:8px 12px;display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;';
    panel.innerHTML = '<strong style="color:#c4b5fd">Anjel改良版パネル</strong>'
      + '<button id="aj-ai-btn" type="button" style="background:#1e1b3a;color:#fff;border:1px solid #7c3aed;border-radius:8px;padding:6px 12px;font-size:13px;cursor:pointer;">小さいAIモード: オフ</button>'
      + '<span id="aj-ai-status">小さいAIは未使用です</span>'
      + '<span id="aj-note" style="opacity:0.85">このアプリは試作デモです。資産額・投票数などの数値はサンプル表示です（投票は改良版で1票=1票に直しました）。</span>'
      + '<a href="https://xyz7963gold79-glitch.github.io/aria/" style="color:#93c5fd">入口ページ</a>'
      + '<button id="aj-min" type="button" style="background:#141428;color:#ccc;border:1px solid #555;border-radius:8px;padding:6px 10px;font-size:12px;cursor:pointer;">小さくする</button>';
    document.body.appendChild(panel);
    document.body.style.paddingBottom = '120px';
    document.getElementById('aj-ai-btn').addEventListener('click', function(){
      var ai = window.__anjelAI;
      ai.on = !ai.on; syncBtn();
      var st = document.getElementById('aj-ai-status');
      if (ai.on && !ai.ready && !ai.loading) { st.textContent = '小さいAIを読み込みます…'; loadAI(); }
      else if (ai.on && ai.ready) { st.textContent = '小さいAIがオンです。右下のサポートボットで話しかけてください'; }
      else if (!ai.on) { st.textContent = '小さいAIは未使用です'; }
    });
    var minimized = false;
    document.getElementById('aj-min').addEventListener('click', function(){
      minimized = !minimized;
      document.getElementById('aj-note').style.display = minimized ? 'none' : '';
      document.getElementById('aj-ai-status').style.display = minimized ? 'none' : '';
      this.textContent = minimized ? '広げる' : '小さくする';
      document.body.style.paddingBottom = minimized ? '52px' : '120px';
    });
  }
  var BACK_BTN = '<p><button type="button" onclick="location.hash=\'#/timeline\';location.reload();" style="background:#1e1b3a;color:#fff;border:1px solid #7c3aed;border-radius:8px;padding:6px 14px;font-size:13px;cursor:pointer;">タイムラインへ戻る（再読み込み）</button></p>'
  var AI_CONFIG_HTML = '<h3 style="margin:0 0 8px;font-size:18px;">AI設定（改良版の代替表示）</h3>'
    + '<p>元のAI設定の画面が表示されないため、改良版の画面を重ねて表示しています。</p>'
    + '<p>小さいAIの設定は、画面下の「Anjel改良版パネル」の「小さいAIモード」ボタンで行えます。オンにすると、右下のサポートボットがスマホの中のAIで答えるようになります（初回は約1GBのダウンロードが必要です）。</p>'
    + '<p>安全のため、この公開ページにはAPIキーの入力欄は設けていません。</p>'
    + '<p>サポート担当: レイチェル（ストーリー構築）、マリアンヌ（歌詞創作）、ナリス（視覚デザイン）、エレナ（音楽プロデュース）、ミリア（キャラクター開発）、アルカ（世界観構築）。</p>' + BACK_BTN;
  var MYPAGE_HTML = '<h3 style="margin:0 0 8px;font-size:18px;">マイページ（改良版の代替表示）</h3>'
    + '<p>元のマイページが表示されないため、改良版の画面を重ねて表示しています。</p>'
    + '<p><strong>岡崎幸雄</strong>（星野春人／岡崎幸霊）— Anjel Model 原作・総監督。スマホ1台で、自分の頭脳だけで開発を続けています。</p>'
    + '<p>作品への入口: <a style="color:#93c5fd" href="https://xyz7963gold79-glitch.github.io/aria/">入口ページ</a> ／ <a style="color:#93c5fd" href="https://xyz7963gold79-glitch.github.io/wikipedia-capsule/">Zカプセル</a> ／ <a style="color:#93c5fd" href="https://xyz7963gold79-glitch.github.io/angel/">ハルカ最終形</a> ／ <a style="color:#93c5fd" href="https://www.youtube.com/@7-jm4in">YouTube</a> ／ <a style="color:#93c5fd" href="https://note.com/just_okapi2884">note</a></p>'
    + '<p>なお、このアプリ内の資産額などの数値はデモ表示（サンプル）です。</p>' + BACK_BTN;
  var THEATER_HTML = '<h3 style="margin:0 0 8px;font-size:16px;">本物のアニメはこちら</h3>'
    + '<p style="margin:0 0 6px">この画面の映像はデモ表示です。実際に公開中のアニメ連載「星海鉄道カプセル便」はYouTubeでご覧ください。</p>'
    + '<p style="margin:0;line-height:2"><a style="color:#93c5fd" href="https://youtu.be/W2vBs_-gCCc">第1話（横型版）</a><br>'
    + '<a style="color:#93c5fd" href="https://youtu.be/nXpn8C7Rdxs">第2話 暗い星の少年</a><br>'
    + '<a style="color:#93c5fd" href="https://youtu.be/m5gljtNG17E">第3話 雨の星の少女</a><br>'
    + '<a style="color:#93c5fd" href="https://youtu.be/Heg1foKDU8I">翼の少女たち（短編）</a></p>';
  var overlay = null, overlayRoute = '';
  function hideOverlay(){
    if (overlay) { overlay.remove(); overlay = null; overlayRoute = ''; }
  }
  function showOverlay(route, html, compact){
    hideOverlay();
    overlay = document.createElement('div');
    overlay.id = 'anjel-v2-overlay';
    if (compact) {
      overlay.style.cssText = 'position:fixed;right:12px;bottom:150px;width:300px;max-width:92vw;z-index:9998;background:#0f1530;border:1px solid #7c3aed;border-radius:12px;color:#eee;font-size:13px;line-height:1.6;padding:14px 16px;box-shadow:0 8px 30px rgba(0,0,0,0.5);';
    } else {
      overlay.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);width:680px;max-width:94vw;max-height:78vh;overflow:auto;z-index:9998;background:#0f1530;border:1px solid #7c3aed;border-radius:12px;color:#eee;font-size:14px;line-height:1.7;padding:18px 20px;box-shadow:0 8px 30px rgba(0,0,0,0.5);';
    }
    overlay.innerHTML = html + '<div style="text-align:right;margin-top:10px"><button type="button" id="aj-overlay-close" style="background:#1e1b3a;color:#fff;border:1px solid #7c3aed;border-radius:8px;padding:6px 14px;font-size:13px;cursor:pointer;">閉じる</button></div>';
    document.body.appendChild(overlay);
    overlayRoute = route;
    document.getElementById('aj-overlay-close').addEventListener('click', hideOverlay);
  }
  function rootIsBlank(){
    var r = document.getElementById('root');
    if (!r) return true;
    return (r.innerText || '').trim().length < 30;
  }
  var blankPending = '';
  function maybeShowSubstitute(route, html){
    if (overlayRoute === route || blankPending === route) return;
    if (!rootIsBlank()) return;
    blankPending = route;
    setTimeout(function(){
      blankPending = '';
      var h = location.hash || '';
      if (h.indexOf('#/' + route) === 0 && rootIsBlank()) showOverlay(route, html, false);
    }, 900);
  }
  function checkRoute(){
    var h = location.hash || '';
    if (h.indexOf('#/ai-config') === 0) {
      maybeShowSubstitute('ai-config', AI_CONFIG_HTML);
    } else if (h.indexOf('#/mypage') === 0) {
      maybeShowSubstitute('mypage', MYPAGE_HTML);
    } else if (h.indexOf('#/theater') === 0) {
      if (overlayRoute !== 'theater') showOverlay('theater', THEATER_HTML, true);
    } else {
      if (overlayRoute) hideOverlay();
    }
  }
  function init(){
    buildPanel();
    window.addEventListener('hashchange', function(){ setTimeout(checkRoute, 700); });
    setInterval(checkRoute, 2500);
    setTimeout(checkRoute, 1200);
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
