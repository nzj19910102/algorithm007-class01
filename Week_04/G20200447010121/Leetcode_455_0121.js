var findContentChildren = function(g, s) {
    if(!g.length || !s.length) return 0
    g.sort((a ,b) => a-b)
    s.sort((a ,b) => a-b)
    var gcount = 0, scount = 0;
    while(gcount < g.length && scount < s.length) {
        if(g[gcount] <= s[scount]) {
            gcount++
        }
        scount++
    }
    console.log(gcount)
    return gcount
};

