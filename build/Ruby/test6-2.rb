p "計算を始めます"
p "何回繰り返しますか？"

n = gets.to_i
puts "#{n}回繰り返します"

puts "1回目の計算"
puts "2つの値を入力してください"

a = gets.to_i
b = gets.to_i

i = 0
puts "計算結果を出力します"
while i != n do
  p a + b
  p a - b
  p a * b
  p a / b
  i += 1
end