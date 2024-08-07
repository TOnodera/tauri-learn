use reqwest;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Post {
    userId: u32,
    id: u32,
    title: String,
    body: String,
}

#[tauri::command]
pub async fn get_posts() -> Result<Vec<Post>, String> {
    let response = reqwest::get("https://jsonplaceholder.typicode.com/posts")
        .await
        .map_err(|e| e.to_string())?;
    let response_body = response.text().await.map_err(|e| e.to_string())?;
    let json = serde_json::from_str::<Vec<Post>>(&response_body).map_err(|e| e.to_string())?;
    Ok(json)
}
