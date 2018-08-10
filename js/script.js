// Vueインスタンスを作成
var vm = new Vue({
	el: '#app',
	data: {
		// 配列が入る
		items: '',
		newItemTitle: '',
		newItemDetail: '',
		editItemTitle: '',
		editItemDetail: '',
		editIndex: '',
		postDate: '',
		show: false
	},
	methods: {
		saveItems: function(){
			localStorage.setItem('items', JSON.stringify(this.items));
		},
		loadItems: function(){
			this.items = JSON.parse(localStorage.getItem('items'));
				if( !this.items ){
					this.items = [];
				}
			},
		addItem: function(title, detail, index=""){
			if((title === "") || (detail === "")) {
				alert("入力してちょ");
				return false;
			}

			if (index === "") {
				this.items.push({
					title: title,
					detail: detail,
					postDate: new Date()
				});
			} else {
				this.items[index].title = title;
				this.items[index].detail = detail;
				this.items[index].postDate = new Date()
				this.show = !this.show;
			}
			this.newItemTitle = '';
			this.newItemDetail = '';
			this.saveItems();
		},
		deleteItem: function(index){
			this.items.splice(index, 1);
			this.saveItems();
		},
		showEditModal: function(index) {
			this.editItemTitle = this.items[index].title;
			this.editItemDetail = this.items[index].detail;
			this.editIndex = index;
			this.show = !this.show;
		},
		editCancel: function(){
			this.show = !this.show;
		}
	},
	mounted: function(){
		this.loadItems();
	},
})