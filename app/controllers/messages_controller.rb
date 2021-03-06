class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message  = Message.new
    @messages = @group.messages.includes(:user)
    @new_messages = @messages.search_with_id(params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end

  def create
    @message  = Message.new(message_params)
    if @message.save
      respond_to do |format|
        format.html { redirect_to group_messages_path(@group) }
        format.json
      end
      flash.now[:notice] = 'メッセージを送信しました'
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
