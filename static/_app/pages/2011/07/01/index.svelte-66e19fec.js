import{S as v,i as I,s as z,N as $,e as f,t as g,k as P,j as x,c as h,a as b,g as y,d as l,n as C,m as j,b as w,f as E,D as i,o as A,E as F,x as G,u as D,v as S}from"../../../../chunks/vendor-40f27b4e.js";import{C as L}from"../../../../chunks/CodeRenderer-8c0a1f9a.js";function M(d){let e,a,u,m,c,o,s,n;return s=new $({props:{source:d[0],renderers:{code:L}}}),{c(){e=f("div"),a=f("p"),u=g("written on "),m=g(k),c=P(),o=f("div"),x(s.$$.fragment),this.h()},l(t){e=h(t,"DIV",{});var r=b(e);a=h(r,"P",{class:!0});var p=b(a);u=y(p,"written on "),m=y(p,k),p.forEach(l),c=C(r),o=h(r,"DIV",{class:!0});var _=b(o);j(s.$$.fragment,_),_.forEach(l),r.forEach(l),this.h()},h(){w(a,"class","date"),w(o,"class","content")},m(t,r){E(t,e,r),i(e,a),i(a,u),i(a,m),i(e,c),i(e,o),A(s,o,null),n=!0},p:F,i(t){n||(G(s.$$.fragment,t),n=!0)},o(t){D(s.$$.fragment,t),n=!1},d(t){t&&l(e),S(s)}}}let k="2011/07/01";function O(d){return[`

# Export ALL Your Facebook Photos Easily

It's no secret that [Google+](http://plus.google.com) is gaining new users as fast as the acceptance pipeline will let invitees click "Make me an account."

I love G+, and am thrilled that someone has finally, IMO, smashed Facebook's reign as top dog. There's been a poverty of choice for years when it comes to the social stuff. Google has hit it out of the park. If you are undecided about trying out G+, do it. It's well worth it.

At any rate, on to why I'm writing. If there's a way to download all your Facebook photos at one fell swoop, I don't know what it is. Of course, I don't use Facebook apps or anything, so I'm sure there's something there. It's just easier for me to write it myself.

It will download all of your pictures from your Facebook account, and store them in whatever directory you specify (default is your current working directory). Additionally, this script will create a subdirectory for each album, and tuck each photo into the appropriate subdir. This way, when you go to upload them to [Picasa](http://picasaweb.google.com), you can just create whatever Picasa folder, and just "select all" in a particular album subdirectory for easy uploadin'.

I guess I could plug this in to the Picasa API, and may do so this weekend.

\`\`\`python
import optparse
import os
import re
import subprocess
import sys
import urllib2

import facepy

from mytoken import token, username


def get_photos(dl_dir):
    dest = os.path.abspath(dl_dir)
    p = re.compile(r"[,!' /]")
    fb_photos = find_photos()
    for album in fb_photos:
        albname = p.sub("_", album).lower()
        mk_album_dirs(dest, albname)
        folder = albname
        for img_url in fb_photos[album]["images"]:
            img_name = img_url.split("/")[-1]
            url = urllib2.urlopen(img_url)

            with open("%s/%s/%s" % (dest, folder, img_name), "w") as f:
                meta = url.info()
                filesize = int(meta.getheaders("Content-Length")[0])
                # print "Downloading: %s Bytes: %s" % (img_name, filesize)
                filesize_dl = 0
                blocksize = 8192
                while True:
                    buff = url.read(blocksize)
                    if not buff:
                        break

                    filesize_dl += blocksize
                    f.write(buff)
                    status = r"%10d [%3.2f%%]" % (
                        filesize_dl,
                        filesize_dl * 100.0 / filesize,
                    )
                    status = status + chr(8) * (len(status) + 1)
                    # print status,


def find_photos():
    """
    Creates a dictionary, with album id as key and a list of images
    in the album as the value.
    """
    albums = {}
    graph = facepy.GraphAPI(token)
    my_albums = graph.get("%s/albums" % username)
    for album in my_albums:
        albums[album["name"]] = {}
        albums[album["name"]]["id"] = album["id"]
        my_pics = graph.get("%s/photos?limit=100" % album["id"])
        albums[album["name"]]["images"] = [pic["source"] for pic in my_pics]
    return albums


def mk_album_dirs(dest, album):
    """
    Create a subfolder for each facebook album.
    """
    if not os.path.exists("%s/%s" % (dest, album)):
        os.mkdir("%s/%s" % (dest, album))
    return


if __name__ == "__main__":
    d = os.getcwd()
    parser = optparse.OptionParser()
    parser.add_option(
        "-d",
        "--dest",
        action="store",
        type="string",
        dest="dest_dir",
        default=os.getcwd(),
        help=(
            "Specify the directory where you want your photos t"
            "o be downloaded. Photos will be downloaded to cur"
            "rent working dir by default."
        ),
    )
    args = sys.argv[1:]
    (options, args) = parser.parse_args(args)
    get_photos(options.dest_dir)
\`\`\`
`]}class V extends v{constructor(e){super();I(this,e,O,M,z,{})}}export{V as default};
