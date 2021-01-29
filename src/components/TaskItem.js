import React, { Component } from "react";
class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Học lập trình</td>
        <td class="text-center">
          <span class="label label-success">
            Kích Hoạt
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