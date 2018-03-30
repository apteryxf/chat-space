class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message  = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message  = Message.new(message_params)
    # @message = @group.messages.new
    if @message.save
      redirect_to group_messages_path(@group), notice: 'メッセージを送信しました'
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください'
      render :index
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def set_group
    @groups = current_user.groups
    @group  = Group.find(params[:group_id])
  end
end
