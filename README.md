# README

# アプリケーション名
`殿を守れ`

# アプリケーション概要
`殿様の命を狙って城に侵入してくる忍者を倒すゲーム`

# Ruby version
`ruby '2.6.5'`

# DB設計
![db_plan.drawio](db_plan.drawio.svg)

# 画面遷移図
![page_transition.drawio](page_transition.drawio.svg)


# テーブル設計

## users テーブル

| Column              | Type    | Options                   |
| ------------------- | ------- | ------------------------- |
| nickname            | string  | null: false, unique: true |
| email               | string  | null: false, unique: true |
| encrypted_password  | string  | null: false               |

### Association

- has_one :game


## games テーブル

| Column              | Type       | Options                         |
| ------------------- | ---------- | ------------------------------- |
| score               | string     | null: false                     |
| hi-score            | string     | null: false                     |
| user                | references | null: false, foreign_key: true  |

### Association

- belongs_to :user

