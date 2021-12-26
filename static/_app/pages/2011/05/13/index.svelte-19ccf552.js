import{S as x,i as C,s as $,N as I,e as m,t as _,k as T,j as k,c as u,a as y,g as w,d as l,n as j,m as D,b as v,f as E,D as n,o as L,E as P,x as S,u as X,v as z}from"../../../../chunks/vendor-40f27b4e.js";import{C as R}from"../../../../chunks/CodeRenderer-8c0a1f9a.js";function q(c){let e,a,h,p,d,s,r,i;return r=new I({props:{source:c[0],renderers:{code:R}}}),{c(){e=m("div"),a=m("p"),h=_("written on "),p=_(b),d=T(),s=m("div"),k(r.$$.fragment),this.h()},l(t){e=u(t,"DIV",{});var o=y(e);a=u(o,"P",{class:!0});var f=y(a);h=w(f,"written on "),p=w(f,b),f.forEach(l),d=j(o),s=u(o,"DIV",{class:!0});var g=y(s);D(r.$$.fragment,g),g.forEach(l),o.forEach(l),this.h()},h(){v(a,"class","date"),v(s,"class","content")},m(t,o){E(t,e,o),n(e,a),n(a,h),n(a,p),n(e,d),n(e,s),L(r,s,null),i=!0},p:P,i(t){i||(S(r.$$.fragment,t),i=!0)},o(t){X(r.$$.fragment,t),i=!1},d(t){t&&l(e),z(r)}}}let b="2011/05/13";function M(c){return[`

# Chebyshev polynomials in LaTeX

I'm recovering from an obsession with [Chebyshev polynomials](http://mathworld.wolfram.com/ChebyshevPolynomialoftheFirstKind.html). Despite the fancy title and somewhat-intimidating definition, Chebyshev polynomials are actually a fantastic shortcut -- relative to what we're taught from the book -- to factoring out trigonometric double-angle problems like \`cos(6x)\`.

I was originally going to write a script that calculated the Chebyshev polynomials, but when I learned Python's [SciPy](http://www.scipy.org/) library already has a function, I "pivoted." Instead I wanted to write the below script, which calculates the polynomial using scipy.special.orthogonal.chebyt(), then creates a [LaTeX](http://www.latex-project.org/) -formatted string representation of the equation.

Here's the code, it should be pretty straightforward:

\`\`\`python
import sys
import math
from scipy.special import orthogonal as orth


def chebyTex(n):
    """Returns a LaTeX-formatted string for a Chebyshev polynomial of
    order n."""
    c = orth.chebyt(n)
    coeffs = []
    for i in c:
        if i >= 1 or i <= -1:
            coeffs.append(int(round(i)))
        else:
            pass

    pows = [coeffs.index(i) * 2 for i in coeffs]
    pows.sort(reverse=True)

    # The only "magic" in this function is some string manipulation to
    # handle the LaTeX formatting for super- and subscript characters.
    arrays = zip(coeffs, pows)
    latex_string = "[T](){%s}(x) = " % n
    for array in arrays:
        z = n - arrays.index(array) * 2
        if arrays[-1] != array:
            latex_string += r"%sx" % array[0]
            latex_string += r"^{%s} + " % z
        else:
            if not n % 2:
                latex_string += "%s" % array[0]
            else:
                latex_string += "%sx" % array[0]

    return latex_string


if __name__ == "__main__":
    s = chebyTex(int(sys.argv[1]))
    print(s)
\`\`\`

It would be trivial to connect to something like [MathBin](http://mathbin.net) pull down and store the resulting image, but was beyond the scope of this little script.
`]}class F extends x{constructor(e){super();C(this,e,M,q,$,{})}}export{F as default};
