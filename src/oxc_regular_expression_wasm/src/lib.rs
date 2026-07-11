use oxc_allocator::Allocator;
use oxc_regular_expression::{LiteralParser, Options};
use wasm_bindgen::prelude::*;

mod json;

#[wasm_bindgen(getter_with_clone)]
#[derive(Default)]
pub struct ParseReturn {
    pub ast_json: String,
}

/// # Errors
/// Regular expression parse error
#[wasm_bindgen(js_name = parsePattern)]
pub fn parse_pattern(pattern_text: &str, flags_text: &str) -> Result<ParseReturn, JsError> {
    let allocator = Allocator::default();

    let pattern = LiteralParser::new(
        &allocator,
        pattern_text,
        Some(flags_text),
        Options::default(),
    )
    .parse()
    .map_err(|err| JsError::new(&err.to_string()))?;

    // `oxc_regular_expression` no longer provides JSON(ESTree) serialization,
    // so serialize the AST by hand, keeping the same shape as before.
    // NOTE: This requires `JSON.parse()` from JS side,
    // but I'm not sure how to avoid it...
    let mut ast_json = String::new();
    json::pattern(&mut ast_json, &pattern);

    Ok(ParseReturn { ast_json })
}
