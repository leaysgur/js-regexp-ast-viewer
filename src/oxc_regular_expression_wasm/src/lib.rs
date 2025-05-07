// Silence erroneous warnings from Rust Analyser for `#[derive(Tsify)]`
#![allow(non_snake_case)]

use oxc::allocator::Allocator;
use oxc_estree::{CompactJSSerializer, ESTree };
use oxc_regular_expression::{LiteralParser, Options};
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(getter_with_clone)]
#[derive(Default, Tsify)]
pub struct ParseReturn {
    pub ast_json: String,
}

/// # Errors
/// Serde serialization error
#[wasm_bindgen(js_name = parsePattern)]
pub fn parse_pattern(
    pattern_text: &str,
    flags_text: &str,
) -> Result<ParseReturn, serde_wasm_bindgen::Error> {
    let allocator = Allocator::default();

    let ret = LiteralParser::new(
        &allocator,
        pattern_text,
        Some(flags_text),
        Options::default(),
    )
    .parse()
    .map_err(|err| serde_wasm_bindgen::Error::new(err.to_string()))?;

    // NOTE: This requires `JSON.parse()` from JS side,
    // but I'm not sure how to avoid it...
    let mut serializer = CompactJSSerializer::new();
    ret.serialize(&mut serializer);
    let ast_json = serializer.into_string();

    Ok(ParseReturn { ast_json })
}
