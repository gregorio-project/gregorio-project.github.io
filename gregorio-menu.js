function menuline(str){
  document.write(str,'\n');
};

function write_gre_menu() {
menuline('<div class="menu">');
menuline('    <ul class="menuitem">');
menuline('      <li><a href="/index.html">Gregorio</a>');
menuline('        <ul class="level2" id="menu-gregorio">');
menuline('          <li><a href="/gregorio-history.html">History</a> </li>');
menuline('          <li><a href="/introduction.html">Using Gregorio</a>');
menuline('		<ul class="level2">');
menuline('		<li><a href="/introduction-editor.html">In an editor</a></li>');
menuline('		<li><a href="/introduction-commandline.html">At the command line</a></li>');
menuline('		<li><a href="/introduction-web.html">Through the web</a></li>');
menuline('		<li><a href="/introduction-scribus.html">In Scribus</a></li>');
menuline('		    </ul>');
menuline('          </li>');
menuline('          <li><a href="/tutorial/tutorial-gabc-01.html">Tutorial</a></li>');
menuline('         <li><a href="https://github.com/gregorio-project/gregorio/releases">Download@github</a> </li>');
menuline('          <li><a href="/installation.html">Installation</a> </li>');
menuline('          <li><a href="/legalissues.html">Legal issues</a></li>');
menuline('        </ul>');
menuline('      </li>');
menuline('      <li><a href="/gregoriotex/index.html">Gregorio<span class="tex">T<span class="epsilon">e</span>X</span></a>');
menuline('        <ul class="level2" id="menu-gregoriotex">');
menuline('          <li><a href="/gregoriotex/tex.html"><span class="tex">T<span class="epsilon">e</span>X</span>?</a></li>');
menuline('          <li><a href="/gregoriotex/details.html">Detailed description</a></li>');
menuline('          <li><a href="/gregoriotex/example.html">Examples</a></li>');
menuline('          <li><a href="/gregoriotex/features.html">Bonus features</a></li>');
menuline('        </ul>');
menuline('      </li>');
menuline('      <li><a href="/gabc/index.html">gabc</a>');
menuline('        <ul class="level2" id="menu-gabc">');
menuline('          <li><a href="/gabc/index.html">Basics</a></li>');
menuline('          <li><a href="/gabc/details.html">Details</a></li>');
menuline('        </ul>');
menuline('      </li>');
menuline('      <li><a href="/structure.html">Gregorian notation</a>');
menuline('        <ul class="level2" id="menu-notation">');
menuline('          <li><a href="/structure.html">Structure</a></li>');
menuline('          <li><a href="/graphy.html">Alignment</a></li>');
menuline('        </ul>');
menuline('      </li>');
menuline('      <li><a href="/contact.html">Contact</a>');
menuline('      </li>');
menuline('      <li><a href="/links.html">Links</a>');
menuline('      </li>');
menuline('    </ul>');
menuline('  </div>');
};

function initialize_menu() {
      document.title = $('h1:first').text();
      $.each(['gregorio', 'gregoriotex', 'gabc', 'notation'], function(i, menu) {
        if (context != menu) {
          $('#menu-'+menu).hide();
        }
      });
}
