/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function() {
    var w = window,
        C = '___grecaptcha_cfg',
        cfg = w[C] = w[C] || {},
        N = 'grecaptcha';
    var gr = w[N] = w[N] || {};
    gr.ready = gr.ready || function(f) {
        (cfg['fns'] = cfg['fns'] || []).push(f);
    };
    w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
    (cfg['render'] = cfg['render'] || []).push('6LfrsyYdAAAAAKRLfChrNpYPcDXhBsU4lgKIPxFi');
    w['__google_recaptcha_client'] = true;
    var d = document,
        po = d.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://www.gstatic.com/recaptcha/releases/2W_gRz39xX8G13fM-OdyQPlc/recaptcha__en.js';
    po.crossOrigin = 'anonymous';
    po.integrity = 'sha384-u58lmaqnNN/mK+75qtMhq1v5qJ4VVlBXBCJoUO+w4/lUH+f065BssRD9I8gNvIhn';
    var e = d.querySelector('script[nonce]'),
        n = e && (e['nonce'] || e.getAttribute('nonce'));
    if (n) {
        po.setAttribute('nonce', n);
    }
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();