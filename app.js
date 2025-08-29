
// Simple language toggle: defaults to Kreyol (ht)
(function(){
  const saved = localStorage.getItem('zanset_lang') || 'ht';
  document.documentElement.classList.remove('lang-ht','lang-en');
  document.documentElement.classList.add('lang-'+saved);
  function setLang(l){
    localStorage.setItem('zanset_lang', l);
    document.documentElement.classList.remove('lang-ht','lang-en');
    document.documentElement.classList.add('lang-'+l);
    const htBtn = document.querySelector('#btn-ht'); const enBtn = document.querySelector('#btn-en');
    if(htBtn && enBtn){
      htBtn.classList.toggle('active', l==='ht');
      enBtn.classList.toggle('active', l==='en');
    }
  }
  window.setLang = setLang;
  window.addEventListener('DOMContentLoaded',()=>{
    const l = localStorage.getItem('zanset_lang') || 'ht';
    setLang(l);
  });
})();
