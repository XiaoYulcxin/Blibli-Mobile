export default {
	getData(obj,total = 10){
		if(Array.isArray(obj)){
			let arr = []
			obj.forEach((item,index)=>{
				for (var i = 0; i < total; i++) {
					arr.push(item)
				}
			})
			return arr
		}
		let arr = []
		for (var i = 0; i < total; i++) {
			arr.push(obj)
		}
		return arr
	},
	getSwiper(){
		return this.getData([
			{
				url: 'https://i0.hdslb.com/bfs/archive/2723b99835a41c96602b91ab1147f8a4f7638521.png@880w_388h_1c_95q',
				title:"炸裂！超长最终集，打响巅峰战"
			},
			{
				url: 'https://i0.hdslb.com/bfs/sycp/creative_img/202007/82fc58598ae95ab47d20e241f9b89dff.jpg@880w_388h_1c_95q',
				title:"出发吧，AT全开！"
			},
			{
				url:"https://i0.hdslb.com/bfs/archive/431abad8f1b385e9387e0d7cc3819e0edbcc12f8.jpg@480w_300h.webp",
				title:"12月投递4个vlog，瓜分50万"
			}
		],1)
	},
	getListOne(total = 1){
		return this.getData([{
			cover:"https://i1.hdslb.com/bfs/archive/9762eba75d4e0f65c6f53d9680e8d8efb2b91f3f.jpg@320w_200h.webp",
			title:"我租了个日本小姐姐陪我谈了三个钟头的恋爱！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		},{
			cover:"https://i2.hdslb.com/bfs/archive/b76d58ac1fcbe3ff1938d5a73a70fc2d3ea7098b.jpg@320w_200h.webp",
			title:"【古力娜扎＆朱丹】灭掉世界的穷哈（歌剧2）",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		},{
			cover:"https://i1.hdslb.com/bfs/archive/18d27554a103dacbd4e2ba80d817ca26c157454d.jpg@320w_200h.webp",
			title:"治愈系日文版《好想爱这个世界啊》翻唱 「华晨宇」！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		},{
			cover:"https://i1.hdslb.com/bfs/archive/dac0c10a58509149bab0b80064e4bcf7c0834011.jpg@320w_200h.webp",
			title:"【巫师】血腥捕食的LV资本帝国，【资本战争04】",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		},{
			cover:"https://i0.hdslb.com/bfs/archive/84cdd45ac87b7f1bdd1a7b4b8b0f168ec8e301d3.jpg@320w_200h.webp",
			title:"工  具  人",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		},{
			cover:"https://i0.hdslb.com/bfs/archive/026b714d84db1615b6e9889e83807c50d2e03122.jpg@320w_200h.webp",
			title:"只带一个锅能白嫖一顿火锅吗？阴阳怪气陪你过平安夜！！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
		}],total)
	},
	getListTwo(total = 1){
		return this.getData([{
			cover:"https://i1.hdslb.com/bfs/archive/9762eba75d4e0f65c6f53d9680e8d8efb2b91f3f.jpg@320w_200h.webp",
			title:"我租了个日本小姐姐陪我谈了三个钟头的恋爱！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"https://i2.hdslb.com/bfs/archive/b76d58ac1fcbe3ff1938d5a73a70fc2d3ea7098b.jpg@320w_200h.webp",
			title:"【古力娜扎＆朱丹】灭掉世界的穷哈（歌剧2）",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"创意"
		},{
			cover:"https://i1.hdslb.com/bfs/archive/18d27554a103dacbd4e2ba80d817ca26c157454d.jpg@320w_200h.webp",
			title:"治愈系日文版《好想爱这个世界啊》翻唱 「华晨宇」！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"娱乐"
		},{
			cover:"https://i1.hdslb.com/bfs/archive/dac0c10a58509149bab0b80064e4bcf7c0834011.jpg@320w_200h.webp",
			title:"【巫师】血腥捕食的LV资本帝国，【资本战争04】",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"https://i0.hdslb.com/bfs/archive/84cdd45ac87b7f1bdd1a7b4b8b0f168ec8e301d3.jpg@320w_200h.webp",
			title:"工  具  人",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"https://i0.hdslb.com/bfs/archive/026b714d84db1615b6e9889e83807c50d2e03122.jpg@320w_200h.webp",
			title:"只带一个锅能白嫖一顿火锅吗？阴阳怪气陪你过平安夜！！",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		}],total)
	},
	getListThree(total = 1){
		return this.getData([{
			cover:"/static/demo/datapic/1.webp",
			title:"鬼灭之刃",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"/static/demo/datapic/2.webp",
			title:"动物狂想曲",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"创意"
		},{
			cover:"/static/demo/datapic/3.webp",
			title:"入间同学",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"娱乐"
		},{
			cover:"/static/demo/datapic/4.webp",
			title:"幽冥诡匠",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"/static/demo/datapic/5.webp",
			title:"租借女友",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		},{
			cover:"/static/demo/datapic/6.webp",
			title:"天宫赐福",
			time:"今天10:20",
			play_count:"203.6万",
			danmu_count:"5910",
			cate:"恶搞"
		}],total)
	},
	getIconCate(total = 10){
		var min = 1;
		var max = 23;
		var rand = Math.floor(Math.random()*(max-min+1))+min;
		let url = "/static/demo/cate/1 ("+rand+").png"
		return this.getData({
			icon:url,
			name:"分类",
		},total)
	},
}