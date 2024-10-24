// Silence erroneous warnings from Rust Analyser for `#[derive(Tsify)]`
#![allow(non_snake_case)]

use oxc::allocator::Allocator;
use oxc_regular_expression::{LiteralParser, Options};
use serde::Serialize;
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(getter_with_clone)]
#[derive(Default, Tsify)]
pub struct ParseReturn {
    #[tsify(type = "Pattern")]
    pub ast: JsValue,
}

/// # Errors
/// Serde serialization error
#[wasm_bindgen(js_name = parsePattern)]
pub fn parse_pattern(
    pattern_text: &str,
    flags_text: &str,
) -> Result<ParseReturn, serde_wasm_bindgen::Error> {
    let allocator = Allocator::default();
    let serializer = serde_wasm_bindgen::Serializer::json_compatible();

    let ast = LiteralParser::new(
        &allocator,
        pattern_text,
        Some(flags_text),
        Options::default(),
    )
    .parse()
    .map_err(|err| serde_wasm_bindgen::Error::new(err.to_string()))?
    .serialize(&serializer)
    .map_err(|err| serde_wasm_bindgen::Error::new(err.to_string()))?;

    Ok(ParseReturn { ast })
}
