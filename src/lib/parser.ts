import initWasm, { parsePattern } from "../oxc_regular_expression_wasm/pkg";
import regjsparser from "regjsparser";
import { RegExpParser } from "@eslint-community/regexpp";
import { parse as regexpTreeParse } from "regexp-tree";

type ParseFactory = (hiddenKeys: { range: boolean; raw: boolean }) => Promise<{
  parse: Parse;
  meta: ParseMeta;
}>;
type Parse = (pattern: string, flags: string) => ParseResult;
export type ParseMeta = { name: string; version: string; notes: string };
export type ParseResult = { ok: false; err: string } | { ok: true; ast: string };

export const browser: ParseFactory = async (_hiddenKeys) => {
  const parse: Parse = (pattern, flags) => {
    try {
      new RegExp(pattern, flags);

      return { ok: true, ast: "This is valid `RegExp." };
    } catch (err) {
      return { ok: false, err: (err as Error).message };
    }
  };

  const meta = {
    name: "Your browser",
    version: navigator.userAgent,
    notes: "",
  };

  return { parse, meta };
};

export const oxc: ParseFactory = async (hiddenKeys) => {
  await initWasm();

  const parse: Parse = (pattern, flags) => {
    try {
      const { ast_json } = parsePattern(pattern, flags);

      return {
        ok: true,
        ast: JSON.stringify(
          JSON.parse(ast_json),
          (key, value) => {
            if (hiddenKeys.range && (key === "start" || key === "end")) return undefined;
            return value;
          },
          2,
        ),
      };
    } catch (err) {
      return { ok: false, err: (err as Error).message };
    }
  };

  const meta = {
    name: "oxc_regular_expression(wasm)",
    version: "0.52.0",
    notes: "",
  };

  return { parse, meta };
};

export const regjs: ParseFactory = async (hiddenKeys) => {
  const parse: Parse = (pattern, flags) => {
    try {
      const ast = regjsparser.parse(pattern, flags, {
        lookbehind: true,
        namedGroups: true,
        unicodePropertyEscape: true,
        unicodeSet: true,
        modifiers: true,
      });

      return {
        ok: true,
        ast: JSON.stringify(
          ast,
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

  const meta = {
    name: "regjsparser",
    version: "0.12.0",
    notes: "",
  };

  return { parse, meta };
};

export const regexpp: ParseFactory = async (hiddenKeys) => {
  const regexppParser = new RegExpParser({ strict: false, ecmaVersion: 2025 });

  const parse: Parse = (pattern, flags) => {
    try {
      const ast = regexppParser.parsePattern(pattern, 0, pattern.length, {
        unicode: flags.includes("u"),
        unicodeSets: flags.includes("v"),
      });

      return {
        ok: true,
        ast: JSON.stringify(
          ast,
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

  const meta = {
    name: "@eslint-community/regexpp",
    version: "4.12.1",
    notes: "Cyclic references are removed.",
  };

  return { parse, meta };
};

export const regexpTree: ParseFactory = async (hiddenKeys) => {
  const parse: Parse = (pattern, flags) => {
    try {
      const ast = regexpTreeParse("/" + pattern + "/" + flags, {
        captureLocations: true,
        allowGroupNameDuplicates: true,
      });

      return {
        ok: true,
        ast: JSON.stringify(
          ast.body,
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

  const meta = {
    name: "regexp-tree",
    version: "0.1.27",
    notes: "",
  };

  return { parse, meta };
};
