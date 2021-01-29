import React, { Component } from "react"

class TaskForm extends Component {
	onClick = (event) => {
		this.props.receiveDataFromTaskForm(0);
	}
	render() {
		return (
			<div class="panel panel-warning">
				<div class="panel-heading">
					<h3 class="panel-title">Thêm Công Việc</h3>
					<i class="fas fa-window-close" onClick={this.onClick}></i>
				</div>



				<div class="panel-body">
					<form>
						<div class="form-group">
							<label>Tên :</label>
							<input type="text" class="form-control" />
						</div>
						<label>Trạng Thái :</label>
						<select class="form-control" required="required">
							<option value="1">Kích Hoạt</option>
							<option value="0">Ẩn</option>
						</select>
						<br />
						<div class="text-center">
							<button type="submit" class="btn btn-warning">Thêm</button>&nbsp;
                        	<button type="submit" class="btn btn-danger">Hủy Bỏ</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default TaskForm
