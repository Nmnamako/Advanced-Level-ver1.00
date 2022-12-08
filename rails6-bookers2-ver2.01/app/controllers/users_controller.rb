class UsersController < ApplicationController
  before_action :ensure_correct_user, only: [:update, :edit]
  def show
    @user = User.find(params[:id])
    @books = @user.books
    @book = Book.new
    
    #七日間の投稿記録
    @today_book = @books.created_today
    @yesterday_book = @books.created_yesterday
    @two_days_ago_book = @books.created_two_days_ago
    @three_days_ago_book = @books.created_three_days_ago
    @four_days_ago_book = @books.created_four_days_ago
    @five_days_ago_book = @books.created_four_days_ago
    @six_days_ago_book = @books.created_six_days_ago
    
    #今日と前日の投稿比率
    @comparison = @today_book.count.to_f / @yesterday_book.count.to_f * 100.to_f
    
    #今週と前週の投稿比率
    @this_week_book = @books.created_this_week
    @last_week_book = @books.created_last_week
    @week_comparison = @this_week_book.count.to_f / @last_week_book.count.to_f * 100.to_f
  end
  
    #サーチ追加
  def search
    user_books = User.find(params[:user_id]).books #user_idで取得したユーザーの本の一覧を取得
    created_time = params[:created_at] #created_timeにcreated_atを代入
    if created_time == ""
      @search_book = "日付が選択されていません"
    else
      @search_book = user_books.where(created_at: created_time.to_date.all_day).count
    end
  end
  
  
  def index
    @users = User.all
    @book = Book.new
  end
  
  def edit
    @user = User.find(params[:id])
    unless @user == current_user
      redirect_to user_path(@user.id)
    end
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user.id), notice: "You have updated user successfully."
    else
      render "edit"
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :introduction, :profile_image)
  end

  def ensure_correct_user
    @user = User.find(params[:id])
    unless @user == current_user
      redirect_to user_path(current_user)
    end
  end
end
