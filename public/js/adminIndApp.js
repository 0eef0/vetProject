const main = document.querySelector('#adminIndApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

async function getApplInfo() {
	try {
		const { data: { applications } } = await axios.get('/api/v1/applications');
		const curApp = applications.find(app => app._id === (new URLSearchParams(window.location.search)).get('_id'));
		main.innerHTML = `
			<div>
				<h1>Adopter Information</h1>
				<p>${'Lorem ipsum dolor sit amet consectetur, adipisicing elidddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddt. Fuga quos soluta, accusamus culpa, sunt sit mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis ipsa hic libero quis incidunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis ipsa hic libero quis incidunt ?'}</p>
			</div>
			<div>
				<h1>Pet Info</h1>
				<img alt="image stuff" />
				<p>${'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit mollitia laborum, atque aut recusandaeLorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis ipsa hic libero quis incidunt ?'}</p>
				<ul>
					${'<li>sdf</li><li>sdf</li>'}
				</ul>
				<div class="choice">
					<button>Accept</button>
					<button>Decline</button>
				</div>
			</div>
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()