function myfun(){
    let dark = document.querySelector('.dark-mode');
    let light = document.querySelector('.light-mode');
    let country = document.querySelector('.country-flags');
    let top = document.querySelector('.light');
    let region = document.querySelector('.region');
    let search = document.querySelector('.search');
    let searchInp = document.querySelector('.search-inp');
   dark.onclick = function(){
      light.style.display='flex';
      dark.style.display='none';
      country.classList.add('c-dark');
      top.classList.add('l-dark');
      region.classList.add('r-dark');
      search.classList.add('s-dark');
      searchInp.classList.add('i-dark');
   }
   light.onclick = function(){
      light.style.display='none';
      dark.style.display='flex';
      country.classList.remove('c-dark');
      top.classList.remove('l-dark');
      region.classList.remove('r-dark');
      search.classList.remove('s-dark');
      searchInp.classList.remove('i-dark');
      flag.classList.remove('f-dark');
 }


}
myfun()
