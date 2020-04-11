
var deleteNode = null;
var editNode = null;
document.querySelectorAll('.fa-trash-o').forEach(item => {
	item.addEventListener('click', event => {
		deleteNode = event;
	})
});

function confirmDelete() {
	if (deleteNode) {
		deleteNode.target.offsetParent.setAttribute('class', 'd-none');
		deleteNode = null;
		$('#deleteModal').modal('hide')
	}
}

document.querySelectorAll('.fa-ellipsis-h').forEach(item => {
	item.addEventListener('click', event => {
		editNode = event.target.offsetParent.getAttribute('id');
		sessionStorage.setItem('postId', editNode);
	})
});


