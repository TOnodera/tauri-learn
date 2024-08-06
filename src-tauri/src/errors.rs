#[derive(Debug, thiserror::Error)]
pub enum CommandError {
    #[error("Http通信エラー: {}", .0)]
    Http(#[from] reqwest::Error),
}
