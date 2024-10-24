/* tslint:disable */
/* eslint-disable */
/**
 * # Errors
 * Serde serialization error
 * @param {string} pattern_text
 * @param {string} flags_text
 * @returns {ParseReturn}
 */
export function parsePattern(pattern_text: string, flags_text: string): ParseReturn;
export interface ParseReturn {
    ast: Pattern;
}

export type Pattern = ({
	type: 'Pattern';
	body: Disjunction;
}) & Span;

export type Disjunction = ({
	type: 'Disjunction';
	body: Array<Alternative>;
}) & Span;

export type Alternative = ({
	type: 'Alternative';
	body: Array<Term>;
}) & Span;

export type Term = BoundaryAssertion | LookAroundAssertion | Quantifier | Character | Dot | CharacterClassEscape | UnicodePropertyEscape | CharacterClass | CapturingGroup | IgnoreGroup | IndexedReference | NamedReference;

export type BoundaryAssertion = ({
	type: 'BoundaryAssertion';
	span: Span;
	kind: BoundaryAssertionKind;
});

export type BoundaryAssertionKind = 'start' | 'end' | 'boundary' | 'negativeBoundary';

export type LookAroundAssertion = ({
	type: 'LookAroundAssertion';
	kind: LookAroundAssertionKind;
	body: Disjunction;
}) & Span;

export type LookAroundAssertionKind = 'lookahead' | 'negativeLookahead' | 'lookbehind' | 'negativeLookbehind';

export type Quantifier = ({
	type: 'Quantifier';
	min: number;
	max: (number) | null;
	greedy: boolean;
	body: Term;
}) & Span;

export type Character = ({
	type: 'Character';
	kind: CharacterKind;
	value: number;
}) & Span;

export type CharacterKind = 'controlLetter' | 'hexadecimalEscape' | 'identifier' | 'null' | 'octal1' | 'octal2' | 'octal3' | 'singleEscape' | 'symbol' | 'unicodeEscape';

export type CharacterClassEscape = ({
	type: 'CharacterClassEscape';
	kind: CharacterClassEscapeKind;
}) & Span;

export type CharacterClassEscapeKind = 'd' | 'negativeD' | 's' | 'negativeS' | 'w' | 'negativeW';

export type UnicodePropertyEscape = ({
	type: 'UnicodePropertyEscape';
	negative: boolean;
	strings: boolean;
	name: string;
	value: (string) | null;
}) & Span;

export type Dot = ({
	type: 'Dot';
}) & Span;

export type CharacterClass = ({
	type: 'CharacterClass';
	negative: boolean;
	strings: boolean;
	kind: CharacterClassContentsKind;
	body: Array<CharacterClassContents>;
}) & Span;

export type CharacterClassContentsKind = 'union' | 'intersection' | 'subtraction';

export type CharacterClassContents = CharacterClassRange | CharacterClassEscape | UnicodePropertyEscape | Character | CharacterClass | ClassStringDisjunction;

export type CharacterClassRange = ({
	type: 'CharacterClassRange';
	min: Character;
	max: Character;
}) & Span;

export type ClassStringDisjunction = ({
	type: 'ClassStringDisjunction';
	strings: boolean;
	body: Array<ClassString>;
}) & Span;

export type ClassString = ({
	type: 'ClassString';
	strings: boolean;
	body: Array<Character>;
}) & Span;

export type CapturingGroup = ({
	type: 'CapturingGroup';
	name: (string) | null;
	body: Disjunction;
}) & Span;

export type IgnoreGroup = ({
	type: 'IgnoreGroup';
	modifiers: (Modifiers) | null;
	body: Disjunction;
}) & Span;

export type Modifiers = ({
	type: 'Modifiers';
	enabling: (Modifier) | null;
	disabling: (Modifier) | null;
}) & Span;

export type Modifier = ({
	type: 'Modifier';
	ignoreCase: boolean;
	multiline: boolean;
	sticky: boolean;
});

export type IndexedReference = ({
	type: 'IndexedReference';
	index: number;
}) & Span;

export type NamedReference = ({
	type: 'NamedReference';
	name: string;
}) & Span;

export type Span = ({
	start: number;
	end: number;
});

export type SourceType = ({
	language: Language;
	moduleKind: ModuleKind;
	variant: LanguageVariant;
});

export type Language = 'javascript' | 'typescript' | 'typescriptDefinition';

export type ModuleKind = 'script' | 'module' | 'unambiguous';

export type LanguageVariant = 'standard' | 'jsx';

export class ParseReturn {
  free(): void;
  ast: any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_parsereturn_free: (a: number, b: number) => void;
  readonly __wbg_get_parsereturn_ast: (a: number) => number;
  readonly __wbg_set_parsereturn_ast: (a: number, b: number) => void;
  readonly parsePattern: (a: number, b: number, c: number, d: number) => Array;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
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
