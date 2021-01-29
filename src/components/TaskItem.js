import React, { Component } from "react";
class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td class="text-center">
          <span class={this.props.status === true ? 'label label-success' : 'label label-danger'}>
            {this.props.status === true ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-warning">
            Sửa
          </button>
          &nbsp;
          <button type="button" class="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;