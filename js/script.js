function _0xa311() {
  const _0x47f8ec = [
    "onkeydown",
    "Web\x20Designer",
    "active",
    "994721zXCqFt",
    "Coder",
    "2590445LjfWqe",
    "contains",
    ".section",
    "516759pvWpVp",
    "data-section-index",
    "href",
    "classList",
    "getAttribute",
    "querySelector",
    "toggle",
    "contextmenu",
    "Content\x20Creator",
    ".nav-toggler",
    "length",
    ".nav",
    "click",
    "back-section",
    "remove",
    "27bzDhhz",
    "2696835kevAzO",
    "open",
    "4RfUEuj",
    "add",
    ".typing",
    "F12",
    "split",
    "querySelectorAll",
    "9029360jhMlnu",
    "ctrlKey",
    "addEventListener",
    "key",
    ".hire-me",
    "54kujJYe",
    "innerWidth",
    ".aside",
    "2140278DqeFIx",
    "log",
    "3271176wYAgDn",
  ];
  _0xa311 = function () {
    return _0x47f8ec;
  };
  return _0xa311();
}
const _0x5cdca5 = _0x363b;
(function (_0x55e569, _0x211864) {
  const _0x415697 = _0x363b,
    _0x32dc75 = _0x55e569();
  while (!![]) {
    try {
      const _0x87498a =
        parseInt(_0x415697(0x7e)) / 0x1 +
        -parseInt(_0x415697(0x9e)) / 0x2 +
        (-parseInt(_0x415697(0x8e)) / 0x3) * (parseInt(_0x415697(0x90)) / 0x4) +
        parseInt(_0x415697(0x7b)) / 0x5 +
        (parseInt(_0x415697(0x9b)) / 0x6) * (parseInt(_0x415697(0x79)) / 0x7) +
        (-parseInt(_0x415697(0x75)) / 0x8) *
          (-parseInt(_0x415697(0x8d)) / 0x9) +
        -parseInt(_0x415697(0x96)) / 0xa;
      if (_0x87498a === _0x211864) break;
      else _0x32dc75["push"](_0x32dc75["shift"]());
    } catch (_0x3be4bc) {
      _0x32dc75["push"](_0x32dc75["shift"]());
    }
  }
})(_0xa311, 0xa331e),
  document[_0x5cdca5(0x98)](_0x5cdca5(0x85), function (_0x4261bc) {
    _0x4261bc["preventDefault"]();
  }),
  (document[_0x5cdca5(0x76)] = function (_0x450613) {
    const _0x3cd786 = _0x5cdca5;
    console[_0x3cd786(0x9f)](_0x450613[_0x3cd786(0x99)]);
    if (
      _0x450613[_0x3cd786(0x97)] &&
      (_0x450613[_0x3cd786(0x99)] == "c" || _0x450613[_0x3cd786(0x99)] == "v")
    )
      return !![];
    else {
      if (_0x450613["ctrlKey"] || _0x450613[_0x3cd786(0x99)] == _0x3cd786(0x93))
        return ![];
      else {
        if (_0x450613[_0x3cd786(0x97)] && _0x450613[_0x3cd786(0x99)] == "u")
          return ![];
        else {
          if (
            _0x450613[_0x3cd786(0x97)] &&
            _0x450613["shiftKey"] &&
            (_0x450613[_0x3cd786(0x99)] == "I" ||
              _0x450613[_0x3cd786(0x99)] == "C")
          )
            return ![];
        }
      }
    }
  });
var typed = new Typed(_0x5cdca5(0x92), {
  strings: [
    "",
    _0x5cdca5(0x77),
    "Web\x20Developer",
    _0x5cdca5(0x7a),
    _0x5cdca5(0x86),
    "Programmer",
  ],
  typeSpeed: 0x64,
  BackSpeed: 0x3c,
  loop: !![],
});
const nav = document[_0x5cdca5(0x83)](_0x5cdca5(0x89)),
  navList = nav[_0x5cdca5(0x95)]("li"),
  totalNavList = navList[_0x5cdca5(0x88)],
  allSection = document[_0x5cdca5(0x95)](_0x5cdca5(0x7d)),
  totalSection = allSection["length"];
