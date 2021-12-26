import{S as w,i as x,s as I,N as j,e as m,t as b,k as P,j as E,c as g,a as f,g as _,d,n as S,m as T,b as k,f as $,D as n,o as H,E as D,x as C,u as F,v as Y}from"../../../../chunks/vendor-40f27b4e.js";import{C as U}from"../../../../chunks/CodeRenderer-8c0a1f9a.js";function W(u){let e,a,c,l,p,r,o,i;return o=new j({props:{source:u[0],renderers:{code:U}}}),{c(){e=m("div"),a=m("p"),c=b("written on "),l=b(v),p=P(),r=m("div"),E(o.$$.fragment),this.h()},l(t){e=g(t,"DIV",{});var s=f(e);a=g(s,"P",{class:!0});var h=f(a);c=_(h,"written on "),l=_(h,v),h.forEach(d),p=S(s),r=g(s,"DIV",{class:!0});var y=f(r);T(o.$$.fragment,y),y.forEach(d),s.forEach(d),this.h()},h(){k(a,"class","date"),k(r,"class","content")},m(t,s){$(t,e,s),n(e,a),n(a,c),n(a,l),n(e,p),n(e,r),H(o,r,null),i=!0},p:D,i(t){i||(C(o.$$.fragment,t),i=!0)},o(t){F(o.$$.fragment,t),i=!1},d(t){t&&d(e),Y(o)}}}let v="2011/05/08";function A(u){return[`

# Haystack index update script + cronjob

[Yukmarks](http://yukmarks.com) doesn't really have any users except for me and my girlfriend, so updating the search index manually has never been very difficult. Just punch up my [fabfile](http://mattdeboard.net/2011/05/06/if-you-dont-use-fabric-do/) and run update_search(). Trivial.

However, I am seriously, profoundly lazy, so all those keystrokes were getting annoying. Plus, manually updating search is just stupid & inefficient. I could use the same amount -- or less -- of keystrokes to just Ctrl-F on my Yukmarks [profile page](http://yukmarks.com/u:matt). So I wrote a script to automatically update my [Haystack](http://haystacksearch.org/) search. A cron job runs it every 15 minutes.

## The code

\`\`\`python

import subprocess
import sys
import logging

domain_dir = "/a/mattdeboard.net/"
appdir = domain_dir + "src/yukproj/"
whoosh_dir = appdir + "yuk/whoosh/"

def update():
    logging.basicConfig(
      filename='/a/mattdeboard.net/src/index.log',
      level=logging.INFO,
      format='%(asctime)s %(levelname)s:%(message)s',
      datefmt='%m/%d/%Y %H:%M:%S'
    )

    logging.info('Starting index update.')
    update_index = subprocess.Popen(['sudo', '-u', 'www-data',
      domain_dir+'bin/python',
      appdir+'manage.py', 'update_index'],
      stdout=subprocess.PIPE,
      stderr=subprocess.STDOUT)
    update_index.wait()
    apachereload = subprocess.Popen(['sudo',
      '/etc/init.d/apache2',
      'force-reload'],
      stdout=subprocess.PIPE,
      stderr=subprocess.STDOUT)
    apachereload.wait()

    if not any((update_index.returncode, apachereload.returncode)):
      logging.info('Index successfully updated.')
    else:
      subs = [update_index, apachereload]
      logging.error('**INDEX UPDATE FAILED**')
      logging.error('The following exit codes were returned:')
      logging.error('- update_index: %s' % update_index.returncode)
      logging.error('- apachereload: %s' % apachereload.returncode)

    for sub in subs:
      if sub.returncode:
        logging.error('Error information:')
        logging.error('stdout: %s' % sub.communicate()[0])
        logging.error('stderr: %s' % sub.communicate()[1])

if __name__ == '__main__':
  update()
\`\`\`

The (root) cron job:

\`\`\`bash

0,15,30,45 * * * * /a/mattdeboard.net/bin/python /a/mattdeboard.net/src/yukproj/
srchupdate.py -c|mail -s "Search Update Complete" matt
\`\`\`

(I have it all on one line in crontab, but broken up into two here for ease of reading.)

## What do

So basically every 15 minutes, the server runs [srchupdate.py](https://github.com/mattdeboard/Yuk/srchupdate.py), and logs the results to a log file outside the project directory. If the update fails, it logs the exit status values, stderr and stdout data (using the communicate() method and returnvalue attribute of Python's excellent \`subprocess.Popen\`). This captures traceback info and has made debugging much easier.

The biggest source of friction is [Whoosh](https://bitbucket.org/mchaput/whoosh/wiki/Home), which powers my Haystack install. Whoosh is pure Python, and very easy to install. However, it is _extremely_ slow. I'd probably even say ponderous. For ~350 bookmark entries on Yuk, it takes about 10 seconds to update. From what I understand, Solr is much faster, but has a much steeper learning curve. For Yukmarks, I think Whoosh is fine, but I doubt going forward I'd use it for any serious projects where speed is important.

If you got here after Googling for a Haystack auto-update solution, I hope this helps.

_Edit: Removed a paragraph about incremental indexing. Haystack does this by default._
`]}class R extends w{constructor(e){super();x(this,e,A,W,I,{})}}export{R as default};
