#! /usr/bin/env python2

"""
    Very simple script to update headers and footers for the gregorio website.

    ./BuildSite.py replaces what is above <!-- header --> with the content
    of header.html, and what is below <!-- footer --> with the content of 
    footer.html.
"""

import os
from os.path import join, getsize

HEADER_LIMIT = '<!-- header -->'
FOOTER_LIMIT = '<!-- footer -->'

def get_all_files():
    "Get all html files in current directory, recursively"
    res = []
    for root, dirs, files in os.walk('.'):
        for filename in files:
            if (filename.endswith(".html") and filename != 'header.html' and filename != 'footer.html'):
                res.append(join(root,filename))
        if 'illus' in dirs:
            dirs.remove('illus')
        if '.git' in dirs:
            dirs.remove('.git')
    return ['index.html']
    #return res

def get_header():
    "Get header.html content"
    with open('header.html', 'r') as infile:
       HEADER=infile.read()

def get_footer():
    "Get footer.html content"
    with open('footer.html', 'r') as infile:
       FOOTER=infile.read()

def main():
    "Get the job done"
    files = get_all_files()
    header = ''
    footer = ''
    with open('header.html', 'r') as infile:
       header=infile.read()
    with open('footer.html', 'r') as infile:
       footer=infile.read()
    for myfile in files:
        result = []
        state = 'header'
        with open(myfile, 'r') as infile:
            for line in infile:
                if state == 'header' and HEADER_LIMIT in line:
                    print "je vois la ligne header"
                    result.append(line)
                    state = 'main'
                elif state == 'main' and FOOTER_LIMIT in line:
                    result.append(line)
                    break
                elif state == 'main':
                    result.append(line)
        with open(myfile, 'w') as outfile:
            outfile.write(header + ''.join(result) + footer)

if __name__ == "__main__":
    main()
