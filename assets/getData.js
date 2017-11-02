import data from './data.json'

/*
	走近安厨
*/
export const indexData = () => { 			// 首页 安厨简介
  return data.index
}
export const ideaData = () => {				// 安厨理念
	return data.idea
}
export const eventData = () => {			// 安厨事记
	return data.event
}
export const storyData = () => {			// 安厨故事
	return data.story
}
export const storyList = () => {			// 安厨故事详情
	return data.story.storyList
	// console.log(data.story.storyList)
}

/*
	安厨严选
*/
export const elaborateData = () => {		// 精雕细琢
  return data.elaborate
}
export const storageData = () => {			// 仓储服务
  return data.storage
}

/*
	底部footer
*/
export const footerData = () => {
  return data.footer
}