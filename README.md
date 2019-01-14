# README

## DB設計

## users table

| Column | Type   | Options                   |
|:-------|:-------|:--------------------------|
| name   | string | null: false, unique: true |
| email  | string | null: false, unique: true |

- nameカラムにインデックスを貼る。

### Association

- has_many :groups, through: :members
- has_many :members
- has_many :messages

## members table

| Column   | Type    | Options                        |
|:---------|:--------|:-------------------------------|
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

- 両カラムにインデックスを貼る。

### Association
- belongs_to :group
- belongs_to :user

## groups table

| Column | Type   | Options      |
|:-------|:-------|:-------------|
| name   | string | null: false, |

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## messages table

| Column   | Type    | Options                        |
|:---------|:--------|:-------------------------------|
| body     | text    | null: false                    |
| image    | string  |                                |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :user
- belongs_to :group
