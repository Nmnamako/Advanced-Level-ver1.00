# メソッド解説

## indexは指定した文字などが何文字目にあるか数字で表記する
a = "ABCDEFGHIJKLMN"
p a.index("CD")
## 上記だと2番目に当たる(数字は0からスタート)

## any?は配列など中が全て偽ならfalseが返され、１つでも真があればtrueを返す
b = [0,1,2,3,4,5]
p b.any?(6)
## 上記では6があるか確認させ、falseが帰ってくる

