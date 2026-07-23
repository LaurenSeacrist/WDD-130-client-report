(function(){
  var saved = localStorage.getItem('pf-theme') || 'void';
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function(){
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function(a){
      if(a.getAttribute('href') === page) a.classList.add('active');
    });

    document.querySelectorAll('.theme-btn').forEach(function(btn){
      if(btn.dataset.theme === saved) btn.classList.add('active');
      btn.addEventListener('click', function(){
        var t = btn.dataset.theme;
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('pf-theme', t);
        document.querySelectorAll('.theme-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  });
})();
