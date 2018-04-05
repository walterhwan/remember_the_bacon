# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  list_id     :integer          not null
#  description :string           not null
#  due_date    :date
#  estimate    :integer
#  completed   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ApplicationRecord

  belongs_to :list
end
