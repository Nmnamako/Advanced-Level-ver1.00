# gets キー入力待機になる

# nilは存在しない
# blankはnilに加えて「空の配列」「空白文字」の場合も「true」を返却する
# presentは「Ruby on Rails」のメソッドで、「nil」「空の配列」「空白文字」に対してfalseで返す
# emptyは「空の配列」「空白値」の場合にはtrueを返却するが、「nil」の場合はエラーが発生する

limit = 
# unless limit.nil? then
#   p "存在する"
# else
#   p "存在しない"
# end

# 比較演算子について
# <  右の方が大きい
# <= 右の方が大きい、等しい
# >  左の方が大きい
# >= 左の方が大きい、等しい
# == 左右が等しい
# != 左右が等しくない

# 理論演算子
# !  否定
# && どちらの条件も正しければtrue
# || どちらかの条件が正しければtrue

# 各式
# whileは繰り返し処理を行いたいときに使う、指定した条件式がtrueの間繰り返し実行される
dice = 0
# while dice != 6 do
#   dice = rand(1..6)
#   p dice
# end

# forも繰り返し処理を行う、forでは指定したオブジェクトから順に値を取り出す
# for i in 1..6 do
#   p i
# end

# eachはオブジェクト内の要素を順に取り出すメソッド
amounts = {"リンゴ"=>2, "イチゴ"=>5, "オレンジ"=>3}
amounts.each do |fruit, amount|  #ハッシュの内容を順にキーをfruit、値をamountに代入して繰り返す
  puts "#{fruit}は#{amount}個です。"
end

# breakは繰り返し処理を中断するために使う、while,for,eachで使用される


## メソッド関係