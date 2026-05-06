// Windows Explorer "Sort by Name" comparator.
// Order: digit-leading strings before letter-leading; natural numeric within;
// alphabetic within; case-insensitive. Example:
//   "1" < "1a" < "2" < "10" < "a" < "assdasdasd"

function tokenize(s) {
  // Split into runs of digits vs non-digits, preserving order.
  const tokens = [];
  let i = 0;
  while (i < s.length) {
    const isDigit = s[i] >= '0' && s[i] <= '9';
    let j = i + 1;
    while (j < s.length && (s[j] >= '0' && s[j] <= '9') === isDigit) j++;
    const piece = s.slice(i, j);
    tokens.push(isDigit ? { kind: 'num', val: parseInt(piece, 10), raw: piece } : { kind: 'str', val: piece.toLowerCase(), raw: piece });
    i = j;
  }
  return tokens;
}

export function windowsCompare(a, b) {
  // First: digit-leading vs letter-leading.
  const aFirstIsDigit = /^[0-9]/.test(a);
  const bFirstIsDigit = /^[0-9]/.test(b);
  if (aFirstIsDigit !== bFirstIsDigit) return aFirstIsDigit ? -1 : 1;

  const ta = tokenize(a);
  const tb = tokenize(b);
  const n = Math.min(ta.length, tb.length);
  for (let i = 0; i < n; i++) {
    const x = ta[i], y = tb[i];
    if (x.kind !== y.kind) {
      // numeric token is "smaller" (comes first) within same string position
      return x.kind === 'num' ? -1 : 1;
    }
    if (x.kind === 'num') {
      if (x.val !== y.val) return x.val - y.val;
      // same numeric value: shorter raw (fewer leading zeros) first
      if (x.raw.length !== y.raw.length) return x.raw.length - y.raw.length;
    } else {
      if (x.val < y.val) return -1;
      if (x.val > y.val) return 1;
    }
  }
  return ta.length - tb.length;
}

export function windowsSort(arr) {
  return [...arr].sort(windowsCompare);
}
