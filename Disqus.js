<div id="disqus_thread"></div>
<script>
    var parentUrl = document.referrer;
    var disqus_config = function () {
        this.page.url = parentUrl;
        this.page.identifier = parentUrl;
        };
    //Github Default
    (function () {
        var d = document, s = d.createElement('script');
        s.src = '//SITE_SHORTNAME_ANDA_DISINI.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    (function () {
        function checkSizeChange() {
            var viewportHeight = window.innerHeight;
            var contentHeight = document.getElementById('disqus_thread').clientHeight;
            if (viewportHeight !== contentHeight && contentHeight > 100) {
                window.parent.postMessage({
                sentinel: 'amp',
                type: 'embed-size',
                height: contentHeight
                }, '*')
            }
        }
        var mutationObserverAvailable = typeof window.MutationObserver === 'function';
        function bindObserver() {
            var frame = document.getElementsByTagName('iframe')[0];
            if (frame === null || frame === undefined) {
                setTimeout(bindObserver, 200);
                return;
                }
            checkSizeChange();
            var resizeObserver = new MutationObserver(checkSizeChange);
                resizeObserver.observe(frame, {
                    attributes: true,
                    attributeFilter: ['style']
                    });
                }
                if (mutationObserverAvailable) {
                    bindObserver();
                    }
                setInterval(checkSizeChange, mutationObserverAvailable ? 5000 : 500);
        })();
</script>
