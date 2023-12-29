import React from 'react';

class Freedom  extends React.Component {
  render() {
    return  <p>고개숙인 논밭의 열매</p>;
  }
}

class Rigged extends React.Component{
	render () {
		return (
			<section>
				<p>허수아비 팔 벌려 웃음짓고</p>
				<p>초가 지붕 둥근 박 꿈꿀 때</p>
				<Freedom />
				<p>노랗게 익어만 가는</p>
			</section>
		)
	}
}

export default Rigged;