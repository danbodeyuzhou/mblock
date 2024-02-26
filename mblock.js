(function(){
    var head = document.head;
    function insertScript(src, defer, prepend){
        var script = document.createElement('script');
        script.src = src;
        script.defer = defer;
        if (prepend) {
            head.prepend(script);
        } else {
            head.append(script);
        }
        return script;
    }
    insertScript('chunks/mblock-loading.js?v5.4.0-11231403', undefined);
    insertScript('chunks/mblock.cb9241c31d4e21e26d9c.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.cbee00dbdd4d1adf3d96.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.b1baaa0c43c7d5d46a79.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.4995d37092d6f5e8da4a.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.85adffa06de3f3cf0d18.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.57a43ef30bd16eeee79c.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.1b6023f8e30d059bf11d.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.fed1b85d0d82905cb5c3.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.1b461940446438a8dc14.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.1c0400dbab1624ed5ec0.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.3b9b14f673df1983561c.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.1aacf280bde09d393717.js?v5.4.0-11231403', false);
    insertScript('chunks/mblock.50676005446d3a480f97.js?v5.4.0-11231403', false);
    insertScript('vs/loader.js?v5.4.0-11231403', true);
    insertScript('chunks/iconfont.js?v5.4.0-11231403', true);
    insertScript('chunks/web-worker-rpc.js?v5.4.0-11231403', true);
})()