import React, { Component } from "react"

class Sort extends Component {
	render() {
		return (
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Sắp Xếp <i className="fa fa-caret-square-o-down ml-5"></i>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li>
						<a role="button">
							<i className="fa fa-sort-alpha-asc pr-5">
								Tên A-Z
                            </i>
						</a>
					</li>
					<li>
						<a role="button">
							<i className="fa fa-sort-alpha-desc pr-5">
								Tên Z-A
                            </i>
						</a>
					</li>
					<li role="separator" className="divider"></li>
					<li><a role="button">Trạng Thái Kích Hoạt</a></li>
					<li><a role="button">Trạng Thái Ẩn</a></li>
				</ul>
			</div>
		)
	}
}

export default Sort
