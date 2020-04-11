var posts = [
	{
		author: 'Srishti Gupta',
		post: {
			question: "'let' me be a 'const'(ant), not a 'var'(iable)!",
			answer: 'keywords can be used to declare a variable of any type(datatype) in JavaScript.Though all the three keywords are used for the same purpose, they are different.',
			comments: []
		}
	},
	{
		author: 'Colby Fayock',
		post: {
			question: "What is linting and how can it save you time?",
			answer: "One of the biggest challenges in software development is time. It’ssomething we can’t easily get moreof,but linting can help us make the most out of the time we have.",
			comments: []
		}
	},
	{
		author: 'Yazeed Bzadough',
		post: {
			question: "How to Get More Views on Your Tech Blog",
			answer: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog,YouTube channel, or Patreon.We all want to become stars, or at the very least, a recognizable name in the industry.",
			comments: []
		}
	},
	{
		author: 'Cedd Burge',
		post: {
			question: "How to write easily describable code",
			answer: 'When code is not describable using words, most people have to do some mental mapping to turn it in to words.This wastes mental energy, and you run the risk of getting the mapping wrong.Different people will map to different words, which leads to confusion when discussing the code',
			comments: []
		}
	},
	{
		author: 'Srishti Gupta',
		post: {
			question: "Everything you should know about ‘module’ & ‘require’ in Node.js",
			answer: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.",
			comments: []
		}
	}
]

var selectedPost = posts[5]; // default 
var postId = sessionStorage.getItem('postId');
if (postId) {
	postId = postId.split('--')[1];
}
selectedPost = posts[postId];
loadPost();
function loadPost() {
	if (selectedPost) {
		$('#posttitle p').text(selectedPost.post.question); // update the question
		$('#postauthor span').first().text(selectedPost.author);
		$('#postdescription').find('p').text(selectedPost.post.answer);
	}
}

function appendComment(comment) {
	var newcomment = '<div class="card"><div class="card-body">' + comment + '</div></div>';
	console.log(newcomment, comment)
	$('#allcomments').append(newcomment);
}
function addComment() {
	//selectedpost
	var comment = $('#postcontents').val();
	if (comment && comment.trim() !== '') {
		selectedPost && selectedPost.post.comments.push(comment);
		appendComment(comment);
	}
	$('#postcontents').val(''); // make the comment text field empty

}

function updateLike() {
	$('.like--btn').find('span').text('Liked');
	$('.like__this').text('1 person likes this!');
}

var isEdit = false;
function editPost() {
	isEdit = !isEdit;
	if (isEdit) {
		$('.editpost--btn').find('span').text('Save');
		$('.editpost--btn').find('i').removeClass('fa-pencil').addClass('fa-floppy-o');
		$('#posttitle').find('p').addClass('d-none');
		$('#posttitle').find('input').removeClass('d-none').val(selectedPost.post.question);
		$('#postdescription').find('p').addClass('d-none');
		$('#postdescription').find('textarea').removeClass('d-none').val(selectedPost.post.answer);
	}
	else {
		$('.editpost--btn').find('span').text('Edit');
		$('.editpost--btn').find('i').removeClass('fa-floppy-o').addClass('fa-pencil');
		$('#posttitle').find('p').removeClass('d-none');
		$('#posttitle').find('input').addClass('d-none');
		$('#postdescription').find('textarea').addClass('d-none');
		$('#postdescription').find('p').removeClass('d-none').text(selectedPost.post.answer);
	}
}