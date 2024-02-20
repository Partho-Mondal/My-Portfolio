const _0x2480b7 = _0x344a;
(function (_0x3e4bd4, _0x4633ff) {
  const _0x3e775c = _0x344a,
    _0x5111fb = _0x3e4bd4();
  while (!![]) {
    try {
      const _0x24b1aa =
        parseInt(_0x3e775c(0x129)) / 0x1 +
        (parseInt(_0x3e775c(0x137)) / 0x2) *
          (-parseInt(_0x3e775c(0x11b)) / 0x3) +
        parseInt(_0x3e775c(0x113)) / 0x4 +
        (-parseInt(_0x3e775c(0x120)) / 0x5) *
          (parseInt(_0x3e775c(0x131)) / 0x6) +
        parseInt(_0x3e775c(0x11e)) / 0x7 +
        parseInt(_0x3e775c(0x124)) / 0x8 +
        -parseInt(_0x3e775c(0x122)) / 0x9;
      if (_0x24b1aa === _0x4633ff) break;
      else _0x5111fb["push"](_0x5111fb["shift"]());
    } catch (_0x2e30ea) {
      _0x5111fb["push"](_0x5111fb["shift"]());
    }
  }
})(_0x3492, 0xcd17c);
const form = document[_0x2480b7(0x125)](_0x2480b7(0x12c)),
  fullName = document[_0x2480b7(0x12a)](_0x2480b7(0x136)),
  email = document["getElementById"](_0x2480b7(0x12b)),
  subject = document[_0x2480b7(0x12a)](_0x2480b7(0x127)),
  mess = document["getElementById"](_0x2480b7(0x115));
function sendEmail() {
  const _0x10a454 = _0x2480b7,
    _0x830d4a =
      _0x10a454(0x135) +
      fullName[_0x10a454(0x12f)] +
      _0x10a454(0x126) +
      email[_0x10a454(0x12f)] +
      _0x10a454(0x12d) +
      subject["value"] +
      _0x10a454(0x117) +
      mess[_0x10a454(0x12f)];
  Email[_0x10a454(0x118)]({
    SecureToken: _0x10a454(0x130),
    To: _0x10a454(0x134),
    From: _0x10a454(0x134),
    Subject: subject,
    Body: _0x830d4a,
  })["then"]((_0x20c964) => {
    const _0x32aaff = _0x10a454;
    _0x20c964 == "OK" && Swal[_0x32aaff(0x132)]({ text: _0x32aaff(0x11a) });
  });
}
function checkInputs() {
  const _0x227936 = _0x2480b7,
    _0x568456 = document["querySelectorAll"](_0x227936(0x121));
  for (const _0x3ee321 of _0x568456) {
    _0x3ee321["value"] == "" &&
      (_0x3ee321[_0x227936(0x119)][_0x227936(0x11f)]("error"),
      _0x3ee321["parentElement"]["classList"]["add"](_0x227936(0x114))),
      _0x568456[0x1][_0x227936(0x12f)] != "" && checkEmail(),
      _0x568456[0x1][_0x227936(0x11c)]("keyup", () => {
        checkEmail();
      }),
      _0x3ee321[_0x227936(0x11c)](_0x227936(0x123), () => {
        const _0x27db5a = _0x227936;
        _0x3ee321[_0x27db5a(0x12f)] != ""
          ? (_0x3ee321["classList"][_0x27db5a(0x12e)]("error"),
            _0x3ee321["parentElement"][_0x27db5a(0x119)][_0x27db5a(0x12e)](
              _0x27db5a(0x114)
            ))
          : (_0x3ee321["classList"][_0x27db5a(0x11f)](_0x27db5a(0x114)),
            _0x3ee321[_0x27db5a(0x138)][_0x27db5a(0x119)]["add"](
              _0x27db5a(0x114)
            ));
      });
  }
}
function _0x344a(_0x28a437, _0x398bbb) {
  const _0x34928c = _0x3492();
  return (
    (_0x344a = function (_0x344a90, _0x536543) {
      _0x344a90 = _0x344a90 - 0x113;
      let _0x38c9bb = _0x34928c[_0x344a90];
      return _0x38c9bb;
    }),
    _0x344a(_0x28a437, _0x398bbb)
  );
}
function checkEmail() {
  const _0xb348c3 = _0x2480b7,
    _0x5c7b61 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
    _0x448d4b = document[_0xb348c3(0x125)](_0xb348c3(0x11d));
  !email[_0xb348c3(0x12f)]["match"](_0x5c7b61)
    ? (email[_0xb348c3(0x119)][_0xb348c3(0x11f)](_0xb348c3(0x114)),
      email[_0xb348c3(0x138)][_0xb348c3(0x119)][_0xb348c3(0x11f)](
        _0xb348c3(0x114)
      ),
      email[_0xb348c3(0x12f)] != ""
        ? (_0x448d4b["innerText"] = _0xb348c3(0x133))
        : (_0x448d4b["innerText"] = _0xb348c3(0x116)))
    : (email["classList"][_0xb348c3(0x12e)](_0xb348c3(0x114)),
      email["parentElement"][_0xb348c3(0x119)]["remove"](_0xb348c3(0x114)));
}
form[_0x2480b7(0x11c)]("submit", (_0x5c2001) => {
  const _0x4290c6 = _0x2480b7;
  _0x5c2001["preventDefault"](), checkInputs();
  if (
    !fullName[_0x4290c6(0x119)][_0x4290c6(0x128)]("error") &&
    !email[_0x4290c6(0x119)][_0x4290c6(0x128)](_0x4290c6(0x114)) &&
    !subject[_0x4290c6(0x119)]["contains"](_0x4290c6(0x114)) &&
    !mess[_0x4290c6(0x119)][_0x4290c6(0x128)](_0x4290c6(0x114))
  )
    return sendEmail(), form["reset"](), ![];
});
function _0x3492() {
  const _0x25f682 = [
    "querySelector",
    "\x20<br>\x20Email:\x20",
    "subject",
    "contains",
    "623828eabVKN",
    "getElementById",
    "email",
    "form",
    "\x20<br>\x20Subject:\x20",
    "remove",
    "value",
    "fece33a7-ffdf-4577-942f-46c305dc130d",
    "7620rTwRuW",
    "fire",
    "Enter\x20a\x20valid\x20email\x20address",
    "justforlearning2024@gmail.com",
    "Full\x20Name:\x20",
    "name",
    "22nSAEGm",
    "parentElement",
    "4912376dQkUgq",
    "error",
    "message",
    "Email\x20Address\x20can\x27t\x20be\x20blank",
    "\x20<br>\x20Message:\x20",
    "send",
    "classList",
    "Message\x20sent\x20successfully!",
    "289794ycLWjp",
    "addEventListener",
    ".error-txt.email",
    "6973995muPouA",
    "add",
    "1940mSZIGu",
    ".item",
    "17842041aixwoS",
    "keyup",
    "12237120JVMzmj",
  ];
  _0x3492 = function () {
    return _0x25f682;
  };
  return _0x3492();
}
