import regjsparser from "regjsparser";
import { RegExpParser } from "@eslint-community/regexpp";
import { parse } from "regexp-tree";

type ParseFactory = (hiddenKeys: { range: boolean; raw: boolean }) => Parse;
type Parse = (pattern: string, flags: string) => ParseResult;
export type ParseResult = { ok: false; err: string } | { ok: true; ast: string };

export const browser: ParseFactory = (_hiddenKeys) => (pattern, flags) => {
  try {
    new RegExp(pattern, flags);
    return { ok: true, ast: "This is valid `RegExp." };
  } catch (err) {
    return { ok: false, err: (err as Error).message };
  }
};

export const regjs: ParseFactory = (hiddenKeys) => (pattern, flags) => {
  try {
    return {
      ok: true,
      ast: JSON.stringify(
        regjsparser.parse(pattern, flags, {
          lookbehind: true,
          namedGroups: true,
          unicodePropertyEscape: true,
          unicodeSet: true,
          modifiers: true,
        }),
        (key, value) => {
          if (hiddenKeys.range && key === "range") return undefined;
          if (hiddenKeys.raw && key === "raw") return undefined;
          return value;
        },
        2,
      ),
    };
  } catch (err) {
    return { ok: false, err: (err as Error).message };
  }
};

const regexppParser = new RegExpParser({ strict: false, ecmaVersion: 2025 });
export const regexpp: ParseFactory = (hiddenKeys) => (pattern, flags) => {
  try {
    return {
      ok: true,
      ast: JSON.stringify(
        regexppParser.parsePattern(pattern, 0, pattern.length, {
          unicode: flags.includes("u"),
          unicodeSets: flags.includes("v"),
        }),
        (key, value) => {
          if (hiddenKeys.range && (key === "start" || key === "end")) return undefined;
          if (hiddenKeys.raw && key === "raw") return undefined;
          // Remove cyclic references
          if (["parent", "resolved", "references"].includes(key)) return undefined;
          return value;
        },
        2,
      ),
    };
  } catch (err) {
    return { ok: false, err: (err as Error).message };
  }
};

export const regexpTree: ParseFactory = (hiddenKeys) => (pattern, flags) => {
  try {
    return {
      ok: true,
      ast: JSON.stringify(
        parse("/" + pattern + "/" + flags, {
          captureLocations: true,
          allowGroupNameDuplicates: true,
        }).body,
        (key, value) => {
          if (hiddenKeys.range && hiddenKeys.raw && key === "loc") return undefined;
          if (hiddenKeys.range && (key === "start" || key === "end")) return undefined;
          if (hiddenKeys.raw && (key === "source" || key === "value" || key === "symbol"))
            return undefined;
          return value;
        },
        2,
      ),
    };
  } catch (err) {
    return { ok: false, err: (err as Error).message };
  }
};
