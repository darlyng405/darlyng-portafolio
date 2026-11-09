import { describe, expect, it } from 'vitest';

function simulateCpp(code: string) {
  if (!/\bint\s+main\s*\([^)]*\)/.test(code) && !/\bmain\s*\([^)]*\)/.test(code)) {
    return {
      exitCode: 1,
      output:
        "/usr/bin/ld: /usr/lib/crt1.o: in function `_start':\n(.text+0x20): undefined reference to `main'\ncollect2: error: ld returned 1 exit status",
    };
  }

  let inString = false;
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '"' && (i === 0 || code[i - 1] !== '\\')) {
      inString = !inString;
    }
  }
  if (inString) {
    return {
      exitCode: 1,
      output: 'main.cpp: error: missing terminating " character',
    };
  }

  const coutRegex = /cout\s*<<\s*([^;]+);/g;
  let match;
  let stdoutText = '';
  let foundCout = false;

  while ((match = coutRegex.exec(code)) !== null) {
    foundCout = true;
    const stream = match[1];
    const parts = stream.split('<<').map((p) => p.trim());
    for (const part of parts) {
      if (!part) continue;
      if (part === 'endl') {
        stdoutText += '\n';
      } else if (part.startsWith('"') && part.endsWith('"')) {
        const raw = part.slice(1, -1);
        stdoutText += raw
          .replace(/\\n/g, '\n')
          .replace(/\\t/g, '\t')
          .replace(/\\"/g, '"');
      } else if (!isNaN(Number(part))) {
        stdoutText += part;
      } else {
        stdoutText += part.replace(/["']/g, '');
      }
    }
  }

  if (!foundCout) {
    stdoutText = '[Process completed with exit code 0 — no stdout generated]';
  }

  return {
    exitCode: 0,
    output: stdoutText.trimEnd() || '\n',
  };
}

describe('C++ simulation and runner engine', () => {
  it('executes the default snippet successfully', () => {
    const defaultCode = `#include <bits/stdc++.h>
using namespace std;

int main () {
    cout << "Clean code over fast code" << "\\n";
    return 0;
}`;
    const result = simulateCpp(defaultCode);
    expect(result.exitCode).toBe(0);
    expect(result.output).toBe('Clean code over fast code');
  });

  it('executes customized multi-line cout statements', () => {
    const customCode = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello " << "World!" << endl;
    cout << "Score: " << 100 << "\\n";
    return 0;
}`;
    const result = simulateCpp(customCode);
    expect(result.exitCode).toBe(0);
    expect(result.output).toContain('Hello World!');
    expect(result.output).toContain('Score: 100');
  });

  it('catches missing main function', () => {
    const brokenCode = `cout << "No main function";`;
    const result = simulateCpp(brokenCode);
    expect(result.exitCode).toBe(1);
    expect(result.output).toContain("undefined reference to `main'");
  });

  it('catches unterminated double quote', () => {
    const brokenQuote = `int main() { cout << "Unterminated; return 0; }`;
    const result = simulateCpp(brokenQuote);
    expect(result.exitCode).toBe(1);
    expect(result.output).toContain('missing terminating " character');
  });
});
