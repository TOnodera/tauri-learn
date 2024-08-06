use reqwest;
use serde::{Deserialize, Serialize};
use tauri::Error;

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Post {
    user_id: u32,
    id: u32,
    title: String,
    body: String,
}

#[tauri::command]
pub async fn get_posts() -> Result<Vec<Post>, String> {
    let response = reqwest::get("https://jsonplaceholder.typicode.com/posts")
        .await
        .map_err(|e| e.to_string())?
        .json::<Vec<Post>>()
        .await
        .map_err(|e| e.to_string())?;
    Ok(response)
}
