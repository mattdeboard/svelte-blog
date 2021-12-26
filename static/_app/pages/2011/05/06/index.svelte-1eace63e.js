import{S as k,i as I,s as x,N as F,e as p,t as b,k as $,j,c as f,a as y,g,d,n as S,m as C,b as v,f as P,D as n,o as E,E as Y,x as D,u as H,v as O}from"../../../../chunks/vendor-40f27b4e.js";import{C as R}from"../../../../chunks/CodeRenderer-8c0a1f9a.js";function T(c){let t,a,l,u,h,s,o,r;return o=new F({props:{source:c[0],renderers:{code:R}}}),{c(){t=p("div"),a=p("p"),l=b("written on "),u=b(_),h=$(),s=p("div"),j(o.$$.fragment),this.h()},l(e){t=f(e,"DIV",{});var i=y(t);a=f(i,"P",{class:!0});var m=y(a);l=g(m,"written on "),u=g(m,_),m.forEach(d),h=S(i),s=f(i,"DIV",{class:!0});var w=y(s);C(o.$$.fragment,w),w.forEach(d),i.forEach(d),this.h()},h(){v(a,"class","date"),v(s,"class","content")},m(e,i){P(e,t,i),n(t,a),n(a,l),n(a,u),n(t,h),n(t,s),E(o,s,null),r=!0},p:Y,i(e){r||(D(o.$$.fragment,e),r=!0)},o(e){H(o.$$.fragment,e),r=!1},d(e){e&&d(t),O(o)}}}let _="2011/05/06";function W(c){return[`

# Python code deployment with Fabric

So last night at the [IndyPy](http://www.meetup.com/python-182/) meetup I gave a very impromptu talk on [Fabric](http://www.meetup.com/python-182/). It lasted maybe five minutes and afterward I really felt like I just did not do this great tool justice. In order to make up for that, I thought I'd dive in a little deeper to Fabric.

## Why I am an idiot

First and foremost, I love Fabric because **it lets me be lazy**. For far too long while I was developing [Yukmarks](http://yukmarks.com), I was manually typing things like:

\`\`\`bash
# On local:
ssh my-ip-address.com

# On remote:
git pull && sudo /etc/init.d/apache2 restart && ./manage.py dump_data && pg_dump >> foo.txt
\`\`\`

That's right:

> 1.  ssh to my "production" server
> 2.  pull the latest revisions
> 3.  use django's built-in data dump to back up my database
> 4.  _also_ use the postgres dump
> 5.  not pictured: updating the [Haystack](http://haystacksearch.org/) search index for [Whoosh](https://bitbucket.org/mchaput/whoosh/wiki/Home)

You get the picture. It was ugly, and stupid, and time consuming, and I literally cannot believe that I spent all those calories typing those commands in over... and over... and over again.

## Why I love Fabric

So then [someone](http://bretthoerner.com) introduced me to Fabric. I now use Fabric to automate code deployment. (See my full fabfile [here](https://github.com/mattdeboard/Yuk/blob/master/fabfile.py).)

(In no way do I claim to use Fabric to its full potential, nor do I claim to be an expert, nor do I claim that my fabfile is _fabulous_. If you've got tips or corrections, please leave them in the comments.)

To make Fabric work, you just import the API and you're off:

\`\`\`python

from fabric.api import *
from hosts import hosts, secret

# I keep my hosts and auth data in a local file called hosts.py
env.password = secret
env.hosts = hosts

def git_pull():

    run("cd %s; . bin/activate; cd %s; git pull; ./manage.py schemamigration"

    :   " --auto yuk; ./manage.py migrate yuk;cp %s* %s;sudo /etc/init.d/apache2"
        " force-reload" % (domain_dir, appdir, css_dir, static_file_dir))
\`\`\`

The above code is exactly what it looks like: a number of semicolon-separated shell commands. It's probably the most idiot-proof, time-saving thing I've ever used. Please see the below:

![Curiously, coding in Java while flying an airplane moves both dots toward the center.](/static/GRAPH.png)

Stop typing so much. Fabric makes things ridiculously easy.

**Edit 5/8/11**: I actually reduced the complexity of my update_index() fabfile function quite a bit. I was doing a lot of really stupid chowning back and forth, which I've now fixed. Old:

\`\`\`python

def update_search():

:   run("cd %s; . bin/activate; cd %s; sudo chown matt:matt %s; sudo chown matt"
    ":matt %s*; ./manage.py update_index; sudo chown www-<data:www-data> %s; "
    "sudo chown www-<data:www-data> %s*; sudo /etc/init.d/apache2 force-reloa"
    "d" % (domain_dir, appdir, whoosh_dir,
    whoosh_dir, whoosh_dir, whoosh_dir))
\`\`\`

New:

\`\`\`python

def update_search():

:

    run("sudo -u www-data /a/mattdeboard.net/bin/python %smanage.py update_inde"

    :   "x; sudo /etc/init.d/apache2 force-reload" % appdir)
\`\`\`

**p.s.** In addition to Fabric, you'll definitely want to incorporate cron & creative use of your Makefile to make your life easier. Consult [the github repo](https://github.com/mattdeboard/Yuk) for Yukmarks.
`]}class M extends k{constructor(t){super();I(this,t,W,T,x,{})}}export{M as default};
