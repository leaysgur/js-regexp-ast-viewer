//! Hand-written AST to JSON serialization.
//! Output shape follows the former `#[generate_derive(ESTree)]` output:
//! `{ "type": "...", "start": N, "end": N, ...fields }`

use std::fmt::Write;

use oxc_regular_expression::ast;

fn head(out: &mut String, ty: &str, span: &oxc_span::Span) {
    let _ = write!(out, r#"{{"type":"{ty}","start":{},"end":{}"#, span.start, span.end);
}

fn string(out: &mut String, s: &str) {
    out.push('"');
    for c in s.chars() {
        match c {
            '"' => out.push_str("\\\""),
            '\\' => out.push_str("\\\\"),
            '\u{08}' => out.push_str("\\b"),
            '\u{0c}' => out.push_str("\\f"),
            '\n' => out.push_str("\\n"),
            '\r' => out.push_str("\\r"),
            '\t' => out.push_str("\\t"),
            c if (c as u32) < 0x20 => {
                let _ = write!(out, "\\u{:04x}", c as u32);
            }
            c => out.push(c),
        }
    }
    out.push('"');
}

pub fn pattern(out: &mut String, it: &ast::Pattern) {
    head(out, "Pattern", &it.span);
    out.push_str(",\"body\":");
    disjunction(out, &it.body);
    out.push('}');
}

fn disjunction(out: &mut String, it: &ast::Disjunction) {
    head(out, "Disjunction", &it.span);
    out.push_str(",\"body\":[");
    for (idx, alt) in it.body.iter().enumerate() {
        if idx != 0 {
            out.push(',');
        }
        alternative(out, alt);
    }
    out.push_str("]}");
}

fn alternative(out: &mut String, it: &ast::Alternative) {
    head(out, "Alternative", &it.span);
    out.push_str(",\"body\":[");
    for (idx, t) in it.body.iter().enumerate() {
        if idx != 0 {
            out.push(',');
        }
        term(out, t);
    }
    out.push_str("]}");
}

fn term(out: &mut String, it: &ast::Term) {
    match it {
        ast::Term::BoundaryAssertion(it) => boundary_assertion(out, it),
        ast::Term::LookAroundAssertion(it) => look_around_assertion(out, it),
        ast::Term::Quantifier(it) => quantifier(out, it),
        ast::Term::Character(it) => character(out, it),
        ast::Term::Dot(it) => dot(out, it),
        ast::Term::CharacterClassEscape(it) => character_class_escape(out, it),
        ast::Term::UnicodePropertyEscape(it) => unicode_property_escape(out, it),
        ast::Term::CharacterClass(it) => character_class(out, it),
        ast::Term::CapturingGroup(it) => capturing_group(out, it),
        ast::Term::IgnoreGroup(it) => ignore_group(out, it),
        ast::Term::IndexedReference(it) => indexed_reference(out, it),
        ast::Term::NamedReference(it) => named_reference(out, it),
    }
}

fn boundary_assertion(out: &mut String, it: &ast::BoundaryAssertion) {
    head(out, "BoundaryAssertion", &it.span);
    out.push_str(",\"kind\":");
    string(
        out,
        match it.kind {
            ast::BoundaryAssertionKind::Start => "start",
            ast::BoundaryAssertionKind::End => "end",
            ast::BoundaryAssertionKind::Boundary => "boundary",
            ast::BoundaryAssertionKind::NegativeBoundary => "negativeBoundary",
        },
    );
    out.push('}');
}

fn look_around_assertion(out: &mut String, it: &ast::LookAroundAssertion) {
    head(out, "LookAroundAssertion", &it.span);
    out.push_str(",\"kind\":");
    string(
        out,
        match it.kind {
            ast::LookAroundAssertionKind::Lookahead => "lookahead",
            ast::LookAroundAssertionKind::NegativeLookahead => "negativeLookahead",
            ast::LookAroundAssertionKind::Lookbehind => "lookbehind",
            ast::LookAroundAssertionKind::NegativeLookbehind => "negativeLookbehind",
        },
    );
    out.push_str(",\"body\":");
    disjunction(out, &it.body);
    out.push('}');
}

fn quantifier(out: &mut String, it: &ast::Quantifier) {
    head(out, "Quantifier", &it.span);
    let _ = write!(out, ",\"min\":{}", it.min);
    match it.max {
        Some(max) => {
            let _ = write!(out, ",\"max\":{max}");
        }
        None => out.push_str(",\"max\":null"),
    }
    let _ = write!(out, ",\"greedy\":{}", it.greedy);
    out.push_str(",\"body\":");
    term(out, &it.body);
    out.push('}');
}

fn character(out: &mut String, it: &ast::Character) {
    head(out, "Character", &it.span);
    out.push_str(",\"kind\":");
    string(
        out,
        match it.kind {
            ast::CharacterKind::ControlLetter => "controlLetter",
            ast::CharacterKind::HexadecimalEscape => "hexadecimalEscape",
            ast::CharacterKind::Identifier => "identifier",
            ast::CharacterKind::Null => "null",
            ast::CharacterKind::Octal1 => "octal1",
            ast::CharacterKind::Octal2 => "octal2",
            ast::CharacterKind::Octal3 => "octal3",
            ast::CharacterKind::SingleEscape => "singleEscape",
            ast::CharacterKind::Symbol => "symbol",
            ast::CharacterKind::UnicodeEscape => "unicodeEscape",
        },
    );
    let _ = write!(out, ",\"value\":{}}}", it.value);
}

fn dot(out: &mut String, it: &ast::Dot) {
    head(out, "Dot", &it.span);
    out.push('}');
}

fn character_class_escape(out: &mut String, it: &ast::CharacterClassEscape) {
    head(out, "CharacterClassEscape", &it.span);
    out.push_str(",\"kind\":");
    string(
        out,
        match it.kind {
            ast::CharacterClassEscapeKind::D => "d",
            ast::CharacterClassEscapeKind::NegativeD => "negativeD",
            ast::CharacterClassEscapeKind::S => "s",
            ast::CharacterClassEscapeKind::NegativeS => "negativeS",
            ast::CharacterClassEscapeKind::W => "w",
            ast::CharacterClassEscapeKind::NegativeW => "negativeW",
        },
    );
    out.push('}');
}

fn unicode_property_escape(out: &mut String, it: &ast::UnicodePropertyEscape) {
    head(out, "UnicodePropertyEscape", &it.span);
    let _ = write!(out, ",\"negative\":{},\"strings\":{}", it.negative, it.strings);
    out.push_str(",\"name\":");
    string(out, &it.name);
    out.push_str(",\"value\":");
    match &it.value {
        Some(value) => string(out, value),
        None => out.push_str("null"),
    }
    out.push('}');
}

fn character_class(out: &mut String, it: &ast::CharacterClass) {
    head(out, "CharacterClass", &it.span);
    let _ = write!(out, ",\"negative\":{},\"strings\":{}", it.negative, it.strings);
    out.push_str(",\"kind\":");
    string(
        out,
        match it.kind {
            ast::CharacterClassContentsKind::Union => "union",
            ast::CharacterClassContentsKind::Intersection => "intersection",
            ast::CharacterClassContentsKind::Subtraction => "subtraction",
        },
    );
    out.push_str(",\"body\":[");
    for (idx, content) in it.body.iter().enumerate() {
        if idx != 0 {
            out.push(',');
        }
        match content {
            ast::CharacterClassContents::CharacterClassRange(it) => {
                character_class_range(out, it);
            }
            ast::CharacterClassContents::CharacterClassEscape(it) => {
                character_class_escape(out, it);
            }
            ast::CharacterClassContents::UnicodePropertyEscape(it) => {
                unicode_property_escape(out, it);
            }
            ast::CharacterClassContents::Character(it) => character(out, it),
            ast::CharacterClassContents::NestedCharacterClass(it) => {
                character_class(out, it);
            }
            ast::CharacterClassContents::ClassStringDisjunction(it) => {
                class_string_disjunction(out, it);
            }
        }
    }
    out.push_str("]}");
}

fn character_class_range(out: &mut String, it: &ast::CharacterClassRange) {
    head(out, "CharacterClassRange", &it.span);
    out.push_str(",\"min\":");
    character(out, &it.min);
    out.push_str(",\"max\":");
    character(out, &it.max);
    out.push('}');
}

fn class_string_disjunction(out: &mut String, it: &ast::ClassStringDisjunction) {
    head(out, "ClassStringDisjunction", &it.span);
    let _ = write!(out, ",\"strings\":{}", it.strings);
    out.push_str(",\"body\":[");
    for (idx, s) in it.body.iter().enumerate() {
        if idx != 0 {
            out.push(',');
        }
        class_string(out, s);
    }
    out.push_str("]}");
}

fn class_string(out: &mut String, it: &ast::ClassString) {
    head(out, "ClassString", &it.span);
    let _ = write!(out, ",\"strings\":{}", it.strings);
    out.push_str(",\"body\":[");
    for (idx, c) in it.body.iter().enumerate() {
        if idx != 0 {
            out.push(',');
        }
        character(out, c);
    }
    out.push_str("]}");
}

fn capturing_group(out: &mut String, it: &ast::CapturingGroup) {
    head(out, "CapturingGroup", &it.span);
    out.push_str(",\"name\":");
    match &it.name {
        Some(name) => string(out, name),
        None => out.push_str("null"),
    }
    out.push_str(",\"body\":");
    disjunction(out, &it.body);
    out.push('}');
}

fn ignore_group(out: &mut String, it: &ast::IgnoreGroup) {
    head(out, "IgnoreGroup", &it.span);
    out.push_str(",\"modifiers\":");
    match &it.modifiers {
        Some(modifiers) => {
            head(out, "Modifiers", &modifiers.span);
            out.push_str(",\"enabling\":");
            modifier(out, modifiers.enabling);
            out.push_str(",\"disabling\":");
            modifier(out, modifiers.disabling);
            out.push('}');
        }
        None => out.push_str("null"),
    }
    out.push_str(",\"body\":");
    disjunction(out, &it.body);
    out.push('}');
}

fn modifier(out: &mut String, it: ast::Modifier) {
    let _ = write!(
        out,
        r#"{{"type":"Modifier","ignoreCase":{},"multiline":{},"dotAll":{}}}"#,
        it.contains(ast::Modifier::I),
        it.contains(ast::Modifier::M),
        it.contains(ast::Modifier::S),
    );
}

fn indexed_reference(out: &mut String, it: &ast::IndexedReference) {
    head(out, "IndexedReference", &it.span);
    let _ = write!(out, ",\"index\":{}}}", it.index);
}

fn named_reference(out: &mut String, it: &ast::NamedReference) {
    head(out, "NamedReference", &it.span);
    out.push_str(",\"name\":");
    string(out, &it.name);
    out.push('}');
}
