import{S as k,i as x,s as C,N as $,e as p,t as y,k as S,j as E,c as f,a as v,g as w,d as u,n as T,m as I,b as _,f as R,D as n,o as j,E as M,x as P,u as W,v as Y}from"../../../../chunks/vendor-40f27b4e.js";import{C as D}from"../../../../chunks/CodeRenderer-8c0a1f9a.js";function L(c){let e,t,l,d,m,r,s,a;return s=new $({props:{source:c[0],renderers:{code:D}}}),{c(){e=p("div"),t=p("p"),l=y("written on "),d=y(b),m=S(),r=p("div"),E(s.$$.fragment),this.h()},l(o){e=f(o,"DIV",{});var i=v(e);t=f(i,"P",{class:!0});var h=v(t);l=w(h,"written on "),d=w(h,b),h.forEach(u),m=T(i),r=f(i,"DIV",{class:!0});var g=v(r);I(s.$$.fragment,g),g.forEach(u),i.forEach(u),this.h()},h(){_(t,"class","date"),_(r,"class","content")},m(o,i){R(o,e,i),n(e,t),n(t,l),n(t,d),n(e,m),n(e,r),j(s,r,null),a=!0},p:M,i(o){a||(P(s.$$.fragment,o),a=!0)},o(o){W(s.$$.fragment,o),a=!1},d(o){o&&u(e),Y(s)}}}let b="2012/10/19";function A(c){return[`

# How to Run a Windows Service As A Linux Daemon

**Premise:** You've got a Windows service that you want to run on a Linux server

**Problem:** Your code is written using the .NET framework and some language that targets the CLR (C#, VB, Clojure-CLR, etc.)

**Solution:** [Mono](http://www.mono-project.com/Main_Page) is an open-source implementation of the .NET framework. By installing mono you gain access to a ton of useful stuff, but the relevant item here is the \`mono-service\` executable. (Installing mono is out of the scope of this blog post, but odds are pretty good mono is available from your distro's package management system.)

Once installed, you can run your compiled code like so:

    mono-service SomeExecutable.exe

By default, this creates a lockfile in \`/tmp\`. You can change this by using the \`-l:<lockfile>\` option. This is great, because now your service is running in the background! However, this is really flimsy; what if the process dies? What if the server needs rebooted? To solve this I'm using [supervisor](http://supervisord.org/).

## Get It Running In 4 Steps

Once you've got supervisor and mono installed, follow these steps:

1.  Create a supervisor file in \`/etc/supervisor/conf.d/\` with a descriptive name. We'll use \`mysvc.conf\`.
2.  Edit \`mysvc.conf\` so it looks similar to this^1,2^:

        [program:mysvc]
        command=mono-service MyWindowsService.exe --no-daemon
        directory=/path/to/executable
        user=someuser
        stdout_logfile=/home/someuser/mysvc/out.log
        redirect_stderr=true

3.  \`sudo service supervisor update\`. This will reload the config file you edited above.
4.  To confirm that your process started, run \`ps aux|grep mono\`. You should see it in the process list.

## Conclusion

Hope this helps. Supervisor has a ton of different options for configuring how a process runs, it's worth it to RTFM.

### Footnotes

**1.** The directory specified in your \`stdout_logfile\` parameter must already exist. If you try to start the \`mysvc\` process without creating it, supervisor will throw an error. Also, the \`user\` parameter should be set to a user that has permissions to write to the directory where you're keeping the \`stdout_logfile\`. Please consult the relevant [supervisor docs](http://supervisord.org/configuration.html#program-x-section-values) for more about users & processes.

**2**. You must use the \`--no-daemon\` flag to avoid creation of the lockfile which indirectly allows supervisor to capture/redirect stdout/stderr to a logfile.
`]}class N extends k{constructor(e){super();x(this,e,A,L,C,{})}}export{N as default};
