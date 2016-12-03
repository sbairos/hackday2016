
var Article = class Article {
	constructor(nam, comm, ur) {
		this.name = nam;
		this.comment = comm;
		this.url = ur;
	}

	changeComment(comm) {
		this.comment = comm;
	}
}

export default Article