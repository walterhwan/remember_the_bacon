# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  before_destroy :destroy_tasks

  belongs_to :user
  has_many :tasks

  private
  
  def destroy_tasks
   self.tasks.destroy_all
  end
end
