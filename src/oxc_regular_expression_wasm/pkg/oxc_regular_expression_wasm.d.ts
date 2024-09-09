/* tslint:disable */
/* eslint-disable */
/**
* # Errors
* Serde serialization error
* @param {string} source_text
* @param {ParseOptions | undefined} [options]
* @returns {ParseReturn}
*/
export function parsePattern(source_text: string, options?: ParseOptions): ParseReturn;
export interface ParseReturn {
    ast: Pattern;
}

export interface ParseOptions {
    unicodeMode?: boolean;
    unicodeSetsMode?: boolean;
}

export interface NamedReference {
    span: Span;
    name: Atom;
}

export interface IndexedReference {
    span: Span;
    index: number;
}

export interface ModifierFlags {
    ignore_case: boolean;
    sticky: boolean;
    multiline: boolean;
}

export interface IgnoreGroup {
    span: Span;
    enabling_modifiers: ModifierFlags | null;
    disabling_modifiers: ModifierFlags | null;
    body: Disjunction;
}

export interface CapturingGroup {
    span: Span;
    name: Atom | null;
    body: Disjunction;
}

export interface ClassString {
    span: Span;
    strings: boolean;
    body: Character[];
}

export interface ClassStringDisjunction {
    span: Span;
    strings: boolean;
    body: ClassString[];
}

export interface CharacterClassRange {
    span: Span;
    min: Character;
    max: Character;
}

export type CharacterClassContents = { CharacterClassRange: CharacterClassRange } | { CharacterClassEscape: CharacterClassEscape } | { UnicodePropertyEscape: UnicodePropertyEscape } | { Character: Character } | { NestedCharacterClass: CharacterClass } | { ClassStringDisjunction: ClassStringDisjunction };

export type CharacterClassContentsKind = "Union" | "Intersection" | "Subtraction";

export interface CharacterClass {
    span: Span;
    negative: boolean;
    kind: CharacterClassContentsKind;
    body: CharacterClassContents[];
}

export interface Dot {
    span: Span;
}

export interface UnicodePropertyEscape {
    span: Span;
    negative: boolean;
    strings: boolean;
    name: Atom;
    value: Atom | null;
}

export type CharacterClassEscapeKind = "D" | "NegativeD" | "S" | "NegativeS" | "W" | "NegativeW";

export interface CharacterClassEscape {
    span: Span;
    kind: CharacterClassEscapeKind;
}

export type CharacterKind = "ControlLetter" | "HexadecimalEscape" | "Identifier" | "Null" | "Octal" | "SingleEscape" | "Symbol" | "UnicodeEscape";

export interface Character {
    span: Span;
    kind: CharacterKind;
    value: number;
}

export interface Quantifier {
    span: Span;
    min: number;
    max: number | null;
    greedy: boolean;
    body: Term;
}

export type LookAroundAssertionKind = "Lookahead" | "NegativeLookahead" | "Lookbehind" | "NegativeLookbehind";

export interface LookAroundAssertion {
    span: Span;
    kind: LookAroundAssertionKind;
    body: Disjunction;
}

export type BoundaryAssertionKind = "Start" | "End" | "Boundary" | "NegativeBoundary";

export interface BoundaryAssertion {
    span: Span;
    kind: BoundaryAssertionKind;
}

export type Term = { BoundaryAssertion: BoundaryAssertion } | { LookAroundAssertion: LookAroundAssertion } | { Quantifier: Quantifier } | { Character: Character } | { Dot: Dot } | { CharacterClassEscape: CharacterClassEscape } | { UnicodePropertyEscape: UnicodePropertyEscape } | { CharacterClass: CharacterClass } | { CapturingGroup: CapturingGroup } | { IgnoreGroup: IgnoreGroup } | { IndexedReference: IndexedReference } | { NamedReference: NamedReference };

export interface Alternative {
    span: Span;
    body: Term[];
}

export interface Disjunction {
    span: Span;
    body: Alternative[];
}

export interface Pattern {
    span: Span;
    body: Disjunction;
}

export interface Flags {
    span: Span;
    global: boolean;
    ignore_case: boolean;
    multiline: boolean;
    unicode: boolean;
    sticky: boolean;
    dot_all: boolean;
    has_indices: boolean;
    unicode_sets: boolean;
}

export interface RegularExpression {
    span: Span;
    pattern: Pattern;
    flags: Flags;
}


export type Atom = string;
export type CompactStr = string;


export interface Span {
    start: number;
    end: number;
}

export type LanguageVariant = "standard" | "jsx";

export type ModuleKind = "script" | "module";

export type Language = "javascript" | "typescript" | "typescriptDefinition";

export interface SourceType {
    language: Language;
    moduleKind: ModuleKind;
    variant: LanguageVariant;
    alwaysStrict: boolean;
}

/**
*/
export class ParseReturn {
  free(): void;
/**
*/
  ast: any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_parsereturn_free: (a: number, b: number) => void;
  readonly __wbg_get_parsereturn_ast: (a: number) => number;
  readonly __wbg_set_parsereturn_ast: (a: number, b: number) => void;
  readonly parsePattern: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
