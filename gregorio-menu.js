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
menuline('      <li><a href="/gabc/index.html">gabc</a>');//File Structure 
//                  header
//                  %% separator
//                  notation
//                  % comments
menuline('        <ul class="level2" id="menu-gabc">');
menuline('          <li>Headers</li>');
menuline('              <ul class="level3" id="menu-gabc-headers">');
menuline('                  <li>Mode Headers</li>');
menuline('                  <li>Defining Macros</li>');
menuline('              </ul>');
menuline('          <li>Text Syntax</li>');//Syllable Syntax basics
//                      style tags
//                          bold
//                          colored
//                          italic
//                          small capitals
//                          teletype
//                          underline
//                      syllable controls
//                          clear
//                          elision
//                          euouae
//                          no line break
//                          protrusion
//                      other
//                          above lines text
//                          special characters
//                          verbatim
menuline('              <ul class="level2" id="menu-gabc-text">');
menuline('                  <li>Lyric Centering</li>');
menuline('                  <li>Translation Text</li>');
menuline('                  <li>Special Characters</li>');
//                          Advanced topics
menuline('                  <li>Vowel Detection</li>');
//                              elision
//                              Vowel file
menuline('              </ul>');
menuline('        </ul>');
menuline('          <li>Note Syntax</li>');//Syllable Syntax basics
menuline('              <ul class="level2" id="menu-gabc-note">');
menuline('                  <li>Clefs</li>');
menuline('                  <li>Pitches</li>');
menuline('                  <li>One-Note Neumes</li>');
menuline('                  <li>Complex Neumes</li>');
menuline('                  <li>Additional Symbols</li>');
menuline('                  <li>Horizontal Episema</li>');
menuline('                  <li>Separation Bars</li>');
menuline('                  <li>Custos</li>');
menuline('                  <li>Line Breaks</li>');
//                          Advanced topics
menuline('                  <li>Oriscus Orientation</li>');
menuline('                  <li>Neume Fusion</li>');
menuline('                  <li>Neume Spacing</li>');
menuline('                  <li>Choral Signs</li>');
menuline('                  <li>Braces</li>');
menuline('                  <li>Stem Length for the Bottom Lines</li>');
menuline('                  <li>Custom Ledger Lines</li>');
menuline('                  <li>Simple Slurs</li>');
menuline('                  <li>High and Low Note Episema Placement</li>');
menuline('                  <li>Horizontal Episema Tuning</li>');
menuline('                  <li>Above Line Text within Notes</li>');
menuline('                  <li>Verbatim TeX within Notes</li>');
menuline('                  <li>Using Macros</li>');
menuline('              </ul>');
menuline('        </ul>');
menuline('      </li>');
menuline('      <li><a href="/tipsntricks.html">Tips and Tricks</a>');
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
      $.each(['gregorio', 'gregoriotex', 'gabc', 'tipsntricks', 'notation'], function(i, menu) {
        if (context != menu) {
          $('#menu-'+menu).hide();
        }
      });
}