function _0x363b(_0x40e76d, _0x3919a5) {
  const _0xa311e5 = _0xa311();
  return (
    (_0x363b = function (_0x363b10, _0x247ee9) {
      _0x363b10 = _0x363b10 - 0x75;
      let _0x330041 = _0xa311e5[_0x363b10];
      return _0x330041;
    }),
    _0x363b(_0x40e76d, _0x3919a5)
  );
}
for (let i = 0x0; i < totalNavList; i++) {
  const a = navList[i]["querySelector"]("a");
  a["addEventListener"](_0x5cdca5(0x8a), function () {
    const _0x209cce = _0x5cdca5;
    removeBackSection();
    for (let _0x3a3849 = 0x0; _0x3a3849 < totalNavList; _0x3a3849++) {
      navList[_0x3a3849][_0x209cce(0x83)]("a")[_0x209cce(0x81)][
        _0x209cce(0x7c)
      ](_0x209cce(0x78)) && addBackSection(_0x3a3849),
        navList[_0x3a3849][_0x209cce(0x83)]("a")["classList"][_0x209cce(0x8c)](
          "active"
        );
    }
    this[_0x209cce(0x81)]["add"]("active"),
      showSection(this),
      window[_0x209cce(0x9c)] < 0x4b0 && asideSectionTogglerBtn();
  });
}
function removeBackSection() {
  const _0x52a999 = _0x5cdca5;
  for (let _0x8b5b5c = 0x0; _0x8b5b5c < totalSection; _0x8b5b5c++) {
    allSection[_0x8b5b5c][_0x52a999(0x81)][_0x52a999(0x8c)](_0x52a999(0x8b));
  }
}
function addBackSection(_0x293eda) {
  const _0xf7ddb3 = _0x5cdca5;
  allSection[_0x293eda][_0xf7ddb3(0x81)][_0xf7ddb3(0x91)]("back-section");
}
function showSection(_0x447166) {
  const _0x24ca27 = _0x5cdca5;
  for (let _0x48e580 = 0x0; _0x48e580 < totalSection; _0x48e580++) {
    allSection[_0x48e580][_0x24ca27(0x81)][_0x24ca27(0x8c)](_0x24ca27(0x78));
  }
  const _0x4755fd = _0x447166["getAttribute"](_0x24ca27(0x80))[_0x24ca27(0x94)](
    "#"
  )[0x1];
  document[_0x24ca27(0x83)]("#" + _0x4755fd)[_0x24ca27(0x81)][_0x24ca27(0x91)](
    _0x24ca27(0x78)
  );
}
function updateNav(_0x35fdcc) {
  const _0x19c1a9 = _0x5cdca5;
  for (let _0x3e683d = 0x0; _0x3e683d < totalNavList; _0x3e683d++) {
    navList[_0x3e683d][_0x19c1a9(0x83)]("a")[_0x19c1a9(0x81)][_0x19c1a9(0x8c)](
      _0x19c1a9(0x78)
    );
    const _0xc26130 = _0x35fdcc["getAttribute"](_0x19c1a9(0x80))[
      _0x19c1a9(0x94)
    ]("#")[0x1];
    _0xc26130 ===
      navList[_0x3e683d][_0x19c1a9(0x83)]("a")
        [_0x19c1a9(0x82)](_0x19c1a9(0x80))
        [_0x19c1a9(0x94)]("#")[0x1] &&
      navList[_0x3e683d][_0x19c1a9(0x83)]("a")[_0x19c1a9(0x81)][
        _0x19c1a9(0x91)
      ](_0x19c1a9(0x78));
  }
}
document["querySelector"](_0x5cdca5(0x9a))[_0x5cdca5(0x98)](
  _0x5cdca5(0x8a),
  function () {
    const _0x183ea6 = _0x5cdca5,
      _0x2fdb54 = this[_0x183ea6(0x82)](_0x183ea6(0x7f));
    showSection(this),
      updateNav(this),
      removeBackSection(),
      addBackSection(_0x2fdb54);
  }
);
const navTogglerBtn = document[_0x5cdca5(0x83)](_0x5cdca5(0x87)),
  aside = document[_0x5cdca5(0x83)](_0x5cdca5(0x9d));
navTogglerBtn[_0x5cdca5(0x98)]("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  const _0x319caa = _0x5cdca5;
  aside[_0x319caa(0x81)][_0x319caa(0x84)]("open"),
    navTogglerBtn["classList"][_0x319caa(0x84)](_0x319caa(0x8f));
  for (let _0x5d8cf3 = 0x0; _0x5d8cf3 < totalSection; _0x5d8cf3++) {
    allSection[_0x5d8cf3][_0x319caa(0x81)][_0x319caa(0x84)]("open");
  }
}
