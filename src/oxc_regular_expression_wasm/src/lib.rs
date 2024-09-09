// Silence erroneous warnings from Rust Analyser for `#[derive(Tsify)]`
#![allow(non_snake_case)]

use oxc::allocator::Allocator;
use oxc_regular_expression::{ParserOptions, PatternParser};
use serde::{Deserialize, Serialize};
use tsify::Tsify;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(getter_with_clone)]
#[derive(Default, Tsify)]
pub struct ParseReturn {
    #[tsify(type = "Pattern")]
    pub ast: JsValue,
}

#[derive(Debug, Default, Clone, Deserialize, Tsify)]
#[tsify(from_wasm_abi)]
#[serde(rename_all = "camelCase")]
pub struct ParseOptions {
    #[tsify(optional)]
    pub unicode_mode: Option<bool>,
    #[tsify(optional)]
    pub unicode_sets_mode: Option<bool>,
}

/// # Errors
/// Serde serialization error
#[wasm_bindgen(js_name = parsePattern)]
pub fn parse_pattern(
    source_text: &str,
    options: Option<ParseOptions>,
) -> Result<ParseReturn, serde_wasm_bindgen::Error> {
    let allocator = Allocator::default();
    let serializer = serde_wasm_bindgen::Serializer::json_compatible();

    let (unicode_mode, unicode_sets_mode) = options.map_or((false, false), |options| {
        (
            options.unicode_mode.unwrap_or(false),
            options.unicode_sets_mode.unwrap_or(false),
        )
    });

    let ast = PatternParser::new(
        &allocator,
        source_text,
        ParserOptions {
            span_offset: 0,
            unicode_mode,
            unicode_sets_mode,
        },
    )
    .parse()
    .map_err(|err| serde_wasm_bindgen::Error::new(err.to_string()))?
    .serialize(&serializer)
    .map_err(|err| serde_wasm_bindgen::Error::new(err.to_string()))?;

    Ok(ParseReturn { ast })
}
